import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { ResourceHero } from "@/components/ResourceHero";
import {
  getResourceNavigationGroupPath,
  resourceNavigationGroups,
  type ResourceNavigationGroup,
} from "@/data/resourceNavigation";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
} from "@/lib/seo";

type ResourceCategoryPageProps = {
  group: ResourceNavigationGroup;
};

export function ResourceCategoryPage({ group }: ResourceCategoryPageProps) {
  const path = getResourceNavigationGroupPath(group);
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: group.title, path },
    ]),
    createCollectionPageJsonLd({
      title: `${group.title} Resources | Taiyi Nano`,
      description: group.description,
      path,
      items: group.links.map((item) => ({
        name: item.label,
        path: item.href,
      })),
    }),
  ];

  return (
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="resource-page-shell resource-category-shell mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <ResourceHero
          context="Technical Resources"
          title={group.title}
          description={group.description}
          className="resource-standard-hero"
        />

        <nav className="resource-task-nav" aria-label="Technical resource sections">
          <span>Browse resources</span>
          <Link href="/resources">Overview</Link>
          {resourceNavigationGroups.map((item) => (
            <Link
              key={item.id}
              href={getResourceNavigationGroupPath(item)}
              aria-current={item.id === group.id ? "page" : undefined}
            >
              {item.navigationLabel}
            </Link>
          ))}
        </nav>

        <section className="resource-directory" aria-label={`${group.title} resources`}>
          <section className="resource-directory-section">
            <div className="resource-directory-section-head">
              <span className="resource-directory-section-number">
                {group.navigationLabel}
              </span>
              <h2>Resources in this section</h2>
              <p>
                Open the guide, technical note, data tool, or directory that
                matches the next decision in your project.
              </p>
            </div>

            <div className="resource-directory-list">
              {group.links.map((resource, index) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className={`resource-directory-link${
                    index === 0 ? " resource-directory-link-primary" : ""
                  }`}
                >
                  <span className="resource-directory-type">{resource.type}</span>
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
        </section>

        <MaterialRecommendationCta
          kicker="Technical Review"
          title="Need Help Choosing a Starting Point?"
          className="selection-support-band resource-cta mt-12"
        >
          <p>
            Share the part, current material, target property, process, and
            document needs for a project-based material review.
          </p>
        </MaterialRecommendationCta>
      </section>
    </main>
  );
}
