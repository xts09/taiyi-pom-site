import generatedCatalog from "@/generated/catalog.json";
import type {
  CatalogConductiveRecord,
  CatalogEngineeringTdsRecord,
  CatalogProductRecord,
  CatalogRecord,
} from "./types";

export type {
  CatalogConductiveRecord,
  CatalogEngineeringScreening,
  CatalogEngineeringTdsRecord,
  CatalogProduct,
  CatalogProductRecord,
  CatalogProperty,
  CatalogRecord,
  CatalogSeo,
  CatalogTds,
} from "./types";

export const catalogRecords = (
  generatedCatalog as unknown as CatalogRecord[]
).sort((left, right) => left.sortOrder - right.sortOrder);

export const catalogProducts = catalogRecords.filter(
  (record): record is CatalogProductRecord => record.kind === "product",
);

export const catalogEngineeringTds = catalogRecords.filter(
  (record): record is CatalogEngineeringTdsRecord =>
    record.kind === "engineering-tds",
);

export const catalogConductiveEntries = catalogRecords.filter(
  (record): record is CatalogConductiveRecord =>
    record.kind === "conductive-entry",
);

export const isCatalogRecordIndexable = (
  record: CatalogProductRecord | CatalogEngineeringTdsRecord,
) => record.seo?.indexable !== false;

export const getCatalogProductBySlug = (slug: string) =>
  catalogProducts.find(
    (product) => product.slug === slug || product.aliases?.includes(slug),
  );

export const getCatalogProductsByCategory = (category: string) =>
  catalogProducts.filter((product) => product.category === category);
