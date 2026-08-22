import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedComponentsPage } from "@/components/localized/LocalizedComponentsPage";
import {
  getLocalizedComponentIndexMessages,
  getLocalizedComponentSolutions,
} from "@/i18n/componentMessages";
import { getLocalizedLocale } from "@/i18n/config";
import { translateExpandedText } from "@/i18n/expandedLocaleContent";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

type LocalizedComponentsRouteProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/components" as const;

const resolveLocale = async (
  params: LocalizedComponentsRouteProps["params"],
) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    !isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment)
  ) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
}: LocalizedComponentsRouteProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = getLocalizedComponentIndexMessages(
    localeConfig.urlSegment,
  );

  return createPageMetadata({
    title: messages.metadata.title,
    description: messages.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/applications/parts/generated/components-directory-gears-cad-v2.webp",
    imageAlt: messages.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(
      sourcePath,
      localeConfig.urlSegment,
    ),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedComponentsRoute({
  params,
}: LocalizedComponentsRouteProps) {
  const localeConfig = await resolveLocale(params);
  const messages = getLocalizedComponentIndexMessages(
    localeConfig.urlSegment,
  );
  const componentSolutions = getLocalizedComponentSolutions(
    localeConfig.urlSegment,
  );
  setRequestLocale(localeConfig.htmlLang);
  const pagePath = getLocalizedHref(sourcePath, localeConfig.urlSegment);
  const pageJsonLd = [
    createBreadcrumbJsonLd([
      {
        name: translateExpandedText("首页", localeConfig.urlSegment),
        path: getLocalizedHref("/", localeConfig.urlSegment),
      },
      {
        name: messages.detailUi.breadcrumbs.applications,
        path: getLocalizedHref("/applications", localeConfig.urlSegment),
      },
      { name: messages.detailUi.breadcrumbs.components, path: pagePath },
    ]),
    createCollectionPageJsonLd({
      title: messages.metadata.title,
      description: messages.metadata.description,
      path: pagePath,
      items: componentSolutions.map((solution) => ({
        name: solution.title,
        path: getLocalizedHref(
          `/components/${solution.slug}`,
          localeConfig.urlSegment,
        ),
      })),
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageJsonLd) }}
      />
      <LocalizedComponentsPage localeSegment={localeConfig.urlSegment} />
    </>
  );
}
