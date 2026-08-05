const requiredVariables = [
  "NEXT_PUBLIC_SITE_URL",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
  "RESEND_API_KEY",
];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errors = [];
const warnings = [];

for (const variable of requiredVariables) {
  if (!process.env[variable]?.trim()) {
    errors.push(`${variable} is required.`);
  }
}

const siteUrlValue = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (siteUrlValue) {
  try {
    const siteUrl = new URL(siteUrlValue);

    if (siteUrl.protocol !== "https:") {
      errors.push("NEXT_PUBLIC_SITE_URL must use HTTPS.");
    }

    if (siteUrl.hostname !== "www.taiyipolymer.com") {
      errors.push("NEXT_PUBLIC_SITE_URL must use www.taiyipolymer.com.");
    }

    if (siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash) {
      errors.push("NEXT_PUBLIC_SITE_URL must not include a path, query, or hash.");
    }
  } catch {
    errors.push("NEXT_PUBLIC_SITE_URL must be a valid absolute URL.");
  }
}

const toEmail = process.env.CONTACT_TO_EMAIL?.trim();

if (toEmail && !emailPattern.test(toEmail)) {
  errors.push("CONTACT_TO_EMAIL must be a valid email address.");
}

const fromEmailValue = process.env.CONTACT_FROM_EMAIL?.trim();
const fromEmail = fromEmailValue?.match(/<([^<>]+)>$/)?.[1] ?? fromEmailValue;

if (fromEmail && !emailPattern.test(fromEmail)) {
  errors.push(
    "CONTACT_FROM_EMAIL must be an email address or Name <email@example.com>.",
  );
}

const resendApiKey = process.env.RESEND_API_KEY?.trim();

if (resendApiKey && !/^re_[A-Za-z0-9_-]{8,}$/.test(resendApiKey)) {
  errors.push("RESEND_API_KEY does not match the expected Resend key format.");
}

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

if (gaId && !/^G-[A-Z0-9]+$/.test(gaId)) {
  errors.push("NEXT_PUBLIC_GA_MEASUREMENT_ID must use the G- format.");
}

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
const adsLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL?.trim();

if (Boolean(adsId) !== Boolean(adsLabel)) {
  errors.push(
    "NEXT_PUBLIC_GOOGLE_ADS_ID and NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL must be configured together.",
  );
}

if (adsId && !/^AW-\d+$/.test(adsId)) {
  errors.push("NEXT_PUBLIC_GOOGLE_ADS_ID must use the AW- format.");
}

if (!gaId) {
  warnings.push("Google Analytics is not configured.");
}

if (!process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim()) {
  warnings.push("Google site verification is not configured.");
}

for (const warning of warnings) {
  console.warn(`Warning: ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`Error: ${error}`);
  }

  process.exitCode = 1;
} else {
  console.log("Production environment validation passed.");
}
