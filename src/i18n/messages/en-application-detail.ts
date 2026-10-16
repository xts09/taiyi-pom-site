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
    evaluation: "Grade data",
  },
  hero: {
    eyebrow: "Application & part selection",
    primaryAction: "Discuss your application",
    secondaryAction: "Find grade data & TDS",
  },
  scene: {
    eyebrow: "Part & conditions",
    title: "Part function and operating conditions",
    visualDescription:
      "Mechanism, motion, assembly fit and dimensional requirements determine the relevant grade range.",
    basicDescription:
      "Compare modified POM options against the part function, operating conditions, dimensional requirements and document needs.",
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
      "Explore the geometry, load, motion and operating environment of typical components.",
    cardLabel: "Typical part",
    componentEyebrow: "Component guides",
    componentTitle: "Related component selection guides",
  },
  materials: {
    eyebrow: "Candidate materials",
    title: "Related materials",
    description:
      "Compare the properties and typical uses of relevant POM materials.",
    keyUseLabel: "Selection focus",
    imageAltSuffix: " material pellets",
  },
  evaluation: {
    eyebrow: "Grade data",
    title: "Request relevant grade data",
    description:
      "Share the part function, operating conditions and material requirements to request relevant grade data and discuss sample needs.",
    action: "Discuss your application",
  },
} satisfies ApplicationDetailUiMessages;

export const englishApplicationComponentMessages = {
  eyebrow: "Browse by component",
  title: "Component solution paths",
  description:
    "Explore geometry, operating conditions and relevant materials for gears, bushings, valve spools and other molded components.",
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
