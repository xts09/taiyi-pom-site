import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedProductCategoryContent } from "@/components/localized/LocalizedBasePomCategoryPage";
import { LocalizedEngineeringCategoryContent } from "@/components/localized/LocalizedEngineeringCategoryPage";
import { getLocalizedLocale } from "@/i18n/config";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import {
  chineseEngineeringCategoryProfiles,
  isChineseEngineeringProductCategorySlug,
} from "@/i18n/messages/zh-CN-engineering-categories";
import { chinesePomCategoryExpansion } from "@/i18n/messages/zh-CN-pom-category-expansion";
import { loadProductFunnelMessages } from "@/i18n/productFunnelMessages";
import {
  getLocalizedCategoryLabel,
  getLocalizedCategoryMessages,
  getLocalizedCategorySourcePath,
  isChineseOnlyProductCategorySlug,
  isLocalizedProductCategoryRouteSlug,
  localizedProductCategoryRouteSlugs,
  mergeLocalizedCategoryProfile,
  type LocalizedProductCategoryRouteSlug,
  type ProductFunnelMessages,
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
  return localizedProductCategoryRouteSlugs.map((category) => ({ category }));
}
const resolveRoute = async (
  params: LocalizedProductCategoryPageProps["params"],
) => {
  const { locale, category } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    !isLocalizedProductCategoryRouteSlug(category)
  ) {
    notFound();
  }

  const sourcePath = getLocalizedCategorySourcePath(category);

  if (!isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment)) {
    notFound();
  }

  return { localeConfig, category, sourcePath };
};

const resolveCategoryCopy = (
  messages: ProductFunnelMessages,
  category: LocalizedProductCategoryRouteSlug,
  localeSegment: Parameters<typeof translateExpandedContent>[1],
) => {
  if (isChineseEngineeringProductCategorySlug(category)) {
    throw new Error(`Engineering category uses its dedicated copy: ${category}`);
  }

  if (isChineseOnlyProductCategorySlug(category)) {
    const profile = translateExpandedContent(
      chinesePomCategoryExpansion[category],
      localeSegment,
    );

    return {
      categoryLabel: profile.categoryLabel,
      copy: mergeLocalizedCategoryProfile(messages, profile),
    };
  }

  return {
    categoryLabel: getLocalizedCategoryLabel(messages, category),
    copy: getLocalizedCategoryMessages(messages, category),
  };
};

export async function generateMetadata({
  params,
}: LocalizedProductCategoryPageProps): Promise<Metadata> {
  const { localeConfig, category, sourcePath } = await resolveRoute(params);
  const copy = isChineseEngineeringProductCategorySlug(category)
    ? translateExpandedContent(
        chineseEngineeringCategoryProfiles[category],
        localeConfig.urlSegment,
      )
    : resolveCategoryCopy(
        await loadProductFunnelMessages(localeConfig.locale),
        category,
        localeConfig.urlSegment,
      ).copy;

  return createPageMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: isChineseEngineeringProductCategorySlug(category)
      ? "/generated/landing/home-dark-satin-wave-v1.webp"
      : "/generated/pom-material-hero.webp",
    imageAlt: copy.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(
      sourcePath,
      localeConfig.urlSegment,
    ),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedProductCategoryPage({
  params,
}: LocalizedProductCategoryPageProps) {
  const { localeConfig, category, sourcePath } = await resolveRoute(params);
  setRequestLocale(localeConfig.htmlLang);

  if (isChineseEngineeringProductCategorySlug(category)) {
    return (
      <LocalizedEngineeringCategoryContent
        categorySlug={category}
        sourcePath={sourcePath}
        localeSegment={localeConfig.urlSegment}
        inLanguage={localeConfig.htmlLang}
      />
    );
  }

  const messages = await loadProductFunnelMessages(localeConfig.locale);
  const { categoryLabel, copy } = resolveCategoryCopy(
    messages,
    category,
    localeConfig.urlSegment,
  );

  return (
    <LocalizedProductCategoryContent
      categorySlug={category}
      categoryLabel={categoryLabel}
      copy={copy}
      sourcePath={sourcePath}
      messages={messages}
      localeSegment={localeConfig.urlSegment}
      inLanguage={localeConfig.htmlLang}
    />
  );
}
