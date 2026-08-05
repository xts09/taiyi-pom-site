import Link from "next/link";
import { ActionPanel } from "@/components/ActionPanel";
import { DirectoryRow } from "@/components/DirectoryRow";
import { ResourceHero } from "@/components/ResourceHero";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
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
      title: `${group.title} Resources | Taiyi Polymer`,
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

      <section className="resource-page-shell resource-category-shell mesh-surface">
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
            <SectionIntro
              className="resource-directory-section-head"
              eyebrow={group.navigationLabel}
              eyebrowClassName="resource-directory-section-number"
              title="Resources in this section"
              description="Open the guide, technical note, data tool, or directory that matches the next decision in your project."
            />

            <div className="resource-directory-list stagger-list">
              {group.links.map((resource, index) => (
                <DirectoryRow
                  key={resource.href}
                  href={resource.href}
                  eyebrow={resource.type}
                  label={resource.label}
                  description={resource.description}
                  emphasized={index === 0}
                  variant="data"
                />
              ))}
            </div>
          </section>
        </section>

        <ActionPanel
          footerAdjacent
          variant="recommendation"
          title="Need Help Choosing a Starting Point?"
          className="selection-support-band resource-cta mt-12"
          eyebrow="Technical Review"
          eyebrowClassName="section-kicker mb-3"
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href="/contact">Discuss Your Application</Link>
            </Button>
          }
        >
          <p>
            Share the part, current material, target property, process, and
            document needs. We will help identify a practical material family
            and the documents needed for comparison.
          </p>
        </ActionPanel>
      </section>
    </main>
  );
}
