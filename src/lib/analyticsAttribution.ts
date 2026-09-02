export const marketingAttributionStorageKey =
  "taiyi_marketing_attribution_v1";

const marketingAttributionMaxAgeMs = 90 * 24 * 60 * 60 * 1000;
const maxAttributionValueLength = 512;

export const analyticsPageLocationParamNames = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "gad_source",
  "gad_campaignid",
] as const;

export type MarketingAttributionTouch = {
  capturedAt: string;
  landingPage: string;
  referrerHost?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  campaignId?: string;
  term?: string;
  content?: string;
  clickId?: string;
  clickIdType?: "gclid" | "gbraid" | "wbraid";
};

export type MarketingAttribution = {
  firstTouch: MarketingAttributionTouch;
  lastTouch: MarketingAttributionTouch;
};

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const cleanOptionalValue = (
  value: unknown,
  maxLength = maxAttributionValueLength,
) => {
  const normalized = String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

  return normalized ? normalized.slice(0, maxLength) : undefined;
};

const readReferrerHost = (referrer: string) => {
  if (!referrer) return undefined;

  try {
    return new URL(referrer).hostname || undefined;
  } catch {
    return undefined;
  }
};

const sanitizeTouch = (value: unknown): MarketingAttributionTouch | null => {
  if (!isRecord(value)) return null;

  const capturedAt = cleanOptionalValue(value.capturedAt, 64);
  const landingPage = cleanOptionalValue(value.landingPage, 512);
  const clickIdType =
    value.clickIdType === "gclid" ||
    value.clickIdType === "gbraid" ||
    value.clickIdType === "wbraid"
      ? value.clickIdType
      : undefined;

  if (!capturedAt || !landingPage) return null;

  return {
    capturedAt,
    landingPage,
    referrerHost: cleanOptionalValue(value.referrerHost, 255),
    source: cleanOptionalValue(value.source),
    medium: cleanOptionalValue(value.medium),
    campaign: cleanOptionalValue(value.campaign),
    campaignId: cleanOptionalValue(value.campaignId),
    term: cleanOptionalValue(value.term),
    content: cleanOptionalValue(value.content),
    clickId: cleanOptionalValue(value.clickId),
    clickIdType,
  };
};

export function sanitizeMarketingAttribution(
  value: unknown,
): MarketingAttribution | null {
  if (!isRecord(value)) return null;

  const firstTouch = sanitizeTouch(value.firstTouch);
  const lastTouch = sanitizeTouch(value.lastTouch);

  return firstTouch && lastTouch ? { firstTouch, lastTouch } : null;
}

export function parseMarketingAttribution(
  rawUrl: string,
  referrer = "",
  capturedAt = new Date().toISOString(),
): MarketingAttributionTouch | null {
  let url: URL;

  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }

  const params = url.searchParams;
  const clickIdEntry = (["gclid", "gbraid", "wbraid"] as const)
    .map((key) => [key, cleanOptionalValue(params.get(key))] as const)
    .find(([, value]) => Boolean(value));
  const touch: MarketingAttributionTouch = {
    capturedAt,
    landingPage: url.pathname || "/",
    referrerHost: readReferrerHost(referrer),
    source: cleanOptionalValue(params.get("utm_source")),
    medium: cleanOptionalValue(params.get("utm_medium")),
    campaign: cleanOptionalValue(params.get("utm_campaign")),
    campaignId: cleanOptionalValue(
      params.get("utm_id") ?? params.get("gad_campaignid"),
    ),
    term: cleanOptionalValue(params.get("utm_term")),
    content: cleanOptionalValue(params.get("utm_content")),
    clickId: clickIdEntry?.[1],
    clickIdType: clickIdEntry?.[0],
  };
  const hasMarketingSignal = Boolean(
    touch.source ||
      touch.medium ||
      touch.campaign ||
      touch.campaignId ||
      touch.term ||
      touch.content ||
      touch.clickId,
  );

  return hasMarketingSignal ? touch : null;
}

export function buildAnalyticsPageLocation(rawUrl: string) {
  let url: URL;

  try {
    url = new URL(rawUrl);
  } catch {
    return rawUrl;
  }

  const allowedNames = new Set<string>(analyticsPageLocationParamNames);
  for (const name of Array.from(url.searchParams.keys())) {
    if (!allowedNames.has(name)) {
      url.searchParams.delete(name);
    }
  }

  url.hash = "";
  return `${url.origin}${url.pathname}${url.search}`;
}

export function readMarketingAttribution(
  storage: StorageLike = window.localStorage,
  now = Date.now(),
): MarketingAttribution | null {
  try {
    const stored = storage.getItem(marketingAttributionStorageKey);
    if (!stored) return null;

    const attribution = sanitizeMarketingAttribution(JSON.parse(stored));
    const capturedAt = attribution
      ? Date.parse(attribution.lastTouch.capturedAt)
      : Number.NaN;

    if (
      !attribution ||
      !Number.isFinite(capturedAt) ||
      now - capturedAt > marketingAttributionMaxAgeMs
    ) {
      storage.removeItem(marketingAttributionStorageKey);
      return null;
    }

    return attribution;
  } catch {
    return null;
  }
}

export function captureMarketingAttribution(
  rawUrl = window.location.href,
  referrer = document.referrer,
  storage: StorageLike = window.localStorage,
) {
  const touch = parseMarketingAttribution(rawUrl, referrer);
  if (!touch) return readMarketingAttribution(storage);

  const existing = readMarketingAttribution(storage);
  const attribution: MarketingAttribution = {
    firstTouch: existing?.firstTouch ?? touch,
    lastTouch: touch,
  };

  try {
    storage.setItem(
      marketingAttributionStorageKey,
      JSON.stringify(attribution),
    );
  } catch {
    // Attribution is optional when browser storage is unavailable.
  }

  return attribution;
}

export function clearMarketingAttribution(
  storage: StorageLike = window.localStorage,
) {
  try {
    storage.removeItem(marketingAttributionStorageKey);
  } catch {
    // Consent revocation still applies to the current page.
  }
}
