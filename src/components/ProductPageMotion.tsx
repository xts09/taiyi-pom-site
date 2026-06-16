"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProductPageMotionProps = {
  children: ReactNode;
};

export function ProductPageMotion({ children }: ProductPageMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const motionTargets =
        ".products-motion-hero > *, .products-motion-data, .products-motion-filter > *, .products-motion-head, .products-motion-row, .products-motion-secondary > *, .products-motion-support";
      const root = rootRef.current;
      const heroActions = root?.querySelector<HTMLElement>(
        ".product-hero-card .product-hero-cta"
      );
      const hero = root?.querySelector<HTMLElement>(".product-index-hero");
      const stickyActions = root?.querySelector<HTMLElement>(
        ".product-section-actions"
      );
      const sectionNav = root?.querySelector<HTMLElement>(
        ".product-section-nav"
      );
      let heroActionsObserver: IntersectionObserver | undefined;
      let cleanupStickyActions = () => {};
      let cleanupSectionNavLinks = () => {};
      let cleanupSectionActiveState = () => {};

      if (root && hero && heroActions && stickyActions && sectionNav) {
        const stickyActionTimers: number[] = [];
        const getSectionNavTop = () => {
          const navStickyTop = Number.parseFloat(
            window.getComputedStyle(sectionNav).top
          );

          return Number.isFinite(navStickyTop) ? navStickyTop : 0;
        };
        const setStickyActions = () => {
          const heroRect = hero.getBoundingClientRect();
          const actionRect = heroActions.getBoundingClientRect();
          const stickyTop = getSectionNavTop();
          const pinStartOffset = sectionNav.offsetHeight + 48;
          const isHeroActionVisible =
            actionRect.bottom > 96 && actionRect.top < window.innerHeight;
          const isSectionNavPinned =
            heroRect.bottom <= stickyTop + pinStartOffset;

          root.style.setProperty(
            "--product-section-nav-height",
            `${sectionNav.offsetHeight}px`
          );
          root.classList.toggle("is-section-nav-pinned", isSectionNavPinned);
          root.classList.toggle(
            "is-sticky-actions-visible",
            !isHeroActionVisible && isSectionNavPinned
          );
        };

        heroActionsObserver = new IntersectionObserver(setStickyActions, {
          rootMargin: "-96px 0px 0px 0px",
          threshold: [0, 0.08, 0.2],
        });
        heroActionsObserver.observe(heroActions);
        setStickyActions();
        stickyActionTimers.push(
          window.requestAnimationFrame(setStickyActions),
          window.setTimeout(setStickyActions, 220),
          window.setTimeout(setStickyActions, 600)
        );
        window.addEventListener("scroll", setStickyActions, { passive: true });
        window.addEventListener("resize", setStickyActions);

        cleanupStickyActions = () => {
          heroActionsObserver?.disconnect();
          root.style.removeProperty("--product-section-nav-height");
          root.classList.remove(
            "is-section-nav-pinned",
            "is-sticky-actions-visible"
          );
          stickyActionTimers.forEach((timer) => window.clearTimeout(timer));
          window.removeEventListener("scroll", setStickyActions);
          window.removeEventListener("resize", setStickyActions);
        };
      }

      if (sectionNav) {
        const sectionLinks = Array.from(
          sectionNav.querySelectorAll<HTMLAnchorElement>(
            '.product-section-tabs a[href^="#"]'
          )
        );
        const handleSectionLinkClick = (event: MouseEvent) => {
          const link = event.currentTarget as HTMLAnchorElement;
          const targetId = link.hash.slice(1);
          const target = document.getElementById(targetId);

          if (!target) {
            return;
          }

          event.preventDefault();

          root?.classList.add("is-section-nav-pinned");
          root?.classList.add("is-sticky-actions-visible");
          root?.style.setProperty(
            "--product-section-nav-height",
            `${sectionNav.offsetHeight}px`
          );

          const navStickyTop = Number.parseFloat(
            window.getComputedStyle(sectionNav).top
          );
          const stickyTop = Number.isFinite(navStickyTop) ? navStickyTop : 0;
          const targetTop =
            window.scrollY +
            target.getBoundingClientRect().top -
            stickyTop -
            sectionNav.offsetHeight +
            -10;

          window.history.pushState(null, "", `#${targetId}`);
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: reduceMotion ? "auto" : "smooth",
          });
        };

        sectionLinks.forEach((link) => {
          link.addEventListener("click", handleSectionLinkClick);
        });

        const sectionTargets = sectionLinks
          .map((link) => {
            const target = document.getElementById(link.hash.slice(1));

            return target ? { link, target } : null;
          })
          .filter(
            (item): item is { link: HTMLAnchorElement; target: HTMLElement } =>
              Boolean(item)
          );
        const setActiveSection = () => {
          const navStickyTop = Number.parseFloat(
            window.getComputedStyle(sectionNav).top
          );
          const stickyTop = Number.isFinite(navStickyTop) ? navStickyTop : 0;
          const readLine = stickyTop + sectionNav.offsetHeight + 24;
          let active = sectionTargets[0];

          sectionTargets.forEach((item) => {
            if (item.target.getBoundingClientRect().top <= readLine) {
              active = item;
            }
          });
          sectionLinks.forEach((link) => {
            link.classList.toggle("is-active", link === active?.link);
          });
        };

        setActiveSection();
        window.addEventListener("scroll", setActiveSection, { passive: true });
        window.addEventListener("resize", setActiveSection);
        cleanupSectionNavLinks = () => {
          sectionLinks.forEach((link) => {
            link.removeEventListener("click", handleSectionLinkClick);
          });
        };
        cleanupSectionActiveState = () => {
          window.removeEventListener("scroll", setActiveSection);
          window.removeEventListener("resize", setActiveSection);
          sectionLinks.forEach((link) => link.classList.remove("is-active"));
        };
      }

      if (reduceMotion) {
        gsap.set(motionTargets, { autoAlpha: 1, x: 0, y: 0, clearProps: "all" });
        return () => {
          cleanupStickyActions();
          cleanupSectionNavLinks();
          cleanupSectionActiveState();
        };
      }

      const heroItems = gsap.utils
        .toArray<HTMLElement>(".products-motion-hero > *")
        .filter((item) => !item.classList.contains("products-motion-data"));
      const dataBand =
        rootRef.current?.querySelector<HTMLElement>(".products-motion-data");
      const filterItems = gsap.utils.toArray<HTMLElement>(
        ".products-motion-filter > *"
      );
      const directoryHead =
        rootRef.current?.querySelector<HTMLElement>(".products-motion-head");
      const rows = gsap.utils.toArray<HTMLElement>(".products-motion-row");
      const secondaryItems = gsap.utils.toArray<HTMLElement>(
        ".products-motion-secondary > *"
      );
      const support =
        rootRef.current?.querySelector<HTMLElement>(".products-motion-support");

      gsap.set(
        [directoryHead, ...rows, ...secondaryItems, support].filter(Boolean),
        {
          autoAlpha: 0,
          y: 6,
        }
      );

      const introTimeline = gsap.timeline({
        defaults: {
          duration: 0.24,
          ease: "power2.out",
          overwrite: true,
        },
      });

      introTimeline.fromTo(
        heroItems,
        { autoAlpha: 0, y: 6 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.018,
          clearProps: "transform,opacity,visibility",
        },
        0
      );

      if (dataBand) {
        introTimeline.fromTo(
          dataBand,
          { autoAlpha: 0, y: 5 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.2,
            clearProps: "transform,opacity,visibility",
          },
          "-=0.12"
        );
      }

      introTimeline.fromTo(
        filterItems,
        { autoAlpha: 0, y: 4 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.14,
          stagger: 0.004,
          clearProps: "transform,opacity,visibility",
        },
        "-=0.08"
      );

      if (directoryHead) {
        gsap.to(directoryHead, {
          autoAlpha: 1,
          y: 0,
          duration: 0.18,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: directoryHead,
            start: "top 95%",
            once: true,
          },
        });
      }

      if (rows.length > 0) {
        ScrollTrigger.batch(rows, {
          start: "top 96%",
          once: true,
          batchMax: 20,
          interval: 0.01,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.18,
              ease: "power2.out",
              stagger: 0.004,
              overwrite: true,
              clearProps: "transform,opacity,visibility",
            });
          },
        });
      }

      if (support) {
        gsap.to(support, {
          autoAlpha: 1,
          y: 0,
          duration: 0.22,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: support,
            start: "top 94%",
            once: true,
          },
        });
      }

      if (secondaryItems.length > 0) {
        ScrollTrigger.batch(secondaryItems, {
          start: "top 94%",
          once: true,
          batchMax: 2,
          interval: 0.02,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.2,
              ease: "power2.out",
              stagger: 0.01,
              overwrite: true,
              clearProps: "transform,opacity,visibility",
            });
          },
        });
      }

      gsap.delayedCall(1.2, () => {
        gsap.to(motionTargets, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.08,
          overwrite: "auto",
          clearProps: "transform,opacity,visibility",
        });
      });

      ScrollTrigger.refresh();

      return () => {
        cleanupStickyActions();
        cleanupSectionNavLinks();
        cleanupSectionActiveState();
      };
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="products-motion-root">
      {children}
    </div>
  );
}
