import type { Product } from "@/data/products";
import type { CatalogProduct } from "./types";

export const toLegacyProduct = (product: CatalogProduct): Product => ({
  slug: product.slug,
  ...(product.aliases ? { aliases: product.aliases } : {}),
  title: product.title,
  grade: product.grade,
  mfi: product.mfi?.display ?? "",
  color: product.colors.join(" / "),
  category: product.category,
  description: product.description,
  features: product.features,
  applications: product.applications,
  documents: product.documents,
  properties: product.properties.map((property) => ({
    label: property.label,
    value: property.value,
    unit: property.unit,
    method: property.method,
  })),
  seo: product.seo,
});
