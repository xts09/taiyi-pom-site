import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedPomDirectoryPage } from "@/components/localized/LocalizedPomDirectoryPage";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import { getLocalizedLocale } from "@/i18n/config";
import { chinesePomDirectoryMessages } from "@/i18n/messages/zh-CN-pom-directory";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type LocalizedPomDirectoryRouteProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/products/categories/pom" as const;

const resolveLocale = async (
  params: LocalizedPomDirectoryRouteProps["params"],
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
}: LocalizedPomDirectoryRouteProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = translateExpandedContent(
    chinesePomDirectoryMessages,
    localeConfig.urlSegment,
  );

  return createPageMetadata({
    title: messages.metadata.title,
    description: messages.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/generated/pom-material-hero.webp",
    imageAlt: messages.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(
      sourcePath,
      localeConfig.urlSegment,
    ),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedPomDirectoryRoute({
  params,
}: LocalizedPomDirectoryRouteProps) {
  const localeConfig = await resolveLocale(params);
  setRequestLocale(localeConfig.htmlLang);

  return (
    <LocalizedPomDirectoryPage
      localeSegment={localeConfig.urlSegment}
      inLanguage={localeConfig.htmlLang}
    />
  );
}
