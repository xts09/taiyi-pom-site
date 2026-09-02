"use client";

import { useSyncExternalStore } from "react";
import { clearMarketingAttribution } from "@/lib/analyticsAttribution";

export const GOOGLE_ANALYTICS_CONSENT_KEY =
  "taiyi_google_analytics_consent";

export const GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT =
  "taiyi:google-analytics-consent-change";

export const GOOGLE_ANALYTICS_CONSENT_OPEN_EVENT =
  "taiyi:open-google-analytics-consent";

export type GoogleAnalyticsConsent = "granted" | "denied";
export type GoogleAnalyticsConsentSnapshot =
  | GoogleAnalyticsConsent
  | "loading"
  | null;

let inMemoryConsent: GoogleAnalyticsConsent | null = null;

function subscribeToGoogleAnalyticsConsent(onStoreChange: () => void) {
  window.addEventListener(
    GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT,
    onStoreChange,
  );
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(
      GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT,
      onStoreChange,
    );
    window.removeEventListener("storage", onStoreChange);
  };
}

export function useGoogleAnalyticsConsent(): GoogleAnalyticsConsentSnapshot {
  return useSyncExternalStore(
    subscribeToGoogleAnalyticsConsent,
    readGoogleAnalyticsConsent,
    () => "loading",
  );
}

export function readGoogleAnalyticsConsent(): GoogleAnalyticsConsent | null {
  try {
    const value = window.localStorage.getItem(GOOGLE_ANALYTICS_CONSENT_KEY);
    return value === "granted" || value === "denied"
      ? value
      : inMemoryConsent;
  } catch {
    return inMemoryConsent;
  }
}

export function storeGoogleAnalyticsConsent(
  value: GoogleAnalyticsConsent,
) {
  inMemoryConsent = value;

  try {
    window.localStorage.setItem(GOOGLE_ANALYTICS_CONSENT_KEY, value);
  } catch {
    // Consent still applies to the current page when storage is unavailable.
  }
}

export function updateGoogleAnalyticsConsent(
  value: GoogleAnalyticsConsent,
) {
  window.gtag?.("consent", "update", {
    analytics_storage: value,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function clearGoogleAnalyticsCookies() {
  clearMarketingAttribution();

  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith("_ga")));

  const domains = ["", window.location.hostname];
  const hostnameParts = window.location.hostname.split(".");
  if (hostnameParts.length >= 2) {
    domains.push(`.${hostnameParts.slice(-2).join(".")}`);
  }

  for (const name of cookieNames) {
    for (const domain of domains) {
      const domainPart = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}; SameSite=Lax`;
    }
  }
}
