import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LocalizedApplicationsPage } from "@/components/localized/LocalizedApplicationsPage";
import { loadChineseApplicationIndexMessages } from "@/i18n/applicationMessages";
import { getLocalizedLocale } from "@/i18n/config";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type LocalizedApplicationsPageProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/applications" as const;

const resolveLocale = async (
  params: LocalizedApplicationsPageProps["params"],
) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    localeConfig.locale !== "zh-CN"
  ) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
}: LocalizedApplicationsPageProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = await loadChineseApplicationIndexMessages();

  return createPageMetadata({
    title: messages.metadata.title,
    description: messages.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/applications/parts/washing-machine-components-hero.png",
    imageAlt: messages.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedApplicationsRoute({
  params,
}: LocalizedApplicationsPageProps) {
  const localeConfig = await resolveLocale(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadChineseApplicationIndexMessages();
  const pagePath = getLocalizedHref(sourcePath, localeConfig.urlSegment);

  return (
    <LocalizedApplicationsPage
      inLanguage={localeConfig.htmlLang}
      localeSegment={localeConfig.urlSegment}
      messages={messages}
      pagePath={pagePath}
    />
  );
}
