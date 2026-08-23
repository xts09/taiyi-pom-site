import type {
  ApplicationDetailUiMessages,
  ApplicationIndexMessages,
} from "@/i18n/applicationTypes";

export const englishApplicationDetailMessages = {
  metadata: {
    titleSuffix: "Engineering Plastic Selection | Taiyi Polymer",
    descriptionSuffix:
      "Compare candidate material directions, typical parts and application-selection inputs.",
  },
  breadcrumb: {
    home: "Home",
    applications: "Applications",
  },
  contactSource: "Application detail",
  navigation: {
    ariaLabel: "Application page sections",
    tabsAriaLabel: "Page sections",
    mobileMenuLabel: "On this page",
    scene: "Part & conditions",
    parts: "Typical parts",
    materials: "Candidate materials",
    evaluation: "Next step",
  },
  hero: {
    eyebrow: "Application & part selection",
    primaryAction: "Discuss your application",
    secondaryAction: "Find grade data & TDS",
  },
  scene: {
    eyebrow: "Part & conditions",
    title: "Start with the part and actual operating conditions",
    visualDescription:
      "Define the mechanism, motion, assembly fit and dimensional target before narrowing the grade range.",
    basicDescription:
      "Define the part function, operating conditions, dimensional target and document needs before comparing modified POM directions.",
    imageAltSuffix: " application scene for material selection",
    keywordsAria: "Material-selection inputs",
    galleryAria: "Typical parts",
    reviewPointFallback: "Selection input",
    reviewTitles: [
      "Part duty",
      "Load & motion",
      "Dimensions & assembly",
      "Environment & documents",
    ],
  },
  parts: {
    eyebrow: "Typical parts",
    titleSuffix: " representative components",
    description:
      "Start with part geometry, load, motion and operating environment. Final material choice still depends on grade-specific data and project validation.",
    cardLabel: "Typical part",
    showMorePrefix: "Show",
    showMoreSuffix: "more parts",
    componentEyebrow: "Component guides",
    componentTitle: "Continue with a component-specific selection guide",
  },
  materials: {
    eyebrow: "Candidate materials",
    title: "Material directions worth comparing for these parts",
    description:
      "Use the part function and conditions above to compare POM directions that commonly enter an initial candidate range.",
    keyUseLabel: "Selection focus",
    imageAltSuffix: " material pellets",
    showMorePrefix: "Show",
    showMoreSuffix: "more material directions",
  },
  evaluation: {
    eyebrow: "Next step",
    title: "Start with the requirements you already know",
    description:
      "Share the part, operating conditions and target. We can organize a candidate material range, open questions and the next grade-data, sample or molding-trial step.",
    action: "Discuss your application",
  },
} satisfies ApplicationDetailUiMessages;

export const englishApplicationComponentMessages = {
  eyebrow: "Browse by component",
  title: "Component solution paths",
  description:
    "Choose the molded-part family closest to your design to compare operating inputs, failure modes and validation needs.",
  allAction: "View all component solutions",
  relatedTitle: "Related component solutions",
  relevantPartsLabel: "Relevant parts",
  viewAction: "View component solution",
  englishDestinationLabel: "English content",
  labels: {
    "precision-plastic-gears": "Precision plastic gears",
    "bushings-and-sleeves": "Bushings & sleeves",
    "conveyor-chain-components": "Conveyor chain components",
    "valve-spools-and-cartridges": "Valve spools & cartridges",
    "textile-guide-components": "Textile guide components",
    "ic-handling-trays": "IC handling trays",
  },
} satisfies ApplicationIndexMessages["componentSolutions"];
