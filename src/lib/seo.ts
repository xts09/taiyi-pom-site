import type { Metadata } from "next";
import { contactEmail, contactPhoneSchema } from "@/lib/contactDetails";
import {
  createEngineeringTdsSlug,
  type EngineeringTdsDocument,
} from "@/data/engineeringTds";
import type { Product } from "@/data/products";
import { productCategoryOrder } from "@/lib/productCategories";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.taiyipolymer.com";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteName = "Taiyi Polymer";

export const brandName = "PLATFORM";

export const companyName = "Jiangsu Taiyi Nano Technology Co., Ltd.";

export { contactEmail };

export const defaultDescription =
  "Taiyi Polymer manufactures modified POM, PA6, PA66, and PPA compounds for wear, low-friction, reinforced, conductive, and functional molded parts.";

export const defaultOgImage = "/factory-hero-no-machine-poster.jpg";

export const organizationLogo = "/platform-wordmark.png";

const formatMetadataDescription = (description: string) =>
  description.replace(/\s+/g, " ").trim();

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
  openGraphLocale = "en_US",
  languageAlternates,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  indexable?: boolean;
  openGraphLocale?: string;
  languageAlternates?: Record<string, string>;
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
      ...(languageAlternates ? { languages: languageAlternates } : {}),
    },
    openGraph: {
      title,
      description: metadataDescription,
      url: path,
      siteName,
      type: "website",
      locale: openGraphLocale,
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
  inLanguage,
}: {
  title: string;
  description: string;
  path: string;
  items: ReadonlyArray<{ name: string; path: string }>;
  inLanguage?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description: formatMetadataDescription(description),
  url: absoluteUrl(path),
  ...(inLanguage ? { inLanguage } : {}),
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

export type ProductJsonLdProperty = {
  label: string;
  value: string;
  unit?: string;
  method?: string;
};

const hasStructuredDataValue = (value?: string) =>
  Boolean(
    value &&
      value.trim() &&
      value.trim() !== "-" &&
      value.trim().toUpperCase() !== "N/A",
  );

export const createProductJsonLd = ({
  name,
  grade,
  description,
  category,
  path,
  color,
  properties,
}: {
  name: string;
  grade: string;
  description: string;
  category: string;
  path: string;
  color?: string;
  properties: readonly ProductJsonLdProperty[];
}) => {
  const additionalProperty = properties
    .filter(
      (property) =>
        hasStructuredDataValue(property.label) &&
        hasStructuredDataValue(property.value),
    )
    .map((property) => ({
      "@type": "PropertyValue",
      name: property.label.trim(),
      value: property.value.trim(),
      ...(hasStructuredDataValue(property.unit)
        ? { unitText: property.unit?.trim() }
        : {}),
      ...(hasStructuredDataValue(property.method)
        ? { measurementMethod: property.method?.trim() }
        : {}),
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    model: grade,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    category,
    material: category,
    ...(hasStructuredDataValue(color) ? { color: color?.trim() } : {}),
    brand: {
      "@type": "Brand",
      name: brandName,
    },
    manufacturer: {
      "@type": "Organization",
      name: companyName,
      alternateName: siteName,
      url: siteUrl,
    },
    ...(additionalProperty.length > 0 ? { additionalProperty } : {}),
  };
};

export const createProductPageMetadata = (
  product: Product,
  languageAlternates?: Record<string, string>,
): Metadata => {
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
    languageAlternates,
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
  brand: {
    "@type": "Brand",
    name: brandName,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yancheng",
    addressRegion: "Jiangsu",
    addressCountry: "CN",
  },
  email: contactEmail,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: contactEmail,
      telephone: contactPhoneSchema,
      availableLanguage: ["en", "zh"],
    },
  ],
  knowsAbout: [
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
};

export const createWebPageJsonLd = ({
  title,
  description,
  path,
  image,
  inLanguage = "en",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  inLanguage?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description: formatMetadataDescription(description),
  url: absoluteUrl(path),
  inLanguage,
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
