"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { publicPath } from "@/lib/paths";

type Region = {
  id: "europe" | "south-korea" | "south-america";
  name: string;
  countries: string;
  note: string;
  hotspot: { x: string; y: string };
  popover: { x: string; y: string };
};

const regions: Region[] = [
  {
    id: "europe",
    name: "Europe",
    countries: "Germany / Italy / Turkey / Czechia",
    note: "Project supply communication across established European routes.",
    hotspot: { x: "52.7%", y: "33%" },
    popover: { x: "37.5%", y: "9%" },
  },
  {
    id: "south-korea",
    name: "South Korea",
    countries: "South Korea",
    note: "Material discussions for precision molded-part applications.",
    hotspot: { x: "77.4%", y: "40%" },
    popover: { x: "62%", y: "12%" },
  },
  {
    id: "south-america",
    name: "South America",
    countries: "Brazil / Argentina",
    note: "Project-based compound communication across South American markets.",
    hotspot: { x: "37.1%", y: "80%" },
    popover: { x: "20%", y: "48%" },
  },
];

export function ExportMarketsMap() {
  const [activeRegionId, setActiveRegionId] = useState<Region["id"] | null>(
    null,
  );
  const activeRegion = regions.find((region) => region.id === activeRegionId);

  return (
    <div className="export-map-experience">
      <div
        className="export-map-stage"
        aria-label="Interactive export map showing supply routes from China to Europe, South Korea, Brazil and Argentina"
        onMouseLeave={() => setActiveRegionId(null)}
      >
        <Image
          className="export-map-image"
          src={publicPath("/export-markets-routes-map.svg")}
          alt="World map showing export routes from China to Europe, South Korea, Brazil and Argentina."
          width={1280}
          height={498}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />

        {regions.map((region) => (
          <button
            key={region.id}
            className={`export-map-hotspot${
              activeRegionId === region.id ? " is-active" : ""
            }`}
            type="button"
            style={
              {
                "--hotspot-x": region.hotspot.x,
                "--hotspot-y": region.hotspot.y,
              } as CSSProperties
            }
            aria-pressed={activeRegionId === region.id}
            aria-label={`Show export details for ${region.name}`}
            onFocus={() => setActiveRegionId(region.id)}
            onMouseEnter={() => setActiveRegionId(region.id)}
            onClick={() =>
              setActiveRegionId((current) =>
                current === region.id ? null : region.id,
              )
            }
          >
            <span className="sr-only">{region.name}</span>
          </button>
        ))}

        {activeRegion && (
          <div
            className="export-map-popover"
            style={
              {
                "--popover-x": activeRegion.popover.x,
                "--popover-y": activeRegion.popover.y,
              } as CSSProperties
            }
            role="status"
          >
            <p>{activeRegion.name}</p>
            <strong>{activeRegion.countries}</strong>
            <span>{activeRegion.note}</span>
          </div>
        )}
      </div>

    </div>
  );
}
