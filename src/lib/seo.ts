import type { Metadata } from "next";
import type { Product } from "@/data/products";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.taiyipom.com";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteName = "Taiyi Nano";

export const companyName = "Jiangsu Taiyi Nano Technology Co., Ltd.";

export const defaultDescription =
  "Jiangsu Taiyi Nano Technology Co., Ltd. supplies Natural POM Resin and Modified POM Compounds for injection molding applications.";

export const defaultOgImage = "/factory-hero-clean-poster.jpg";

export const absoluteUrl = (path = "/") =>
  path.startsWith("http")
    ? path
    : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const createPageMetadata = ({
  title,
  description,
  path,
  image = defaultOgImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: `${siteName} POM material manufacturing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
});

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyName,
  alternateName: siteName,
  url: siteUrl,
  logo: absoluteUrl(defaultOgImage),
  foundingDate: "2003-06-18",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yancheng",
    addressRegion: "Jiangsu",
    addressCountry: "CN",
  },
  email: "xiatianshi@jstynm.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "xiatianshi@jstynm.com",
      telephone: "+86-18796418919",
      availableLanguage: ["en", "zh"],
    },
  ],
  makesOffer: [
    "Natural POM Resin",
    "Modified POM Compounds",
    "Wear-resistant POM Compound",
    "Low-friction POM Compound",
    "Glass Fiber Reinforced POM Compound",
    "Conductive / Antistatic POM Compound",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: companyName,
  },
};

export const createProductJsonLd = (product: Product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.title,
  sku: product.grade,
  brand: {
    "@type": "Brand",
    name: siteName,
  },
  manufacturer: {
    "@type": "Organization",
    name: companyName,
    url: siteUrl,
  },
  category: product.category,
  description: product.description,
  material: "POM",
  color: product.color,
  url: absoluteUrl(`/products/${product.slug}`),
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "MFI",
      value: product.mfi,
    },
    {
      "@type": "PropertyValue",
      name: "Available documents",
      value: product.documents.join(", "),
    },
    ...product.properties.map((property) => ({
      "@type": "PropertyValue",
      name: property.label,
      value: `${property.value} ${property.unit}`.trim(),
      measurementTechnique: property.method,
    })),
  ],
});

export const createBreadcrumbJsonLd = (
  items: Array<{ name: string; path: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
