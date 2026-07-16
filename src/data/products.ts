import { catalogProducts } from "@/data/catalog";
import { toLegacyProduct } from "@/data/catalog/legacyAdapter";
import type { CatalogSeo } from "@/data/catalog";

export type ProductProperty = {
  label: string;
  value: string;
  unit: string;
  method: string;
};

export type Product = {
  slug: string;
  aliases?: string[];
  title: string;
  grade: string;
  mfi: string;
  color: string;
  category: string;
  description: string;
  features: string[];
  applications: string[];
  documents: string[];
  properties: ProductProperty[];
  seo?: CatalogSeo;
};

export const products: Product[] = catalogProducts.map(toLegacyProduct);
