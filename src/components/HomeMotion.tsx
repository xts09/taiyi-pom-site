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
          ".hero-motion-kicker, .type-letter, .hero-motion-copy, .hero-motion-actions > *, .section-motion-copy, .product-current-head, .product-disclosure, .flow-point, .operation-stack p, .factory-frame, .cta-ribbon",
          { autoAlpha: 1, x: 0, y: 0, filter: "none" },
        );
        return;
      }

      root?.classList.add("is-home-motion-ready");

      const safeCallback = contextSafe ?? ((fn) => fn);
      const viewportTriggerCleanups: Array<() => void> = [];
      let refreshTimer: number | undefined;
      const scheduleScrollTriggerRefresh = () => {
        if (refreshTimer !== undefined) {
          window.clearTimeout(refreshTimer);
        }

        refreshTimer = window.setTimeout(() => {
          refreshTimer = undefined;
          ScrollTrigger.refresh();
        }, 90);
      };
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

        const check = () => {
          const rect = target.getBoundingClientRect();
          const viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;

          if (rect.top < viewportHeight * 0.86 && rect.bottom > 0) {
            window.removeEventListener("scroll", check);
            window.removeEventListener("resize", check);
            playOnce();
          }
        };

        window.addEventListener("scroll", check, { passive: true });
        window.addEventListener("resize", check);
        requestAnimationFrame(check);
        viewportTriggerCleanups.push(() => {
          window.removeEventListener("scroll", check);
          window.removeEventListener("resize", check);
        });
      };

      let heroMotionComplete = false;
      let heroDriftStarted = false;
      const startHeroDrift = safeCallback(() => {
        if (heroDriftStarted) {
          return;
        }

        heroDriftStarted = true;
        const heroVideo =
          rootRef.current?.querySelector<HTMLVideoElement>(".hero-video");

        if (!heroVideo) {
          return;
        }

        const playHeroVideo = () => {
          heroVideo.load();
          heroVideo.play().catch(() => {
            // Autoplay can be blocked by the browser; the poster remains as fallback.
          });
        };

        window.setTimeout(playHeroVideo, 4500);

      });

      const playHeroMotion = safeCallback(() => {
        if (heroMotionComplete) {
          return;
        }

        heroMotionComplete = true;
        startHeroDrift();

        gsap
          .timeline({
            defaults: {
              ease: "power3.out",
            },
          })
          .fromTo(
            ".hero-motion-kicker",
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.56 },
            0.08,
          )
          .to(
            ".type-letter",
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.72,
              ease: "power3.out",
              stagger: 0.016,
            },
            0.24,
          )
          .fromTo(
            ".hero-motion-copy",
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.62 },
            0.72,
          )
          .fromTo(
            ".hero-motion-actions > *",
            { autoAlpha: 0, y: 14 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.52,
              stagger: 0.08,
            },
            0.98,
          );
      });

      gsap.delayedCall(0.08, playHeroMotion);

      const productSection =
        rootRef.current?.querySelector<HTMLElement>(".product-current");
      const productHead = rootRef.current?.querySelector<HTMLElement>(
        ".product-current-head",
      );
      const productRows = gsap.utils.toArray<HTMLDetailsElement>(
        ".product-disclosure",
      );
      const cleanupProductDisclosure: Array<() => void> = [];
      let productMotionComplete = false;
      let selectionMotionComplete = false;
      let operationMotionComplete = false;
      let factoryMotionComplete = false;
      let ctaMotionComplete = false;

      if (productSection && productHead && productRows.length > 0) {
        productSection.classList.add("is-gsap-disclosure");

        gsap.set(productHead, { autoAlpha: 0, x: -18, y: 4 });
        gsap.set(productRows, { autoAlpha: 0, x: 18, y: 5 });

        let activeProductIndex = productRows.findIndex((row) => row.open);
        if (activeProductIndex < 0) {
          activeProductIndex = 0;
        }

        const animateDisclosure = safeCallback(
          (item: HTMLDetailsElement, shouldOpen: boolean) => {
            const body = item.querySelector<HTMLElement>(
              ".product-disclosure-body",
            );
            const bodyInner = item.querySelector<HTMLElement>(
              ".product-disclosure-body > div",
            );
            const arrow = item.querySelector<HTMLElement>(".product-arrow");
            const index = item.querySelector<HTMLElement>(".product-index");

            if (!body || !bodyInner) {
              item.open = shouldOpen;
              item.classList.toggle("is-expanded", shouldOpen);
              item.classList.remove("is-closing");
              return;
            }

            const revealItems = gsap.utils.toArray<HTMLElement>(
              bodyInner.querySelectorAll("p, .product-specs div, .text-link"),
            );
            const currentHeight = body.getBoundingClientRect().height;

            gsap.killTweensOf([body, bodyInner, arrow, index, ...revealItems]);

            if (shouldOpen) {
              item.open = true;
              item.classList.remove("is-closing");
              item.classList.add("is-expanded");

              const targetHeight = bodyInner.scrollHeight;

              body.style.height = "auto";
              body.style.maxHeight = `${currentHeight}px`;
              gsap.set(body, {
                autoAlpha: 1,
              });

              if (currentHeight < 1) {
                gsap.set(bodyInner, { autoAlpha: 0, y: 5 });
                gsap.set(revealItems, { autoAlpha: 0, y: 4 });
              }

              gsap
                .timeline({
                  defaults: {
                    ease: "power3.out",
                    overwrite: true,
                  },
                  onComplete: () => {
                    gsap.set(body, { height: "auto", maxHeight: "none" });
                    scheduleScrollTriggerRefresh();
                  },
                })
                .to(
                  body,
                  {
                    maxHeight: targetHeight,
                    duration: 0.34,
                    ease: "power2.out",
                  },
                  0,
                )
                .to(
                  bodyInner,
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.24,
                  },
                  0.03,
                )
                .to(
                  revealItems,
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.22,
                    stagger: 0.012,
                  },
                  0.06,
                )
                .to(
                  arrow,
                  {
                    rotation: 45,
                    duration: 0.22,
                  },
                  0,
                )
                .to(
                  index,
                  {
                    scale: 1.06,
                    duration: 0.2,
                  },
                  0,
                );
              return;
            }

            if (!item.open && currentHeight < 1) {
              item.classList.remove("is-expanded", "is-closing");
              gsap.set(body, { height: 0, maxHeight: 0, autoAlpha: 0 });
              gsap.set(bodyInner, { autoAlpha: 0, y: -8 });
              return;
            }

            item.open = true;
            item.classList.add("is-closing");
            item.classList.remove("is-expanded");

            const closingHeight = currentHeight || bodyInner.scrollHeight;
            body.style.height = "auto";
            body.style.maxHeight = `${closingHeight}px`;
            gsap.set(body, { autoAlpha: 1 });

            gsap
              .timeline({
                onComplete: () => {
                  item.open = false;
                  item.classList.remove("is-closing");
                  gsap.set(body, { height: 0, maxHeight: 0, autoAlpha: 0 });
                  gsap.set(bodyInner, { autoAlpha: 0, y: -8 });
                  scheduleScrollTriggerRefresh();
                },
              })
              .to(
                revealItems,
                {
                  autoAlpha: 0,
                  y: -4,
                  duration: 0.14,
                  ease: "power2.out",
                  overwrite: true,
                  stagger: {
                    each: 0.008,
                    from: "end",
                  },
                },
                0,
              )
              .to(
                bodyInner,
                {
                  autoAlpha: 0.22,
                  y: -5,
                  duration: 0.18,
                  ease: "power2.out",
                  overwrite: true,
                },
                0.04,
              )
              .to(
                body,
                {
                  maxHeight: 0,
                  duration: 0.3,
                  ease: "power1.out",
                  overwrite: "auto",
                },
                0,
              )
              .to(
                body,
                {
                  autoAlpha: 0,
                  duration: 0.1,
                  ease: "power1.out",
                  overwrite: "auto",
                },
                0.24,
              )
              .to(
                arrow,
                {
                  rotation: 0,
                  duration: 0.2,
                  ease: "power2.inOut",
                  overwrite: true,
                },
                0,
              )
              .to(
                index,
                {
                  scale: 1,
                  duration: 0.18,
                  ease: "power2.inOut",
                  overwrite: true,
                },
                0,
              );
          },
        );

        const syncProductDisclosure = safeCallback((nextIndex: number) => {
          activeProductIndex = nextIndex;
          productRows.forEach((row, index) => {
            animateDisclosure(row, index === nextIndex);
          });
        });

        productRows.forEach((item) => {
          const summary = item.querySelector<HTMLElement>(
            ".product-disclosure-summary",
          );
          const body = item.querySelector<HTMLElement>(
            ".product-disclosure-body",
          );
          const bodyInner = item.querySelector<HTMLElement>(
            ".product-disclosure-body > div",
          );

          if (!summary || !body || !bodyInner) {
            return;
          }

          const revealItems = gsap.utils.toArray<HTMLElement>(
            bodyInner.querySelectorAll("p, .product-specs div, .text-link"),
          );

          if (item.open) {
            item.classList.add("is-expanded");
            gsap.set(body, { height: "auto", maxHeight: "none", autoAlpha: 1 });
            gsap.set([bodyInner, ...revealItems], { autoAlpha: 1, y: 0 });
          } else {
            gsap.set(body, { height: 0, maxHeight: 0, autoAlpha: 0 });
            gsap.set(bodyInner, { autoAlpha: 0, y: -8 });
            gsap.set(revealItems, { autoAlpha: 0, y: 8 });
          }

          const handleSummaryClick = safeCallback((event: MouseEvent) => {
            event.preventDefault();
            const nextIndex = productRows.indexOf(item);

            if (nextIndex < 0 || nextIndex === activeProductIndex) {
              return;
            }

            syncProductDisclosure(nextIndex);
          });

          summary.addEventListener("click", handleSummaryClick);
          cleanupProductDisclosure.push(() => {
            summary.removeEventListener("click", handleSummaryClick);
          });
        });

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
      }

      const selectionSection = rootRef.current?.querySelector<HTMLElement>(
        ".selection-corridor",
      );
      const selectionCopy = rootRef.current?.querySelector<HTMLElement>(
        ".selection-motion-copy",
      );
      const flowPoints = gsap.utils.toArray<HTMLElement>(".flow-point");

      if (selectionSection && selectionCopy && flowPoints.length > 0) {
        selectionSection.classList.add("is-flow-ready");
        gsap.set(selectionCopy, { autoAlpha: 0, x: -46 });

        const playSelectionMotion = safeCallback(() => {
          if (selectionMotionComplete) {
            return;
          }

          selectionMotionComplete = true;

          gsap
            .timeline({
              defaults: {
                ease: "power3.out",
                overwrite: true,
              },
            })
            .add(() => {
              selectionSection.classList.add("is-flow-active");
            }, 0.22)
            .to(selectionCopy, {
              autoAlpha: 1,
              x: 0,
              duration: 1.25,
            });
        });

        playWhenScreenVisible(selectionSection, playSelectionMotion, {
          rootMargin: "0px 0px -24% 0px",
          threshold: 0.18,
        });
      }

      const operationSection =
        rootRef.current?.querySelector<HTMLElement>(".factory-sequence");
      const operationCopy = rootRef.current?.querySelector<HTMLElement>(
        ".operation-motion-copy",
      );
      const operationItems =
        gsap.utils.toArray<HTMLElement>(".operation-stack p");

      if (operationSection && operationCopy && operationItems.length > 0) {
        gsap.set(operationCopy, { autoAlpha: 0, x: -46 });
        gsap.set(operationItems, { autoAlpha: 0, x: 46 });

        const playOperationMotion = safeCallback(() => {
          if (operationMotionComplete) {
            return;
          }

          operationMotionComplete = true;

          gsap
            .timeline({
              defaults: {
                ease: "power3.out",
                overwrite: true,
              },
            })
            .to(operationCopy, {
              autoAlpha: 1,
              x: 0,
              duration: 0.9,
            })
            .to(
              operationItems,
              {
                autoAlpha: 1,
                x: 0,
                duration: 0.82,
                stagger: 0.08,
              },
              "-=0.42",
            );
        });

        playWhenScreenVisible(operationSection, playOperationMotion);
      }

      const factoryFilm =
        rootRef.current?.querySelector<HTMLElement>(".factory-film");
      const factoryFrames = gsap.utils.toArray<HTMLElement>(".factory-frame");

      if (factoryFilm && factoryFrames.length > 0) {
        const playFactoryMotion = safeCallback(() => {
          if (factoryMotionComplete) {
            return;
          }

          factoryMotionComplete = true;

          gsap.fromTo(
            factoryFrames,
            {
              autoAlpha: 0,
              x: (index) => (index === 0 ? -44 : 44),
            },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
            },
          );
        });

        playWhenScreenVisible(factoryFilm, playFactoryMotion);
      }

      const ctaRibbon =
        rootRef.current?.querySelector<HTMLElement>(".cta-ribbon");

      if (ctaRibbon) {
        gsap.set(ctaRibbon, { autoAlpha: 0, y: 22 });

        const playCtaMotion = safeCallback(() => {
          if (ctaMotionComplete) {
            return;
          }

          ctaMotionComplete = true;

          gsap.to(ctaRibbon, {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: "power3.out",
            overwrite: true,
          });
        });

        playWhenScreenVisible(ctaRibbon, playCtaMotion);
      }

      ScrollTrigger.create({
        trigger: "[data-metrics-trigger]",
        start: "top 88%",
        once: true,
        onEnter: ({ trigger }) => {
          trigger?.classList.add("metrics-counting");
        },
      });

      ScrollTrigger.refresh();
      ScrollTrigger.update();

      const interactiveItems = gsap.utils.toArray<HTMLElement>(
        ".hero-motion-actions a, .product-current-actions a, .cta-ribbon a",
      );
      const cleanupHover: Array<() => void> = [];
      const safeHover = contextSafe ?? ((fn) => fn);

      interactiveItems.forEach((item) => {
        const enter = safeHover(() => {
          gsap.to(item, {
            y: -2,
            scale: 1.025,
            duration: 0.24,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
        const leave = safeHover(() => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.28,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);
        item.addEventListener("focus", enter);
        item.addEventListener("blur", leave);
        cleanupHover.push(() => {
          item.removeEventListener("mouseenter", enter);
          item.removeEventListener("mouseleave", leave);
          item.removeEventListener("focus", enter);
          item.removeEventListener("blur", leave);
        });
      });

      return () => {
        if (refreshTimer !== undefined) {
          window.clearTimeout(refreshTimer);
        }
        viewportTriggerCleanups.forEach((cleanup) => cleanup());

        root?.classList.remove("is-home-motion-ready");
        productSection?.classList.remove("is-gsap-disclosure");
        selectionSection?.classList.remove("is-flow-ready", "is-flow-active");
        cleanupProductDisclosure.forEach((cleanup) => cleanup());
        cleanupHover.forEach((cleanup) => cleanup());
      };
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="home-motion-root is-home-motion-ready">
      {children}
    </div>
  );
}
