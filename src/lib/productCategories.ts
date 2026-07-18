import type { Product } from "@/data/products";

type ProductCategoryData = {
  category: string;
  label: string;
  description: string;
  navSubtitle: string;
  applications: string[];
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
    "Browse Taiyi Nano POM material grades including wear-resistant, high-impact, low-friction, UV-resistant, reinforced, conductive, antistatic, and base POM resin options.",
  navSubtitle:
    "Browse modified POM and base resin options by family, grade data, application fit, and documents.",
  applications: [
    "Precision injection molded parts",
    "Gears, bushings, rollers, and sliding parts",
    "Automotive, electrical, and mechanical functional components",
  ],
};

export const productCategoryData: ProductCategoryData[] = [
  {
    category: "Wear-Resistant Low-Friction POM Compound",
    label: "Wear-Resistant & Low-Friction POM",
    description:
      "Browse Taiyi Nano wear-resistant and low-friction POM directions for sliding parts, gears, bushings, rollers, motion components, grade data, and document support.",
    navSubtitle:
      "Shortlist wear-resistant and low-friction POM directions by movement, friction, MFI, shrinkage, and application fit.",
    applications: [
      "Gears and moving mechanical parts",
      "Bushings, rollers, guide rails, and sliding parts",
      "Molded components requiring wear-life or friction review",
    ],
    sourceCategories: wearAndLowFrictionSourceCategories,
  },
  {
    category: "High-Impact POM Compound",
    label: "High-Impact POM",
    description:
      "Browse Taiyi Nano high-impact POM grades with MFI, color, impact data, low-temperature performance, applications, and document support.",
    navSubtitle:
      "Review impact-modified POM grades by toughness need, molding fit, and application risk.",
    applications: [
      "Low-temperature molded parts",
      "Automotive, electrical, sanitary, and industrial components",
      "Functional parts requiring improved impact toughness",
    ],
  },
  {
    category: "UV-Resistant POM Compound",
    label: "UV-Resistant POM",
    description:
      "Browse Taiyi Nano UV-resistant POM grades for light-exposed molded parts with color options, property data, applications, and document support.",
    navSubtitle:
      "Compare UV-resistant POM options by color, exposure condition, and document requirements.",
    applications: [
      "Outdoor or light-exposed molded parts",
      "Automotive and consumer components exposed to UV conditions",
      "Applications requiring more stable appearance retention",
    ],
  },
  {
    category: "Glass Fiber Reinforced POM Compound",
    label: "Glass Fiber Reinforced POM",
    description:
      "Compare Taiyi Nano 10% to 30% glass fiber reinforced POM grades for stiffness and dimensional stability. Beyond POM, the current portfolio includes PA6, PA66, and PPA glass fiber compounds with up to 50% glass fiber.",
    navSubtitle:
      "Compare 10% to 30% glass fiber POM grades, then discuss PA6, PA66, and PPA directions with up to 50% glass fiber when heat, moisture, or stiffness targets move beyond POM.",
    applications: [
      "Structural molded parts requiring higher stiffness",
      "Precision parts with dimensional stability requirements",
      "Mechanical housings, brackets, and reinforced components",
    ],
  },
  {
    category: "Carbon Fiber Reinforced POM Compound",
    label: "Carbon Fiber Reinforced POM",
    description:
      "Browse Taiyi Nano carbon fiber reinforced POM grades for high stiffness, controlled conductivity, dimensional stability, and document support.",
    navSubtitle:
      "Review carbon fiber reinforced POM by stiffness, conductivity target, dimensional control, and documents.",
    applications: [
      "High-stiffness precision parts",
      "Components requiring reinforcement and controlled conductivity",
      "Mechanical parts where dimensional stability is important",
    ],
  },
  {
    category: "Conductive / Antistatic POM Compound",
    label: "Conductive / Antistatic POM",
    description:
      "Browse Taiyi Nano conductive and antistatic POM grades with resistivity data, electrical application fit, color, and document support.",
    navSubtitle:
      "Review conductive and antistatic options by electrical target, part geometry, and validation needs.",
    applications: [
      "Electronic and electrical molded components",
      "Parts requiring antistatic or conductive performance",
      "Functional components where charge control is required",
    ],
  },
  {
    category: "Base POM Resin",
    label: "Base POM Resin",
    description:
      "Browse selected Taiyi Nano base POM resin grades with MFI, physical property data, processing information, and document support.",
    navSubtitle:
      "Compare base POM resin options for reference, property data, documents, and project review.",
    applications: [
      "General injection molded POM parts",
      "Customers sourcing selected POM resin with document support",
      "Projects requiring baseline POM resin comparison",
    ],
  },
  {
    category: ultraHighFlowPomCategory,
    label: "Ultra-High Flow POM",
    description:
      "Browse Taiyi Nano POM grades with MFI of 100 g/10 min or higher for flow-sensitive injection molding and thin-wall molded part review.",
    navSubtitle:
      "Compare ultra-high flow POM grades by MFI, processing fit, shrinkage behavior, and application requirements.",
    applications: [
      "Thin-wall injection molded POM parts",
      "Flow-sensitive molds with longer flow paths",
      "Projects requiring easier filling and stable processability",
    ],
  },
  {
    category: "PA6 Compound",
    label: "PA6 Compounds",
    description:
      "Review selected PA6 compound grade directions for reinforced, impact-modified, flame-retardant, wear-related, and mineral-filled molded parts.",
    navSubtitle:
      "Compare PA6 compound reference grades by reinforcement, toughness, flame rating, heat performance, and application fit.",
    applications: [
      "Electrical housings, connectors, and industrial molded parts",
      "Reinforced or impact-modified nylon components",
      "Projects requiring practical PA6 compound data before material review",
    ],
  },
  {
    category: "PA66 Compound",
    label: "PA66 Compounds",
    description:
      "Review selected PA66 compound grade directions for reinforced, flame-retardant, wear-related, and dimensionally stable molded parts.",
    navSubtitle:
      "Compare PA66 compound reference grades by reinforcement, flame rating, heat performance, wear behavior, and application fit.",
    applications: [
      "Automotive, electrical, and industrial molded components",
      "Glass fiber reinforced or flame-retardant nylon parts",
      "Projects requiring PA66 stiffness, heat performance, or wear review",
    ],
  },
  {
    category: "PPA Compound",
    label: "PPA Compounds",
    description:
      "Review project-based PPA compound directions for higher-temperature molded parts requiring stiffness, dimensional stability, and reinforced performance.",
    navSubtitle:
      "Discuss PPA compound requirements by temperature, reinforcement, dimensional target, and application risk.",
    applications: [
      "High-temperature automotive and electrical parts",
      "Reinforced precision molded components",
      "Projects requiring stiffness and dimensional stability beyond standard nylon",
    ],
  },
  {
    category: "PPS Compound",
    label: "PPS Compounds",
    description:
      "Review project-based PPS compound directions for molded parts requiring heat resistance, chemical resistance, low moisture uptake, and dimensional control.",
    navSubtitle:
      "Discuss PPS compound requirements by heat exposure, chemical contact, dimensional control, and document needs.",
    applications: [
      "Valve, pump, and fluid-control components",
      "Electrical and industrial parts exposed to heat or chemicals",
      "Projects requiring low moisture uptake and stable molded dimensions",
    ],
  },
];

export const pomProductCategoryData = productCategoryData.filter(
  (item) =>
    ![
      "PA6 Compound",
      "PA66 Compound",
      "PPA Compound",
      "PPS Compound",
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

export const getCategoryDescription = (category: string) => {
  if (category === pomCategoryOverview.category) {
    return pomCategoryOverview.description;
  }

  return (
    getCategoryData(category)?.description ??
    `Browse Taiyi Nano ${category} grades with MFI, color, typical property data, application fit, and document support.`
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

export const getCategoryFaqs = (category: string) => {
  const label =
    category === pomCategoryOverview.category
      ? "POM materials"
      : getCategoryData(category)?.label ?? category;

  return [
    {
      question: `How should buyers choose ${label}?`,
      answer:
        "Selection should start from the part type, movement condition, load, friction or wear target, dimensional requirement, color, processing method, and document needs.",
    },
    {
      question: "Can Taiyi provide technical documents for evaluation?",
      answer:
        "Typical document support includes TDS, SDS, COA, REACH, and RoHS, depending on the grade and project requirement.",
    },
    {
      question: "Can grades be adjusted for a specific application?",
      answer:
        "Yes. For project evaluation, share the current material, working condition, target property, molded part details, and estimated volume so a suitable material direction can be reviewed.",
    },
  ];
};
