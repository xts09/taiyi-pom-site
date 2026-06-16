import { NextResponse } from "next/server";

const contactEmail = process.env.CONTACT_TO_EMAIL ?? "xiatianshi@jstynm.com";
const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.CONTACT_FROM_EMAIL;

type InquiryPayload = {
  name?: string;
  company?: string;
  email?: string;
  region?: string;
  material?: string;
  application?: string;
  tooling?: string;
  shrinkage?: string;
  volume?: string;
  documents?: string[];
  message?: string;
  website?: string;
};

const cleanText = (value: unknown, fallback = "Not specified") => {
  const text = String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

  return text ? text.slice(0, 1200) : fallback;
};

const createInquiryBody = (payload: InquiryPayload) => {
  const documents =
    Array.isArray(payload.documents) && payload.documents.length > 0
      ? payload.documents.map((item) => cleanText(item, "")).filter(Boolean)
      : [];

  return [
    "New material requirement from taiyipom.com",
    "",
    `Name: ${cleanText(payload.name)}`,
    `Company: ${cleanText(payload.company)}`,
    `Email: ${cleanText(payload.email)}`,
    `Country / Region: ${cleanText(payload.region)}`,
    `Material Interest: ${cleanText(payload.material)}`,
    `Application / Part: ${cleanText(payload.application)}`,
    `Mold Stage / Cavity Count: ${cleanText(payload.tooling)}`,
    `Shrinkage / Warpage Concern: ${cleanText(payload.shrinkage)}`,
    `Annual Volume: ${cleanText(payload.volume)}`,
    `Required Documents: ${documents.join(", ") || "Not specified"}`,
    "",
    "Message:",
    cleanText(payload.message),
  ].join("\n");
};

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json(
      { delivered: false, fallback: true, message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (payload.website) {
    return NextResponse.json({ delivered: true, spamFiltered: true });
  }

  const email = cleanText(payload.email, "");

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { delivered: false, fallback: true, message: "Email is required." },
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

  const response = await fetch("https://api.resend.com/emails", {
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
  });

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
