"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";
import { setupSecondarySectionNavMotion } from "@/components/secondarySectionNavMotion";

export function ApplicationAnimeMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(
      ".application-detail-shell",
    );

    if (!root) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const heroCard = root.querySelector<HTMLElement>(".application-hero-card");
    const sectionNav = root.querySelector<HTMLElement>(
      ".application-section-nav",
    );
    const sections = Array.from(
      root.querySelectorAll<HTMLElement>("[data-application-motion]"),
    );

    const activeAnimations: ReturnType<typeof animate>[] = [];
    const cleanupSectionNav = sectionNav
      ? setupSecondarySectionNavMotion({
          navHeightProperty: "--application-section-nav-height",
          root,
          sectionNav,
          tabLinkSelector: '.application-section-tabs a[href^="#"]',
        })
      : () => {};

    if (heroCard) {
      heroCard.style.opacity = "";
      heroCard.style.transform = "";
    }

    if (reduceMotion) {
      sections.forEach((section) => {
        section.style.opacity = "";
        section.style.transform = "";
      });

      return () => {
        cleanupSectionNav();
      };
    }

    sections.forEach((section) => {
      const isContinuousBand = section.matches(
        ".application-scene-solution, .application-match-solution, .application-notes-material, .application-brief-cta",
      );

      if (isContinuousBand) {
        section.style.opacity = "";
        section.style.transform = "";
        return;
      }

      section.style.opacity = "0";
      section.style.transform = "translateY(24px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const section = entry.target as HTMLElement;
          const isContinuousBand = section.matches(
            ".application-scene-solution, .application-match-solution, .application-notes-material, .application-brief-cta",
          );
          const items = Array.from(
            section.querySelectorAll<HTMLElement>(
              "[data-application-motion-item]",
            ),
          );

          if (!isContinuousBand) {
            activeAnimations.push(
              animate(section, {
                opacity: [0, 1],
                translateY: [24, 0],
                duration: 660,
                ease: "outCubic",
              }),
            );
          }

          if (items.length > 0) {
            items.forEach((item) => {
              item.style.opacity = "0";
              item.style.transform = "translateY(16px)";
            });
            activeAnimations.push(
              animate(items, {
                opacity: [0, 1],
                translateY: [16, 0],
                duration: 540,
                delay: stagger(70, { start: 120 }),
                ease: "outCubic",
              }),
            );
          }

          observer.unobserve(section);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      cleanupSectionNav();
      observer.disconnect();
      activeAnimations.forEach((animation) => animation.revert());
    };
  }, []);

  return null;
}
