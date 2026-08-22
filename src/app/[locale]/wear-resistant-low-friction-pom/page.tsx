import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { PomLandingPage } from "@/components/PomLandingPage";
import { getLocalizedLocale } from "@/i18n/config";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import {
  chinesePomLandingUi,
  chineseWearLowFrictionPomLanding,
} from "@/i18n/messages/zh-CN-pom-landings";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";
import "../../(en)/styles/products.css";

type LocalizedWearPomRouteProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/wear-resistant-low-friction-pom" as const;

const resolveLocale = async (params: LocalizedWearPomRouteProps["params"]) => {
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
}: LocalizedWearPomRouteProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const page = translateExpandedContent(
    chineseWearLowFrictionPomLanding,
    localeConfig.urlSegment,
  );

  return createPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/generated/pom-wear-natural-pellets-hero-wide.webp",
    imageAlt: translateExpandedContent(
      "台益耐磨与低摩擦 POM 材料",
      localeConfig.urlSegment,
    ),
    indexable: isLocalizedReleaseIndexable(
      sourcePath,
      localeConfig.urlSegment,
    ),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedWearPomRoute({
  params,
}: LocalizedWearPomRouteProps) {
  const localeConfig = await resolveLocale(params);
  const { page, ui } = translateExpandedContent(
    { page: chineseWearLowFrictionPomLanding, ui: chinesePomLandingUi },
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
