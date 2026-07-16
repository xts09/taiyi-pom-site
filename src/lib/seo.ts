import type { Metadata } from "next";
import { availableDocuments } from "@/data/company";
import {
  createEngineeringTdsSlug,
  type EngineeringTdsDocument,
} from "@/data/engineeringTds";
import type { Product } from "@/data/products";
import { productCategoryOrder } from "@/lib/productCategories";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.taiyipom.com";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteName = "Taiyi Nano";

export const companyName = "Jiangsu Taiyi Nano Technology Co., Ltd.";

export const defaultDescription =
  "Jiangsu Taiyi Nano Technology Co., Ltd. develops and produces modified POM, PA6, PA66, PPA, and PPS compounds for wear-resistant, low-friction, reinforced, and functional molded part applications.";

export const defaultOgImage = "/factory-hero-no-machine-poster.jpg";

export const absoluteUrl = (path = "/") =>
  path.startsWith("http")
    ? path
    : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const createPageMetadata = ({
  title,
  description,
  path,
  image = defaultOgImage,
  imageAlt = `${siteName} POM material manufacturing`,
  indexable = true,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  indexable?: boolean;
}): Metadata => ({
  title,
  description,
  ...(!indexable
    ? {
        robots: {
          index: false,
          follow: true,
        },
      }
    : {}),
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
        alt: imageAlt,
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

export const createProductPageMetadata = (product: Product): Metadata => {
  const title = product.seo?.title ?? `${product.title} | ${siteName}`;
  const description =
    product.seo?.description ??
    `${product.title}, ${product.category}, MFI ${product.mfi}, ${product.color} color. ${product.description}`;

  return createPageMetadata({
    title,
    description,
    path: `/products/${product.slug}`,
    image: product.seo?.image,
    imageAlt: `${product.title} from ${siteName}`,
    indexable: product.seo?.indexable !== false,
  });
};

export const getEngineeringTdsTitle = (document: EngineeringTdsDocument) =>
  `${document.grade} ${document.family} ${document.category}`;

export const createEngineeringTdsPageMetadata = (
  document: EngineeringTdsDocument,
): Metadata => {
  const productTitle = getEngineeringTdsTitle(document);
  const title = document.seo?.title ?? `${productTitle} | ${siteName}`;
  const description =
    document.seo?.description ??
    `${productTitle}. ${document.description} Typical data includes specific gravity ${document.density}, tensile stress ${document.tensile} MPa, and heat deflection temperature ${document.hdt} degC.`;

  return createPageMetadata({
    title,
    description,
    path: `/products/${createEngineeringTdsSlug(document)}`,
    image: document.seo?.image,
    imageAlt: `${productTitle} from ${siteName}`,
    indexable: document.seo?.indexable !== false,
  });
};

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
    "Modified POM Compounds",
    ...productCategoryOrder,
    "Selected PA6 Modified Material Solutions",
    "Selected PA66 Modified Material Solutions",
    "Selected PPA Modified Material Solutions",
    "Selected PPS Modified Material Solutions",
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

export const createEngineeringProductJsonLd = (
  document: EngineeringTdsDocument,
) => {
  const slug = createEngineeringTdsSlug(document);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: getEngineeringTdsTitle(document),
    sku: document.grade,
    brand: {
      "@type": "Brand",
      name: siteName,
    },
    manufacturer: {
      "@type": "Organization",
      name: companyName,
      url: siteUrl,
    },
    category: `${document.family} Compound`,
    description: document.description,
    material: document.family,
    url: absoluteUrl(`/products/${slug}`),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Available documents",
        value: availableDocuments.join(", "),
      },
      ...document.properties.map((property) => ({
        "@type": "PropertyValue",
        name: property.label,
        value: `${property.value} ${property.unit}`.trim(),
        measurementTechnique: property.method,
      })),
    ],
  };
};

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
