"use client";

import {
  googleAdsId,
  googleAdsLeadConversionLabel,
} from "@/lib/googleTracking";
import { readMarketingAttribution } from "@/lib/analyticsAttribution";
import { readGoogleAnalyticsConsent } from "@/lib/googleConsent";

type GtagCommand = "consent" | "event";

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

const hasGtag = () =>
  typeof window !== "undefined" &&
  readGoogleAnalyticsConsent() === "granted" &&
  typeof window.gtag === "function";

const readLeadAttributionParameters = () => {
  const attribution = readMarketingAttribution();
  const touch = attribution?.lastTouch ?? attribution?.firstTouch;
  const parameters: Record<string, string | number | boolean> = {};

  if (touch?.source) parameters.lead_source = touch.source;
  if (touch?.medium) parameters.lead_medium = touch.medium;
  if (touch?.campaign) parameters.lead_campaign = touch.campaign;
  if (touch?.campaignId) parameters.lead_campaign_id = touch.campaignId;
  if (touch?.term) parameters.lead_term = touch.term;
  if (touch?.content) parameters.lead_content = touch.content;
  if (touch?.clickIdType) {
    parameters.ads_click_id_type = touch.clickIdType;
    parameters.has_ads_click_id = true;
  }

  return parameters;
};

export function trackContactClick(
  method: "email" | "phone" | "whatsapp",
  context: string,
) {
  if (!hasGtag()) return;

  window.gtag?.("event", "contact_click", {
    contact_method: method,
    link_context: context,
    page_path: window.location.pathname,
    ...readLeadAttributionParameters(),
  });
}

export function trackDocumentDownload(fileName: string, context: string) {
  if (!hasGtag()) return;

  window.gtag?.("event", "document_download", {
    file_name: fileName,
    link_context: context,
    page_path: window.location.pathname,
    ...readLeadAttributionParameters(),
  });
}

export function trackTechnicalDataClick(context: string) {
  if (!hasGtag()) return;

  window.gtag?.("event", "technical_data_click", {
    link_context: context,
    page_path: window.location.pathname,
    ...readLeadAttributionParameters(),
  });
}

export function trackInquiryEntry(context: "footer" | "contact_page" | "page") {
  if (!hasGtag()) return;

  window.gtag?.("event", "inquiry_entry", {
    link_context: context,
    page_path: window.location.pathname,
  });
}

export type InquiryErrorReason =
  | "network"
  | "timeout"
  | "invalid_response"
  | "rate_limited"
  | "delivery_unavailable"
  | "delivery_rejected";

export function trackInquiryFunnel(
  stage: "view" | "attempt" | "error",
  reason?: InquiryErrorReason,
) {
  if (!hasGtag()) return false;

  window.gtag?.("event", `inquiry_${stage}`, {
    form_name: "material_requirement",
    page_path: window.location.pathname,
    ...(stage === "error" && reason ? { error_reason: reason } : {}),
  });
  return true;
}

export function trackInquiryFormMail() {
  if (!hasGtag() || !googleAdsId) return;

  try {
    window.gtag?.("event", "form_mail", {
      send_to: googleAdsId,
    });
  } catch {
    // Optional Ads tracking must not prevent inquiry delivery.
  }
}

export function trackInquirySubmitted(method: "server_email") {
  if (!hasGtag()) {
    return;
  }

  window.gtag?.("event", "generate_lead", {
    form_name: "material_requirement",
    method,
    ...readLeadAttributionParameters(),
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
    ...readLeadAttributionParameters(),
  });
}
