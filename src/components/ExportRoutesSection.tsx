"use client";

import { useState } from "react";

import { exportRoutes, type ExportRoute } from "@/data/exportRoutes";
import { ExportMarketsMap, type ExportRegionId } from "@/components/ExportMarketsMap";
import { SectionIntro } from "@/components/SectionIntro";
import { Card } from "@/components/ui/card";
import type { HomeMessages } from "@/i18n/types";

type ExportRoutesSectionProps = {
  routes?: ReadonlyArray<ExportRoute>;
  messages: HomeMessages["exportNetwork"];
};

export function ExportRoutesSection({
  routes = exportRoutes,
  messages,
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
                description={messages.description}
                eyebrow={messages.eyebrow}
                layout="stacked"
                title={messages.title}
                titleId="export-routes-title"
              />
              <ExportMarketsMap
                activeRegion={activeRegion}
                imageAlt={messages.mapAlt}
              />
              <div className="supply-map-legend" aria-label={messages.legendAria}>
                <span>
                  <i className="supply-map-legend-mark supply-map-legend-mark-origin" />
                  {messages.productionBase}
                </span>
                <span>
                  <i className="supply-map-legend-mark supply-map-legend-mark-region" />
                  {messages.exportRegion}
                </span>
              </div>
            </div>

            <aside className="export-market-panel" aria-labelledby="export-market-title">
              <div className="export-market-panel-head">
                <h3 id="export-market-title">{messages.regionsTitle}</h3>
                <p>{messages.regionsBody}</p>
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

            <div className="export-network-facts" aria-label={messages.factsAria}>
              <p>
                <span>{messages.productionBase}</span>
                <strong>{messages.productionBaseValue}</strong>
              </p>
              <p>
                <span>{messages.listedDestinations}</span>
                <strong>{messages.listedDestinationsValue}</strong>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
