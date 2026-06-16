"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

export function ApplicationAnimeMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".application-detail-shell");

    if (!root) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const heroCard = root.querySelector<HTMLElement>(".application-hero-card");
    const hero = root.querySelector<HTMLElement>(
      ".inner-hero.application-hero-with-image"
    );
    const heroActions = root.querySelector<HTMLElement>(".application-hero-cta");
    const sectionNav = root.querySelector<HTMLElement>(".application-section-nav");
    const sections = Array.from(
      root.querySelectorAll<HTMLElement>("[data-application-motion]")
    );

    const activeAnimations: ReturnType<typeof animate>[] = [];
    let heroActionsObserver: IntersectionObserver | undefined;
    let stickyActionFrame = 0;
    let setStickyActions = () => {};
    let cleanupSectionLinks = () => {};
    let cleanupSectionActiveState = () => {};

    if (hero && heroActions && sectionNav) {
      const getSectionNavTop = () => {
        const navStickyTop = Number.parseFloat(
          window.getComputedStyle(sectionNav).top
        );

        return Number.isFinite(navStickyTop) ? navStickyTop : 0;
      };
      const updateStickyActions = () => {
        stickyActionFrame = 0;
        const actionRect = heroActions.getBoundingClientRect();
        const navRect = sectionNav.getBoundingClientRect();
        const stickyTop = getSectionNavTop();
        const isHeroActionVisible =
          actionRect.bottom > 96 && actionRect.top < window.innerHeight;
        const isSectionNavPinned = navRect.top <= stickyTop + 1;

        root.classList.toggle("is-section-nav-pinned", isSectionNavPinned);
        root.classList.toggle(
          "is-sticky-actions-visible",
          !isHeroActionVisible && isSectionNavPinned
        );
      };
      setStickyActions = () => {
        if (stickyActionFrame !== 0) {
          return;
        }

        stickyActionFrame = window.requestAnimationFrame(updateStickyActions);
      };

      heroActionsObserver = new IntersectionObserver(setStickyActions, {
        rootMargin: "-96px 0px 0px 0px",
        threshold: [0, 0.08, 0.2],
      });
      heroActionsObserver.observe(heroActions);
      updateStickyActions();
      setStickyActions();
      window.addEventListener("scroll", setStickyActions, { passive: true });
      window.addEventListener("resize", setStickyActions);
    }

    if (sectionNav) {
      const sectionLinks = Array.from(
        sectionNav.querySelectorAll<HTMLAnchorElement>(
          '.application-section-tabs a[href^="#"]'
        )
      );
      const sectionTargets = sectionLinks
        .map((link) => {
          const target = document.getElementById(link.hash.slice(1));

          return target ? { link, target } : null;
        })
        .filter(
          (item): item is { link: HTMLAnchorElement; target: HTMLElement } =>
            Boolean(item)
        );
      const getSectionNavTop = () => {
        const navStickyTop = Number.parseFloat(
          window.getComputedStyle(sectionNav).top
        );

        return Number.isFinite(navStickyTop) ? navStickyTop : 0;
      };
      const setActiveSection = () => {
        const readLine = getSectionNavTop() + sectionNav.offsetHeight + 24;
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
      const handleSectionLinkClick = (event: MouseEvent) => {
        const link = event.currentTarget as HTMLAnchorElement;
        const target = document.getElementById(link.hash.slice(1));

        if (!target) {
          return;
        }

        event.preventDefault();
        root.classList.add("is-section-nav-pinned", "is-sticky-actions-visible");

        const targetTop =
          window.scrollY +
          target.getBoundingClientRect().top -
          getSectionNavTop() -
          sectionNav.offsetHeight -
          10;

        window.history.pushState(null, "", link.hash);
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: reduceMotion ? "auto" : "smooth",
        });
        window.requestAnimationFrame(setActiveSection);
      };

      sectionLinks.forEach((link) => {
        link.addEventListener("click", handleSectionLinkClick);
      });
      setActiveSection();
      window.addEventListener("scroll", setActiveSection, { passive: true });
      window.addEventListener("resize", setActiveSection);
      cleanupSectionLinks = () => {
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
        heroActionsObserver?.disconnect();
        if (stickyActionFrame !== 0) {
          window.cancelAnimationFrame(stickyActionFrame);
        }
        window.removeEventListener("scroll", setStickyActions);
        window.removeEventListener("resize", setStickyActions);
        cleanupSectionLinks();
        cleanupSectionActiveState();
        root.classList.remove("is-section-nav-pinned", "is-sticky-actions-visible");
      };
    }

    sections.forEach((section) => {
      const isContinuousBand = section.matches(
        ".application-scene-solution, .application-match-solution, .application-notes-material, .application-brief-cta"
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
            ".application-scene-solution, .application-match-solution, .application-notes-material, .application-brief-cta"
          );
          const items = Array.from(
            section.querySelectorAll<HTMLElement>("[data-application-motion-item]")
          );

          if (!isContinuousBand) {
            activeAnimations.push(animate(section, {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 660,
              ease: "outCubic",
            }));
          }

          if (items.length > 0) {
            items.forEach((item) => {
              item.style.opacity = "0";
              item.style.transform = "translateY(16px)";
            });
            activeAnimations.push(animate(items, {
              opacity: [0, 1],
              translateY: [16, 0],
              duration: 540,
              delay: stagger(70, { start: 120 }),
              ease: "outCubic",
            }));
          }

          observer.unobserve(section);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      heroActionsObserver?.disconnect();
      if (stickyActionFrame !== 0) {
        window.cancelAnimationFrame(stickyActionFrame);
      }
      window.removeEventListener("scroll", setStickyActions);
      window.removeEventListener("resize", setStickyActions);
      cleanupSectionLinks();
      cleanupSectionActiveState();
      root.classList.remove("is-section-nav-pinned", "is-sticky-actions-visible");
      observer.disconnect();
      activeAnimations.forEach((animation) => animation.revert());
    };
  }, []);

  return null;
}
