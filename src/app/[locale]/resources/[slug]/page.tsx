import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ResourceArticleLayout } from "@/components/ResourceArticleLayout";
import { ResourceCategoryPage } from "@/components/ResourceCategoryPage";
import { ResourceFaqExplorer } from "@/components/ResourceFaqExplorer";
import { ResourceGuideExplorer } from "@/components/ResourceGuideExplorer";
import { ResourceHero } from "@/components/ResourceHero";
import { ResourcePageActions } from "@/components/ResourcePageActions";
import type { ResourcePage } from "@/data/resources";
import { getLocalizedLocale } from "@/i18n/config";
import {
  chineseResourceIndexMessages as messages,
  chineseResourceNavigationGroups,
  getChineseResourceNavigationGroup,
  getChineseResourcePage,
} from "@/i18n/resourceMessages";
import {
  isLocalizedResourceArticleSlug,
  isLocalizedResourceGroupId,
  localizedResourceArticleSlugs,
  localizedResourceGroupIds,
} from "@/i18n/resourceTypes";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
  type ReleasedSourcePath,
} from "@/i18n/releaseManifest";
import { serializeJsonLd } from "@/lib/jsonLd";
import { toResourceSectionId } from "@/lib/resource-page";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createTechArticleJsonLd,
} from "@/lib/seo";

type LocalizedResourceDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...localizedResourceGroupIds.map((slug) => ({ locale: "zh", slug })),
    ...localizedResourceArticleSlugs.map((slug) => ({
      locale: "zh",
      slug,
    })),
  ];
}

const getPrimaryArticleMedia = (page: ResourcePage) => {
  const feature = page.articleFeatures?.find(
    (articleFeature) => articleFeature.type === "media",
  );

  return feature?.type === "media" ? feature : undefined;
};

const resolveRoute = async (
  params: LocalizedResourceDetailPageProps["params"],
) => {
  const { locale, slug } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    localeConfig.locale !== "zh-CN"
  ) {
    notFound();
  }

  if (isLocalizedResourceGroupId(slug)) {
    const group = getChineseResourceNavigationGroup(slug);

    if (!group) {
      notFound();
    }

    return {
      kind: "group" as const,
      localeConfig,
      group,
      sourcePath: `/resources/${slug}` as ReleasedSourcePath,
    };
  }

  if (!isLocalizedResourceArticleSlug(slug)) {
    notFound();
  }

  return {
    kind: "article" as const,
    localeConfig,
    page: getChineseResourcePage(slug),
    sourcePath: `/resources/${slug}` as ReleasedSourcePath,
  };
};

export async function generateMetadata({
  params,
}: LocalizedResourceDetailPageProps): Promise<Metadata> {
  const route = await resolveRoute(params);
  const path = getLocalizedHref(
    route.sourcePath,
    route.localeConfig.urlSegment,
  );

  if (route.kind === "group") {
    return createPageMetadata({
      title: `${route.group.title}${messages.category.context} | Taiyi Polymer`,
      description: route.group.description,
      path,
      image: route.group.image,
      imageAlt: route.group.imageAlt,
      indexable: isLocalizedReleaseIndexable(
        route.sourcePath,
        route.localeConfig.urlSegment,
      ),
      openGraphLocale: route.localeConfig.openGraphLocale,
      languageAlternates: getLanguageAlternates(route.sourcePath),
    });
  }

  const primaryMedia = getPrimaryArticleMedia(route.page);

  return createPageMetadata({
    title: `${route.page.metadataTitle ?? route.page.title} | Taiyi Polymer`,
    description: route.page.description,
    path,
    image: primaryMedia?.src,
    imageAlt: primaryMedia?.alt,
    indexable: isLocalizedReleaseIndexable(
      route.sourcePath,
      route.localeConfig.urlSegment,
    ),
    openGraphLocale: route.localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(route.sourcePath),
  });
}

export default async function LocalizedResourceDetailPage({
  params,
}: LocalizedResourceDetailPageProps) {
  const route = await resolveRoute(params);
  setRequestLocale(route.localeConfig.htmlLang);

  if (route.kind === "group") {
    return (
      <ResourceCategoryPage
        group={route.group}
        navigationGroups={chineseResourceNavigationGroups}
        localeSegment={route.localeConfig.urlSegment}
        inLanguage={route.localeConfig.htmlLang}
        messages={messages}
      />
    );
  }

  const { localeConfig, page, sourcePath } = route;
  const pagePath = getLocalizedHref(sourcePath, localeConfig.urlSegment);
  const localizedHref = (href: string) =>
    getLocalizedHref(href, localeConfig.urlSegment);
  const pageGroup = chineseResourceNavigationGroups.find((group) =>
    group.links.some((link) => link.href === sourcePath),
  );
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: messages.articleUi.breadcrumbHome, path: localizedHref("/") },
    {
      name: messages.articleUi.breadcrumbResources,
      path: localizedHref("/resources"),
    },
    ...(pageGroup
      ? [
          {
            name: pageGroup.title,
            path: localizedHref(`/resources/${pageGroup.id}`),
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
    ? messages.articleUi.faqContext
    : usesGuideExplorer
      ? messages.articleUi.guideContext
      : messages.articleUi.resourceContext;
  const articleJsonLd = createTechArticleJsonLd({
    title: page.title,
    description: page.description,
    path: pagePath,
    image: primaryMedia?.src,
    inLanguage: localeConfig.htmlLang,
  });
  const jsonLd = [
    breadcrumbJsonLd,
    articleJsonLd,
    ...(hasFaqItems
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: localeConfig.htmlLang,
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
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
            className={
              usesFaqLayout
                ? "resource-faq-hero"
                : "resource-standard-hero"
            }
          />
        ) : null}

        {usesArticleLayout ? (
          <ResourceArticleLayout
            page={page}
            localeSegment={localeConfig.urlSegment}
            messages={messages.articleUi}
          />
        ) : hasFaqItems ? (
          <ResourceFaqExplorer
            modules={page.modules}
            messages={messages.faqExplorer}
          />
        ) : usesGuideExplorer ? (
          <ResourceGuideExplorer
            modules={page.modules}
            pageTitle={page.title}
            messages={messages.guideExplorer}
          />
        ) : (
          <section
            className="resource-module-grid"
            aria-label={`${page.title} ${messages.articleUi.modulesAriaSuffix}`}
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
            localeSegment={localeConfig.urlSegment}
            messages={messages.articleUi}
          />
        ) : null}
      </section>
    </main>
  );
}
