import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { PomFamilyMasterVisual } from "@/data/pomFamilyVisuals";

export type PomFamilyMapItem = {
  id: string;
  href: string;
  title: ReactNode;
  description: string;
  countLabel: string;
  image: PomFamilyMasterVisual;
  imageAlt: string;
  active?: boolean;
};

export type PomFamilyMapGroup = {
  id: string;
  title: string;
  description: string;
  items: readonly PomFamilyMapItem[];
};

type PomFamilyMapProps = {
  title: string;
  description: string;
  groups: readonly PomFamilyMapGroup[];
};

export function PomFamilyMap({
  title,
  description,
  groups,
}: PomFamilyMapProps) {
  return (
    <section
      id="material-families"
      className="product-family-map products-motion-filter"
      aria-labelledby="product-family-map-title"
    >
      <div className="product-family-map-intro">
        <h2 id="product-family-map-title">{title}</h2>
        <p>{description}</p>
      </div>

      <div className="product-family-group-grid">
        {groups.map((group) => {
          const headingId = `product-family-group-${group.id}`;

          return (
            <section
              key={group.id}
              className="product-family-group"
              aria-labelledby={headingId}
            >
              <header className="product-family-group-header">
                <h3 id={headingId}>{group.title}</h3>
                <p>{group.description}</p>
              </header>

              <div className="product-family-group-list">
                {group.items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`product-family-direction${
                      item.active ? " is-active" : ""
                    }`}
                    aria-current={item.active ? "page" : undefined}
                  >
                    <span className="product-family-direction-media">
                      <Image
                        fill
                        src={item.image.src}
                        alt={item.imageAlt}
                        sizes="(min-width: 80rem) 8rem, (min-width: 48rem) 18vw, 7rem"
                        style={{ objectPosition: item.image.objectPosition }}
                      />
                    </span>
                    <span className="product-family-direction-copy">
                      <strong className="product-family-direction-title">
                        {item.title}
                      </strong>
                      <span className="product-family-direction-description">
                        {item.description}
                      </span>
                      <span className="product-family-direction-meta">
                        <span>{item.countLabel}</span>
                        <span
                          className="product-family-direction-arrow"
                          aria-hidden="true"
                        >
                          &rarr;
                        </span>
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
