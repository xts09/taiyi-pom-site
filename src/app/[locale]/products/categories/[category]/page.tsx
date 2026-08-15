import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedBasePomCategoryPage } from "@/components/localized/LocalizedBasePomCategoryPage";
import { getLocalizedLocale } from "@/i18n/config";
import { loadProductFunnelMessages } from "@/i18n/productFunnelMessages";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const categorySlug = "base-pom-resin";
const sourcePath = `/products/categories/${categorySlug}` as const;

type LocalizedProductCategoryPageProps = {
  params: Promise<{ locale: string; category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ category: categorySlug }];
}
const resolveRoute = async (
  params: LocalizedProductCategoryPageProps["params"],
) => {
  const { locale, category } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    category !== categorySlug
  ) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
}: LocalizedProductCategoryPageProps): Promise<Metadata> {
  const localeConfig = await resolveRoute(params);
  const messages = await loadProductFunnelMessages(localeConfig.locale);

  return createPageMetadata({
    title: messages.category.metadata.title,
    description: messages.category.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/generated/pom-material-hero.webp",
    imageAlt: messages.category.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(sourcePath),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedProductCategoryPage({
  params,
}: LocalizedProductCategoryPageProps) {
  const localeConfig = await resolveRoute(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadProductFunnelMessages(localeConfig.locale);

  return (
    <LocalizedBasePomCategoryPage
      messages={messages}
      localeSegment={localeConfig.urlSegment}
      inLanguage={localeConfig.htmlLang}
    />
  );
}
