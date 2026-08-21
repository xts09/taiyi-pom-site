import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { DetailedComponentSolution } from "@/app/(en)/components/[slug]/DetailedComponentSolution";
import {
  chineseComponentIndexMessages,
  getChineseComponentDetail,
  getChineseComponentSolution,
  isLocalizedComponentSlug,
  localizedComponentSlugs,
} from "@/i18n/componentMessages";
import { getLocalizedLocale } from "@/i18n/config";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
  type ReleasedSourcePath,
} from "@/i18n/releaseManifest";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

type LocalizedComponentDetailRouteProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  return params.locale === "zh"
    ? localizedComponentSlugs.map((slug) => ({ slug }))
    : [];
}

const resolveRoute = async (
  params: LocalizedComponentDetailRouteProps["params"],
) => {
  const { locale, slug } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    localeConfig.locale !== "zh-CN" ||
    !isLocalizedComponentSlug(slug)
  ) {
    notFound();
  }

  return {
    localeConfig,
    detail: getChineseComponentDetail(slug),
    solution: getChineseComponentSolution(slug),
    sourcePath: `/components/${slug}` as ReleasedSourcePath,
  };
};

export async function generateMetadata({
  params,
}: LocalizedComponentDetailRouteProps): Promise<Metadata> {
  const { localeConfig, detail, sourcePath } = await resolveRoute(params);

  return createPageMetadata({
    title: detail.seo.title,
    description: detail.seo.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: detail.seo.image,
    imageAlt: detail.seo.imageAlt,
    indexable: isLocalizedReleaseIndexable(
      sourcePath,
      localeConfig.urlSegment,
    ),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedComponentDetailRoute({
  params,
}: LocalizedComponentDetailRouteProps) {
  const { localeConfig, detail, solution, sourcePath } =
    await resolveRoute(params);
  setRequestLocale(localeConfig.htmlLang);
  const pagePath = getLocalizedHref(sourcePath, localeConfig.urlSegment);
  const detailJsonLd = [
    createBreadcrumbJsonLd([
      { name: "首页", path: getLocalizedHref("/", localeConfig.urlSegment) },
      {
        name: chineseComponentIndexMessages.detailUi.breadcrumbs.applications,
        path: getLocalizedHref("/applications", localeConfig.urlSegment),
      },
      {
        name: chineseComponentIndexMessages.detailUi.breadcrumbs.components,
        path: getLocalizedHref("/components", localeConfig.urlSegment),
      },
      { name: solution.title, path: pagePath },
    ]),
    {
      ...createWebPageJsonLd({
        title: detail.seo.title,
        description: detail.seo.description,
        path: pagePath,
        image: detail.seo.image,
      }),
      inLanguage: localeConfig.htmlLang,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(detailJsonLd) }}
      />
      <DetailedComponentSolution
        detail={detail}
        solution={solution}
        localeSegment={localeConfig.urlSegment}
        ui={chineseComponentIndexMessages.detailUi}
      />
    </>
  );
}
