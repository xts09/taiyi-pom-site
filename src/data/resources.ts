import { publicTechnicalLandingLinks } from "@/data/pomLandingPages";

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

export type ResourceArticleSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

type ResourceArticleFeaturePlacement =
  | {
      position: "after-intro";
    }
  | {
      position: "after-section";
      sectionTitle: string;
    };

type ResourceArticleMediaFeature = ResourceArticleFeaturePlacement & {
  type: "media";
  src: string;
  alt: string;
  title: string;
  description: string;
  labels: string[];
};

type ResourceArticleComparisonFeature = ResourceArticleFeaturePlacement & {
  type: "comparison";
  items: Array<{
    title: string;
    description: string;
  }>;
};

type ResourceArticleMatrixFeature = ResourceArticleFeaturePlacement & {
  type: "matrix";
  title: string;
  columns: [string, string, string];
  rows: Array<[string, string, string]>;
};

export type ResourceArticleFeature =
  | ResourceArticleMediaFeature
  | ResourceArticleComparisonFeature
  | ResourceArticleMatrixFeature;

export type ResourcePage = {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  intro: string;
  articleSections?: ResourceArticleSection[];
  articleFeatures?: ResourceArticleFeature[];
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
    articleSections: [
      {
        title: "Start with the Molded Part, Not the Grade Name",
        paragraphs: [
          "A grade name is only a reference point. It does not fully describe whether a material is suitable for a specific molded component. Engineers should first review the function of the part, the failure risks, the required service life, and the production process.",
          "For an existing component, useful starting information includes the current material type, molding method, part dimensions, wall thickness, assembly method, and any known performance issues. Wear marks, cracking, deformation, noise, static accumulation, discoloration, or unstable molding may indicate different material requirements.",
          "For a new component, the selection process should begin with the intended operating conditions. A grade that performs well in a lightly loaded internal mechanism may not be suitable for a continuously moving part, an outdoor application, or a component exposed to aggressive chemicals.",
          "Material names and market references may support initial screening, but they should not be used as the sole basis for selection. The correct question is not which grade is similar, but which material characteristics are required for this part.",
        ],
      },
      {
        title: "Define the Application Conditions Clearly",
        paragraphs: [
          "POM material selection is strongly influenced by the actual working environment. Mechanical requirements should be reviewed together with movement, contact conditions, temperature, chemicals, moisture, UV exposure, and electrical performance.",
          "Load should be considered in terms of both magnitude and duration. A short-term assembly load is different from continuous stress. Static loading, repeated loading, impact loading, and vibration may each require a different balance of stiffness, toughness, and dimensional stability.",
          "Temperature should be reviewed as an operating range rather than a single maximum value. Local frictional heating, nearby heat sources, thermal cycling, and dimensional tolerance requirements may all influence material performance.",
          "Chemical contact must also be defined carefully. Fuel, grease, cleaning agents, process fluids, detergents, and other substances may affect the material differently depending on concentration, exposure time, and temperature.",
        ],
        points: [
          "Sliding, rotating, oscillating, or intermittent movement",
          "Continuous operation or occasional movement",
          "Contact with metal, plastic, rubber, or coated surfaces",
          "Dry running or externally lubricated operation",
          "Surface pressure, speed, and expected operating cycles",
        ],
      },
      {
        title: "Compare Standard, Wear-Resistant, Low-Friction, and High-Impact POM",
        paragraphs: [
          "Standard POM may be considered when the part requires a typical balance of stiffness, dimensional consistency, surface quality, and processing performance. It is often the first option for general precision components without demanding wear, impact, electrical, or environmental requirements.",
          "Wear-resistant POM should be reviewed when material loss, surface damage, or reduced service life is the main concern. Typical applications include gears, bushings, rollers, guides, chain components, and repeated-contact mechanisms. The appropriate formulation depends on the mating surface, contact pressure, motion pattern, lubrication conditions, and expected service duration.",
          "Low-friction POM is selected when reducing resistance to movement, operating force, noise, or stick-slip behavior is more important than simply reducing material loss. Wear resistance and low friction are related, but they are not interchangeable. Both should be evaluated under representative contact conditions.",
          "High-impact POM may be considered for snap-fit parts, clips, latches, assembly components, or mechanisms exposed to sudden loads. Increasing toughness may affect stiffness, surface hardness, dimensional behavior, or other properties, so the required balance should be reviewed against the actual part geometry and failure mode.",
        ],
      },
      {
        title: "When to Consider Glass Fiber or Carbon Fiber Reinforced POM",
        paragraphs: [
          "Glass fiber reinforced POM may be considered when higher stiffness, improved load-bearing capability, or reduced deformation is required. It can be relevant for structural parts, support components, precision mechanisms, and applications where standard POM does not provide sufficient rigidity.",
          "Reinforcement does not automatically make a material better for every component. Glass fiber can affect mold flow, surface appearance, anisotropic shrinkage, dimensional behavior, and wear against mating surfaces. For tight-tolerance parts, engineers should review gate position, flow path, weld lines, wall thickness, and fiber orientation.",
          "Carbon fiber reinforced POM may be considered where high stiffness, lower deformation, electrical conductivity, or reduced weight relative to some highly filled systems is required. It may also offer different friction and wear behavior from glass fiber reinforced grades.",
          "The choice between unfilled, glass fiber reinforced, carbon fiber reinforced, and other modified directions should be based on the complete performance balance, not only on the highest stiffness value.",
        ],
      },
      {
        title: "Conductive, Antistatic, UV-Resistant, and High-Impact Directions",
        paragraphs: [
          "Conductive and antistatic POM should be reviewed when the molded part must manage electrical charge, reduce static accumulation, or meet a defined resistance target. The required range, measurement method, part geometry, conditioning, and grounding concept should be confirmed before a grade is selected.",
          "Electrical modification can influence color, flow, mechanical balance, surface appearance, and processing behavior. A conductive or antistatic description should therefore be treated as one part of the material review, not as a complete specification.",
          "UV-resistant POM may be considered for parts exposed to sunlight, outdoor conditions, or light-aging requirements. UV resistance should not be treated as a guarantee of unlimited outdoor service. Final suitability depends on temperature, moisture, chemicals, stress, color requirement, and the geometry of the molded component.",
        ],
      },
      {
        title: "How to Read a POM TDS Cautiously",
        paragraphs: [
          "A technical data sheet is useful for comparing materials, but it should not be read as a direct prediction of molded-part performance. TDS values are generally obtained under controlled test conditions using defined specimen geometries, conditioning procedures, and test methods.",
          "Mechanical values such as tensile strength, flexural modulus, impact performance, and elongation help describe the material, but they do not fully represent a complex component. Wall thickness, weld lines, fiber orientation, internal stress, molding conditions, and part design can produce different results.",
          "Flow data should also be reviewed cautiously. A higher or lower melt flow value does not independently determine whether a material will fill a mold successfully. Gate size, flow length, wall thickness, venting, tool temperature, machine capability, and the additive system all influence processing behavior.",
          "Wear and friction data require particular care because they depend strongly on the mating material, surface roughness, load, speed, lubrication, temperature, and test method. A single laboratory value cannot represent every moving component.",
        ],
      },
      {
        title: "Why Molded-Part Trials Are Necessary",
        paragraphs: [
          "Standard test specimens cannot reproduce every detail of a production part. Molded-part trials help confirm how the selected material behaves in the intended mold, geometry, machine, processing window, and application environment.",
          "During trial review, engineers should evaluate filling behavior, appearance, dimensions, warpage, shrinkage, weld lines, ejection, part weight consistency, assembly performance, and functional testing. For moving parts, wear, friction, noise, and counterpart behavior should be tested under representative conditions.",
          "Final suitability should be confirmed through TDS review, molded-part trials, and application testing under conditions that represent actual use.",
        ],
      },
      {
        title: "What to Send for Material Review",
        paragraphs: [
          "A useful material review requires more than a grade name. Providing complete application information helps the supplier identify the most appropriate modification direction and avoid unnecessary sampling.",
          "Based on this information, standard POM or a modified direction such as wear-resistant, low-friction, reinforced, conductive, antistatic, UV-resistant, or high-impact POM may be considered. The final material should be confirmed through technical data review, molding trials, and application testing.",
        ],
        points: [
          "Part name, drawing, photo, or application description",
          "Current material and current performance issues",
          "Required stiffness, impact, wear, friction, or electrical behavior",
          "Type of movement and mating material",
          "Load, speed, pressure, and expected service cycle",
          "Operating temperature and environmental exposure",
          "Contact with chemicals, oils, cleaners, fuel, or water",
          "Indoor or outdoor use and expected UV exposure",
          "Color, surface, dimensional, and processing requirements",
          "Existing TDS, test reports, or failed-part observations",
        ],
      },
    ],
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
  {
    slug: "wear-resistant-low-friction-pom-selection-guide",
    title: "Wear-Resistant and Low-Friction POM Selection Guide",
    navLabel: "Wear / Low-Friction POM Guide",
    description:
      "A practical guide to selecting wear-resistant and low-friction POM for gears, bushings, rollers, sliders, guides, and valve moving parts.",
    intro:
      "Selecting POM for a moving component is not simply a matter of choosing the grade described as having the lowest friction or highest wear resistance. A gear, bushing, roller, slider, guide part, or moving valve component operates as part of a tribological system. Its performance depends on the molded material, mating surface, contact pressure, movement pattern, speed, lubrication, temperature, surface finish, and dimensional stability of the assembly.",
    articleSections: [
      {
        title: "Wear Resistance and Low Friction Are Not the Same Requirement",
        paragraphs: [
          "Wear resistance describes how well a material resists surface loss, scoring, deformation, or other damage during repeated contact. Low friction describes the resistance generated when one surface begins or continues to move against another. These properties are related, but they should not be treated as interchangeable.",
          "A low-friction material may reduce operating force without necessarily providing the longest wear life under high load. Conversely, a highly wear-resistant material may maintain its dimensions over repeated cycles but still produce more friction, noise, or heat than the application allows.",
          "The distinction becomes important in practical component selection. A bushing may need long service life with minimal dimensional change. A slider may require smooth initial movement and limited stick-slip. A gear may need stable tooth geometry, acceptable noise, and controlled wear on both surfaces. A valve moving part may need predictable movement after long periods of inactivity.",
        ],
        points: [
          "Is the molded POM part wearing too quickly?",
          "Is the mating component being damaged?",
          "Is the movement force too high or inconsistent?",
          "Is the mechanism producing noise, vibration, or stick-slip?",
          "Is external lubrication unavailable or undesirable?",
          "Is dimensional change affecting positioning or sealing?",
        ],
      },
      {
        title: "Review Load, Speed, and Movement Pattern Together",
        paragraphs: [
          "Load should be reviewed at the contact surface, not only as the total force applied to the component. A small contact area can create high local pressure even when the overall load appears moderate. Edge contact, misalignment, sharp geometry, and uneven assembly can further increase local stress.",
          "Speed also influences wear and friction behavior. Slow movement can create stick-slip or high breakaway force, while faster movement may generate frictional heat. The effect of speed depends on the load, mating surface, lubrication condition, and movement duration.",
          "Continuous rotation, repeated oscillation, short sliding strokes, and occasional actuation do not produce the same wear conditions. A roller running continuously may require a different material direction from a valve component that remains stationary for long periods and then moves suddenly.",
          "For relatively demanding wear conditions, Taiyi POM EDM-111 may be reviewed as a high wear-resistant direction. POM EMS162, based on a MoS2-filled high wear-resistant direction, may also be considered where the selected additive system matches the contact conditions. POM ENM1040 provides another option based on a special wear-resistant additive direction.",
        ],
      },
      {
        title: "Mating Material and Surface Finish Can Change the Result",
        paragraphs: [
          "A POM component does not wear independently. Its behavior is strongly affected by the material and surface condition of the part it contacts. Steel, aluminum, brass, coated metal, rubber, POM, PA, and other engineering plastics may each produce different friction and wear results.",
          "Surface finish is equally important. A rough metal surface can act as an abrasive and remove material from the polymer. A damaged, corroded, poorly machined, or contaminated mating surface can cause rapid wear even when a suitable modified POM has been selected.",
          "Hard fillers or reinforcing fibers should also be reviewed for their possible effect on the counterpart. A reinforced POM may improve stiffness and dimensional control but could increase wear on a softer mating surface.",
          "For applications requiring both reinforcement and lubrication, POM EGH20-TF may be considered as a PTFE and glass fiber direction. Aramid fiber or aramid powder filled POM directions may also be reviewed where wear behavior, mechanical support, or a particular contact balance is required.",
        ],
      },
      {
        title: "Selecting PTFE, MoS2, Silicone Oil, or Other Wear Additive Directions",
        paragraphs: [
          "Different wear and lubrication additives influence POM through different mechanisms. They should be selected according to the operating system rather than treated as equivalent methods of achieving self-lubrication.",
          "PTFE-filled POM is commonly considered where reduced friction, smoother sliding, or lower operating force is required. Taiyi POM EPTL402 represents a PTFE-filled direction. POM EGH20-TF combines PTFE with glass fiber and may be considered where the application requires a balance of lubrication and additional stiffness.",
          "MoS2-filled POM, represented by POM EMS162, may be considered for high wear-resistant applications where its solid-lubricant system is appropriate. POM ES0162 represents a silicone-oil-modified high-lubricity direction and may be considered where smooth movement, reduced friction, lower operating force, or improved running feel is important.",
          "POM ENM1040 uses a special wear-resistant additive direction, while POM EDM-111 is positioned as a high wear-resistant direction. These options may be relevant where a customer requires a different balance from conventional PTFE-, MoS2-, or silicone-modified systems.",
        ],
        points: [
          "Required wear life",
          "Static and dynamic friction",
          "Mechanical strength and stiffness",
          "Dimensional tolerance",
          "Counterpart material and hardness",
          "Dry or lubricated service",
          "Noise and movement quality",
          "Surface and secondary-process requirements",
          "Production stability and moldability",
        ],
      },
      {
        title: "Lubrication, Noise, and Stick-Slip Should Be Evaluated Separately",
        paragraphs: [
          "The first question regarding lubrication is whether the component operates dry, with grease or oil, or with occasional contact from process fluids. A material that performs well in dry sliding may not provide the same advantage in an externally lubricated system.",
          "Where external lubrication is not practical, an internally lubricated POM direction may be considered. However, self-lubricating should not be interpreted as meaning that friction and wear are eliminated. The contact system still depends on load, speed, geometry, temperature, mating material, and surface condition.",
          "Noise is also not controlled by friction alone. Gear noise, squeaking, chatter, and vibration may be influenced by dimensional accuracy, stiffness, tooth profile, assembly clearance, surface finish, resonance, lubrication, and molding variation.",
          "Stick-slip occurs when the force required to begin movement is significantly different from the force required to continue movement. It is often important in sliders, guides, adjustment mechanisms, valve controls, seats, and slow-moving components.",
        ],
      },
      {
        title: "Counterpart Wear Can Be More Important Than POM Wear",
        paragraphs: [
          "Material evaluation often focuses only on the weight loss or dimensional change of the POM component. This can produce an incomplete conclusion. The mating surface may experience polishing, scratching, coating removal, abrasion, or dimensional damage even when the POM part appears acceptable.",
          "This is especially important when POM runs against soft metals, plated components, painted surfaces, sealing elements, or another molded polymer. Reinforcing fibers and some functional fillers may alter the wear mechanism of the contact pair.",
          "A successful tribological material should therefore be evaluated as part of a two-surface system. Tests should inspect both the POM component and the counterpart. Engineers may need to review dimensional change, wear debris, surface damage, operating force, temperature rise, noise, and the stability of the contact area.",
          "For gears and similar paired components, the material combination should be considered together. Using the same material on both parts is not always the best solution. Different hardness, surface conditions, geometries, or modification systems may provide a more stable contact pair, but the final combination should be tested.",
        ],
      },
      {
        title: "Why Laboratory Wear and Friction Data Are Not Enough",
        paragraphs: [
          "Laboratory values are useful for preliminary comparison, but tribological results are highly dependent on the test method. A coefficient of friction or wear rate measured under one set of conditions may not predict performance in another system.",
          "Even data from two suppliers may not be directly comparable when the test methods, specimen preparation, conditioning, or counterpart surfaces are different. A lower reported friction value should not automatically be interpreted as better component performance.",
          "Molded parts introduce additional variables that standard laboratory specimens may not represent. These include gate position, weld lines, shrinkage, orientation of fibers or fillers, residual stress, surface replication, part warpage, and dimensional tolerance.",
          "Molded-part trials should therefore reproduce the real assembly as closely as possible. Testing should use the actual counterpart material, representative load and speed, expected lubrication condition, and a meaningful number of operating cycles.",
        ],
        points: [
          "Test specimen geometry",
          "Counterpart material and hardness",
          "Surface roughness",
          "Contact pressure",
          "Sliding speed",
          "Movement direction",
          "Test duration",
          "Temperature and humidity",
          "Dry or lubricated conditions",
          "Initial running-in period",
        ],
      },
      {
        title: "What to Send Before Grade Recommendation",
        paragraphs: [
          "A grade recommendation should not be based only on the statement that the customer needs wear-resistant POM or low-friction POM. More complete application information helps distinguish between EDM-111, EGH20-TF, EMS162, ENM1040, EPTL402, ES0162, aramid-filled directions, or another material approach.",
          "Based on this information, a suitable material direction may be considered. The initial recommendation should then be confirmed by reviewing the applicable TDS, molding representative components, and testing the parts under actual or closely simulated operating conditions.",
        ],
        points: [
          "Part name, drawing, photo, and main function",
          "Current material or current grade",
          "Current failure mode or performance problem",
          "Type of movement: sliding, rotation, oscillation, rolling, or intermittent actuation",
          "Load, contact pressure, speed, sliding distance, and duty cycle",
          "Expected service life or number of cycles",
          "Mating material, hardness, coating, and surface finish",
          "Dry operation or lubricant type",
          "Operating temperature and environmental conditions",
          "Noise, stick-slip, or operating-force requirements",
          "Existing TDS, test reports, wear samples, or failed components",
        ],
      },
    ],
    articleFeatures: [
      {
        type: "media",
        position: "after-intro",
        src: "/applications/parts/gears-moving-mechanical-parts-wide.webp",
        alt: "POM gears, bushings, and rollers used in moving mechanical assemblies",
        title: "Select the contact system, not a material label",
        description:
          "The molded part, counterpart surface, local contact condition, and movement pattern must be reviewed together before a POM direction is narrowed.",
        labels: [
          "Molded POM part",
          "Counterpart surface",
          "Load and speed",
          "Movement cycle",
        ],
      },
      {
        type: "comparison",
        position: "after-section",
        sectionTitle: "Wear Resistance and Low Friction Are Not the Same Requirement",
        items: [
          {
            title: "Wear resistance",
            description:
              "Prioritize controlled surface loss, scoring, and dimensional stability through repeated contact.",
          },
          {
            title: "Low friction",
            description:
              "Prioritize lower operating force, smoother motion, and reduced stick-slip or noise risk.",
          },
        ],
      },
      {
        type: "matrix",
        position: "after-section",
        sectionTitle:
          "Selecting PTFE, MoS2, Silicone Oil, or Other Wear Additive Directions",
        title: "Modified POM directions to review against the application",
        columns: ["Primary selection direction", "Typical review focus", "Taiyi direction"],
        rows: [
          [
            "PTFE-filled POM",
            "Lower sliding resistance and smoother movement",
            "EPTL402",
          ],
          [
            "PTFE + glass fiber POM",
            "Lubrication with additional stiffness support",
            "EGH20-TF",
          ],
          [
            "MoS2-filled POM",
            "High wear-resistant contact conditions",
            "EMS162",
          ],
          [
            "Silicone-oil-modified POM",
            "High lubricity, lower operating force, and running feel",
            "ES0162",
          ],
          [
            "Special wear-resistant directions",
            "A different balance from conventional lubricated systems",
            "ENM1040 / EDM-111",
          ],
        ],
      },
    ],
    modules: [],
    relatedLinks: [
      {
        label: "Wear-Resistant POM Page",
        href: "/wear-resistant-low-friction-pom",
      },
      {
        label: "Material Selection Guide",
        href: "/resources/material-selection-guide",
      },
      { label: "Request Material Review", href: "/contact" },
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

export const resourceIndexGroups = [
  {
    title: "Core Guides",
    description:
      "Long-form technical resources for selection, processing, application screening, and common engineering questions.",
    links: resourcePages.map((page) => ({
      label: page.navLabel,
      href: `/resources/${page.slug}`,
      description: page.description,
    })),
  },
  {
    title: "POM Review Pages",
    description:
      "High-intent technical landing pages for buyers who search by material requirement before they know the exact grade.",
    links: publicTechnicalLandingLinks,
  },
  {
    title: "Technical Data",
    description:
      "Grade-level documents and data references used after the material direction has been narrowed.",
    links: [
      {
        label: "Technical Data Sheets",
        href: "/technical-data-sheets",
        description:
          "Find available TDS documents and grade references for listed material grades.",
      },
    ],
  },
];

export const getResourcePage = (slug: string) =>
  resourcePages.find((page) => page.slug === slug);
