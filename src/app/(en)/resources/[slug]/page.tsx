import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serializeJsonLd } from "@/lib/jsonLd";
import { ResourceArticleLayout } from "@/components/ResourceArticleLayout";
import { ResourceCategoryPage } from "@/components/ResourceCategoryPage";
import { ResourceFaqExplorer } from "@/components/ResourceFaqExplorer";
import { ResourceGuideExplorer } from "@/components/ResourceGuideExplorer";
import { ResourcePageActions } from "@/components/ResourcePageActions";
import { ResourceHero } from "@/components/ResourceHero";
import {
  getResourceNavigationGroup,
  getResourceNavigationGroupForHref,
  getResourceNavigationGroupPath,
  resourceNavigationGroups,
} from "@/data/resourceNavigation";
import {
  getResourcePage,
  resourcePages,
  type ResourcePage,
} from "@/data/resources";
import { toResourceSectionId } from "@/lib/resource-page";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createTechArticleJsonLd,
} from "@/lib/seo";
import {
  getLanguageAlternates,
  type ReleasedSourcePath,
} from "@/i18n/releaseManifest";

type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return [
    ...resourceNavigationGroups.map((group) => ({ slug: group.id })),
    ...resourcePages.map((page) => ({ slug: page.slug })),
  ];
}

const getPrimaryArticleMedia = (page: ResourcePage) => {
  const feature = page.articleFeatures?.find(
    (articleFeature) => articleFeature.type === "media",
  );

  return feature?.type === "media" ? feature : undefined;
};

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const group = getResourceNavigationGroup(slug);

  if (group) {
    const sourcePath = getResourceNavigationGroupPath(
      group,
    ) as ReleasedSourcePath;

    return createPageMetadata({
      title: `${group.title} Resources | Taiyi Polymer`,
      description: group.description,
      path: sourcePath,
      image: group.image,
      imageAlt: group.imageAlt,
      languageAlternates: getLanguageAlternates(sourcePath),
    });
  }

  const page = getResourcePage(slug);

  if (!page) {
    return {};
  }

  const primaryMedia = getPrimaryArticleMedia(page);
  const sourcePath = `/resources/${page.slug}` as ReleasedSourcePath;

  return createPageMetadata({
    title: `${page.metadataTitle ?? page.title} | Taiyi Polymer`,
    description: page.description,
    path: sourcePath,
    image: primaryMedia?.src,
    imageAlt: primaryMedia?.alt,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function ResourceDetailPage({
  params,
}: ResourcePageProps) {
  const { slug } = await params;
  const group = getResourceNavigationGroup(slug);

  if (group) {
    return <ResourceCategoryPage group={group} />;
  }

  const page = getResourcePage(slug);

  if (!page) {
    notFound();
  }

  const pagePath = `/resources/${page.slug}`;
  const pageGroup = getResourceNavigationGroupForHref(pagePath);
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    ...(pageGroup
      ? [
          {
            name: pageGroup.title,
            path: getResourceNavigationGroupPath(pageGroup),
          },
        ]
      : []),
    { name: page.title, path: pagePath },
  ]);
  const faqItems = page.modules.flatMap((module) => module.faqItems ?? []);
  const hasFaqItems = faqItems.length > 0;
  const usesArticleLayout = Boolean(page.articleSections?.length);
  const usesGuideExplorer = !hasFaqItems && !usesArticleLayout;
  const usesFaqLayout = hasFaqItems || usesGuideExplorer;
  const primaryMedia = getPrimaryArticleMedia(page);
  const resourceContext = hasFaqItems
    ? "Technical FAQ"
    : usesGuideExplorer
      ? "Technical guide"
      : "Technical resource";
  const articleJsonLd = createTechArticleJsonLd({
    title: page.title,
    description: page.description,
    path: `/resources/${page.slug}`,
    image: primaryMedia?.src,
  });
  const jsonLd = [
    breadcrumbJsonLd,
    articleJsonLd,
    ...(hasFaqItems
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <main
      className={
        usesArticleLayout
          ? "min-h-screen bg-[#f2f5f7] text-slate-900"
          : "min-h-screen text-slate-900"
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />

      <section
        className={
          usesArticleLayout
            ? "w-full bg-[#f2f5f7]"
            : `resource-page-shell mesh-surface${usesFaqLayout ? " resource-faq-shell" : ""}`
        }
      >
        {!usesArticleLayout ? (
          <ResourceHero
            context={resourceContext}
            title={page.title}
            description={page.intro}
            className={usesFaqLayout ? "resource-faq-hero" : "resource-standard-hero"}
          />
        ) : null}

        {usesArticleLayout ? (
          <ResourceArticleLayout page={page} />
        ) : hasFaqItems ? (
          <ResourceFaqExplorer modules={page.modules} />
        ) : usesGuideExplorer ? (
          <ResourceGuideExplorer
            modules={page.modules}
            pageTitle={page.title}
          />
        ) : (
          <section
            className="resource-module-grid"
            aria-label={`${page.title} modules`}
          >
            {page.modules.map((module, index) => (
              <article
                id={toResourceSectionId(module.title)}
                key={module.title}
                className="resource-module-card rounded-[0.8rem] border border-blue-200 bg-white/90 p-6 shadow-[0_1.4rem_3rem_rgba(15,23,42,0.06)]"
              >
                <span className="text-xs font-extrabold tracking-wider text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950">
                  {module.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {module.description}
                </p>
                <ul className="mt-5 grid gap-3">
                  {(module.points ?? []).map((point) => (
                    <li key={point} className="leading-7 text-slate-800">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}

        {!usesArticleLayout ? (
          <ResourcePageActions
            pageTitle={page.title}
            relatedLinks={page.relatedLinks}
          />
        ) : null}
      </section>
    </main>
  );
}
