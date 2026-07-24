"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type HomeMotionProps = {
  children: ReactNode;
};

export function HomeMotion({ children }: HomeMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = rootRef.current;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        root?.classList.remove("is-home-motion-ready");
        root
          ?.querySelector<HTMLElement>(".selection-corridor")
          ?.classList.add("is-flow-active");
        gsap.set(
          ".hero-video, .hero-motion-kicker, .type-letter, .hero-motion-copy, .hero-motion-actions > *, .hero-review-card, .manufacturing-base .base-figure, .manufacturing-base .base-metric, .section-motion-copy, .product-current-head, .product-disclosure, .product-portfolio-explorer, .selection-stepper, .flow-point, .operation-stack article, .factory-frame, .cta-ribbon",
          { autoAlpha: 1, x: 0, y: 0, scale: 1, filter: "none" },
        );
        return;
      }

      const safeCallback = contextSafe ?? ((fn) => fn);
      const viewportTriggerCleanups: Array<() => void> = [];
      const playWhenScreenVisible = (
        target: HTMLElement | null | undefined,
        play: () => void,
        observerOptions?: IntersectionObserverInit,
      ) => {
        if (!target) {
          return;
        }

        let played = false;
        const playOnce = () => {
          if (played) {
            return;
          }

          played = true;
          play();
        };

        const ViewportObserver = window.IntersectionObserver;

        if (typeof ViewportObserver === "function") {
          const observer = new ViewportObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                observer.disconnect();
                playOnce();
              }
            },
            {
              root: null,
              rootMargin: "0px 0px -18% 0px",
              threshold: 0.16,
              ...observerOptions,
            },
          );

          observer.observe(target);
          viewportTriggerCleanups.push(() => observer.disconnect());
          return;
        }

        playOnce();
      };

      const heroVideo = root?.querySelector<HTMLVideoElement>(".hero-video");
      root?.classList.add("is-home-motion-ready");

      if (heroVideo) {
        const playHeroVideo = safeCallback(() => {
          heroVideo.play().catch(() => {
            // Autoplay can be blocked by the browser; the poster remains as fallback.
          });
        });

        playHeroVideo();
      }

      const productSection =
        rootRef.current?.querySelector<HTMLElement>(".product-current");
      const productHead = rootRef.current?.querySelector<HTMLElement>(
        ".product-current-head",
      );
      const productRows = gsap.utils.toArray<HTMLElement>(
        ".product-disclosure",
      );
      const productExplorer = rootRef.current?.querySelector<HTMLElement>(
        ".product-portfolio-explorer",
      );
      let productMotionComplete = false;

      if (productSection && productHead && productRows.length > 0) {
        gsap.set(productHead, { autoAlpha: 0, x: -18, y: 4 });
        gsap.set(productRows, { autoAlpha: 0, x: 18, y: 5 });

        const playProductMotion = safeCallback(() => {
          if (productMotionComplete) {
            return;
          }

          productMotionComplete = true;

          gsap
            .timeline({
              defaults: {
                ease: "power3.out",
                overwrite: true,
              },
            })
            .fromTo(
              productHead,
              { autoAlpha: 0, x: -18, y: 4 },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: 0.38,
              },
            )
            .fromTo(
              productRows,
              { autoAlpha: 0, x: 18, y: 5 },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: 0.34,
                stagger: 0.035,
              },
              "-=0.2",
            );
        });

        playWhenScreenVisible(productSection, playProductMotion);
      } else if (productSection && productHead && productExplorer) {
        gsap.set(productHead, { autoAlpha: 0, x: -18, y: 4 });
        gsap.set(productExplorer, { x: 18, y: 5 });

        const playProductMotion = safeCallback(() => {
          if (productMotionComplete) {
            return;
          }

          productMotionComplete = true;

          gsap
            .timeline({
              defaults: {
                ease: "power3.out",
                overwrite: true,
              },
            })
            .to(productHead, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.38,
            })
            .to(
              productExplorer,
              {
                x: 0,
                y: 0,
                duration: 0.36,
              },
              "-=0.18",
            );
        });

        playWhenScreenVisible(productSection, playProductMotion);
      }

      ScrollTrigger.refresh();
      ScrollTrigger.update();

      return () => {
        viewportTriggerCleanups.forEach((cleanup) => cleanup());

        root?.classList.remove("is-home-motion-ready");
      };
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="home-motion-root">
      {children}
    </div>
  );
}
