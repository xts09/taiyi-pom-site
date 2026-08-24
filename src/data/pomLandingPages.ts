import { catalogProducts } from "@/data/catalog";
import {
  conductiveCompounds,
  conductiveSeries,
} from "@/data/conductiveCompounds";

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
  mobileLabel?: string;
  detail: string;
  href?: string;
};

export type CatalogEvidenceGroup = {
  id: string;
  title: string;
  description: string;
  itemLabels: string[];
};

export type GradeEvidenceItem = {
  grade: string;
  modification: string;
  electricalDirection: string;
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

export type PomLandingEvidenceTarget = "about-qualification";

export type PomLandingPageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  primaryActionLabel: string;
  primaryActionHref?: string;
  finalActionLabel?: string;
  finalDescription?: string;
  supplierEvidence?: {
    target: PomLandingEvidenceTarget;
    label: string;
    actionLabel: string;
  };
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  heroProof?: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  metrics?: LandingMetric[];
  sections: LandingSection[];
  sectionsVariant?: "steps";
  sectionsNote?: string;
  catalogEvidence?: {
    kicker?: string;
    variant?: "directory";
    position?: "afterHero";
    title: string;
    note: string;
    items: CatalogEvidenceItem[];
    groups?: CatalogEvidenceGroup[];
  };
  gradeEvidence?: {
    title: string;
    items: GradeEvidenceItem[];
  };
  reviewInputs: string[];
  relatedLinks: LandingRelatedLink[];
  showReviewSection?: boolean;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  crossReferenceRows?: CrossReferenceRow[];
};

export const technicalLandingLinks: LandingRelatedLink[] = [
  {
    href: "/modified-pom-compounds",
    label: "Modified POM Directions by Part Requirement",
    description:
      "Identify which modification direction deserves review before opening the POM family and grade directories.",
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

const conductivePomDirectoryEvidence = (["cnt", "cf"] as const).flatMap(
  (technology) => {
    const entries = conductiveCompounds.filter(
      (compound) =>
        compound.matrix === "POM" && compound.technology === technology,
    );

    if (!entries.length) {
      return [];
    }

    return [
      {
        grade: entries.map((entry) => entry.grade).join(" / "),
        modification: conductiveSeries[technology].shortLabel,
        electricalDirection: entries
          .map((entry) => entry.rangeLabel)
          .join(" / "),
      },
    ];
  },
);

const conductivePomProductEvidence = catalogProducts
  .filter(
    (product) =>
      product.polymer === "POM" &&
      product.category === "Conductive / Antistatic POM Compound",
  )
  .slice(0, 3)
  .map((product) => ({
    grade: `POM ${product.grade}`,
    modification: product.category,
    electricalDirection:
      product.features.find((feature) =>
        /conductive|antistatic|resistivity/i.test(feature),
      ) ?? product.description,
  }));

const conductivePomGradeEvidence = [
  ...conductivePomDirectoryEvidence,
  ...conductivePomProductEvidence,
] satisfies GradeEvidenceItem[];

export const pomLandingPages = {
  modifiedPomCompounds: {
    slug: "modified-pom-compounds",
    title: "Choose a POM Family by Part Need",
    metaTitle: "Modified POM Directions by Part Requirement | Taiyi Polymer",
    metaDescription:
      "Understand which modified POM direction may address wear, friction, impact, stiffness, flow, UV exposure, or electrical control before comparing families and grades.",
    eyebrow: "",
    intro:
      "Choose the performance gap that controls the part, then open the relevant PLATFORM POM family to compare listed grades and published data.",
    heroImage: {
      src: "/generated/landing/modified-pom-material-landscape-v1.webp",
      alt: "Dark technical composition of polymer pellets and molded parts",
    },
    primaryActionLabel: "Choose by Part Requirement",
    primaryActionHref: "#part-requirement-map",
    finalActionLabel: "Request a POM Grade Review",
    finalDescription:
      "Once a candidate grade is identified, confirm available TDS, molding conditions and representative-part trials before repeat supply. Custom formulation review requires clear technical targets, validation conditions and expected volume.",
    supplierEvidence: {
      target: "about-qualification",
      label: "Supplier qualification",
      actionLabel: "Review Supplier Qualification Evidence",
    },
    secondaryActionLabel: "Browse POM Families & Grades",
    secondaryActionHref: "/products/categories/pom",
    sections: [],
    sectionsVariant: "steps",
    catalogEvidence: {
      variant: "directory",
      position: "afterHero",
      title: "What must the molded part improve?",
      note:
        "Start with the governing performance gap. Each path opens the relevant family page for grade, application, and document review.",
      items: [
        {
          label: "Base POM Resin",
          mobileLabel: "Base POM",
          detail:
            "Start here when standard POM behavior fits and the project needs a baseline grade comparison.",
          href: "/products/categories/base-pom-resin",
        },
        {
          label: "Ultra-High Flow POM",
          mobileLabel: "Ultra-high flow",
          detail:
            "Review for thin-wall or long-flow molded parts where mold filling is the primary screening concern.",
          href: "/products/categories/ultra-high-flow-pom",
        },
        {
          label: "Wear-Resistant & Low-Friction POM",
          mobileLabel: "Wear & low friction",
          detail:
            "For sliding, rotating, or repeated-motion parts where friction, wear, noise, or stick-slip is the main performance gap.",
          href: "/products/categories/wear-resistant-low-friction-pom-compound",
        },
        {
          label: "High-Impact POM",
          mobileLabel: "High impact",
          detail:
            "For parts that need greater impact resistance, elongation, or low-temperature toughness than standard POM.",
          href: "/products/categories/high-impact-pom-compound",
        },
        {
          label: "UV-Resistant POM",
          mobileLabel: "UV resistant",
          detail:
            "For outdoor or light-exposed parts where UV resistance must be screened and confirmed at the grade level.",
          href: "/products/categories/uv-resistant-pom-compound",
        },
        {
          label: "Glass Fiber Reinforced POM",
          mobileLabel: "Glass fiber",
          detail:
            "For molded parts where higher stiffness, load response, and dimensional control drive material selection.",
          href: "/products/categories/glass-fiber-reinforced-pom-compound",
        },
        {
          label: "Glass Bead Filled POM",
          mobileLabel: "Glass bead",
          detail:
            "Review when shrinkage behavior, dimensional stability, or surface requirements are central to the project.",
          href: "/products/categories/glass-bead-filled-pom-compound",
        },
        {
          label: "Carbon Fiber Reinforced POM",
          mobileLabel: "Carbon fiber",
          detail:
            "For parts requiring higher stiffness or electrical functionality from carbon-fiber-reinforced POM.",
          href: "/products/categories/carbon-fiber-reinforced-pom-compound",
        },
        {
          label: "Conductive / Antistatic POM",
          mobileLabel: "Conductive / antistatic",
          detail:
            "For charge-control parts where resistance range, test method and operating environment govern grade selection.",
          href: "/products/categories/conductive-antistatic-pom-compound",
        },
      ],
      groups: [
        {
          id: "processing-flow",
          title: "Processing and baseline behavior",
          description:
            "For standard POM comparison, thin walls, long flow paths, or filling limits.",
          itemLabels: ["Base POM Resin", "Ultra-High Flow POM"],
        },
        {
          id: "wear-impact-weathering",
          title: "Durability and environment",
          description:
            "For moving interfaces, toughness requirements, or light-exposed parts.",
          itemLabels: [
            "Wear-Resistant & Low-Friction POM",
            "High-Impact POM",
            "UV-Resistant POM",
          ],
        },
        {
          id: "reinforcement-dimensional-control",
          title: "Stiffness and dimensional control",
          description:
            "For load response, shrinkage behavior, stability, or reinforced-part requirements.",
          itemLabels: [
            "Glass Fiber Reinforced POM",
            "Glass Bead Filled POM",
            "Carbon Fiber Reinforced POM",
          ],
        },
        {
          id: "electrical-control",
          title: "Electrical charge control",
          description:
            "For conductive or antistatic parts defined by resistance range and finished-part testing.",
          itemLabels: ["Conductive / Antistatic POM"],
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
      { href: "/products/categories/pom", label: "POM Material Families", description: "Compare the family options, then open a category to review its listed grades." },
      technicalLandingLinks[1],
      technicalLandingLinks[2],
    ],
    showReviewSection: false,
    faqs: [
      {
        question: "What does modified POM mean?",
        answer:
          "Modified POM means a POM compound adjusted with selected additives, fillers, reinforcements, lubricants, impact modifiers, or electrical modifiers. Final suitability depends on the exact grade and application conditions.",
      },
      {
        question: "How is this page different from the POM material-family directory?",
        answer:
          "This page helps identify the relevant modification direction from the part requirement. The POM material-family directory lists the available families and grades, while the technical-data search provides grade-level data and document paths.",
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
      {
        href: "/modified-pom-compounds#wear-impact-weathering",
        label: "Broaden the Modified POM Review",
        description:
          "Compare wear, impact, weathering, reinforced, and functional POM directions from the part requirement.",
      },
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
      "Compare conductive and antistatic POM grades by resistivity target, filler system and part requirements. Review grade data, documents and sample options.",
    eyebrow: "Charge-Control POM",
    intro:
      "Select conductive or antistatic POM by the required electrical measurement, part function, color, retained mechanical properties, and finished-part test method.",
    primaryActionLabel: "Request a Conductive POM Grade Review",
    secondaryActionLabel: "View Conductive POM Grade Data",
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
    gradeEvidence: {
      title: "Available POM Charge-Control Grades",
      items: conductivePomGradeEvidence,
    },
    sections: [
      {
        title: "Define the electrical target",
        body: "Start with the required electrical behavior and how it will be measured. Antistatic, static-dissipative and conductive targets should be defined by range and test method rather than by label alone.",
        points: [
          "Required resistivity range",
          "Surface or volume resistivity",
          "Test method",
          "Required antistatic, static-dissipative or conductive behavior",
        ],
      },
      {
        title: "Define the part conditions",
        body: "Add the part and project conditions that can affect grade suitability and retained mechanical performance.",
        points: [
          "Component function and operating environment",
          "Mechanical and dimensional requirements",
          "Color requirements",
          "TDS, document and sample needs",
        ],
      },
    ],
    sectionsNote:
      "Final electrical performance should be confirmed on the molded part under the agreed test method and operating environment.",
    reviewInputs: [],
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
