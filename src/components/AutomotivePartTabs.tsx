"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styles from "./AutomotiveSystemGroup.module.css";

const automotivePartHashPrefix = "#automotive-part-";
type AutomotivePartHashListener = (hash: string) => void;

const automotivePartHashListeners = new Set<AutomotivePartHashListener>();
let isListeningForAutomotivePartHash = false;

const notifyAutomotivePartHashListeners = () => {
  const hash = window.location.hash;
  automotivePartHashListeners.forEach((listener) => listener(hash));
};

const subscribeToAutomotivePartHash = (
  listener: AutomotivePartHashListener,
) => {
  automotivePartHashListeners.add(listener);
  if (!isListeningForAutomotivePartHash) {
    window.addEventListener("hashchange", notifyAutomotivePartHashListeners);
    isListeningForAutomotivePartHash = true;
  }
  window.queueMicrotask(() => {
    if (automotivePartHashListeners.has(listener)) {
      listener(window.location.hash);
    }
  });

  return () => {
    automotivePartHashListeners.delete(listener);
    if (automotivePartHashListeners.size === 0) {
      window.removeEventListener("hashchange", notifyAutomotivePartHashListeners);
      isListeningForAutomotivePartHash = false;
    }
  };
};

export function AutomotiveHashNavigator({ children }: { children: ReactNode }) {
  useEffect(() => {
    let frameId: number | undefined;
    const unsubscribe = subscribeToAutomotivePartHash((hash) => {
      if (!hash.startsWith(automotivePartHashPrefix)) return;

      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      const system = target.closest('details[name="automotive-systems"]');
      if (system instanceof HTMLDetailsElement) system.open = true;

      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        frameId = window.requestAnimationFrame(() => {
          document
            .getElementById(hash.slice(1))
            ?.scrollIntoView({ block: "start" });
        });
      });
    });

    return () => {
      unsubscribe();
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <>{children}</>;
}

export function AutomotivePartTabs({ items, label }: {
  items: { id: string; title: string; content: ReactNode }[];
  label: string;
}) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    return subscribeToAutomotivePartHash((hash) => {
      const index = items.findIndex(
        (item) => hash === `${automotivePartHashPrefix}${item.id}`,
      );
      if (index >= 0) setActive(index);
    });
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
