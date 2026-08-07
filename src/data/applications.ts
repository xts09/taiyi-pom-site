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
        src: "/applications/parts/transparent/automotive-clips-user-v3.png",
        alt: "Automotive molded clips and fastener components",
        label: "Clips & Fasteners",
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
          src: "/applications/parts/transparent/automotive-clips-user-v3.png",
          alt: "Automotive molded clips and fastener components",
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
          alt: "Automotive molded interior seat guide ring component",
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
        label: "Interior Rearview Mirror Base",
        description:
          "Review molded fit, mounting geometry, and stable support around the interior rearview mirror.",
        image: {
          src: "/applications/parts/transparent/automotive-rearview-mirror-adjustment-transparent.png",
          alt: "Automotive molded interior rearview mirror base components",
        },
      },
      {
        label: "Wiper Arm Components",
        description:
          "Review connector fit, retention geometry, and repeatable assembly around the windshield wiper arm.",
        image: {
          src: "/applications/parts/transparent/automotive-wiper-arm-components-transparent.png",
          alt: "Automotive molded windshield wiper arm components",
        },
      },
      {
        label: "Fuel Filter Element",
        description:
          "Review sealing fit, retention geometry, and repeatable assembly around the fuel filter module.",
        image: {
          src: "/applications/parts/transparent/automotive-fuel-filter-element-transparent.png",
          alt: "Automotive fuel filter element",
        },
      },
      {
        label: "Fuel Cap Assembly",
        description:
          "Review sealing fit, thread engagement, and repeatable assembly around the fuel filler cap.",
        image: {
          src: "/applications/parts/transparent/automotive-fuel-cap-assembly-transparent.png",
          alt: "Automotive fuel cap assembly components",
        },
      },
      {
        label: "EV Brake Component",
        description:
          "Review gear engagement, torque transfer, and dimensional stability for electric brake actuator assemblies.",
        image: {
          src: "/applications/parts/transparent/automotive-ev-brake-component-transparent.png",
          alt: "Electric vehicle brake component with molded gear",
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
        title: "PLATFORM Material Direction",
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
      "Precision molded parts for electrical connection, insulation, control, and actuation, with conductive or antistatic material directions where charge control is required.",
    materialDirections: [
      materialDirection(
        "Conductive / Antistatic POM Compound",
        "where a defined resistance range or charge-dissipation function is required",
      ),
      materialDirection(
        "Carbon Fiber Reinforced POM Compound",
        "where stiffness, dimensional stability, and conductivity are evaluated together",
      ),
      materialDirection("Wear-Resistant POM Compound"),
      materialDirection("Low-Friction POM Compound"),
      customDirection(
        "Custom formulation based on project requirements",
        "Project-specific formulation review for mechanical fit, electrical function, and processing requirements.",
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
          "Review terminal alignment, fine-feature fill, and repeatable connector fit.",
        image: {
          src: "/applications/parts/transparent/electronics-connector-housing-transparent.png",
          alt: "Injection-molded six-position electrical connector housing",
        },
      },
      {
        label: "Terminal Housing",
        description:
          "Check retention geometry, dimensional consistency, and stable assembly clearance.",
        image: {
          src: "/applications/parts/transparent/electronics-terminal-housing-transparent.png",
          alt: "Injection-molded two-position electrical terminal housing",
        },
      },
      {
        label: "Copier Drive Gear",
        description:
          "Review tooth engagement, rotational accuracy, and repeatable power transfer in copier drive assemblies.",
        image: {
          src: "/applications/parts/electronics-copier-drive-gear.png",
          alt: "Copier drive gear assembly with molded polymer transmission gears",
        },
      },
      {
        label: "Toner Cartridge Drive Components",
        description:
          "Review gear support, shaft alignment, and repeatable movement within toner-cartridge drive assemblies.",
        image: {
          src: "/applications/parts/electronics-copier-toner-cartridge.png",
          alt: "Toner cartridge assembly with molded drive-support components",
        },
      },
      {
        label: "IC Handling Tray",
        description:
          "Review tray flatness, pocket geometry, handling durability, and the required ESD target and test method.",
        image: {
          src: "/applications/parts/electronics-chip-holder.png",
          alt: "Molded IC handling tray with repeated component pockets and handle openings",
        },
      },
      {
        label: "Panel-Mount Signal Connector",
        description:
          "Review connector retention, strain relief, and stable cable routing at equipment interfaces.",
        image: {
          src: "/applications/parts/electronics-panel-mount-signal-connector.png",
          alt: "Panel-mount signal connector with molded plug and cable strain relief",
        },
      },
      {
        label: "Robotic Joint Gearbox",
        description:
          "Review molded gear engagement, bearing support, wear, and dimensional stability in robotic joint assemblies.",
        image: {
          src: "/applications/parts/electronics-robotic-joint-module.png",
          alt: "Robotic joint gearbox with molded gears and bearing-support components",
        },
      },
      {
        label: "Antistatic Precision Component",
        description:
          "Define the resistance target and test method alongside dimensional and processing requirements.",
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
          "Connector and terminal housings, control-box covers, and insulation supports",
          "ESD-control carriers, fixtures, and precision molded components",
          "Small-motor rotors, actuator gears, rollers, and moving electrical parts",
          "Wire-harness clips, buckles, and functional electronic housings",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Dimensional stability for functional assembly",
          "Processing consistency for precision molded parts",
          "Surface or volume resistance target and test method where charge control is required",
          "Grounding path, humidity, conditioning, and assembly geometry for ESD-sensitive parts",
        ],
      },
      {
        title: "PLATFORM Material Direction",
        items: [
          "Conductive and antistatic POM directions for project-specific resistance targets",
          "Carbon-fiber-reinforced POM where stiffness and conductivity are evaluated together",
          "Low-friction or wear-resistant POM for actuators, gears, and rollers",
          "Custom formulation screening based on part geometry and processing conditions",
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
        src: "/applications/parts/transparent/conveyor-antistatic-anti-slip-chain-plate-transparent.png",
        alt: "Modular conveyor chain plate with anti-slip grip strips",
        label: "Antistatic Anti-Slip Conveyor Chain Plate",
      },
      {
        src: "/applications/parts/transparent/electrical-roller-transparent.png",
        alt: "Plastic roller component for low-friction movement",
        label: "Roller",
      },
    ],
    parts: [
      {
        label: "Mini Conveyor Chain Plate",
        description:
          "Review link fit, repeated articulation, and wear across moving chain surfaces.",
        image: {
          src: "/applications/parts/transparent/conveyor-chain-plate-modular-transparent.png",
          alt: "Molded modular conveyor chain plate components",
        },
      },
      {
        label: "High-Load Conveyor Chain",
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
        label: "Antistatic Anti-Slip Conveyor Chain Plate",
        description:
          "Review surface grip, static-dissipative performance, and repeatable link engagement in automated conveyor lines.",
        image: {
          src: "/applications/parts/transparent/conveyor-antistatic-anti-slip-chain-plate-transparent.png",
          alt: "Antistatic anti-slip modular conveyor chain plate with static-dissipative grip strips",
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
        label: "Conveyor Roller",
        description:
          "Review roller diameter, shaft fit, rolling contact, and wear under repeated conveyor movement.",
        image: {
          src: "/applications/parts/transparent/conveyor-chain-component-transparent.png",
          alt: "Conveyor roller bank with molded low-friction rollers",
        },
      },
      {
        label: "Conveyor Chain Plate Bracket",
        description:
          "Review fastening geometry, support stiffness, and repeatable alignment at the chain-plate interface.",
        image: {
          src: "/applications/parts/transparent/conveyor-chain-plate-bracket-transparent.png",
          alt: "Molded conveyor chain plate bracket and support components",
        },
      },
      {
        label: "Conductive Conveyor Chain Plate",
        description:
          "Review static-dissipative material direction, link engagement, and repeatable movement in charge-sensitive conveyor lines.",
        image: {
          src: "/applications/parts/transparent/conveyor-housing-transparent.png",
          alt: "Black conductive conveyor chain plate component for charge-sensitive handling lines",
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
        title: "PLATFORM Material Direction",
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
        src: "/applications/parts/transparent/guide-ring-v2-transparent.png",
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
          src: "/applications/parts/transparent/motion-precision-gear-v2-transparent.png",
          alt: "Molded precision gear component group",
        },
      },
      {
        label: "Worm Gear",
        description:
          "Screen sliding tooth contact, wear, and smooth reduction movement.",
        image: {
          src: "/applications/parts/transparent/motion-worm-gear-v2-transparent.png",
          alt: "Molded worm gear shaft components",
        },
      },
      {
        label: "Roller",
        description:
          "Evaluate rolling contact, shaft fit, and stability under repeated cycles.",
        image: {
          src: "/applications/parts/transparent/motion-roller-v2-transparent.png",
          alt: "Green molded roller component",
        },
      },
      {
        label: "Bushing",
        description:
          "Review clearance, friction, and wear at rotating support interfaces.",
        image: {
          src: "/applications/parts/transparent/motion-bushing-v2-transparent.png",
          alt: "Molded POM bushing component group",
        },
      },
      {
        label: "Sleeve",
        description:
          "Check concentricity, surface contact, and repeatable press or sliding fit.",
        image: {
          src: "/applications/parts/transparent/motion-sleeve-v2-transparent.png",
          alt: "Molded sleeve and bushing component group",
        },
      },
      {
        label: "Guide Ring",
        description:
          "Screen guide accuracy, low-friction movement, and dimensional stability.",
        image: {
          src: "/applications/parts/transparent/guide-ring-v2-transparent.png",
          alt: "Molded guide ring component",
        },
      },
      {
        label: "Sliding Block",
        description:
          "Review load distribution, guide clearance, and repeated sliding wear.",
        image: {
          src: "/applications/parts/transparent/motion-sliding-block-v2-transparent.png",
          alt: "Molded sliding block components with brass inserts",
        },
      },
      {
        label: "Cam",
        description:
          "Evaluate profile accuracy, contact stress, and controlled actuation movement.",
        image: {
          src: "/applications/parts/transparent/motion-cam-v2-transparent.png",
          alt: "Molded off-white cam gear component",
        },
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
        title: "PLATFORM Material Direction",
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
        label: "Valve Spool Assembly",
        description:
          "Review sliding clearance, dimensional stability, and repeated valve movement.",
        image: {
          src: "/applications/parts/transparent/water-valve-spool-assembly-transparent.png",
          alt: "Valve body and spool assembly components",
        },
      },
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
        label: "Guide Wheel",
        description:
          "Screen rolling contact, dimensional consistency, and low-friction movement.",
        image: {
          src: "/applications/parts/transparent/water-guide-wheel-v2.png",
          alt: "Molded water-control guide wheel",
        },
      },
      {
        label: "Valve Housing Component",
        description:
          "Review stiffness, shrinkage control, and stable housing assembly fit.",
        image: {
          src: "/applications/parts/transparent/water-valve-housing-component-v2-transparent.png",
          alt: "Water-control valve housing cartridge components",
        },
      },
      {
        label: "Pump Impeller",
        description:
          "Review balance, stiffness, and dimensional control during repeated rotation.",
        image: {
          src: "/applications/parts/transparent/industrial-pump-impeller-transparent.png",
          alt: "Injection-molded POM centrifugal pump impeller",
        },
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
        title: "PLATFORM Material Direction",
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
    slug: "washing-machine-components",
    title: "Washing Machine Components",
    description:
      "Functional molded components for washing-machine drum drive, water routing, drainage, valves, and low-friction moving assemblies.",
    materialDirections: [
      materialDirection("Base POM Resin"),
      materialDirection("Wear-Resistant POM Compound"),
      materialDirection("Low-Friction POM Compound"),
      materialDirection(
        "Glass Fiber Reinforced POM Compound",
        "where stiffness and dimensional retention are required",
      ),
      customDirection(
        "Custom formulation based on wash-cycle conditions",
        "Project-specific formulation review for detergent exposure, movement, load, and part conditions.",
      ),
    ],
    heroImage: {
      src: "/applications/parts/washing-machine-components-hero.png",
      alt: "Front-loading washing machine mechanism with molded drive, drain, and latch components",
    },
    images: [
      {
        src: "/applications/parts/washer-base-gear.jpg",
        alt: "Molded polymer gear and retainer for a washing machine drum drive",
        label: "Drum Drive Gear",
        description:
          "Tooth wear, torque transfer, and reliable drum rotation through repeated wash cycles.",
      },
      {
        src: "/applications/parts/bearing-cage-cad.webp",
        alt: "Molded polymer drum bearing retainer and bushing assembly",
        label: "Drum Bearing Retainer",
        description:
          "Low-friction support, wear control, and stable bearing geometry under vibration.",
      },
      {
        src: "/applications/parts/pump-impeller-cad.webp",
        alt: "Molded polymer drain-pump impeller for a washing machine",
        label: "Drain-Pump Impeller",
        description:
          "Rotational balance, stiffness, and dimensional stability in detergent-water flow.",
      },
      {
        src: "/applications/parts/industrial-linear-guide-cad.webp",
        alt: "Molded polymer guide and wear component for washing machine suspension hardware",
        label: "Suspension Guide",
        description:
          "Controlled sliding, stable guidance, and fit across repeated vibration cycles.",
      },
    ],
    parts: [
      {
        label: "Drum Drive Gear",
        description:
          "Review torque transfer, tooth wear, and dimensional consistency for repeated drum rotation.",
        image: {
          src: "/applications/parts/transparent/washer-base-gear-transparent.png",
          alt: "Injection-molded washing machine drum drive gear and retainer",
        },
      },
      {
        label: "Water Guide Pipe",
        description:
          "Review port alignment, seal-seat geometry, drainage clearance, and repeatable assembly fit.",
        image: {
          src: "/applications/parts/transparent/washing-machine-water-guide-pipe-transparent.png",
          alt: "White molded washing-machine water guide pipe with a four-ear mounting flange",
        },
      },
      {
        label: "Transmission Wheel",
        description:
          "Review hub concentricity, shaft engagement, radial stiffness, and repeatable torque transfer through the drum drive.",
        image: {
          src: "/applications/parts/transparent/washing-machine-transmission-wheel-transparent.png",
          alt: "Molded washing-machine transmission wheel with radial ribs, a splined hub, and a drive shaft",
        },
      },
      {
        label: "Reduction Gear Assembly",
        description:
          "Review gear-stage alignment, hub concentricity, shaft engagement, and stable torque reduction through the drum drive.",
        image: {
          src: "/applications/parts/transparent/washing-machine-reduction-gear-assembly-transparent.png",
          alt: "Molded washing-machine reduction gear assembly with dual wheel stages and a splined shaft",
        },
      },
      {
        label: "Drain Pump Housing",
        description:
          "Review inlet and outlet fit, seal-seat geometry, pump-chamber rigidity, and stable drainage-path assembly.",
        image: {
          src: "/applications/parts/transparent/washing-machine-drain-pump-housing-transparent.png",
          alt: "Molded washing-machine drain pump housing with a raised inlet neck and lower outlet chamber",
        },
      },
      {
        label: "Inlet Valve Connecting Pipe",
        description:
          "Review hose-barb retention, port alignment, bend clearance, and stable water-path sealing at the inlet valve.",
        image: {
          src: "/applications/parts/transparent/washing-machine-inlet-valve-connecting-pipe-neutral.png",
          alt: "Molded washing-machine inlet valve connecting pipe with a curved body, sealing flange, and barbed hose end",
        },
      },
      {
        label: "Drain Control Valve",
        description:
          "Review valve-seat fit, actuator travel, port alignment, and repeatable opening and closing in the drainage path.",
        image: {
          src: "/applications/parts/transparent/washing-machine-drain-control-valve-transparent.png",
          alt: "Molded washing-machine drain control valve with a round valve body, outlet port, and actuator lever",
        },
      },
      {
        label: "Drain Valve Assembly",
        description:
          "Review seal engagement, thread fit, actuator travel, and repeatable closure in the washing-machine drainage path.",
        image: {
          src: "/applications/parts/transparent/washing-machine-drain-valve-assembly-transparent.png",
          alt: "Molded washing-machine drain valve assembly with a threaded cap, sealing body, and actuator linkage",
        },
      },
    ],
    engineeringFit: [
      {
        title: "Typical Parts",
        items: [
          "Drum-drive gears, coupling inserts, and bearing retainers",
          "Spin-tub bushings, thrust washers, and rotating supports",
          "Drain-pump impellers and water-path components",
          "Drain valves, pump housings, and water-routing components",
        ],
      },
      {
        title: "Performance Needs",
        items: [
          "Dimensional consistency through repeated rotation and vibration",
          "Low friction and controlled wear at moving interfaces",
          "Stiffness and low warpage for assembly fit",
          "Suitability screening for detergent-water contact and wash-cycle temperatures",
        ],
      },
      {
        title: "PLATFORM Material Direction",
        items: [
          "Base and modified POM screening for functional appliance parts",
          "Wear-resistant and low-friction directions for moving interfaces",
          "Reinforced POM where stiffness or lower shrinkage is the priority",
          "Custom formulation review based on wash-cycle conditions",
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
          "Screen tooth wear, torque transfer, and impact response under repeated outdoor service.",
        image: {
          src: "/applications/parts/transparent/outdoor-lawn-mower-gear-v2.png",
          alt: "Molded outdoor-equipment lawn mower gear",
        },
      },
      {
        label: "Trimmer Spool",
        description:
          "Evaluate rotational balance, impact conditions, and dimensional stability.",
        image: {
          src: "/applications/parts/transparent/outdoor-trimmer-spool-transparent.png",
          alt: "Injection-molded black POM line trimmer spool",
        },
      },
      {
        label: "Recoil Starter Assembly",
        description:
          "Review cord routing, spring-housing stiffness, mounting geometry, and reliable repeated starting.",
        image: {
          src: "/applications/parts/transparent/outdoor-recoil-starter-assembly-transparent.png",
          alt: "Molded outdoor equipment recoil starter assembly with pull handle",
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
        label: "Irrigation Pulsator Wheel",
        description:
          "Review drive-paddle geometry, torque transfer, water exposure, and wear under repeated irrigation cycles.",
        image: {
          src: "/applications/parts/transparent/outdoor-irrigation-pulsator-wheel-transparent.png",
          alt: "Molded off-white irrigation pulsator wheel with curved drive paddles",
        },
      },
      {
        label: "Trimmer Drive Head",
        description:
          "Review drive engagement, fastener retention, line-feed clearance, and impact resistance during repeated trimming.",
        image: {
          src: "/applications/parts/transparent/outdoor-trimmer-drive-head-transparent.png",
          alt: "Molded black outdoor trimmer drive head with green nylon line",
        },
      },
      {
        label: "Weather-Resistant Housing Clip",
        description:
          "Review snap-fit retention, dimensional stability, and project-specific outdoor exposure conditions.",
        image: {
          src: "/applications/parts/transparent/outdoor-housing-clip-v2.png",
          alt: "Molded outdoor-equipment housing clip with snap-fit features",
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
        title: "PLATFORM Material Direction",
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
        src: "/applications/parts/transparent/guide-ring-v2-transparent.png",
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
        label: "Heddle Wire Bundle",
        description:
          "Review eyelet consistency, straightness, wear resistance, and reliable warp-yarn separation.",
        image: {
          src: "/applications/parts/transparent/textile-heddle-bundle-transparent.png",
          alt: "Bundle of pale yellow textile heddle wires with repeated oval eyes",
        },
      },
      {
        label: "Heddle Lifter",
        description:
          "Review pivot fit, lift-arm stiffness, repeated actuation, and reliable heddle-frame movement.",
        image: {
          src: "/applications/parts/transparent/textile-heald-lifter-transparent.png",
          alt: "Textile heddle lifter with a black pivot base and curved grey lifting arm",
        },
      },
      {
        label: "Air-Spinning Guide",
        description:
          "Review fibre-channel geometry, airflow compatibility, smooth contact, and repeatable yarn guidance.",
        image: {
          src: "/applications/parts/transparent/textile-air-spinning-guide-transparent.png",
          alt: "Off-white molded air-spinning guide with a pinched fibre channel",
        },
      },
      {
        label: "Textile Guide Wheel",
        description:
          "Review groove profile, bearing fit, smooth yarn contact, and stable rotation during continuous running.",
        image: {
          src: "/applications/parts/transparent/textile-guide-wheel-transparent.png",
          alt: "Black molded textile guide wheel with a central bearing",
        },
      },
      {
        label: "Bobbin Holder",
        description:
          "Screen retention geometry, repeated loading, and stable rotational support.",
        image: {
          src: "/applications/parts/transparent/textile-bobbin-holder-transparent.png",
          alt: "Injection-molded black POM bobbin holder adapter",
        },
      },
      {
        label: "Textile Spindle Support",
        description:
          "Review flange seating, sleeve alignment, shaft clearance, and stable support under repeated rotation.",
        image: {
          src: "/applications/parts/transparent/textile-spindle-bushing-transparent.png",
          alt: "Ivory molded textile spindle support with a flanged base and angled hollow sleeve",
        },
      },
      {
        label: "Textile Sliding Block",
        description:
          "Review guide clearance, repeated sliding wear, and assembly accuracy.",
        image: {
          src: "/applications/parts/transparent/textile-sliding-block-transparent.png",
          alt: "Injection-molded black POM textile guide sliding block",
        },
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
        title: "PLATFORM Material Direction",
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
  "industrial-machinery": "washing-machine-components",
  "precision-injection-molded-parts": "washing-machine-components",
  "industrial-outdoor-equipment": "outdoor-equipment",
};

export const getApplicationBySlug = (slug: string) =>
  applications.find(
    (application) =>
      application.slug === (applicationSlugAliases[slug] ?? slug),
  );
