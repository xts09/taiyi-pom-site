import { getCategoryPath, pomSubcategoryLabels } from "@/lib/productCategories";

export type ApplicationDirection = {
  label: string;
  keyUse: string;
  href?: string;
  shortLabel?: string;
};

export type ApplicationImage = {
  src: string;
  alt: string;
  label: string;
  description?: string;
};

export type ApplicationPart = {
  label: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
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
  detailHeroImage?: {
    src: string;
    alt: string;
  };
  images: ApplicationImage[];
  parts: ApplicationPart[];
  engineeringFit?: ApplicationEngineeringGroup[];
};

const materialDirectionKeyUses: Record<string, string> = {
  "Base POM Resin":
    "Baseline POM property and processing review for general molded parts.",
  "High-Impact POM Compound":
    "Toughness for impact or lower-temperature service conditions.",
  "Wear-Resistant POM Compound": "Wear resistance under repeated movement.",
  "Low-Friction POM Compound": "Low friction at sliding or mating surfaces.",
  "Glass Fiber Reinforced POM Compound":
    "Higher stiffness and dimensional stability where reinforcement is required.",
  "Carbon Fiber Reinforced POM Compound":
    "Combined stiffness and controlled conductivity where both are required.",
  "Conductive / Antistatic POM Compound":
    "Charge control where conductive or antistatic performance is required.",
  "UV-Resistant POM Compound":
    "Outdoor exposure conditions where UV resistance is required.",
};

const materialDirection = (
  category: string,
  note?: string,
): ApplicationDirection => {
  const baseLabel = pomSubcategoryLabels[category] ?? category;

  return {
    label: note ? `${baseLabel} ${note}` : baseLabel,
    keyUse:
      materialDirectionKeyUses[category] ??
      "Project-specific material review against part function and working conditions.",
    href: getCategoryPath(category),
    shortLabel: baseLabel,
  };
};

const customDirection = (
  label: string,
  keyUse =
    "Project-specific formulation review against part function and working conditions.",
): ApplicationDirection => ({
  label,
  keyUse,
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
        src: "/applications/parts/transparent/automotive-fuel-pump-assembly-transparent.png",
        alt: "Automotive plastic fuel pump assembly",
        label: "Fuel Pump Assembly",
      },
      {
        src: "/applications/parts/transparent/automotive-window-regulator-transparent.png",
        alt: "Automotive plastic window regulator component",
        label: "Window Regulator",
      },
      {
        src: "/applications/parts/transparent/automotive-fasteners-transparent.png",
        alt: "Automotive plastic fastener and buckle component",
        label: "Fasteners",
      },
    ],
    parts: [
      {
        label: "Fuel Pump Assembly",
        description:
          "Review dimensional fit, fuel-system movement, and repeatable assembly conditions.",
        image: {
          src: "/applications/parts/transparent/automotive-fuel-pump-assembly-transparent.png",
          alt: "Automotive plastic fuel pump assembly",
        },
      },
      {
        label: "Window Regulator",
        description:
          "Screen low-friction movement, gear wear, and stable guide engagement.",
        image: {
          src: "/applications/parts/transparent/automotive-window-regulator-transparent.png",
          alt: "Automotive plastic window regulator component",
        },
      },
      {
        label: "Automotive Clips & Fasteners",
        description:
          "Check retention force, snap-fit consistency, and low-warpage assembly fit.",
        image: {
          src: "/applications/parts/transparent/automotive-fasteners-transparent.png",
          alt: "Automotive plastic fastener and buckle component",
        },
      },
      {
        label: "Safety Latch",
        description:
          "Review release geometry, retention force, and repeatable assembly fit.",
        image: {
          src: "/applications/parts/transparent/automotive-safety-latch-transparent.png",
          alt: "Automotive molded safety latch component",
        },
      },
      {
        label: "Wiper Motor Gear",
        description:
          "Screen tooth wear, torque transfer, and smooth repeated movement.",
        image: {
          src: "/applications/parts/transparent/wiper-motor-gears-transparent.png",
          alt: "Automotive wiper motor assembly with molded polymer gears",
        },
      },
      {
        label: "Seat Guide Ring",
        description:
          "Evaluate sliding contact, guide accuracy, and resistance to repeated wear.",
        image: {
          src: "/applications/parts/transparent/main-frame-guide-ring-transparent.png",
          alt: "Automotive molded seat guide ring component",
        },
      },
      {
        label: "Gear Shift Seat",
        description:
          "Review controlled movement, assembly fit, and low-noise operation.",
        image: {
          src: "/applications/parts/transparent/gear-shift-ball-seat-transparent.png",
          alt: "Automotive gear shift seat and linkage components",
        },
      },
      {
        label: "Mirror Adjustment Gear",
        description:
          "Screen compact gear engagement, repeatability, and dimensional stability.",
        image: {
          src: "/applications/parts/transparent/automotive-rearview-mirror-adjustment-transparent.png",
          alt: "Automotive rearview mirror adjustment molded components",
        },
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
      customDirection(
        "Custom formulation based on project requirements",
        "Project-specific formulation review for electrical and assembly requirements.",
      ),
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
        src: "/applications/parts/transparent/rotor-electric-shear-transparent.png",
        alt: "Plastic rotor and electric shear components",
        label: "Rotor Components",
      },
      {
        src: "/applications/parts/transparent/electronics-parts-10-transparent.png",
        alt: "Precision plastic electronics parts",
        label: "Electronics Parts",
      },
    ],
    parts: [
      {
        label: "Connector Housing",
        description:
          "Review terminal alignment, fine feature fill, and repeatable connector fit.",
      },
      {
        label: "Terminal Housing",
        description:
          "Check retention geometry, dimensional consistency, and stable assembly clearance.",
      },
      {
        label: "Insulation Support",
        description:
          "Screen stiffness, low warpage, and support accuracy around electrical assemblies.",
      },
      {
        label: "Control Box Cover",
        description:
          "Review flatness, clip engagement, and repeatable enclosure assembly.",
        image: {
          src: "/applications/parts/transparent/automotive-controlbox-components-transparent.png",
          alt: "Molded control box and electrical enclosure components",
        },
      },
      {
        label: "Wire Harness Clip",
        description:
          "Evaluate snap-fit retention, impact response, and installation consistency.",
        image: {
          src: "/applications/parts/transparent/electronics-buckle-set-transparent.png",
          alt: "Molded buckle and wire retention components",
        },
      },
      {
        label: "Small Motor Rotor",
        description:
          "Screen balance, dimensional control, and stability during repeated rotation.",
        image: {
          src: "/applications/parts/transparent/rotor-electric-shear-transparent.png",
          alt: "Small electric motor rotor and molded component assembly",
        },
      },
      {
        label: "Actuator Gear",
        description:
          "Review tooth wear, low-friction movement, and noise-sensitive actuation.",
      },
      {
        label: "Antistatic Precision Component",
        description:
          "Match charge-control targets with dimensional and processing requirements.",
        image: {
          src: "/applications/parts/transparent/electronics-parts-10-transparent.png",
          alt: "Precision molded electronics components",
        },
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
      customDirection(
        "Reinforced POM where higher stiffness is required",
        "Higher stiffness for loaded components and assembly geometry.",
      ),
    ],
    heroImage: {
      src: "/applications/parts/conveyor-automation-hero.webp",
      alt: "Clean conveyor automation line with modular chain plates",
    },
    images: [
      {
        src: "/applications/parts/transparent/conveying-parts-transparent.png",
        alt: "Plastic conveying parts for high-strength wear-resistant movement",
        label: "Conveying Parts",
      },
      {
        src: "/applications/parts/transparent/conveyor-chain-plate-bracket-transparent.png",
        alt: "Black plastic conveyor chain plate bracket component",
        label: "Chain Plate Bracket",
      },
      {
        src: "/applications/parts/transparent/electrical-roller-transparent.png",
        alt: "Plastic roller component for low-friction movement",
        label: "Roller",
      },
    ],
    parts: [
      {
        label: "Modular Chain Plate",
        description:
          "Review link fit, repeated articulation, and wear across moving chain surfaces.",
        image: {
          src: "/applications/parts/transparent/conveyor-chain-plate-modular-transparent.png",
          alt: "Molded modular conveyor chain plate components",
        },
      },
      {
        label: "Chain Plate Bracket",
        description:
          "Check stiffness, fastening geometry, and assembly stability under load.",
        image: {
          src: "/applications/parts/transparent/conveyor-chain-plate-bracket-transparent.png",
          alt: "Molded conveyor chain plate bracket components",
        },
      },
      {
        label: "Conveying Link",
        description:
          "Review pivot fit, repeated articulation, and load transfer between links.",
        image: {
          src: "/applications/parts/transparent/conveying-parts-transparent.png",
          alt: "Black molded conveying link components",
        },
      },
      {
        label: "Conveyor Segment",
        description:
          "Screen segment geometry, edge engagement, and repeatable conveyor movement.",
        image: {
          src: "/applications/parts/transparent/conveyor-segment-transparent.png",
          alt: "Molded segmented conveyor belt component",
        },
      },
      {
        label: "Conveyor Plate",
        description:
          "Evaluate plate flatness, hinge geometry, and wear under repeated travel.",
        image: {
          src: "/applications/parts/transparent/conveyor-plate-transparent.png",
          alt: "White molded conveyor plate component",
        },
      },
      {
        label: "Conveyor Panel",
        description:
          "Review panel alignment, load distribution, and dimensional consistency.",
        image: {
          src: "/applications/parts/transparent/conveyor-panel-transparent.png",
          alt: "Brown molded conveyor panel assembly",
        },
      },
      {
        label: "Chain Component",
        description:
          "Screen chain engagement, repeated flexing, and contact wear.",
        image: {
          src: "/applications/parts/transparent/conveyor-chain-component-transparent.png",
          alt: "Molded conveyor chain component assembly",
        },
      },
      {
        label: "Conveyor Housing",
        description:
          "Check housing stiffness, mounting fit, and low-warpage assembly geometry.",
        image: {
          src: "/applications/parts/transparent/conveyor-housing-transparent.png",
          alt: "Black molded conveyor housing component",
        },
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Modular chain plates and conveyor sprockets",
          "Wear strips, guide rails, and sliding-contact supports",
          "Bearing cages, bushings, and rotating support components",
          "Conveyor housings and fastening brackets",
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
        src: "/applications/parts/transparent/wiper-motor-gears-transparent.png",
        alt: "Automotive wiper motor plastic gears",
        label: "Wiper Motor Gears",
      },
      {
        src: "/applications/parts/transparent/main-frame-guide-ring-transparent.png",
        alt: "Plastic main frame guide ring",
        label: "Guide Ring",
      },
      {
        src: "/applications/parts/transparent/washer-base-gear-transparent.png",
        alt: "Plastic washer base gear for high-strength movement",
        label: "Washer Base Gear",
      },
    ],
    parts: [
      {
        label: "Precision Gear",
        description:
          "Review tooth accuracy, torque transfer, and repeatable dimensional control.",
        image: {
          src: "/applications/parts/transparent/washer-base-gear-transparent.png",
          alt: "Molded precision gear component",
        },
      },
      {
        label: "Worm Gear",
        description:
          "Screen sliding tooth contact, wear, and smooth reduction movement.",
      },
      {
        label: "Roller",
        description:
          "Evaluate rolling contact, shaft fit, and stability under repeated cycles.",
        image: {
          src: "/applications/parts/transparent/electrical-roller-transparent.png",
          alt: "Molded roller component for low-friction movement",
        },
      },
      {
        label: "Bushing",
        description:
          "Review clearance, friction, and wear at rotating support interfaces.",
      },
      {
        label: "Sleeve",
        description:
          "Check concentricity, surface contact, and repeatable press or sliding fit.",
      },
      {
        label: "Guide Ring",
        description:
          "Screen guide accuracy, low-friction movement, and dimensional stability.",
        image: {
          src: "/applications/parts/transparent/main-frame-guide-ring-transparent.png",
          alt: "Molded guide ring component",
        },
      },
      {
        label: "Sliding Block",
        description:
          "Review load distribution, guide clearance, and repeated sliding wear.",
      },
      {
        label: "Cam",
        description:
          "Evaluate profile accuracy, contact stress, and controlled actuation movement.",
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
        src: "/applications/parts/water-valve-spool-cad.webp",
        alt: "CAD visualization of a molded polymer valve spool and cartridge assembly",
        label: "Valve Spool & Cartridge",
        description:
          "Dimensional, friction, and sealing-adjacent review for repeated valve movement.",
      },
      {
        src: "/applications/parts/water-valve-body-cad.webp",
        alt: "CAD visualization of molded polymer functional components inside a water-control valve body",
        label: "Valve Body Assembly",
        description:
          "Strength, fit, and media-resistance review for molded valve mechanisms.",
      },
      {
        src: "/applications/parts/pump-impeller-cad.webp",
        alt: "CAD visualization of a molded polymer centrifugal pump impeller",
        label: "Pump Impeller",
        description:
          "Stiffness, balance, and dimensional review for rotating pump components.",
      },
      {
        src: "/applications/parts/water-thermostatic-valve-cad.webp",
        alt: "CAD visualization of molded polymer components inside a thermostatic control valve",
        label: "Thermostatic Control Valve",
        description:
          "Stable assembly and repeatable movement in temperature-control mechanisms.",
      },
    ],
    parts: [
      {
        label: "Valve Cartridge",
        description:
          "Screen assembly fit, internal movement, and sealing-adjacent geometry.",
        image: {
          src: "/applications/parts/transparent/water-valve-cartridge-transparent.png",
          alt: "Bathroom valve cartridge components",
        },
      },
      {
        label: "Valve Internal Parts",
        description:
          "Review molded accuracy, mating fit, and repeatable internal movement.",
        image: {
          src: "/applications/parts/transparent/water-valve-internal-parts-transparent.png",
          alt: "Assorted molded valve internal parts",
        },
      },
      {
        label: "Valve Component",
        description:
          "Check structural fit, sliding geometry, and compatibility with the project medium.",
        image: {
          src: "/applications/parts/transparent/water-valve-component-transparent.png",
          alt: "Valve stem and molded valve component",
        },
      },
      {
        label: "Thermostatic Valve Body",
        description:
          "Evaluate stable actuation, assembly tolerance, and temperature-cycle conditions.",
        image: {
          src: "/applications/parts/transparent/water-thermostatic-valve-body-transparent.png",
          alt: "Thermostatic valve body assembly",
        },
      },
      {
        label: "Valve Spool Assembly",
        description:
          "Review sliding clearance, dimensional stability, and repeated valve movement.",
        image: {
          src: "/applications/parts/transparent/water-valve-spool-assembly-transparent.png",
          alt: "Valve body and spool assembly components",
        },
      },
      {
        label: "Guide Wheel",
        description:
          "Screen rolling contact, dimensional consistency, and low-friction movement.",
        image: {
          src: "/applications/parts/transparent/water-guide-wheel-transparent.png",
          alt: "Molded bathroom guide wheel components",
        },
      },
      {
        label: "Valve Housing Component",
        description:
          "Review stiffness, shrinkage control, and stable housing assembly fit.",
        image: {
          src: "/applications/parts/transparent/water-pps-replacement-component-transparent.png",
          alt: "Black molded valve housing component",
        },
      },
      {
        label: "Pump Impeller",
        description:
          "Review balance, stiffness, and dimensional control during repeated rotation.",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Valve bodies and spool assemblies",
          "Cartridges, actuator sleeves, and sanitary mechanisms",
          "Pump impellers and rotating water-control components",
          "Thermostatic valve bodies and control mechanisms",
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
      "Precision molded gears, bearing cages, pump components, guide blocks, and other functional machine elements.",
    materialDirections: [
      materialDirection("Base POM Resin"),
      materialDirection("High-Impact POM Compound"),
      materialDirection("Wear-Resistant POM Compound"),
      materialDirection(
        "Glass Fiber Reinforced POM Compound",
        "where higher stiffness is required",
      ),
      customDirection(
        "Custom formulation based on working environment",
        "Project-specific formulation review for working environment and part conditions.",
      ),
    ],
    heroImage: {
      src: "/applications/parts/industrial-machinery-hero.webp",
      alt: "Industrial machinery assembly area with automated equipment modules",
    },
    images: [
      {
        src: "/applications/parts/industrial-precision-gear-cad.webp",
        alt: "CAD visualization of molded polymer precision gears in an industrial shaft module",
        label: "Precision Gear Drive",
        description:
          "Tooth wear, torque transfer, and dimensional consistency under repeated motion.",
      },
      {
        src: "/applications/parts/bearing-cage-cad.webp",
        alt: "CAD visualization of a molded polymer bearing cage and bushing assembly",
        label: "Bearing Cage & Bushing",
        description:
          "Low-friction support, wear control, and repeatable bearing geometry.",
      },
      {
        src: "/applications/parts/pump-impeller-cad.webp",
        alt: "CAD visualization of a molded polymer centrifugal pump impeller",
        label: "Pump Impeller",
        description:
          "Stiffness, chemical exposure, and dimensional balance for rotating service.",
      },
      {
        src: "/applications/parts/industrial-linear-guide-cad.webp",
        alt: "CAD visualization of molded polymer wear pads and bushings in a linear guide module",
        label: "Linear Guide Block",
        description:
          "Sliding friction, guide accuracy, and assembly fit across repeated travel.",
      },
    ],
    parts: [
      {
        label: "Precision Gear Drive",
        description:
          "Review torque transfer, tooth wear, and dimensional consistency under cycling.",
        image: {
          src: "/applications/parts/transparent/washer-base-gear-transparent.png",
          alt: "Injection-molded precision gear drive components",
        },
      },
      {
        label: "Bearing Cage",
        description:
          "Screen pocket geometry, rotational stability, and repeatable bearing spacing.",
      },
      {
        label: "Industrial Bushing",
        description:
          "Evaluate shaft clearance, low-friction support, and controlled wear.",
      },
      {
        label: "Pump Impeller",
        description:
          "Check balance, stiffness, and compatibility with the operating medium.",
      },
      {
        label: "Linear Guide Block",
        description:
          "Review guide accuracy, sliding friction, and fit across repeated travel.",
      },
      {
        label: "Wear Pad",
        description:
          "Screen contact pressure, surface wear, and dimensional retention under load.",
      },
      {
        label: "Thrust Washer",
        description:
          "Evaluate axial load, friction, and stable thickness at rotating interfaces.",
      },
      {
        label: "Coupling Insert",
        description:
          "Review torque response, assembly fit, and repeated engagement conditions.",
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Precision gears and compact drive components",
          "Bearing cages, bushings, and rotating supports",
          "Pump impellers and media-contact machine components",
          "Linear guide blocks, wear pads, and sliding supports",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Dimensional consistency under repeated mechanical load",
          "Low friction and controlled wear at moving interfaces",
          "Strength, stiffness, and low warpage for assembly fit",
          "Media resistance and processing consistency for precision parts",
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
      customDirection(
        "Custom formulation based on weather exposure and load",
        "Project-specific formulation review for weather exposure and load.",
      ),
    ],
    heroImage: {
      src: "/applications/parts/outdoor-equipment-hero.webp",
      alt: "Outdoor equipment assembly line with garden machinery modules",
    },
    images: [
      {
        src: "/applications/parts/transparent/agricultural-sprinkler-head-transparent.png",
        alt: "Plastic agricultural sprinkler head parts",
        label: "Sprinkler Head",
      },
      {
        src: "/applications/parts/transparent/lawn-parts-transparent.png",
        alt: "Plastic lawn equipment parts",
        label: "Lawn Parts",
      },
      {
        src: "/applications/parts/transparent/outdoor-pipe-clamps-transparent.png",
        alt: "Plastic pipe clamp parts for durable outdoor assembly",
        label: "Pipe Clamps",
      },
    ],
    parts: [
      {
        label: "Sprinkler Head",
        description:
          "Review repeated rotation, outdoor exposure, and stable flow geometry.",
        image: {
          src: "/applications/parts/transparent/agricultural-sprinkler-head-transparent.png",
          alt: "Agricultural sprinkler head component",
        },
      },
      {
        label: "Lawn Mower Gear",
        description:
          "Screen tooth wear, impact response, and movement under outdoor service.",
        image: {
          src: "/applications/parts/transparent/lawn-parts-transparent.png",
          alt: "Molded lawn equipment parts",
        },
      },
      {
        label: "Trimmer Spool",
        description:
          "Evaluate rotational balance, impact conditions, and dimensional stability.",
      },
      {
        label: "Outdoor Pipe Clamp",
        description:
          "Check retention force, weather exposure, and repeatable fastening fit.",
        image: {
          src: "/applications/parts/transparent/outdoor-pipe-clamps-transparent.png",
          alt: "Molded outdoor pipe clamp components",
        },
      },
      {
        label: "Irrigation Connector",
        description:
          "Review connection geometry, assembly repeatability, and outdoor media exposure.",
        image: {
          src: "/applications/parts/transparent/quick-tubing-connection-transparent.png",
          alt: "Molded quick tubing connector for irrigation equipment",
        },
      },
      {
        label: "Trigger Lever",
        description:
          "Screen repeated actuation, impact response, and pivot wear.",
      },
      {
        label: "Wheel Hub Bushing",
        description:
          "Evaluate shaft fit, rolling support, and wear in contaminated environments.",
      },
      {
        label: "Weather-Resistant Housing Clip",
        description:
          "Review snap-fit retention, dimensional stability, and exposure conditions.",
        image: {
          src: "/applications/parts/transparent/automotive-fasteners-transparent.png",
          alt: "Injection-molded snap-fit housing clips",
        },
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
        "Project-specific formulation review for hardness, shrinkage, and wear targets.",
      ),
    ],
    heroImage: {
      src: "/applications/parts/textile-machinery-hero.webp",
      alt: "Textile machinery line with yarn handling and guide components",
    },
    images: [
      {
        src: "/applications/parts/transparent/textile-parts-transparent.png",
        alt: "Plastic textile machinery parts",
        label: "Textile Parts",
      },
      {
        src: "/applications/parts/transparent/electrical-roller-transparent.png",
        alt: "Plastic roller component for low-friction movement",
        label: "Roller",
      },
      {
        src: "/applications/parts/transparent/main-frame-guide-ring-transparent.png",
        alt: "Plastic guide ring component",
        label: "Guide Ring",
      },
    ],
    parts: [
      {
        label: "Yarn Guide",
        description:
          "Review smooth contact, guide accuracy, and wear against moving yarn.",
        image: {
          src: "/applications/parts/transparent/textile-parts-transparent.png",
          alt: "Molded textile machinery guide components",
        },
      },
      {
        label: "Guide Ring",
        description:
          "Screen low-friction guidance, dimensional stability, and surface wear.",
        image: {
          src: "/applications/parts/transparent/main-frame-guide-ring-transparent.png",
          alt: "Molded textile guide ring component",
        },
      },
      {
        label: "Yarn Tensioner",
        description:
          "Evaluate controlled movement, contact consistency, and repeated adjustment.",
      },
      {
        label: "Textile Roller",
        description:
          "Review rolling resistance, shaft alignment, and fabric or yarn contact.",
        image: {
          src: "/applications/parts/transparent/electrical-roller-transparent.png",
          alt: "Molded roller component for textile machinery movement",
        },
      },
      {
        label: "Spindle Sleeve",
        description:
          "Check concentricity, rotational fit, and dimensional control under cycling.",
      },
      {
        label: "Bobbin Holder",
        description:
          "Screen retention geometry, repeated loading, and stable rotational support.",
      },
      {
        label: "Loom Gear",
        description:
          "Evaluate tooth wear, timing consistency, and low-noise transmission.",
        image: {
          src: "/applications/parts/transparent/washer-base-gear-transparent.png",
          alt: "Injection-molded POM loom drive gear",
        },
      },
      {
        label: "Textile Sliding Block",
        description:
          "Review guide clearance, repeated sliding wear, and assembly accuracy.",
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
