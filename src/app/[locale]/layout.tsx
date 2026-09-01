import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import "@fontsource-variable/ibm-plex-sans/wght.css";
import { SiteDocument } from "@/components/SiteDocument";
import {
  getLocalizedLocale,
  localizedLocales,
} from "@/i18n/config";
import { loadMessages } from "@/i18n/messages";
import {
  googleConsentDefaultScript,
  googleTagId,
} from "@/lib/googleTracking";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";
import "../../../tokens.css";
import "../globals.css";
import "../(en)/styles/header.css";
import "../(en)/styles/breadcrumbs.css";

export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s",
  },
  description: defaultDescription,
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06111f",
};

export function generateStaticParams() {
  return localizedLocales.map(({ urlSegment }) => ({ locale: urlSegment }));
}

export default async function LocalizedRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (!localeConfig || localeConfig.urlSegment !== locale) {
    notFound();
  }

  setRequestLocale(localeConfig.htmlLang);
  const messages = await loadMessages(localeConfig.locale);

  return (
    <SiteDocument
      htmlLang={localeConfig.htmlLang}
      messages={messages}
      localeSegment={localeConfig.urlSegment}
      consentDefaultScript={
        googleTagId ? (
          <Script
            id="google-consent-default"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: googleConsentDefaultScript }}
          />
        ) : null
      }
    >
      <NextIntlClientProvider
        locale={localeConfig.htmlLang}
        messages={null}
      >
        {children}
      </NextIntlClientProvider>
    </SiteDocument>
  );
}
