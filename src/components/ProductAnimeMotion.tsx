"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

export function ProductAnimeMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const links = Array.from(
      document.querySelectorAll<HTMLElement>(".product-filter-link")
    );
    const horizontalLines = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".anime-border-top, .anime-border-bottom"
      )
    );
    const verticalLines = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".anime-border-left, .anime-border-right"
      )
    );
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>(".anime-count")
    );

    if (links.length === 0) {
      return;
    }

    if (reduceMotion) {
      links.forEach((link) => {
        link.style.opacity = "";
        link.style.transform = "";
      });
      counters.forEach((counter) => {
        counter.textContent = counter.dataset.count ?? counter.textContent;
      });
      return;
    }

    links.forEach((link) => {
      link.style.opacity = "0";
      link.style.transform = "translateY(24px) scale(0.98)";
    });
    horizontalLines.forEach((line) => {
      line.style.transform = "scaleX(0)";
    });
    verticalLines.forEach((line) => {
      line.style.transform = "scaleY(0)";
    });
    counters.forEach((counter) => {
      counter.textContent = "0";
    });

    const activeAnimations: ReturnType<typeof animate>[] = [];
    const playIntro = () => {
      activeAnimations.push(animate(links, {
        opacity: [0, 1],
        translateY: [24, 0],
        scale: [0.98, 1],
        duration: 760,
        delay: stagger(90),
        ease: "outCubic",
      }));

      if (horizontalLines.length > 0) {
        activeAnimations.push(animate(horizontalLines, {
          scaleX: [0, 1],
          duration: 680,
          delay: stagger(75, { start: 220 }),
          ease: "inOutQuad",
        }));
      }

      if (verticalLines.length > 0) {
        activeAnimations.push(animate(verticalLines, {
          scaleY: [0, 1],
          duration: 680,
          delay: stagger(75, { start: 320 }),
          ease: "inOutQuad",
        }));
      }

      counters.forEach((counter, index) => {
        const target = Number(counter.dataset.count ?? 0);
        const state = { value: 0 };

        activeAnimations.push(animate(state, {
          value: target,
          duration: 900,
          delay: 260 + index * 120,
          ease: "outCubic",
          onUpdate: () => {
            counter.textContent = String(Math.round(state.value));
          },
          onComplete: () => {
            counter.textContent = String(target);
          },
        }));
      });
    };

    const trigger =
      links[0].closest(".product-family-overview, .product-filter-bar") ??
      links[0];

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          playIntro();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(trigger);

    return () => {
      observer.disconnect();
      activeAnimations.forEach((animation) => animation.revert());
    };
  }, []);

  return null;
}
