"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { setupSecondarySectionNavMotion } from "@/components/secondarySectionNavMotion";

type ProductPageMotionProps = {
  children: ReactNode;
};

export function ProductPageMotion({ children }: ProductPageMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const sectionNav = root?.querySelector<HTMLElement>(".product-section-nav");

    if (!root || !sectionNav) {
      return;
    }

    return setupSecondarySectionNavMotion({
      navHeightProperty: "--product-section-nav-height",
      root,
      sectionNav,
      tabLinkSelector: '.product-section-tabs a[href^="#"]',
    });
  }, []);

  return (
    <div ref={rootRef} className="products-motion-root">
      {children}
    </div>
  );
}
