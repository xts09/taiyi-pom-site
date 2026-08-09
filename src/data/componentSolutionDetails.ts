export type ComponentSolutionDetail = {
  slug: string;
  seo: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    scope: string;
    image: string;
    imageAlt: string;
    imagePosition?: string;
    mobileImagePosition?: string;
    reviewInputs: readonly {
      label: string;
      value: string;
    }[];
  };
  copy: {
    reviewInputsLabel: string;
    problemTitle: string;
    problemSummary: string;
    materialSummary: string;
    processSummary: string;
  };
  decisionRows: readonly {
    symptom: string;
    review: string;
    direction: string;
  }[];
  materialDirections: readonly {
    title: string;
    summary: string;
    caution: string;
  }[];
  materialNote: string;
  inquiryGroups: readonly {
    title: string;
    items: readonly string[];
  }[];
  processSteps: readonly {
    title: string;
    body: string;
  }[];
  processOutcome: string;
  technicalDetails: readonly {
    value: string;
    title: string;
    summary: string;
    groups: readonly {
      title: string;
      items: readonly string[];
    }[];
  }[];
  related: readonly {
    label: string;
    description: string;
    href: string;
  }[];
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
  };
};

export const componentSolutionDetails = [
  {
    slug: "precision-plastic-gears",
    seo: {
      title: "Precision Plastic Gears | POM Material Selection Guide",
      description:
        "Review material, wear, tolerance, molding, and validation factors for precision plastic gears, with POM compound directions for engineering applications.",
      image: "/applications/parts/motion-components-detail-cad-hero.webp",
      imageAlt: "CAD visualization of a precision molded gear transmission system",
    },
    hero: {
      eyebrow: "Gear material solutions",
      title: "Precision plastic gears",
      summary:
        "Screen a practical POM material direction for molded gears where wear, noise, tooth breakage, or dimensional variation is limiting performance. Share the geometry and operating conditions you know; final selection must be validated in the molded gear and complete assembly.",
      scope:
        "For spur, helical, pinion, planetary, internal, compound, worm-wheel, and sector gears.",
      image: "/applications/parts/motion-components-detail-cad-hero.webp",
      imageAlt: "CAD visualization showing precision molded gears in an assembled transmission",
      reviewInputs: [
        { label: "Load", value: "Torque and tooth geometry" },
        { label: "Motion", value: "Speed and duty cycle" },
        { label: "Contact", value: "Mate and lubrication" },
        { label: "Accuracy", value: "Backlash and runout" },
        { label: "Environment", value: "Heat, moisture, media" },
        { label: "Target", value: "Life, wear, and noise" },
      ],
    },
    copy: {
      reviewInputsLabel: "Inputs for gear material review",
      problemTitle: "Start with the gear problem.",
      problemSummary:
        "The same symptom can come from material, geometry, tooling, assembly, or operating conditions. Start with the observed problem before comparing compounds.",
      materialSummary:
        "These POM directions are starting points for review, not grade approvals. The governing problem and actual gear system determine what deserves validation.",
      processSummary:
        "The first discussion narrows uncertainty. It does not replace molded-part trials or approval in the complete transmission.",
    },
    decisionRows: [
      {
        symptom: "Wear or debris",
        review:
          "Check actual torque and rpm, tooth temperature, contact pattern, alignment, counterface finish, and lubrication.",
        direction:
          "Screen wear-resistant or low-friction POM only when contact behavior remains the limiting factor.",
      },
      {
        symptom: "Noise, heat, stick-slip, or binding",
        review:
          "Check backlash, runout, center distance, shaft and housing alignment, hot and cold dimensions, and duty cycle.",
        direction:
          "Consider a friction-modified direction only after geometry, assembly variation, and thermal clearance are separated from material behavior.",
      },
      {
        symptom: "Root cracking or broken teeth",
        review:
          "Check the crack origin, peak and stall loads, shock history, root geometry, gate and weld-line position, and molding defects.",
        direction:
          "Compare balanced or reinforced POM only after fatigue, stiffness, and overload have been identified as the governing constraint.",
      },
      {
        symptom: "Bore, hub, or dimensional variation",
        review:
          "Check interference, hub-web-rim balance, cooling, packing, gating, process history, and cavity-resolved measurements.",
        direction:
          "Correct tooling or process variation first; reinforcement can add anisotropic shrinkage and warpage risk.",
      },
    ],
    materialDirections: [
      {
        title: "Balanced / unfilled POM",
        summary:
          "A practical starting direction when stiffness, fatigue capability, dimensional control, moldability, and sliding behavior must be balanced.",
        caution:
          "It still requires validation at the actual torque, speed, temperature, lubrication condition, and target life.",
      },
      {
        title: "Wear-resistant or low-friction POM",
        summary:
          "Relevant when dry running, flank wear, stick-slip, frictional heat, or noise has been confirmed as the limiting mechanism.",
        caution:
          "A generic friction result does not predict gearbox life; screen it with the actual mating gear and lubricant.",
      },
      {
        title: "Reinforced POM",
        summary:
          "Relevant when tooth or hub deflection, creep, or structural stiffness is more limiting than surface wear.",
        caution:
          "Fiber orientation can change shrinkage, warpage, tooth-surface behavior, and counterface wear.",
      },
    ],
    materialNote:
      "High temperature, humidity, chemical exposure, or a defined electrical requirement may move the project outside the practical POM window. Those cases should be reviewed separately rather than forcing a POM direction.",
    inquiryGroups: [
      {
        title: "Load",
        items: [
          "Continuous, peak, startup, and stall torque",
          "Gear type, module or pitch, tooth count, and face width",
        ],
      },
      {
        title: "Motion",
        items: [
          "Input and output rpm",
          "Duty cycle, reversing frequency, target life, and noise target",
        ],
      },
      {
        title: "Counterface & lubrication",
        items: [
          "Mating gear material and surface condition",
          "Dry running, grease, oil, and known lubricant specification",
        ],
      },
      {
        title: "Accuracy",
        items: [
          "Drawing, backlash, runout, and tooth tolerances",
          "Shaft, bearing, bore, and center-distance requirements",
        ],
      },
      {
        title: "Environment",
        items: [
          "Operating and storage temperature range",
          "Humidity, water, oil, grease, cleaners, or chemicals",
        ],
      },
      {
        title: "Target & current status",
        items: [
          "Current material, failure symptom, and acceptance target",
          "Tooling stage, expected volume, and required documents",
        ],
      },
    ],
    processSteps: [
      {
        title: "Screen the requirement",
        body:
          "Identify the likely governing failure mode, separate system and tooling effects, and mark the inputs that still need confirmation.",
      },
      {
        title: "Compare candidate directions",
        body:
          "Compare the relevant POM direction and, where verified, the available grade data, TDS, and project-specific document path.",
      },
      {
        title: "Define the validation step",
        body:
          "Set the molded-part and assembly checks needed before a candidate is approved for production use.",
      },
    ],
    processOutcome:
      "A candidate material direction and, where verified, a grade shortlist, available document path, and proposed sample-evaluation step — not automatic final approval.",
    technicalDetails: [
      {
        value: "material-review",
        title: "Material review criteria",
        summary:
          "The six operating conditions that define a credible gear-material comparison.",
        groups: [
          {
            title: "Load and fatigue",
            items: [
              "Review continuous, peak, startup, stall, reversing, and shock loads together with tooth-root geometry.",
              "Validate with production-intent geometry, duty cycle, temperature, and expected life.",
            ],
          },
          {
            title: "Speed and frictional heat",
            items: [
              "Review rpm, continuous or intermittent duty, enclosure, cooling, and tooth temperature.",
              "Track flank wear and temperature during a representative running test.",
            ],
          },
          {
            title: "Contact system",
            items: [
              "Review mating material, hardness and finish, contact pattern, clearance, and lubrication.",
              "Use the production counterface and lubricant when comparing wear behavior.",
            ],
          },
          {
            title: "Accuracy, environment, and life",
            items: [
              "Review backlash, runout, tooth accuracy, temperature, humidity, fluids, service life, and noise together.",
              "Confirm performance in the conditioned complete assembly, not from a loose gear alone.",
            ],
          },
        ],
      },
      {
        value: "tooling-molding",
        title: "Tooling and molding",
        summary:
          "Geometry and process checks that can dominate molded gear accuracy.",
        groups: [
          {
            title: "Molded structure",
            items: [
              "Balance hub, web, rib, rim, and tooth sections to reduce uneven cooling and shrinkage.",
              "Review bore, shaft, press-fit, spline, knurl, and insert stresses with the gear geometry.",
            ],
          },
          {
            title: "Flow and dimensions",
            items: [
              "Review gate and weld-line position before tooling is frozen.",
              "Set shrinkage compensation, packing, cooling, and inspection timing from the selected material and measured trial parts.",
              "For reinforced compounds, evaluate fiber orientation and cavity-specific dimensional variation.",
            ],
          },
        ],
      },
      {
        value: "validation",
        title: "Validation on molded gears",
        summary:
          "Part and assembly checks needed after datasheet screening.",
        groups: [
          {
            title: "Molded-part checks",
            items: [
              "Measure profile, pitch, runout, bore position, backlash, and cavity-to-cavity variation after the agreed conditioning period.",
              "Inspect active flanks, tooth roots, gates, weld-line regions, flash, mismatch, and ejection damage.",
            ],
          },
          {
            title: "Assembly checks",
            items: [
              "Run with the actual mating gear at representative torque, rpm, temperature, lubrication, and duty cycle.",
              "Track wear, temperature, noise, backlash change, counterface condition, and failure location over the required period.",
            ],
          },
        ],
      },
      {
        value: "project-checklist",
        title: "Full project checklist",
        summary:
          "The complete input set for a deeper material and validation review.",
        groups: [
          {
            title: "Part and mechanism",
            items: [
              "2D drawing and, if available, 3D model",
              "Gear type, tooth geometry, driver or driven position, shaft, bearing, and housing context",
              "Current material, known grade, tooling stage, cavity count, and production volume",
            ],
          },
          {
            title: "Operating and acceptance conditions",
            items: [
              "Torque, speed, duty, counterface, lubrication, temperature, humidity, and chemical exposure",
              "Backlash, runout, dimensional tolerances, service life, noise, and current failure symptoms",
              "Required TDS, SDS, COA, REACH, RoHS, or other grade-specific document paths",
            ],
          },
        ],
      },
    ],
    related: [
      {
        label: "POM Gear Material Selection",
        description:
          "Define gear duty, compare material directions, and build a representative validation plan.",
        href: "/resources/pom-gear-material-selection",
      },
      {
        label: "Processing Guide",
        description:
          "Review POM molding trials, shrinkage, warpage, dimensional drift, and troubleshooting inputs.",
        href: "/resources/processing-guide",
      },
      {
        label: "Alternative POM Grade Validation",
        description:
          "Compare documents, molding behavior, dimensions, function, and production-release evidence.",
        href: "/resources/alternative-pom-grade-validation",
      },
    ],
    finalCta: {
      eyebrow: "Application review",
      title: "Narrow the candidate direction before sampling.",
      body:
        "Send your gear drawing and the operating details you already know. Taiyi Polymer can help narrow candidate PLATFORM POM directions, identify available grade data or document paths, and define a possible sample-evaluation step. Unknown fields are acceptable for a first review; final selection must be validated in the molded gear and complete assembly.",
    },
  },
  {
    slug: "bushings-and-sleeves",
    seo: {
      title: "Plastic Bushings & Sleeves | POM Material Selection",
      description:
        "Review load, speed, shaft, clearance, wear, molding, and validation factors when evaluating POM compounds for plastic bushings and bearing sleeves.",
      image: "/applications/parts/industrial-linear-guide-cad.webp",
      imageAlt: "CAD visualization of a shaft-supported sliding guide assembly",
    },
    hero: {
      eyebrow: "Sliding component solutions",
      title: "Bushings and sleeves",
      summary:
        "Screen a practical POM direction for molded bushings where wear, binding, clearance drift, or housing retention is limiting performance. Treat the polymer, shaft, housing, fit, motion, lubricant, and environment as one sliding system.",
      scope:
        "For cylindrical, flanged, pivot, linkage, guide, and actuator bearing sleeves.",
      image: "/applications/parts/industrial-linear-guide-cad.webp",
      imageAlt:
        "CAD visualization showing polymer bushings supporting shafts in a linear guide assembly",
      mobileImagePosition: "90% center",
      reviewInputs: [
        { label: "Load", value: "Pressure and bearing length" },
        { label: "Motion", value: "Speed, stroke, and duty" },
        { label: "Shaft", value: "Material, finish, hardness" },
        { label: "Fit", value: "Housing and installed clearance" },
        { label: "Environment", value: "Heat, debris, lubricant" },
        { label: "Target", value: "Life, wear, and drive torque" },
      ],
    },
    copy: {
      reviewInputsLabel: "Inputs for bushing material review",
      problemTitle: "Start with the sliding-system problem.",
      problemSummary:
        "Wear, noise, binding, or clearance change can originate in the compound, shaft, fit, alignment, contamination, or duty cycle. Diagnose the complete interface before changing material.",
      materialSummary:
        "These material directions are screening starting points, not bearing-life approvals. The installed bushing, production shaft, and actual motion profile determine what deserves validation.",
      processSummary:
        "The first discussion narrows the tribological and dimensional risks. It does not replace installed-bore measurement or endurance testing in the production-intent assembly.",
    },
    decisionRows: [
      {
        symptom: "Rapid bore wear or growing clearance",
        review:
          "Check bearing pressure, speed, shaft finish, alignment, temperature, contamination, lubrication, and the actual wear pattern.",
        direction:
          "Screen wear-resistant or low-friction POM only when the shaft-and-bushing interface remains the limiting factor.",
      },
      {
        symptom: "Squeal, binding, or heat after assembly",
        review:
          "Measure the installed bore, housing interference, shaft alignment, startup torque, operating temperature, and real running clearance.",
        direction:
          "Consider a friction-modified direction only after fit, deformation, and thermal-clearance causes are separated from material behavior.",
      },
      {
        symptom: "One-sided wear, scoring, or debris",
        review:
          "Inspect the contact pattern, bore taper, shaft straightness and damage, housing distortion, seals, and the source of particles.",
        direction:
          "Compare tribological compounds only after edge loading, rough counterfaces, and abrasive contamination are controlled.",
      },
      {
        symptom: "Rotation, migration, or installation cracking",
        review:
          "Review housing tolerance, interference, lead-in geometry, insertion force, retention features, wall balance, and service temperature.",
        direction:
          "Screen a balanced or reinforced direction only when assembly strain and retention geometry are already appropriate.",
      },
    ],
    materialDirections: [
      {
        title: "Balanced / unfilled POM",
        summary:
          "A baseline direction for precision molded sleeves needing dimensional stability, moldability, useful stiffness and toughness, and stable sliding behavior.",
        caution:
          "It still requires the production shaft, installed clearance, load, speed, temperature, lubricant, and target life to be tested together.",
      },
      {
        title: "Wear-resistant or low-friction POM",
        summary:
          "A candidate when measured wear, startup friction, stick-slip, noise, or interface temperature limits an otherwise sound bushing system.",
        caution:
          "Lower published friction does not guarantee lower wear. Compare both bushing and shaft condition under the real motion and contamination profile.",
      },
      {
        title: "Reinforced POM",
        summary:
          "A structural direction when stiffness, creep, housing support, or load-induced deformation is more important than minimizing tribological complexity.",
        caution:
          "Fiber orientation can change bore geometry, warpage, shrinkage, and counterface wear, especially in small precision sleeves.",
      },
    ],
    materialNote:
      "If sustained temperature, severe abrasive contamination, contact pressure, or counterface requirements exceed the validated POM window, compare a project-specific PA, PPA, metal-backed, or dedicated bearing architecture instead of forcing a POM solution.",
    inquiryGroups: [
      {
        title: "Part geometry",
        items: [
          "Drawing, bushing type, wall and flange geometry",
          "Bore, outside diameter, bearing length, and critical tolerances",
        ],
      },
      {
        title: "Shaft and counterface",
        items: [
          "Shaft or pin material, hardness, coating, and surface finish",
          "Shaft diameter, tolerance, corrosion, scoring, or known wear",
        ],
      },
      {
        title: "Load and motion",
        items: [
          "Radial or side load and load direction",
          "Rotary, oscillating, or linear motion, speed, stroke, and duty",
        ],
      },
      {
        title: "Housing and fit",
        items: [
          "Housing material, bore, tolerance, and installation method",
          "Required installed clearance and retention method",
        ],
      },
      {
        title: "Environment",
        items: [
          "Operating temperature and dry, initial-grease, or lubricated condition",
          "Dust, textile fiber, water, oil, cleaners, or chemical exposure",
        ],
      },
      {
        title: "Target and status",
        items: [
          "Current material, tooling stage, volume, and failure symptom",
          "Target life, acceptable wear, drive torque, noise, and documents",
        ],
      },
    ],
    processSteps: [
      {
        title: "Define the installed interface",
        body:
          "Separate load, motion, shaft, housing fit, environment, and acceptance targets, then mark which inputs still need confirmation.",
      },
      {
        title: "Compare candidate directions",
        body:
          "Compare the relevant POM direction and, where verified, available grade data and document paths against the governing failure mode.",
      },
      {
        title: "Plan component validation",
        body:
          "Define installed-bore, friction, wear, temperature, shaft-condition, retention, and endurance checks before production approval.",
      },
    ],
    processOutcome:
      "A candidate material direction and, where verified, a grade shortlist, available document path, and proposed installed-bushing evaluation step — not automatic final approval.",
    technicalDetails: [
      {
        value: "sliding-system",
        title: "Sliding-system review criteria",
        summary:
          "The operating variables that define a credible bushing comparison.",
        groups: [
          {
            title: "Load, speed, and motion",
            items: [
              "Review pressure from load, shaft diameter, and useful bearing length together with sliding speed and heat dissipation.",
              "Reproduce rotary, oscillating, or linear motion, including reversals, dwell, startup, and intermittent duty.",
            ],
          },
          {
            title: "Shaft and environment",
            items: [
              "Use the production counterface, surface finish, lubricant, and representative contamination when comparing wear behavior.",
              "Review temperature, fluid exposure, debris, alignment, and the wear condition of both the bushing and shaft.",
            ],
          },
        ],
      },
      {
        value: "fit-tooling",
        title: "Fit, tooling, and molding",
        summary:
          "Geometry and process controls that determine the functional installed bore.",
        groups: [
          {
            title: "Installed dimensions",
            items: [
              "Specify the shaft, housing bore, interference, and required running clearance as one tolerance system.",
              "Measure bore diameter, roundness, and concentricity before installation, after press fitting, and after relevant conditioning.",
            ],
          },
          {
            title: "Molded geometry",
            items: [
              "Balance wall and flange sections, protect the core pin, and review gate location around the precision bore.",
              "Control packing, cooling, shrinkage compensation, and cavity-to-cavity variation using the selected production material.",
            ],
          },
        ],
      },
      {
        value: "bushing-validation",
        title: "Validation on molded bushings",
        summary:
          "Checks that connect material screening to the production-intent assembly.",
        groups: [
          {
            title: "Part and assembly checks",
            items: [
              "Inspect critical dimensions, surface condition, insertion force, installed ID, retention, and contact pattern.",
              "Run with the actual shaft and housing at representative load, speed, motion, temperature, lubrication, and contamination.",
            ],
          },
          {
            title: "Endurance evidence",
            items: [
              "Track clearance, friction or drive torque, temperature, wear, noise, migration, and dimensional change over the required period.",
              "Inspect both polymer and counterface so lower bushing wear is not accepted at the cost of shaft damage.",
            ],
          },
        ],
      },
      {
        value: "bushing-checklist",
        title: "Full project checklist",
        summary:
          "The complete input set for a deeper material and validation review.",
        groups: [
          {
            title: "Part and interface",
            items: [
              "2D drawing and, if available, 3D model, bushing type, housing, installation method, shaft specification, and current material",
              "Critical free-state and installed dimensions, tolerances, clearances, retention features, tooling stage, and cavity count",
            ],
          },
          {
            title: "Operating and acceptance conditions",
            items: [
              "Load, motion, speed, duty, lubricant, temperature, debris, moisture, fluids, and cleaning exposure",
              "Target life, allowable wear, torque, noise, shaft condition, current failure symptoms, and required document paths",
            ],
          },
        ],
      },
    ],
    related: [
      {
        label: "Wear-Resistant & Low-Friction POM",
        description:
          "Review when tribological modification is useful and what the real counterface test must include.",
        href: "/resources/wear-resistant-low-friction-pom-selection-guide",
      },
      {
        label: "Material Selection Guide",
        description:
          "Translate operating conditions and failure modes into a defensible candidate-material direction.",
        href: "/resources/material-selection-guide",
      },
      {
        label: "Processing Guide",
        description:
          "Review shrinkage, bore geometry, warpage, dimensional drift, and molding-trial inputs.",
        href: "/resources/processing-guide",
      },
    ],
    finalCta: {
      eyebrow: "Application review",
      title: "Evaluate the complete sliding interface.",
      body:
        "Send the bushing drawing and the shaft, load, motion, housing-fit, clearance, lubrication, environment, target-life, and failure details you already know. Taiyi Polymer can help narrow candidate PLATFORM POM directions, identify available grade data or document paths, and define a possible installed-bushing evaluation step. Final selection must be validated in the production-intent assembly.",
    },
  },
  {
    slug: "conveyor-chain-components",
    seo: {
      title: "Plastic Conveyor Chain Components | POM Material Selection",
      description:
        "Review chain pull, hinge wear, guide friction, pitch, environment, molding, and validation factors for plastic conveyor chain components.",
      image: "/applications/parts/conveyor-chain-plates-wide.webp",
      imageAlt: "Injection-molded plastic conveyor chain plates and links",
    },
    hero: {
      eyebrow: "Conveyor material solutions",
      title: "Conveyor chain components",
      summary:
        "Screen a practical material direction for molded chain links where elongation, hinge wear, plastic dust, drive load, breakage, or static control is limiting the line. Evaluate the links, pins, sprockets, guides, layout, and environment as one conveyor system.",
      scope:
        "For flat-top, side-flexing, modular, hinge, attachment, flight, and snap-on chain components.",
      image: "/applications/parts/conveyor-chain-plates-wide.webp",
      imageAlt:
        "Molded plastic conveyor chain plates, modular links, and articulated components",
      reviewInputs: [
        { label: "Pull", value: "Load, length, and elevation" },
        { label: "Hinge", value: "Pin, bore, and articulation" },
        { label: "Track", value: "Wear strip and corner guide" },
        { label: "Layout", value: "Speed, curves, and sprockets" },
        { label: "Environment", value: "Heat, debris, and cleaning" },
        { label: "Target", value: "Life, pitch, and drive load" },
      ],
    },
    copy: {
      reviewInputsLabel: "Inputs for conveyor chain material review",
      problemTitle: "Start with the conveyor-system problem.",
      problemSummary:
        "The same symptom can come from compound behavior, chain pull, hinge geometry, guide condition, sprocket compatibility, contamination, or cleaning exposure. Diagnose the line before changing material.",
      materialSummary:
        "These directions are starting points for component and system review, not chain-life approvals. The assembled chain, actual guides, sprockets, layout, and operating cycle determine what deserves validation.",
      processSummary:
        "The first discussion narrows the load, wear, dimensional, and environmental risks. It does not replace testing of production links in the complete conveyor.",
    },
    decisionRows: [
      {
        symptom: "Chain elongation or poor sprocket engagement",
        review:
          "Measure accumulated pitch, hinge and pin wear, chain pull, creep, sprocket condition, link dimensions, and operating temperature.",
        direction:
          "Compare a wear-resistant or structurally balanced POM direction only after the source of pitch growth is identified.",
      },
      {
        symptom: "Plastic dust, heat, or high drive load",
        review:
          "Inspect wear strips, corner tracks, guide clearance, alignment, surface damage, contamination, speed, tension, and lubrication.",
        direction:
          "Screen low-friction or wear-resistant POM only when the chain-to-guide interface remains the limiting factor.",
      },
      {
        symptom: "Broken links, tabs, or hinge sections",
        review:
          "Review normal and jam loads, impact, product accumulation, weld-line position, thin sections, chemicals, and local geometry.",
        direction:
          "Consider balanced or reinforced POM only after overload, stress concentration, and molding defects are separated from material limits.",
      },
      {
        symptom: "Unstable static-control performance",
        review:
          "Define the electrical target and test method, then inspect continuity through links, guides, frame, grounding points, humidity, and contamination.",
        direction:
          "Evaluate conductive or static-dissipative compounds only as one part of a verified charge-dissipation path.",
      },
    ],
    materialDirections: [
      {
        title: "Balanced / unfilled POM",
        summary:
          "A baseline for many molded links needing strength, stiffness, dimensional stability, moldability, articulation, and useful sliding behavior.",
        caution:
          "Validate chain pull, pitch, hinge durability, track wear, sprocket engagement, impact, and service temperature in the real layout.",
      },
      {
        title: "Wear-resistant or low-friction POM",
        summary:
          "A candidate for dry-running, higher-cycle, side-flexing, or higher-speed systems where guide friction, dust, heat, or wear is demonstrated.",
        caution:
          "Test against the actual wear-strip and corner-track materials; a damaged or contaminated guide can overwhelm a compound change.",
      },
      {
        title: "Reinforced POM",
        summary:
          "A structural direction when stiffness, creep, or load-induced deformation limits a chain component.",
        caution:
          "Fiber orientation can change pitch shrinkage, impact behavior, hinge durability, flatness, and counterface wear.",
      },
      {
        title: "Conductive or static-dissipative compounds",
        summary:
          "A project-specific direction when conveyed products require a defined electrical classification and grounded handling path.",
        caution:
          "Resistance, continuity, wear, contamination, humidity, and mechanical life must be verified on the assembled conveyor, not pellets alone.",
      },
    ],
    materialNote:
      "If high temperature, severe abrasion, moisture-driven dimensions, aggressive cleaning chemistry, or impact dominates the project, compare a project-specific PA, PPA, guide, pin, or conveyor architecture rather than forcing the POM-first path.",
    inquiryGroups: [
      {
        title: "Link geometry",
        items: [
          "2D drawing and 3D model, chain type, pitch, link width, and hinge geometry",
          "Critical flatness, attachment, tab, snap, and articulation dimensions",
        ],
      },
      {
        title: "Pins and sprockets",
        items: [
          "Pin material, diameter, finish, clearance, and retention",
          "Sprocket material, tooth geometry, pitch, and current engagement condition",
        ],
      },
      {
        title: "Load and layout",
        items: [
          "Product mass, loaded length, elevation, acceleration, accumulation, and jam cases",
          "Straight and curved sections, side-flexing radius, speed, and duty cycle",
        ],
      },
      {
        title: "Sliding system",
        items: [
          "Wear-strip and corner-track materials, surface condition, and guide clearance",
          "Dry, water-assisted, or lubricated operation and observed wear-debris location",
        ],
      },
      {
        title: "Environment",
        items: [
          "Operating and cleaning temperatures and wet or dry exposure cycles",
          "Chemical names, concentrations, debris, product residue, and cleaning frequency",
        ],
      },
      {
        title: "Target and status",
        items: [
          "Current material, tooling stage, cavity count, production volume, and failure symptom",
          "Target life, allowable elongation, drive load, wear, electrical behavior, and documents",
        ],
      },
    ],
    processSteps: [
      {
        title: "Map the conveyor loads",
        body:
          "Separate chain pull, hinge articulation, guide friction, curves, sprocket engagement, environment, and electrical requirements.",
      },
      {
        title: "Compare candidate directions",
        body:
          "Compare relevant POM directions and, where verified, available grade data against the governing failure and molding constraints.",
      },
      {
        title: "Define assembled-chain validation",
        body:
          "Set dimensional, pitch, articulation, tensile, wear, drive-load, temperature, static-control, and endurance checks for the production system.",
      },
    ],
    processOutcome:
      "A candidate material direction and, where verified, a grade shortlist, document path, and proposed link-and-conveyor evaluation step — not automatic final approval.",
    technicalDetails: [
      {
        value: "conveyor-review",
        title: "Conveyor operating criteria",
        summary:
          "The system variables that define a credible chain-material comparison.",
        groups: [
          {
            title: "Chain pull and articulation",
            items: [
              "Review product load, sliding resistance, conveyor length, elevation, acceleration, accumulation, curves, startup, and jam conditions.",
              "Measure pin and hinge wear together with accumulated pitch and sprocket engagement over the intended duty cycle.",
            ],
          },
          {
            title: "Guides and environment",
            items: [
              "Use the production wear strips, corner tracks, pins, sprockets, lubrication condition, and representative contamination.",
              "Define temperature, water, product residue, chemical concentration, exposure time, and cleaning frequency precisely.",
            ],
          },
        ],
      },
      {
        value: "chain-tooling",
        title: "Link design, tooling, and molding",
        summary:
          "Geometry and process controls that protect pitch, hinges, flatness, and articulation.",
        groups: [
          {
            title: "Functional geometry",
            items: [
              "Protect hinge bores, barrel thickness, pin clearance, load paths, tabs, and sprocket-contact features from weld lines, flash, and mismatch.",
              "Control tool compensation and post-molding dimensions from the selected material rather than a generic shrinkage value.",
            ],
          },
          {
            title: "Production consistency",
            items: [
              "Balance wall, rib, gate, packing, and cooling choices for flatness and stable pitch.",
              "Compare critical dimensions by cavity, then assemble representative chain sections to check articulation and sprocket engagement.",
            ],
          },
        ],
      },
      {
        value: "chain-validation",
        title: "Validation on assembled chains",
        summary:
          "Checks that connect molded-link data to complete conveyor performance.",
        groups: [
          {
            title: "Molded-link checks",
            items: [
              "Measure link pitch, hinge bores, flatness, attachments, cavity variation, tensile behavior, creep, and critical surface condition.",
              "Inspect gate, weld-line, flash, parting-line, and ejection regions that affect articulation or load paths.",
            ],
          },
          {
            title: "System endurance",
            items: [
              "Run production-intent links with actual pins, sprockets, wear strips, tracks, curves, load, speed, lubrication, contamination, and cleaning.",
              "Track accumulated pitch, wear debris, drive load, temperature, static behavior, sprocket engagement, and failure location.",
            ],
          },
        ],
      },
      {
        value: "chain-checklist",
        title: "Full project checklist",
        summary:
          "The complete input set for a deeper material and conveyor-validation review.",
        groups: [
          {
            title: "Part and conveyor",
            items: [
              "Link drawing, chain type, pitch, pin, sprocket, guide, corner-track, layout, current material, tooling stage, cavity count, and volume",
              "Product load, conveying length, curves, elevation, accumulation, impact, startup, jam, and speed conditions",
            ],
          },
          {
            title: "Environment and acceptance",
            items: [
              "Dry or lubricated operation, temperature, contamination, water, chemical cleaning, electrical classification, grounding path, and test method",
              "Target life, allowable elongation, wear, drive load, dust, static behavior, current failures, and required document paths",
            ],
          },
        ],
      },
    ],
    related: [
      {
        label: "Wear-Resistant & Low-Friction POM",
        description:
          "Review chain-to-guide friction, wear, and the comparative test conditions that matter.",
        href: "/resources/wear-resistant-low-friction-pom-selection-guide",
      },
      {
        label: "Conductive & Antistatic Material Selection",
        description:
          "Define electrical targets, conditioning, test methods, and the complete grounding path.",
        href: "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide",
      },
      {
        label: "Processing Guide",
        description:
          "Review pitch shrinkage, hinge geometry, flash, flatness, cavity variation, and molding trials.",
        href: "/resources/processing-guide",
      },
    ],
    finalCta: {
      eyebrow: "Application review",
      title: "Evaluate the chain as a complete conveyor system.",
      body:
        "Send the chain drawing and the load, speed, pins, sprockets, wear strips, layout, lubrication, environment, target life, and failure details you already know. Taiyi Polymer can help narrow candidate PLATFORM POM directions, identify available grade data or document paths, and define a possible assembled-chain evaluation step. Final selection must be validated in the production-intent conveyor.",
    },
  },
  {
    slug: "valve-spools-and-cartridges",
    seo: {
      title: "Plastic Valve Spools & Cartridges | POM Material Selection",
      description:
        "Review pressure, fluid chemistry, spool clearance, seals, molding, and valve-level validation when evaluating POM for valve internals.",
      image: "/applications/parts/water-control-detail-cad-hero.webp",
      imageAlt: "CAD visualization of a molded valve spool inside a fluid-control assembly",
    },
    hero: {
      eyebrow: "Fluid control components",
      title: "Valve spools and cartridges",
      summary:
        "Determine whether a molded POM direction merits review for selected valve internals where sticking, leakage, scoring, dimensional drift, or unstable actuation is limiting performance. Pressure, medium, seals, clearance, and flow function define the application boundary first.",
      scope:
        "For selected low- or moderate-pressure spools, pistons, guides, cartridge cages, seal carriers, and flow-control inserts.",
      image: "/applications/parts/water-control-detail-cad-hero.webp",
      imageAlt:
        "CAD visualization showing a molded valve spool, flow body, and actuation mechanism",
      reviewInputs: [
        { label: "Pressure", value: "Normal, peak, and differential" },
        { label: "Clearance", value: "Spool, bore, and geometry" },
        { label: "Medium", value: "Fluid, concentration, temperature" },
        { label: "Seals", value: "Material, compression, friction" },
        { label: "Motion", value: "Stroke, force, and cycles" },
        { label: "Target", value: "Leakage, flow, and life" },
      ],
    },
    copy: {
      reviewInputsLabel: "Inputs for valve-component material review",
      problemTitle: "Start with the valve-function problem.",
      problemSummary:
        "Sticking, leakage, scoring, or variable flow can originate in pressure forces, clearance, seals, contamination, fluid chemistry, tooling, or the compound. Diagnose the valve before changing polymer.",
      materialSummary:
        "These directions are screening starting points, not pressure or leakage approvals. The molded component, mating bore, seals, real fluid, and complete valve determine what deserves validation.",
      processSummary:
        "The first discussion should eliminate unsuitable material windows early. It does not replace dimensional inspection, pressure and leakage testing, or cycle validation in the production-intent valve.",
    },
    decisionRows: [
      {
        symptom: "Sticking, high actuation force, or slow return",
        review:
          "Check spool-to-bore clearance, cylindricity, concentricity, seal compression, contamination, temperature, lubrication, and pressure forces through the full stroke.",
        direction:
          "Screen low-friction or balanced POM only after geometry, seal, debris, and thermal-clearance causes are controlled.",
      },
      {
        symptom: "Increasing leakage or variable flow",
        review:
          "Inspect seals, spool and bore wear, scoring, creep, metering geometry, cavity variation, actual clearance, temperature, and spool position.",
        direction:
          "Compare a dimensionally stable POM direction only when material wear or deformation remains part of the limiting mechanism.",
      },
      {
        symptom: "Scoring, intermittent movement, or debris",
        review:
          "Identify the particle source, filtration and cleanliness, surface finish, port edges, alignment, seal damage, and fluid contamination.",
        direction:
          "Evaluate tribological modification only after abrasive contamination and damaging geometry are separated from compound behavior.",
      },
      {
        symptom: "Cracking, distortion, or loss of retention",
        review:
          "Review pressure and surge loads, thin sections, weld lines, assembly stress, fluid compatibility, temperature, core accuracy, and gate location.",
        direction:
          "Consider reinforced or alternative high-temperature directions only when structural and chemical boundaries justify them.",
      },
    ],
    materialDirections: [
      {
        title: "Balanced / unfilled POM",
        summary:
          "A baseline for selected moving pistons, guides, cartridges, and valve internals needing dimensional stability, stiffness, moldability, and sliding behavior.",
        caution:
          "Approval still requires the real pressure, leakage, fluid, seal, temperature, wear, and cycle-life conditions.",
      },
      {
        title: "Wear-resistant or low-friction POM",
        summary:
          "A candidate when repeatable testing shows friction, wear, stick-slip, or unstable actuation force is a genuine material limitation.",
        caution:
          "A lower friction value cannot correct excessive seal compression, sharp port edges, contamination, or an inadequate spool-to-bore clearance.",
      },
      {
        title: "Reinforced POM",
        summary:
          "A structural direction for selected cartridge cages, carriers, or guides where stiffness and deformation control dominate.",
        caution:
          "Fiber orientation can affect roundness, shrinkage, and seal or bore interaction, so it is not an automatic choice for precision spool lands.",
      },
      {
        title: "PA or PPA structural direction",
        summary:
          "A separate project path when a valve component needs a different hot, wet, or structural balance than the validated POM window can provide.",
        caution:
          "Moisture, chemical compatibility, processing, dimensions, seals, pressure, and cost require their own validation; this is not a direct drop-in substitution.",
      },
    ],
    materialNote:
      "High-pressure hydraulic spools, severe pressure containment, extremely small leakage clearances, aggressive acids or oxidizers, or demanding hot-fluid service may fall outside a sensible molded-POM window. Establish that boundary before tooling.",
    inquiryGroups: [
      {
        title: "Component and function",
        items: [
          "Part drawing, 3D model, component role, and current material",
          "Spool lands, ports, cartridge body, guide, seal carrier, and critical datums",
        ],
      },
      {
        title: "Pressure and flow",
        items: [
          "Normal, peak, differential, surge, and pulsation pressure",
          "Flow direction, rate, metering requirement, and acceptable leakage",
        ],
      },
      {
        title: "Fluid and temperature",
        items: [
          "Exact medium, concentration, additives, cleaners, and exposure cycle",
          "Operating, cleaning, storage, and peak temperature conditions",
        ],
      },
      {
        title: "Clearance and seals",
        items: [
          "Mating-bore material, diameter, finish, geometry, and functional clearance",
          "Seal material, groove geometry, compression, lubrication, and port-edge condition",
        ],
      },
      {
        title: "Actuation and duty",
        items: [
          "Stroke, cycle rate, available force, spring load, and return requirement",
          "Contamination level, filtration, cleanliness, and representative particle exposure",
        ],
      },
      {
        title: "Target and status",
        items: [
          "Tooling stage, cavity count, production volume, and current failure symptom",
          "Target leakage, flow accuracy, actuation force, cycle life, and documents",
        ],
      },
    ],
    processSteps: [
      {
        title: "Define the valve boundary",
        body:
          "Screen pressure, pressure differential, medium, temperature, clearance, seals, actuation, contamination, and acceptance targets before comparing compounds.",
      },
      {
        title: "Compare candidate directions",
        body:
          "Compare relevant POM or alternative structural directions and, where verified, available grade data against the governing valve failure.",
      },
      {
        title: "Define valve-level validation",
        body:
          "Set dimensional, actuation-force, pressure, leakage, flow, fluid-exposure, contamination, seal, and endurance checks for production-intent parts.",
      },
    ],
    processOutcome:
      "An early material-fit decision and, where appropriate, a candidate direction, grade shortlist, document path, and proposed valve-level evaluation step — not automatic final approval.",
    technicalDetails: [
      {
        value: "valve-review",
        title: "Valve operating criteria",
        summary:
          "The pressure, fluid, clearance, and actuation inputs that define material fit.",
        groups: [
          {
            title: "Pressure and movement",
            items: [
              "Review normal, peak, and differential pressure together with flow forces, surge, stroke, cycle rate, available actuation force, and return behavior.",
              "Define functional spool-to-bore clearance, cylindricity, concentricity, mating surface, seals, and temperature as one tolerance system.",
            ],
          },
          {
            title: "Fluid and contamination",
            items: [
              "Specify the exact fluid, concentration, additives, temperature, duration, cleaning chemistry, and mechanical stress during exposure.",
              "Include representative cleanliness, filtration, particles, lubrication, seals, and mating surfaces in comparative testing.",
            ],
          },
        ],
      },
      {
        value: "valve-tooling",
        title: "Valve design, tooling, and molding",
        summary:
          "Controls that protect cylindrical lands, bores, ports, seals, and metering features.",
        groups: [
          {
            title: "Functional geometry",
            items: [
              "Control roundness, cylindricity, concentricity, land relationships, mating-bore geometry, and port edges from valve function rather than a generic molding tolerance.",
              "Keep gates, weld lines, parting lines, flash, and ejector effects away from critical sliding, sealing, pressure-loaded, and metering surfaces.",
            ],
          },
          {
            title: "Core and shrinkage control",
            items: [
              "Review core support and flow balance for long bores or annular cartridge features that can become eccentric or tapered.",
              "Refine tool dimensions from production-intent material trials, cavity data, and relevant thermal conditioning.",
            ],
          },
        ],
      },
      {
        value: "valve-validation",
        title: "Validation on complete valves",
        summary:
          "Checks that connect molded-part data to switching, sealing, and metering performance.",
        groups: [
          {
            title: "Molded-part checks",
            items: [
              "Measure critical diameters, cylindricity, concentricity, port and land geometry, surface condition, cavity variation, and installed clearance.",
              "Inspect flash, mismatch, gate, weld-line, seal-contact, and metering-edge regions before assembly.",
            ],
          },
          {
            title: "Valve-level checks",
            items: [
              "Test actuation force, leakage, pressure cycling, flow versus position, temperature response, chemical exposure, wear, and seal condition.",
              "Where contamination is realistic, include representative particles and track scoring, sticking, leakage drift, and failure location over the required cycle life.",
            ],
          },
        ],
      },
      {
        value: "valve-checklist",
        title: "Full project checklist",
        summary:
          "The complete input set for a deeper material and valve-qualification review.",
        groups: [
          {
            title: "Part and operating system",
            items: [
              "Drawing, function, current material, pressures, flow, fluid, temperature, mating bore, clearance, seals, actuation, cleanliness, tooling stage, and volume",
              "Critical dimensions, leakage and flow limits, surface requirements, cycle profile, surge, contamination, and known failure location",
            ],
          },
          {
            title: "Qualification and documents",
            items: [
              "Pressure, leakage, flow, actuation-force, chemical, thermal, contamination, wear, and cycle-life validation requirements",
              "Available TDS, SDS, COA, REACH, RoHS, or other grade-specific document paths required for the project",
            ],
          },
        ],
      },
    ],
    related: [
      {
        label: "Material Selection Guide",
        description:
          "Screen pressure, chemical, thermal, dimensional, and mechanical constraints before choosing a polymer family.",
        href: "/resources/material-selection-guide",
      },
      {
        label: "Wear-Resistant & Low-Friction POM",
        description:
          "Review when friction modification is useful and why the seal, bore, fluid, and contamination still govern testing.",
        href: "/resources/wear-resistant-low-friction-pom-selection-guide",
      },
      {
        label: "Processing Guide",
        description:
          "Review shrinkage, core movement, cylindricity, flash, gate location, and production-intent molding trials.",
        href: "/resources/processing-guide",
      },
    ],
    finalCta: {
      eyebrow: "Application review",
      title: "Define the fluid system before selecting the polymer.",
      body:
        "Send the component drawing and the pressures, medium, temperatures, mating bore, clearances, seals, actuation, flow targets, and failure details you already know. Taiyi Polymer can help determine whether a PLATFORM POM direction merits sampling, identify available grade data or document paths, and define a possible valve-level evaluation step. Final selection must be validated in the production-intent valve.",
    },
  },
  {
    slug: "textile-guide-components",
    seo: {
      title: "Textile Guide Components | POM Material Selection",
      description:
        "Review yarn, speed, tension, contact geometry, surface finish, wear, static control, molding, and validation for molded textile guide components.",
      image: "/applications/parts/textile-machinery-hero.webp",
      imageAlt: "Textile machinery with yarn paths and guide mechanisms",
    },
    hero: {
      eyebrow: "Yarn handling components",
      title: "Textile guide components",
      summary:
        "Screen a practical material direction for molded yarn guides where tension drift, filament damage, groove wear, deposits, or static behavior is limiting production. Evaluate the yarn, contact surface, geometry, speed, environment, and service life together.",
      scope:
        "For yarn eyes, thread and separator guides, slotted guides, hooks, shoes, traverse bodies, and molded guide carriers.",
      image: "/applications/parts/textile-machinery-hero.webp",
      imageAlt:
        "Textile production line showing yarn paths, guide mechanisms, and continuous-duty operation",
      reviewInputs: [
        { label: "Yarn", value: "Type, construction, and finish" },
        { label: "Motion", value: "Speed, tension, and duty" },
        { label: "Contact", value: "Radius, wrap, and alignment" },
        { label: "Surface", value: "Finish, edges, and wear" },
        { label: "Environment", value: "Humidity, fly, oils, cleaners" },
        { label: "Target", value: "Yarn quality and guide life" },
      ],
    },
    copy: {
      reviewInputsLabel: "Inputs for textile-guide material review",
      problemTitle: "Start with the yarn-path problem.",
      problemSummary:
        "Tension, breakage, wear, or static symptoms can originate in yarn construction, contact geometry, guide alignment, surface defects, deposits, environment, or material behavior. Inspect the actual yarn path first.",
      materialSummary:
        "These directions are starting points for yarn-contact or structural-guide review, not universal friction or service-life approvals. The production yarn and molded contact surface determine what deserves validation.",
      processSummary:
        "The first discussion narrows the yarn, surface, geometry, wear, and static-control risks. It does not replace production-yarn testing or machine validation over representative operating time.",
    },
    decisionRows: [
      {
        symptom: "Increasing yarn tension or unstable running",
        review:
          "Check yarn type and finish, guide deposits, contact radius, wrap angle, alignment, speed, input tension, vibration, and surface condition.",
        direction:
          "Screen a low-friction POM direction only when the molded yarn-contact interface remains the governing cause.",
      },
      {
        symptom: "Yarn breakage, fuzz, or filament damage",
        review:
          "Inspect the active path under magnification for flash, scratches, sharp transitions, gate or trimming marks, deposits, and worn grooves.",
        direction:
          "Compare compounds only after tooling finish, edge geometry, contamination, and machine alignment meet the yarn requirement.",
      },
      {
        symptom: "Rapid groove wear or yarn-path drift",
        review:
          "Review yarn abrasiveness, tension, speed, contact area, operating hours, wear profile, guide material, and whether the contact duty exceeds a thermoplastic window.",
        direction:
          "Evaluate wear-resistant POM, a ceramic insert, or another contact architecture according to the demonstrated wear mechanism.",
      },
      {
        symptom: "Static buildup, fiber fly, or dust attraction",
        review:
          "Define the electrical target, test method, humidity, yarn behavior, mounting, machine-frame connection, grounding path, and contamination.",
        direction:
          "Consider conductive or static-dissipative compounds only as one part of a validated installed charge-control system.",
      },
    ],
    materialDirections: [
      {
        title: "Balanced / unfilled POM",
        summary:
          "A baseline for molded guide bodies and selected contact features needing dimensional stability, low moisture sensitivity, moldability, and useful sliding behavior.",
        caution:
          "Test with the production yarn, finish, tension, speed, geometry, environment, and expected service life.",
      },
      {
        title: "Wear-resistant or low-friction POM",
        summary:
          "A candidate when testing shows yarn drag, polymer wear, noise, or friction-related instability limits a sound guide design.",
        caution:
          "A compound optimized against metal does not automatically perform the same way against every yarn construction or finish.",
      },
      {
        title: "Reinforced POM for carriers",
        summary:
          "A structural direction for guide bodies, brackets, or mounting arms where stiffness and alignment matter more than direct contact-surface behavior.",
        caution:
          "Fiber orientation can change warpage, guide alignment, surface evolution, and yarn damage if reinforcement lies on the active path.",
      },
      {
        title: "Conductive or static-dissipative compounds",
        summary:
          "A project-specific direction when yarn attraction, lint buildup, or process instability is linked to a defined electrostatic requirement.",
        caution:
          "Electrical performance depends on the installed mounting and ground path and must be checked across relevant humidity, contamination, and wear conditions.",
      },
    ],
    materialNote:
      "High-speed continuous contact, abrasive technical yarns, or a long-life polished contact surface may require technical ceramic or a molded carrier with a ceramic insert. Select the contact architecture from the failure mechanism rather than forcing all-plastic construction.",
    inquiryGroups: [
      {
        title: "Guide and machine",
        items: [
          "Part drawing or 3D model, guide function, machine position, and mounting datums",
          "Eye, slot, hook, radius, entry, exit, wrap angle, and active contact regions",
        ],
      },
      {
        title: "Yarn specification",
        items: [
          "Yarn or filament type, construction, size, abrasiveness, and family changes",
          "Spin finish, lubricant, coating, moisture condition, and known yarn sensitivity",
        ],
      },
      {
        title: "Speed and tension",
        items: [
          "Normal and maximum line speed, input tension, output target, and operating hours",
          "Continuous or intermittent duty, reversals, starts, stops, and vibration",
        ],
      },
      {
        title: "Surface and geometry",
        items: [
          "Required yarn-contact finish, edge condition, radii, slot or eye dimensions, and alignment",
          "Current deposits, scratches, flash, groove location, wear profile, or yarn-damage evidence",
        ],
      },
      {
        title: "Environment",
        items: [
          "Temperature, humidity, fiber fly, dust, oils, spin finishes, and lubricants",
          "Cleaning fluids, concentrations, temperatures, exposure duration, and frequency",
        ],
      },
      {
        title: "Target and status",
        items: [
          "Current material, tooling stage, cavity count, production volume, and failure symptom",
          "Target guide life, yarn quality, allowable tension drift, electrical behavior, and documents",
        ],
      },
    ],
    processSteps: [
      {
        title: "Define the yarn path",
        body:
          "Map the yarn, finish, tension, speed, contact geometry, surface condition, alignment, environment, and acceptance targets.",
      },
      {
        title: "Compare contact and carrier directions",
        body:
          "Compare relevant POM directions or hybrid contact architecture and, where verified, available grade data against the governing failure.",
      },
      {
        title: "Plan yarn and machine validation",
        body:
          "Set molded-surface, tension, yarn-damage, wear, static, dimensional, and machine-endurance checks using production yarn and operating conditions.",
      },
    ],
    processOutcome:
      "A candidate contact and carrier direction and, where verified, a grade shortlist, document path, and proposed production-yarn evaluation step — not automatic final approval.",
    technicalDetails: [
      {
        value: "textile-review",
        title: "Yarn-contact review criteria",
        summary:
          "The yarn, motion, geometry, surface, and environment inputs that govern guide performance.",
        groups: [
          {
            title: "Yarn and operating profile",
            items: [
              "Define yarn construction, finish, abrasiveness, tension, normal and maximum speed, duty, operating hours, and changes between yarn families.",
              "Use production yarn rather than an unrelated laboratory counterface when comparing friction, wear, deposits, or surface damage.",
            ],
          },
          {
            title: "Contact system and environment",
            items: [
              "Review contact radius, wrap angle, entry and exit direction, alignment, active surface, and where the yarn actually loads the guide.",
              "Define humidity, fiber fly, oils, finishes, cleaners, temperature, static target, mounting, and ground path.",
            ],
          },
        ],
      },
      {
        value: "textile-tooling",
        title: "Guide design, tooling, and molding",
        summary:
          "Controls that protect yarn-contact surfaces, radii, slots, alignment, and cavity consistency.",
        groups: [
          {
            title: "Contact-surface control",
            items: [
              "Keep gates, trimming marks, ejector witness, flash, mismatch, and problematic parting lines away from the active yarn path.",
              "Specify tool polish, contact radius, slot or eye geometry, edge transitions, and inspection criteria as functional requirements.",
            ],
          },
          {
            title: "Dimensions and alignment",
            items: [
              "Control shrinkage and packing around eyes, slots, and narrow channels, and relate the contact feature to the mounting datum.",
              "Compare warpage, surface finish, gate trimming, contact geometry, and functional behavior by cavity.",
            ],
          },
        ],
      },
      {
        value: "textile-validation",
        title: "Validation with production yarn",
        summary:
          "Checks that connect molded surfaces to stable yarn quality and machine operation.",
        groups: [
          {
            title: "Controlled comparison",
            items: [
              "Compare molded candidate surfaces with production yarn under controlled tension, speed, contact geometry, wrap, finish, and environment.",
              "Measure input-to-output tension change and inspect both yarn and guide for damage, deposits, wear, and groove formation.",
            ],
          },
          {
            title: "Machine endurance",
            items: [
              "Run production-intent guides at representative machine speed, tension, alignment, duty, humidity, contamination, oils, and cleaning cycles.",
              "Track yarn tension, breakage, fuzz, filament damage, guide wear, deposits, static behavior, dimensions, and surface condition over time.",
            ],
          },
        ],
      },
      {
        value: "textile-checklist",
        title: "Full project checklist",
        summary:
          "The complete input set for a deeper material and textile-machine review.",
        groups: [
          {
            title: "Guide, yarn, and machine",
            items: [
              "Drawing, guide role, machine position, mounting, yarn type, finish, tension, speed, geometry, alignment, current material, tooling stage, and volume",
              "Contact radius, wrap, slot or eye dimensions, surface requirement, operating hours, yarn-family changes, and current wear or damage pattern",
            ],
          },
          {
            title: "Environment and acceptance",
            items: [
              "Temperature, humidity, fiber fly, oils, lubricants, cleaning chemistry, static target, test method, mounting, and grounding path",
              "Target guide life, yarn quality, allowable tension drift, wear, static behavior, current failures, and required document paths",
            ],
          },
        ],
      },
    ],
    related: [
      {
        label: "Wear-Resistant & Low-Friction POM",
        description:
          "Review when tribological modification is useful and why the production yarn must govern comparison.",
        href: "/resources/wear-resistant-low-friction-pom-selection-guide",
      },
      {
        label: "Conductive & Antistatic Material Selection",
        description:
          "Define electrical targets, conditioning, installed continuity, and the complete static-control path.",
        href: "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide",
      },
      {
        label: "Processing Guide",
        description:
          "Review contact-surface tooling, flash, warpage, shrinkage, gate location, and cavity consistency.",
        href: "/resources/processing-guide",
      },
    ],
    finalCta: {
      eyebrow: "Application review",
      title: "Match the guide material to the yarn and machine.",
      body:
        "Send the guide drawing and the yarn, speed, tension, contact geometry, surface, environment, static, target-life, and failure details you already know. Taiyi Polymer can help narrow candidate PLATFORM POM directions, identify available grade data or document paths, and define a possible production-yarn evaluation step. Final selection must be validated in the production-intent machine.",
    },
  },
  {
    slug: "ic-handling-trays",
    seo: {
      title: "IC Handling Trays | ESD Material Selection and Design",
      description:
        "Review ESD behavior, tray flatness, pocket geometry, process temperature, cleanliness, automation, molding, and qualification for IC handling trays.",
      image: "/applications/parts/electronics-chip-holder.png",
      imageAlt: "Black molded matrix tray for precision electronic-component handling",
    },
    hero: {
      eyebrow: "Semiconductor handling",
      title: "IC handling trays",
      summary:
        "Determine whether an electrically modified POM or another polymer direction merits review for a precision handling tray. ESD classification, process temperature, flatness, pocket geometry, cleanliness, automation, and reuse conditions must be defined together.",
      scope:
        "For matrix trays and molded carriers used to transport, store, sort, test, or present packaged semiconductor devices.",
      image: "/applications/parts/electronics-chip-holder.png",
      imageAlt:
        "Black molded matrix tray with repeated precision pockets and stacking features",
      reviewInputs: [
        { label: "ESD", value: "Classification and test method" },
        { label: "Temperature", value: "Process, duration, and cycles" },
        { label: "Flatness", value: "Tray outline and warpage" },
        { label: "Pockets", value: "Package fit and contact" },
        { label: "Automation", value: "Pitch, datums, and stacking" },
        { label: "Cleanliness", value: "Particles, wear, and reuse" },
      ],
    },
    copy: {
      reviewInputsLabel: "Inputs for IC-tray material review",
      problemTitle: "Start with the handling-process problem.",
      problemSummary:
        "Pickup faults, device movement, ESD failures, particles, or warpage can originate in tray geometry, molding, conditioning, automation, handling, or compound behavior. Diagnose the complete process first.",
      materialSummary:
        "These directions are qualification starting points, not ESD, bake, cleanliness, or device-protection approvals. Electrical and dimensional behavior must be verified on the molded tray in the real handling process.",
      processSummary:
        "The first discussion should eliminate unsuitable electrical and temperature windows early. It does not replace molded-tray measurement, conditioning, or qualification with representative devices and automation.",
    },
    decisionRows: [
      {
        symptom: "Tray warpage or automation pickup failures",
        review:
          "Measure complete-tray flatness, pocket matrix, datums, outline, stacking features, conditioning, gate and flow orientation, cooling, and handler calibration.",
        direction:
          "Compare dimensionally controlled or reinforced directions only when tray architecture and molding balance are already credible.",
      },
      {
        symptom: "Device movement, contact, or pocket damage",
        review:
          "Compare the full package drawing with pocket supports, terminal clearances, draft, corner relief, openings, flash, ejector witness, and loading method.",
        direction:
          "Screen a stable molded-material direction only after the pocket architecture protects the actual semiconductor package.",
      },
      {
        symptom: "ESD classification or charge-control failure",
        review:
          "Define the applicable standard, electrical classification, conditioning, measurement locations, protected area, grounding or contact arrangement, humidity, and reuse state.",
        direction:
          "Evaluate conductive or static-dissipative POM only as a molded-tray system with verified electrical continuity and stability.",
      },
      {
        symptom: "Particle contamination or surface degradation",
        review:
          "Identify filler or surface transfer, flash, trimming debris, damaged pockets, wear, cleaning effects, thermal exposure, and external handling sources.",
        direction:
          "Compare cleaner formulations or another material path only after the particle source and qualification limit are defined.",
      },
    ],
    materialDirections: [
      {
        title: "Conductive or static-dissipative POM",
        summary:
          "The primary POM direction for trays that directly handle ESD-sensitive devices and whose validated thermal window suits the process.",
        caution:
          "Resistance, charge behavior, filler cleanliness, flow, shrinkage, flatness, pocket dimensions, wear, and reuse stability require molded-tray qualification.",
      },
      {
        title: "Dimensionally controlled or reinforced POM",
        summary:
          "A project direction when tray stiffness or long-span deformation limits an otherwise suitable lower-temperature POM system.",
        caution:
          "Flow orientation can create directional shrinkage and warpage and can change ESD behavior or the surface exposed to the semiconductor.",
      },
      {
        title: "Unfilled POM for non-ESDS fixtures",
        summary:
          "A possible direction for mechanical dividers, alignment parts, or associated handling components that do not directly require ESD control.",
        caution:
          "Conventional unfilled POM is not a default ESD-tray material; direct ESDS handling requires a verified electrical specification.",
      },
      {
        title: "PPA or another high-temperature direction",
        summary:
          "A separate path when process temperature, duration, loading, or reuse exceeds the validated POM window.",
        caution:
          "Higher thermal capability does not automatically qualify a bakeable tray; ESD, flatness, pocket accuracy, cleanliness, processing, and thermal cycles still govern approval.",
      },
    ],
    materialNote:
      "Process temperature can eliminate POM early. If the tray must remain dimensionally accurate through demanding bake or repeated high-temperature cycles, evaluate a dedicated high-temperature material system rather than stretching an unverified POM claim.",
    inquiryGroups: [
      {
        title: "Device and pocket",
        items: [
          "Complete semiconductor package drawing, terminal geometry, pickup surface, and orientation",
          "Pocket supports, clearance, draft, relief, pitch, matrix, openings, and allowed movement",
        ],
      },
      {
        title: "Tray standard and geometry",
        items: [
          "Required tray outline or standard, first-pocket datum, row and column pitch",
          "Flatness, stacking rails, orientation features, magazine, and tray-stack requirements",
        ],
      },
      {
        title: "ESD requirement",
        items: [
          "Applicable ESD standard, electrical classification, resistance or charge target, and test method",
          "Conditioning, measurement locations, protected area, grounding, and contact arrangement",
        ],
      },
      {
        title: "Thermal process",
        items: [
          "Maximum temperature, duration, number of cycles, loading, and whether devices remain in the tray",
          "Humidity, storage, cooling, stacking load, cleaning, and reuse sequence",
        ],
      },
      {
        title: "Automation and cleanliness",
        items: [
          "Handler, magazine, de-stacker, elevator, pick-and-place, and calibration interfaces",
          "Particle, contamination, outgassing, surface-transfer, cleaning, and wear requirements",
        ],
      },
      {
        title: "Target and status",
        items: [
          "Current material, tooling stage, cavity count, production volume, and failure symptom",
          "Qualification sequence, reuse target, critical dimensions, acceptance limits, and documents",
        ],
      },
    ],
    processSteps: [
      {
        title: "Define the qualification boundary",
        body:
          "Screen the device, tray standard, ESD requirement, process temperature, flatness, pocket geometry, automation, cleanliness, and reuse conditions.",
      },
      {
        title: "Compare candidate systems",
        body:
          "Compare electrically modified POM or higher-temperature alternatives and, where verified, available grade data against the governing process risk.",
      },
      {
        title: "Plan molded-tray qualification",
        body:
          "Set electrical, dimensional, thermal, cleanliness, stacking, device-fit, and automation checks for production-intent trays.",
      },
    ],
    processOutcome:
      "An early material-window decision and, where appropriate, a candidate system, grade shortlist, document path, and proposed molded-tray qualification step — not automatic final approval.",
    technicalDetails: [
      {
        value: "tray-review",
        title: "IC-tray review criteria",
        summary:
          "The electrical, thermal, dimensional, cleanliness, and handling inputs that govern tray fit.",
        groups: [
          {
            title: "ESD and process conditions",
            items: [
              "Define the applicable ESD standard, electrical classification, test method, conditioning, measurement locations, handling area, and grounding arrangement.",
              "Specify maximum temperature, duration, cycles, device loading, stacking load, humidity, cleaning, cooling, and reuse history.",
            ],
          },
          {
            title: "Device and automation interface",
            items: [
              "Use the complete package drawing to define contact points, terminal clearance, pickup surface, orientation, acceptable movement, and loading method.",
              "Coordinate tray outline, datums, first pocket, matrix pitch, flatness, stack features, magazines, and automated handler requirements.",
            ],
          },
        ],
      },
      {
        value: "tray-tooling",
        title: "Tray design, tooling, and molding",
        summary:
          "Controls that protect flatness, pocket position, ESD behavior, cleanliness, and stacking.",
        groups: [
          {
            title: "Tray architecture",
            items: [
              "Balance the outer frame, pocket walls, ribs, stacking rails, and local thickness so stiffness does not create asymmetric shrinkage.",
              "Protect package-contact regions from flash, ejector marks, gate residue, sharp edges, or surfaces that can shed particles.",
            ],
          },
          {
            title: "Flow and production control",
            items: [
              "Review gate position, melt-flow orientation, filler distribution, packing, mold temperature, cooling balance, and cavity variation.",
              "Measure complete-tray flatness, matrix position, pocket dimensions, outline, and stacking features after molding and relevant conditioning.",
            ],
          },
        ],
      },
      {
        value: "tray-validation",
        title: "Validation on molded trays",
        summary:
          "Checks that connect compound data to device protection and automated handling.",
        groups: [
          {
            title: "Molded-tray checks",
            items: [
              "Measure electrical behavior at representative locations together with flatness, pocket dimensions, matrix position, outline, stack features, surface condition, and device fit.",
              "Expose trays to the intended temperature, humidity, cleaning, stacking, loading, unloading, and reuse conditions before remeasurement.",
            ],
          },
          {
            title: "Process qualification",
            items: [
              "Run production-intent trays through the actual magazines and semiconductor-handling equipment with representative devices.",
              "Track pickup, device movement, warpage, ESD behavior, particles, surface damage, stacking, and dimensional drift across the qualification sequence.",
            ],
          },
        ],
      },
      {
        value: "tray-checklist",
        title: "Full project checklist",
        summary:
          "The complete input set for a deeper material and IC-tray qualification review.",
        groups: [
          {
            title: "Device, tray, and process",
            items: [
              "Package drawing, tray standard, outline, matrix, pockets, datums, flatness, stack features, ESD requirement, temperature cycle, automation, cleaning, reuse, current material, tooling stage, and volume",
              "Package contact limits, pickup method, magazine and handler interfaces, conditioning, loading, storage, critical dimensions, and current failure location",
            ],
          },
          {
            title: "Qualification and documents",
            items: [
              "Electrical, dimensional, thermal, cleanliness, particle, contamination, surface-transfer, device-fit, stacking, and automation acceptance requirements",
              "Available TDS, SDS, COA, REACH, RoHS, or other grade-specific document paths and customer qualification records required",
            ],
          },
        ],
      },
    ],
    related: [
      {
        label: "Conductive & Antistatic Material Selection",
        description:
          "Define electrical classifications, conditioning, test methods, fillers, and system-level charge control.",
        href: "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide",
      },
      {
        label: "PPA vs PA66 Material Selection",
        description:
          "Review when temperature and hot/wet dimensional performance justify a higher-temperature material path.",
        href: "/resources/ppa-vs-pa66-material-selection",
      },
      {
        label: "Processing Guide",
        description:
          "Review warpage, filler orientation, gate location, packing, cooling, pocket accuracy, and molding trials.",
        href: "/resources/processing-guide",
      },
    ],
    finalCta: {
      eyebrow: "Application review",
      title: "Define the handling process before selecting the tray material.",
      body:
        "Send the package drawing and the tray standard, ESD requirement, process temperature, pocket geometry, flatness, automation, cleanliness, reuse, and failure details you already know. Taiyi Polymer can help determine whether a PLATFORM POM or another candidate direction merits molding, identify available grade data or document paths, and define a possible tray-qualification step. Final selection must be validated in the production-intent handling process.",
    },
  },
] as const satisfies readonly ComponentSolutionDetail[];

export const getComponentSolutionDetailBySlug = (slug: string) =>
  componentSolutionDetails.find((solution) => solution.slug === slug);
