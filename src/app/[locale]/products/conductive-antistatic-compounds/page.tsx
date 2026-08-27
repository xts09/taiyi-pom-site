import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  ConductiveAntistaticCompoundsContent,
  conductiveAntistaticCompoundsHeroImage,
} from "@/app/(en)/products/conductive-antistatic-compounds/page";
import { getLocalizedLocale } from "@/i18n/config";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import { chineseConductiveAntistaticCompoundsMessages } from "@/i18n/messages/zh-CN-conductive-compounds";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type LocalizedConductiveCompoundsPageProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/products/conductive-antistatic-compounds" as const;

const resolveLocale = async (
  params: LocalizedConductiveCompoundsPageProps["params"],
) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    !isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment)
  ) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
}: LocalizedConductiveCompoundsPageProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = translateExpandedContent(
    chineseConductiveAntistaticCompoundsMessages,
    localeConfig.urlSegment,
  );
  const publicCompanyName =
    localeConfig.urlSegment === "zh" ? "台益" : "Taiyi Polymer";

  return createPageMetadata({
    title: `${translateExpandedContent(
      "导电与抗静电改性材料",
      localeConfig.urlSegment,
    )} | ${publicCompanyName}`,
    description: messages.schemaDescription,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: conductiveAntistaticCompoundsHeroImage,
    imageAlt: messages.heroAlt,
    indexable: true,
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedConductiveCompoundsPage({
  params,
}: LocalizedConductiveCompoundsPageProps) {
  const localeConfig = await resolveLocale(params);
  const messages = translateExpandedContent(
    chineseConductiveAntistaticCompoundsMessages,
    localeConfig.urlSegment,
  );
  setRequestLocale(localeConfig.htmlLang);

  return (
    <ConductiveAntistaticCompoundsContent
      groupByMatrix
      showAllByDefault
      pagePath={getLocalizedHref(sourcePath, localeConfig.urlSegment)}
      localeSegment={localeConfig.urlSegment}
      inLanguage={localeConfig.htmlLang}
      messages={messages}
    />
  );
}
