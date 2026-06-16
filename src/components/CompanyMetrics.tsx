"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { CountUpValue } from "@/components/CountUpValue";

type CompanyFigure = {
  label: string;
  note: string;
  value: string;
};

type CompanyMetricsProps = {
  annualCapacity: CompanyFigure;
  supportingFigures: CompanyFigure[];
};

export function CompanyMetrics({
  annualCapacity,
  supportingFigures,
}: CompanyMetricsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let hasStarted = false;

    const startCounting = () => {
      if (hasStarted) {
        return;
      }

      hasStarted = true;
      section.classList.add("metrics-counting");
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };

    const checkVisibility = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (
        rect.top < viewportHeight * 0.88 &&
        rect.bottom > viewportHeight * 0.08
      ) {
        startCounting();
      }
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility);

    const firstCheck = window.setTimeout(checkVisibility, 0);
    const secondCheck = window.setTimeout(checkVisibility, 240);

    return () => {
      window.clearTimeout(firstCheck);
      window.clearTimeout(secondCheck);
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="manufacturing-base relative z-10 px-5 sm:px-6 lg:px-8"
      data-metrics-trigger
    >
      <div className="base-shell mx-auto max-w-7xl">
        <div className="base-figure">
          <p className="section-kicker">{annualCapacity.label}</p>
          <strong>
            <CountUpValue value={annualCapacity.value} />
          </strong>
          <span>{annualCapacity.note}</span>
        </div>

        <div className="base-metrics">
          {supportingFigures.map((item, index) => (
            <div
              key={item.label}
              className="base-metric"
              style={{ "--item-index": index } as CSSProperties}
            >
              <p>{item.label}</p>
              <strong>
                <CountUpValue value={item.value} />
              </strong>
              <span>{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
