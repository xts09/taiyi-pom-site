import type { Product } from "@/data/products";

type ProductCategoryData = {
  category: string;
  label: string;
  description: string;
  navSubtitle: string;
  applications: string[];
  applicationSlugs: string[];
  selectionLinks?: Array<{
    label: string;
    href: string;
  }>;
  sourceCategories?: string[];
};

const wearAndLowFrictionSourceCategories = [
  "Wear-Resistant POM Compound",
  "Low-Friction POM Compound",
];

const ultraHighFlowPomCategory = "Ultra-High Flow POM";

const canonicalCategoryBySourceCategory: Record<string, string> = {
  "Wear-Resistant POM Compound": "Wear-Resistant Low-Friction POM Compound",
  "Low-Friction POM Compound": "Wear-Resistant Low-Friction POM Compound",
};

const pomCategoryOverview = {
  category: "POM",
  label: "POM",
  title: "POM Material Grades and Modified Compound Data",
  description:
    "Compare Taiyi Polymer POM grades by application and grade data. Review wear, impact, friction, UV, reinforced, conductive, antistatic, and base resin options.",
  navSubtitle:
    "Browse modified POM and base resin options by family, grade data, application fit, and documents.",
  applications: [
    "Precision injection molded parts",
    "Gears, bushings, rollers, and sliding parts",
    "Automotive, electrical, and mechanical functional components",
  ],
  applicationSlugs: [
    "automotive",
    "motion-components",
    "electronics",
    "conveyor-automation",
    "water-control",
    "textile-machinery",
    "washing-machine-components",
    "outdoor-equipment",
  ],
  selectionLinks: [
    {
      label: "Choose modified POM by part requirement",
      href: "/modified-pom-compounds#part-requirement-map",
    },
    {
      label: "MoS2-filled POM grade data: EMS162",
      href: "/products/ems162-high-wear-resistant-pom",
    },
    {
      label: "PTFE-filled POM grade data: EPTL402",
      href: "/products/eptl402-high-wear-resistant-pom",
    },
    {
      label: "Wear and low-friction POM selection guide",
      href: "/resources/wear-resistant-low-friction-pom-selection-guide",
    },
  ],
};

export const productCategoryData: ProductCategoryData[] = [
  {
    category: "Wear-Resistant Low-Friction POM Compound",
    label: "Wear-Resistant & Low-Friction POM",
    description:
      "Browse Taiyi Polymer wear-resistant and low-friction POM directions for sliding parts, gears, bushings, rollers, motion components, grade data, and document support.",
    navSubtitle:
      "Shortlist wear-resistant and low-friction POM directions by movement, friction, MFI, shrinkage, and application fit.",
    applications: [
      "Gears and moving mechanical parts",
      "Bushings, rollers, guide rails, and sliding parts",
      "Molded components requiring wear-life or friction review",
    ],
    applicationSlugs: [
      "motion-components",
      "conveyor-automation",
      "textile-machinery",
      "water-control",
    ],
    sourceCategories: wearAndLowFrictionSourceCategories,
    selectionLinks: [
      {
        label: "Review wear and low-friction POM solutions",
        href: "/wear-resistant-low-friction-pom",
      },
    ],
  },
  {
    category: "High-Impact POM Compound",
    label: "High-Impact POM",
    description:
      "Browse Taiyi Polymer high-impact POM grades with MFI, color, impact data, low-temperature performance, applications, and document support.",
    navSubtitle:
      "Review impact-modified POM grades by toughness need, molding fit, and application risk.",
    applications: [
      "Low-temperature molded parts",
      "Automotive, electrical, sanitary, and industrial components",
      "Functional parts requiring improved impact toughness",
    ],
    applicationSlugs: [
      "automotive",
      "outdoor-equipment",
      "washing-machine-components",
    ],
  },
  {
    category: "UV-Resistant POM Compound",
    label: "UV-Resistant POM",
    description:
      "Browse Taiyi Polymer UV-resistant POM grades for light-exposed molded parts with color options, property data, applications, and document support.",
    navSubtitle:
      "Compare UV-resistant POM options by color, exposure condition, and document requirements.",
    applications: [
      "Outdoor or light-exposed molded parts",
      "Automotive and consumer components exposed to UV conditions",
      "Applications requiring more stable appearance retention",
    ],
    applicationSlugs: ["outdoor-equipment", "automotive"],
  },
  {
    category: "Glass Fiber Reinforced POM Compound",
    label: "Glass Fiber Reinforced POM",
    description:
      "Compare Taiyi Polymer 10% to 30% glass fiber reinforced POM grades for stiffness and dimensional stability. Beyond POM, the current portfolio includes PA6, PA66, and PPA glass fiber compounds with up to 50% glass fiber.",
    navSubtitle:
      "Compare 10% to 30% glass fiber POM grades, then discuss PA6, PA66, and PPA directions with up to 50% glass fiber when heat, moisture, or stiffness targets move beyond POM.",
    applications: [
      "Structural molded parts requiring higher stiffness",
      "Precision parts with dimensional stability requirements",
      "Mechanical housings, brackets, and reinforced components",
    ],
    applicationSlugs: [
      "automotive",
      "motion-components",
      "water-control",
      "textile-machinery",
    ],
    selectionLinks: [
      {
        label: "PPA glass-fiber / mineral option: EAX645",
        href: "/products/eax645-ppa-gf-mineral-reinforced",
      },
    ],
  },
  {
    category: "Glass Bead Filled POM Compound",
    label: "Glass Bead Filled POM",
    description:
      "Review Taiyi Polymer glass-bead-filled POM grades with MFI, shrinkage, thermal data, application fit, and document support.",
    navSubtitle:
      "Screen glass-bead-filled POM by shrinkage, thermal profile, molding conditions, and document requirements.",
    applications: [
      "Injection-molded parts requiring shrinkage review",
      "Automotive, electrical, sanitary, and industrial components",
      "Parts requiring project-specific dimensional and thermal evaluation",
    ],
    applicationSlugs: [
      "automotive",
      "electronics",
      "water-control",
      "washing-machine-components",
    ],
  },
  {
    category: "Carbon Fiber Reinforced POM Compound",
    label: "Carbon Fiber Reinforced POM Compound",
    description:
      "Browse Taiyi Polymer carbon fiber reinforced POM compound grades for high stiffness, controlled conductivity, dimensional stability, and document support.",
    navSubtitle:
      "Review carbon fiber reinforced POM compound grades by stiffness, conductivity target, dimensional control, and documents.",
    applications: [
      "High-stiffness precision parts",
      "Components requiring reinforcement and controlled conductivity",
      "Mechanical parts where dimensional stability is important",
    ],
    applicationSlugs: ["electronics", "motion-components"],
    selectionLinks: [
      {
        label: "PA6 carbon-fiber option: EAC115C",
        href: "/products/eac115c-pa6-carbon-fiber-reinforced",
      },
    ],
  },
  {
    category: "Conductive / Antistatic POM Compound",
    label: "Conductive / Antistatic POM",
    description:
      "Browse Taiyi Polymer conductive and antistatic POM grades with resistivity data, electrical application fit, color, and document support.",
    navSubtitle:
      "Review conductive and antistatic options by electrical target, part geometry, and validation needs.",
    applications: [
      "Electronic and electrical molded components",
      "Parts requiring antistatic or conductive performance",
      "Functional components where charge control is required",
    ],
    applicationSlugs: ["electronics", "conveyor-automation"],
    selectionLinks: [
      {
        label: "Conductive and antistatic POM selection overview",
        href: "/conductive-antistatic-pom",
      },
      {
        label: "Cross-material conductive and antistatic compounds",
        href: "/products/conductive-antistatic-compounds",
      },
    ],
  },
  {
    category: "Base POM Resin",
    label: "Base POM Resin",
    description:
      "Browse selected Taiyi Polymer base POM resin grades with MFI, physical property data, processing information, and document support.",
    navSubtitle:
      "Compare base POM resin options for reference, property data, documents, and project review.",
    applications: [
      "General injection molded POM parts",
      "Customers sourcing selected POM resin with document support",
      "Projects requiring baseline POM resin comparison",
    ],
    applicationSlugs: [
      "washing-machine-components",
      "motion-components",
      "water-control",
    ],
    selectionLinks: [
      {
        label: "Ultra-high-flow POM for thin-wall filling",
        href: "/products/categories/ultra-high-flow-pom",
      },
    ],
  },
  {
    category: ultraHighFlowPomCategory,
    label: "Ultra-High Flow POM",
    description:
      "Browse Taiyi Polymer POM grades with MFI of 100 g/10 min or higher for flow-sensitive injection molding and thin-wall molded part review.",
    navSubtitle:
      "Compare ultra-high flow POM grades by MFI, processing fit, shrinkage behavior, and application requirements.",
    applications: [
      "Thin-wall injection molded POM parts",
      "Flow-sensitive molds with longer flow paths",
      "Projects requiring easier filling and stable processability",
    ],
    applicationSlugs: ["electronics", "automotive"],
  },
  {
    category: "PA6 Compound",
    label: "PA6 Compounds",
    description:
      "Compare PA6 compounds by application and grade data. Review reinforced, impact-modified, flame-retardant, wear-related, and mineral-filled options.",
    navSubtitle:
      "Compare PA6 compound options by reinforcement, toughness, flame rating, wear, heat, and application fit.",
    applications: [
      "Electrical housings, connectors, and industrial molded parts",
      "Reinforced or impact-modified nylon components",
      "Projects requiring practical PA6 compound data before material review",
    ],
    applicationSlugs: ["automotive", "electronics", "motion-components"],
  },
  {
    category: "PA66 Compound",
    label: "PA66 Compounds",
    description:
      "Compare PA66 compounds by application and grade data. Review reinforced, flame-retardant, wear-related, and dimensionally stable options.",
    navSubtitle:
      "Compare PA66 compound options by reinforcement, flame rating, heat, wear behavior, and application fit.",
    applications: [
      "Automotive, electrical, and industrial molded components",
      "Glass fiber reinforced or flame-retardant nylon parts",
      "Projects requiring PA66 stiffness, heat performance, or wear review",
    ],
    applicationSlugs: ["automotive", "electronics", "motion-components"],
  },
  {
    category: "PPA Compound",
    label: "PPA Compounds",
    description:
      "Browse PPA compound options, listed grades, application fit, and technical documents for higher-temperature molded parts that need stiffness, dimensional stability, and reinforced performance.",
    navSubtitle:
      "Compare PPA compound options by temperature, reinforcement, dimensional target, and application risk.",
    applications: [
      "High-temperature automotive and electrical parts",
      "Reinforced precision molded components",
      "Projects requiring stiffness and dimensional stability beyond standard nylon",
    ],
    applicationSlugs: ["automotive", "electronics"],
  },
];

export const pomProductCategoryData = productCategoryData.filter(
  (item) =>
    ![
      "PA6 Compound",
      "PA66 Compound",
      "PPA Compound",
    ].includes(item.category)
);

export const productCategoryOrder = pomProductCategoryData.map(
  (item) => item.category
);

export const getCanonicalProductCategory = (category: string) =>
  canonicalCategoryBySourceCategory[category] ?? category;

export const getProductCategoryOrderIndex = (category: string) =>
  productCategoryOrder.indexOf(getCanonicalProductCategory(category));

export const productCategoryGroups: Record<string, string[]> = {
  POM: pomProductCategoryData.flatMap(
    (item) => item.sourceCategories ?? [item.category]
  ),
};

export const pomSubcategoryLabels = Object.fromEntries(
  productCategoryData.map((item) => [item.category, item.label])
) as Record<string, string>;

pomSubcategoryLabels["Wear-Resistant POM Compound"] = "Wear-Resistant POM";
pomSubcategoryLabels["Low-Friction POM Compound"] = "Low-Friction POM";

export const createCategorySlug = (category: string) =>
  category
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const getCategoryPath = (category: string) =>
  `/products/categories/${createCategorySlug(
    canonicalCategoryBySourceCategory[category] ?? category
  )}`;

const getCategoryData = (category: string) =>
  productCategoryData.find((item) => item.category === category);

export const getLegacyCategoryRedirect = (slug: string) => {
  const sourceCategory = Object.keys(canonicalCategoryBySourceCategory).find(
    (category) => createCategorySlug(category) === slug
  );

  return sourceCategory
    ? createCategorySlug(canonicalCategoryBySourceCategory[sourceCategory])
    : undefined;
};

export const productCategoryEntries = [
  pomCategoryOverview,
  ...productCategoryData,
].map((item) => ({
  category: item.category,
  slug: createCategorySlug(item.category),
  path: getCategoryPath(item.category),
  label: item.label,
}));

export const findCategoryBySlug = (slug: string) =>
  productCategoryEntries.find((entry) => entry.slug === slug);

export const legacyProductCategorySlugs = Object.keys(
  canonicalCategoryBySourceCategory
).map(createCategorySlug);

const getMfiNumber = (mfi: string) => Number.parseFloat(mfi.replace(/,/g, ""));

const isUltraHighFlowPomProduct = (product: Product) => {
  const mfi = getMfiNumber(product.mfi);

  return product.category.includes("POM") && Number.isFinite(mfi) && mfi >= 100;
};

export const getProductsByCategory = (items: Product[], category: string) => {
  const group = productCategoryGroups[category];
  const sourceCategories = getCategoryData(category)?.sourceCategories;

  if (category === ultraHighFlowPomCategory) {
    return items.filter(isUltraHighFlowPomProduct);
  }

  if (group) {
    return items.filter((product) => group.includes(product.category));
  }

  if (sourceCategories) {
    return items.filter((product) => sourceCategories.includes(product.category));
  }

  return items.filter((product) => product.category === category);
};

export const getCategoryTitle = (category: string) => {
  if (category === pomCategoryOverview.category) {
    return pomCategoryOverview.title;
  }

  return getCategoryData(category)?.label ?? category;
};

const categoryMetadataTitles: Record<string, string> = {
  "PA6 Compound": "PA6 Compound Grades and Applications",
  "PA66 Compound": "PA66 Compound Grades and Applications",
};

export const getCategoryMetadataTitle = (category: string) =>
  categoryMetadataTitles[category] ?? getCategoryTitle(category);

export const getCategoryDescription = (category: string) => {
  if (category === pomCategoryOverview.category) {
    return pomCategoryOverview.description;
  }

  return (
    getCategoryData(category)?.description ??
    `Browse Taiyi Polymer ${category} grades with MFI, color, typical property data, application fit, and document support.`
  );
};

export const getCategoryNavSubtitle = (category: string) => {
  if (category === pomCategoryOverview.category) {
    return pomCategoryOverview.navSubtitle;
  }

  return getCategoryData(category)?.navSubtitle ?? getCategoryDescription(category);
};

export const getCategoryApplications = (category: string) => {
  if (category === pomCategoryOverview.category) {
    return pomCategoryOverview.applications;
  }

  return getCategoryData(category)?.applications ?? pomCategoryOverview.applications;
};

export const getCategoryApplicationSlugs = (category: string) => {
  if (category === pomCategoryOverview.category) {
    return pomCategoryOverview.applicationSlugs;
  }

  return (
    getCategoryData(category)?.applicationSlugs ??
    pomCategoryOverview.applicationSlugs
  );
};

export const getCategorySelectionLinks = (category: string) => {
  if (category === pomCategoryOverview.category) {
    return pomCategoryOverview.selectionLinks;
  }

  return getCategoryData(category)?.selectionLinks ?? [];
};

export const getCategoryFaqs = (category: string) => {
  const label =
    category === pomCategoryOverview.category
      ? "POM materials"
      : getCategoryData(category)?.label ?? category;
  const usesReadabilityCopy = [
    pomCategoryOverview.category,
    "PA6 Compound",
    "PA66 Compound",
  ].includes(category);

  return [
    {
      question: `How should buyers choose ${label}?`,
      answer: usesReadabilityCopy
        ? "Start with the part function, movement, load, environment, dimensional target, and processing method. Then compare grades by the relevant properties and available documents."
        : "Selection should start from the part type, movement condition, load, friction or wear target, dimensional requirement, color, processing method, and document needs.",
    },
    {
      question: "Can Taiyi Polymer provide technical documents for evaluation?",
      answer:
        "Typical document support includes TDS, SDS, COA, REACH, and RoHS, depending on the grade and project requirement.",
    },
    {
      question: "Can grades be adjusted for a specific application?",
      answer: usesReadabilityCopy
        ? "Yes. Share the current material, molded-part details, operating conditions, target property, and estimated volume. Taiyi Polymer can then shortlist relevant grades for project evaluation."
        : "Yes. Share the current material, working condition, target property, molded part details, and estimated volume so relevant grades can be shortlisted for project evaluation.",
    },
  ];
};
