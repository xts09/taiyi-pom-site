import {
  catalogEngineeringTds,
  catalogProducts,
  type CatalogTds,
} from "@/data/catalog";
import {
  conductiveCompounds,
  conductiveSeries,
} from "@/data/conductiveCompounds";
import { engineeringTdsDocuments } from "@/data/engineeringTds";
import { findGradeCrossReference } from "@/data/gradeCrossReferences";
import { products } from "@/data/products";
import { resourcePages } from "@/data/resources";
import { matchesTechnicalQuery } from "@/lib/mfiSearch";
import {
  normalizeTechnicalDataQuery,
  type TechnicalDataSearchAlias,
} from "@/lib/technicalDataQueryVocabulary";

export {
  normalizeTechnicalDataQuery,
  type TechnicalDataSearchAlias,
} from "@/lib/technicalDataQueryVocabulary";

export const technicalDataResourceValues = [
  "",
  "grade-data",
  "tds",
  "guides",
  "faq",
  "application-notes",
] as const;

export const technicalDataMaterialFamilies = [
  "",
  "POM",
  "PA6",
  "PA66",
  "PPA",
] as const;

export const technicalDataMaterialDirections = [
  {
    value: "",
  },
  {
    value: "glass-fiber",
    categories: [
      "Glass Fiber Reinforced POM Compound",
      "Glass Fiber Reinforced",
      "GF Mineral Reinforced",
    ],
  },
  {
    value: "carbon-fiber",
    categories: [
      "Carbon Fiber Reinforced POM Compound",
      "Carbon Fiber Reinforced",
    ],
  },
  {
    value: "wear-low-friction",
    categories: ["Wear-Resistant POM Compound", "Wear Low Friction"],
  },
  {
    value: "impact-modified",
    categories: ["High-Impact POM Compound", "Impact Modified"],
  },
  {
    value: "flame-retardant",
    categories: ["Flame Retardant", "V0 Flame Retardant"],
  },
  {
    value: "conductive-antistatic",
    categories: ["Conductive / Antistatic POM Compound"],
  },
  {
    value: "uv-resistant",
    categories: ["UV-Resistant POM Compound"],
  },
  {
    value: "mineral-filled",
    categories: [
      "GF Mineral Reinforced",
      "Mineral Filled",
      "Glass Bead Filled",
    ],
  },
  {
    value: "mold-release",
    categories: ["Mold Release"],
  },
  {
    value: "base-resin",
    categories: ["Base POM Resin"],
  },
] as const;

export type TechnicalDataSearchParams = {
  q?: string | string[];
  resource?: string | string[];
  family?: string | string[];
  direction?: string | string[];
};

export type TechnicalDocumentState =
  | "registered-pdf"
  | "data-only"
  | "unknown";

export const getTechnicalDataSearchValue = (
  value: string | string[] | undefined,
) => (Array.isArray(value) ? (value[0] ?? "") : (value ?? ""));

export const isTechnicalDataProductContentType = (resource: string) =>
  !resource || resource === "grade-data" || resource === "tds";

export const resourceTypeForTechnicalDataSlug = (slug: string) => {
  if (slug === "faq") return "faq";
  if (slug === "application-notes") return "application-notes";
  return "guides";
};

const documentStateFromTds = (
  tds: CatalogTds | undefined,
): TechnicalDocumentState => {
  if (tds?.status === "pdf" && tds.pdfPath) return "registered-pdf";
  if (tds?.status === "data-only") return "data-only";
  return "unknown";
};

const productDocumentStateBySlug = new Map(
  catalogProducts.map((record) => [
    record.slug,
    documentStateFromTds(record.tds),
  ]),
);

const engineeringDocumentStateByGrade = new Map(
  catalogEngineeringTds.map((record) => [
    `${record.family}:${record.grade}`,
    documentStateFromTds(record.tds),
  ]),
);

export const hasRegisteredTechnicalDataPdf = [
  ...catalogProducts,
  ...catalogEngineeringTds,
].some((record) => documentStateFromTds(record.tds) === "registered-pdf");

export function selectTechnicalDataSearch({
  params,
  vocabulary = [],
}: {
  params: TechnicalDataSearchParams;
  vocabulary?: readonly TechnicalDataSearchAlias[];
}) {
  const query = getTechnicalDataSearchValue(params.q).trim();
  const canonicalQuery = normalizeTechnicalDataQuery(query, vocabulary);
  const activeResource = getTechnicalDataSearchValue(params.resource).trim();
  const requestedFamily = getTechnicalDataSearchValue(params.family).trim();
  const requestedDirection = getTechnicalDataSearchValue(
    params.direction,
  ).trim();
  const activeFamily = technicalDataMaterialFamilies.includes(
    requestedFamily as (typeof technicalDataMaterialFamilies)[number],
  )
    ? requestedFamily
    : "";
  const activeDirection = technicalDataMaterialDirections.some(
    (option) => option.value === requestedDirection,
  )
    ? requestedDirection
    : "";
  const activeDirectionFilter = technicalDataMaterialDirections.find(
    (option) => option.value === activeDirection,
  );
  const directionCategories: readonly string[] | undefined =
    activeDirectionFilter && "categories" in activeDirectionFilter
      ? activeDirectionFilter.categories
      : undefined;
  const productResourceAllowed =
    isTechnicalDataProductContentType(activeResource);

  const engineeringResults = productResourceAllowed
    ? engineeringTdsDocuments
        .filter((document) => {
          const matchesFamily =
            !activeFamily || document.family === activeFamily;
          const matchesDirection =
            !directionCategories ||
            directionCategories.includes(document.category);

          return (
            matchesFamily &&
            matchesDirection &&
            matchesTechnicalQuery(canonicalQuery, {
              fields: [
                document.grade,
                document.family,
                document.category,
                "grade data technical data sheet engineering plastic compound",
              ],
            })
          );
        })
        .map((document) => ({
          document,
          documentState:
            engineeringDocumentStateByGrade.get(
              `${document.family}:${document.grade}`,
            ) ?? "unknown",
        }))
    : [];

  const searchableProducts = productResourceAllowed
    ? products.filter((product) => {
        const matchesFamily = !activeFamily || activeFamily === "POM";
        const matchesDirection =
          !directionCategories ||
          directionCategories.includes(product.category);
        const matchesQuery = matchesTechnicalQuery(canonicalQuery, {
          fields: [
            product.grade,
            product.title,
            product.category,
            product.color,
            product.description,
            `MFI ${product.mfi}`,
            product.features.join(" "),
            product.applications.join(" "),
            product.documents.join(" "),
          ],
          mfi: product.mfi,
        });

        return matchesFamily && matchesDirection && matchesQuery;
      })
    : [];

  const conductiveResults = productResourceAllowed
    ? conductiveCompounds.filter((compound) => {
        const matchesFamily = !activeFamily || compound.matrix === activeFamily;
        const matchesDirection =
          !activeDirection || activeDirection === "conductive-antistatic";
        const series = conductiveSeries[compound.technology];

        return (
          matchesFamily &&
          matchesDirection &&
          matchesTechnicalQuery(canonicalQuery, {
            fields: [
              compound.grade,
              compound.matrix,
              series.shortLabel,
              series.title,
              compound.rangeLabel,
              "conductive antistatic static control charge control grade data",
            ],
          })
        );
      })
    : [];

  const crossReferenceMatch =
    canonicalQuery &&
    productResourceAllowed &&
    (!activeFamily || activeFamily === "POM")
      ? findGradeCrossReference(canonicalQuery)
      : undefined;
  const suggestedProducts = crossReferenceMatch
    ? crossReferenceMatch.record.candidateGrades.flatMap((grade) => {
        const product = products.find((item) => item.grade === grade);
        if (!product) return [];

        const matchesDirection =
          !directionCategories ||
          directionCategories.includes(product.category);

        return matchesDirection ? [product] : [];
      })
    : [];
  const suggestedProductSlugs = new Set(
    suggestedProducts.map((product) => product.slug),
  );
  const directProductResults = searchableProducts.filter(
    (product) => !suggestedProductSlugs.has(product.slug),
  );
  const resourceResults =
    activeFamily || activeDirection
      ? []
      : resourcePages.filter((resource) => {
          const resourceType = resourceTypeForTechnicalDataSlug(resource.slug);
          const matchesQuery = matchesTechnicalQuery(canonicalQuery, {
            fields: [
              resource.title,
              resource.navLabel,
              resource.description,
              resource.intro,
              resource.modules
                .map((module) =>
                  [
                    module.title,
                    module.navLabel,
                    module.description,
                    ...(module.points ?? []),
                    ...(module.faqItems ?? []).flatMap((item) => [
                      item.question,
                      item.answer,
                    ]),
                  ].join(" "),
                )
                .join(" "),
            ],
          });
          const matchesResource =
            !activeResource || resourceType === activeResource;

          return matchesQuery && matchesResource;
        });

  const productResults = directProductResults.map((product) => ({
    product,
    documentState: productDocumentStateBySlug.get(product.slug) ?? "unknown",
  }));
  const suggestedProductResults = suggestedProducts.map((product) => ({
    product,
    documentState: productDocumentStateBySlug.get(product.slug) ?? "unknown",
  }));
  const totalResults =
    suggestedProductResults.length +
    productResults.length +
    resourceResults.length +
    engineeringResults.length +
    conductiveResults.length;
  const hasSearchIntent = Boolean(
    query || activeResource || activeFamily || activeDirection,
  );

  return {
    query,
    canonicalQuery,
    activeResource,
    activeFamily,
    activeDirection,
    hasSearchIntent,
    totalResults,
    crossReferenceMatch,
    resourceResults,
    engineeringResults,
    conductiveResults,
    suggestedProductResults,
    productResults,
  };
}

export type TechnicalDataGradeBrowseItem = {
  id: string;
  grade: string;
  family: "POM" | "PA6" | "PA66" | "PPA";
  category: string;
  slug: string;
  documentState: TechnicalDocumentState;
};

const pomBrowseItems: TechnicalDataGradeBrowseItem[] = catalogProducts.map(
  (record) => ({
    id: record.id,
    grade: record.grade,
    family: "POM",
    category: record.category,
    slug: record.slug,
    documentState: documentStateFromTds(record.tds),
  }),
);

const engineeringBrowseItems: TechnicalDataGradeBrowseItem[] =
  catalogEngineeringTds.map((record) => ({
    id: record.id,
    grade: record.grade,
    family: record.family,
    category: record.category,
    slug: record.slug,
    documentState: documentStateFromTds(record.tds),
  }));

export const technicalDataGradeBrowseGroups = technicalDataMaterialFamilies
  .filter((family): family is "POM" | "PA6" | "PA66" | "PPA" => Boolean(family))
  .map((family) => ({
    family,
    items: [...pomBrowseItems, ...engineeringBrowseItems].filter(
      (item) => item.family === family,
    ),
  }));
