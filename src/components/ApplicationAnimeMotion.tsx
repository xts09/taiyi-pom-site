"use client";

import { useEffect } from "react";
import { setupSecondarySectionNavMotion } from "@/components/secondarySectionNavMotion";

export function ApplicationAnimeMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(
      ".application-detail-shell",
    );

    if (!root) {
      return;
    }

    const sectionNav = root.querySelector<HTMLElement>(
      '[data-slot="secondary-section-nav"]',
    );
    if (!sectionNav) {
      return;
    }

    return setupSecondarySectionNavMotion({
      navHeightProperty: "--application-section-nav-height",
      root,
      sectionNav,
      showCompactActions: window.matchMedia("(min-width: 64rem)").matches,
      tabLinkSelector: '[data-slot="secondary-section-tabs"] a[href^="#"]',
    });
  }, []);

  return null;
}
