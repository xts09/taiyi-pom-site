import type { Metadata } from "next";
import { ProductsDirectoryPage } from "@/components/ProductsDirectoryPage";
import messages from "@/i18n/messages/en";
import {
  isLocalizedReleaseIndexable,
  productsLanguageAlternates,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: messages.Products.metadata.title,
  description: messages.Products.metadata.description,
  path: "/products",
  image: "/generated/pom-material-hero.webp",
  imageAlt: messages.Products.metadata.imageAlt,
  indexable: isLocalizedReleaseIndexable("/products"),
  languageAlternates: productsLanguageAlternates,
});

export default function ProductsPage() {
  return (
    <ProductsDirectoryPage
      messages={messages.Products}
      pagePath="/products"
      inLanguage="en"
    />
  );
}
