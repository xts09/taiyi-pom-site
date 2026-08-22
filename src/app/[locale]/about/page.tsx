import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import styles from "@/app/(en)/about/AboutPage.module.css";
import { LocalizedAboutPage } from "@/components/localized/LocalizedAboutPage";
import { getLocalizedLocale } from "@/i18n/config";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import { chineseAboutMessages } from "@/i18n/messages/zh-CN-about";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  companyName,
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
  organizationJsonLd,
  siteName,
} from "@/lib/seo";

type LocalizedAboutRouteProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/about" as const;

const resolveLocale = async (params: LocalizedAboutRouteProps["params"]) => {
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
}: LocalizedAboutRouteProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = translateExpandedContent(
    chineseAboutMessages,
    localeConfig.urlSegment,
  );

  return createPageMetadata({
    title: messages.metadata.title,
    description: messages.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/factory-exterior.webp",
    imageAlt: messages.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(
      sourcePath,
      localeConfig.urlSegment,
    ),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedAboutRoute({
  params,
}: LocalizedAboutRouteProps) {
  const localeConfig = await resolveLocale(params);
  const messages = translateExpandedContent(
    chineseAboutMessages,
    localeConfig.urlSegment,
  );
  setRequestLocale(localeConfig.htmlLang);
  const pagePath = getLocalizedHref(sourcePath, localeConfig.urlSegment);
  const aboutJsonLd = [
    {
      ...createWebPageJsonLd({
        title: messages.metadata.title,
        description: messages.metadata.description,
        path: pagePath,
        image: "/factory-exterior.webp",
      }),
      "@type": "AboutPage",
      inLanguage: localeConfig.htmlLang,
      about: {
        "@type": organizationJsonLd["@type"],
        name: companyName,
        legalName: companyName,
        alternateName: siteName,
        url: organizationJsonLd.url,
        logo: organizationJsonLd.logo,
        brand: organizationJsonLd.brand,
        address: organizationJsonLd.address,
        email: organizationJsonLd.email,
        contactPoint: organizationJsonLd.contactPoint,
        knowsAbout: organizationJsonLd.knowsAbout,
        sameAs: ["https://www.linkedin.com/company/taiyi-nano-technology/"],
      },
    },
    createBreadcrumbJsonLd([
      {
        name: translateExpandedContent("首页", localeConfig.urlSegment),
        path: getLocalizedHref("/", localeConfig.urlSegment),
      },
      {
        name: translateExpandedContent("关于我们", localeConfig.urlSegment),
        path: pagePath,
      },
    ]),
  ];

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(aboutJsonLd) }}
      />
      <LocalizedAboutPage localeSegment={localeConfig.urlSegment} />
    </main>
  );
}
