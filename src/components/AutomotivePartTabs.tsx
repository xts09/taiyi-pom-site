"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./AutomotiveSystemGroup.module.css";

export function AutomotivePartTabs({ items, label }: {
  items: { id: string; title: string; content: ReactNode }[];
  label: string;
}) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const syncHash = () => {
      const index = items.findIndex(item => window.location.hash === `#automotive-part-${item.id}`);
      if (index >= 0) setActive(index);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [items]);

  useEffect(() => {
    const button = buttons.current[active];
    const tablist = button?.parentElement;
    if (!button || !tablist) return;
    tablist.scrollLeft = Math.max(
      0,
      button.offsetLeft - (tablist.clientWidth - button.offsetWidth) / 2,
    );
  }, [active]);

  return <>
    <div className={styles.tabs} role="tablist" aria-label={label}>
      {items.map((item, index) => <button
        key={item.id} ref={element => { buttons.current[index] = element; }}
        id={`automotive-tab-${item.id}`} type="button" role="tab"
        aria-selected={active === index} aria-controls={`automotive-panel-${item.id}`}
        tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)}
        onKeyDown={event => {
          const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
          const next = direction ? (index + direction + items.length) % items.length
            : event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : undefined;
          if (next !== undefined) { event.preventDefault(); setActive(next); buttons.current[next]?.focus(); }
        }}
      >{item.title}</button>)}
    </div>
    {items.map((item, index) => <div key={item.id} id={`automotive-panel-${item.id}`}
      role="tabpanel" aria-labelledby={`automotive-tab-${item.id}`} hidden={active !== index}
    >{item.content}</div>)}
  </>;
}
