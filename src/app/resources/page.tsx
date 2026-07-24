import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getResourceNavigationGroupPath,
  resourceNavigationGroups,
} from "@/data/resourceNavigation";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

const resourcesTitle = "Technical Resources | Taiyi Nano";
const resourcesDescription =
  "Choose a technical resource path for material selection, processing and troubleshooting, or grade data and validation.";

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
    items: resourceNavigationGroups.map((group) => ({
      name: group.title,
      path: getResourceNavigationGroupPath(group),
    })),
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
                Start With the Engineering Task
              </h1>
              <p className="resource-index-description">
                Choose a path for material selection, molding and
                troubleshooting, or grade data and validation. Each section
                keeps the detailed articles in context.
              </p>
              <div className="resource-index-actions">
                <Link
                  href="/resources/material-selection"
                  className="resource-index-action resource-index-action-primary"
                >
                  Choose a Material
                </Link>
                <Link
                  href="/technical-data-sheets"
                  className="resource-index-action resource-index-action-secondary"
                >
                  Search Data / TDS
                </Link>
              </div>
            </div>
            <div
              className="resource-index-task-panel"
              aria-label="Resource paths by task"
            >
              <p className="resource-index-panel-label">Start by task</p>
              <div className="resource-index-path-list">
                {resourceNavigationGroups.map((group) => (
                  <Link
                    key={group.id}
                    href={getResourceNavigationGroupPath(group)}
                    className="resource-index-path"
                  >
                    <span>{group.navigationLabel}</span>
                    <strong>{group.title}</strong>
                    <small>{group.links.length} resources</small>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>
      </section>
    </main>
  );
}
