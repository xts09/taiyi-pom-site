import type { CSSProperties } from "react";
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
  return (
    <section className="manufacturing-base relative z-10">
      <div className="manufacturing-base-inner site-container">
        <div className="manufacturing-base-head">
          <h2>Factory Snapshot</h2>
          <p>
            Production scale, compounding experience and in&#8209;house testing
            for engineering plastic materials.
          </p>
        </div>

        <div className="base-shell home-metrics-rail">
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
      </div>
    </section>
  );
}
