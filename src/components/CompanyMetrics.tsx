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
            Production scale, manufacturing experience and in-house testing
            capability for engineering plastic compounding.
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
            {supportingFigures.map((item) => (
              <div key={item.label} className="base-metric">
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
