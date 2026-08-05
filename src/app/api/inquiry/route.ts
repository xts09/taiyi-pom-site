import { contactEmail as defaultContactEmail } from "@/lib/seo";
import { createInquiryHandler } from "@/lib/inquiry";

export const POST = createInquiryHandler({
  contactEmail: process.env.CONTACT_TO_EMAIL ?? defaultContactEmail,
  resendApiKey: process.env.RESEND_API_KEY,
  resendFromEmail: process.env.CONTACT_FROM_EMAIL,
});
