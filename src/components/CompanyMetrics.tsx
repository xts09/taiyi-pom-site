import { CountUpValue } from "@/components/CountUpValue";
import { MetricGroup } from "@/components/MetricGroup";

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
        <MetricGroup
          variant="rail"
          tone="light"
          className="base-shell home-metrics-rail"
          featuredItem={annualCapacity}
          items={supportingFigures}
          renderValue={(item) => <CountUpValue value={String(item.value)} />}
        />
      </div>
    </section>
  );
}
