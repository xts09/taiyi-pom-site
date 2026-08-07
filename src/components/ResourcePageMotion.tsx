"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type ResourcePageMotionProps = {
  children: ReactNode;
};

export function ResourcePageMotion({ children }: ResourcePageMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const heroCard = root.querySelector<HTMLElement>(".resource-index-hero-card");
    const heroMedia = root.querySelector<HTMLElement>(
      ".resource-index-hero-media",
    );
    const heroItems = gsap.utils.toArray<HTMLElement>(
      ".resource-index-hero-content > *",
      root,
    );
    const taskPanel = root.querySelector<HTMLElement>(
      ".resource-index-task-panel",
    );
    const pathCards = gsap.utils.toArray<HTMLElement>(
      ".resource-index-path",
      root,
    );
    const resetTargets = [
      heroCard,
      ...heroItems,
      taskPanel,
      ...pathCards,
    ].filter((target): target is HTMLElement => Boolean(target));

    if (reduceMotion) {
      gsap.set(resetTargets, {
        autoAlpha: 1,
        clearProps: "opacity,visibility,transform",
        scale: 1,
        x: 0,
        y: 0,
      });

      if (heroMedia) {
        gsap.set(heroMedia, {
          clearProps: "opacity,visibility",
        });
      }

      return;
    }

    if (heroCard) {
      gsap.set(heroCard, { autoAlpha: 0, scale: 0.992, y: 24 });
    }

    if (heroItems.length > 0) {
      gsap.set(heroItems, { autoAlpha: 0, y: 16 });
    }

    if (taskPanel) {
      gsap.set(taskPanel, { autoAlpha: 0, x: 18 });
    }

    if (pathCards.length > 0) {
      gsap.set(pathCards, { autoAlpha: 0, y: 14 });
    }

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
        overwrite: true,
      },
    });

    if (heroCard) {
      timeline.to(heroCard, {
        autoAlpha: 1,
        clearProps: "opacity,visibility,transform",
        duration: 0.58,
        scale: 1,
        y: 0,
      });
    }

    if (heroMedia) {
      timeline.fromTo(
        heroMedia,
        { autoAlpha: 0.22 },
        {
          autoAlpha: 0.44,
          clearProps: "opacity,visibility",
          duration: 0.62,
        },
        heroCard ? "-=0.46" : 0,
      );
    }

    if (heroItems.length > 0) {
      timeline.to(
        heroItems,
          {
            autoAlpha: 1,
            clearProps: "opacity,visibility,transform",
            duration: 0.42,
            stagger: 0.075,
            y: 0,
        },
        heroCard ? "-=0.34" : 0,
      );
    }

    if (taskPanel) {
      timeline.to(
        taskPanel,
          {
            autoAlpha: 1,
            clearProps: "opacity,visibility,transform",
            duration: 0.48,
            x: 0,
          },
        "-=0.3",
      );
    }

    if (pathCards.length > 0) {
      timeline.to(
        pathCards,
          {
            autoAlpha: 1,
            clearProps: "opacity,visibility,transform",
            duration: 0.36,
            stagger: 0.055,
            y: 0,
        },
        "-=0.22",
      );
    }
  });

  return (
    <div ref={rootRef} className="resource-motion-root">
      {children}
    </div>
  );
}
