import { inquiryMessageMaxLength } from "./inquiryLimits.ts";

const maxRequestBodyBytes = 32 * 1024;
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const maxRateLimitBuckets = 500;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type InquiryPayload = {
  company?: string;
  email?: string;
  grade?: string;
  inquiryType?: string;
  intent?: string;
  material?: string;
  application?: string;
  message?: string;
  source?: string;
  website?: string;
};

type InquiryHandlerOptions = {
  contactEmail: string;
  resendApiKey?: string;
  resendFromEmail?: string;
  fetchImpl?: typeof fetch;
  now?: () => number;
};

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const cleanText = (
  value: unknown,
  fallback = "Not specified",
  maxLength = 240,
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

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });

export const createInquiryBody = (payload: InquiryPayload) =>
  [
    "New material requirement from taiyipolymer.com",
    "",
    `Company: ${cleanText(payload.company)}`,
    `Email: ${cleanText(payload.email, "Not specified", 254)}`,
    `Inquiry Type: ${cleanText(payload.inquiryType)}`,
    `CTA Intent: ${cleanText(payload.intent)}`,
    `Material Interest: ${cleanText(payload.material)}`,
    `Application / Part: ${cleanText(payload.application)}`,
    `Grade: ${cleanText(payload.grade)}`,
    `Source: ${cleanText(payload.source)}`,
    "",
    "Requirement Details:",
    cleanText(payload.message, "Not specified", inquiryMessageMaxLength),
  ].join("\n");

export const createInquiryHandler = ({
  contactEmail,
  resendApiKey,
  resendFromEmail,
  fetchImpl = fetch,
  now = Date.now,
}: InquiryHandlerOptions) => {
  const rateLimitBuckets = new Map<string, RateLimitBucket>();

  const isRateLimited = (key: string) => {
    const currentTime = now();
    const bucket = rateLimitBuckets.get(key);

    if (!bucket || bucket.resetAt <= currentTime) {
      rateLimitBuckets.set(key, {
        count: 1,
        resetAt: currentTime + rateLimitWindowMs,
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

  return async (request: Request) => {
    const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";

    if (!contentType.includes("application/json")) {
      return jsonResponse(
        { delivered: false, fallback: true, message: "JSON body is required." },
        415,
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? 0);

    if (contentLength > maxRequestBodyBytes) {
      return jsonResponse(
        {
          delivered: false,
          fallback: true,
          message: "Request body is too large.",
        },
        413,
      );
    }

    const clientIp = getClientIp(request.headers);

    if (clientIp && isRateLimited(`inquiry:${clientIp}`)) {
      return jsonResponse(
        {
          delivered: false,
          fallback: true,
          message: "Too many requests. Please try again later.",
        },
        429,
      );
    }

    let payload: InquiryPayload;

    try {
      const rawBody = await request.text();

      if (new TextEncoder().encode(rawBody).length > maxRequestBodyBytes) {
        return jsonResponse(
          {
            delivered: false,
            fallback: true,
            message: "Request body is too large.",
          },
          413,
        );
      }

      const parsedPayload = JSON.parse(rawBody);

      if (!isRecord(parsedPayload)) {
        return jsonResponse(
          {
            delivered: false,
            fallback: true,
            message: "Invalid request body.",
          },
          400,
        );
      }

      payload = parsedPayload;
    } catch {
      return jsonResponse(
        { delivered: false, fallback: true, message: "Invalid request body." },
        400,
      );
    }

    if (payload.website) {
      return jsonResponse({ delivered: true, spamFiltered: true });
    }

    const email = cleanText(payload.email, "", 254);

    if (!email || !emailPattern.test(email)) {
      return jsonResponse(
        { delivered: false, fallback: true, message: "Email is required." },
        400,
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
      return jsonResponse(
        {
          delivered: false,
          fallback: true,
          message: `Missing required fields: ${missingFields.join(", ")}.`,
        },
        400,
      );
    }

    const message = String(payload.message ?? "");

    if (message.length > inquiryMessageMaxLength) {
      return jsonResponse(
        {
          delivered: false,
          fallback: true,
          message: `Requirement details must be ${inquiryMessageMaxLength} characters or fewer.`,
        },
        400,
      );
    }

    if (!resendApiKey || !resendFromEmail) {
      return jsonResponse(
        {
          delivered: false,
          fallback: true,
          message: "Server email delivery is not configured.",
        },
        503,
      );
    }

    const body = createInquiryBody(payload);
    const subject = `Material Requirement Request - ${cleanText(payload.company)}`;

    let response: Response;

    try {
      response = await fetchImpl("https://api.resend.com/emails", {
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
      return jsonResponse(
        {
          delivered: false,
          fallback: true,
          message: "Email service is temporarily unavailable.",
        },
        502,
      );
    }

    if (!response.ok) {
      return jsonResponse(
        {
          delivered: false,
          fallback: true,
          message: "Email service rejected the request.",
        },
        502,
      );
    }

    return jsonResponse({ delivered: true, fallback: false });
  };
};
