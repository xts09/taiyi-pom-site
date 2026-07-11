"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

type Falloff = "linear" | "smooth" | "sharp";

type LineSidebarProps = {
  items: string[];
  accentColor?: string;
  textColor?: string;
  markerColor?: string;
  showIndex?: boolean;
  showMarker?: boolean;
  proximityRadius?: number;
  maxShift?: number;
  falloff?: Falloff;
  markerLength?: number;
  markerGap?: number;
  tickScale?: number;
  scaleTick?: boolean;
  itemGap?: number;
  fontSize?: number;
  smoothing?: number;
  activeIndex?: number | null;
  defaultActive?: number | null;
  onItemClick?: (index: number, label: string) => void;
  className?: string;
};

const falloffCurves: Record<Falloff, (progress: number) => number> = {
  linear: (progress) => progress,
  smooth: (progress) => progress * progress * (3 - 2 * progress),
  sharp: (progress) => progress * progress * progress,
};

export function LineSidebar({
  items,
  accentColor = "#2563eb",
  textColor = "#64748b",
  markerColor = "#cbd5e1",
  showIndex = false,
  showMarker = true,
  proximityRadius = 70,
  maxShift = 8,
  falloff = "smooth",
  markerLength = 28,
  markerGap = 8,
  tickScale = 0.45,
  scaleTick = true,
  itemGap = 12,
  fontSize = 0.9,
  smoothing = 120,
  activeIndex: controlledActiveIndex,
  defaultActive = null,
  onItemClick,
  className = "",
}: LineSidebarProps) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const targetsRef = useRef<number[]>([]);
  const currentRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef(0);
  const activeRef = useRef(defaultActive);
  const smoothingRef = useRef(smoothing);
  const [localActiveIndex, setLocalActiveIndex] = useState(defaultActive);
  const activeIndex =
    controlledActiveIndex !== undefined ? controlledActiveIndex : localActiveIndex;

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    smoothingRef.current = smoothing;
  }, [smoothing]);

  const startLoop = useCallback(() => {
    if (rafRef.current !== null) {
      return;
    }

    const runFrame = (now: number) => {
      const delta = Math.min((now - lastRef.current) / 1000, 0.05);
      lastRef.current = now;
      const tau = Math.max(smoothingRef.current, 1) / 1000;
      const ease = 1 - Math.exp(-delta / tau);
      let moving = false;

      for (let index = 0; index < itemRefs.current.length; index += 1) {
        const element = itemRefs.current[index];
        if (!element) {
          continue;
        }

        const target = Math.max(
          targetsRef.current[index] || 0,
          activeRef.current === index ? 1 : 0,
        );
        const current = currentRef.current[index] || 0;
        const next = current + (target - current) * ease;
        const settled = Math.abs(target - next) < 0.0015;
        const value = settled ? target : next;

        currentRef.current[index] = value;
        element.style.setProperty("--effect", value.toFixed(4));
        moving ||= !settled;
      }

      rafRef.current = moving ? requestAnimationFrame(runFrame) : null;
    };

    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(runFrame);
  }, []);

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLUListElement>) => {
      const list = listRef.current;
      if (!list) {
        return;
      }

      const rect = list.getBoundingClientRect();
      const pointerY = event.clientY - rect.top;
      const curve = falloffCurves[falloff] ?? falloffCurves.linear;

      for (let index = 0; index < itemRefs.current.length; index += 1) {
        const element = itemRefs.current[index];
        if (!element) {
          continue;
        }

        const center = element.offsetTop + element.offsetHeight / 2;
        const distance = Math.abs(pointerY - center);
        targetsRef.current[index] = curve(
          Math.max(0, 1 - distance / proximityRadius),
        );
      }

      startLoop();
    },
    [falloff, proximityRadius, startLoop],
  );

  const handlePointerLeave = useCallback(() => {
    targetsRef.current = targetsRef.current.map(() => 0);
    startLoop();
  }, [startLoop]);

  const handleClick = useCallback(
    (index: number, label: string) => {
      if (controlledActiveIndex === undefined) {
        setLocalActiveIndex(index);
      }
      onItemClick?.(index, label);
    },
    [controlledActiveIndex, onItemClick],
  );

  useEffect(() => {
    startLoop();
  }, [activeIndex, startLoop]);

  useEffect(
    () => () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    },
    [],
  );

  return (
    <nav
      className={[
        "line-sidebar",
        showMarker ? "line-sidebar--markers" : "",
        scaleTick ? "line-sidebar--scale-tick" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--accent-color": accentColor,
          "--text-color": textColor,
          "--marker-color": markerColor,
          "--marker-length": `${markerLength}px`,
          "--marker-gap": `${markerGap}px`,
          "--tick-scale": tickScale,
          "--max-shift": `${maxShift}px`,
          "--item-gap": `${itemGap}px`,
          "--font-size": `${fontSize}rem`,
      } as CSSProperties
      }
    >
      <ul
        ref={listRef}
        className="line-sidebar__list"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {items.map((label, index) => (
          <li
            key={`${label}-${index}`}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className="line-sidebar__item"
            aria-current={activeIndex === index ? "true" : undefined}
          >
            <button type="button" onClick={() => handleClick(index, label)}>
              {showMarker ? (
                <span className="line-sidebar__marker" aria-hidden="true" />
              ) : null}
              <span className="line-sidebar__label">
                {showIndex ? (
                  <span className="line-sidebar__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}
                <span className="line-sidebar__text">{label}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
