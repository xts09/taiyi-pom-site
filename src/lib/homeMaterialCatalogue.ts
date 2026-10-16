import type { HomeMaterialColumn } from "@/components/HomeMaterialCatalogue";
import { catalogConductiveEntries, catalogEngineeringTds, catalogProducts } from "@/data/catalog";
import { products } from "@/data/products";
import type { ContactFormMessages, HomeTaskFirstMessages } from "@/i18n/types";
import { getCategoryPath, getProductsByCategory } from "@/lib/productCategories";

const pomFamilies = [
  ["Wear-Resistant Low-Friction POM Compound", "Wear-Resistant & Low-Friction POM"],
  ["Glass Fiber Reinforced POM Compound", "Glass Fiber Reinforced POM"],
  ["Carbon Fiber Reinforced POM Compound", "Carbon Fiber Reinforced POM Compound"],
  ["High-Impact POM Compound", "High-Impact POM"],
  ["UV-Resistant POM Compound", "UV-Resistant POM"],
  ["Conductive / Antistatic POM Compound", "Conductive / Antistatic POM"],
  ["Glass Bead Filled POM Compound", "Glass Bead Filled POM"],
  ["Base POM Resin", "Base POM Resin"],
] as const;

// Server consumers share the factual counts and family destinations. Only the
// resulting presentation columns are passed to the interactive catalogue.
export function buildHomeMaterialColumns({
  messages, materialLabels, localizedHref,
}: {
  messages: HomeTaskFirstMessages;
  materialLabels: ContactFormMessages["materialOptionLabels"];
  localizedHref: (href: string) => string;
}): HomeMaterialColumn[] {
  const catalogue = messages.catalogue;
  return [
    {
      id: "pom",
      title: materialLabels["Modified POM Compounds"],
      summary: `${catalogProducts.length} ${catalogue.gradesLabel}`,
      items: pomFamilies.map(([category, label]) => ({
        title: materialLabels[label],
        href: localizedHref(getCategoryPath(category)),
        count: getProductsByCategory(products, category).length,
      })),
      action: messages.core.productAction,
      href: localizedHref("/products/categories/pom"),
    },
    {
      id: "polyamide",
      title: catalogue.polyamideTitle,
      summary: `${catalogEngineeringTds.length} ${catalogue.gradesLabel} · PA6 / PA66 / PPA`,
      items: (["PA6", "PA66", "PPA"] as const).map((family) => ({
        title: materialLabels[`${family} Compounds`],
        href: localizedHref(`/products/categories/${family.toLowerCase()}-compound`),
        count: catalogEngineeringTds.filter((record) => record.family === family).length,
      })),
      action: catalogue.polyamideAction,
      href: localizedHref("/products#product-families"),
    },
    {
      id: "functional",
      title: catalogue.functionalTitle,
      summary: `${new Set(catalogConductiveEntries.map((record) => record.matrix)).size} ${catalogue.matricesLabel}`,
      items: [
        {title: catalogue.cntTitle, href: localizedHref("/products/conductive-antistatic-compounds")},
        {title: catalogue.cfTitle, href: localizedHref("/products/conductive-antistatic-compounds")},
      ],
      note: catalogue.functionalNote,
      action: messages.core.allFamiliesAction,
      href: localizedHref("/products/conductive-antistatic-compounds"),
    },
  ];
}
