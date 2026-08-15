import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedTechnicalDataPage } from "@/components/localized/LocalizedTechnicalDataPage";
import { products } from "@/data/products";
import { getLocalizedLocale } from "@/i18n/config";
import { loadProductFunnelMessages } from "@/i18n/productFunnelMessages";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const sourcePath = "/technical-data-sheets" as const;
const product = products.find((item) => item.slug === "xt-100-base-pom-resin");

type LocalizedTechnicalDataPageRouteProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const resolveLocale = async (
  params: LocalizedTechnicalDataPageRouteProps["params"],
) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (!localeConfig || localeConfig.urlSegment !== locale || !product) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
  searchParams,
}: LocalizedTechnicalDataPageRouteProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = await loadProductFunnelMessages(localeConfig.locale);
  const query = searchParams ? await searchParams : {};
  const hasSearchIntent = Object.values(query).some((value) =>
    (Array.isArray(value) ? value[0] : value)?.trim(),
  );

  return createPageMetadata({
    title: messages.technicalData.metadata.title,
    description: messages.technicalData.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/generated/pom-workbench-hero.webp",
    imageAlt: messages.technicalData.metadata.imageAlt,
    indexable:
      isLocalizedReleaseIndexable(sourcePath) && !hasSearchIntent,
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedTechnicalDataPageRoute({
  params,
}: LocalizedTechnicalDataPageRouteProps) {
  const localeConfig = await resolveLocale(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadProductFunnelMessages(localeConfig.locale);

  if (!product) {
    notFound();
  }

  return (
    <LocalizedTechnicalDataPage
      product={product}
      messages={messages}
      localeSegment={localeConfig.urlSegment}
      inLanguage={localeConfig.htmlLang}
    />
  );
}
