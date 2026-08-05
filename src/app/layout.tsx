import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wght.css";
import "@fontsource-variable/ibm-plex-sans/wght.css";
import "@fontsource-variable/saira/wdth.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleTag } from "@/components/GoogleTag";
import { googleSiteVerification } from "@/lib/googleTracking";
import {
  defaultDescription,
  defaultOgImage,
  siteName,
  siteUrl,
} from "@/lib/seo";
import "../../tokens.css";
import "./globals.css";
import "./styles/header.css";
import "./styles/breadcrumbs.css";
import "./styles/products.css";
import "./styles/home.css";
import "./styles/applications.css";
import "./styles/resources.css";

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
  keywords: [
    "Modified POM and Engineering Plastic Compounds",
    "Modified POM Compounds",
    "Engineering Plastic Compounds",
    "wear-resistant POM compound",
    "low-friction POM compound",
    "glass fiber reinforced POM",
    "conductive POM compound",
    "PA6 modified material",
    "PA66 modified material",
    "PPA modified material",
    "POM Resin",
    "POM supplier China",
  ],
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
    <html lang="en" className="h-full antialiased">
      <body className="page-aura min-h-full flex flex-col text-slate-900">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <div id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <GoogleTag />
      </body>
    </html>
  );
}
