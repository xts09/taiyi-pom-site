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
    articleFeatures: [
      {
        type: "media",
        position: "after-intro",
        src: "/generated/pom-material-hero.webp",
        alt: "Natural POM pellets beside molded gears and precision components in a materials laboratory",
        title: "Start with the finished part and its operating system",
        description:
          "Material screening connects the molded geometry, working environment, contact conditions, and failure risk before a modified POM direction is selected.",
        labels: [
          "Part function",
          "Operating conditions",
          "Failure mode",
          "Molding validation",
        ],
      },
      {
        type: "matrix",
        position: "after-section",
        sectionTitle:
          "Compare Standard, Wear-Resistant, Low-Friction, and High-Impact POM",
        title: "Initial POM direction screening map",
        columns: ["Material direction", "Primary review focus", "Key trade-off to confirm"],
        rows: [
          [
            "Standard POM",
            "General precision parts requiring balanced stiffness, surface quality, and processability",
            "Confirm no dominant wear, impact, electrical, or outdoor risk",
          ],
          [
            "Wear-resistant POM",
            "Repeated contact, material loss, scoring, and service-life improvement",
            "Validate the mating surface, pressure, speed, and lubrication condition",
          ],
          [
            "Low-friction POM",
            "Lower operating force, smoother movement, noise, and stick-slip control",
            "Low friction does not automatically provide the longest wear life",
          ],
          [
            "High-impact POM",
            "Snap-fits, clips, latches, assembly shock, and sudden loading",
            "Review the resulting stiffness, hardness, and dimensional balance",
          ],
        ],
      },
      {
        type: "comparison",
        position: "after-section",
        sectionTitle: "When to Consider Glass Fiber or Carbon Fiber Reinforced POM",
        items: [
          {
            title: "Glass fiber direction",
            description:
              "Review when stiffness, load support, and deformation control are the main gaps, while checking orientation, surface, and counterpart wear.",
          },
          {
            title: "Carbon fiber direction",
            description:
              "Review when high stiffness, lower deformation, conductivity, or a different friction and weight balance merits investigation.",
          },
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
      { label: "View POM Material Families", href: "/products/categories/pom" },
      { label: "Search Data / TDS", href: "/technical-data-sheets" },
    ],
  },
  {
    slug: "alternative-pom-grade-validation",
    title: "How to Validate an Alternative POM Grade",
    navLabel: "Alternative POM Grade Validation",
    description:
      "A controlled method for comparing an alternative POM grade through documents, molding behavior, dimensions, function, compliance, and release evidence.",
    intro:
      "Similar TDS values do not establish that two POM grades are interchangeable. Polymer type, molecular-weight or flow family, additives, reinforcement, color package, test method, specimen conditioning, shrinkage response, processing window, weld lines, surface quality, wear behavior, and document status can all differ. An alternative grade should be qualified for the exact part, mold, process, application, and approval requirements. This guide separates the work into four gates: document review, process and mold trial, molded-part validation, and controlled production release.",
    articleSections: [
      {
        title: "Define What Equivalent Means for This Project",
        paragraphs: [
          "Start by defining the reason for the change and the boundary that must remain unchanged. The project may involve supply continuity, regional sourcing, cost, a discontinued grade, a performance issue, or a new document requirement. Record the exact current grade, color, supplier, manufacturing scope, approved specification, mold, process, application, and any customer or regulatory approvals attached to it.",
          "Equivalence is application-specific. One candidate may mold and assemble correctly but fail a wear test; another may meet mechanical targets but change shrinkage, color, emissions, or document status. Separate mandatory requirements from preferred improvements and state the test, conditioning, sample basis, and acceptance limit for each requirement before requesting or trialing a substitute.",
        ],
        points: [
          "Reason for change and deadline without assuming immediate interchangeability",
          "Exact incumbent grade, color, documents, process and approved application",
          "Mandatory dimensions, appearance, function, durability and compliance",
          "Baseline result, test method, conditioning and acceptance limit",
        ],
      },
      {
        title: "Compare Documents on the Same Basis",
        paragraphs: [
          "Confirm whether each material is POM homopolymer or copolymer and identify the flow family, impact modification, lubricant or wear package, reinforcement or filler, electrical modification, UV package, color, and other declared features. Similar material-family names can hide formulation differences that affect molding and service behavior.",
          "Compare TDS values only when the units, test standards, specimen geometry, direction, temperature, conditioning, and test load are compatible. MFR or MVR values require the same test temperature and load. Tensile, flexural, impact, HDT, shrinkage, electrical, and tribology results may not be directly comparable when methods differ. Treat typical TDS values as screening information, not lot-release limits or finished-part guarantees.",
        ],
        points: [
          "Current TDS revision, SDS, processing guide and grade nomenclature",
          "Test method, unit, specimen, orientation, conditioning and reporting basis",
          "Grade- and color-specific declarations, approvals and restricted-substance documents",
          "COA availability, reported lot properties and supplier change-control arrangements",
        ],
      },
      {
        title: "Build a Part-Specific Risk Comparison",
        paragraphs: [
          "Translate every material difference into a part or production risk. Flow behavior may affect filling, pressure, weld lines, flash, appearance, or cycle stability. Shrinkage and crystallization response may affect dimensions, warpage, bore fit, sealing, gear mesh, or cavity balance. Toughness, stiffness, creep, fatigue, friction, wear, electrical behavior, UV or chemical resistance may affect the service requirement in different ways.",
          "Include risks outside the headline performance table. Review material handling, contamination and purging, color matching, odor or emission requirements, regrind policy, hot-runner behavior, tooling or screw wear for filled grades, bonding or marking, mating-part wear, packaging, traceability, and required documents. A candidate should proceed only when each critical difference has a defined trial or evidence route.",
        ],
      },
      {
        title: "Run a Controlled Baseline and Candidate Molding Trial",
        paragraphs: [
          "Use the intended production mold and a suitable machine. First document a stable incumbent-material baseline, including material condition, process settings, fill time, transfer position, peak pressure, cushion, part weight, cycle components, mold-surface temperatures, cavity balance, scrap and visible defects. Preserve cavity-marked reference parts and the current process record.",
          "Before introducing the candidate, follow approved cleaning and purging procedures and prevent material mixing. Start within the candidate supplier's current processing guidance; do not assume the incumbent settings are automatically correct. Establish a stable candidate window while recording the same outputs as the baseline. Change one variable family at a time, identify every sample, and record any safety, degradation, deposit, odor, or process-stability concern.",
        ],
        points: [
          "Same mold, identified cavities, controlled material and traceable lots",
          "Baseline and candidate outputs recorded with the same definitions",
          "Fill, pack, cooling and ejection effects separated during adjustment",
          "Conforming and nonconforming samples retained with their process history",
        ],
      },
      {
        title: "Validate Molded Parts, Not Only Test Specimens",
        paragraphs: [
          "Measure dimensions after defined conditioning intervals and use the same datum, fixture, temperature and method for both materials. Compare appearance, color, surface, part weight, shrinkage, warpage, cavity variation, assembly force, retention, sealing, noise, torque, and other functional outputs that matter to the component. A candidate that requires an impractically narrow process window should not be treated as equivalent simply because selected parts pass inspection.",
          "Run the environmental and durability tests that represent the application: sustained load, cycling, impact, temperature, chemicals, moisture, UV, wear, friction, electrical function, or other project-specific conditions. Test the intended assembly and mating materials. Investigate the failure location and mode rather than reporting only pass or fail, and compare the result with the incumbent baseline and the pre-agreed acceptance criteria.",
        ],
      },
      {
        title: "Release the Exact Grade With Ongoing Controls",
        paragraphs: [
          "Approval should name the exact supplier grade, color, formulation status, applicable manufacturing scope, process window, required documents, inspection plan, and validated application. Confirm that the released TDS, SDS, declarations, approvals, and any COA requirements match the material to be purchased. A cross-reference statement or successful sample trial is not a blanket approval for other colors, plants, formulations, or parts.",
          "Set incoming identification and traceability requirements, retain approved reference evidence, and define how supplier changes will be reviewed. The amount of repeat production, lot coverage, capability evidence, and customer approval needed should follow the risk and the applicable quality system. If a critical document or validation result is still open, record the candidate as conditionally evaluated rather than production-equivalent.",
        ],
      },
    ],
    articleFeatures: [
      {
        type: "matrix",
        position: "after-section",
        sectionTitle: "Compare Documents on the Same Basis",
        title: "Alternative-grade comparison map",
        columns: ["Comparison layer", "Questions", "Release evidence"],
        rows: [
          [
            "Material identity",
            "Same POM type, modification, filler, color and intended function?",
            "Exact grade documents and supplier confirmation",
          ],
          [
            "Published properties",
            "Same methods, specimens, units, conditioning and test direction?",
            "Controlled comparison table with unmatched items flagged",
          ],
          [
            "Molding behavior",
            "Stable filling, packing, cooling, ejection and cavity balance?",
            "Baseline and candidate process-window records",
          ],
          [
            "Finished part",
            "Dimensions, assembly, function and durability meet the same criteria?",
            "Traceable molded-part validation and approval record",
          ],
        ],
      },
    ],
    modules: [
      {
        title: "Desk Review",
        navLabel: "Documents",
        description:
          "Compare exact grade identity, test basis, typical properties, processing guidance, declarations, approvals, COA needs, and open differences.",
      },
      {
        title: "Controlled Mold Trial",
        navLabel: "Molding Trial",
        description:
          "Establish an incumbent baseline and candidate process window in the intended mold with traceable material, cavities, settings, outputs, and samples.",
      },
      {
        title: "Production Release",
        navLabel: "Release",
        description:
          "Approve the exact grade only after dimensional, assembly, functional, durability, documentation, traceability, and change-control requirements are closed.",
      },
    ],
    relatedLinks: [
      { label: "POM Grade Cross-Reference", href: "/pom-grade-cross-reference" },
      { label: "Search Data / TDS", href: "/technical-data-sheets" },
      { label: "Discuss an Alternative Grade", href: "/contact" },
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
  {
    slug: "pom-gear-material-selection",
    title: "How to Select POM for Plastic Gears",
    navLabel: "POM Gear Material Selection",
    description:
      "A practical POM gear selection guide covering load, fatigue, wear, mating materials, lubrication, temperature, precision molding, and validation.",
    intro:
      "A plastic gear is a load-carrying component and a moving contact system at the same time. Material selection must therefore consider tooth-root fatigue, flank wear, frictional heat, creep, shock, noise, dimensional accuracy, backlash, mating material, lubrication, and the molded geometry. POM is widely reviewed for precision gears, but no POM family or modification is universally suitable. This guide shows how to define the duty, identify the governing failure mode, compare grade directions, and build a representative validation plan.",
    articleSections: [
      {
        title: "Define the Gear Duty Before Comparing Materials",
        paragraphs: [
          "Begin with the transmission requirement rather than a preferred resin name. Record gear type, module or diametral pitch, tooth count, face width, ratio, input and output torque, speed range, rotation direction, starts and stops, duty cycle, required life, and acceptable backlash. Distinguish normal running torque from startup, stall, jam, reversal, braking, and other shock events.",
          "Define the operating environment around the gear mesh. Ambient temperature alone may not represent the tooth temperature because speed, load, friction, and lubrication can generate local heat. Include nearby heat sources, cooling, chemicals, dust, washdown, humidity, expected noise, maintenance limits, and whether the gear must run dry, with initial lubrication, or with continuous lubrication.",
        ],
        points: [
          "Torque spectrum, speed range, reversals, shock and expected cycles",
          "Gear geometry, shaft support, alignment, housing stiffness and backlash",
          "Ambient and local temperature, chemicals, contamination and moisture",
          "Lubrication method, maintenance interval, noise and efficiency target",
        ],
      },
      {
        title: "Identify the Governing Failure Mode",
        paragraphs: [
          "Gear teeth can fail at the root from repeated bending, at the flank from wear or surface damage, or through deformation that changes the mesh. Creep, thermal expansion, molded shrinkage, bore movement, hub stress, shaft misalignment, and housing movement can alter backlash and tooth contact even when the material does not fracture.",
          "Do not collapse these risks into one request for a 'stronger' or 'more wear-resistant' grade. A higher modulus may reduce tooth deflection but does not automatically improve impact tolerance, weld-line performance, noise, or mating-part wear. Likewise, a lower friction result does not by itself establish fatigue life or dimensional accuracy. Rank each failure mode and define how it will be measured.",
        ],
      },
      {
        title: "Evaluate the Complete Contact Pair",
        paragraphs: [
          "The same POM grade can behave differently against hardened steel, softer metal, another POM, PA, or a coated surface. Record the driver and driven materials, surface hardness and finish, tooth geometry, contact pattern, alignment, lubrication, pressure, speed, and expected debris or contamination. Wear on the mating gear may be as important as wear on the POM gear.",
          "Review breakaway and running friction, adhesive or abrasive wear, noise, vibration, frictional heat, lubricant compatibility, and run-in behavior separately. Plastic-on-plastic contact and dry running require particular care because heat dissipation and adhesive wear can govern the result. Use grade-specific tribology data only when the mating material, pressure, speed, temperature, surface and test method are relevant to the application.",
        ],
        points: [
          "Driver and driven material, hardness, finish and tooth contact pattern",
          "Dry, initially lubricated or continuously lubricated operating condition",
          "Pressure, sliding and rolling speed, duty, temperature and heat removal",
          "Wear of both gears, noise, efficiency, debris and lubricant condition",
        ],
      },
      {
        title: "Design Material Selection and Precision Molding Together",
        paragraphs: [
          "A gear that meets material calculations can still fail through poor roundness, concentricity, tooth spacing, profile, runout, bore fit, or backlash. Review gate position, flow direction, weld lines, wall transitions, rim and web thickness, hub and rib design, cooling balance, ejection, and cavity variation. These features affect molded shrinkage, residual stress, tooth accuracy, and the relationship between the bore and pitch circle.",
          "TDS shrinkage is not a finished-gear tolerance. Establish the intended grade and molding window, then measure cavity-marked gears after a defined conditioning time. Check critical dimensions and functional mesh together. Machined prototypes can support early geometry or assembly work, but an injection-molded prototype is needed to reproduce molded skin, shrinkage, orientation, weld lines, and process variation.",
        ],
      },
      {
        title: "Choose the Grade Direction From the Dominant Risk",
        paragraphs: [
          "An unfilled POM grade may be the first review direction where toughness, fatigue, precision molding, and a relatively balanced shrinkage response are important. Wear-resistant or low-friction modifications may be considered when contact life, operating force, noise, or dry-running behavior governs. Reinforced POM can change stiffness and creep response, but fiber orientation, tooth-surface behavior, weld lines, impact response, and counterpart wear must be assessed on the molded gear.",
          "POM and PA should not be ranked generically. POM is often reviewed where low moisture response and dimensional consistency are important; a PA grade may offer a different balance of toughness, temperature behavior, wear, or shock response, while moisture conditioning can influence its dimensions and properties. Compare exact grades at the expected conditioned state and temperature using the same gear duty and acceptance criteria.",
        ],
        points: [
          "Standard POM for the baseline balance of molding, fatigue and precision",
          "Wear-modified POM when tooth and counterpart wear govern service life",
          "Low-friction POM when running force, stick-slip, noise or heat governs",
          "Reinforced or alternative polymers only after orientation and trade-off review",
        ],
      },
      {
        title: "Validate the Gear Train Under Representative Conditions",
        paragraphs: [
          "Use calculation and simulation to screen geometry and material candidates, but release the gear through testing. Mold traceable prototypes in the intended tool or a representative cavity and record material, lot, process, dimensions and conditioning. Test the complete gear train with the intended shafts, bearings, housing, mating gears, lubrication, alignment, load spectrum, speed, reversals, temperature and environment.",
          "A useful test plan measures torque or efficiency, temperature near the mesh, noise or vibration, backlash, dimensional change, tooth-root damage, flank wear, mating-part wear, lubricant or debris condition, and failure cycles. Include startup, stall, shock, and endurance conditions where applicable. After the test, inspect the failure location and compare it with the original risk ranking before approving a grade or changing the design.",
        ],
      },
    ],
    articleFeatures: [
      {
        type: "matrix",
        position: "after-section",
        sectionTitle: "Identify the Governing Failure Mode",
        title: "Gear failure evidence map",
        columns: ["Observed issue", "Primary review", "Evidence"],
        rows: [
          [
            "Tooth-root crack or break",
            "Bending load, shock, fatigue, fillet, weld line and temperature",
            "Load spectrum, cycle count, fracture location and molded orientation",
          ],
          [
            "Flank wear or debris",
            "Contact pair, alignment, surface, lubrication, pressure and speed",
            "Wear pattern on both gears, debris, temperature and lubricant condition",
          ],
          [
            "Noise or unstable motion",
            "Backlash, runout, contact pattern, friction, housing and alignment",
            "Dimensional report, noise spectrum, torque trace and mesh inspection",
          ],
          [
            "Binding after time or heat",
            "Creep, thermal movement, moisture, bore or housing movement and clearance",
            "Conditioned dimensions, temperature history and loaded assembly results",
          ],
        ],
      },
    ],
    modules: [
      {
        title: "Define the Duty",
        navLabel: "Gear Duty",
        description:
          "Document geometry, torque, speed, shock, cycles, temperature, lubrication, environment, backlash, and life target before comparing grades.",
      },
      {
        title: "Evaluate the Contact System",
        navLabel: "Contact Pair",
        description:
          "Review tooth fatigue, both mating materials, wear, friction, heat, noise, alignment, surface finish, and dimensional behavior together.",
      },
      {
        title: "Test the Molded Gear Train",
        navLabel: "Validation",
        description:
          "Validate cavity-marked molded gears in the intended assembly and representative load, speed, temperature, lubrication, and duty conditions.",
      },
    ],
    relatedLinks: [
      {
        label: "Wear / Low-Friction POM Guide",
        href: "/resources/wear-resistant-low-friction-pom-selection-guide",
      },
      {
        label: "Application Review by Part Function",
        href: "/resources/application-notes",
      },
      { label: "Discuss a Gear Application", href: "/contact" },
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
  {
    slug: "pom-warpage-troubleshooting",
    title: "Why POM Parts Warp After Injection Molding",
    navLabel: "POM Warpage Troubleshooting",
    description:
      "A structured guide to diagnosing POM warpage through measurement, shrinkage direction, part and mold design, packing, cooling, and validation.",
    intro:
      "Warpage is the visible result of uneven or directional dimensional change; it is not a single material defect with one universal correction. For a molded POM part, geometry, wall thickness, gate design, filling and packing, mold-surface temperature, cooling balance, ejection, material formulation, and measurement timing can all influence the final shape. This guide provides a controlled diagnostic sequence so molders can separate material, mold, process, and measurement effects before changing a grade or modifying steel.",
    articleSections: [
      {
        title: "Measure the Warpage Before Changing the Process",
        paragraphs: [
          "Define the defect in measurable terms. Bow, twist, ovality, flatness loss, angular movement, and displacement at a critical feature require different references. Record the drawing datum, fixture or free-state condition, measurement method, inspection temperature, and the elapsed time between molding and measurement. A part that changes after several hours should not be evaluated as though its shape were fixed at ejection.",
          "Preserve traceability. Identify machine, mold, cavity, material grade and lot, color, regrind status, process record, sample time, and handling condition. Compare every cavity and repeat the measurement at agreed intervals. This shows whether the issue follows one cavity, one process period, one handling method, or the material-and-design system as a whole.",
        ],
        points: [
          "Name the shape error and its drawing or functional acceptance limit",
          "Measure in a defined free state or fixture using consistent datums",
          "Identify cavity, sample time, conditioning, and measurement temperature",
          "Keep conforming and nonconforming parts with their complete process records",
        ],
      },
      {
        title: "Connect the Shape to Uneven or Directional Shrinkage",
        paragraphs: [
          "POM shrinkage values from a TDS are screening references measured on defined specimens. The molded part is also influenced by shape, wall thickness, gate position and size, filling direction, holding pressure and time, injection speed, mold-surface temperature, and cooling history. Warpage develops when different areas or directions of the part do not change dimension equally.",
          "Map the direction of bow or twist against the fill pattern, thick and thin sections, gate, end-of-fill region, ribs, bosses, and supported or restrained areas. Also compare dimensions over time because post-molding crystallization and stress relaxation can continue to change a semi-crystalline POM part. The useful question is not only how much the material shrinks, but where, in which direction, and when the dimensional difference develops.",
        ],
      },
      {
        title: "Review Part and Mold Causes Before Using Process Adjustments",
        paragraphs: [
          "Uneven wall thickness, abrupt transitions, one-sided ribs, heavy bosses, asymmetric geometry, and nonuniform cooling can create different shrinkage histories within the same part. Gate position and size affect flow orientation and how long packing pressure can reach each region. Weld lines, long flow paths, restricted runners, or an unbalanced multi-cavity system can add further variation.",
          "Check actual mold-surface temperatures rather than relying only on the temperature-control unit setting. Compare cooling circuits, flow and return temperatures, blocked passages, inserts, slides, hot regions, and cavity-to-cavity differences. Review ejection for uneven force or removal before the part has enough rigidity, and document any fixture or stacking method that restrains the part after molding.",
        ],
        points: [
          "Wall transitions, ribs, bosses, openings, inserts, and asymmetric sections",
          "Runner and gate capacity, gate position, fill balance, and gate sealing",
          "Cavity-surface temperature map and cooling-circuit performance",
          "Ejection sequence, local drag, part handling, stacking, and post-mold restraint",
        ],
      },
      {
        title: "Run a Controlled Filling, Packing and Cooling Diagnosis",
        paragraphs: [
          "Begin from a stable documented process and confirm the exact grade, lot, material condition, machine setup, and mold condition. Record transfer position, peak pressure, cushion, fill time, part weight, cycle components, mold-surface temperatures, and cavity balance. If these outputs are unstable, establish repeatability before interpreting a warpage trial.",
          "Separate the process stages instead of changing several settings together. Use a filling study to understand the flow pattern and balance. Establish whether the gate is still able to transmit pressure during the intended packing period, then examine the relationship between packing, part weight, dimensions, and shape. Review cooling time and temperature balance independently. Any changes must remain within the selected grade's current processing guidance and the machine's safe operating range.",
        ],
        points: [
          "Change one variable family at a time and keep identified samples",
          "Compare part weight and dimensions together, not warpage alone",
          "Record short-term improvement and any new flash, sink, stress, or ejection issue",
          "Return to the baseline between trials when the result is inconclusive",
        ],
      },
      {
        title: "Treat Fiber-Reinforced POM as an Orientation Problem Too",
        paragraphs: [
          "In a fiber-reinforced POM compound, fibers tend to align with the molded flow field and restrain shrinkage more strongly in some directions than others. The result can be lower overall shrinkage but greater directional difference. Part shape, gate location, flow path, weld lines, wall thickness, and processing conditions therefore become central to the warpage review.",
          "Do not assume that increasing reinforcement or switching to a stiffer grade will flatten the part. Compare predicted and observed flow direction with the critical dimensions and load path. Where orientation is driving the result, the effective correction may involve gate strategy, geometry, a different filler system, or another grade direction, followed by representative molding and dimensional validation.",
        ],
      },
      {
        title: "Confirm the Correction and Build the Technical Review Package",
        paragraphs: [
          "A correction is credible only when it holds across all relevant cavities and a defined process window. Recheck warpage, critical dimensions, part weight, appearance, assembly, and function using the same conditioning and measurement method. Confirm that the change has not transferred the problem into sink, flash, weld-line weakness, internal stress, longer cycle time, or unstable production.",
          "For supplier or technical review, provide the part drawing, 3D model if available, marked defect location and direction, current material and TDS, mold and gate layout, cavity map, machine information, process sheet, fill study, mold-temperature measurements, part weights, time-based dimensional results, photos, and acceptance criteria. Evidence of when and where the shape changes is more useful than a request for a universally 'low-warpage' grade.",
        ],
      },
    ],
    articleFeatures: [
      {
        type: "matrix",
        position: "after-section",
        sectionTitle: "Measure the Warpage Before Changing the Process",
        title: "Warpage evidence map",
        columns: ["Observed pattern", "First checks", "Evidence to collect"],
        rows: [
          [
            "One cavity differs",
            "Cooling, venting, gate, ejection and local mold condition",
            "Cavity-marked parts, surface temperatures and process outputs",
          ],
          [
            "All cavities bow the same way",
            "Part symmetry, wall sections, flow direction and cooling layout",
            "Fill pattern, gate map, thickness review and time-based dimensions",
          ],
          [
            "Shape changes after molding",
            "Conditioning time, restraint, storage temperature and post-shrinkage",
            "Measurements at fixed intervals under a defined storage method",
          ],
          [
            "Reinforced grade twists",
            "Fiber orientation, weld lines, gate position and directional shrinkage",
            "Flow analysis or short-shot study plus directional dimensions",
          ],
        ],
      },
    ],
    modules: [
      {
        title: "Measure First",
        navLabel: "Measurement",
        description:
          "Define shape, datum, fixture state, cavity, timing, conditioning, and acceptance limit before making a process or material change.",
      },
      {
        title: "Separate the Sources",
        navLabel: "Diagnosis",
        description:
          "Review differential shrinkage, geometry, flow, packing, mold temperature, cooling, ejection, and reinforcement orientation in a controlled sequence.",
      },
      {
        title: "Verify the Correction",
        navLabel: "Validation",
        description:
          "Confirm all cavities, critical dimensions, assembly, function, appearance, and repeatability using the same measurement conditions.",
      },
    ],
    relatedLinks: [
      { label: "POM Processing Guide", href: "/resources/processing-guide" },
      {
        label: "Application Review by Part Function",
        href: "/resources/application-notes",
      },
      { label: "Discuss a Warpage Issue", href: "/contact" },
    ],
  },
  // 中文编辑注释：后续替换为 POM 应用笔记正式内容。
  // 建议按应用场景写：汽车、齿轮、轴套、滑块、滚轮、水控、电子电器、工业机械等。
  // 每个应用建议包含：典型零件、工况、常见失效、材料关注点、可互链的站内应用页。
  {
    slug: "application-notes",
    title: "Modified POM Application Review by Part Function",
    navLabel: "Application Notes",
    description:
      "Review modified POM by part function, failure risk, operating conditions, and the evidence needed before selecting a grade direction.",
    intro:
      "Industry labels are not enough to select a modified POM compound. A gear in an actuator, a valve mechanism, and a conveyor guide may all use POM, but they create different contact, load, tolerance, and validation requirements. This application review starts with what the molded part must do, how it can fail, and what evidence is needed to compare material directions. Use it to prepare an early screening brief before reviewing exact grades, TDS documents, mold behavior, and representative part trials.",
    modules: [
      {
        title: "Moving Contact: Gears, Bushings, Sliders And Rollers",
        description:
          "Treat a moving part and its counterpart as one contact system. The correct material direction depends on the failure to control, not simply on a low-friction or wear-resistant label.",
        points: [
          "Define torque or contact load, speed, movement pattern, duty cycle, alignment, expected life, and whether the assembly starts after long idle periods.",
          "Record the counterpart material, hardness, surface finish, lubrication, contact area, and acceptable wear on both the POM part and mating surface.",
          "Separate wear life, running friction, breakaway force, stick-slip, noise, heat, and dimensional retention into individual acceptance criteria.",
          "Compare unfilled, wear-resistant, low-friction, or reinforced directions against the dominant failure mode instead of assuming one modification improves every contact condition.",
          "Validate shortlisted grades in representative geometry and contact conditions; standard specimen values cannot reproduce tooth form, edge loading, alignment, or surface finish.",
        ],
      },
      {
        title: "Precision And Assembly: Latches, Clips, Actuators And Housings",
        description:
          "Precision parts can fail even when their headline strength values appear adequate. Review dimensional change, assembly stress, creep, and process variation together.",
        points: [
          "Identify datum features, fit classes, sealing or alignment surfaces, snap deflection, insertion force, retention force, and dimensions that control assembly function.",
          "Review wall transitions, ribs, bosses, weld lines, gate location, fiber orientation, cooling balance, ejection, and measurement timing around critical dimensions.",
          "Distinguish immediate molding shrinkage from post-molding dimensional drift, sustained-load creep, thermal cycling, and stress relaxation in service.",
          "Use high-impact or reinforced directions only after checking their effects on stiffness, weld-line response, shrinkage direction, surface quality, and assembly behavior.",
          "Approve the material and process together using cavity-specific measurements, conditioning rules, assembly trials, and agreed capability criteria.",
        ],
      },
      {
        title: "Load-Bearing Parts: Brackets, Guides And Structural Mechanisms",
        description:
          "A reinforced compound may improve stiffness, but fiber percentage alone does not establish structural suitability. The load path and molded orientation must be part of the review.",
        points: [
          "Map the direction, duration, frequency, and location of each static, cyclic, impact, assembly, and fastener load rather than relying on one nominal force.",
          "Define allowable deflection, permanent set, creep, fatigue, dimensional movement, and failure mode at the actual service temperature and exposure condition.",
          "Review fiber orientation, weld lines, notches, sharp transitions, inserts, screw bosses, and local contact zones that may govern the finished part.",
          "Compare unfilled, glass-fiber-reinforced, carbon-fiber, or alternative polymer directions only after setting stiffness, toughness, weight, surface, and cost priorities.",
          "Use molded-part load testing and environmental conditioning to confirm the design; tensile or flexural specimen data alone is not a structural release criterion.",
        ],
      },
      {
        title: "Electrical Function: Insulating, Antistatic Or Conductive Parts",
        description:
          "Electrical terminology is only useful when it is tied to a resistance target, measurement method, conditioning state, and grounding concept for the finished part.",
        points: [
          "Confirm whether the requirement is insulation, charge-decay control, static dissipation, or a conductive path; these functions should not be treated as interchangeable.",
          "Specify surface or volume measurement, electrode arrangement, conditioning, temperature and humidity, measurement locations, target range, and acceptable production variation.",
          "Review grounding, part thickness, flow path, weld lines, wear surfaces, contamination, and assembly contact because the finished geometry can affect measured behavior.",
          "Evaluate how the conductive system changes flow, stiffness, toughness, color, surface quality, dimensional response, and wear against mating parts.",
          "Confirm electrical, flammability, substance, and customer-specific requirements for the exact grade and color before treating a candidate as approved.",
        ],
      },
      {
        title: "Fluid, Chemical And Outdoor Exposure",
        description:
          "Names such as water-control, chemical-resistant, or UV-resistant do not define a complete exposure condition. Build the screening around the actual medium, duration, temperature, and retained-property requirement.",
        points: [
          "List every fluid, disinfectant, detergent, grease, process chemical, contaminant, and cleaning procedure together with concentration, temperature, and exposure time.",
          "For outdoor service, define sunlight and weathering exposure, temperature cycling, moisture, color tolerance, mechanical load, and intended service life.",
          "Set acceptance criteria for mass or dimension change, swelling, cracking, surface condition, color, impact retention, strength retention, sealing, or movement after exposure.",
          "Screen UV-stabilized, impact-modified, wear-resistant, reinforced, or alternative polymer directions against the combined mechanical and environmental requirement.",
          "Verify drinking-water, food-contact, regional, or customer approval against the exact grade and color; application wording does not establish compliance.",
        ],
      },
      {
        title: "Build The Evidence Package Before Grade Comparison",
        description:
          "A useful recommendation brief distinguishes mandatory acceptance criteria from preferred improvements and gives both the current baseline and the test used to judge a change.",
        points: [
          "Provide the part drawing or model, critical dimensions, wall sections, assembly, mold and gate information, machine details, annual demand, and required documents.",
          "Describe the operating cycle, loads, motion, counterpart, lubrication, temperature, chemicals, moisture, UV, electrical function, appearance, and service-life target.",
          "For an existing part, include the current material and TDS, process sheet, defect or failure evidence, measurement history, samples, and known production variation.",
          "State how each requirement will be tested, the conditioning and measurement method, sample quantity, baseline result, and pass-or-fail threshold.",
          "Use this evidence to shortlist grades, then confirm document status, molding behavior, dimensions, assembly, and function before production release.",
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
  {
    slug: "reinforcement-materials-overview",
    title: "Glass Fiber vs Carbon Fiber Reinforced Compounds",
    navLabel: "Reinforcement Materials",
    description:
      "Compare glass fiber and carbon fiber compound directions by load path, dimensional target, electrical function, molding risk, and validation scope.",
    intro:
      "Glass fiber and carbon fiber are not interchangeable upgrades, and a higher fiber percentage is not automatically a better material. Reinforcement changes the stiffness and load response of a compound, but it can also change flow, orientation, weld-line behavior, directional shrinkage, warpage, surface quality, tooling wear, and mating-part wear. This guide provides an early decision framework: define the part requirement, choose the polymer and reinforcement direction, then establish the molded-part evidence needed for release.",
    articleSections: [
      {
        title: "Define the Performance Gap Before Choosing a Fiber",
        paragraphs: [
          "Start with the result the current material or design cannot achieve. The gap may involve deflection under load, creep, dimensional movement, weight, electrical behavior, temperature, surface quality, wear, or a combination of these factors. A request for 'more stiffness' is incomplete until the load direction, duration, temperature, allowable movement, and test method are defined.",
          "For an existing component, compare the current material, measured failure, part drawing, molding record, and acceptance limit. For a new component, define the load cases, critical dimensions, assembly, environment, safety factors, appearance limits, and validation method before selecting the polymer matrix or fiber system.",
        ],
        points: [
          "Load direction, duration, cycling, impact, and allowable deformation",
          "Critical dimensions, tolerances, creep, and thermal or moisture exposure",
          "Electrical, weight, surface, color, wear, and counterpart requirements",
          "Current baseline, failure evidence, target result, and pass criteria",
        ],
      },
      {
        title: "Glass Fiber and Carbon Fiber Solve Different Problems",
        paragraphs: [
          "Glass fiber is commonly screened when stiffness, creep control, load retention, or dimensional response must improve within a practical engineering compound direction. Carbon fiber may merit a separate review when stiffness-to-weight balance, a carbon-fiber-specific dimensional response, or an electrical function is central to the project. Neither direction guarantees the finished-part result by material name alone.",
          "Both fiber systems can create directional behavior because the molded fiber orientation follows the part geometry and flow history. Gate position, flow length, weld lines, ribs, bosses, wall changes, and load direction therefore influence the result. Compare the directions on molded-part behavior, processing feasibility, documentation, and total project requirements—not fiber percentage alone.",
        ],
      },
      {
        title: "Choose the Polymer Matrix Before Finalizing the Reinforcement",
        paragraphs: [
          "The reinforcement decision cannot be separated from the base polymer. POM may remain relevant where precision molding, sliding behavior, low moisture response, or the existing application platform favors POM. PA6, PA66, PPA, PPS, or another engineering polymer may require review when the temperature, chemical, structural, electrical, or processing target points to a different balance.",
          "Use the documented POM GF10 to GF30 range as the first screening route where it fits the part. High-fill glass fiber and carbon fiber directions should be treated as project-development work for an appropriate polymer family, with the formulation, processing guidance, data package, and documentation defined for that project.",
        ],
      },
      {
        title: "Release the Molded Part, Not the Fiber Percentage",
        paragraphs: [
          "A useful program moves through clear evidence gates. First compare available grade data and confirm the required documents. Next review mold filling, orientation, weld lines, tooling, machine capability, and expected process risk. Then mold traceable samples and measure dimensions, warpage, appearance, assembly, mechanical or electrical function, and environmental retention against the agreed baseline.",
          "Production release should use the exact formulation, color, process window, conditioning method, test method, and acceptance criteria. Generic reinforcement values or an undeclared development capability should not be used as a substitute for grade-specific data and representative molded-part validation.",
        ],
      },
    ],
    modules: [
      {
        title: "Glass Fiber Direction",
        navLabel: "Glass Fiber",
        description:
          "Start with documented POM GF10 to GF30 grades where they fit, then evaluate higher-fill or another polymer matrix only against a defined performance gap.",
      },
      {
        title: "Carbon Fiber Direction",
        navLabel: "Carbon Fiber",
        description:
          "Use a carbon fiber review when stiffness-to-weight, electrical behavior, or a carbon-fiber-specific dimensional target justifies the added development work.",
      },
      {
        title: "Release Evidence",
        navLabel: "Validation",
        description:
          "Confirm mold feasibility, directional behavior, dimensions, assembly, function, documents, and repeatability on the exact proposed compound.",
      },
    ],
    relatedLinks: [
      {
        label: "Glass Fiber Reinforced POM",
        href: "/products/categories/glass-fiber-reinforced-pom-compound",
      },
      {
        label: "Browse POM Materials",
        href: "/products/categories/pom",
      },
      { label: "Discuss a Requirement", href: "/contact" },
    ],
  },
  {
    slug: "pa6-vs-pa66-reinforced-parts",
    title: "PA6 vs PA66 for Reinforced Molded Parts",
    navLabel: "PA6 vs PA66 Selection Guide",
    description:
      "Compare reinforced PA6 and PA66 by conditioning state, temperature, stiffness, impact, dimensional behavior, molding risk, and grade-specific data.",
    intro:
      "PA6 and PA66 are related polyamides, but they should not be treated as interchangeable names for reinforced nylon. Their melting behavior, moisture uptake, conditioned properties, processing window, dimensional response, toughness, stiffness, and available modification packages can lead to different results in the same mold or application. This guide provides a project-based comparison and uses Taiyi Nano EAG130 PA6 GF30 and EAG230 PA66 GF30 only as grade-specific examples—not as universal values for every PA6 or PA66 compound.",
    articleSections: [
      {
        title: "Start With the Finished-Part Requirement",
        paragraphs: [
          "Define the load, duration, temperature, humidity, chemicals, electrical function, impact events, dimensional limits, appearance, expected life, and required standards before choosing between PA6 and PA66. Also record the part geometry, wall thickness, weld lines, gate and flow direction, inserts, fasteners, assembly loads, and the intended molding process.",
          "Rank the requirements instead of requesting the material with the highest headline strength. A housing may be governed by flatness and screw-boss retention; a bracket by creep and fatigue; a connector by conditioned dimensions, electrical performance, and flame requirements. The relevant comparison is the property balance of exact grades at the actual service and conditioning state.",
        ],
      },
      {
        title: "Specify Dry, Conditioned and In-Service States",
        paragraphs: [
          "Polyamides absorb moisture from their environment. Moisture can change dimensions and mechanical response, so a dry-as-molded value and a conditioned value are not interchangeable. The rate and equilibrium level also depend on grade, reinforcement, part thickness, temperature, relative humidity, and exposure time.",
          "Define the state for every comparison: dry material for processing control, a specified conditioning state for inspection or assembly, and the expected range during service. Record conditioning method, time, temperature, humidity, storage and measurement timing. Do not compare a dry PA66 value with a conditioned PA6 value or release a tight-tolerance part before its dimensional state is understood.",
        ],
        points: [
          "Granulate moisture limit and drying instruction for the exact grade",
          "Part conditioning state used for dimensional and mechanical inspection",
          "Expected humidity and temperature range during storage and service",
          "Property and dimensional acceptance limits at each required state",
        ],
      },
      {
        title: "Compare Temperature, Load and Toughness Together",
        paragraphs: [
          "PA66 often provides a higher melting and heat-performance direction than a comparable PA6 formulation, but the finished-part decision still depends on reinforcement, heat stabilization, moisture state, load, duration, and the exact test method. HDT is a comparative short-term test and should not be used as a universal continuous-use temperature or as a substitute for creep and heat-aging validation.",
          "Stiffness, strength, elongation, impact and fatigue must be reviewed as a balance. Glass fiber can increase stiffness and load response while changing impact behavior, weld-line sensitivity and directional properties. Moisture may reduce stiffness while improving some toughness behavior. Use temperature- and condition-relevant grade data, then test the molded part under its actual load and failure mode.",
        ],
      },
      {
        title: "Review Molding and Dimensional Risk",
        paragraphs: [
          "A change between PA6 and PA66 requires a fresh processing review. Confirm drying, material handling, residence control, barrel and mold guidance, hot-runner suitability, venting, gate capacity, fill and pack behavior, cooling, ejection and approved shutdown procedures from the exact grade documentation. Do not transfer one grade's settings without review.",
          "For glass-fiber compounds, flow controls fiber orientation and therefore directional stiffness and shrinkage. Gate position, wall changes, ribs, bosses, weld lines and cooling balance can influence warpage and critical dimensions. Establish the molding window and measure cavity-marked parts at a defined conditioning state before deciding that one material family is dimensionally better for the application.",
        ],
      },
      {
        title: "Use Same-Filler Catalogue Examples Correctly",
        paragraphs: [
          "Taiyi Nano EAG130 and EAG230 are both listed as 30% glass-fiber-reinforced compounds, which makes them useful for a controlled first comparison. In the current catalogue, EAG130 is the PA6 direction and EAG230 is the PA66 direction. Their data indicate different moisture and thermal directions while their room-temperature mechanical values remain grade-specific.",
          "The table is not a family rule or an equivalence statement. Values are typical catalogue references obtained with the listed methods and specimen conditions. Confirm the current grade TDS, color, conditioning and processing guidance before using the numbers in a design calculation, specification, or replacement decision.",
        ],
      },
      {
        title: "Qualify the Exact Grade in the Intended Part",
        paragraphs: [
          "Mold traceable candidate parts in the intended tool and establish a stable process window for each grade. Record material condition, lot, fill time, transfer, pressure, cushion, part weight, mold-surface temperatures, cycle, cavity balance, appearance and scrap. Measure dimensions after agreed conditioning intervals rather than comparing parts at different moisture states.",
          "Validate assembly, torque or retention, sustained load, fatigue, impact, heat aging, thermal cycling, humidity, chemicals, electrical function, flame or regulatory requirements as applicable. Release the exact grade and color only when molding capability, conditioned dimensions, functional evidence and required documents are complete.",
        ],
      },
    ],
    articleFeatures: [
      {
        type: "matrix",
        position: "after-section",
        sectionTitle: "Use Same-Filler Catalogue Examples Correctly",
        title: "Taiyi GF30 catalogue example",
        columns: ["Property and method", "EAG130 PA6 GF30", "EAG230 PA66 GF30"],
        rows: [
          ["Glass fiber content, ISO 1172", "30%", "30%"],
          ["Water absorption at 23°C / 50% RH, ISO 62", "1.1–1.5%", "0.5–0.9%"],
          ["Melting point, ISO 11357", "220°C", "260°C"],
          ["HDT at 1.8 MPa, ISO 75", "210°C", "250°C"],
          ["Tensile stress, ISO 527", "185 MPa", "200 MPa"],
          ["Flexural modulus, ISO 178", "8,800 MPa", "9,000 MPa"],
        ],
      },
    ],
    modules: [
      {
        title: "Conditioning State",
        navLabel: "Moisture State",
        description:
          "Define dry, conditioned and in-service moisture states before comparing dimensions, stiffness, toughness, electrical behavior or test results.",
      },
      {
        title: "Grade-Specific Comparison",
        navLabel: "Grade Data",
        description:
          "Compare exact PA6 and PA66 grades using matched test methods, reinforcement, color, processing guidance and application requirements.",
      },
      {
        title: "Molded-Part Qualification",
        navLabel: "Validation",
        description:
          "Qualify process capability, conditioned dimensions, assembly, function, durability and documents in the intended mold and service environment.",
      },
    ],
    relatedLinks: [
      { label: "Browse PA6 Compounds", href: "/products/categories/pa6-compound" },
      { label: "Browse PA66 Compounds", href: "/products/categories/pa66-compound" },
      { label: "Discuss a PA6 / PA66 Requirement", href: "/contact" },
    ],
  },
  {
    slug: "glass-fiber-reinforced-pa6-pa66-selection-guide",
    title: "Glass-Fiber-Reinforced PA6 and PA66 Selection Guide",
    navLabel: "Reinforced PA6 / PA66 Guide",
    description:
      "Select glass-fiber-reinforced PA6 and PA66 by fiber level, conditioning, load, orientation, warpage, molding feasibility, and molded-part evidence.",
    intro:
      "Glass fiber percentage is only one input in selecting a reinforced PA6 or PA66 compound. Polymer matrix, fiber length and retention, interface, heat stabilization, impact or flame modification, moisture state, flow orientation, weld lines, wall thickness, gate design, surface requirements, and processing history all influence the finished part. This guide explains how to use Taiyi Nano's 15%, 30%, and 50% glass-fiber catalogue directions as a screening ladder while keeping the final decision tied to molded-part performance.",
    articleSections: [
      {
        title: "Define the Load Case and Failure Limit",
        paragraphs: [
          "Map every static, cyclic, impact, assembly and fastener load, including direction, duration, temperature and frequency. Define allowable deflection, creep, permanent set, fatigue life, impact condition and failure location. Also record humidity, chemicals, electrical or flame requirements, appearance, weight, wall thickness, critical dimensions and the intended validation method.",
          "A request for higher stiffness is incomplete unless the part-level target is measurable. Increasing reinforcement may improve one load direction while creating a new weld-line, warpage, surface, toughness, flow or equipment risk. Start with the lowest-complexity grade direction that can plausibly meet the full acceptance criteria.",
        ],
      },
      {
        title: "Understand What the Glass Fiber Level Does and Does Not Define",
        paragraphs: [
          "Within a related grade series, increasing glass fiber commonly raises stiffness and load response. The actual result also depends on fiber length distribution after compounding and molding, fiber-matrix adhesion, polymer viscosity, modifiers, specimen orientation, moisture state and test temperature. Two compounds with the same nominal fiber percentage are therefore not automatically equivalent.",
          "Higher reinforcement can change melt flow, surface texture, fiber visibility, weld-line response, notched sensitivity, ejection, dimensional directionality and wear on screws, barrels, hot runners and tools. It can also change contact behavior against mating parts. Use the percentage to narrow the catalogue, then compare complete grade data and the intended production system.",
        ],
        points: [
          "Fiber content and test method, not only the grade name",
          "Dry and conditioned mechanical values at relevant temperatures",
          "Flow family, heat stabilization, impact or flame modification and color",
          "Surface, wear, weld-line, equipment and document requirements",
        ],
      },
      {
        title: "Choose PA6 or PA66 Before Finalizing the Fiber Level",
        paragraphs: [
          "PA6 and PA66 create different moisture, thermal and processing directions. Define the service and inspection conditioning states before comparing stiffness, strength or dimensions. A PA66 glass-fiber grade may provide a higher melting and heat-performance direction than a comparable PA6 grade, while exact toughness, flow, appearance and process feasibility remain grade-specific.",
          "Use matched reinforcement levels for the first comparison, then adjust the percentage only when the part requirement justifies it. For example, compare PA6 GF30 with PA66 GF30 before comparing PA6 GF15 with PA66 GF50. This separates polymer-matrix effects from reinforcement-level effects and produces a clearer trial plan.",
        ],
      },
      {
        title: "Design Around Fiber Orientation and Weld Lines",
        paragraphs: [
          "Short glass fibers align through the injection-molding flow field. Stiffness, strength and shrinkage can therefore differ along and across local flow directions. The relationship between gate, flow, weld lines and the load path is part of the material decision, not a detail to address after the grade is chosen.",
          "Review gate position and size, wall transitions, ribs, bosses, inserts, fasteners, corners, end-of-fill zones and critical dimensions. Avoid placing a governing load across an uncontrolled weld line. Use molding simulation or a short-shot study where useful, then confirm orientation-sensitive behavior through molded specimens or the finished part.",
        ],
        points: [
          "Primary load direction compared with expected local fiber orientation",
          "Weld lines, notches, inserts, screw bosses and sharp section changes",
          "Longitudinal and transverse shrinkage, flatness and cavity variation",
          "Surface acceptance zones, exposed fiber and mating-part contact",
        ],
      },
      {
        title: "Use the Catalogue Ladder as a Screening Tool",
        paragraphs: [
          "Taiyi Nano lists PA6 and PA66 glass-fiber directions at multiple reinforcement levels. The examples below show how published tensile, flexural, water-absorption and HDT values change within selected catalogue grades. They provide a structured shortlist, not an instruction to select the highest value.",
          "All figures are grade-specific typical data. Fiber content is reported to ISO 1172, tensile stress to ISO 527, flexural modulus to ISO 178, water absorption at 23°C and 50% RH to ISO 62, and HDT at 1.8 MPa to ISO 75 in the current catalogue. Confirm the latest TDS and conditioning basis before specification.",
        ],
      },
      {
        title: "Confirm Molding Feasibility and Equipment Readiness",
        paragraphs: [
          "Review drying and material transfer, machine capacity, screw and barrel condition, residence control, runner and gate restrictions, venting, fill balance, packing, cooling, ejection and surface requirements for the exact grade. Higher-fiber compounds may require a different feasibility review from the lower-fiber baseline and can increase wear on material-contact and tooling surfaces.",
          "During trials, record material condition, lot, fill time, transfer, pressure, cushion, part weight, mold-surface temperatures, cavity balance, cycle, appearance and visible fiber or weld-line effects. Establish a stable process window for each candidate instead of forcing all grades through one inherited setting sheet.",
        ],
      },
      {
        title: "Release the Molded Part at the Required Conditioning State",
        paragraphs: [
          "Measure cavity-marked parts after agreed conditioning intervals using fixed datums and methods. Check dimensions, warpage, surface, assembly, fastener retention, weld-line performance and any load-direction dependence. Compare dry, conditioned and service-relevant results where the application requires them.",
          "Complete sustained-load, fatigue, impact, temperature, humidity, chemical, electrical, flame or other project tests on the intended geometry. Release the exact grade, color and process only after the original failure limit, production capability and document requirements are closed.",
        ],
      },
    ],
    articleFeatures: [
      {
        type: "matrix",
        position: "after-section",
        sectionTitle: "Use the Catalogue Ladder as a Screening Tool",
        title: "Selected Taiyi glass-fiber grade ladder",
        columns: ["Grade direction", "Mechanical catalogue values", "Conditioning and heat references"],
        rows: [
          [
            "EAG115 · PA6 GF15",
            "Tensile 120 MPa · Flexural modulus 5,500 MPa",
            "Water absorption 1.3–1.7% · HDT 205°C",
          ],
          [
            "EAG130 · PA6 GF30",
            "Tensile 185 MPa · Flexural modulus 8,800 MPa",
            "Water absorption 1.1–1.5% · HDT 210°C",
          ],
          [
            "EAG150U · PA6 GF50",
            "Tensile 230 MPa · Flexural modulus 14,500 MPa",
            "Water absorption 0.8–1.2% · HDT 210°C",
          ],
          [
            "EAG215 · PA66 GF15",
            "Tensile 130 MPa · Flexural modulus 5,400 MPa",
            "Water absorption 0.8–1.2% · HDT 240°C",
          ],
          [
            "EAG230 · PA66 GF30",
            "Tensile 200 MPa · Flexural modulus 9,000 MPa",
            "Water absorption 0.5–0.9% · HDT 250°C",
          ],
          [
            "EAG250 · PA66 GF50",
            "Tensile 240 MPa · Flexural modulus 14,800 MPa",
            "Water absorption 0.3–0.7% · HDT 250°C",
          ],
        ],
      },
    ],
    modules: [
      {
        title: "Choose the Matrix",
        navLabel: "PA6 or PA66",
        description:
          "Compare PA6 and PA66 at matched fiber levels and defined conditioning states before changing the reinforcement percentage.",
      },
      {
        title: "Choose the Fiber Level",
        navLabel: "GF Level",
        description:
          "Use 15%, 30% and 50% catalogue directions to balance stiffness and load response against flow, toughness, surface, orientation and equipment risk.",
      },
      {
        title: "Qualify the Molded Part",
        navLabel: "Validation",
        description:
          "Confirm orientation, weld lines, dimensions, conditioning, assembly, function, process capability and documents on the exact grade and color.",
      },
    ],
    relatedLinks: [
      {
        label: "PA6 vs PA66 Selection Guide",
        href: "/resources/pa6-vs-pa66-reinforced-parts",
      },
      { label: "Browse PA6 Compounds", href: "/products/categories/pa6-compound" },
      { label: "Browse PA66 Compounds", href: "/products/categories/pa66-compound" },
      { label: "Discuss a Reinforced PA Requirement", href: "/contact" },
    ],
  },
  {
    slug: "ppa-vs-pa66-material-selection",
    title: "When to Choose PPA Instead of PA66",
    navLabel: "PPA vs PA66 Selection Guide",
    description:
      "Compare PPA and PA66 by high-temperature load, moisture response, dimensional stability, chemicals, processing requirements, and grade data.",
    intro:
      "PPA should not be specified only because a project requests a 'higher-performance nylon.' It is most useful when a defined temperature, conditioned mechanical, dimensional, chemical, electrical, or process requirement cannot be met reliably by the selected PA66 direction. The additional performance can also bring a different molding window, drying requirement, tooling demand, cost structure, and validation scope. This guide frames the upgrade decision and uses Taiyi Nano EAG630H PPA GF30 and EAG230 PA66 GF30 as grade-specific catalogue examples.",
    articleSections: [
      {
        title: "Prove the Performance Gap in the PA66 Baseline",
        paragraphs: [
          "Document the exact PA66 grade, color, conditioning state, mold, process and measured failure before screening PPA. The gap may involve loss of stiffness under load at temperature, creep, dimensional movement with humidity, chemical exposure, hydrolysis, electrical performance, reflow or other thermal processing, or an application-specific durability target.",
          "State the baseline, target, test method and acceptance limit. If the problem is caused by unfavorable geometry, fiber orientation, a weld line, cooling imbalance, moisture control or an unstable molding process, changing the polymer family may add cost without correcting the root cause. Close design and process issues before treating PPA as the solution.",
        ],
        points: [
          "Exact PA66 grade, conditioning state and current TDS revision",
          "Measured failure location, environment, time and temperature",
          "Required improvement and representative pass-or-fail method",
          "Design, mold and process causes already investigated",
        ],
      },
      {
        title: "Compare Elevated-Temperature and Conditioned Performance",
        paragraphs: [
          "Partially aromatic PPA compounds are commonly screened when mechanics and dimensions must remain more stable at elevated temperature or under humid conditions than the current aliphatic PA66 grade can provide. The useful comparison is not a room-temperature dry tensile value alone. Review stiffness, strength, creep, fatigue, thermal aging and dimensional retention at the expected load, temperature and moisture state.",
          "Melting point and HDT help locate a grade direction, but neither establishes continuous-use life. Polymer chemistry, heat stabilization, reinforcement, stress, time, air or fluid exposure and failure criterion all matter. Use temperature-dependent and conditioned grade data where available, then validate the finished part over the required duration.",
        ],
      },
      {
        title: "Define Moisture, Chemical and Electrical Requirements Precisely",
        paragraphs: [
          "PPA generally offers a lower-moisture, higher-dimensional-stability direction than conventional PA6 or PA66, but the exact result depends on PPA chemistry, reinforcement, thickness, conditioning and service environment. Specify equilibrium or transient moisture state, dimensional datums, temperature, exposure time and the mechanical or electrical property that must be retained.",
          "Chemical and electrical suitability are grade- and test-specific. List every coolant, oil, fuel, salt solution, cleaning agent or other medium with concentration, temperature and exposure mode. For electrical parts, define voltage, resistance or dielectric requirement, humidity, wall thickness, flame rating, tracking or other applicable test and required approval. Do not infer compliance from the PPA family name.",
        ],
      },
      {
        title: "Review the PPA Molding System Before Material Approval",
        paragraphs: [
          "PPA and PA66 require separate grade-specific processing reviews. Confirm packaging, storage, drying and moisture measurement, machine temperature capability, screw and barrel suitability, residence control, nozzle and hot-runner guidance, mold-temperature control, runner and gate sizing, venting, cooling, ejection and approved startup, purge and shutdown procedures.",
          "The higher-temperature processing direction of many PPA grades can expose limitations in heaters, controls, hot runners, seals, tooling, mold cooling or changeover practice. Glass-fiber orientation and weld lines remain important. Complete a mold and machine feasibility review before ordering a production trial or assuming an existing PA66 tool can run the PPA candidate without changes.",
        ],
        points: [
          "Drying and moisture verification for the exact grade and packaging history",
          "Machine, hot runner, nozzle, tooling and temperature-control capability",
          "Gate, venting, weld-line, orientation, surface and ejection requirements",
          "Purging, contamination control, residence management and safe shutdown",
        ],
      },
      {
        title: "Use Matched GF30 Catalogue Examples Correctly",
        paragraphs: [
          "Taiyi Nano EAG630H and EAG230 are both listed as 30% glass-fiber-reinforced compounds. EAG630H provides the PPA direction and EAG230 the PA66 direction. This matched filler level helps isolate the polymer-family direction during early screening, while the exact grade formulations and processing behavior remain different.",
          "The table contains typical current catalogue values with the listed ISO methods. It does not establish universal PPA-versus-PA66 performance, long-term service temperature, chemical resistance, processing interchangeability or part approval. Confirm the latest grade documents and obtain missing temperature-dependent, conditioned or application-specific evidence before specification.",
        ],
      },
      {
        title: "Qualify the Upgrade Against the Original Decision Gate",
        paragraphs: [
          "Mold traceable PA66 baseline and PPA candidate parts with stable grade-appropriate process windows. Record material moisture, lot, fill and pack outputs, part weight, mold-surface temperatures, cavity balance, cycle, surface, weld lines, dimensions and warpage. Inspect parts at defined dry and conditioned intervals using the same datums and methods.",
          "Test the original performance gap directly under representative load, temperature, humidity, chemical or electrical conditions. Also check assembly, impact, fatigue, creep, mating surfaces, post-processing and required documents. Release PPA only if the measured benefit justifies the manufacturing and commercial change without creating a new critical risk.",
        ],
      },
    ],
    articleFeatures: [
      {
        type: "matrix",
        position: "after-section",
        sectionTitle: "Use Matched GF30 Catalogue Examples Correctly",
        title: "Taiyi GF30 PA66 and PPA catalogue example",
        columns: ["Property and method", "EAG230 PA66 GF30", "EAG630H PPA GF30"],
        rows: [
          ["Glass fiber content, ISO 1172", "30%", "30%"],
          ["Water absorption at 23°C / 50% RH, ISO 62", "0.5–0.9%", "0.5%"],
          ["Melting point, ISO 11357", "260°C", "310°C"],
          ["HDT at 1.8 MPa, ISO 75", "250°C", "275°C"],
          ["Tensile stress, ISO 527", "200 MPa", "210 MPa"],
          ["Flexural modulus, ISO 178", "9,000 MPa", "10,100 MPa"],
        ],
      },
    ],
    modules: [
      {
        title: "Prove the PA66 Gap",
        navLabel: "Decision Gate",
        description:
          "Define the exact elevated-temperature, conditioned, dimensional, chemical or electrical requirement that the PA66 baseline cannot meet.",
      },
      {
        title: "Confirm Manufacturing Feasibility",
        navLabel: "Process Review",
        description:
          "Review drying, machine and tooling capability, residence control, hot runner, gate, venting, orientation, cooling and safe changeover for PPA.",
      },
      {
        title: "Validate the Measured Benefit",
        navLabel: "Qualification",
        description:
          "Qualify the exact PPA grade in the molded part and representative temperature, humidity, chemical, electrical, assembly and durability conditions.",
      },
    ],
    relatedLinks: [
      { label: "Browse PPA Compounds", href: "/products/categories/ppa-compound" },
      { label: "Browse PA66 Compounds", href: "/products/categories/pa66-compound" },
      {
        label: "PA6 vs PA66 Selection Guide",
        href: "/resources/pa6-vs-pa66-reinforced-parts",
      },
      { label: "Discuss a PPA Requirement", href: "/contact" },
    ],
  },
  {
    slug: "pa6-pa66-moisture-drying-conditioning-guide",
    title: "PA6 and PA66 Moisture, Drying and Conditioning Guide",
    navLabel: "PA6 / PA66 Moisture Guide",
    description:
      "Control PA6 and PA66 moisture by separating pellet drying, dry-as-molded parts, conditioning, service exposure, measurement, and validation.",
    intro:
      "Moisture plays two different roles in PA6 and PA66 projects. Excess moisture in granules can disrupt melt processing and part quality, while controlled moisture absorption after molding changes the dimensions and mechanical state of the finished polyamide part. Drying and conditioning are therefore not interchangeable operations. This guide separates pellet preparation, dry-as-molded inspection, accelerated conditioning, storage and service exposure so engineers can define a repeatable state for molding, measurement, assembly and performance validation.",
    articleSections: [
      {
        title: "Separate Four Moisture States",
        paragraphs: [
          "Pellet moisture is a processing-control variable. Dry-as-molded describes the part shortly after molding from correctly prepared material. Conditioned describes a part brought toward a defined moisture state by an agreed procedure. In-service state describes the moisture distribution that develops under actual humidity, temperature, time, thickness and exposure. These states should not be treated as equivalent.",
          "Specify which state applies to each requirement. A molding trial may use dry granules, dimensional release may require a fixed interval or conditioning method, assembly may occur at another state, and service validation may require humidity cycling or fluid exposure. Record state, method and timing beside every reported dimension or mechanical result.",
        ],
        points: [
          "Granule moisture condition before and during processing",
          "Dry-as-molded inspection timing and storage method",
          "Conditioning method, target, temperature, humidity and duration",
          "Expected service moisture range, thickness effect and exposure cycle",
        ],
      },
      {
        title: "Control Storage, Drying and Transfer for the Exact Grade",
        paragraphs: [
          "Keep sealed material protected from ambient humidity and allow cold packages to reach room conditions before opening where condensation is possible. Track grade, lot, package opening, storage history, dryer loading, transfer path, hopper residence, regrind and exposure time. A correct dryer setting does not protect material that is re-exposed during conveying or held in an uncontrolled hopper.",
          "Use the current grade processing guide to set dryer type, temperature, time, dew point, airflow and acceptable moisture. PA6, PA66, reinforced, impact-modified and flame-retardant grades may not share one drying instruction. Verify dryer performance and moisture with an appropriate method rather than relying only on elapsed time or pellet appearance.",
        ],
        points: [
          "Package integrity, condensation risk and time exposed to plant air",
          "Dryer temperature, dew point, airflow, loading and actual residence time",
          "Loader, hose, hopper, filter and conveying-system cleanliness and control",
          "Grade-specific moisture test method, sampling location and acceptance limit",
        ],
      },
      {
        title: "Do Not Diagnose Moisture From Surface Appearance Alone",
        paragraphs: [
          "Excess melt moisture can contribute to processing instability, surface defects and loss of material quality, but similar symptoms can also result from contamination, excessive residence, degradation, poor venting, shear, cold material, gate restrictions or machine problems. Investigate evidence instead of assigning every streak or weak part to inadequate drying.",
          "Compare moisture measurements with fill time, pressure, cushion, part weight, surface, deposits, odor or degradation signs, material history and purge condition. Preserve good and bad samples with their records. If a drying change improves appearance, confirm that dimensions, weld lines, impact and functional performance also remain acceptable.",
        ],
      },
      {
        title: "Define Conditioning Around the Part Requirement",
        paragraphs: [
          "Moisture absorption can reduce stiffness and change toughness, dimensions and electrical behavior. The magnitude and rate depend on polymer, formulation, reinforcement, thickness, geometry, temperature and humidity. An accelerated water or humid-air procedure may help prepare samples, but it should not be assumed to reproduce every service exposure or moisture gradient.",
          "Select the conditioning procedure from the applicable test standard, customer requirement and part function. Define sample age, method, target mass or moisture where used, storage after conditioning, measurement timing and allowable variation. Use the same state for candidate-grade comparisons and assembly tests.",
        ],
        points: [
          "Property or dimension that conditioning is intended to stabilize",
          "Reference standard or customer procedure and acceptance condition",
          "Part thickness, geometry, packaging and time needed for repeatability",
          "Handling between conditioning, measurement, assembly and testing",
        ],
      },
      {
        title: "Use Catalogue Moisture Values as Grade References",
        paragraphs: [
          "Taiyi Nano catalogue fields allow a controlled first comparison of selected reinforced PA6 and PA66 grades at the stated 23°C and 50% RH condition under ISO 62. The values show that polymer matrix and reinforcement level both matter. They are not universal equilibrium values for every geometry or a drying specification for pellets.",
          "Confirm the latest grade TDS, exact specimen definition and conditioning basis before calculation or specification. A finished part can absorb moisture at a different rate from a standard specimen, and local thickness or reinforcement orientation can affect dimensional response.",
        ],
      },
      {
        title: "Validate Dimensions, Assembly and Function Over Time",
        paragraphs: [
          "Measure cavity-marked parts at defined intervals using the same datums, fixture state and temperature. Track mass where useful, critical dimensions, flatness, bore or snap fit, fastener retention, sealing, gear mesh, assembly force and any electrical output. Record whether the part is free, restrained, packaged or assembled during exposure.",
          "Run dry, conditioned and service-relevant tests when the application requires them. Include temperature and humidity cycling, sustained load, impact, fatigue, chemicals, electrical or flame requirements as applicable. Release the exact grade and conditioning workflow only after molding control, measurement state, assembly sequence and in-service acceptance are aligned.",
        ],
      },
    ],
    articleFeatures: [
      {
        type: "matrix",
        position: "after-section",
        sectionTitle: "Use Catalogue Moisture Values as Grade References",
        title: "Selected Taiyi PA moisture references",
        columns: ["Catalogue grade", "Reinforcement", "Water absorption at 23°C / 50% RH, ISO 62"],
        rows: [
          ["EAG115 · PA6", "15% glass fiber", "1.3–1.7%"],
          ["EAG130 · PA6", "30% glass fiber", "1.1–1.5%"],
          ["EAG215 · PA66", "15% glass fiber", "0.8–1.2%"],
          ["EAG230 · PA66", "30% glass fiber", "0.5–0.9%"],
        ],
      },
    ],
    modules: [
      {
        title: "Prepare the Granules",
        navLabel: "Drying",
        description:
          "Control packaging, exposure, dryer performance, transfer and grade-specific pellet moisture before establishing the molding process.",
      },
      {
        title: "Define the Part State",
        navLabel: "Conditioning",
        description:
          "Separate dry-as-molded, conditioned and service states and attach a controlled method and timing to every measurement or test.",
      },
      {
        title: "Validate Over Time",
        navLabel: "Validation",
        description:
          "Confirm dimensions, assembly, mechanics, electrical behavior and function across the moisture and temperature states required by the application.",
      },
    ],
    relatedLinks: [
      {
        label: "PA6 vs PA66 Selection Guide",
        href: "/resources/pa6-vs-pa66-reinforced-parts",
      },
      { label: "Browse PA6 Compounds", href: "/products/categories/pa6-compound" },
      { label: "Browse PA66 Compounds", href: "/products/categories/pa66-compound" },
      { label: "Discuss a Moisture-Control Issue", href: "/contact" },
    ],
  },
  {
    slug: "conductive-antistatic-pa6-pa66-ppa-selection-guide",
    title: "Conductive and Antistatic PA6, PA66 and PPA Selection Guide",
    navLabel: "Conductive PA6 / PA66 / PPA Guide",
    description:
      "Select CNT or carbon-fiber PA6, PA66 and PPA compounds by electrical method, target band, grounding, geometry, conditioning, molding, and validation.",
    intro:
      "A conductive or antistatic polymer specification must define more than a power-of-ten range. Surface resistance, surface resistivity, volume resistance, volume resistivity and static decay describe different measurements, while part thickness, electrode geometry, conditioning, humidity, flow orientation, weld lines and grounding can change the observed result. Taiyi Nano lists CNT and carbon-fiber directions across PA6, PA66 and PPA matrices. This guide explains how to choose a matrix and technology, interpret the catalogue bands cautiously, and qualify the finished part.",
    articleSections: [
      {
        title: "Define the Electrical Function and Measurement Basis",
        paragraphs: [
          "First define why charge must be controlled. The requirement may involve limiting triboelectric charging, dissipating charge within a time, providing a conductive path to ground, protecting an ESD-sensitive device, reducing dust attraction, or supporting another application-specific function. Terms such as antistatic, static-dissipative and conductive can use different boundaries in different customer or industry specifications.",
          "Name the measured quantity, test method, units, applied voltage, electrode arrangement, specimen or finished-part geometry, thickness, conditioning, temperature and humidity, measurement locations, target range and acceptable production variation. Surface and volume results are not interchangeable, and a resistance reading should not be relabeled as resistivity without the required geometry conversion.",
        ],
        points: [
          "Electrical function, failure risk and required grounding path",
          "Surface, volume or static-decay method with exact units",
          "Voltage, electrodes, thickness, conditioning, temperature and humidity",
          "Measurement locations, sample quantity and acceptable variation",
        ],
      },
      {
        title: "Choose PA6, PA66 or PPA From the Non-Electrical Requirements",
        paragraphs: [
          "The conductive system does not replace the base-polymer decision. Compare load, stiffness, impact, wear, temperature, moisture, chemicals, dimensions, flame or regulatory requirements, appearance and processing feasibility first. Then confirm that the required electrical technology is available in the suitable matrix.",
          "PA6 and PA66 require clear dry and conditioned states because moisture can affect dimensions, mechanics and electrical behavior. PPA may merit review when the application has a defined elevated-temperature, humid-environment, chemical or dimensional requirement beyond the selected PA66 direction. The exact conductive formulation can change the normal matrix behavior, so unmodified polymer data is only a starting reference.",
        ],
      },
      {
        title: "Compare CNT and Carbon-Fiber Directions",
        paragraphs: [
          "Taiyi Nano positions the CNT series as a permanent static-control direction and the carbon-fiber series as a controlled-conductivity direction with a separate thermal-conductive review path. CNT and carbon fiber form conductive networks differently and can create different balances of electrical response, density, stiffness, impact, flow, surface, wear, color and cost.",
          "Carbon fiber can introduce mechanical reinforcement and directional electrical or dimensional behavior as fibers align with molded flow. CNT performance depends on the dispersed network and its survival through compounding and molding. Neither technology should be selected only from a generic label. Compare the exact grade, matrix, target band, mechanical data, processing guidance and finished-part evidence.",
        ],
        points: [
          "Required electrical band and stability over humidity and temperature",
          "Mechanical reinforcement, impact, wear and mating-surface requirements",
          "Density, color, surface, cleanliness and contamination constraints",
          "Flow, weld lines, orientation, regrind policy and process robustness",
        ],
      },
      {
        title: "Treat Catalogue Bands as Screening Codes",
        paragraphs: [
          "The current Taiyi conductive catalogue provides target-band labels for PA6, PA66 and PPA CNT and carbon-fiber grades. It does not state in each entry whether the label is a surface or volume quantity, its units, specimen thickness, conditioning or test method. The band can therefore be used to shortlist a grade direction but must not be published as a complete electrical specification by itself.",
          "Before trial, obtain the grade-specific electrical basis and agree how the catalogue band maps to the project test. Confirm whether limits apply to a standard plaque or finished part, which surfaces and flow directions are measured, and whether the requirement is an initial value, an allowed range or a retained value after environmental exposure.",
        ],
      },
      {
        title: "Design the Part, Conductive Network and Ground Together",
        paragraphs: [
          "A material can dissipate charge only through the path created by the compound, part and assembly. Review wall thickness, ribs, gates, flow direction, weld lines, inserts, fasteners, coatings, labels, contamination, contact pressure and the location and durability of ground connections. Resin-rich surfaces or interrupted contact regions may produce a different result from a standard plaque.",
          "Measure multiple locations and orientations where the filler network may be directional or where weld lines separate flow fronts. Include contact resistance and assembly interfaces when they are part of the discharge path. A low material resistivity value does not prove that an isolated or poorly grounded component will control charge in service.",
        ],
      },
      {
        title: "Control Molding Variables That Affect Electrical Results",
        paragraphs: [
          "Dispersion, filler or fiber orientation, shear history, residence, gate and runner design, weld lines, packing, part thickness, surface formation and regrind can influence the conductive network. Establish grade-specific material handling and a stable molding window rather than copying an unfilled PA or PPA process sheet.",
          "Record lot, material moisture, regrind, machine and screw, temperatures, fill time, transfer, pressure, cushion, part weight, cavity balance, surface and weld lines with every electrical sample. Test cavity-marked parts at defined locations and conditioning. If electrical results move with process changes, investigate the molding/network interaction instead of widening the specification without evidence.",
        ],
      },
      {
        title: "Qualify Electrical and Mechanical Performance Together",
        paragraphs: [
          "Validate the required surface, volume or decay result on the intended part and assembly under specified temperature, humidity and conditioning. Include production variation across relevant cavities, locations, flow directions, lots and process conditions based on project risk. Recheck after aging, chemical exposure, wear, cleaning or thermal cycling when these can affect the conductive path.",
          "Complete mechanical, dimensional, impact, wear, flame, regulatory, cleanliness and appearance tests alongside the electrical work. Approve the exact grade, color, process, regrind rule, test method, grounding design and document set. Do not release a material only because one plaque measurement falls inside the catalogue band.",
        ],
      },
    ],
    articleFeatures: [
      {
        type: "matrix",
        position: "after-section",
        sectionTitle: "Treat Catalogue Bands as Screening Codes",
        title: "Taiyi PA and PPA conductive catalogue directions",
        columns: ["Polymer matrix", "CNT catalogue directions", "Carbon-fiber catalogue directions"],
        rows: [
          [
            "PA6",
            "PA6-CNT-R35 · 10³–10⁵ | PA6-CNT-R610 · 10⁶–10¹⁰",
            "PA6 GP3 · 10³–10⁵ | PA6 GP8 · 10⁶–10⁸",
          ],
          [
            "PA66",
            "PA66-CNT-R35 · 10³–10⁵ | PA66-CNT-R610 · 10⁶–10¹⁰",
            "PA66 GP3 · 10³–10⁵ | PA66 GP8 · 10⁶–10⁸",
          ],
          [
            "PPA",
            "PPA-CNT-R35 · 10³–10⁵ | PPA-CNT-R610 · 10⁶–10¹⁰",
            "PPA GP3 · 10³–10⁵ | PPA GP8 · 10⁶–10⁸",
          ],
        ],
      },
    ],
    modules: [
      {
        title: "Define the Measurement",
        navLabel: "Electrical Target",
        description:
          "Specify electrical function, surface or volume method, units, electrodes, voltage, conditioning, geometry, locations and variation before choosing a grade.",
      },
      {
        title: "Choose Matrix and Technology",
        navLabel: "Material Direction",
        description:
          "Select PA6, PA66 or PPA from service requirements, then compare CNT and carbon fiber by electrical, mechanical, dimensional and processing balance.",
      },
      {
        title: "Qualify the Grounded Part",
        navLabel: "Validation",
        description:
          "Validate the electrical path, grounding, molding variation, conditioning, environment, mechanics, wear and documents on the finished assembly.",
      },
    ],
    relatedLinks: [
      {
        label: "Conductive and Antistatic Compounds",
        href: "/conductive-antistatic-compounds",
      },
      {
        label: "PA6 / PA66 Moisture Guide",
        href: "/resources/pa6-pa66-moisture-drying-conditioning-guide",
      },
      {
        label: "PPA vs PA66 Selection Guide",
        href: "/resources/ppa-vs-pa66-material-selection",
      },
      { label: "Discuss an Electrical Requirement", href: "/contact" },
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
    label: "Data / TDS Search",
    href: "/technical-data-sheets",
    description:
      "Search grade data, TDS paths, guides, and technical resource references.",
  },
];

export { resourceNavigationGroups as resourceIndexGroups } from "@/data/resourceNavigation";

export const getResourcePage = (slug: string) =>
  resourcePages.find((page) => page.slug === slug);
