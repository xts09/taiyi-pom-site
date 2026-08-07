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
    () => {
      const root = rootRef.current;
      if (!root) {
        return;
      }

      const heroVideo = root.querySelector<HTMLVideoElement>(".hero-video");
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        const qualificationProgress = root.querySelector<HTMLElement>(
          ".qualification-progress-fill",
        );
        const qualificationSteps = gsap.utils.toArray<HTMLElement>(
          ".qualification-steps li",
          root,
        );
        const exportMapRoutes = gsap.utils.toArray<SVGPathElement>(
          ".export-map-route",
          root,
        );

        heroVideo?.pause();

        if (qualificationProgress) {
          gsap.set(qualificationProgress, { scaleY: 1 });
        }

        gsap.set(qualificationSteps, {
          autoAlpha: 1,
          clearProps: "opacity,visibility,transform",
          y: 0,
        });
        gsap.set(exportMapRoutes, {
          strokeDasharray: 1000,
          strokeDashoffset: 0,
        });
      });

      media.add(
        {
          isDesktop:
            "(min-width: 48rem) and (prefers-reduced-motion: no-preference)",
          isMobile:
            "(max-width: 47.999rem) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { isMobile } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };
          const sectionTriggerStart = isMobile ? "top 82%" : "top 72%";
          const qualificationSection = root.querySelector<HTMLElement>(
            ".qualification-sequence",
          );
          const qualificationSteps = qualificationSection
            ? gsap.utils.toArray<HTMLElement>(
                ".qualification-steps li",
                qualificationSection,
              )
            : [];
          const qualificationProgress =
            qualificationSection?.querySelector<HTMLElement>(
              ".qualification-progress-fill",
            );
          const globalFootprintSection = root.querySelector<HTMLElement>(
            ".global-footprint",
          );
          const exportMapRoutes = globalFootprintSection
            ? gsap.utils.toArray<SVGPathElement>(
                ".export-map-route",
                globalFootprintSection,
              )
            : [];

          heroVideo?.play().catch(() => {
            // Autoplay can be blocked; the poster remains as the fallback.
          });

          if (
            qualificationSection &&
            qualificationProgress &&
            qualificationSteps.length > 0
          ) {
            gsap.set(qualificationProgress, {
              scaleY: 0,
              transformOrigin: "center top",
            });
            gsap.set(qualificationSteps, {
              autoAlpha: 0.88,
              y: isMobile ? 8 : 10,
            });

            gsap
              .timeline({
                defaults: { ease: "power2.out", overwrite: true },
                scrollTrigger: {
                  trigger: qualificationSection,
                  start: sectionTriggerStart,
                  once: true,
                },
              })
              .to(qualificationProgress, {
                clearProps: "transform",
                duration: isMobile ? 0.7 : 0.8,
                ease: "power2.inOut",
                scaleY: 1,
              })
              .to(
                qualificationSteps,
                {
                  autoAlpha: 1,
                  clearProps: "opacity,visibility,transform",
                  duration: 0.48,
                  stagger: { amount: 0.2 },
                  y: 0,
                },
                0.16,
              );
          }

          if (globalFootprintSection && exportMapRoutes.length > 0) {
            gsap.set(exportMapRoutes, {
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
            });

            gsap.to(exportMapRoutes, {
              duration: isMobile ? 0.64 : 0.72,
              ease: "power2.out",
              stagger: { amount: isMobile ? 0.22 : 0.28 },
              strokeDashoffset: 0,
              scrollTrigger: {
                trigger: globalFootprintSection,
                start: sectionTriggerStart,
                once: true,
              },
            });
          }

          ScrollTrigger.refresh();
          ScrollTrigger.update();

          return () => {
            heroVideo?.pause();
          };
        },
      );

      return () => media.revert();
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="home-motion-root">
      {children}
    </div>
  );
}
