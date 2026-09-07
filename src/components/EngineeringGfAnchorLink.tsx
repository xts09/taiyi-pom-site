"use client";

import Link from "next/link";
import { useEffect, useRef, type ComponentProps } from "react";

// Hero and comparison links sit outside the shared sticky navigation's
// click handler. Align them after that navigation reaches its pinned height.
export function EngineeringGfAnchorLink({
  href,
  ...props
}: Omit<ComponentProps<typeof Link>, "href" | "onNavigate"> & {
  href: `#${string}`;
}) {
  const alignmentTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (alignmentTimer.current) clearTimeout(alignmentTimer.current);
  }, []);

  return (
    <Link
      {...props}
      href={href}
      onNavigate={() => {
        if (alignmentTimer.current) clearTimeout(alignmentTimer.current);
        alignmentTimer.current = setTimeout(() => {
          const target = document.getElementById(href.slice(1));
          const nav = target?.closest("main")?.querySelector<HTMLElement>(
            '[data-slot="secondary-section-nav"]',
          );
          if (!target || !nav) return;

          const stickyTop = Number.parseFloat(getComputedStyle(nav).top) || 0;
          window.scrollTo({
            top: Math.max(0, window.scrollY + target.getBoundingClientRect().top
              - stickyTop - nav.offsetHeight - 16),
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "instant" : "smooth",
          });
          target.focus({ preventScroll: true });
        }, 280);
      }}
    />
  );
}

