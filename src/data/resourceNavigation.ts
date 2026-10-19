export type ResourceNavigationLink = {
  label: string;
  href: string;
  description: string;
  type: "Guide" | "Technical note" | "FAQ" | "Data tool" | "Directory";
};

export type ResourceNavigationGroup = {
  id: string;
  title: string;
  metadataTitle?: string;
  navigationLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  links: ResourceNavigationLink[];
};

export const resourceNavigationGroups: ResourceNavigationGroup[] = [
  {
    id: "material-selection",
    title: "Material Selection Resources",
    metadataTitle: "Material Selection Resources",
    navigationLabel: "Choose a Material",
    description:
      "Guides on material and grade selection for different part functions, failure risks and operating conditions, including the evidence needed for evaluation.",
    image: "/og-resources-material-selection.jpg",
    imageAlt:
      "Material Selection technical resources from Taiyi Polymer",
    links: [
      {
        label: "POM Material Selection for Molded Parts",
        href: "/resources/material-selection-guide",
        type: "Guide",
        description:
          "Start with wear, cracking or deformation to shortlist lubricated, toughened or reinforced POM grades.",
      },
      {
        label: "Wear / Low-Friction POM Guide",
        href: "/resources/wear-resistant-low-friction-pom-selection-guide",
        type: "Guide",
        description:
          "Separate starting resistance from long-term wear and select PTFE, MoS₂, silicone-oil or aramid-modified POM for the contact pair.",
      },
      {
        label: "POM Gear Material Selection",
        href: "/resources/pom-gear-material-selection",
        type: "Guide",
        description:
          "How do tooth wear, root fatigue and creep affect POM selection? Use listed grades and the gear case to define what to validate.",
      },
      {
        label: "PA6 vs PA66 Selection Guide",
        href: "/resources/pa6-vs-pa66-reinforced-parts",
        type: "Guide",
        description:
          "Compare EAG130 and EAG230 GF30 to separate matrix, moisture-state and temperature effects on stiffness and dimensions.",
      },
      {
        label: "Reinforced PA6 / PA66 Guide",
        href: "/resources/glass-fiber-reinforced-pa6-pa66-selection-guide",
        type: "Guide",
        description:
          "Compare PA6 and PA66 at equal glass content, then adjust stiffness along the catalog ladder while controlling orientation-driven warpage and assembly toughness.",
      },
      {
        label: "PPA vs PA66 Selection Guide",
        href: "/resources/ppa-vs-pa66-material-selection",
        type: "Guide",
        description:
          "When PA66 misses hot-stiffness or moisture-related dimensional targets, use EAG230/EAG630H GF30 data to focus PPA comparison and molding trials.",
      },
      {
        label: "Conductive PA6 / PA66 / PPA Guide",
        href: "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide",
        type: "Guide",
        description:
          "Start with resistance targets and grounding to choose CNT or carbon-fiber formulations and define electrical checks on molded parts.",
      },
      {
        label: "Application Notes",
        href: "/resources/application-notes",
        type: "Technical note",
        description:
          "Turn failure modes into selection criteria: fatigue and wear for gears, starting force and sealing for spools, stiffness and creep for supports.",
      },
      {
        label: "Reinforcement Materials Overview",
        href: "/resources/reinforcement-materials-overview",
        type: "Guide",
        description:
          "Choose glass fiber for a stiffness gap or assess carbon fiber for conductivity, while accounting for orientation, warpage and mating-part wear.",
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
      "Processing and Troubleshooting technical resources from Taiyi Polymer",
    links: [
      {
        label: "Processing Guide",
        href: "/resources/processing-guide",
        type: "Technical note",
        description:
          "Stabilize material handling, filling and packing, then diagnose shrinkage, warpage and dimensional drift in a controlled sequence.",
      },
      {
        label: "POM Warpage Troubleshooting",
        href: "/resources/pom-warpage-troubleshooting",
        type: "Technical note",
        description:
          "Map warpage to cavity, flow direction and measurement time to locate cooling, packing or orientation differences.",
      },
      {
        label: "PA6 / PA66 Moisture Guide",
        href: "/resources/pa6-pa66-moisture-drying-conditioning-guide",
        type: "Technical note",
        description:
          "Separate pre-molding drying from post-molding conditioning and define repeatable moisture states for dimensional and assembly checks.",
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
    imageAlt: "Data and Validation technical resources from Taiyi Polymer",
    links: [
      {
        label: "Alternative POM Grade Validation",
        href: "/resources/alternative-pom-grade-validation",
        type: "Guide",
        description:
          "When changing POM supply, establish dimensional, molding and functional baselines and build a trial and production-release checklist.",
      },
      {
        label: "POM Wear-Test Records",
        href: "/resources/pom-wear-benchmark",
        type: "Technical note",
        description:
          "In-house wear-test records grouped by condition, with measured values, process curves and specimen photos where available.",
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
          "Clarify POM versus PA and low friction versus wear resistance, then find next steps for TDS, shrinkage and warpage questions.",
      },
    ],
  },
];

export const getResourceNavigationGroupPath = (
  group: ResourceNavigationGroup,
) => `/resources/${group.id}`;

export const getResourceNavigationGroupMetadataTitle = (
  group: Pick<ResourceNavigationGroup, "title" | "metadataTitle">,
) => group.metadataTitle ?? `${group.title} Resources`;

export const getResourceNavigationGroup = (id: string) =>
  resourceNavigationGroups.find((group) => group.id === id);

export const getResourceNavigationGroupForHref = (href: string) =>
  resourceNavigationGroups.find((group) =>
    group.links.some((link) => link.href === href),
  );
