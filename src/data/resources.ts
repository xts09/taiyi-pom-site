export type ResourceFaqItem = {
  question: string;
  answer: string;
};

export type ResourceModule = {
  title: string;
  navLabel?: string;
  description: string;
  points?: string[];
  faqItems?: ResourceFaqItem[];
};

export type ResourcePage = {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  intro: string;
  modules: ResourceModule[];
  relatedLinks: Array<{
    label: string;
    href: string;
  }>;
};

export const resourcePages: ResourcePage[] = [
  {
    slug: "material-selection-guide",
    title: "Material Selection Guide",
    navLabel: "Material Selection Guide",
    description:
      "A practical POM material selection guide for comparing wear-resistant, low-friction, reinforced, conductive, antistatic, UV, and high-impact compounds.",
    intro:
      "Selecting a modified POM compound should begin with the molded part, its working conditions, and the failure risk the material must solve. This guide gives buyers and engineers a practical framework for comparing wear-resistant, low-friction, reinforced, conductive, antistatic, UV-resistant, and high-impact POM directions. It also explains how to read common TDS items such as MFI, tensile and flexural performance, impact strength, HDT, and molding shrinkage. Final suitability should always be confirmed with the selected grade TDS, part design review, and application-specific molding trials.",
    modules: [
      {
        title: "Quick Selection Logic",
        description:
          "Use this section as an initial screening guide before reviewing detailed TDS values or arranging molding trials. The final choice should still be checked against the actual part design and working conditions.",
        points: [
          "Use wear-resistant POM when repeated sliding, abrasion, or counterpart wear is the main performance risk.",
          "Use low-friction POM when actuation force, stick-slip, noise, or smooth movement is more important than simple strength.",
          "Use reinforced POM when stiffness, dimensional stability, or creep resistance matters, while reviewing impact and surface trade-offs.",
          "Use conductive or antistatic POM after confirming resistance target, test method, grounding concept, and acceptable variation.",
          "Use UV-resistant or high-impact POM when outdoor exposure, drop shock, vibration, or assembly impact is part of the application.",
        ],
      },
      {
        title: "Start From The Part Requirement",
        description:
          "Material selection should start with the molded part, not only with a target property value. The same POM direction can behave differently when geometry, mating materials, and molding conditions change.",
        points: [
          "Define the part function, load type, movement pattern, service life target, and acceptable dimensional or surface change.",
          "Record continuous and peak temperatures, chemical contact, moisture exposure, UV exposure, and any electrical or cleanliness requirements.",
          "Describe mating materials, contact pressure, sliding speed, lubrication conditions, noise limits, and expected wear or friction behavior.",
          "Review wall thickness, ribs, bosses, tolerances, assembly stress, and critical dimensions that may increase shrinkage or warpage risk.",
        ],
      },
      {
        title: "Compare Modified POM Directions And Trade-Offs",
        description:
          "Each modified POM direction solves a different problem and may introduce new trade-offs. Similar grade names from different suppliers should not be treated as equivalent without TDS review and trial comparison.",
        points: [
          "Wear resistance and low friction often overlap, but they solve different problems and require separate validation.",
          "Higher stiffness may improve dimensional stability, but reinforcement can affect toughness, weld lines, shrinkage direction, and surface appearance.",
          "Electrical modification may change color options, flow behavior, mechanical balance, and consistency across different part geometries.",
          "UV or impact modification should be checked against color, aging, strength retention, and the actual service environment.",
          "For replacement projects, compare the current material, failure mode, molded part condition, and required test method before selecting alternatives.",
        ],
      },
      {
        title: "Read The Key TDS Properties",
        description:
          "TDS values are useful comparison points, but they should not be read as direct guarantees for every molded part. Always compare properties using consistent test methods, specimen conditions, and grade-specific documents.",
        points: [
          "MFI indicates relative melt flow under a stated test condition; it does not alone predict mold filling or strength.",
          "Tensile and flexural data help compare strength and stiffness, but part geometry and weld lines influence actual performance.",
          "Impact results depend on test method, notch type, specimen thickness, temperature, and conditioning history.",
          "HDT is a comparative heat-deflection reference under specified load, not a universal continuous-use temperature.",
          "Molding shrinkage is a design and trial reference; flow direction, wall thickness, gate location, and packing affect final dimensions.",
        ],
      },
      {
        title: "Confirm Processing Risk And Recommendation Inputs",
        description:
          "A good material recommendation depends on both application performance and molding feasibility. Sharing complete project information helps avoid selecting a grade that looks suitable on paper but fails during trial production.",
        points: [
          "Do not choose by MFI alone; review flow behavior with mold design, wall thickness, gate layout, and processing window.",
          "For gears, bushings, sliders, and rollers, evaluate wear, friction, noise, lubrication, mating materials, and dimensional stability together.",
          "For tight-tolerance parts, review shrinkage balance, warpage, gate position, cooling, reinforcement orientation, and assembly stress early.",
          "Provide drawings, key dimensions, current material, failure photos, test reports, working conditions, and target acceptance criteria.",
          "Confirm the selected grade TDS before trials, then validate dimensions, appearance, function, and critical properties using the intended mold.",
        ],
      },
    ],
    relatedLinks: [
      { label: "View POM Grades", href: "/products/categories/pom" },
      { label: "Find a TDS", href: "/technical-data-sheets" },
    ],
  },
  // 中文编辑注释：后续替换为 POM 加工/注塑指南正式内容。
  // 建议内容覆盖：干燥、料筒/模温、注射、保压/冷却、收缩翘曲、常见缺陷排查。
  // 没有 verified TDS 前，不写固定绝对温度参数。
  {
    slug: "processing-guide",
    title: "Processing Guide",
    navLabel: "Processing Guide",
    description:
      "A practical POM injection molding guide for material handling, mold trials, shrinkage, warpage, dimensional drift, defects, and troubleshooting inputs.",
    intro:
      "Successful processing of modified POM depends on the interaction between the selected compound, material handling, part geometry, mold design, machine condition, and the required quality window. This guide helps injection molding and mold engineers prepare trials, review POM drying and processing practices, establish a repeatable molding window, and investigate shrinkage, warpage, dimensional drift, and visible defects. It is intended as a structured troubleshooting framework rather than a universal setup sheet. Exact temperatures, pressures, speeds, times, and handling requirements must be reviewed with the selected grade TDS and validated on the intended machine, mold, and inspection method before production approval.",
    modules: [
      {
        title: "Before Molding Trial",
        description:
          "Define what the trial must prove before adjusting settings. A clear baseline prevents material, mold, machine, and measurement issues from being confused.",
        points: [
          "Verify the exact grade, lot, color, modification direction, packaging condition, and current TDS before loading material into the molding system.",
          "Review drawings for wall transitions, ribs, bosses, weld-line locations, cosmetic zones, assembly loads, and dimensions requiring process capability.",
          "Check gate and runner layout, venting, cooling circuits, cavity balance, ejection, mold surface condition, and recent maintenance or modification history.",
          "Confirm machine suitability, shot utilization, screw condition, temperature-control stability, available monitoring, and approved startup, purge, and shutdown procedures.",
          "Agree on trial stages, sample identification, conditioning time, measurement method, acceptance criteria, and which process variables may be changed.",
        ],
      },
      {
        title: "Drying And Material Handling",
        description:
          "Handling requirements vary by grade and storage history. Use grade documents and controlled material flow instead of assuming one drying practice fits every POM compound.",
        points: [
          "Determine whether drying is required from the selected grade TDS, packaging condition, storage history, condensation risk, and plant environment.",
          "Keep virgin material, approved regrind, masterbatch, and trial leftovers clearly separated, labeled, and traceable throughout loading and sample review.",
          "Inspect dryers, hoppers, loaders, filters, and conveying lines for cleanliness, stable operation, dust, residue, or previous-material carryover.",
          "Remove incompatible material carryover through an approved cleaning and purging procedure before introducing the selected POM compound.",
          "Record drying, exposure, transfer, regrind, and handling conditions on the trial sheet so later variation can be investigated.",
        ],
      },
      {
        title: "Injection Molding Review Points",
        description:
          "Build a stable process window by separating filling, packing, cooling, and ejection effects. Change one group of variables at a time and record the result.",
        points: [
          "Review barrel profile, melt condition, screw speed, back pressure, residence time, interruptions, and purging practice with the selected grade TDS.",
          "Establish consistent filling by monitoring the fill pattern, transfer position, peak injection pressure, cushion, part weight, and cavity balance.",
          "Review holding pressure and time against gate sealing, sink, flash, dimensions, and residual stress instead of simply increasing packing.",
          "Use mold temperature and cooling balance as controlled factors for surface replication, shrinkage balance, ejection, and dimensional repeatability.",
          "Collect process records and cavity-identified samples only after conditions stabilize, then verify repeatability across multiple consecutive cycles.",
        ],
      },
      {
        title: "Shrinkage, Warpage And Dimensional Drift",
        description:
          "Dimensional behavior comes from material, geometry, flow, packing, cooling, ejection, and measurement timing together. A single TDS shrinkage value cannot predict every part.",
        points: [
          "Use grade-specific molding shrinkage as an initial tooling reference, then confirm actual dimensions with the intended mold and process window.",
          "Map critical dimensions by flow direction, cross-flow direction, cavity, location, and agreed conditioning time before judging capability.",
          "Review wall-thickness transitions, ribs, bosses, gate position, flow path, cooling balance, packing effectiveness, and ejection stress together.",
          "For reinforced or filled compounds, evaluate orientation, weld lines, and directional shrinkage before changing steel dimensions or material direction.",
          "When dimensions drift, separate process instability, cooling variation, material handling, lot changes, measurement timing, and post-molding relaxation.",
        ],
      },
      {
        title: "Common Defects And Troubleshooting Inputs",
        description:
          "Troubleshoot from evidence rather than appearance alone. Connect each defect to the part location, cavity, process record, material history, and mold condition.",
        points: [
          "For short shots or hesitation, review fill pattern, restrictions, gate capacity, venting, transfer, melt condition, mold condition, and material flow.",
          "For flash, review parting lines, inserts, venting, clamping stability, fill speed, transfer, packing, and changes in material flow behavior.",
          "For sink marks or internal void risk, review local section thickness, ribs, bosses, gate access, gate sealing, packing, and cooling.",
          "For streaks, flow marks, deposits, burning, or discoloration, review contamination, venting, shear, stagnation, handling, mold surface, and degradation signs.",
          "For technical review, share drawings, defect photos, cavity identification, material and lot, process sheet, mold details, trial history, and acceptance criteria.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Discuss Processing Requirement", href: "/contact" },
      { label: "Review POM Category", href: "/products/categories/pom" },
    ],
  },
  // 中文编辑注释：后续替换为 POM 应用笔记正式内容。
  // 建议按应用场景写：汽车、齿轮、轴套、滑块、滚轮、水控、电子电器、工业机械等。
  // 每个应用建议包含：典型零件、工况、常见失效、材料关注点、可互链的站内应用页。
  {
    slug: "application-notes",
    title: "Application Notes",
    navLabel: "Application Notes",
    description:
      "Practical modified POM application notes for automotive parts, gears, bushings, rollers, water-control parts, electronics, machinery, and outdoor components.",
    intro:
      "Modified POM compounds are used across molded applications where dimensional consistency, wear behavior, friction, stiffness, impact response, electrical performance, or environmental resistance must be balanced. These application notes organize common review points for automotive parts, gears and sliding components, water-control assemblies, electrical components, industrial machinery, and outdoor parts. They are intended to support early material screening, not to assign a universal grade. Final selection depends on part geometry, load, movement, mating materials, chemicals, temperature, regulatory or testing requirements, mold design, and production conditions, and should be confirmed with the selected grade TDS and application-specific trials.",
    modules: [
      {
        title: "Automotive Molded Parts",
        description:
          "Automotive POM applications can include clips, latches, guides, adjustment mechanisms, actuator components, and small precision housings. Review each part by installation location and duty rather than by industry label alone.",
        points: [
          "Typical candidates include clips, latches, guides, adjustment mechanisms, actuator components, precision brackets, and small housings requiring repeatable molding.",
          "Review vibration, repeated actuation, assembly stress, temperature cycling, chemicals, noise, and dimensional retention under the actual installation conditions.",
          "Prioritize fatigue behavior, stiffness, impact resistance, creep control, low friction, or wear resistance according to the dominant failure mode.",
          "Consider reinforced, high-impact, wear-resistant, or low-friction POM directions only after reviewing weld lines, appearance, tolerances, and mating surfaces.",
          "Confirm automotive-specific test methods, substance restrictions, documentation, and approval requirements for each project; do not infer compliance from material family alone.",
        ],
      },
      {
        title: "Gears, Bushings, Sliders And Rollers",
        description:
          "Motion components should be treated as a complete tribological system. Material behavior depends on load, speed, geometry, counterpart, surface condition, lubrication, and operating cycle.",
        points: [
          "Typical parts include spur gears, worm gears, bushings, bearings, guides, sliders, rollers, cams, and other repeated-motion components.",
          "Define torque, load, speed, contact pressure, motion cycle, duty time, alignment, and expected service life before screening materials.",
          "Evaluate friction, wear rate, counterpart wear, noise, heat generation, dimensional stability, and startup behavior as a connected tribological system.",
          "Compare wear-resistant and low-friction POM separately; reduced sliding resistance does not automatically guarantee longer wear life.",
          "Test candidate directions with representative mating materials, lubrication, surface finish, geometry, and operating conditions rather than relying on resin data alone.",
        ],
      },
      {
        title: "Water Control And Valve Parts",
        description:
          "Water-control applications require review of the fluid environment, moving interfaces, sealing function, and dimensional stability. Regulatory or customer approval must be confirmed for the exact material specification.",
        points: [
          "Typical candidates include valve components, actuator parts, faucet or dispenser mechanisms, water-meter internals, guides, gears, and precision sealing supports.",
          "Review water chemistry, disinfectants, temperature cycling, pressure, immersion duration, deposits, dimensional change, and interaction with seals or metals.",
          "Key concerns may include chemical compatibility, creep, wear, friction, surface condition, dimensional stability, and retention of sealing geometry.",
          "Select unfilled, wear-resistant, low-friction, reinforced, or impact-modified directions according to movement, load, tolerances, and sealing function.",
          "Confirm applicable drinking-water, food-contact, regional, or customer-specific approvals for the exact grade and color before specification.",
        ],
      },
      {
        title: "Electrical And Electronic Components",
        description:
          "Electrical and electronic assemblies may require mechanical precision together with controlled electrical behavior. Define the electrical function and test method before comparing conductive, antistatic, or insulating directions.",
        points: [
          "Typical candidates include switch mechanisms, actuator parts, guides, gears, precision carriers, sensor housings, and small mechanical components within assemblies.",
          "Determine whether the part needs electrical insulation, controlled static dissipation, conductivity, dimensional precision, low friction, or impact resistance.",
          "For conductive or antistatic directions, define resistance test method, conditioning, grounding, geometry, and acceptable production variation.",
          "Review how conductive fillers or reinforcement may affect mechanical balance, flow, weld lines, surface quality, color, and dimensional behavior.",
          "Confirm flammability, electrical, substance, and customer test requirements for the exact grade; do not assume one modified POM satisfies all standards.",
        ],
      },
      {
        title: "Industrial Machinery Components",
        description:
          "Industrial components often combine repeated motion, load, contamination, and maintenance constraints. Selection should focus on the actual failure mode and production environment.",
        points: [
          "Typical parts include conveyor guides, rollers, bushings, indexing components, valve actuators, handling fixtures, wear pads, and precision machine elements.",
          "Record load, speed, duty cycle, shock, vibration, contamination, washdown chemicals, lubrication, maintenance access, and acceptable downtime.",
          "Balance stiffness, creep, wear, friction, impact, chemical compatibility, dimensional stability, and counterpart protection around actual failure modes.",
          "Consider reinforced POM for stiffness or dimensional needs, wear-resistant or low-friction directions for motion, and high-impact directions for shock loads.",
          "Where POM cannot meet temperature, chemical, or structural requirements, review PA6, PA66, PPA, or PPS on a project basis.",
        ],
      },
      {
        title: "Outdoor Or UV-Exposed Parts",
        description:
          "Outdoor exposure can affect appearance and mechanical retention over time. Material screening should reflect the actual climate, exposure path, color requirement, load, and validation method.",
        points: [
          "Typical candidates include clips, handles, latches, adjustment parts, guides, small housings, and mechanisms used in outdoor equipment or exposed assemblies.",
          "Define sunlight duration, geographic environment, temperature cycling, moisture, chemicals, color expectations, mechanical load, and intended service life.",
          "Review UV resistance through relevant exposure and retention criteria, including appearance, embrittlement, impact, strength, and dimensional performance.",
          "Consider UV-stabilized, impact-modified, reinforced, or colored POM directions according to exposure, load, appearance, and molding requirements.",
          "Confirm weathering method, test duration, color tolerance, surface criteria, and post-exposure mechanical requirements before approving a material direction.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Browse Applications", href: "/applications" },
      { label: "Request Material Review", href: "/contact" },
    ],
  },
  {
    slug: "faq",
    title: "Modified POM FAQ",
    navLabel: "Modified POM FAQ",
    description:
      "Clear answers about POM vs PA, wear and friction grades, reinforced and conductive POM, TDS properties, shrinkage, warpage, and material selection guidance.",
    intro:
      "Clear answers for early modified POM screening: material family comparison, wear and friction directions, reinforced and functional compounds, TDS properties, shrinkage, warpage, documents, and validation inputs.",
    modules: [
      {
        title: "POM Basics And Grade Selection",
        navLabel: "Basics",
        description:
          "Start with the part requirement and the dominant failure risk. Material-family names or one data-sheet value are not enough to confirm suitability.",
        faqItems: [
          {
            question: "What is modified POM?",
            answer:
              "Modified POM is a polyoxymethylene compound formulated with selected additives, fillers, reinforcements, lubricants, impact modifiers, or electrical modifiers to change a specific property balance. Depending on the formulation, the direction may target wear, friction, stiffness, impact response, UV resistance, conductivity, antistatic behavior, or dimensional control. The word “modified” does not define one universal performance level, so the exact grade TDS and application conditions must be reviewed.",
          },
          {
            question: "How do I choose a POM grade?",
            answer:
              "Begin with the molded part rather than a preferred grade name. Define load, motion, mating material, lubrication, temperature, chemicals, moisture, UV exposure, electrical function, service life, appearance, tolerances, and the current failure mode. Then compare suitable modification directions and their trade-offs. Shortlist grades using current TDS documents, but confirm the final choice through mold review, representative testing, and production-relevant trials.",
          },
          {
            question: "POM vs PA: which is better for molded parts?",
            answer:
              "Neither material family is universally better. POM is often reviewed where dimensional consistency, low moisture uptake, sliding behavior, wear performance, and repeatable precision are important. PA6, PA66, and related polyamides may be considered where a different balance of toughness, temperature performance, reinforcement, or structural behavior is needed, while moisture conditioning may influence dimensions and properties. Compare exact grades under the real environment, not only generic family descriptions.",
          },
          {
            question:
              "Can one supplier's POM grade replace another grade with similar TDS values?",
            answer:
              "Similar headline values do not prove direct equivalence. Formulation, polymer type, additives, color package, test method, specimen conditioning, flow behavior, shrinkage, weld-line response, surface appearance, and required approvals may differ. For replacement projects, compare the current and proposed TDS documents, identify critical properties and processing risks, then run controlled molding and functional tests using the intended part, mold, and acceptance criteria.",
          },
        ],
      },
      {
        title: "Wear, Reinforcement And Functional Modification",
        navLabel: "Modification",
        description:
          "Modified directions solve different engineering problems and may introduce new processing or performance trade-offs. Evaluate the complete part system.",
        faqItems: [
          {
            question:
              "Wear-resistant POM vs low-friction POM: what is the difference?",
            answer:
              "Low-friction POM primarily targets reduced sliding resistance, startup force, stick-slip, or noise. Wear-resistant POM primarily targets lower material loss or longer surface life during repeated contact. A formulation may improve both, but the results are not automatically linked. Performance depends on load, speed, temperature, lubrication, mating material, surface finish, alignment, and cycle. Test candidates as a representative tribological system rather than comparing one friction value alone.",
          },
          {
            question:
              "When should reinforced POM be considered instead of unfilled POM?",
            answer:
              "Reinforced POM may be considered when stiffness, creep control, load retention, or dimensional behavior is more important than the balance offered by an unfilled grade. Reinforcement can also change flow, shrinkage direction, weld-line behavior, impact response, surface appearance, and counterpart wear. The decision should be based on part geometry, load direction, tolerances, assembly stress, and molding feasibility, not simply on the highest tensile or flexural value.",
          },
          {
            question:
              "What should be reviewed before using glass-fiber-reinforced POM?",
            answer:
              "Review fiber orientation, directional shrinkage, warpage, weld-line location, surface requirements, gate position, flow path, ejection, and critical load direction. Glass fiber can increase stiffness, but the molded part may behave differently along and across the flow direction. Also assess toughness, screw or mold wear, mating-surface sensitivity, and whether the existing tool was designed for the new shrinkage balance. Confirm all effects with the exact grade and mold trial.",
          },
          {
            question: "Conductive POM vs antistatic POM: how are they different?",
            answer:
              "They target different electrical resistance ranges and functions. Conductive POM is generally selected when a lower-resistance path is required, while antistatic or static-dissipative POM is used to manage charge accumulation within a defined application window. Terminology and target ranges can vary by specification. Define the required test method, conditioning, part geometry, grounding concept, measurement locations, and acceptable variation before selecting a direction.",
          },
          {
            question:
              "When should UV-resistant POM or high-impact POM be considered?",
            answer:
              "UV-resistant POM may be screened for parts exposed to sunlight or outdoor weathering, while high-impact POM may be screened for drop, shock, vibration, snap-fit, or assembly loads. These are separate requirements and may involve different trade-offs in stiffness, flow, color, surface, and long-term retention. Define the exposure method, impact condition, temperature, color criteria, and post-exposure property requirements, then validate the exact grade under representative conditions.",
          },
        ],
      },
      {
        title: "Reading POM TDS Properties",
        navLabel: "TDS Properties",
        description:
          "Use data-sheet values for structured comparison, not as automatic molded-part guarantees. Test method and conditioning details matter.",
        faqItems: [
          {
            question: "What does MFI mean on a POM TDS?",
            answer:
              "MFI is commonly used to refer to melt mass-flow rate, or MFR, measured under a specified test temperature and load. It is useful for relative comparison when the test conditions are the same. A higher or lower value does not by itself confirm mold filling, strength, surface quality, or processing stability. Review it together with part geometry, gate design, shear sensitivity, machine conditions, and the selected grade's processing guidance.",
          },
          {
            question: "How should tensile and flexural properties be compared?",
            answer:
              "Tensile data describes behavior under pulling load, while flexural data describes response under bending. Compare values only when test methods, specimen geometry, temperature, conditioning, and reporting basis are consistent. Reinforcement orientation and weld lines can make molded-part behavior differ from standard specimens. Use these values to screen stiffness and strength directions, then verify the real load case, safety factors, creep, fatigue, and assembly stress on the finished part.",
          },
          {
            question: "How should impact strength be interpreted?",
            answer:
              "Impact values depend strongly on the test method, notch condition, specimen thickness, temperature, molding quality, and conditioning history. Results from different methods should not be treated as directly interchangeable. A high laboratory impact value also does not guarantee resistance to every drop, snap-fit, or assembly event. Define the actual impact direction, energy, support condition, temperature, and failure criterion, then test molded parts under representative conditions.",
          },
          {
            question: "What does HDT mean, and is it a continuous-use temperature?",
            answer:
              "HDT is a comparative heat-deflection measurement taken under a specified load and test method. It helps compare how test specimens respond as temperature rises, but it is not a universal continuous-use temperature or a complete prediction of part performance. Long-term temperature suitability also depends on load, time, geometry, creep, chemical exposure, cycling, and the required property retention. Confirm the exact grade data and application validation plan.",
          },
          {
            question: "Why do molding shrinkage and warpage vary?",
            answer:
              "TDS shrinkage is an initial reference measured under defined specimen and molding conditions. Actual parts are influenced by wall thickness, flow length, gate location, packing, gate sealing, mold temperature, cooling balance, ejection, cavity variation, reinforcement orientation, and measurement timing. Warpage results from uneven or directional shrinkage across the part. Confirm dimensions with the intended mold, stable process window, agreed conditioning time, and cavity-specific measurement plan.",
          },
        ],
      },
      {
        title: "Documents, Validation And Recommendation Inputs",
        navLabel: "Validation",
        description:
          "Reliable recommendations require the correct grade documents, clear acceptance criteria, and evidence from the intended molding and use conditions.",
        faqItems: [
          {
            question: "What is the difference between a TDS, SDS, and COA?",
            answer:
              "A TDS summarizes typical technical properties and processing or application guidance for a grade. An SDS addresses safe handling, hazards, storage, and emergency information. A COA, when supplied, reports selected lot-specific results against the supplier's release criteria. These documents serve different purposes and should not be treated as interchangeable. Confirm document revision, grade name, color, test method, and whether project-specific declarations are also required.",
          },
          {
            question:
              "Does a POM family name confirm regulatory compliance or customer approval?",
            answer:
              "No. Compliance and approval apply to an exact grade, color, formulation, manufacturing scope, test condition, and document status. A general label such as POM, reinforced POM, conductive POM, food-contact POM, or water-control POM is not enough. Identify the required regulation, standard, regional market, customer specification, and documentation before selection. Obtain current supporting documents for the exact proposed material before approval or production release.",
          },
          {
            question: "Why are molded-part trials required after TDS review?",
            answer:
              "Standard test specimens cannot reproduce every gate, weld line, wall transition, orientation pattern, cooling condition, tolerance, assembly load, or mating surface. Trials show how the selected grade behaves in the intended mold and process window. A useful validation plan should cover filling, appearance, dimensions, warpage, part weight, repeatability, assembly, function, and any critical environmental or durability tests before production approval.",
          },
          {
            question: "What information is needed for a material recommendation?",
            answer:
              "Share the part drawing or model, application, load, motion, mating materials, lubrication, temperature, chemicals, moisture, UV exposure, electrical target, service-life goal, critical dimensions, appearance criteria, and required standards. Also provide the current material and TDS, annual volume, color, mold and machine details, process sheet, samples, defect photos, test reports, failure history, and acceptance criteria. Clear priorities help distinguish mandatory requirements from preferred improvements.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "POM Category FAQ", href: "/products/categories/pom#category-faq" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
];

export const resourceIndexLinks = [
  ...resourcePages.map((page) => ({
    label: page.navLabel,
    href: `/resources/${page.slug}`,
    description: page.description,
  })),
  {
    label: "Technical Data Sheets",
    href: "/technical-data-sheets",
    description:
      "Find available TDS documents and grade references for listed material grades.",
  },
];

export const getResourcePage = (slug: string) =>
  resourcePages.find((page) => page.slug === slug);
