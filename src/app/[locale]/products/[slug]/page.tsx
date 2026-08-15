import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedProductGradePage } from "@/components/localized/LocalizedXt100ProductPage";
import { products } from "@/data/products";
import { getLocalizedLocale } from "@/i18n/config";
import { loadProductFunnelMessages } from "@/i18n/productFunnelMessages";
import {
  getLocalizedGradeMessages,
  isLocalizedBasePomGradeSlug,
  localizedBasePomGradeSlugs,
} from "@/i18n/productFunnelTypes";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
  type ReleasedSourcePath,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type LocalizedProductPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedBasePomGradeSlugs.map((slug) => ({ slug }));
}

const resolveRoute = async (params: LocalizedProductPageProps["params"]) => {
  const { locale, slug } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    !isLocalizedBasePomGradeSlug(slug)
  ) {
    notFound();
  }

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return {
    localeConfig,
    product,
    slug,
    sourcePath: `/products/${slug}` as ReleasedSourcePath,
  };
};

export async function generateMetadata({
  params,
}: LocalizedProductPageProps): Promise<Metadata> {
  const { localeConfig, slug, sourcePath } = await resolveRoute(params);
  const messages = await loadProductFunnelMessages(localeConfig.locale);
  const copy = getLocalizedGradeMessages(messages, slug);

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

export default async function LocalizedProductPage({
  params,
}: LocalizedProductPageProps) {
  const { localeConfig, product, slug, sourcePath } = await resolveRoute(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadProductFunnelMessages(localeConfig.locale);
  const copy = getLocalizedGradeMessages(messages, slug);

  return (
    <LocalizedProductGradePage
      product={product}
      copy={copy}
      messages={messages}
      localeSegment={localeConfig.urlSegment}
      sourcePath={sourcePath}
    />
  );
}
