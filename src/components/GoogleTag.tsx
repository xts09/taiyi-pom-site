"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  clearGoogleAnalyticsCookies,
  useGoogleAnalyticsConsent,
} from "@/lib/googleConsent";
import {
  GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE,
  GOOGLE_INTERNAL_TRAFFIC_QUERY_PARAMETER,
  GOOGLE_INTERNAL_TRAFFIC_STORAGE_KEY,
  resolveGoogleInternalTrafficDisabled,
} from "@/lib/googleInternalTraffic";
import {
  googleTagConfigIds,
  googleTagId,
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
  const [runtimeState, setRuntimeState] =
    useState<GoogleTagRuntimeState>("checking");

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

  if (
    !googleTagId ||
    consent !== "granted" ||
    runtimeState !== "enabled"
  ) {
    return null;
  }

  const configCalls = googleTagConfigIds
    .map(
      (id) =>
        `gtag("config", "${id}", { page_location: analyticsPageLocation, page_path: window.location.pathname });`,
    )
    .join("\n");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-tag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("consent", "update", {
  analytics_storage: "granted",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied"
});
gtag("js", new Date());
const allowedPageLocationParams = new Set(${JSON.stringify(
            analyticsPageLocationParamNames,
          )});
const analyticsPageUrl = new URL(window.location.href);
for (const name of Array.from(analyticsPageUrl.searchParams.keys())) {
  if (!allowedPageLocationParams.has(name)) analyticsPageUrl.searchParams.delete(name);
}
analyticsPageUrl.hash = "";
const analyticsPageLocation = analyticsPageUrl.toString();
${configCalls}
          `.trim(),
        }}
      />
    </>
  );
}
