"use client";

import {
  googleAdsId,
  googleAdsLeadConversionLabel,
} from "@/lib/googleTracking";

type GtagCommand = "event";

type Gtag = (
  command: GtagCommand,
  eventName: string,
  eventParameters?: Record<string, string | number | boolean>,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

const hasGtag = () => typeof window !== "undefined" && typeof window.gtag === "function";

export function trackInquirySubmitted(method: "server_email") {
  if (!hasGtag()) {
    return;
  }

  window.gtag?.("event", "generate_lead", {
    form_name: "material_requirement",
    method,
  });

  if (googleAdsId && googleAdsLeadConversionLabel) {
    window.gtag?.("event", "conversion", {
      send_to: `${googleAdsId}/${googleAdsLeadConversionLabel}`,
    });
  }
}

export function trackInquiryFallback(method: "mailto_draft") {
  if (!hasGtag()) {
    return;
  }

  window.gtag?.("event", "contact_fallback", {
    form_name: "material_requirement",
    method,
  });
}

