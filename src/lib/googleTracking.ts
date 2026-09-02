const defaultGoogleAnalyticsId =
  process.env.NODE_ENV === "production" ? "G-CQ8CYP39VN" : "";

const defaultGoogleAdsId =
  process.env.NODE_ENV === "production" ? "AW-18381447688" : "";

const productionGoogleTagHostname = "www.taiyipolymer.com";

export const googleAnalyticsId =
  process.env.NODE_ENV === "production"
    ? (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ??
      process.env.NEXT_PUBLIC_GA_ID ??
      defaultGoogleAnalyticsId)
    : "";

export const googleAdsId =
  process.env.NODE_ENV === "production"
    ? (process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? defaultGoogleAdsId)
    : "";

export const googleAdsLeadConversionLabel =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL ?? "";

export const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const googleTagId = googleAnalyticsId || googleAdsId;

export const isGoogleTagHostnameAllowed = (hostname: string) =>
  hostname.toLowerCase() === productionGoogleTagHostname;

export const googleConsentDefaultScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag("consent", "default", {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  wait_for_update: 500
});
gtag("set", "ads_data_redaction", true);
`.trim();

export const googleTagConfigIds = Array.from(
  new Set([googleAnalyticsId, googleAdsId].filter(Boolean)),
);
