export const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ??
  process.env.NEXT_PUBLIC_GA_ID ??
  "";

export const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";

export const googleAdsLeadConversionLabel =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL ?? "";

export const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const googleTagId = googleAnalyticsId || googleAdsId;

export const googleTagConfigIds = Array.from(
  new Set([googleAnalyticsId, googleAdsId].filter(Boolean)),
);

