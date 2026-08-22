import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { PomLandingPage } from "@/components/PomLandingPage";
import { getLocalizedLocale } from "@/i18n/config";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import {
  chineseModifiedPomLanding,
  chinesePomLandingUi,
} from "@/i18n/messages/zh-CN-pom-landings";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";
import "../../(en)/styles/products.css";

type LocalizedModifiedPomRouteProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/modified-pom-compounds" as const;

const resolveLocale = async (
  params: LocalizedModifiedPomRouteProps["params"],
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
}: LocalizedModifiedPomRouteProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const page = translateExpandedContent(
    chineseModifiedPomLanding,
    localeConfig.urlSegment,
  );

  return createPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: page.heroImage?.src,
    imageAlt: page.heroImage?.alt,
    indexable: isLocalizedReleaseIndexable(
      sourcePath,
      localeConfig.urlSegment,
    ),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedModifiedPomRoute({
  params,
}: LocalizedModifiedPomRouteProps) {
  const localeConfig = await resolveLocale(params);
  const { page, ui } = translateExpandedContent(
    { page: chineseModifiedPomLanding, ui: chinesePomLandingUi },
    localeConfig.urlSegment,
  );
  setRequestLocale(localeConfig.htmlLang);

  return (
    <PomLandingPage
      page={page}
      localeSegment={localeConfig.urlSegment}
      ui={ui}
    />
  );
}
