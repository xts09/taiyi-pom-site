import Link from "next/link";
import { serializeJsonLd } from "@/lib/jsonLd";
import { ActionPanel } from "@/components/ActionPanel";
import { DirectoryRow } from "@/components/DirectoryRow";
import { ResourceHero } from "@/components/ResourceHero";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import {
  resourceNavigationGroups,
  type ResourceNavigationGroup,
  type ResourceNavigationLink,
} from "@/data/resourceNavigation";
import type { LocalizedUrlSegment } from "@/i18n/config";
import type { ResourceIndexMessages } from "@/i18n/resourceTypes";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
} from "@/lib/seo";

type ResourceCategoryPageProps = {
  group: ResourceCategoryNavigationGroup;
  navigationGroups?: ResourceCategoryNavigationGroup[];
  localeSegment?: LocalizedUrlSegment;
  inLanguage?: string;
  messages?: Pick<ResourceIndexMessages, "breadcrumb" | "category">;
};

type ResourceCategoryNavigationGroup = Omit<
  ResourceNavigationGroup,
  "links"
> & {
  links: Array<Omit<ResourceNavigationLink, "type"> & { type: string }>;
};

const defaultMessages = {
  breadcrumb: {
    home: "Home",
    resources: "Resources",
  },
  category: {
    context: "Technical Resources",
    navigationAria: "Technical resource sections",
    browseLabel: "Browse resources",
    overview: "Overview",
    directoryAriaSuffix: "resources",
    directoryTitle: "Resources in this section",
    directoryDescription:
      "Open the guide, technical note, data tool, or directory that matches the next decision in your project.",
    reviewEyebrow: "Technical Review",
    reviewTitle: "Need Help Choosing a Starting Point?",
    reviewDescription:
      "Share the part, current material, target property, process, and document needs. We will help identify a practical material family and the documents needed for comparison.",
    reviewAction: "Discuss Your Application",
  },
};

const getResourceCategoryPath = (group: { id: string }) =>
  `/resources/${group.id}`;

export function ResourceCategoryPage({
  group,
  navigationGroups = resourceNavigationGroups,
  localeSegment,
  inLanguage,
  messages,
}: ResourceCategoryPageProps) {
  const copy = messages ?? defaultMessages;
  const sourcePath = getResourceCategoryPath(group);
  const path = getLocalizedHref(sourcePath, localeSegment);
  const localizedHref = (href: string) =>
    getLocalizedHref(href, localeSegment);
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: copy.breadcrumb.home, path: localizedHref("/") },
      { name: copy.breadcrumb.resources, path: localizedHref("/resources") },
      { name: group.title, path },
    ]),
    createCollectionPageJsonLd({
      title: localeSegment
        ? `${group.title}${copy.category.context} | Taiyi Polymer`
        : `${group.title} Resources | Taiyi Polymer`,
      description: group.description,
      path,
      items: group.links.map((item) => ({
        name: item.label,
        path: localizedHref(item.href),
      })),
      inLanguage,
    }),
  ];

  return (
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />

      <section className="resource-page-shell resource-category-shell mesh-surface">
        <ResourceHero
          context={copy.category.context}
          title={group.title}
          description={group.description}
          className="resource-standard-hero"
        />

        <nav
          className="resource-task-nav"
          aria-label={copy.category.navigationAria}
        >
          <span>{copy.category.browseLabel}</span>
          <Link href={localizedHref("/resources")}>
            {copy.category.overview}
          </Link>
          {navigationGroups.map((item) => (
            <Link
              key={item.id}
              href={localizedHref(getResourceCategoryPath(item))}
              aria-current={item.id === group.id ? "page" : undefined}
            >
              {item.navigationLabel}
            </Link>
          ))}
        </nav>

        <section
          className="resource-directory"
          aria-label={`${group.title} ${copy.category.directoryAriaSuffix}`}
        >
          <section className="resource-directory-section">
            <SectionIntro
              className="resource-directory-section-head"
              eyebrow={group.navigationLabel}
              eyebrowClassName="resource-directory-section-number"
              title={copy.category.directoryTitle}
              description={copy.category.directoryDescription}
            />

            <div className="resource-directory-list stagger-list">
              {group.links.map((resource, index) => (
                <DirectoryRow
                  key={resource.href}
                  href={localizedHref(resource.href)}
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
          title={copy.category.reviewTitle}
          className="selection-support-band resource-cta mt-12"
          eyebrow={copy.category.reviewEyebrow}
          eyebrowClassName="section-kicker mb-3"
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href={localizedHref("/contact")}>
                {copy.category.reviewAction}
              </Link>
            </Button>
          }
        >
          <p>{copy.category.reviewDescription}</p>
        </ActionPanel>
      </section>
    </main>
  );
}
