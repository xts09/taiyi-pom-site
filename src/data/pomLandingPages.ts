export type LandingMetric = {
  label: string;
  value: string;
};

export type LandingSection = {
  title: string;
  body: string;
  points: string[];
};

export type CatalogEvidenceItem = {
  label: string;
  detail: string;
};

export type LandingRelatedLink = {
  href: string;
  label: string;
  description: string;
};

export type CrossReferenceRow = {
  reference: string;
  materialType: string;
  reviewDirection: string;
  taiyiPath: string;
};

export type PomLandingPageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  primaryActionLabel: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  metrics: LandingMetric[];
  sections: LandingSection[];
  catalogEvidence?: {
    title: string;
    note: string;
    items: CatalogEvidenceItem[];
  };
  reviewInputs: string[];
  relatedLinks: LandingRelatedLink[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  crossReferenceRows?: CrossReferenceRow[];
};

export const technicalLandingLinks: LandingRelatedLink[] = [
  {
    href: "/modified-pom-compounds",
    label: "Modified POM Technical Overview",
    description:
      "Use a technical overview to compare Taiyi Polymer POM options before reviewing listed grades and TDS documents.",
  },
  {
    href: "/wear-resistant-low-friction-pom",
    label: "Wear-Resistant and Low-Friction POM",
    description:
      "Compare POM options for sliding parts, gears, bushings, rollers, and motion components.",
  },
  {
    href: "/conductive-antistatic-pom",
    label: "Conductive and Antistatic POM",
    description:
      "Compare charge-control POM options for electrical, ESD-sensitive, and functional molded parts.",
  },
  {
    href: "/products/conductive-antistatic-compounds",
    label: "Cross-Material Conductive and Antistatic Compounds",
    description:
      "Compare carbon-nanotube antistatic and carbon-fiber conductive options across multiple polymer matrices.",
  },
];

export const publicTechnicalLandingLinks = technicalLandingLinks;

export const pomLandingPages = {
  modifiedPomCompounds: {
    slug: "modified-pom-compounds",
    title: "Modified POM Technical Overview",
    metaTitle: "Modified POM Technical Overview | Taiyi Polymer",
    metaDescription:
      "Compare Taiyi Polymer modified POM options for wear-resistant, low-friction, reinforced, conductive, antistatic, impact, UV, low-odor, and high-flow molded parts.",
    eyebrow: "Technical Screening Page",
    intro:
      "Compare catalog-listed modified POM options by the job the molded part must perform, then narrow the list for TDS review, samples, and molding trials.",
    primaryActionLabel: "Request a POM Grade Recommendation",
    metrics: [
      { label: "Material family", value: "POM" },
      { label: "Selection basis", value: "Molded part" },
      { label: "Documents", value: "TDS / SDS / COA" },
      { label: "Supply role", value: "Factory compounder" },
    ],
    sections: [
      {
        title: "Choose by the Part Requirement",
        body: "Start with the performance gap in the molded part, then compare the modification family most likely to address it.",
        points: [
          "Flow and mold filling for thin or complex parts",
          "Wear, friction, noise, or stick-slip in moving assemblies",
          "Stiffness and dimensional control with reinforcement",
          "Electrical charge control for functional components",
        ],
      },
      {
        title: "Inputs for a Grade Shortlist",
        body: "Part duty and mold conditions determine which catalog-listed grades deserve closer comparison.",
        points: [
          "Application, current material, and target improvement",
          "Mold stage, cavity count, gate and flow path, shrinkage concern",
          "Load, speed, friction, wear, temperature, and assembly condition",
          "Required documents, color, annual volume, and destination market",
        ],
      },
    ],
    catalogEvidence: {
      title: "POM Options Listed in the Catalogue",
      note:
        "Based on Taiyi Polymer's 2026 modified POM product catalogue. These are screening options, not complete TDS claims.",
      items: [
        {
          label: "Base and high-flow POM",
          detail:
            "ETM090NC, ETM130, ETM270, ETM450, ETM750, ETM1500, and ETM1800 cover listed MFI-based flow ranges.",
        },
        {
          label: "Wear-resistant / low-friction POM",
          detail:
            "EDM-111, EGH20-TF, EMS162, ENM1040, EP-AF100A, EPAF100A, EPAF96A, EPTL402, ES0162, and ETM270H use listed wear, PTFE, MoS2, aramid, silicone-oil, or lubricant modifications.",
        },
        {
          label: "Reinforced POM",
          detail:
            "EGH402H, EGH502H, EGH602H, ECF200, ECF300, and ECF400 are listed with glass-fiber or carbon-fiber reinforcement.",
        },
        {
          label: "Conductive / antistatic POM",
          detail:
            "E-CF3, E-CN3, GP3, GP8, and ECN1003B are listed for conductive or antistatic POM applications.",
        },
      ],
    },
    reviewInputs: [
      "Current material or reference grade",
      "Application and molded part type",
      "Target properties and failure mode",
      "Mold stage and cavity count",
      "Document and compliance needs",
    ],
    relatedLinks: [
      technicalLandingLinks[1],
      technicalLandingLinks[2],
      { href: "/products/categories/pom", label: "POM Material Families", description: "Browse POM material families before opening specific grade data." },
    ],
    faqs: [
      {
        question: "What does modified POM mean?",
        answer:
          "Modified POM means a POM compound adjusted with selected additives, fillers, reinforcements, lubricants, impact modifiers, or electrical modifiers. Final suitability depends on the exact grade and application conditions.",
      },
      {
        question: "Can Taiyi Polymer shortlist a grade from an application requirement?",
        answer:
          "Yes. Share the part, current material, target performance, mold information, documents, and estimated volume so relevant grades can be shortlisted.",
      },
    ],
  },
  wearLowFrictionPom: {
    slug: "wear-resistant-low-friction-pom",
    title: "Wear-Resistant and Low-Friction POM",
    metaTitle: "Wear-Resistant Low-Friction POM Compound | Taiyi Polymer",
    metaDescription:
      "Compare Taiyi Polymer wear-resistant and low-friction POM options for gears, bushings, rollers, sliding parts, and motion components.",
    eyebrow: "Motion Components",
    intro:
      "Compare wear-resistant and low-friction POM for molded parts affected by material loss, sliding resistance, noise, stick-slip, or counterpart wear.",
    primaryActionLabel: "Discuss a Wear or Friction Requirement",
    metrics: [
      { label: "Typical parts", value: "Gears / bushings" },
      { label: "Selection basis", value: "Wear / friction" },
      { label: "Validation", value: "Application trial" },
      { label: "Documents", value: "TDS on request" },
    ],
    sections: [
      {
        title: "Wear and Friction Are Different Targets",
        body: "Low friction does not guarantee long wear life, and a wear-resistant grade may still create excessive friction or noise.",
        points: [
          "Define load, speed, cycle, temperature, and mating material",
          "Check lubrication, surface finish, alignment, and contamination",
          "Compare wear loss, friction behavior, noise, and dimensional change",
          "Confirm results with representative molded-part testing",
        ],
      },
      {
        title: "Typical Moving Components",
        body: "Use these screening factors for gears, bushings, rollers, sliders, guides, and other repeatedly moving molded parts.",
        points: [
          "Gears, worm gears, cams, rollers, sleeves, and sliders",
          "Guide rails, conveyor parts, textile machinery parts, and motion supports",
          "Applications needing reduced stick-slip, smoother movement, or longer surface life",
          "Projects comparing modified POM before requesting samples",
        ],
      },
    ],
    catalogEvidence: {
      title: "Wear and Friction Grades in the Catalogue",
      note:
        "The catalogue identifies the modification and selected listed properties. Exact friction, wear loss, and molded-part suitability still require grade-specific data and representative trials.",
      items: [
        {
          label: "POM EDM-111",
          detail:
            "MFI 7 g/10 min; natural color; listed for high wear resistance.",
        },
        {
          label: "POM EGH20-TF",
          detail:
            "PTFE + 20% glass fiber; listed for high wear resistance.",
        },
        {
          label: "POM EMS162",
          detail:
            "MFI 7 g/10 min; black color; MoS2-filled and listed for high wear resistance.",
        },
        {
          label: "POM ENM1040",
          detail:
            "MFI 7 g/10 min; natural color; listed with a special wear-resistant additive.",
        },
        {
          label: "POM EP-AF100A / EPAF100A / EPAF96A",
          detail:
            "Aramid fiber or aramid powder filled options for wear-resistant parts.",
        },
        {
          label: "POM EPTL402 / ES0162 / ETM270H",
          detail:
            "PTFE-filled, silicone-oil-modified, and high-flow wear-resistant options.",
        },
      ],
    },
    reviewInputs: [
      "Movement type and mating material",
      "Load, speed, cycle, and temperature",
      "Current wear, noise, or friction problem",
      "Lubrication and surface finish",
      "Target lifetime and test method",
    ],
    relatedLinks: [
      {
        href: "/resources/wear-resistant-low-friction-pom-selection-guide",
        label: "Wear / Low-Friction POM Selection Guide",
        description:
          "Read the full technical guide for moving parts, mating surfaces, lubrication, noise, and wear validation.",
      },
      {
        href: "/products/categories/wear-resistant-low-friction-pom-compound",
        label: "Wear-Resistant & Low-Friction POM Grades",
        description: "Browse listed POM grades for wear and friction comparison.",
      },
      { href: "/applications/motion-components", label: "Motion Components", description: "Compare gears, bushings, sliders, and moving parts." },
      technicalLandingLinks[0],
    ],
    faqs: [
      {
        question: "Is wear-resistant POM the same as low-friction POM?",
        answer:
          "No. Wear resistance focuses on material loss and surface life, while low friction focuses on sliding resistance, startup force, stick-slip, or noise. Some formulations may support both, but they should be validated under the actual contact system.",
      },
      {
        question: "What information is needed for wear or friction comparison?",
        answer:
          "Share the part, movement mode, mating material, load, speed, temperature, lubrication, failure mode, current material, and target test or service-life requirement.",
      },
    ],
  },
  conductiveAntistaticPom: {
    slug: "conductive-antistatic-pom",
    title: "Conductive and Antistatic POM",
    metaTitle: "Conductive and Antistatic POM Compound | Taiyi Polymer",
    metaDescription:
      "Compare Taiyi Polymer conductive and antistatic POM options for charge-control molded parts, electrical components, and functional precision applications.",
    eyebrow: "Charge-Control POM",
    intro:
      "Select conductive or antistatic POM by the required electrical measurement, part function, color, retained mechanical properties, and finished-part test method.",
    primaryActionLabel: "Compare an Electrical Requirement",
    heroImage: {
      src: "/generated/landing/conductive-antistatic-pom-functional-components.png",
      alt: "Illustrative black precision-molded functional component forms",
    },
    metrics: [
      { label: "Target", value: "Charge control" },
      { label: "Typical color", value: "Black" },
      { label: "Selection data", value: "Resistivity" },
      { label: "Fit", value: "Functional parts" },
    ],
    sections: [
      {
        title: "Electrical Target First",
        body: "Antistatic, static-dissipative, and conductive requirements are different. The target range and test method should be confirmed before a grade is recommended.",
        points: [
          "Define surface or volume resistivity target and test method",
          "Confirm whether antistatic, dissipative, or conductive behavior is required",
          "Check color, filler influence, mechanical properties, and molding risk",
          "Validate the molded part under the customer's real environment",
        ],
      },
      {
        title: "Useful Application Inputs",
        body: "Electrical requirements can change with humidity, surface condition, geometry, and testing setup. A practical inquiry should include the part function and required measurement basis.",
        points: [
          "Electrical or ESD-sensitive molded components",
          "Precision mechanical parts requiring charge-control behavior",
          "Assemblies where static buildup, dust attraction, or discharge risk matters",
          "Projects needing TDS, samples, and finished-part electrical testing",
        ],
      },
    ],
    catalogEvidence: {
      title: "Charge-Control Grades in the Catalogue",
      note:
        "The catalogue lists charge-control POM grades. Confirm the electrical target with the required surface or volume method on the molded part.",
      items: [
        {
          label: "POM E-CF3 / E-CN3",
          detail:
            "Carbon-nanotube conductive POM described as lightweight, permanent, and non-blooming.",
        },
        {
          label: "POM GP3 / GP8",
          detail:
            "Carbon-fiber conductive POM listed with a 10^6-10^8 range and a thermal-conductive note.",
        },
        {
          label: "POM EGH25CN / ECN1003B",
          detail:
            "Black conductive and antistatic POM grades with controlled resistivity data for electrical and industrial molded parts.",
        },
        {
          label: "Cross-material antistatic series",
          detail:
            "The catalogue also lists carbon-nanotube antistatic grades across ABS, ASA, PA6, PA66, PBT, PC, PC/ABS, PPA, PPO, and other polymers in R35 or R610 target bands.",
        },
      ],
    },
    reviewInputs: [
      "Required resistivity range",
      "Surface or volume measurement method",
      "Part function and operating environment",
      "Mechanical and dimensional requirements",
      "Color and document needs",
    ],
    relatedLinks: [
      technicalLandingLinks[3],
      { href: "/products/categories/conductive-antistatic-pom-compound", label: "Conductive / Antistatic POM Grades", description: "Browse listed charge-control POM grades." },
      { href: "/applications/electronics", label: "Electronics Applications", description: "See electrical and electronic molded-component requirements." },
    ],
    faqs: [
      {
        question: "Are conductive POM and antistatic POM the same?",
        answer:
          "No. Conductive, static-dissipative, and antistatic descriptions usually refer to different electrical ranges and performance goals. The exact target and test method should be confirmed for each project.",
      },
      {
        question: "Can electrical performance affect mechanical properties?",
        answer:
          "Yes. Fillers or modifiers used for charge-control behavior may affect color, flow, impact, stiffness, wear, and surface quality. Compare the complete property balance before approval.",
      },
    ],
  },
} satisfies Record<string, PomLandingPageData>;
