import type { Metadata } from "next";
import { availableDocuments } from "@/data/company";
import {
  createEngineeringTdsSlug,
  type EngineeringTdsDocument,
} from "@/data/engineeringTds";
import type { Product } from "@/data/products";
import { productCategoryOrder } from "@/lib/productCategories";
import { getPublicCoreProperties } from "@/lib/productPropertyVisibility";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.taiyipom.com";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteName = "Taiyi Nano";

export const companyName = "Jiangsu Taiyi Nano Technology Co., Ltd.";

export const defaultDescription =
  "Taiyi Nano manufactures modified POM, PA6, PA66, and PPA compounds for wear, low-friction, reinforced, conductive, and functional molded parts.";

export const defaultOgImage = "/factory-hero-no-machine-poster.jpg";

export const organizationLogo = "/platform-wordmark.png";

const formatMetadataDescription = (description: string, maxLength = 160) => {
  const normalized = description.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const candidate = normalized.slice(0, maxLength - 1);
  const lastWordBoundary = candidate.lastIndexOf(" ");
  const trimmed = candidate
    .slice(0, lastWordBoundary > maxLength * 0.7 ? lastWordBoundary : undefined)
    .replace(/[,:;.\-\s]+$/, "");

  return `${trimmed}…`;
};

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
}): Metadata => {
  const metadataDescription = formatMetadataDescription(description);

  return {
    title,
    description: metadataDescription,
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
      description: metadataDescription,
      url: path,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metadataDescription,
      images: [image],
    },
  };
};

export const createCollectionPageJsonLd = ({
  title,
  description,
  path,
  items,
}: {
  title: string;
  description: string;
  path: string;
  items: ReadonlyArray<{ name: string; path: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description: formatMetadataDescription(description),
  url: absoluteUrl(path),
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
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
  logo: absoluteUrl(organizationLogo),
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
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/technical-data-sheets?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const createWebPageJsonLd = ({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description: formatMetadataDescription(description),
  url: absoluteUrl(path),
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: companyName,
    url: siteUrl,
  },
  ...(image ? { primaryImageOfPage: absoluteUrl(image) } : {}),
});

export const createTechArticleJsonLd = ({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: title,
  description: formatMetadataDescription(description),
  url: absoluteUrl(path),
  mainEntityOfPage: absoluteUrl(path),
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  },
  ...(image ? { image: [absoluteUrl(image)] } : {}),
  author: {
    "@type": "Organization",
    name: companyName,
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: companyName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(organizationLogo),
    },
  },
});

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
    ...getPublicCoreProperties(product.properties).map((property) => ({
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
      ...getPublicCoreProperties(document.properties).map((property) => ({
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
