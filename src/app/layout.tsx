import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  defaultDescription,
  defaultOgImage,
  siteName,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";
import "./styles/header.css";
import "./styles/products.css";
import "./styles/home.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taiyi Nano | Modified POM & Engineering Plastic Compounds",
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
    "PPS modified material",
    "POM Resin",
    "POM supplier China",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Taiyi Nano | Modified POM & Engineering Plastic Compounds",
    description: defaultDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Taiyi Nano POM material manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taiyi Nano | Modified POM & Engineering Plastic Compounds",
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
    <html
      lang="en"
      className={`${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="page-aura min-h-full flex flex-col text-slate-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
