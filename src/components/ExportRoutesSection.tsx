"use client";

import { useState } from "react";

import { exportRoutes, type ExportRoute } from "@/data/exportRoutes";
import { ExportMarketsMap, type ExportRegionId } from "@/components/ExportMarketsMap";
import { SectionIntro } from "@/components/SectionIntro";
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
                description="Project routes connect the Yancheng production base with destinations across Central Asia, Europe, East Asia and the Americas."
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
                <p>Select a region to focus the routes shown on the map.</p>
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

            </aside>

            <div className="export-network-facts" aria-label="Export network facts">
              <p>
                <span>Production base</span>
                <strong>Yancheng, Jiangsu, China</strong>
              </p>
              <p>
                <span>Listed destinations</span>
                <strong>9 destinations shown</strong>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
