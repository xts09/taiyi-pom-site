"use client";

import {
  googleAnalyticsId,
  googleAdsId,
  googleAdsLeadConversionLabel,
} from "@/lib/googleTracking";
import { readMarketingAttribution } from "@/lib/analyticsAttribution";
import { readGoogleAnalyticsConsent, readGoogleAdvertisingConsent } from "@/lib/googleConsent";

type GtagCommand = "consent" | "event" | "config" | "js" | "set";

type Gtag = (
  command: GtagCommand,
  eventName: string | Date,
  eventParameters?: Record<string, string | number | boolean>,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

const hasGtag = () =>
  typeof window !== "undefined" &&
  typeof window.gtag === "function";

function sendEvent(destination: string, name: string, parameters: Record<string, string | number | boolean> = {}) {
  if (!hasGtag() || !destination || (window as unknown as Record<string, unknown>)[`ga-disable-${destination}`] === true) return false;
  try {
    window.gtag?.("event", name, { ...parameters, send_to: destination });
    return true;
  } catch {
    // Optional measurement must never change inquiry delivery or its success UI.
    return false;
  }
}

function sendAnalyticsEvent(name: string, parameters: Record<string, string | number | boolean>) {
  return readGoogleAnalyticsConsent() === "granted" && sendEvent(googleAnalyticsId, name, parameters);
}

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
  sendAnalyticsEvent("contact_click", {
    contact_method: method,
    link_context: context,
    page_path: window.location.pathname,
    ...readLeadAttributionParameters(),
  });
}

export function trackDocumentDownload(fileName: string, context: string) {
  sendAnalyticsEvent("document_download", {
    file_name: fileName,
    link_context: context,
    page_path: window.location.pathname,
    ...readLeadAttributionParameters(),
  });
}

export function trackTechnicalDataClick(context: string) {
  sendAnalyticsEvent("technical_data_click", {
    link_context: context,
    page_path: window.location.pathname,
    ...readLeadAttributionParameters(),
  });
}

export function trackInquiryEntry(context: "footer" | "contact_page" | "page") {
  sendAnalyticsEvent("inquiry_entry", {
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
  return sendAnalyticsEvent(`inquiry_${stage}`, {
    form_name: "material_requirement",
    page_path: window.location.pathname,
    ...(stage === "error" && reason ? { error_reason: reason } : {}),
  });
}

export function trackInquiryFormMail() {
  if (readGoogleAdvertisingConsent() !== "granted") return;
  sendEvent(googleAdsId, "form_mail");
}

export function trackInquirySubmitted(method: "server_email") {
  sendAnalyticsEvent("generate_lead", {
    form_name: "material_requirement",
    method,
    ...readLeadAttributionParameters(),
  });

  if (readGoogleAdvertisingConsent() === "granted" && googleAdsId && googleAdsLeadConversionLabel &&
    (window as unknown as Record<string, unknown>)[`ga-disable-${googleAdsId}`] !== true) {
    sendEvent(`${googleAdsId}/${googleAdsLeadConversionLabel}`, "conversion");
  }
}

export function trackInquiryFallback(method: "mailto_draft") {
  sendAnalyticsEvent("contact_fallback", {
    form_name: "material_requirement",
    method,
    ...readLeadAttributionParameters(),
  });
}
