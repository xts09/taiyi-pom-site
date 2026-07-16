import type { Metadata } from "next";
import Link from "next/link";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { ResourceHero } from "@/components/ResourceHero";
import { resourceIndexGroups } from "@/data/resources";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Technical Resources | Taiyi Nano",
  description:
    "Browse Taiyi Nano technical resources for POM material selection, processing review, application notes, FAQ topics, and technical data sheets.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="resource-page-shell mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <ResourceHero
          context="Technical resources"
          title="Resources"
          description="Practical guides and data references for modified POM material selection, processing, applications, and grade review."
          className="resource-index-hero"
        />

        <section
          className="resource-directory"
          aria-label="Technical resource topics"
        >
          {resourceIndexGroups.map((group) => (
            <section
              key={group.id}
              id={group.id}
              className="resource-directory-section"
            >
              <div className="resource-directory-section-head">
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
                    <strong>{resource.label}</strong>
                    <em>{resource.description}</em>
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
