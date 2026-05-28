import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  defaultDescription,
  defaultOgImage,
  siteName,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taiyi Nano | Natural POM Resin & Modified POM Compounds",
    template: "%s",
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Jiangsu Taiyi Nano Technology Co., Ltd." }],
  creator: "Jiangsu Taiyi Nano Technology Co., Ltd.",
  publisher: "Jiangsu Taiyi Nano Technology Co., Ltd.",
  category: "Engineering plastics",
  keywords: [
    "Natural POM Resin",
    "Modified POM Compounds",
    "POM supplier China",
    "POM injection molding material",
    "wear-resistant POM compound",
    "low-friction POM compound",
    "glass fiber reinforced POM",
    "conductive POM compound",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Taiyi Nano | Natural POM Resin & Modified POM Compounds",
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
    title: "Taiyi Nano | Natural POM Resin & Modified POM Compounds",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="page-aura min-h-full flex flex-col overflow-x-hidden text-slate-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
