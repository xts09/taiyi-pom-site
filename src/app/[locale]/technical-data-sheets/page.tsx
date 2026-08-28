import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedTechnicalDataPage } from "@/components/localized/LocalizedTechnicalDataPage";
import { LocalizedTechnicalDataSearchPage } from "@/components/localized/LocalizedTechnicalDataSearchPage";
import { products } from "@/data/products";
import { getLocalizedLocale } from "@/i18n/config";
import { loadProductFunnelMessages } from "@/i18n/productFunnelMessages";
import {
  localizedProductGradeRouteSlugs,
} from "@/i18n/productFunnelTypes";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const sourcePath = "/technical-data-sheets" as const;
const getLocalizedProducts = () => {
  return localizedProductGradeRouteSlugs.flatMap((slug) => {
    const product = products.find((item) => item.slug === slug);
    return product ? [product] : [];
  });
};

type LocalizedTechnicalDataPageRouteProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const resolveLocale = async (
  params: LocalizedTechnicalDataPageRouteProps["params"],
) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale
  ) {
    notFound();
  }

  const localizedProducts = getLocalizedProducts();
  const expectedProductCount = localizedProductGradeRouteSlugs.length;

  if (localizedProducts.length !== expectedProductCount) {
    notFound();
  }

  return { localeConfig, localizedProducts };
};

export async function generateMetadata({
  params,
  searchParams,
}: LocalizedTechnicalDataPageRouteProps): Promise<Metadata> {
  const { localeConfig } = await resolveLocale(params);
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
      isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment) &&
      !hasSearchIntent,
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: hasSearchIntent
      ? undefined
      : getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedTechnicalDataPageRoute({
  params,
  searchParams,
}: LocalizedTechnicalDataPageRouteProps) {
  const { localeConfig, localizedProducts } = await resolveLocale(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadProductFunnelMessages(localeConfig.locale);

  if (localeConfig.urlSegment === "zh") {
    return (
      <LocalizedTechnicalDataSearchPage
        params={searchParams ? await searchParams : {}}
        messages={messages}
        localeSegment={localeConfig.urlSegment}
        inLanguage={localeConfig.htmlLang}
      />
    );
  }

  return (
    <LocalizedTechnicalDataPage
      products={localizedProducts}
      messages={messages}
      localeSegment={localeConfig.urlSegment}
      inLanguage={localeConfig.htmlLang}
    />
  );
}
