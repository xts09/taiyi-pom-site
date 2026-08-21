import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ProductsDirectoryPage } from "@/components/ProductsDirectoryPage";
import {
  getLocalizedLocale,
  localizedLocales,
} from "@/i18n/config";
import { loadMessages } from "@/i18n/messages";
import {
  getLocalizedProductsPath,
  isLocalizedReleaseIndexable,
  productsLanguageAlternates,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type LocalizedProductsPageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLocales.map(({ urlSegment }) => ({ locale: urlSegment }));
}

const resolveLocale = async (params: LocalizedProductsPageProps["params"]) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (!localeConfig || localeConfig.urlSegment !== locale) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
}: LocalizedProductsPageProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = await loadMessages(localeConfig.locale);

  return createPageMetadata({
    title: messages.Products.metadata.title,
    description: messages.Products.metadata.description,
    path: getLocalizedProductsPath(localeConfig.urlSegment),
    image: "/generated/pom-material-hero.webp",
    imageAlt: messages.Products.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable("/products"),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: productsLanguageAlternates,
  });
}

export default async function LocalizedProductsPage({
  params,
}: LocalizedProductsPageProps) {
  const localeConfig = await resolveLocale(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadMessages(localeConfig.locale);

  return (
    <ProductsDirectoryPage
      messages={messages.Products}
      pagePath={getLocalizedProductsPath(localeConfig.urlSegment)}
      inLanguage={localeConfig.htmlLang}
      englishDestinationLabel={messages.Header.englishDestinationLabel}
      localeSegment={localeConfig.urlSegment}
    />
  );
}
