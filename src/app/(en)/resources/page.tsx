import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serializeJsonLd } from "@/lib/jsonLd";
import { ResourcePageMotion } from "@/components/ResourcePageMotion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DirectoryRow } from "@/components/DirectoryRow";
import { SectionIntro } from "@/components/SectionIntro";
import {
  getResourceNavigationGroupPath,
  resourceNavigationGroups,
} from "@/data/resourceNavigation";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

const resourcesTitle = "Technical Resources | Taiyi Polymer";
const resourcesMetadataTitle =
  "Material Selection & Technical Resources | Taiyi Polymer";
const resourcesDescription =
  "Choose a technical resource path for material selection, processing and troubleshooting, or grade data and validation.";

export const metadata: Metadata = createPageMetadata({
  title: resourcesMetadataTitle,
  description: resourcesDescription,
  path: "/resources",
  image: "/og-resources-material-selection.jpg",
  imageAlt: "Taiyi Polymer technical resources and material selection",
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
    <main className="text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(resourcesJsonLd),
        }}
      />
      <ResourcePageMotion>
        <section className="resource-page-shell resource-index-shell mesh-surface">
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
                Material Selection, Processing & Validation Resources
              </h1>
              <p className="resource-index-description">
                Browse practical resources for material selection, POM molding
                and troubleshooting, grade data, and alternative-grade
                validation.
              </p>
              <div className="resource-index-actions">
                <Button
                  asChild
                  size="resourceIndexAction"
                  variant="resourceIndexSecondary"
                >
                  <Link href="/technical-data-sheets">Find Grade Data & TDS</Link>
                </Button>
              </div>
            </div>
            <div
              className="resource-index-task-panel"
              aria-label="Resource paths by task"
            >
              <p className="resource-index-panel-label">
                Browse by engineering task
              </p>
              <div className="resource-index-path-list">
                {resourceNavigationGroups.map((group) => (
                  <Card key={group.id} asChild variant="interactive">
                    <Link
                      href={getResourceNavigationGroupPath(group)}
                      className="resource-index-path"
                    >
                      <span>{group.navigationLabel}</span>
                      <strong>{group.title}</strong>
                      <small>{group.links.length} resources</small>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section
          className="resource-index-directory"
          aria-labelledby="resource-directory-title"
        >
          <SectionIntro
            className="resource-index-directory-head"
            layout="split"
            title="Browse Technical Resources"
            titleId="resource-directory-title"
            description="Open the complete guide, troubleshooting, data, and FAQ directory, organized by engineering task."
          />

          <div className="resource-index-directory-groups">
            {resourceNavigationGroups.map((group) => (
              <section
                key={`directory-${group.id}`}
                className="resource-index-directory-group"
                aria-labelledby={`resource-group-${group.id}`}
              >
                <header className="resource-index-directory-group-head">
                  <div>
                    <h3 id={`resource-group-${group.id}`}>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <Link href={getResourceNavigationGroupPath(group)}>
                    View all {group.links.length}
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </header>

                <ul className="resource-index-directory-list">
                  {group.links.map((item) => (
                    <li key={`${group.id}-${item.href}`}>
                      <DirectoryRow
                        href={item.href}
                        eyebrow={item.type}
                        label={item.label}
                        description={item.description}
                        variant="compact"
                      />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div
            className="resource-index-contact-row"
            data-footer-adjacent="true"
          >
            <div>
              <h2>Need a grade-specific document?</h2>
              <p>
                Share the grade, application, required document, and project
                stage so availability can be confirmed in context.
              </p>
            </div>
            <Button asChild variant="primary" size="form">
              <Link href="/contact">
                Discuss Your Application
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </Button>
          </div>
        </section>
        </section>
      </ResourcePageMotion>
    </main>
  );
}
