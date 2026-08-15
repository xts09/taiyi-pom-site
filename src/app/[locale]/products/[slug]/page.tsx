import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedXt100ProductPage } from "@/components/localized/LocalizedXt100ProductPage";
import { products } from "@/data/products";
import { getLocalizedLocale } from "@/i18n/config";
import { loadProductFunnelMessages } from "@/i18n/productFunnelMessages";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const productSlug = "xt-100-base-pom-resin";
const sourcePath = `/products/${productSlug}` as const;
const product = products.find((item) => item.slug === productSlug);

type LocalizedProductPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: productSlug }];
}
const resolveRoute = async (params: LocalizedProductPageProps["params"]) => {
  const { locale, slug } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    slug !== productSlug ||
    !product
  ) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
}: LocalizedProductPageProps): Promise<Metadata> {
  const localeConfig = await resolveRoute(params);
  const messages = await loadProductFunnelMessages(localeConfig.locale);

  return createPageMetadata({
    title: messages.grade.metadata.title,
    description: messages.grade.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/generated/pom-material-hero.webp",
    imageAlt: messages.grade.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(sourcePath),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedProductPage({
  params,
}: LocalizedProductPageProps) {
  const localeConfig = await resolveRoute(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadProductFunnelMessages(localeConfig.locale);

  if (!product) {
    notFound();
  }

  return (
    <LocalizedXt100ProductPage
      product={product}
      messages={messages}
      localeSegment={localeConfig.urlSegment}
    />
  );
}
