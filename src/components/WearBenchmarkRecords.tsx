"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function WearBenchmarkRecords({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function openRecord(hash: string, scroll: boolean) {
      if (!hash.startsWith("#record-")) return;
      const record = document.getElementById(hash.slice(1));
      if (!(record instanceof HTMLDetailsElement) || !root.current?.contains(record)) return;
      record.open = true;
      if (scroll) requestAnimationFrame(() => record.scrollIntoView({ block: "start" }));
    }
    function followHash() { openRecord(window.location.hash, true); }
    function followLink(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      const href = anchor?.getAttribute("href");
      if (href?.startsWith("#record-")) openRecord(href, true);
    }
    followHash();
    window.addEventListener("hashchange", followHash);
    document.addEventListener("click", followLink);
    return () => {
      window.removeEventListener("hashchange", followHash);
      document.removeEventListener("click", followLink);
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
