import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource-variable/ibm-plex-sans/wght.css";
import { SiteDocument } from "@/components/SiteDocument";
import messages from "@/i18n/messages/en";
import {
  googleConsentDefaultScript,
  googleSiteVerification,
  googleTagId,
} from "@/lib/googleTracking";
import {
  defaultDescription,
  defaultOgImage,
  siteName,
  siteUrl,
} from "@/lib/seo";
import "../../../tokens.css";
import "../globals.css";
import "./styles/header.css";
import "./styles/breadcrumbs.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taiyi Polymer | Modified POM & Engineering Plastic Compounds",
    template: "%s",
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Jiangsu Taiyi Nano Technology Co., Ltd." }],
  creator: "Jiangsu Taiyi Nano Technology Co., Ltd.",
  publisher: "Jiangsu Taiyi Nano Technology Co., Ltd.",
  category: "Modified Material Compounds",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Taiyi Polymer | Modified POM & Engineering Plastic Compounds",
    description: defaultDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: defaultOgImage,
        alt: "Taiyi Polymer POM material manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taiyi Polymer | Modified POM & Engineering Plastic Compounds",
    description: defaultDescription,
    images: [defaultOgImage],
  },
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
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteDocument
      htmlLang="en"
      messages={messages}
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
      {children}
    </SiteDocument>
  );
}
