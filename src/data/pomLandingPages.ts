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
      "Review charge-control POM directions for electrical, ESD-sensitive, and functional molded parts.",
  },
  {
    href: "/pom-grade-cross-reference",
    label: "POM Grade Cross-Reference",
    description:
      "Use a preliminary cross-reference path to discuss current grades and application needs with Taiyi Polymer.",
  },
  {
    href: "/conductive-antistatic-compounds",
    label: "Cross-Material Conductive and Antistatic Compounds",
    description:
      "Compare carbon-nanotube antistatic and carbon-fiber conductive directions across multiple polymer matrices.",
  },
];

export const publicTechnicalLandingLinks = technicalLandingLinks.filter(
  (link) => link.href !== "/pom-grade-cross-reference",
);

export const pomLandingPages = {
  modifiedPomCompounds: {
    slug: "modified-pom-compounds",
    title: "Modified POM Technical Overview",
    metaTitle: "Modified POM Technical Overview | Taiyi Polymer",
    metaDescription:
      "Compare Taiyi Polymer modified POM options for wear-resistant, low-friction, reinforced, conductive, antistatic, impact, UV, low-odor, and high-flow molded parts.",
    eyebrow: "Technical Screening Page",
    intro:
      "Use this page as a technical screening overview before entering the POM product category. It summarizes catalog-confirmed Taiyi Polymer POM options and the information needed to shortlist a grade for TDS, sample, or molding-trial discussion.",
    primaryActionLabel: "Request a POM Grade Recommendation",
    metrics: [
      { label: "Material family", value: "POM" },
      { label: "Review focus", value: "Molded parts" },
      { label: "Documents", value: "TDS / SDS / COA" },
      { label: "Supply role", value: "Factory compounder" },
    ],
    sections: [
      {
        title: "How This Page Differs From The Product Category",
        body: "The POM category groups material families and directions. This overview explains how to choose a direction before the buyer knows which grade or TDS to open.",
        points: [
          "Use the overview for early material screening and inquiry qualification",
          "Use the POM category page when the buyer wants listed grades and documents",
          "Use dedicated landing pages for wear, friction, conductive, or antistatic intent",
          "Use TDS pages after candidate grades are shortlisted",
        ],
      },
      {
        title: "Buyer Review Path",
        body: "A useful material discussion starts with the part and mold conditions before grade names are shortlisted.",
        points: [
          "Application, current material, and target improvement",
          "Mold stage, cavity count, gate and flow path, shrinkage concern",
          "Load, speed, friction, wear, temperature, and assembly condition",
          "Required documents, color, annual volume, and destination market",
        ],
      },
    ],
    catalogEvidence: {
      title: "Catalog-Confirmed POM Directions",
      note:
        "Based on Taiyi Polymer's 2026 modified POM product catalogue. These are screening options, not complete TDS claims.",
      items: [
        {
          label: "Base and high-flow POM",
          detail:
            "ETM090NC, ETM130, ETM270, ETM450, ETM750, ETM1500, and ETM1800 are listed with MFI-based flow directions.",
        },
        {
          label: "Wear-resistant / low-friction POM",
          detail:
            "EDM-111, EGH20-TF, EMS162, ENM1040, EP-AF100A, EPAF100A, EPAF96A, EPTL402, ES0162, and ETM270H are listed as wear, PTFE, MoS2, aramid, silicone-oil, or lubricant directions.",
        },
        {
          label: "Reinforced POM",
          detail:
            "EGH402H, EGH502H, EGH602H, ECF200, ECF300, and ECF400 are listed as glass-fiber or carbon-fiber reinforced directions.",
        },
        {
          label: "Conductive / antistatic POM",
          detail:
            "E-CF3, E-CN3, GP3, GP8, and ECN1003B are listed for conductive or charge-control POM review.",
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
      "Review Taiyi Polymer wear-resistant and low-friction POM options for gears, bushings, rollers, sliding parts, and motion components.",
    eyebrow: "Motion Components",
    intro:
      "Wear-resistant and low-friction POM directions are reviewed for molded parts with repeated movement, sliding contact, abrasion, noise, stick-slip, or counterpart wear concerns.",
    primaryActionLabel: "Discuss a Wear or Friction Requirement",
    metrics: [
      { label: "Typical parts", value: "Gears / bushings" },
      { label: "Review focus", value: "Wear / friction" },
      { label: "Validation", value: "Application trial" },
      { label: "Documents", value: "TDS on request" },
    ],
    sections: [
      {
        title: "Wear and Friction Are Different Targets",
        body: "A low friction value does not automatically confirm long wear life, and a wear-resistant direction may still need friction and noise review.",
        points: [
          "Define load, speed, cycle, temperature, and mating material",
          "Review lubrication, surface finish, alignment, and contamination",
          "Compare wear loss, friction behavior, noise, and dimensional change",
          "Confirm results with representative molded-part testing",
        ],
      },
      {
        title: "Where This Page Fits",
        body: "Use this page when the customer searches for POM gear material, bushing material, sliding component material, or low-friction acetal compound.",
        points: [
          "Gears, worm gears, cams, rollers, sleeves, and sliders",
          "Guide rails, conveyor parts, textile machinery parts, and motion supports",
          "Applications needing reduced stick-slip, smoother movement, or longer surface life",
          "Projects comparing modified POM directions before requesting samples",
        ],
      },
    ],
    catalogEvidence: {
      title: "Catalog-Confirmed Wear And Friction Directions",
      note:
        "The catalogue supports using this page for early SEM and SEO traffic. Exact friction coefficient, wear loss, and molded-part approval still need grade-specific TDS or trial data.",
      items: [
        {
          label: "POM EDM-111",
          detail:
            "MFI 7 g/10 min; natural color; high wear-resistant direction.",
        },
        {
          label: "POM EGH20-TF",
          detail:
            "PTFE + 20% glass fiber direction; listed for high wear resistance.",
        },
        {
          label: "POM EMS162",
          detail:
            "MFI 7 g/10 min; black color; MoS2-filled high wear-resistant direction.",
        },
        {
          label: "POM ENM1040",
          detail:
            "MFI 7 g/10 min; natural color; special wear-resistant additive direction.",
        },
        {
          label: "POM EP-AF100A / EPAF100A / EPAF96A",
          detail:
            "Aramid fiber or aramid powder filled directions for wear-resistant review.",
        },
        {
          label: "POM EPTL402 / ES0162 / ETM270H",
          detail:
            "PTFE-filled, silicone-oil-modified, and high-flow wear-resistant directions.",
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
        description: "Browse listed POM grades for wear and friction review.",
      },
      { href: "/applications/motion-components", label: "Motion Components", description: "Review gears, bushings, sliders, and moving parts." },
      technicalLandingLinks[0],
    ],
    faqs: [
      {
        question: "Is wear-resistant POM the same as low-friction POM?",
        answer:
          "No. Wear resistance focuses on material loss and surface life, while low friction focuses on sliding resistance, startup force, stick-slip, or noise. Some formulations may support both, but they should be validated under the actual contact system.",
      },
      {
        question: "What information is needed for a wear or friction review?",
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
      "Review Taiyi Polymer conductive and antistatic POM options for charge-control molded parts, electrical components, and functional precision applications.",
    eyebrow: "Charge-Control POM",
    intro:
      "Conductive and antistatic POM directions should be selected by electrical target, part function, color requirement, mechanical retention, and validation method rather than by a general material family name.",
    primaryActionLabel: "Review an Electrical Requirement",
    heroImage: {
      src: "/generated/landing/conductive-antistatic-pom-functional-components.png",
      alt: "Illustrative black precision-molded functional component forms",
    },
    metrics: [
      { label: "Target", value: "Charge control" },
      { label: "Typical color", value: "Black" },
      { label: "Review data", value: "Resistivity" },
      { label: "Fit", value: "Functional parts" },
    ],
    sections: [
      {
        title: "Electrical Target First",
        body: "Antistatic, static-dissipative, and conductive requirements are different. The target range and test method should be confirmed before a grade is recommended.",
        points: [
          "Define surface or volume resistivity target and test method",
          "Confirm whether antistatic, dissipative, or conductive behavior is required",
          "Review color, filler influence, mechanical properties, and molding risk",
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
          "Projects needing TDS, sample discussion, and electrical property review",
        ],
      },
    ],
    catalogEvidence: {
      title: "Catalog-Confirmed Conductive And Antistatic Directions",
      note:
        "The catalogue confirms charge-control POM directions. Electrical targets should still be validated by the required surface or volume test method on molded parts.",
      items: [
        {
          label: "POM E-CF3 / E-CN3",
          detail:
            "Carbon-nanotube conductive POM directions described as lightweight, permanent, and non-blooming.",
        },
        {
          label: "POM GP3 / GP8",
          detail:
            "Carbon-fiber conductive POM directions listed with 10^6-10^8 range and thermal-conductive note.",
        },
        {
          label: "POM EGH25CN / ECN1003B",
          detail:
            "Black conductive and antistatic POM grade directions with controlled resistivity data for electrical and industrial molded parts.",
        },
        {
          label: "Cross-material antistatic series",
          detail:
            "The catalogue also lists carbon-nanotube antistatic directions across ABS, ASA, PA6, PA66, PBT, PC, PC/ABS, PPA, PPO, and other polymers in R35 or R610 target bands.",
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
      technicalLandingLinks[4],
      { href: "/products/categories/conductive-antistatic-pom-compound", label: "Conductive / Antistatic POM Grades", description: "Review the listed charge-control POM grade path." },
      { href: "/applications/electronics", label: "Electronics Applications", description: "Review electrical and electronic molded component needs." },
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
          "Yes. Fillers or modifiers used for charge-control behavior may affect color, flow, impact, stiffness, wear, and surface quality. The complete property balance should be reviewed before approval.",
      },
    ],
  },
  pomGradeCrossReference: {
    slug: "pom-grade-cross-reference",
    title: "POM Grade Cross-Reference",
    metaTitle: "POM Grade Cross-Reference for Material Review | Taiyi Polymer",
    metaDescription:
      "Use Taiyi Polymer's POM grade cross-reference page for preliminary material screening, current grade review, document requests, and sample discussion.",
    eyebrow: "Preliminary Material Screening",
    intro:
      "This cross-reference page is for early material discussion only. The current public catalogue lists Taiyi Polymer material families, but it does not publish direct equivalence against third-party grade names. Similar grade names or data points do not confirm final replacement.",
    primaryActionLabel: "Send a Current Grade for Review",
    metrics: [
      { label: "Use case", value: "Grade review" },
      { label: "Basis", value: "TDS + application" },
      { label: "Output", value: "Direction shortlist" },
      { label: "Validation", value: "Customer trial" },
    ],
    sections: [
      {
        title: "How To Use This Page",
        body: "Start with the current material grade and the reason for review, then compare the required performance with Taiyi Polymer material options.",
        points: [
          "Share the current grade, TDS, color, and application",
          "Define the target improvement or supply problem",
          "Compare property direction, not only one value",
          "Confirm final selection through sample and molded-part testing",
        ],
      },
      {
        title: "What Cross-Reference Does Not Mean",
        body: "A cross-reference is not a legal, commercial, or engineering guarantee that two materials are identical.",
        points: [
          "It does not replace customer approval or qualification",
          "It does not confirm regulatory status for a specific grade or color",
          "It does not predict every molding, warpage, or assembly result",
          "It should be used as a starting point for technical review",
        ],
      },
    ],
    catalogEvidence: {
      title: "What We Can Confirm From The Public Catalogue",
      note:
        "Use this page to collect the buyer's current grade and application. Specific brand-to-grade cross-reference should be added only after internal technical review.",
      items: [
        {
          label: "POM flow directions",
          detail:
            "ETM series grades are listed from standard to ultra-high-flow directions with MFI values.",
        },
        {
          label: "Wear and friction directions",
          detail:
            "PTFE, MoS2, aramid, silicone-oil, glass-fiber, and special wear-additive directions are listed.",
        },
        {
          label: "Conductive directions",
          detail:
            "Carbon-nanotube, carbon-fiber, and conductive black POM directions are listed.",
        },
        {
          label: "Application directions",
          detail:
            "Automotive, valve, electrical, industrial, and electronics applications are listed as screening areas.",
        },
      ],
    },
    reviewInputs: [
      "Current grade and supplier",
      "Current TDS or property requirements",
      "Application and molded-part function",
      "Reason for replacement or second-source review",
      "Required documents and annual volume",
    ],
    crossReferenceRows: [
      {
        reference: "Current standard POM grade",
        materialType: "POM",
        reviewDirection: "Compare flow, strength, shrinkage, color, and document requirements",
        taiyiPath: "/products/categories/pom",
      },
      {
        reference: "Current wear or low-friction POM grade",
        materialType: "Modified POM",
        reviewDirection: "Review motion mode, mating material, wear, friction, and noise targets",
        taiyiPath: "/wear-resistant-low-friction-pom",
      },
      {
        reference: "Current conductive or antistatic POM grade",
        materialType: "Charge-control POM",
        reviewDirection: "Review resistivity range, test method, color, and molded-part function",
        taiyiPath: "/conductive-antistatic-pom",
      },
      {
        reference: "Current reinforced POM grade",
        materialType: "Filled or reinforced POM",
        reviewDirection: "Review stiffness, shrinkage direction, warpage, weld lines, and surface needs",
        taiyiPath: "/products/categories/pom",
      },
    ],
    relatedLinks: [
      technicalLandingLinks[0],
      technicalLandingLinks[1],
      { href: "/technical-data-sheets", label: "Data / TDS Search", description: "Search listed grade data, TDS paths, and resources." },
    ],
    faqs: [
      {
        question: "Does cross-reference mean equivalent replacement?",
        answer:
          "No. Cross-reference information is a preliminary screening aid. Final suitability depends on part design, processing, test method, working conditions, and customer validation.",
      },
      {
        question: "What should be sent for a grade review?",
        answer:
          "Send the current grade, TDS, application, target properties, color, document requirements, annual volume, and the reason for replacement or second-source review.",
      },
    ],
  },
} satisfies Record<string, PomLandingPageData>;
