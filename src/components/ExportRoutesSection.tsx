"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { exportRoutes, type ExportRoute } from "@/data/exportRoutes";
import { ExportMarketsMap, type ExportRegionId } from "@/components/ExportMarketsMap";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ExportRoutesSectionProps = {
  routes?: ReadonlyArray<ExportRoute>;
};

export function ExportRoutesSection({
  routes = exportRoutes,
}: ExportRoutesSectionProps) {
  const [activeRegion, setActiveRegion] = useState<ExportRegionId | null>(null);

  return (
    <section
      id="supply-routes"
      className="home-stage global-footprint home-evidence-section home-evidence-section-light"
      aria-labelledby="export-routes-title"
    >
      <div className="site-container">
        <div className="supply-map-layout">
          <Card className="export-network-board" variant="standard">
            <div className="supply-map-shell">
              <SectionIntro
                className="export-routes-intro"
                description="Current project routes connect Yancheng with Central Asia, Europe, East Asia and the Americas. Grade screening and document coordination are handled project by project."
                eyebrow="SUPPLY NETWORK"
                layout="stacked"
                title="Export Routes"
                titleId="export-routes-title"
              />
              <ExportMarketsMap activeRegion={activeRegion} />
              <div className="supply-map-legend" aria-label="Map legend">
                <span>
                  <i className="supply-map-legend-mark supply-map-legend-mark-origin" />
                  Production base
                </span>
                <span>
                  <i className="supply-map-legend-mark supply-map-legend-mark-region" />
                  Export region
                </span>
              </div>
            </div>

            <aside className="export-market-panel" aria-labelledby="export-market-title">
              <div className="export-market-panel-head">
                <h3 id="export-market-title">Project regions</h3>
                <p>Select a region to focus its current routes on the map.</p>
              </div>
              <ul className="export-market-summary">
                {routes.map((route, index) => (
                  <li
                    key={route.id}
                    className={activeRegion === route.id ? "is-active" : undefined}
                  >
                    <button
                      type="button"
                      aria-pressed={activeRegion === route.id}
                      onBlur={() => setActiveRegion(null)}
                      onClick={() => setActiveRegion(route.id)}
                      onFocus={() => setActiveRegion(route.id)}
                      onPointerEnter={(event) => {
                        if (event.pointerType === "mouse") {
                          setActiveRegion(route.id);
                        }
                      }}
                      onPointerLeave={(event) => {
                        if (event.pointerType === "mouse") {
                          setActiveRegion(null);
                        }
                      }}
                    >
                      <span aria-hidden="true">0{index + 1}</span>
                      <strong>{route.region}</strong>
                      <small>{route.coverage}</small>
                    </button>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="export-market-action"
                size="form"
                variant="primary"
              >
                <Link href="/contact">
                  Discuss Your Application
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </Button>
            </aside>

            <div className="export-network-facts" aria-label="Export network facts">
              <p>
                <span>Production base</span>
                <strong>Yancheng, Jiangsu, China</strong>
              </p>
              <p>
                <span>Destinations</span>
                <strong>9 current destinations</strong>
              </p>
              <p>
                <span>Project regions</span>
                <strong>4 active regions</strong>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
