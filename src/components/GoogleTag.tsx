"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import {
  clearGoogleAnalyticsCookies,
  clearGoogleAdvertisingCookies,
  useGoogleAnalyticsConsent,
  useGoogleAdvertisingConsent,
  updateGoogleConsentPreferences,
} from "@/lib/googleConsent";
import {
  GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE,
  GOOGLE_INTERNAL_TRAFFIC_QUERY_PARAMETER,
  GOOGLE_INTERNAL_TRAFFIC_STORAGE_KEY,
  resolveGoogleInternalTrafficDisabled,
} from "@/lib/googleInternalTraffic";
import {
  googleTagConfigIds,
  googleAnalyticsId,
  googleAdsId,
  isGoogleTagHostnameAllowed,
} from "@/lib/googleTracking";
import { analyticsPageLocationParamNames } from "@/lib/analyticsAttribution";

type GoogleTagRuntimeState = "checking" | "enabled" | "disabled";

let inMemoryInternalTrafficDisabled = false;

function readInternalTrafficPreference() {
  try {
    return window.localStorage.getItem(GOOGLE_INTERNAL_TRAFFIC_STORAGE_KEY);
  } catch {
    return inMemoryInternalTrafficDisabled
      ? GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE
      : null;
  }
}

function storeInternalTrafficPreference(disabled: boolean) {
  inMemoryInternalTrafficDisabled = disabled;

  try {
    if (disabled) {
      window.localStorage.setItem(
        GOOGLE_INTERNAL_TRAFFIC_STORAGE_KEY,
        GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE,
      );
    } else {
      window.localStorage.removeItem(GOOGLE_INTERNAL_TRAFFIC_STORAGE_KEY);
    }
  } catch {
    // The current page still respects the preference when storage is unavailable.
  }
}

function setGoogleTagDisabled(disabled: boolean) {
  const analyticsWindow = window as unknown as Record<string, unknown>;

  for (const id of googleTagConfigIds) {
    analyticsWindow[`ga-disable-${id}`] = disabled;
  }
}

export function GoogleTag() {
  const consent = useGoogleAnalyticsConsent();
  const advertisingConsent = useGoogleAdvertisingConsent();
  const [runtimeState, setRuntimeState] =
    useState<GoogleTagRuntimeState>("checking");
  const [loaderId, setLoaderId] = useState("");
  const initialized = useRef(false);
  const configured = useRef(new Set<string>());

  useEffect(() => {
    let cancelled = false;
    const currentUrl = new URL(window.location.href);
    const queryValue = currentUrl.searchParams.get(
      GOOGLE_INTERNAL_TRAFFIC_QUERY_PARAMETER,
    );
    const hasPreferenceCommand = queryValue === "1" || queryValue === "0";
    const internalTrafficDisabled = resolveGoogleInternalTrafficDisabled(
      queryValue,
      readInternalTrafficPreference(),
    );

    if (hasPreferenceCommand) {
      storeInternalTrafficPreference(internalTrafficDisabled);
      currentUrl.searchParams.delete(GOOGLE_INTERNAL_TRAFFIC_QUERY_PARAMETER);
      window.history.replaceState(
        window.history.state,
        "",
        `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`,
      );
    }

    const hostnameAllowed = isGoogleTagHostnameAllowed(
      window.location.hostname,
    );
    const shouldDisableGoogleTag =
      internalTrafficDisabled || !hostnameAllowed;

    setGoogleTagDisabled(shouldDisableGoogleTag);

    if (internalTrafficDisabled) {
      clearGoogleAnalyticsCookies();
      clearGoogleAdvertisingCookies();
    }

    queueMicrotask(() => {
      if (!cancelled) {
        setRuntimeState(shouldDisableGoogleTag ? "disabled" : "enabled");
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const analyticsAllowed = consent === "granted" && runtimeState === "enabled";
    const advertisingAllowed = advertisingConsent === "granted" && runtimeState === "enabled";
    const analyticsWindow = window as unknown as Record<string, unknown>;
    if (googleAnalyticsId) analyticsWindow[`ga-disable-${googleAnalyticsId}`] = !analyticsAllowed;
    if (googleAdsId) analyticsWindow[`ga-disable-${googleAdsId}`] = !advertisingAllowed;

    updateGoogleConsentPreferences({
      analytics: analyticsAllowed ? "granted" : "denied",
      advertising: advertisingAllowed ? "granted" : "denied",
    });
    if (consent === "denied" || runtimeState === "disabled") clearGoogleAnalyticsCookies();
    if (advertisingConsent === "denied" || runtimeState === "disabled") clearGoogleAdvertisingCookies();

    const allowedIds = [analyticsAllowed ? googleAnalyticsId : "", advertisingAllowed ? googleAdsId : ""].filter(Boolean);
    for (const id of configured.current) {
      if (!allowedIds.includes(id)) configured.current.delete(id);
    }
    if (!allowedIds.length) return;
    if (!initialized.current) {
      window.gtag?.("js", new Date());
      initialized.current = true;
    }
    const pageUrl = new URL(window.location.href);
    for (const name of Array.from(pageUrl.searchParams.keys())) {
      if (!(analyticsPageLocationParamNames as readonly string[]).includes(name)) pageUrl.searchParams.delete(name);
    }
    pageUrl.hash = "";
    for (const id of allowedIds) {
      if (configured.current.has(id)) continue;
      window.gtag?.("config", id, {
        page_location: pageUrl.toString(),
        page_path: window.location.pathname,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      configured.current.add(id);
    }
    let cancelled = false;
    queueMicrotask(() => { if (!cancelled) setLoaderId(current => current || allowedIds[0]); });
    return () => { cancelled = true; };
  }, [consent, advertisingConsent, runtimeState]);

  if (
    !loaderId ||
    (consent !== "granted" && advertisingConsent !== "granted") ||
    runtimeState !== "enabled"
  ) {
    return null;
  }

  return (
      <Script
        id="google-tag-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
  );
}
