import type { Product } from "@/data/products";

type ProductCategoryData = {
  category: string;
  label: string;
  description: string;
  overview?: string;
  navSubtitle: string;
  applications: string[];
  applicationSlugs: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
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
    "Choose modified POM by part requirement, then compare families, grade data, application fit, and documents.",
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
  faqs: [
    {
      question: "What does modified POM mean?",
      answer:
        "Modified POM is a POM compound adjusted with selected additives, fillers, reinforcements, lubricants, impact modifiers, or electrical modifiers. Final suitability depends on the exact grade and application conditions.",
    },
    {
      question: "Should buyers choose a material family or a grade first?",
      answer:
        "Start with the part function, movement, load, environment, dimensional target, and processing method to identify a relevant family. Then compare its grades by the properties and documents that govern the project.",
    },
    {
      question: "Can Taiyi Polymer shortlist a grade from an application requirement?",
      answer:
        "Yes. Share the part, current material, target performance, mold information, document needs, and estimated volume so relevant grades can be shortlisted for project evaluation.",
    },
  ],
};

export const productCategoryData: ProductCategoryData[] = [
  {
    category: "Wear-Resistant Low-Friction POM Compound",
    label: "Wear-Resistant & Low-Friction POM",
    description:
      "PLATFORM® wear-resistant and low-friction POM uses PTFE, MoS2, aramid fiber, and other modification systems for gears, bushings, rollers, guide rails, and other moving parts. The range offers different balances of friction, wear, mechanical strength, and processing performance.",
    overview:
      "The range covers low-friction, wear-resistant, reinforced, and hybrid-modified formulations. Published data, technical documents, and samples are confirmed by grade and project.",
    navSubtitle:
      "Wear-resistant and low-friction POM for gears, bushings, rollers, and guide rails.",
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
    faqs: [
      {
        question: "What parts are these materials designed for?",
        answer:
          "They are primarily designed for gears, bushings, rollers, guide rails, and other continuously moving or sliding molded parts across automotive, electrical, sanitary, conveying, and industrial equipment applications.",
      },
      {
        question: "What modification systems does the range cover?",
        answer:
          "The range includes PTFE-filled, MoS2-filled, aramid-fiber-reinforced, and other wear-modified systems, offering different balances of low friction, wear resistance, mechanical strength, and processing performance.",
      },
      {
        question: "What information is available for material evaluation?",
        answer:
          "Published grade data, technical documents, and samples can be reviewed against the mating material, load, speed, temperature, and lubrication conditions of the part.",
      },
    ],
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
      "PLATFORM® high-impact POM covers molded parts exposed to impact, assembly loads, or low temperatures, with different balances of impact strength, elongation, stiffness, and processability.",
    overview:
      "The range extends from balanced stiffness and toughness to higher elongation and low-temperature performance. Published data, technical documents, and samples are presented by grade.",
    navSubtitle:
      "High-impact POM for functional parts, assembly loads, and low-temperature use.",
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
    faqs: [
      {
        question: "What parts are high-impact POM grades designed for?",
        answer:
          "They are primarily designed for functional molded parts exposed to impact, assembly loads, or lower operating temperatures across automotive, electrical, sanitary, and industrial equipment applications.",
      },
      {
        question: "What performance profiles does the range cover?",
        answer:
          "The range extends from balanced stiffness and toughness to higher impact, elongation, and low-temperature performance, while retaining different flow and thermal profiles.",
      },
      {
        question: "What information is available for each grade?",
        answer:
          "Each grade has a detailed page with published property data. Technical documents and sample availability are confirmed by grade and project.",
      },
    ],
  },
  {
    category: "UV-Resistant POM Compound",
    label: "UV-Stabilized POM",
    description:
      "PLATFORM® UV-stabilized POM covers molded parts exposed to sunlight or other UV sources, with different flow, impact, color, and surface-appearance profiles.",
    overview:
      "The range combines UV stabilization with different mechanical, flow, color, and appearance profiles. Published data, technical documents, and samples are confirmed by grade and project.",
    navSubtitle:
      "POM for outdoor and light-exposed molded parts.",
    applications: [
      "Outdoor or light-exposed molded parts",
      "Automotive and consumer components exposed to UV conditions",
      "Applications requiring more stable appearance retention",
    ],
    applicationSlugs: ["outdoor-equipment", "automotive"],
    faqs: [
      {
        question: "What parts are UV-resistant POM grades designed for?",
        answer:
          "They are primarily designed for outdoor equipment, automotive components, and other molded parts exposed to light, with different priorities for color, appearance, impact, and flow.",
      },
      {
        question: "How do the grades differ?",
        answer:
          "The range includes medium- and higher-flow options, high-impact profiles, matte appearance, and UV- or aging-oriented grades, each with its own published data.",
      },
      {
        question: "What should be defined before testing?",
        answer:
          "The light source, exposure time, color requirement, and acceptance method should be defined before comparing published grade data or testing representative parts.",
      },
    ],
  },
  {
    category: "Glass Fiber Reinforced POM Compound",
    label: "Glass Fiber Reinforced POM",
    description:
      "PLATFORM® glass-fiber-reinforced POM spans 10% to 30% glass fiber for gears, brackets, housings, and other precision or structural parts. The range offers different strength, stiffness, flow, impact, and shrinkage profiles.",
    overview:
      "The range covers multiple reinforcement levels with published mechanical, thermal, and molding-shrinkage data. Technical documents and samples are confirmed by grade and project.",
    navSubtitle:
      "POM with 10% to 30% glass fiber for precision and structural parts.",
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
    faqs: [
      {
        question: "What parts are glass-fiber-reinforced POM grades designed for?",
        answer:
          "They are primarily designed for gears, brackets, housings, and other precision or structural molded parts that place greater emphasis on stiffness, strength, and dimensional control.",
      },
      {
        question: "How do the grades differ?",
        answer:
          "The range spans 10% to 30% glass fiber and offers different balances of stiffness, strength, impact, flow, and molding shrinkage, supported by individual grade data.",
      },
      {
        question: "What information is available for molding trials?",
        answer:
          "Published grade data, technical documents, and samples can be reviewed together with tooling, flow direction, fiber orientation, and dimensional requirements.",
      },
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
      "PLATFORM® EGB25 contains 25% glass beads for dimension-sensitive POM parts. Its grade data include longitudinal and transverse molding shrinkage together with mechanical and thermal properties.",
    overview:
      "EGB25 brings molding-shrinkage, mechanical, thermal, and processing data together on one product page. Technical documents and samples are confirmed by project.",
    navSubtitle:
      "25% glass-bead-filled POM for dimension-sensitive molded parts.",
    applications: [
      "Dimension-sensitive injection-molded parts",
      "Automotive, electrical, sanitary, and industrial components",
      "Parts requiring longitudinal and transverse shrinkage data",
    ],
    applicationSlugs: [
      "automotive",
      "electronics",
      "water-control",
      "washing-machine-components",
    ],
    faqs: [
      {
        question: "What parts is EGB25 designed for?",
        answer:
          "EGB25 is designed for precision molded parts that place greater emphasis on longitudinal and transverse molding shrinkage, dimensional performance, and thermal behavior.",
      },
      {
        question: "What data is available for EGB25?",
        answer:
          "The grade page provides longitudinal and transverse molding shrinkage together with mechanical, thermal, and processing-related data for part and tool evaluation.",
      },
      {
        question: "What information is available for molding trials?",
        answer:
          "Published grade data, technical documents, and samples can be reviewed against the part dimensions, tolerances, tooling, and molding conditions.",
      },
    ],
  },
  {
    category: "Carbon Fiber Reinforced POM Compound",
    label: "Carbon Fiber Reinforced POM Compound",
    description:
      "Black PLATFORM® carbon-fiber-reinforced POM spans 20% to 40% carbon fiber for precision parts that require higher stiffness, dimensional control, or specified electrical resistivity.",
    overview:
      "The range provides different stiffness, shrinkage, dimensional, and electrical profiles. Published mechanical, thermal, molding-shrinkage, and resistivity data are available by grade.",
    navSubtitle:
      "Black POM with 20% to 40% carbon fiber for structural and electrical functions.",
    applications: [
      "High-stiffness precision parts",
      "Components requiring reinforcement and controlled conductivity",
      "Mechanical parts where dimensional stability is important",
    ],
    applicationSlugs: ["electronics", "motion-components"],
    faqs: [
      {
        question: "What parts are carbon-fiber-reinforced POM grades designed for?",
        answer:
          "They are primarily designed for precision structural and functional parts that require higher stiffness, dimensional control, or specified electrical resistivity.",
      },
      {
        question: "How do the grades differ?",
        answer:
          "The range spans 20%, 30%, and 40% carbon fiber, creating different profiles for stiffness, molding shrinkage, dimensional behavior, and electrical resistivity.",
      },
      {
        question: "What information is needed to compare the grades?",
        answer:
          "The comparison should account for fiber orientation, measurement method, tooling, and the required properties of the molded part. Technical documents and samples are confirmed by grade and project.",
      },
    ],
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
      "Black PLATFORM® POM provides different surface- and volume-resistivity ranges for conductive or antistatic electrical, conveying, and automation components.",
    overview:
      "Published surface- and volume-resistivity data are presented together with mechanical and thermal properties. Technical documents and samples are confirmed by grade and project.",
    navSubtitle:
      "Black POM for controlled resistivity and charge management.",
    applications: [
      "Electronic and electrical molded components",
      "Parts requiring antistatic or conductive performance",
      "Functional components where charge control is required",
    ],
    applicationSlugs: ["electronics", "conveyor-automation"],
    faqs: [
      {
        question: "What parts are these materials designed for?",
        answer:
          "They are primarily designed for electrical, electronic, conveying, and automation components that require controlled resistivity or charge management.",
      },
      {
        question: "What data is available by grade?",
        answer:
          "The grade pages provide surface- and volume-resistivity data together with mechanical and thermal properties and their published test context.",
      },
      {
        question: "What should be defined before comparing resistivity data?",
        answer:
          "The test method, measurement location, operating environment, and required resistivity range should be defined before comparing data or testing molded parts.",
      },
    ],
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
      "PLATFORM® base POM spans standard, medium, high, and ultra-high flow for general molded parts, precision components, thin walls, and filling-sensitive geometries.",
    overview:
      "The range brings together published mechanical, thermal, and processing data for automotive, electrical, sanitary, and industrial applications. Technical documents and samples are confirmed by grade and project.",
    navSubtitle:
      "Base POM spanning standard to ultra-high flow.",
    applications: [
      "General injection molded POM parts",
      "Precision and thin-wall molded components",
      "Filling-sensitive parts with longer flow paths",
    ],
    applicationSlugs: [
      "washing-machine-components",
      "motion-components",
      "water-control",
    ],
    faqs: [
      {
        question: "What parts are base POM resin grades designed for?",
        answer:
          "The range serves general, precision, thin-wall, and filling-sensitive injection-molded parts across automotive, electrical, sanitary, and industrial applications.",
      },
      {
        question: "What flow levels does the range cover?",
        answer:
          "The portfolio extends from standard and medium flow to high- and ultra-high-flow grades for different molding and part-performance priorities.",
      },
      {
        question: "What information is available for each grade?",
        answer:
          "Each grade has a detailed page with published property data. Technical documents and sample availability are confirmed by grade and project.",
      },
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
      "PLATFORM® ETM1500 and ETM1800 extend base POM into the ultra-high-flow range for thin-wall parts, long flow paths, and filling-sensitive precision geometries.",
    overview:
      "Published mechanical, thermal, and molding-shrinkage data are available by grade. Technical documents and samples are confirmed by project.",
    navSubtitle:
      "Ultra-high-flow POM for thin walls, long flow paths, and complex filling.",
    applications: [
      "Thin-wall injection molded POM parts",
      "Flow-sensitive molds with longer flow paths",
      "Complex precision parts with demanding filling paths",
    ],
    applicationSlugs: ["electronics", "automotive"],
    faqs: [
      {
        question: "What parts are ultra-high-flow POM grades designed for?",
        answer:
          "They are primarily designed for thin-wall, long-flow-path, complex, or filling-sensitive precision molded parts in electrical, electronic, and automotive applications.",
      },
      {
        question: "How do ETM1500 and ETM1800 differ?",
        answer:
          "Their flow profiles differ, and each page also presents mechanical, thermal, and molding-shrinkage data for a broader part-performance comparison.",
      },
      {
        question: "What information is needed for a molding comparison?",
        answer:
          "Wall thickness, flow length, gate design, equipment, and molding conditions should be reviewed together with the published grade data and available samples.",
      },
    ],
  },
  {
    category: "PA6 Compound",
    label: "PA6 Compounds",
    description:
      "PLATFORM® PA6 compounds cover fiber reinforcement, impact modification, flame retardancy, wear, mineral filling, and processing modifications for automotive, electrical, and industrial parts.",
    overview:
      "The range provides different balances of toughness, strength, wear performance, and processability. Published data, technical documents, and samples are presented by grade.",
    navSubtitle:
      "PA6 across reinforcement, toughness, flame retardancy, wear, and processing modifications.",
    applications: [
      "Electrical housings, connectors, and industrial molded parts",
      "Reinforced, impact-modified, or wear-oriented nylon components",
      "Automotive and motion components with varied strength and processing priorities",
    ],
    applicationSlugs: ["automotive", "electronics", "motion-components"],
    faqs: [
      {
        question: "What parts are PLATFORM® PA6 compounds designed for?",
        answer:
          "The portfolio supports automotive, electrical, industrial, and motion components that require different balances of toughness, strength, wear performance, and processability.",
      },
      {
        question: "What modification systems does the range cover?",
        answer:
          "The range includes glass- and carbon-fiber reinforcement, impact modification, flame retardancy, wear-oriented formulations, mineral filling, and processing-focused options.",
      },
      {
        question: "What information is available for grade comparison?",
        answer:
          "Published grade data, technical documents, and samples can be compared against the part requirements, tooling, and molding conditions.",
      },
    ],
  },
  {
    category: "PA66 Compound",
    label: "PA66 Compounds",
    description:
      "PLATFORM® PA66 compounds cover reinforcement, flame retardancy, wear, impact modification, mineral filling, and other functional modifications for automotive, electrical, and industrial parts.",
    overview:
      "The range provides different balances of stiffness, heat performance, dimensional control, wear, and processability. Published data, technical documents, and samples are presented by grade.",
    navSubtitle:
      "PA66 across reinforcement, flame retardancy, wear, impact, and dimensional control.",
    applications: [
      "Automotive, electrical, and industrial molded components",
      "Glass fiber reinforced or flame-retardant nylon parts",
      "Precision and motion components with stiffness, heat, or wear priorities",
    ],
    applicationSlugs: ["automotive", "electronics", "motion-components"],
    faqs: [
      {
        question: "What parts are PLATFORM® PA66 compounds designed for?",
        answer:
          "The portfolio supports automotive, electrical, industrial, and motion components that place greater emphasis on stiffness, heat performance, dimensional control, or wear behavior.",
      },
      {
        question: "What modification systems does the range cover?",
        answer:
          "The range includes fiber reinforcement, flame retardancy, wear-oriented formulations, impact modification, mineral filling, and other functional options.",
      },
      {
        question: "What information is available for grade comparison?",
        answer:
          "Published grade data, technical documents, and samples can be compared against the part requirements, tooling, and molding conditions.",
      },
    ],
  },
  {
    category: "PPA Compound",
    label: "PPA Compounds",
    description:
      "PLATFORM® PPA compounds cover glass-fiber reinforcement, glass-fiber and mineral reinforcement, and wear-resistant or low-friction modifications for precision parts exposed to higher temperatures and thermal cycling.",
    overview:
      "The range provides different balances of stiffness, dimensional control, wear, and sliding performance. Published data, technical documents, and samples are presented by grade.",
    navSubtitle:
      "PPA for higher-temperature reinforcement, dimensional control, and wear performance.",
    applications: [
      "High-temperature automotive and electrical parts",
      "Reinforced precision molded components",
      "Motion components requiring stiffness, dimensional control, or wear performance",
    ],
    applicationSlugs: ["automotive", "electronics"],
    faqs: [
      {
        question: "What parts are PLATFORM® PPA compounds designed for?",
        answer:
          "The portfolio supports automotive, electrical, precision, and motion components exposed to higher temperatures, thermal cycling, demanding dimensions, or sliding contact.",
      },
      {
        question: "What modification systems does the range cover?",
        answer:
          "The range includes glass-fiber reinforcement, glass-fiber/mineral reinforcement, and wear/low-friction formulations for different structural and motion-part priorities.",
      },
      {
        question: "What information is available for grade comparison?",
        answer:
          "Published grade data, technical documents, and samples can be compared against the operating temperature, part dimensions, tooling, and molding conditions.",
      },
    ],
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

export const getCategoryOverview = (category: string) =>
  getCategoryData(category)?.overview ??
  "Listed grades, published property data, application context, and document support are brought together in one place.";

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
  const categoryFaqs =
    category === pomCategoryOverview.category
      ? pomCategoryOverview.faqs
      : getCategoryData(category)?.faqs;

  if (categoryFaqs) {
    return categoryFaqs;
  }

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
