export type CompanyFigure = {
  label: string;
  value: string;
  note: string;
};

export type CompanyCapability = {
  title: string;
  description: string;
};

export type FactoryImage = {
  src: string;
  alt: string;
  label: string;
  placement: "hero" | "story" | "gallery";
};

export type FactoryProofRow = {
  title: string;
  eyebrow: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  imageSide: "left" | "right";
  points: string[];
};

export const companyFigures: CompanyFigure[] = [
  { label: "Established", value: "2003", note: "June 18, 2003" },
  { label: "Annual Capacity", value: "60,000", note: "Tons/year" },
  {
    label: "Production Lines",
    value: "15",
    note: "Twin-Screw Extrusion Lines",
  },
  { label: "Factory Scale", value: "25,000 m2", note: "Building Area" },
  { label: "Laboratory", value: "32", note: "Sets of Testing Equipment" },
];

export const companyCapabilities: CompanyCapability[] = [
  {
    title: "Modified Material Focus",
    description:
      "Focused on modified POM compounds for injection molding applications, with selected PA6, PA66, PPA, and PPS compound solutions developed around project requirements.",
  },
  {
    title: "In-house Production",
    description:
      "15 twin-screw extrusion lines support stable compounding, sample evaluation, and repeat batch communication for long-term industrial supply.",
  },
  {
    title: "Document Support",
    description:
      "For new material evaluation, we can provide TDS, SDS, COA, REACH, RoHS, and quality system documents according to grade and project needs.",
  },
];

export const companyOverview = [
  "Factory-based manufacturer located in Yancheng, Jiangsu, China",
  "Focused on modified POM and selected engineering plastic compounds",
  "In-house extrusion compounding, material testing, and quality control",
  "Support grade recommendation, sample evaluation, and customized solutions",
  "Stable batch control for long-term industrial supply",
];

export const factoryProofRows: FactoryProofRow[] = [
  {
    title: "Production and Warehouse Control",
    eyebrow: "Factory Base",
    description:
      "Factory-based production and warehouse coordination support repeat industrial supply from material screening through batch communication.",
    imageSrc: "/factory-warehouse.webp",
    imageAlt: "Taiyi Nano production and warehouse area",
    imageLabel: "Compounding Workshop",
    imageSide: "right",
    points: [
      "Factory-based manufacturer located in Yancheng, Jiangsu, China",
      "Focused on modified POM and selected engineering plastic compounds",
    ],
  },
  {
    title: "Twin-Screw Extrusion Capability",
    eyebrow: "Compounding",
    description:
      "In-house twin-screw extrusion lines support modified material compounding, sample evaluation, and practical adjustment around project requirements.",
    imageSrc: "/factory-extrusion.webp",
    imageAlt: "Taiyi Nano twin-screw extrusion production line",
    imageLabel: "Extrusion Lines",
    imageSide: "left",
    points: [
      "In-house extrusion compounding and material testing",
      "Support grade recommendation, sample evaluation, and customized solutions",
    ],
  },
  {
    title: "Evaluation and Document Support",
    eyebrow: "Project Review",
    description:
      "Testing equipment and document support help engineering teams compare candidate materials before a grade is confirmed for a specific part.",
    imageSrc: "/factory-machine.webp",
    imageAlt: "Taiyi Nano extruder and production equipment",
    imageLabel: "Production Equipment",
    imageSide: "right",
    points: [
      "Stable batch control for long-term industrial supply",
      "TDS, SDS, COA, REACH, RoHS, and quality system documents according to grade and project needs",
    ],
  },
];

export const certifications = [
  "IATF 16949",
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
];

export const availableDocuments = ["TDS", "SDS", "COA", "REACH", "RoHS"];

export const honors = [
  "National High-Tech Enterprise",
  "Jiangsu Province High-Tech Enterprise",
  "Jiangsu Yancheng Plastic R&D Unit",
];

export const industries = [
  "Automotive Parts",
  "Electrical & Electronics",
  "Precision Components",
  "Sanitary Ware",
  "Industrial Machinery",
  "Rail Transit",
  "Medical Supplies",
  "Packaging",
  "Cable Ties",
  "Consumer Appliances",
];

export const factoryImages: FactoryImage[] = [
  {
    src: "/factory-exterior.webp",
    alt: "Taiyi Nano factory exterior in Yancheng, Jiangsu",
    label: "Factory Exterior",
    placement: "hero",
  },
  {
    src: "/factory-warehouse.webp",
    alt: "Taiyi Nano production and warehouse area",
    label: "Compounding Workshop",
    placement: "story",
  },
  {
    src: "/factory-extrusion.webp",
    alt: "Taiyi Nano twin-screw extrusion production line",
    label: "Extrusion Lines",
    placement: "gallery",
  },
  {
    src: "/factory-machine.webp",
    alt: "Taiyi Nano extruder and production equipment",
    label: "Production Equipment",
    placement: "gallery",
  },
];
