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

    const heroMedia = root.querySelector<HTMLElement>(
      ".resource-index-hero-media",
    );
    if (!heroMedia) {
      return;
    }

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(heroMedia, { clearProps: "opacity,visibility" });
    });

    media.add(
      "(max-width: 47.999rem) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.set(heroMedia, { clearProps: "opacity,visibility" });
      },
    );

    media.add(
      "(min-width: 48rem) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.fromTo(
          heroMedia,
          { autoAlpha: 0.28 },
          {
            autoAlpha: 0.44,
            clearProps: "opacity,visibility",
            duration: 0.48,
            ease: "power2.out",
          },
        );
      },
    );

    return () => media.revert();
  });

  return (
    <div ref={rootRef} className="resource-motion-root">
      {children}
    </div>
  );
}
