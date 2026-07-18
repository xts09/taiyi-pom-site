export type ResourceNavigationLink = {
  label: string;
  href: string;
  description: string;
  type: "Guide" | "Technical note" | "FAQ" | "Data tool" | "Directory";
};

export type ResourceNavigationGroup = {
  id: string;
  title: string;
  navigationLabel: string;
  description: string;
  links: ResourceNavigationLink[];
};

export const resourceNavigationGroups: ResourceNavigationGroup[] = [
  {
    id: "selection-guides",
    title: "Selection Guides",
    navigationLabel: "Choose a Material",
    description:
      "Start with the molded part, movement, failure risk, and working conditions before narrowing a material direction.",
    links: [
      {
        label: "Material Selection Guide",
        href: "/resources/material-selection-guide",
        type: "Guide",
        description:
          "A practical POM material selection guide for comparing wear-resistant, low-friction, reinforced, conductive, antistatic, UV, and high-impact compounds.",
      },
      {
        label: "Wear / Low-Friction POM Guide",
        href: "/resources/wear-resistant-low-friction-pom-selection-guide",
        type: "Guide",
        description:
          "A practical guide to selecting wear-resistant and low-friction POM for gears, bushings, rollers, sliders, guides, and valve moving parts.",
      },
    ],
  },
  {
    id: "technical-notes",
    title: "Processing & Technical Notes",
    navigationLabel: "Process & Troubleshoot",
    description:
      "Use these references to review processing, application conditions, and common technical questions before a trial or grade discussion.",
    links: [
      {
        label: "Processing Guide",
        href: "/resources/processing-guide",
        type: "Technical note",
        description:
          "A practical POM injection molding guide for material handling, mold trials, shrinkage, warpage, dimensional drift, defects, and troubleshooting inputs.",
      },
      {
        label: "Application Notes",
        href: "/resources/application-notes",
        type: "Technical note",
        description:
          "Practical modified POM application notes for automotive parts, gears, bushings, rollers, water-control parts, electronics, machinery, and outdoor components.",
      },
      {
        label: "Modified POM FAQ",
        href: "/resources/faq",
        type: "FAQ",
        description:
          "Clear answers about POM vs PA, wear and friction grades, reinforced and conductive POM, TDS properties, shrinkage, warpage, and material selection guidance.",
      },
    ],
  },
  {
    id: "documents-grade-data",
    title: "Documents & Grade Data",
    navigationLabel: "Find Data",
    description:
      "Use grade data, TDS paths, and the POM material-family directory after the material direction has been narrowed.",
    links: [
      {
        label: "Data / TDS Search",
        href: "/technical-data-sheets",
        type: "Data tool",
        description:
          "Search grade data, TDS paths, guides, and technical resource references.",
      },
      {
        label: "POM Material Families",
        href: "/products/categories/pom",
        type: "Directory",
        description:
          "Browse POM material families before opening available grade-level details.",
      },
    ],
  },
];
