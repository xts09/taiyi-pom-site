import type { Product } from "@/data/products";

type ProductCategoryData = {
  category: string;
  label: string;
  description: string;
  applications: string[];
};

const pomCategoryOverview = {
  category: "POM",
  label: "POM",
  title: "POM Material Grades and Modified Compound Data",
  description:
    "Browse Taiyi Nano POM material grades including wear-resistant, high-impact, low-friction, UV-resistant, reinforced, conductive, antistatic, and base POM resin options.",
  applications: [
    "Precision injection molded parts",
    "Gears, bushings, rollers, and sliding parts",
    "Automotive, electrical, and mechanical functional components",
  ],
};

export const productCategoryData: ProductCategoryData[] = [
  {
    category: "Wear-Resistant POM Compound",
    label: "Wear-Resistant POM",
    description:
      "Browse Taiyi Nano wear-resistant POM grades with MFI, color, wear-related application fit, typical property data, and document support.",
    applications: [
      "Gears and moving mechanical parts",
      "Bushings, rollers, guide rails, and sliding parts",
      "Molded components requiring improved wear life",
    ],
  },
  {
    category: "High-Impact POM Compound",
    label: "High-Impact POM",
    description:
      "Browse Taiyi Nano high-impact POM grades with MFI, color, impact data, low-temperature performance, applications, and document support.",
    applications: [
      "Low-temperature molded parts",
      "Automotive, electrical, sanitary, and industrial components",
      "Functional parts requiring improved impact toughness",
    ],
  },
  {
    category: "Low-Friction POM Compound",
    label: "Low-Friction POM",
    description:
      "Browse Taiyi Nano low-friction POM grades for sliding assemblies, moving parts, friction targets, typical property data, and document support.",
    applications: [
      "Sliding assemblies with repeated movement",
      "Low-noise gears and bearing-related parts",
      "Parts requiring reduced friction against mating surfaces",
    ],
  },
  {
    category: "UV-Resistant POM Compound",
    label: "UV-Resistant POM",
    description:
      "Browse Taiyi Nano UV-resistant POM grades for light-exposed molded parts with color options, property data, applications, and document support.",
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
      "Browse Taiyi Nano glass fiber reinforced POM grades for higher stiffness, dimensional stability, molded part applications, and document support.",
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
    applications: [
      "General injection molded POM parts",
      "Customers sourcing selected POM resin with document support",
      "Projects requiring baseline POM resin comparison",
    ],
  },
];

export const productCategoryOrder = productCategoryData.map(
  (item) => item.category
);

export const productCategoryGroups: Record<string, string[]> = {
  POM: productCategoryOrder,
};

export const pomSubcategoryLabels = Object.fromEntries(
  productCategoryData.map((item) => [item.category, item.label])
) as Record<string, string>;

export const createCategorySlug = (category: string) =>
  category
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const getCategoryPath = (category: string) =>
  `/products/categories/${createCategorySlug(category)}`;

const getCategoryData = (category: string) =>
  productCategoryData.find((item) => item.category === category);

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

export const getProductsByCategory = (items: Product[], category: string) => {
  const group = productCategoryGroups[category];

  if (group) {
    return items.filter((product) => group.includes(product.category));
  }

  return items.filter((product) => product.category === category);
};

export const getCategoryTitle = (category: string) => {
  if (category === pomCategoryOverview.category) {
    return pomCategoryOverview.title;
  }

  return `${getCategoryData(category)?.label ?? category} Grades and Data`;
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
