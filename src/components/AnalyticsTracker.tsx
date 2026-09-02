"use client";

import { useEffect } from "react";
import {
  captureMarketingAttribution,
  clearMarketingAttribution,
} from "@/lib/analyticsAttribution";
import {
  trackContactClick,
  trackDocumentDownload,
  trackTechnicalDataClick,
} from "@/lib/conversionEvents";
import { useGoogleAnalyticsConsent } from "@/lib/googleConsent";

const readLinkContext = (link: HTMLAnchorElement) => {
  if (link.closest("footer")) return "footer";
  if (window.location.pathname.includes("/contact")) return "contact_page";
  return "page";
};

export function AnalyticsTracker() {
  const consent = useGoogleAnalyticsConsent();

  useEffect(() => {
    if (consent === "denied") {
      clearMarketingAttribution();
      return;
    }

    if (consent !== "granted") return;

    captureMarketingAttribution();
  }, [consent]);

  useEffect(() => {
    if (consent !== "granted") return;

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      const href = link?.getAttribute("href")?.trim();
      if (!link || !href) return;

      const context = readLinkContext(link);
      const lowerHref = href.toLowerCase();

      if (lowerHref.startsWith("mailto:")) {
        trackContactClick("email", context);
        return;
      }

      if (lowerHref.startsWith("tel:")) {
        trackContactClick("phone", context);
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (
        url.hostname === "wa.me" ||
        url.hostname.endsWith(".whatsapp.com")
      ) {
        trackContactClick("whatsapp", context);
        return;
      }

      const fileName = url.pathname.split("/").filter(Boolean).at(-1) ?? "";
      if (link.hasAttribute("download") || /\.pdf$/i.test(url.pathname)) {
        trackDocumentDownload(fileName || "document", context);
        return;
      }

      if (url.pathname.includes("/technical-data-sheets")) {
        trackTechnicalDataClick(context);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [consent]);

  return null;
}
