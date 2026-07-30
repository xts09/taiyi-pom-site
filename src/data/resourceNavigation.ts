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
  image: string;
  imageAlt: string;
  links: ResourceNavigationLink[];
};

export const resourceNavigationGroups: ResourceNavigationGroup[] = [
  {
    id: "material-selection",
    title: "Material Selection",
    navigationLabel: "Choose a Material",
    description:
      "Start with the part function, failure risk, operating conditions, and required evidence before narrowing a material or grade direction.",
    image: "/og-resources-material-selection.jpg",
    imageAlt:
      "Material Selection technical resources from Taiyi Plastic",
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
      {
        label: "POM Gear Material Selection",
        href: "/resources/pom-gear-material-selection",
        type: "Guide",
        description:
          "Select POM for plastic gears by load, fatigue, contact pair, lubrication, temperature, precision molding, and representative validation.",
      },
      {
        label: "PA6 vs PA66 Selection Guide",
        href: "/resources/pa6-vs-pa66-reinforced-parts",
        type: "Guide",
        description:
          "Compare reinforced PA6 and PA66 by conditioning state, temperature, mechanical balance, dimensional behavior, molding risk, and grade data.",
      },
      {
        label: "Reinforced PA6 / PA66 Guide",
        href: "/resources/glass-fiber-reinforced-pa6-pa66-selection-guide",
        type: "Guide",
        description:
          "Select glass-fiber-reinforced PA6 and PA66 by fiber level, conditioning, load, orientation, warpage, molding feasibility, and part evidence.",
      },
      {
        label: "PPA vs PA66 Selection Guide",
        href: "/resources/ppa-vs-pa66-material-selection",
        type: "Guide",
        description:
          "Choose PPA over PA66 only for a defined high-temperature, conditioned, dimensional, chemical, or electrical performance gap.",
      },
      {
        label: "Conductive PA6 / PA66 / PPA Guide",
        href: "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide",
        type: "Guide",
        description:
          "Select CNT or carbon-fiber PA6, PA66 and PPA by electrical method, target band, grounding, geometry, conditioning, molding, and validation.",
      },
      {
        label: "Application Notes",
        href: "/resources/application-notes",
        type: "Technical note",
        description:
          "Review modified POM by part function, failure risk, operating conditions, and the evidence needed before selecting a grade direction.",
      },
      {
        label: "Reinforcement Materials Overview",
        href: "/resources/reinforcement-materials-overview",
        type: "Guide",
        description:
          "Compare glass fiber and carbon fiber directions by load path, dimensional target, electrical function, molding risk, and validation scope.",
      },
    ],
  },
  {
    id: "processing-troubleshooting",
    title: "Processing & Troubleshooting",
    navigationLabel: "Process & Troubleshoot",
    description:
      "Prepare molding trials, control material condition, and diagnose dimensional or processing problems from traceable evidence.",
    image: "/og-resources-processing-troubleshooting.jpg",
    imageAlt:
      "Processing and Troubleshooting technical resources from Taiyi Plastic",
    links: [
      {
        label: "Processing Guide",
        href: "/resources/processing-guide",
        type: "Technical note",
        description:
          "A practical POM injection molding guide for material handling, mold trials, shrinkage, warpage, dimensional drift, defects, and troubleshooting inputs.",
      },
      {
        label: "POM Warpage Troubleshooting",
        href: "/resources/pom-warpage-troubleshooting",
        type: "Technical note",
        description:
          "Diagnose POM warpage through measurement, shrinkage direction, part and mold design, packing, cooling, and validation.",
      },
      {
        label: "PA6 / PA66 Moisture Guide",
        href: "/resources/pa6-pa66-moisture-drying-conditioning-guide",
        type: "Technical note",
        description:
          "Separate pellet drying, dry-as-molded parts, conditioning, service exposure, measurement, and validation for PA6 and PA66.",
      },
    ],
  },
  {
    id: "data-validation",
    title: "Data & Validation",
    navigationLabel: "Find Data & Validate",
    description:
      "Compare grade evidence, find technical data, prepare replacement trials, and confirm the documents needed for production release.",
    image: "/og-resources-data-validation.jpg",
    imageAlt: "Data and Validation technical resources from Taiyi Plastic",
    links: [
      {
        label: "Alternative POM Grade Validation",
        href: "/resources/alternative-pom-grade-validation",
        type: "Guide",
        description:
          "Compare an alternative POM grade through documents, controlled molding, dimensions, function, compliance, and production-release evidence.",
      },
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
      {
        label: "Modified POM FAQ",
        href: "/resources/faq",
        type: "FAQ",
        description:
          "Clear answers about POM vs PA, wear and friction grades, reinforced and conductive POM, TDS properties, shrinkage, warpage, and material selection guidance.",
      },
    ],
  },
];

export const getResourceNavigationGroupPath = (
  group: ResourceNavigationGroup,
) => `/resources/${group.id}`;

export const getResourceNavigationGroup = (id: string) =>
  resourceNavigationGroups.find((group) => group.id === id);

export const getResourceNavigationGroupForHref = (href: string) =>
  resourceNavigationGroups.find((group) =>
    group.links.some((link) => link.href === href),
  );
