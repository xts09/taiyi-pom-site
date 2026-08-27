import type { ApplicationTaxonomyKey } from "@/i18n/types";

export type ApplicationNavigationEntry = {
  slug: ApplicationTaxonomyKey;
  title: string;
};

export const applicationNavigationEntries = [
  { slug: "automotive", title: "Automotive" },
  { slug: "electronics", title: "Electronics" },
  { slug: "conveyor-automation", title: "Conveyor Automation" },
  { slug: "motion-components", title: "Motion Components" },
  { slug: "water-control", title: "Water Control" },
  {
    slug: "washing-machine-components",
    title: "Washing Machine Components",
  },
  { slug: "outdoor-equipment", title: "Outdoor Equipment" },
  { slug: "textile-machinery", title: "Textile Machinery" },
] as const satisfies ReadonlyArray<ApplicationNavigationEntry>;
