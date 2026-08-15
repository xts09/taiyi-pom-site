import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { HomePage } from "@/components/HomePage";
import { getLocalizedLocale, localizedLocales } from "@/i18n/config";
import { loadMessages } from "@/i18n/messages";
import {
  getLocalizedHomePath,
  homeLanguageAlternates,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";
import "../(en)/styles/home.css";

type LocalizedHomePageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLocales.map(({ urlSegment }) => ({ locale: urlSegment }));
}

const resolveLocale = async (params: LocalizedHomePageProps["params"]) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (!localeConfig || localeConfig.urlSegment !== locale) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
}: LocalizedHomePageProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = await loadMessages(localeConfig.locale);

  return createPageMetadata({
    title: messages.Home.metadata.title,
    description: messages.Home.metadata.description,
    path: getLocalizedHomePath(localeConfig.urlSegment),
    image: "/factory-hero-95b-loop-v6-poster.webp",
    imageAlt: messages.Home.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable("/"),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: homeLanguageAlternates,
  });
}

export default async function LocalizedHomePage({
  params,
}: LocalizedHomePageProps) {
  const localeConfig = await resolveLocale(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadMessages(localeConfig.locale);

  return (
    <HomePage
      messages={messages.Home}
      inLanguage={localeConfig.htmlLang}
      localeSegment={localeConfig.urlSegment}
    />
  );
}
