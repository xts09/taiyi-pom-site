import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedComponentsPage } from "@/components/localized/LocalizedComponentsPage";
import {
  chineseComponentIndexMessages as messages,
  chineseComponentSolutions,
} from "@/i18n/componentMessages";
import { getLocalizedLocale } from "@/i18n/config";
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
    localeConfig.locale !== "zh-CN"
  ) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
}: LocalizedComponentsRouteProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);

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
  setRequestLocale(localeConfig.htmlLang);
  const pagePath = getLocalizedHref(sourcePath, localeConfig.urlSegment);
  const pageJsonLd = [
    createBreadcrumbJsonLd([
      { name: "首页", path: getLocalizedHref("/", localeConfig.urlSegment) },
      {
        name: "应用领域",
        path: getLocalizedHref("/applications", localeConfig.urlSegment),
      },
      { name: "零部件方案", path: pagePath },
    ]),
    createCollectionPageJsonLd({
      title: messages.metadata.title,
      description: messages.metadata.description,
      path: pagePath,
      items: chineseComponentSolutions.map((solution) => ({
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
