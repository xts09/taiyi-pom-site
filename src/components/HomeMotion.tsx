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
          ".manufacturing-base [data-slot='metric-item'], .section-motion-copy, .product-current-head, .product-disclosure, .selection-stepper, .flow-point, .operation-stack article, .factory-frame, .cta-ribbon, .certification-heading, .certificate-document, .home-inquiry-copy, .home-inquiry-panel, .global-footprint [data-slot='section-intro'] > *, .global-footprint .supply-map-shell, .global-footprint .export-market-panel, .global-footprint .export-market-summary > li, .qualification-sequence .qualification-heading > *, .qualification-sequence .qualification-steps li",
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            scaleX: 1,
            scaleY: 1,
            filter: "none",
          },
        );
        gsap.set(".global-footprint .export-map-route", { strokeDashoffset: 0 });
        gsap.set(".qualification-sequence .qualification-progress-fill", {
          scaleX: 1,
          scaleY: 1,
        });
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
      let productMotionComplete = false;

      if (productSection && productHead && productRows.length > 0) {
        gsap.set(productHead, { x: -18, y: 4 });
        gsap.set(productRows, { x: 18, y: 5 });

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
              { x: -18, y: 4 },
              {
                x: 0,
                y: 0,
                duration: 0.38,
              },
            )
            .fromTo(
              productRows,
              { x: 18, y: 5 },
              {
                x: 0,
                y: 0,
                duration: 0.34,
                stagger: 0.035,
              },
              "-=0.2",
            );
        });

        playWhenScreenVisible(productSection, playProductMotion);
      }

      const qualificationSection = root?.querySelector<HTMLElement>(
        ".qualification-sequence",
      );
      const qualificationHeadingParts = qualificationSection
        ? gsap.utils.toArray<HTMLElement>(
            ".qualification-heading > *",
            qualificationSection,
          )
        : [];
      const qualificationSteps = qualificationSection
        ? gsap.utils.toArray<HTMLElement>(
            ".qualification-steps li",
            qualificationSection,
          )
        : [];
      const qualificationProgress = qualificationSection?.querySelector<HTMLElement>(
        ".qualification-progress-fill",
      );

      if (
        qualificationSection &&
        qualificationHeadingParts.length > 0 &&
        qualificationSteps.length > 0 &&
        qualificationProgress
      ) {
        gsap.set(qualificationHeadingParts, { y: 16 });
        gsap.set(qualificationSteps, { y: 18 });
        gsap.set(qualificationProgress, {
          scaleX: 1,
          scaleY: 0,
        });

        const playQualificationMotion = safeCallback(() => {
          gsap
            .timeline({ defaults: { ease: "power3.out", overwrite: true } })
            .to(qualificationHeadingParts, {
              y: 0,
              duration: 0.48,
              stagger: 0.08,
            })
            .to(
              qualificationProgress,
              {
                scaleY: 1,
                duration: 0.78,
                ease: "power2.inOut",
              },
              "-=0.12",
            )
            .to(
              qualificationSteps,
              {
                y: 0,
                duration: 0.42,
                stagger: 0.06,
              },
              "-=0.6",
            );
        });

        playWhenScreenVisible(qualificationSection, playQualificationMotion);
      }

      const globalFootprintSection = root?.querySelector<HTMLElement>(
        ".global-footprint",
      );
      const globalFootprintHeadingParts = globalFootprintSection
        ? gsap.utils.toArray<HTMLElement>(
            "[data-slot='section-intro'] > *",
            globalFootprintSection,
          )
        : [];
      const supplyMapShell = globalFootprintSection?.querySelector<HTMLElement>(
        ".supply-map-shell",
      );
      const exportMarketPanel = globalFootprintSection?.querySelector<HTMLElement>(
        ".export-market-panel",
      );
      const exportMarketRows = globalFootprintSection
        ? gsap.utils.toArray<HTMLElement>(
            ".export-market-summary > li",
            globalFootprintSection,
          )
        : [];
      const exportMapRoutes = globalFootprintSection
        ? gsap.utils.toArray<SVGPathElement>(
            ".export-map-route",
            globalFootprintSection,
          )
        : [];

      if (
        globalFootprintSection &&
        globalFootprintHeadingParts.length > 0 &&
        supplyMapShell &&
        exportMarketPanel
      ) {
        gsap.set(globalFootprintHeadingParts, { y: 16 });
        gsap.set(supplyMapShell, { x: -18 });
        gsap.set(exportMarketPanel, { x: 18 });
        gsap.set(exportMarketRows, { y: 12 });
        gsap.set(exportMapRoutes, {
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
        });

        const playGlobalFootprintMotion = safeCallback(() => {
          gsap
            .timeline({ defaults: { ease: "power3.out", overwrite: true } })
            .to(globalFootprintHeadingParts, {
              y: 0,
              duration: 0.44,
              stagger: 0.08,
            })
            .to(
              supplyMapShell,
              {
                x: 0,
                duration: 0.5,
              },
              "-=0.18",
            )
            .to(
              exportMarketPanel,
              {
                x: 0,
                duration: 0.5,
              },
              "-=0.34",
            )
            .to(
              exportMarketRows,
              {
                y: 0,
                duration: 0.4,
                stagger: 0.05,
              },
              "-=0.14",
            )
            .to(
              exportMapRoutes,
              {
                strokeDashoffset: 0,
                duration: 0.72,
                stagger: 0.08,
              },
              "-=0.28",
            );
        });

        playWhenScreenVisible(globalFootprintSection, playGlobalFootprintMotion);
      }

      const certificationSection = root?.querySelector<HTMLElement>(
        ".quality-systems-section",
      );
      const certificationHeading = certificationSection?.querySelector<HTMLElement>(
        ".certification-heading",
      );
      const certificateDocuments = certificationSection
        ? gsap.utils.toArray<HTMLElement>(
            ".certificate-document",
            certificationSection,
          )
        : [];

      if (
        certificationSection &&
        certificationHeading &&
        certificateDocuments.length > 0
      ) {
        gsap.set(certificationHeading, { autoAlpha: 0.72, y: 12 });
        gsap.set(certificateDocuments, { autoAlpha: 0.72, y: 18 });

        const playCertificationMotion = safeCallback(() => {
          gsap
            .timeline({ defaults: { ease: "power3.out", overwrite: true } })
            .to(certificationHeading, {
              autoAlpha: 1,
              y: 0,
              duration: 0.48,
            })
            .to(
              certificateDocuments,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.46,
                stagger: 0.06,
              },
              "-=0.24",
            );
        });

        playWhenScreenVisible(certificationSection, playCertificationMotion);
      }

      const inquirySection = root?.querySelector<HTMLElement>(".home-inquiry");
      const inquiryCopy = inquirySection?.querySelector<HTMLElement>(
        ".home-inquiry-copy",
      );
      const inquiryPanel = inquirySection?.querySelector<HTMLElement>(
        ".home-inquiry-panel",
      );

      if (inquirySection && inquiryCopy && inquiryPanel) {
        gsap.set(inquiryCopy, { autoAlpha: 0.76, x: -14 });
        gsap.set(inquiryPanel, { autoAlpha: 0.76, x: 14 });

        const playInquiryMotion = safeCallback(() => {
          gsap
            .timeline({ defaults: { ease: "power3.out", overwrite: true } })
            .to(inquiryCopy, {
              autoAlpha: 1,
              x: 0,
              duration: 0.52,
            })
            .to(
              inquiryPanel,
              {
                autoAlpha: 1,
                x: 0,
                duration: 0.52,
              },
              "-=0.34",
            );
        });

        playWhenScreenVisible(inquirySection, playInquiryMotion);
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
