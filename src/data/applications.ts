import { getCategoryPath, pomSubcategoryLabels } from "@/lib/productCategories";

export type ApplicationDirection = {
  label: string;
  href?: string;
  shortLabel?: string;
};

export type ApplicationImage = {
  src: string;
  alt: string;
  label: string;
};

export type ApplicationEngineeringGroup = {
  title: string;
  items: string[];
};

export type ApplicationItem = {
  slug: string;
  title: string;
  description: string;
  materialDirections: ApplicationDirection[];
  heroImage?: {
    src: string;
    alt: string;
  };
  images: ApplicationImage[];
  engineeringFit?: ApplicationEngineeringGroup[];
};

const materialDirection = (
  category: string,
  note?: string,
): ApplicationDirection => {
  const baseLabel = pomSubcategoryLabels[category] ?? category;

  return {
    label: note ? `${baseLabel} ${note}` : baseLabel,
    href: getCategoryPath(category),
    shortLabel: baseLabel,
  };
};

const customDirection = (label: string): ApplicationDirection => ({
  label,
  href: "/contact",
  shortLabel: label,
});

export const applications: ApplicationItem[] = [
  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Functional molded parts for vehicle doors, seats, fuel systems, wipers, control boxes, and interior mechanisms.",
    materialDirections: [
      materialDirection(
        "High-Impact POM Compound",
        "for toughness and low-temperature requirements",
      ),
      materialDirection("Wear-Resistant POM Compound"),
      materialDirection("Low-Friction POM Compound"),
      materialDirection(
        "Glass Fiber Reinforced POM Compound",
        "where higher stiffness or lower shrinkage is required",
      ),
    ],
    heroImage: {
      src: "/applications/parts/automotive-hero.webp",
      alt: "Automotive assembly line with vehicle functional modules",
    },
    images: [
      {
        src: "/applications/parts/automotive-fuel-pump-assembly.jpg",
        alt: "Automotive plastic fuel pump assembly",
        label: "Fuel Pump Assembly",
      },
      {
        src: "/applications/parts/automotive-window-regulator.jpg",
        alt: "Automotive plastic window regulator component",
        label: "Window Regulator",
      },
      {
        src: "/applications/parts/automotive-fasteners.png",
        alt: "Automotive plastic fastener and buckle component",
        label: "Fasteners",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Door modules, latches, pipe clamps, guides, and mirror-related parts",
          "Fuel pump assemblies and fuel-system functional parts",
          "Wiper gears, wiper sleeves, gear shift seats, and rocker arms",
          "Control-box parts, fasteners, limiters, speaker enclosures, and seat guide rings",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Dimensional stability and repeatable assembly fit",
          "Wear resistance and low friction for moving assemblies",
          "Strength, stiffness, and impact resistance where required",
          "Low warpage for brackets, housings, and interior components",
        ],
      },
      {
        title: "Taiyi POM Value",
        items: [
          "Wear-resistant and low-friction POM directions",
          "High-impact POM for toughness targets",
          "Reinforced POM when stiffness or lower shrinkage is the priority",
          "Grade screening based on wear, shrinkage, strength, and processing needs",
        ],
      },
    ],
  },
  {
    slug: "electronics",
    title: "Electronics",
    description:
      "Molded parts for electrical connection, control, actuation, insulation, and functional assembly environments.",
    materialDirections: [
      materialDirection(
        "Conductive / Antistatic POM Compound",
        "where relevant",
      ),
      materialDirection(
        "Carbon Fiber Reinforced POM Compound",
        "where stiffness and conductivity are both considered",
      ),
      customDirection("Custom formulation based on project requirements"),
    ],
    heroImage: {
      src: "/applications/parts/electronics-hero.webp",
      alt: "Electronics assembly station with functional electrical modules",
    },
    images: [
      {
        src: "/applications/parts/quick-tubing-connection.jpg",
        alt: "Plastic quick connection and tubing connection parts",
        label: "Quick Connections",
      },
      {
        src: "/applications/parts/rotor-electric-shear.jpg",
        alt: "Plastic rotor and electric shear components",
        label: "Rotor Components",
      },
      {
        src: "/applications/parts/electronics-parts-10.jpg",
        alt: "Precision plastic electronics parts",
        label: "Electronics Parts",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Connectors, quick connections, and tubing connection parts",
          "Terminal housings, control box covers, and insulation supports",
          "Small motor rotor components and actuator-related molded parts",
          "Wire harness clips, buckles, and electronics housings",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Dimensional stability for functional assembly",
          "Conductive or antistatic performance where required",
          "Processing consistency for precision molded parts",
          "Wear and friction control in moving electrical parts",
        ],
      },
      {
        title: "Taiyi POM Value",
        items: [
          "Conductive and antistatic POM directions for ESD-related needs",
          "Carbon fiber reinforced POM when stiffness and conductivity are considered",
          "Low-friction or wear-resistant POM for rollers and moving parts",
          "Custom formulation review based on project requirements",
        ],
      },
    ],
  },
  {
    slug: "conveyor-automation",
    title: "Conveyor Automation",
    description:
      "Plastic chain plates, conveyor guides, rollers, and handling components for clean automated movement.",
    materialDirections: [
      materialDirection("Wear-Resistant POM Compound"),
      materialDirection("Low-Friction POM Compound"),
      materialDirection(
        "Conductive / Antistatic POM Compound",
        "where charge control is required",
      ),
      customDirection("Reinforced POM where higher stiffness is required"),
    ],
    heroImage: {
      src: "/applications/parts/conveyor-automation-hero.webp",
      alt: "Clean conveyor automation line with modular chain plates",
    },
    images: [
      {
        src: "/applications/parts/conveying-parts.jpg",
        alt: "Plastic conveying parts for high-strength wear-resistant movement",
        label: "Conveying Parts",
      },
      {
        src: "/applications/parts/conveyor-chain-plate-bracket.jpg",
        alt: "Black plastic conveyor chain plate bracket component",
        label: "Chain Plate Bracket",
      },
      {
        src: "/applications/parts/electrical-roller.jpg",
        alt: "Plastic roller component for low-friction movement",
        label: "Roller",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Modular chain plates, chain plate belts, and chain components",
          "Conveyor plates, conveyor housings, and guide parts",
          "Rollers, guide strips, side rails, and sliding-contact brackets",
          "Fastening brackets and wear strips for handling systems",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Wear resistance under repeated movement",
          "Low friction against mating surfaces",
          "Dimensional stability and repeatable assembly fit",
          "Antistatic or conductive performance when required",
        ],
      },
      {
        title: "Taiyi POM Value",
        items: [
          "Wear-resistant POM for repeated sliding contact",
          "Low-friction POM for smoother movement",
          "Conductive or antistatic POM for charge control",
          "Reinforced POM where stiffness is required",
        ],
      },
    ],
  },
  {
    slug: "motion-components",
    title: "Motion Components",
    description:
      "Gears, rollers, bushings, sleeves, and sliding parts for transmission, guidance, and low-friction movement.",
    materialDirections: [
      materialDirection("Wear-Resistant POM Compound"),
      materialDirection("Low-Friction POM Compound"),
      materialDirection(
        "High-Impact POM Compound",
        "where low-temperature toughness is required",
      ),
      materialDirection(
        "Glass Fiber Reinforced POM Compound",
        "where higher stiffness is required",
      ),
    ],
    heroImage: {
      src: "/applications/parts/motion-components-hero.webp",
      alt: "Industrial motion module with gears and molded movement components",
    },
    images: [
      {
        src: "/applications/parts/wiper-motor-gears.jpg",
        alt: "Automotive wiper motor plastic gears",
        label: "Wiper Motor Gears",
      },
      {
        src: "/applications/parts/main-frame-guide-ring.jpg",
        alt: "Plastic main frame guide ring",
        label: "Guide Ring",
      },
      {
        src: "/applications/parts/washer-base-gear.jpg",
        alt: "Plastic washer base gear for high-strength movement",
        label: "Washer Base Gear",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Gears, gear wheels, gear shift seats, and washer base gears",
          "Rollers, guide rings, wiper sleeves, and bushings",
          "Sliding blocks, low-friction guide parts, and motion supports",
          "Compact drive components for repeated movement",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Reduced friction and wear under repeated movement",
          "Dimensional stability for mating parts",
          "Noise control and smooth movement",
          "Strength and stiffness for drive or guide structures",
        ],
      },
      {
        title: "Taiyi POM Value",
        items: [
          "Low-friction POM for smoother movement",
          "Wear-resistant POM for repeated contact",
          "High-impact POM for toughness targets",
          "Reinforced POM where stiffness is required",
        ],
      },
    ],
  },
  {
    slug: "water-control",
    title: "Water Control",
    description:
      "Valve, sanitary, pump, and water-control molded parts for clean movement and stable assembly.",
    materialDirections: [
      materialDirection("Low-Friction POM Compound"),
      materialDirection("Wear-Resistant POM Compound"),
      materialDirection(
        "Glass Fiber Reinforced POM Compound",
        "where higher stiffness is required",
      ),
    ],
    heroImage: {
      src: "/applications/parts/water-control-hero.webp",
      alt: "Clean water-control assembly line with valves and flow modules",
    },
    images: [
      {
        src: "/applications/parts/bathroom-parts-1.jpg",
        alt: "Plastic bathroom valve and water-control parts",
        label: "Valve Components",
      },
      {
        src: "/applications/parts/bathroom-guide-wheel.jpg",
        alt: "Plastic bathroom guide wheel component",
        label: "Guide Wheel",
      },
      {
        src: "/applications/parts/thermostatic-valve-body.jpg",
        alt: "Plastic thermostatic valve body",
        label: "Thermostatic Valve",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Valve bodies and spool assemblies",
          "Guide wheels and sanitary mechanisms",
          "Thermostatic valve bodies",
          "PPS replacement opportunities in selected valve parts",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "High strength and low shrinkage",
          "Wear resistance and noise control",
          "Dimensional stability for valve assembly",
          "Stable movement in repeated water-control mechanisms",
        ],
      },
      {
        title: "Taiyi POM Value",
        items: [
          "Low-friction POM for quieter movement",
          "Wear-resistant POM for valve and guide wheel contact",
          "Glass fiber reinforced POM where stiffness is required",
          "Grade screening against shrinkage, strength, and processing needs",
        ],
      },
    ],
  },
  {
    slug: "industrial-machinery",
    title: "Industrial Machinery",
    description:
      "Functional molded parts for industrial machinery, equipment housings, brackets, fasteners, and precision assemblies.",
    materialDirections: [
      materialDirection("Base POM Resin"),
      materialDirection("High-Impact POM Compound"),
      materialDirection("Wear-Resistant POM Compound"),
      materialDirection(
        "Glass Fiber Reinforced POM Compound",
        "where higher stiffness is required",
      ),
      customDirection("Custom formulation based on working environment"),
    ],
    heroImage: {
      src: "/applications/parts/industrial-machinery-hero.webp",
      alt: "Industrial machinery assembly area with automated equipment modules",
    },
    images: [
      {
        src: "/applications/parts/door-panel-control-latch.jpg",
        alt: "Plastic control latch parts",
        label: "Control Latch",
      },
      {
        src: "/applications/parts/speaker-enclosure.jpg",
        alt: "Plastic speaker enclosure part",
        label: "Speaker Enclosure",
      },
      {
        src: "/applications/parts/industrial-bumper-bracket.jpg",
        alt: "Plastic structural bracket component",
        label: "Structural Bracket",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Fasteners, clips, latches, brackets, and functional housings",
          "Precision molded supports and equipment components",
          "Speaker enclosures, control latches, and molded structural parts",
          "General industrial functional parts where assembly fit matters",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Stable flow and dimensional consistency",
          "Strength, stiffness, and low warpage",
          "Impact resistance where equipment use requires toughness",
          "Processing consistency for precision molded parts",
        ],
      },
      {
        title: "Taiyi POM Value",
        items: [
          "Base POM resin and modified POM compound screening",
          "High-impact POM for toughness targets",
          "Reinforced POM when stiffness or lower shrinkage is the priority",
          "Custom formulation review based on working environment",
        ],
      },
    ],
  },
  {
    slug: "outdoor-equipment",
    title: "Outdoor Equipment",
    description:
      "Weather-exposed molded parts for garden equipment, sprinklers, outdoor mechanisms, and durable equipment assemblies.",
    materialDirections: [
      materialDirection("High-Impact POM Compound"),
      materialDirection("UV-Resistant POM Compound"),
      materialDirection("Wear-Resistant POM Compound"),
      customDirection("Custom formulation based on weather exposure and load"),
    ],
    heroImage: {
      src: "/applications/parts/outdoor-equipment-hero.webp",
      alt: "Outdoor equipment assembly line with garden machinery modules",
    },
    images: [
      {
        src: "/applications/parts/agricultural-sprinkler-head.jpg",
        alt: "Plastic agricultural sprinkler head parts",
        label: "Sprinkler Head",
      },
      {
        src: "/applications/parts/lawn-parts.jpg",
        alt: "Plastic lawn equipment parts",
        label: "Lawn Parts",
      },
      {
        src: "/applications/parts/outdoor-pipe-clamps.jpg",
        alt: "Plastic pipe clamp parts for durable outdoor assembly",
        label: "Pipe Clamps",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Sprinkler heads and garden equipment mechanisms",
          "Outdoor housings, brackets, covers, and clips",
          "Weather-exposed pipe, guide, and fastening parts",
          "Durable molded parts for repeated outdoor use",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Toughness and cold resistance when required",
          "UV exposure and outdoor durability",
          "Wear resistance under repeated movement",
          "Dimensional stability in equipment assemblies",
        ],
      },
      {
        title: "Taiyi POM Value",
        items: [
          "High-impact POM for outdoor or low-temperature requirements",
          "UV-resistant POM directions where weather exposure matters",
          "Wear-resistant POM for repeated contact",
          "Custom grade review based on working environment",
        ],
      },
    ],
  },
  {
    slug: "textile-machinery",
    title: "Textile Machinery",
    description:
      "Wear-resistant guide, motion, and low-shrinkage molded parts for textile machinery and yarn or fabric handling systems.",
    materialDirections: [
      materialDirection("Wear-Resistant POM Compound"),
      materialDirection("Low-Friction POM Compound"),
      materialDirection(
        "Glass Fiber Reinforced POM Compound",
        "where higher stiffness or lower shrinkage is required",
      ),
      customDirection(
        "Custom formulation based on hardness, shrinkage, and wear needs",
      ),
    ],
    heroImage: {
      src: "/applications/parts/textile-machinery-hero.webp",
      alt: "Textile machinery line with yarn handling and guide components",
    },
    images: [
      {
        src: "/applications/parts/textile-parts.jpg",
        alt: "Plastic textile machinery parts",
        label: "Textile Parts",
      },
      {
        src: "/applications/parts/electrical-roller.jpg",
        alt: "Plastic roller component for low-friction movement",
        label: "Roller",
      },
      {
        src: "/applications/parts/main-frame-guide-ring.jpg",
        alt: "Plastic guide ring component",
        label: "Guide Ring",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Textile machinery guide parts",
          "Rollers, sleeves, bushings, and low-friction supports",
          "Wear-resistant sliding and yarn or fabric handling components",
          "High-hardness, low-shrinkage molded parts",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Wear resistance under repeated movement",
          "Low friction for smooth guiding",
          "Low shrinkage and dimensional consistency",
          "Hardness and stability for textile machinery assemblies",
        ],
      },
      {
        title: "Taiyi POM Value",
        items: [
          "Wear-resistant POM for textile contact parts",
          "Low-friction POM for guide and roller movement",
          "Reinforced POM where stiffness or shrinkage control matters",
          "Custom formulation based on textile machinery requirements",
        ],
      },
    ],
  },
];

export const selectionBasis = [
  "Mold development stage and tooling plan",
  "Cavity count, flow path, and cavity-to-cavity consistency",
  "Target molding shrinkage, warpage, and dimensional stability",
  "Part movement, load, wear, friction, color, and document needs",
];

const applicationSlugAliases: Record<string, string> = {
  "automotive-functional-parts": "automotive",
  "electronic-electrical-components": "electronics",
  "conveyor-chain-plates": "conveyor-automation",
  "gears-gear-wheels": "motion-components",
  "bushings-rollers-sliding-parts": "motion-components",
  "sanitary-water-control-components": "water-control",
  "precision-injection-molded-parts": "industrial-machinery",
  "industrial-outdoor-equipment": "outdoor-equipment",
};

export const getApplicationBySlug = (slug: string) =>
  applications.find(
    (application) =>
      application.slug === (applicationSlugAliases[slug] ?? slug),
  );
