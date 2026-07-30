import { NextResponse } from "next/server";

const contactEmail = process.env.CONTACT_TO_EMAIL ?? "sales@taiyiplastic.com";
const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.CONTACT_FROM_EMAIL;
const maxRequestBodyBytes = 32 * 1024;
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const maxRateLimitBuckets = 500;
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type InquiryPayload = {
  company?: string;
  email?: string;
  material?: string;
  application?: string;
  message?: string;
  website?: string;
};

const cleanText = (
  value: unknown,
  fallback = "Not specified",
  maxLength = 240
) => {
  const text = String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

  return text ? text.slice(0, maxLength) : fallback;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const getClientIp = (headers: Headers) =>
  headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
  headers.get("x-real-ip") ||
  null;

const isRateLimited = (key: string) => {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(key, {
      count: 1,
      resetAt: now + rateLimitWindowMs,
    });

    if (rateLimitBuckets.size > maxRateLimitBuckets) {
      const oldestKey = rateLimitBuckets.keys().next().value;

      if (oldestKey) {
        rateLimitBuckets.delete(oldestKey);
      }
    }

    return false;
  }

  if (bucket.count >= maxRequestsPerWindow) {
    return true;
  }

  bucket.count += 1;
  return false;
};

const createInquiryBody = (payload: InquiryPayload) => {
  return [
    "New material requirement from taiyiplastic.com",
    "",
    `Company: ${cleanText(payload.company)}`,
    `Email: ${cleanText(payload.email, "Not specified", 254)}`,
    `Material Interest: ${cleanText(payload.material)}`,
    `Application / Part: ${cleanText(payload.application)}`,
    "",
    "Requirement Details:",
    cleanText(payload.message, "Not specified", 2000),
  ].join("\n");
};

export async function POST(request: Request) {
  let payload: InquiryPayload;

  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { delivered: false, fallback: true, message: "JSON body is required." },
      { status: 415 }
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > maxRequestBodyBytes) {
    return NextResponse.json(
      { delivered: false, fallback: true, message: "Request body is too large." },
      { status: 413 }
    );
  }

  const clientIp = getClientIp(request.headers);

  if (clientIp && isRateLimited(`inquiry:${clientIp}`)) {
    return NextResponse.json(
      {
        delivered: false,
        fallback: true,
        message: "Too many requests. Please try again later.",
      },
      { status: 429 }
    );
  }

  try {
    const rawBody = await request.text();

    if (new TextEncoder().encode(rawBody).length > maxRequestBodyBytes) {
      return NextResponse.json(
        {
          delivered: false,
          fallback: true,
          message: "Request body is too large.",
        },
        { status: 413 }
      );
    }

    const parsedPayload = JSON.parse(rawBody);

    if (!isRecord(parsedPayload)) {
      return NextResponse.json(
        { delivered: false, fallback: true, message: "Invalid request body." },
        { status: 400 }
      );
    }

    payload = parsedPayload;
  } catch {
    return NextResponse.json(
      { delivered: false, fallback: true, message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (payload.website) {
    return NextResponse.json({ delivered: true, spamFiltered: true });
  }

  const email = cleanText(payload.email, "", 254);

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { delivered: false, fallback: true, message: "Email is required." },
      { status: 400 }
    );
  }

  const requiredFields = [
    ["company", payload.company],
    ["application", payload.application],
  ];
  const missingFields = requiredFields
    .filter(([, value]) => !cleanText(value, "", 240))
    .map(([field]) => field);

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        delivered: false,
        fallback: true,
        message: `Missing required fields: ${missingFields.join(", ")}.`,
      },
      { status: 400 }
    );
  }

  const body = createInquiryBody(payload);
  const subject = `Material Requirement Request - ${cleanText(payload.company)}`;

  if (!resendApiKey || !resendFromEmail) {
    return NextResponse.json({
      delivered: false,
      fallback: true,
      message: "Server email delivery is not configured.",
    });
  }

  let response: Response;

  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: contactEmail,
        reply_to: email,
        subject,
        text: body,
      }),
      signal: AbortSignal.timeout(8_000),
    });
  } catch {
    return NextResponse.json(
      {
        delivered: false,
        fallback: true,
        message: "Email service is temporarily unavailable.",
      },
      { status: 502 }
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      {
        delivered: false,
        fallback: true,
        message: "Email service rejected the request.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ delivered: true, fallback: false });
}
