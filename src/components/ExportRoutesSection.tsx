import { ExportMarketsMap } from "@/components/ExportMarketsMap";
import { HomeStageHeader } from "@/components/HomeStageHeader";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type ExportMarket = {
  region: string;
  coverage: string;
};

type ExportRoutesSectionProps = {
  markets: ReadonlyArray<ExportMarket>;
};

export function ExportRoutesSection({ markets }: ExportRoutesSectionProps) {
  return (
    <section id="supply-routes" className="home-stage global-footprint">
      <div className="site-container">
        <HomeStageHeader title="Export Routes" />

        <div className="supply-map-layout">
          <div className="supply-map-shell">
            <ExportMarketsMap />
          </div>
          <Card className="export-market-panel grid gap-0 rounded-none border-0 py-0 shadow-none">
            <p className="export-market-intro">
              Current project routes cover Europe, South Korea and South America
              with material and document communication tied to the grade review.
            </p>
            <Separator className="export-market-separator" />
            <dl className="export-market-summary">
              {markets.map((market, index) => (
                <div key={market.region}>
                  <span>0{index + 1}</span>
                  <dt>{market.region}</dt>
                  <dd>{market.coverage}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </div>
    </section>
  );
}
