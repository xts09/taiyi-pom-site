import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { EngineeringGfLandingPage } from "@/components/EngineeringGfLandingPage";
import { getEngineeringGfLandingMessages } from "@/i18n/engineeringGfLandingMessages";
import { getLocalizedLocale } from "@/i18n/config";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type LocalizedPa6GfRouteProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath =
  "/products/categories/glass-fiber-reinforced-pa6-compound" as const;

const resolveLocale = async (
  params: LocalizedPa6GfRouteProps["params"],
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
}: LocalizedPa6GfRouteProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const { page, ui } = getEngineeringGfLandingMessages(
    "PA6",
    localeConfig.urlSegment,
  );

  return createPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/generated/landing/home-dark-satin-wave-v1.webp",
    imageAlt: ui.heroImageAlt,
    indexable: isLocalizedReleaseIndexable(
      sourcePath,
      localeConfig.urlSegment,
    ),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedPa6GfRoute({
  params,
}: LocalizedPa6GfRouteProps) {
  const localeConfig = await resolveLocale(params);
  setRequestLocale(localeConfig.htmlLang);

  return (
    <EngineeringGfLandingPage
      polymer="PA6"
      localeSegment={localeConfig.urlSegment}
      inLanguage={localeConfig.htmlLang}
    />
  );
}
