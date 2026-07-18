import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { resourceIndexGroups } from "@/data/resources";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

const resourcesTitle = "Technical Resources | Taiyi Nano";
const resourcesDescription =
  "Browse Taiyi Nano technical resources for POM material selection, processing review, application notes, FAQ topics, and technical data sheets.";

export const metadata: Metadata = createPageMetadata({
  title: resourcesTitle,
  description: resourcesDescription,
  path: "/resources",
});

const resourcesJsonLd = [
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
  ]),
  createCollectionPageJsonLd({
    title: resourcesTitle,
    description: resourcesDescription,
    path: "/resources",
    items: resourceIndexGroups.flatMap((group) =>
      group.links.map((resource) => ({
        name: resource.label,
        path: resource.href,
      })),
    ),
  }),
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resourcesJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="resource-page-shell resource-index-shell mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <header
          className="resource-index-hero"
          aria-labelledby="resource-index-title"
        >
          <div className="resource-index-hero-card">
            <Image
              src="/generated/applications/common/cad-overlay-transparent.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 82rem) 82rem, 100vw"
              className="resource-index-hero-media"
            />
            <div className="resource-index-hero-content">
              <p className="resource-index-kicker">Technical Resources</p>
              <h1 id="resource-index-title">
                Resources for Material Selection &amp; Grade Review
              </h1>
              <p className="resource-index-description">
                Practical guides and data references for modified POM material
                selection, processing, applications, and technical data review.
              </p>
              <div className="resource-index-actions">
                <Link
                  href="/technical-data-sheets"
                  className="resource-index-action resource-index-action-primary"
                >
                  Search Data / TDS
                </Link>
                <Link
                  href="/resources/material-selection-guide"
                  className="resource-index-action resource-index-action-secondary"
                >
                  Start with Material Selection
                </Link>
              </div>
            </div>
          </div>
        </header>

        <nav className="resource-task-nav" aria-label="Browse resources by task">
          <span>Browse by task</span>
          {resourceIndexGroups.map((group) => (
            <Link key={group.id} href={`#${group.id}`}>
              {group.navigationLabel}
            </Link>
          ))}
        </nav>

        <section
          className="resource-directory"
          aria-label="Technical resource topics"
        >
          {resourceIndexGroups.map((group, groupIndex) => (
            <section
              key={group.id}
              id={group.id}
              className="resource-directory-section"
            >
              <div className="resource-directory-section-head">
                <span className="resource-directory-section-number">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <div className="resource-directory-list">
                {group.links.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="resource-directory-link"
                  >
                    <span className="resource-directory-type">
                      {resource.type}
                    </span>
                    <strong>{resource.label}</strong>
                    <span className="resource-directory-description">
                      {resource.description}
                    </span>
                    <ArrowUpRight
                      className="resource-directory-arrow"
                      aria-hidden="true"
                      strokeWidth={1.8}
                    />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </section>

        <MaterialRecommendationCta
          kicker="Technical Review"
          title="Need a Starting Point?"
          className="selection-support-band resource-cta mt-12"
        >
          <p>
            Send the part, current material, target property, and document
            needs. We will help screen the right material direction.
          </p>
        </MaterialRecommendationCta>
      </section>
    </main>
  );
}
