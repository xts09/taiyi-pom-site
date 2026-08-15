"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { publicPath } from "@/lib/paths";

gsap.registerPlugin(useGSAP);

export type ExportRegionId = "central-asia" | "europe" | "east-asia" | "americas";

type MapMarker = {
  id: string;
  label: string;
  region: ExportRegionId;
  x: number;
  y: number;
};

type RoutePath = MapMarker & {
  path: string;
};

const markers: ReadonlyArray<MapMarker> = [
  { id: "uzbekistan", label: "Uzbekistan", region: "central-asia", x: 56, y: 15 },
  { id: "kazakhstan", label: "Kazakhstan", region: "central-asia", x: 59, y: 11 },
  { id: "poland", label: "Poland", region: "europe", x: 46.4, y: 13.2 },
  { id: "turkey", label: "Turkey", region: "europe", x: 50.1, y: 17.2 },
  { id: "south-korea", label: "South Korea", region: "east-asia", x: 72.6, y: 16.6 },
  { id: "japan", label: "Japan", region: "east-asia", x: 76.4, y: 14 },
  { id: "mexico", label: "Mexico", region: "americas", x: 19, y: 21.7 },
  { id: "brazil", label: "Brazil", region: "americas", x: 30.3, y: 30.2 },
  { id: "argentina", label: "Argentina", region: "americas", x: 27.7, y: 35.1 },
];

const origin = { x: 65.6, y: 17.2 };

const routePaths: ReadonlyArray<RoutePath> = markers.map((marker) => {
  const controlX = (origin.x + marker.x) / 2;
  const controlY = Math.max(4, Math.min(origin.y, marker.y) - 7);

  return {
    ...marker,
    path: `M ${origin.x} ${origin.y} Q ${controlX} ${controlY} ${marker.x} ${marker.y}`,
  };
});

type ExportMarketsMapProps = {
  activeRegion: ExportRegionId | null;
  imageAlt: string;
};

export function ExportMarketsMap({
  activeRegion,
  imageAlt,
}: ExportMarketsMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!activeRegion) {
        return;
      }

      const activeRoutes = gsap.utils.toArray<SVGPathElement>(
        `.export-map-route[data-region="${activeRegion}"]`,
      );

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(activeRoutes, { strokeDasharray: 1000, strokeDashoffset: 0 });
        return;
      }

      gsap.fromTo(
        activeRoutes,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 0.95,
          ease: "power2.out",
          stagger: 0.1,
          overwrite: true,
        },
      );
    },
    { dependencies: [activeRegion], revertOnUpdate: true, scope: mapRef },
  );

  return (
    <div ref={mapRef} className="export-map-stage">
      <Image
        className="export-map-image"
        src={publicPath("/generated/landing/export-routes-map-v5.png")}
        alt={imageAlt}
        width={1983}
        height={793}
        sizes="(min-width: 1024px) 76vw, 100vw"
      />

      <svg
        className="export-map-markers"
        data-active-region={activeRegion ?? undefined}
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        {routePaths.map((route) => {
          const isActive = activeRegion === route.region;

          return (
            <g
              key={route.id}
              className={`export-map-route-group${isActive ? " is-active" : ""}`}
              data-region={route.region}
            >
              <path
                className="export-map-route-hit"
                d={route.path}
                pathLength="1"
              />
              <path
                className={`export-map-route${isActive ? " is-active" : ""}`}
                data-region={route.region}
                d={route.path}
                pathLength="1"
              />
              <circle
                className={`export-map-destination${isActive ? " is-active" : ""}`}
                cx={route.x}
                cy={route.y}
                r="0.48"
              />
            </g>
          );
        })}

        <circle className="export-map-origin" cx={origin.x} cy={origin.y} r="0.72" />
      </svg>
    </div>
  );
}
