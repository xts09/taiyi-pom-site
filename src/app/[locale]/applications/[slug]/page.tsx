import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedApplicationDetailPage } from "@/components/localized/LocalizedApplicationDetailPage";
import { getApplicationBySlug } from "@/data/applications";
import {
  loadApplicationIndexMessages,
  loadApplicationProfiles,
  localizeApplication,
} from "@/i18n/applicationMessages";
import {
  isLocalizedApplicationSlug,
  localizedApplicationSlugs,
  type LocalizedApplicationProfileMessages,
} from "@/i18n/applicationTypes";
import { getLocalizedLocale } from "@/i18n/config";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
  type ReleasedSourcePath,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type LocalizedApplicationDetailRouteProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedApplicationSlugs.map((slug) => ({ slug }));
}

const resolveRoute = async (
  params: LocalizedApplicationDetailRouteProps["params"],
) => {
  const { locale, slug } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    !isLocalizedApplicationSlug(slug)
  ) {
    notFound();
  }

  const sourceApplication = getApplicationBySlug(slug);
  const sourcePath = `/applications/${slug}` as ReleasedSourcePath;

  if (
    !sourceApplication ||
    !isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment)
  ) {
    notFound();
  }

  return {
    localeConfig,
    slug,
    sourceApplication,
    sourcePath,
  };
};

export async function generateMetadata({
  params,
}: LocalizedApplicationDetailRouteProps): Promise<Metadata> {
  const { localeConfig, slug, sourceApplication, sourcePath } =
    await resolveRoute(params);
  const [messages, profiles] = await Promise.all([
    loadApplicationIndexMessages(localeConfig.urlSegment),
    loadApplicationProfiles(localeConfig.urlSegment),
  ]);
  const profile: LocalizedApplicationProfileMessages = profiles[slug];

  return createPageMetadata({
    title: `${profile.title} ${messages.detail.metadata.titleSuffix}`,
    description: `${profile.description} ${messages.detail.metadata.descriptionSuffix}`,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: sourceApplication.heroImage?.src,
    imageAlt: profile.heroImageAlt,
    indexable: isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedApplicationDetailRoute({
  params,
}: LocalizedApplicationDetailRouteProps) {
  const { localeConfig, slug, sourceApplication, sourcePath } =
    await resolveRoute(params);
  setRequestLocale(localeConfig.htmlLang);
  const [messages, profiles] = await Promise.all([
    loadApplicationIndexMessages(localeConfig.urlSegment),
    loadApplicationProfiles(localeConfig.urlSegment),
  ]);
  const profile: LocalizedApplicationProfileMessages = profiles[slug];
  const application = localizeApplication(sourceApplication, profile);
  const detailMessages = {
    ...messages.detail,
    ...profile.detailUi,
  };
  const pagePath = getLocalizedHref(sourcePath, localeConfig.urlSegment);

  return (
    <LocalizedApplicationDetailPage
      application={application}
      componentMessages={messages.componentSolutions}
      inLanguage={localeConfig.htmlLang}
      localeSegment={localeConfig.urlSegment}
      messages={detailMessages}
      pagePath={pagePath}
      qualityEvidence={profile.qualityEvidence}
      selectionItems={profile.selectionItems ?? messages.selection.items}
      showSelectionInputs={profile.showSelectionInputs}
    />
  );
}
