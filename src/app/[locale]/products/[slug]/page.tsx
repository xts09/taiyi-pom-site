import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedEngineeringGradePage } from "@/components/localized/LocalizedEngineeringGradePage";
import { LocalizedProductGradePage } from "@/components/localized/LocalizedXt100ProductPage";
import {
  createEngineeringTdsSlug,
  engineeringTdsDocuments,
} from "@/data/engineeringTds";
import { products } from "@/data/products";
import { getLocalizedLocale } from "@/i18n/config";
import { createLocalizedEngineeringGradeCopy } from "@/i18n/engineeringGradeMessages";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import { chinesePomGradeProfiles } from "@/i18n/pomGradeMessages";
import { loadProductFunnelMessages } from "@/i18n/productFunnelMessages";
import {
  getLocalizedGradeCategoryLabel,
  getLocalizedGradeCategorySourcePath,
  getLocalizedGradeMessages,
  isChineseOnlyProductGradeSlug,
  isLocalizedProductGradeRouteSlug,
  localizedProductGradeRouteSlugs,
  mergeLocalizedGradeProfile,
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
  return [
    ...localizedProductGradeRouteSlugs.map((slug) => ({ slug })),
    ...engineeringTdsDocuments.map((document) => ({
      slug: createEngineeringTdsSlug(document),
    })),
  ];
}

const findEngineeringDocumentBySlug = (slug: string) =>
  engineeringTdsDocuments.find(
    (document) => createEngineeringTdsSlug(document) === slug,
  );

const resolveRoute = async (params: LocalizedProductPageProps["params"]) => {
  const { locale, slug } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale
  ) {
    notFound();
  }

  const engineeringDocument = findEngineeringDocumentBySlug(slug);
  const sourcePath = `/products/${slug}` as ReleasedSourcePath;

  if (engineeringDocument) {
    if (!isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment)) {
      notFound();
    }

    return {
      kind: "engineering" as const,
      localeConfig,
      document: engineeringDocument,
      slug,
      sourcePath,
    };
  }

  if (!isLocalizedProductGradeRouteSlug(slug)) {
    notFound();
  }

  const product = products.find((item) => item.slug === slug);

  if (
    !product ||
    !isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment)
  ) {
    notFound();
  }

  return {
    kind: "pom" as const,
    localeConfig,
    product,
    slug,
    sourcePath,
  };
};

const getGradeCopy = async (
  locale: Parameters<typeof loadProductFunnelMessages>[0],
  localeSegment: NonNullable<ReturnType<typeof getLocalizedLocale>>["urlSegment"],
  slug: (typeof localizedProductGradeRouteSlugs)[number],
) => {
  const messages = await loadProductFunnelMessages(locale);

  if (isChineseOnlyProductGradeSlug(slug)) {
    const expandedProfile = translateExpandedContent(
      chinesePomGradeProfiles[slug],
      localeSegment,
    );

    return {
      categoryLabel: expandedProfile.categoryLabel ?? messages.common.category,
      copy: mergeLocalizedGradeProfile(messages, expandedProfile),
      messages,
    };
  }

  return {
    categoryLabel: getLocalizedGradeCategoryLabel(messages, slug),
    copy: getLocalizedGradeMessages(messages, slug),
    messages,
  };
};

export async function generateMetadata({
  params,
}: LocalizedProductPageProps): Promise<Metadata> {
  const route = await resolveRoute(params);

  if (route.kind === "engineering") {
    const copy = createLocalizedEngineeringGradeCopy(
      route.document,
      route.localeConfig.urlSegment,
    );

    return createPageMetadata({
      title: copy.metadata.title,
      description: copy.metadata.description,
      path: getLocalizedHref(route.sourcePath, route.localeConfig.urlSegment),
      image: "/generated/landing/home-dark-satin-wave-v1.webp",
      imageAlt: copy.metadata.imageAlt,
      indexable: isLocalizedReleaseIndexable(
        route.sourcePath,
        route.localeConfig.urlSegment,
      ),
      openGraphLocale: route.localeConfig.openGraphLocale,
      languageAlternates: getLanguageAlternates(route.sourcePath),
    });
  }

  const { localeConfig, slug, sourcePath } = route;
  const { copy } = await getGradeCopy(
    localeConfig.locale,
    localeConfig.urlSegment,
    slug,
  );

  return createPageMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/generated/pom-material-hero.webp",
    imageAlt: copy.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedProductPage({
  params,
}: LocalizedProductPageProps) {
  const route = await resolveRoute(params);
  const { localeConfig, sourcePath } = route;
  setRequestLocale(localeConfig.htmlLang);

  if (route.kind === "engineering") {
    return (
      <LocalizedEngineeringGradePage
        document={route.document}
        localeSegment={localeConfig.urlSegment}
        sourcePath={sourcePath}
      />
    );
  }

  const { product, slug } = route;
  const { categoryLabel, copy, messages } = await getGradeCopy(
    localeConfig.locale,
    localeConfig.urlSegment,
    slug,
  );

  return (
    <LocalizedProductGradePage
      product={product}
      copy={copy}
      categoryLabel={categoryLabel}
      categorySourcePath={getLocalizedGradeCategorySourcePath(slug)}
      messages={messages}
      localeSegment={localeConfig.urlSegment}
      sourcePath={sourcePath}
    />
  );
}
