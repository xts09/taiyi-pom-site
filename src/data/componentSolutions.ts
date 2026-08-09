export type ComponentSolution = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  typicalParts: readonly string[];
  reviewAreas: readonly string[];
  relatedApplications: readonly {
    label: string;
    href: string;
  }[];
};

export const componentSolutions = [
  {
    slug: "precision-plastic-gears",
    title: "Precision Plastic Gears",
    category: "Motion and power transmission",
    summary:
      "A component-led review path for molded gears where wear, noise, dimensional control, and production consistency need to be considered together.",
    typicalParts: ["Drive gears", "Worm gears", "Reduction gears", "Copier gears"],
    reviewAreas: ["Load and speed", "Wear and friction", "Noise target", "Tooth accuracy"],
    relatedApplications: [
      { label: "Motion Components", href: "/applications/motion-components" },
      { label: "Washing Machine Components", href: "/applications/washing-machine-components" },
    ],
  },
  {
    slug: "bushings-and-sleeves",
    title: "Bushings and Sleeves",
    category: "Sliding and bearing components",
    summary:
      "A review framework for molded bearing and guide parts that depend on stable fit, sliding behavior, and practical processing windows.",
    typicalParts: ["Bushings", "Sleeves", "Guide rings", "Sliding blocks"],
    reviewAreas: ["Bearing load", "Sliding speed", "Counterface", "Clearance and fit"],
    relatedApplications: [
      { label: "Motion Components", href: "/applications/motion-components" },
      { label: "Automotive", href: "/applications/automotive" },
    ],
  },
  {
    slug: "conveyor-chain-components",
    title: "Conveyor Chain Components",
    category: "Conveyor and automation systems",
    summary:
      "A component family for chain plates, rollers, brackets, and related molded parts used in repeated-motion or static-control environments.",
    typicalParts: ["Chain plates", "Rollers", "Segments", "Conveyor brackets"],
    reviewAreas: ["Repeated load", "Wear path", "Surface resistance target", "Cleaning environment"],
    relatedApplications: [
      { label: "Conveyor and Automation", href: "/applications/conveyor-automation" },
      { label: "Electronics", href: "/applications/electronics" },
    ],
  },
  {
    slug: "valve-spools-and-cartridges",
    title: "Valve Spools and Cartridges",
    category: "Water-control components",
    summary:
      "A structured starting point for valve internals where sealing geometry, movement, media exposure, and molded dimensional stability interact.",
    typicalParts: ["Valve spools", "Valve cartridges", "Valve internals", "Guide wheels"],
    reviewAreas: ["Fluid exposure", "Seal interface", "Movement cycle", "Dimensional stability"],
    relatedApplications: [
      { label: "Water Control", href: "/applications/water-control" },
      { label: "Washing Machine Components", href: "/applications/washing-machine-components" },
    ],
  },
  {
    slug: "textile-guide-components",
    title: "Textile Guide Components",
    category: "Textile machinery",
    summary:
      "A review path for yarn-contact and guide parts where surface condition, friction behavior, wear, and part consistency affect operation.",
    typicalParts: ["Yarn guides", "Guide wheels", "Heddle lifters", "Spindle supports"],
    reviewAreas: ["Yarn contact", "Surface finish", "Friction behavior", "Wear life"],
    relatedApplications: [
      { label: "Textile Machinery", href: "/applications/textile-machinery" },
      { label: "Motion Components", href: "/applications/motion-components" },
    ],
  },
  {
    slug: "ic-handling-trays",
    title: "IC Handling Trays",
    category: "Conductive and static-control components",
    summary:
      "A focused route for molded handling trays where resistance targets, dimensional requirements, cleanliness, and process conditions must be defined together.",
    typicalParts: ["IC handling trays", "Antistatic trays", "Conductive carriers", "Precision pockets"],
    reviewAreas: ["Resistance range", "Test method", "Flatness target", "Handling environment"],
    relatedApplications: [
      { label: "Electronics", href: "/applications/electronics" },
      { label: "Conveyor and Automation", href: "/applications/conveyor-automation" },
    ],
  },
] as const satisfies readonly ComponentSolution[];

export const getComponentSolutionBySlug = (slug: string) =>
  componentSolutions.find((solution) => solution.slug === slug);
