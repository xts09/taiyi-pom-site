import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ContactPage } from "@/components/ContactPage";
import { getLocalizedLocale, localizedLocales } from "@/i18n/config";
import { loadMessages } from "@/i18n/messages";
import {
  contactLanguageAlternates,
  getLocalizedContactPath,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import {
  hasContactSearchParams,
  type ContactContextSearchParams,
} from "@/lib/contactContext";
import { createPageMetadata } from "@/lib/seo";

type LocalizedContactPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<ContactContextSearchParams>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLocales.map(({ urlSegment }) => ({ locale: urlSegment }));
}

const resolveLocale = async (params: LocalizedContactPageProps["params"]) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (!localeConfig || localeConfig.urlSegment !== locale) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
  searchParams,
}: LocalizedContactPageProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = await loadMessages(localeConfig.locale);
  const hasSearchContext = hasContactSearchParams(await searchParams);

  return createPageMetadata({
    title: messages.Contact.metadata.title,
    description: messages.Contact.metadata.description,
    path: getLocalizedContactPath(localeConfig.urlSegment),
    image: "/factory-extrusion.webp",
    imageAlt: messages.Contact.metadata.imageAlt,
    indexable:
      isLocalizedReleaseIndexable("/contact") && !hasSearchContext,
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: hasSearchContext
      ? undefined
      : contactLanguageAlternates,
  });
}

export default async function LocalizedContactPage({
  params,
  searchParams,
}: LocalizedContactPageProps) {
  const localeConfig = await resolveLocale(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadMessages(localeConfig.locale);

  return (
    <ContactPage
      messages={messages.Contact}
      pagePath={getLocalizedContactPath(localeConfig.urlSegment)}
      inLanguage={localeConfig.htmlLang}
      searchParams={searchParams}
    />
  );
}
