import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedProductCategoryContent } from "@/components/localized/LocalizedBasePomCategoryPage";
import { getLocalizedLocale } from "@/i18n/config";
import { loadProductFunnelMessages } from "@/i18n/productFunnelMessages";
import {
  getLocalizedCategoryMessages,
  getLocalizedCategorySourcePath,
  isLocalizedProductCategorySlug,
  localizedProductCategorySlugs,
} from "@/i18n/productFunnelTypes";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type LocalizedProductCategoryPageProps = {
  params: Promise<{ locale: string; category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedProductCategorySlugs.map((category) => ({ category }));
}
const resolveRoute = async (
  params: LocalizedProductCategoryPageProps["params"],
) => {
  const { locale, category } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    !isLocalizedProductCategorySlug(category)
  ) {
    notFound();
  }

  return { localeConfig, category };
};

export async function generateMetadata({
  params,
}: LocalizedProductCategoryPageProps): Promise<Metadata> {
  const { localeConfig, category } = await resolveRoute(params);
  const messages = await loadProductFunnelMessages(localeConfig.locale);
  const copy = getLocalizedCategoryMessages(messages, category);
  const sourcePath = getLocalizedCategorySourcePath(category);

  return createPageMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/generated/pom-material-hero.webp",
    imageAlt: copy.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(sourcePath),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedProductCategoryPage({
  params,
}: LocalizedProductCategoryPageProps) {
  const { localeConfig, category } = await resolveRoute(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadProductFunnelMessages(localeConfig.locale);

  return (
    <LocalizedProductCategoryContent
      categorySlug={category}
      messages={messages}
      localeSegment={localeConfig.urlSegment}
      inLanguage={localeConfig.htmlLang}
    />
  );
}
