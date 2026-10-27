"use client";

import { useSyncExternalStore } from "react";
import { clearMarketingAttribution } from "@/lib/analyticsAttribution";

export const GOOGLE_ANALYTICS_CONSENT_KEY = "taiyi_google_analytics_consent";
export const GOOGLE_CONSENT_PREFERENCES_KEY = "taiyi_google_consent_v2";
export const GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT = "taiyi:google-analytics-consent-change";
export const GOOGLE_ANALYTICS_CONSENT_OPEN_EVENT = "taiyi:open-google-analytics-consent";

export type GoogleAnalyticsConsent = "granted" | "denied";
export type GoogleAnalyticsConsentSnapshot = GoogleAnalyticsConsent | "loading" | null;
export type GoogleConsentPreferences = {
  analytics: GoogleAnalyticsConsent;
  advertising: GoogleAnalyticsConsent;
};

// Stable snapshots keep useSyncExternalStore from repeatedly rendering a parsed object.
const snapshots: GoogleConsentPreferences[] = [
  { analytics: "denied", advertising: "denied" },
  { analytics: "granted", advertising: "denied" },
  { analytics: "denied", advertising: "granted" },
  { analytics: "granted", advertising: "granted" },
];
let inMemoryPreferences: GoogleConsentPreferences | undefined;
let inMemoryAnalytics: GoogleAnalyticsConsent | undefined;

const isChoice = (value: unknown): value is GoogleAnalyticsConsent =>
  value === "granted" || value === "denied";

function canonicalPreferences(value: GoogleConsentPreferences) {
  return snapshots[(value.analytics === "granted" ? 1 : 0) + (value.advertising === "granted" ? 2 : 0)];
}

export function readGoogleConsentPreferences(): GoogleConsentPreferences | null {
  if (inMemoryPreferences) return inMemoryPreferences;
  try {
    const raw = window.localStorage.getItem(GOOGLE_CONSENT_PREFERENCES_KEY);
    if (!raw) return null;
    const value: unknown = JSON.parse(raw);
    if (typeof value !== "object" || value === null || !("version" in value) || value.version !== 2 ||
      !("analytics" in value) || !isChoice(value.analytics) ||
      !("advertising" in value) || !isChoice(value.advertising)) return null;
    return canonicalPreferences({ analytics: value.analytics, advertising: value.advertising });
  } catch {
    return null;
  }
}

export function readGoogleAnalyticsConsent(): GoogleAnalyticsConsent | null {
  const preferences = readGoogleConsentPreferences();
  if (preferences) return preferences.analytics;
  if (inMemoryAnalytics) return inMemoryAnalytics;
  try {
    const value = window.localStorage.getItem(GOOGLE_ANALYTICS_CONSENT_KEY);
    return isChoice(value) ? value : null;
  } catch {
    return null;
  }
}

export function readGoogleAdvertisingConsent(): GoogleAnalyticsConsent {
  return readGoogleConsentPreferences()?.advertising ?? "denied";
}

function subscribeToConsent(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== GOOGLE_CONSENT_PREFERENCES_KEY && event.key !== GOOGLE_ANALYTICS_CONSENT_KEY) return;
    inMemoryPreferences = undefined;
    inMemoryAnalytics = undefined;
    onStoreChange();
  };
  window.addEventListener(GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function useGoogleConsentPreferences(): GoogleConsentPreferences | "loading" | null {
  return useSyncExternalStore<GoogleConsentPreferences | "loading" | null>(subscribeToConsent, readGoogleConsentPreferences, () => "loading");
}

export function useGoogleAnalyticsConsent(): GoogleAnalyticsConsentSnapshot {
  return useSyncExternalStore(subscribeToConsent, readGoogleAnalyticsConsent, () => "loading");
}

export function useGoogleAdvertisingConsent(): GoogleAnalyticsConsentSnapshot {
  return useSyncExternalStore(subscribeToConsent, readGoogleAdvertisingConsent, () => "loading");
}

export function storeGoogleConsentPreferences(value: GoogleConsentPreferences) {
  inMemoryPreferences = canonicalPreferences(value);
  inMemoryAnalytics = value.analytics;
  try {
    window.localStorage.setItem(GOOGLE_CONSENT_PREFERENCES_KEY, JSON.stringify({ version: 2, ...inMemoryPreferences }));
    window.localStorage.setItem(GOOGLE_ANALYTICS_CONSENT_KEY, value.analytics);
  } catch {
    // The latest choice still applies on this page if persistence is blocked.
  }
  window.dispatchEvent(new CustomEvent(GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT));
}

export function storeGoogleAnalyticsConsent(value: GoogleAnalyticsConsent) {
  const preferences = readGoogleConsentPreferences();
  if (preferences) return storeGoogleConsentPreferences({ ...preferences, analytics: value });
  inMemoryAnalytics = value;
  try {
    window.localStorage.setItem(GOOGLE_ANALYTICS_CONSENT_KEY, value);
  } catch {
    // A legacy analytics choice never grants advertising permission.
  }
  window.dispatchEvent(new CustomEvent(GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT));
}

export function updateGoogleConsentPreferences(value: GoogleConsentPreferences) {
  window.gtag?.("consent", "update", {
    analytics_storage: value.analytics,
    ad_storage: value.advertising,
    ad_user_data: value.advertising,
    ad_personalization: "denied",
  });
}

export function updateGoogleAnalyticsConsent(value: GoogleAnalyticsConsent) {
  updateGoogleConsentPreferences({ analytics: value, advertising: readGoogleAdvertisingConsent() });
}

function clearCookies(prefix: string) {
  const names = document.cookie.split(";").map(cookie => cookie.split("=")[0]?.trim()).filter((name): name is string => Boolean(name?.startsWith(prefix)));
  const parts = window.location.hostname.split(".");
  const domains = ["", window.location.hostname];
  for (let index = 0; index < parts.length - 1; index++) domains.push(`.${parts.slice(index).join(".")}`);
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}; SameSite=Lax`;
    }
  }
}

export function clearGoogleAnalyticsCookies() {
  clearMarketingAttribution();
  clearCookies("_ga");
}

export function clearGoogleAdvertisingCookies() {
  clearCookies("_gcl_");
}
