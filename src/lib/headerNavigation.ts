import { applicationNavigationEntries } from "@/data/applicationNavigation";
import { getCaseStudyNavigation } from "@/data/caseStudyNavigation";
import { homeComponentEntries } from "@/data/homeEntries";
import { getResourceNavigationGroupPath, resourceNavigationGroups } from "@/data/resourceNavigation";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref, isEnglishFallbackHref } from "@/i18n/releaseManifest";
import type { ResourceTaxonomyKey, SiteMessages } from "@/i18n/types";
import { buildHomeMaterialColumns } from "@/lib/homeMaterialCatalogue";
import { getCategoryPath } from "@/lib/productCategories";

export type HeaderNavigationItem = { title: string; href: string; englishDestination?: boolean; accessibleLabel?: string };
export type HeaderNavigationGroup = {
  id: string;
  title: string;
  items: HeaderNavigationItem[];
  overview?: HeaderNavigationItem;
  subgroups?: { id: string; title: string; items: HeaderNavigationItem[] }[];
  supplementalItems?: HeaderNavigationItem[];
};
export type HeaderNavigationSection = { id: "products" | "applications" | "resources"; title: string; groups: HeaderNavigationGroup[]; overview: HeaderNavigationItem };
export type HeaderNavigationModel = { sections: HeaderNavigationSection[]; feature: HeaderNavigationItem; backLabel: string };

// Keep catalogue reads on the server. The shared Header receives labels and
// destinations only, never the full grade catalogue or its factual counts.
export function buildHeaderNavigation(messages: SiteMessages, localeSegment?: LocalizedUrlSegment): HeaderNavigationModel {
  const item = (title: string, path: string): HeaderNavigationItem => ({
    title, href: getLocalizedHref(path, localeSegment),
    englishDestination: isEnglishFallbackHref(path, localeSegment),
  });
  const columns = buildHomeMaterialColumns({
    messages: messages.Home.taskFirst,
    materialLabels: messages.Contact.form.materialOptionLabels,
    localizedHref: path => path,
  });
  const components = homeComponentEntries.map((entry, index) => item(messages.Home.taskFirst.components.items[index].title, entry.href));
  const pomCopy = messages.Header.pomMenu;
  const pomCategories = {
    wear: "Wear-Resistant Low-Friction POM Compound",
    impact: "High-Impact POM Compound",
    uv: "UV-Resistant POM Compound",
    electrical: "Conductive / Antistatic POM Compound",
    glassFiber: "Glass Fiber Reinforced POM Compound",
    carbonFiber: "Carbon Fiber Reinforced POM Compound",
    glassBead: "Glass Bead Filled POM Compound",
    base: "Base POM Resin",
  } as const;
  const pomItem = (key: keyof typeof pomCategories): HeaderNavigationItem => ({
    ...item(pomCopy.items[key], getCategoryPath(pomCategories[key])),
    accessibleLabel: `${pomCopy.items[key]} — POM`,
  });
  const pomSubgroups = [
    { id: "performance", title: pomCopy.performance, items: (["wear", "impact", "uv", "electrical"] as const).map(pomItem) },
    { id: "reinforcement", title: pomCopy.reinforcement, items: (["glassFiber", "carbonFiber", "glassBead"] as const).map(pomItem) },
  ];
  const baseResin = pomItem("base");
  const cases = getCaseStudyNavigation(localeSegment);
  const backLabels = { en: "Back", zh: "返回", de: "Zurück", fr: "Retour", "pt-br": "Voltar" };
  return {
    backLabel: backLabels[localeSegment ?? "en"],
    feature: components[0],
    sections: [
      { id: "products", title: messages.Header.products, overview: item(messages.Header.allProducts, "/products"), groups: columns.map(column => ({
        id: column.id, title: column.id === "pom" ? pomCopy.title : column.title,
        overview: item(column.id === "pom" ? pomCopy.title : column.title, column.href),
        items: column.id === "pom" ? [...pomSubgroups.flatMap(group => group.items), baseResin] : column.items.map(link => item(link.title, link.href)),
        ...(column.id === "pom" ? { subgroups: pomSubgroups, supplementalItems: [baseResin] } : {}),
      })) },
      { id: "applications", title: messages.Header.applications, overview: item(messages.Header.allApplications, "/applications"), groups: [
        { id: "industries", title: messages.Header.applicationAreas, items: applicationNavigationEntries.map(entry => item(messages.Taxonomy.applications[entry.slug], `/applications/${entry.slug}`)) },
        { id: "components", title: messages.Taxonomy.componentSolutions, overview: item(messages.Taxonomy.componentSolutions, "/components"), items: components },
      ] },
      { id: "resources", title: messages.Header.resources, overview: item(messages.Header.allResources, "/resources"), groups: [
        { id: "technical", title: messages.Header.technicalResources, items: resourceNavigationGroups.map(group => item(messages.Taxonomy.resources[group.id as ResourceTaxonomyKey].title, getResourceNavigationGroupPath(group))) },
        { id: "application-support", title: messages.Header.applications, items: [
          ...(cases ? [item(cases.label, cases.href)] : []), components[0], item(messages.Header.discussApplication, "/contact"),
        ] },
      ] },
    ],
  };
}
