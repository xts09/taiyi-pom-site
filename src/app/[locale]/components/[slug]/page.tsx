import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { DetailedComponentSolution } from "@/app/(en)/components/[slug]/DetailedComponentSolution";
import { applications } from "@/data/applications";
import { resolveComponentApplicationReferences } from "@/data/applicationComponentRelations";
import {
  loadApplicationProfiles,
  localizeApplication,
} from "@/i18n/applicationMessages";
import { isLocalizedApplicationSlug } from "@/i18n/applicationTypes";
import {
  getLocalizedComponentDetail,
  getLocalizedComponentIndexMessages,
  getLocalizedComponentSolution,
  isLocalizedComponentSlug,
  localizedComponentSlugs,
} from "@/i18n/componentMessages";
import { getLocalizedLocale } from "@/i18n/config";
import { createComponentMaterialOwnerLabels } from "@/i18n/componentMaterialOwnerLabels";
import { translateExpandedText } from "@/i18n/expandedLocaleContent";
import { loadMessages } from "@/i18n/messages";
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

export function generateStaticParams() {
  return localizedComponentSlugs.map((slug) => ({ slug }));
}

const resolveRoute = async (
  params: LocalizedComponentDetailRouteProps["params"],
) => {
  const { locale, slug } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    !isLocalizedComponentSlug(slug)
  ) {
    notFound();
  }

  const sourcePath = `/components/${slug}` as ReleasedSourcePath;

  if (!isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment)) {
    notFound();
  }

  return {
    localeConfig,
    detail: getLocalizedComponentDetail(slug, localeConfig.urlSegment),
    messages: getLocalizedComponentIndexMessages(localeConfig.urlSegment),
    solution: getLocalizedComponentSolution(slug, localeConfig.urlSegment),
    sourcePath,
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
  const { localeConfig, detail, messages, solution, sourcePath } =
    await resolveRoute(params);
  setRequestLocale(localeConfig.htmlLang);
  const [applicationProfiles, siteMessages] = await Promise.all([
    loadApplicationProfiles(localeConfig.urlSegment),
    loadMessages(localeConfig.locale),
  ]);
  const localizedApplications = applications.map((application) => {
    if (!isLocalizedApplicationSlug(application.slug)) {
      throw new Error(`Missing application profile: ${application.slug}`);
    }

    return localizeApplication(
      application,
      applicationProfiles[application.slug],
    );
  });
  const applicationReferences = resolveComponentApplicationReferences(
    solution.slug,
    localizedApplications,
  );
  const pagePath = getLocalizedHref(sourcePath, localeConfig.urlSegment);
  const detailJsonLd = [
    createBreadcrumbJsonLd([
      {
        name: translateExpandedText("首页", localeConfig.urlSegment),
        path: getLocalizedHref("/", localeConfig.urlSegment),
      },
      {
        name: messages.detailUi.breadcrumbs.applications,
        path: getLocalizedHref("/applications", localeConfig.urlSegment),
      },
      {
        name: messages.detailUi.breadcrumbs.components,
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
        applicationReferences={applicationReferences}
        detail={detail}
        solution={solution}
        localeSegment={localeConfig.urlSegment}
        materialOwnerLabels={createComponentMaterialOwnerLabels(siteMessages)}
        ui={messages.detailUi}
      />
    </>
  );
}
