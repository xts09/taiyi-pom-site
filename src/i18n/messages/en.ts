import type { SiteMessages } from "@/i18n/types";
import { homeTaskFirstLocaleMessages } from "../homeTaskFirstLocaleMessages.ts";

const messages = {
  Taxonomy: {
    products: {
      pom: "POM Compounds",
      pa6: "PA6 Compounds",
      pa66: "PA66 Compounds",
      ppa: "PPA Compounds",
      pomResin: "POM Resin",
      conductiveAntistatic: "Conductive & Antistatic Compounds",
    },
    productEyebrows: {
      coreLine: "Core line",
      additionalFamily: "Additional family",
      higherTemperature: "Higher-temperature",
      supplement: "Supplement",
      crossMaterial: "Cross-material",
    },
    applications: {
      automotive: "Automotive",
      electronics: "Electronics",
      "conveyor-automation": "Conveyor Automation",
      "motion-components": "Motion Components",
      "water-control": "Water Control",
      "washing-machine-components": "Washing Machine",
      "outdoor-equipment": "Outdoor Equipment",
      "textile-machinery": "Textile Machinery",
    },
    componentSolutions: "Component Solutions",
    resources: {
      "material-selection": {
        title: "Material Selection",
        navigationLabel: "Choose a Material",
      },
      "processing-troubleshooting": {
        title: "Processing & Troubleshooting",
        navigationLabel: "Process & Troubleshoot",
      },
      "data-validation": {
        title: "Data & Validation",
        navigationLabel: "Find Data & Validate",
      },
    },
  },
  Header: {
    brandHomeLabel: "Taiyi Polymer home",
    navigationAria: "Primary navigation",
    products: "Products",
    productCategories: "Product Categories",
    productDescription:
      "Start with a material family or compare conductive and antistatic grades across matrices.",
    allProducts: "All Products",
    applications: "Applications",
    applicationAreas: "Application Areas",
    applicationDescription:
      "Browse common molded-part applications by working condition and material requirement.",
    allApplications: "All Applications",
    resources: "Resources",
    technicalResources: "Technical Resources",
    allResources: "All Resources",
    aboutUs: "About Us",
    contact: "Contact",
    searchLabel: "Search technical data sheets and resources",
    languageSwitcherLabel: "Language",
    englishDestinationLabel: "Content in English",
    menu: "Menu",
    close: "Close",
    findGradeData: "Find Grade Data & TDS",
    discussApplication: "Discuss Your Application",
  },
  Footer: {
    brandRelation: "Taiyi Polymer · PLATFORM® Engineering Materials",
    logoAlt: "PLATFORM registered trademark",
    pitchTitle: "Material decisions, grounded in the part.",
    pitchCopy:
      "Tell us about your part, operating conditions and performance targets. We'll help shortlist relevant grades and confirm the samples and technical documents available for evaluation.",
    discussApplication: "Discuss Your Application",
    products: "Products",
    applications: "Applications",
    allApplications: "All Applications",
    resources: "Resources",
    company: "Company",
    aboutUs: "About Us",
    contactSales: "Contact Sales",
    qualityCompliance: "Quality & Compliance",
    manufacturing: "Manufacturing",
    email: "Email",
    call: "Call",
    emailAria: "Email Taiyi Polymer",
    callAria: "Call Taiyi Polymer",
    whatsappAria: "Message Taiyi Polymer on WhatsApp",
    contactActionsAria: "Footer contact actions",
    navigationAria: "Footer navigation",
    location: "Yancheng, Jiangsu, China",
    rightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
  },
  FloatingContact: {
    mailSubject: "Material Requirement Request",
    email: "Email",
    whatsapp: "WhatsApp",
    call: "Call",
    closeOptions: "Close contact options",
    openOptions: "Open contact options",
    salesContact: "Sales contact",
    title: "Discuss Your Application",
    description:
      "Share your part, performance targets, and document needs with our material team.",
    directOptionsAria: "Direct contact options",
    triggerLabel: "Contact",
  },
  Analytics: {
    title: "Analytics choices",
    descriptionBeforeLink:
      "We use Google Analytics to understand site use and improve material information. Analytics stays off unless you accept. Read our",
    privacyPolicy: "Privacy Policy",
    currentChoice: "Current choice:",
    accepted: "accepted",
    notAccepted: "not accepted",
    accept: "Accept analytics",
    continueWithout: "Continue without analytics",
    settings: "Cookie Settings",
  },
  Home: {
    metadata: {
      title: "Modified POM Compounds for Industrial Parts | Taiyi Polymer",
      description:
        "Taiyi Polymer manufactures modified POM compounds for wear, low friction, reinforcement, conductivity and antistatic precision molded parts.",
      imageAlt: "Taiyi Polymer modified POM compound manufacturing",
    },
    hero: {
      eyebrowDesktop: "POM COMPOUNDING · MATERIAL SUPPORT",
      eyebrowMobile: "POM COMPOUNDING",
      title: "Modified POM Manufacturer for Precision Molded Parts",
      body:
        "Taiyi Polymer is based in Yancheng, Jiangsu, with modified POM at its core, supporting part-specific material screening, grade data, samples and molding trials.",
      exploreAction: "Find Material by Part",
      contactAction: "Find Grades & TDS",
    },
    metrics: [
      { label: "Annual Compound Capacity", note: "Metric tons per year" },
      { label: "Manufacturing Roots", note: "Engineering plastics manufacturing heritage" },
      { label: "Twin-Screw Lines", note: "In-house extrusion lines" },
      { label: "Facility Area", note: "Square metres" },
      { label: "Test Equipment", note: "In-house units" },
    ],
    materials: {
      title: "Material Range",
      body:
        "Start with modified POM, our core product line. We also review selected PA6, PA66 and PPA compounds when a part needs a different balance of stiffness, heat resistance or processing behavior.",
      documentSupport: "Document support by grade and project",
      dataSheetsAction: "Find Grade Data & TDS",
      coreLabel: "Core product line",
      coreDirectionsAria: "POM compound directions",
      coreDirections: [
        "Wear resistance",
        "Low friction",
        "Reinforcement",
        "Conductive / antistatic",
      ],
      allFamiliesAction: "View All Material Families",
      additionalFamiliesAria: "Additional material families",
      items: [
        {
          title: "POM Compounds",
          description:
            "Core product line for molded parts requiring wear resistance, low friction, reinforcement, conductivity or antistatic performance.",
          action: "Browse POM Compounds",
          specs: [
            ["Role", "Core Product Line"],
            ["Directions", "Wear / Friction / Reinforced"],
            ["Fit", "Precision Molded Parts"],
            ["Data", "Grade-Level TDS"],
          ],
        },
        {
          title: "PA6 Compounds",
          description:
            "Selected PA6 compounds for reinforced, impact-modified, flame-retardant, wear-related, and mineral-filled molded parts.",
          action: "Browse PA6 Compounds",
          specs: [
            ["Role", "Additional Material Family"],
            ["Material", "PA6"],
            ["Fit", "Reinforced / Impact Parts"],
            ["Scope", "Project-Based"],
          ],
        },
        {
          title: "PA66 Compounds",
          description:
            "Selected PA66 compounds for reinforced, flame-retardant, wear-related, and dimensionally stable molded parts.",
          action: "Browse PA66 Compounds",
          specs: [
            ["Role", "Additional Material Family"],
            ["Material", "PA66"],
            ["Fit", "Stiffness / Heat Parts"],
            ["Scope", "Project-Based"],
          ],
        },
        {
          title: "PPA Compounds",
          description:
            "Project-based PPA compound support for higher-temperature molded parts requiring stiffness and dimensional stability.",
          action: "Browse PPA Compounds",
          specs: [
            ["Role", "Additional Material Family"],
            ["Material", "PPA"],
            ["Fit", "High-Temperature Parts"],
            ["Scope", "Project-Based"],
          ],
        },
        {
          title: "Base POM Resin",
          description:
            "Available as a supplementary sourcing line when customers require selected POM resin supply alongside compound support.",
          action: "View Resin Grades",
          specs: [
            ["Role", "Supplementary Line"],
            ["Use", "Selected Sourcing"],
            ["Fit", "Base Resin Needs"],
            ["Color", "Natural"],
          ],
        },
      ],
    },
    qualification: {
      title: "How We Shortlist a Grade",
      intro:
        "We compare the part, mold, operating conditions and document needs to narrow candidate grades for TDS review, samples and molding trials.",
      applicationAction: "Explore Application Paths",
      figureAlt:
        "Black engineering-plastic pellets arranged in a laboratory dish.",
      figureLabel: "Review evidence",
      figureCaption:
        "Candidate materials are checked against part, processing and document constraints.",
      stepsAria: "Grade qualification stages",
      steps: [
        {
          stage: "Input",
          title: "Part and Tooling",
          description:
            "Part type, mold stage, cavity count, gate, movement mode and assembly environment.",
        },
        {
          stage: "Processing",
          title: "Processing and Dimensional Control",
          description:
            "Flowability, multi-cavity filling, shrinkage, warpage, dimensional stability and color requirements.",
        },
        {
          stage: "Performance",
          title: "Performance Targets",
          description:
            "Wear, friction, stiffness, impact, conductivity, antistatic behavior and working temperature.",
        },
        {
          stage: "Decision",
          title: "Grade Shortlist",
          description:
            "Candidate grades are compared before document availability and sample-trial needs are confirmed.",
        },
      ],
    },
    quality: {
      title: "Credentials for Supplier Qualification",
      body:
        "Enterprise recognition and management-system certificates for Jiangsu Taiyi Nano Technology Co., Ltd., together with material-document support, give procurement teams a faster route to supplier review.",
      panelAria: "Company credentials and material-document support",
      qualifications: [
        {
          category: "Enterprise recognition",
          title: "National High-Tech Enterprise",
        },
        {
          category: "Provincial designation",
          title: "Jiangsu Provincial Specialized and Innovative SME",
        },
        {
          category: "Intellectual property",
          title: "29 Granted Patents",
        },
      ],
      documentSupportTitle: "Document support",
      documentSupportBody: "Availability confirmed by grade and project.",
      documentListAria: "Material documents available by grade and project",
      documentNames: {
        TDS: "Technical Data Sheet",
        SDS: "Safety Data Sheet",
        COA: "Certificate of Analysis",
        REACH:
          "Registration, Evaluation, Authorisation and Restriction of Chemicals",
        RoHS: "Restriction of Hazardous Substances",
      },
      certifications: [
        {
          system: "Automotive Quality Management",
          scope:
            "Manufacture of plastic granules, excluding product design under clause 8.3.",
        },
        {
          system: "Quality Management",
          scope: "Production of nano-polymer materials (plastic particles).",
        },
        {
          system: "Environmental Management",
          scope:
            "Environmental management in sales-related areas of nano-polymer materials (plastic particles).",
        },
        {
          system: "Occupational Health & Safety",
          scope:
            "Occupational health and safety management in sales-related areas of nano-polymer materials (plastic particles).",
        },
      ],
      featuredDescription: "Automotive Quality Management System",
      certificateAvailable: "Certificate PDF available for review",
      certifiedScope: "Certified scope",
      openCertificate: "Open certificate PDF",
      openCertificateAria: "Open {standard} certificate PDF",
      scopePrefix: "Scope:",
      openPdf: "Open PDF",
    },
    exportNetwork: {
      eyebrow: "SUPPLY NETWORK",
      title: "Export Routes",
      description:
        "Project routes connect the Yancheng production base with destinations across Central Asia, Europe, East Asia and the Americas.",
      mapAlt:
        "World map showing Taiyi production and export regions across Central Asia, Europe, East Asia, and the Americas.",
      legendAria: "Map legend",
      productionBase: "Production base",
      exportRegion: "Export region",
      regionsTitle: "Project regions",
      regionsBody: "Select a region to focus the routes shown on the map.",
      factsAria: "Export network facts",
      productionBaseValue: "Yancheng, Jiangsu, China",
      listedDestinations: "Listed destinations",
      listedDestinationsValue: "9 destinations shown",
      routes: [
        { region: "Central Asia", coverage: "Uzbekistan and Kazakhstan" },
        { region: "Europe", coverage: "Poland and Turkey" },
        { region: "East Asia", coverage: "South Korea and Japan" },
        {
          region: "Americas",
          coverage: "Mexico, Brazil, and Argentina",
        },
      ],
    },
    inquiry: {
      eyebrow: "Application Review",
      title: "Share Your Part Requirements",
      body:
        "Share the details below; we will shortlist material directions and clarify available grade data, documents and samples.",
      checklistLabel: "Useful starting points",
      checklist: [
        "Part function and movement mode",
        "Mold status and processing constraints",
        "Priority performance targets",
        "Current material, failure evidence and timing",
      ],
      action: "Discuss Your Application",
    },
    taskFirst: homeTaskFirstLocaleMessages.en,
  },
  Products: {
    metadata: {
      title: "Engineering Plastic Compounds | Taiyi Polymer",
      description:
        "Browse Taiyi Polymer modified POM compounds, base POM resin, selected PA6, PA66, and PPA families, plus a cross-material conductive and antistatic compound directory.",
      imageAlt:
        "Taiyi Polymer POM material and engineering plastic directory",
    },
    breadcrumbHome: "Home",
    breadcrumbProducts: "Products",
    hero: {
      eyebrow: "Product Directory",
      title: "Engineering Plastic Compounds",
      subtitle: "Modified POM as the core product line",
      body:
        "Browse modified POM as the core range, with base POM resin and selected PA6, PA66, PPA, conductive, and antistatic options when the application requires a different property balance.",
      startAction: "Choose by Part Requirement",
      dataSheetsAction: "Find Grade Data & TDS",
    },
    selection: {
      kicker: "Requirement First",
      title: "What must the part do?",
      body:
        "Choose the closest screening path. Each route explains the tradeoffs that matter before comparing an exact grade.",
      note:
        "Need higher temperature or another polymer family? Browse the full material range below.",
      navigationAria: "Material paths by part requirement",
      paths: [
        {
          label: "Wear / Friction",
          title: "Moving or sliding parts",
          description:
            "Compare load, speed, counterpart, lubrication, noise, and the required wear life.",
        },
        {
          label: "Stiffness / Dimension",
          title: "Precision under load",
          description:
            "Compare stiffness, creep, shrinkage behavior, warpage, and molded flow orientation.",
        },
        {
          label: "Impact / Assembly",
          title: "Snap fits or shock loads",
          description:
            "Check impact load, temperature, weld lines, and assembly stress before selecting toughness.",
        },
        {
          label: "Static Control",
          title: "Conductive or antistatic function",
          description:
            "Define the resistance target, grounding, geometry, color, and test method before choosing a matrix.",
        },
      ],
    },
    families: {
      kicker: "Full Material Range",
      title: "Browse Every Product Family",
      body:
        "Modified POM is the core line. Base resin, selected PA6, PA66, PPA, and cross-material static-control options remain available when the application points elsewhere.",
      items: [
        {
          title: "Modified POM Compounds",
          label: "Core Product Line",
          description:
            "Wear-resistant, low-friction, reinforced, conductive, antistatic, and high-impact POM options for precision molded parts.",
          metricLabel: "modified grades",
        },
        {
          title: "Base POM Resin",
          label: "Selected Sourcing",
          description:
            "Selected base resin options for baseline POM comparison, technical documents, and project sampling.",
          metricLabel: "base grades",
        },
        {
          title: "PA6 Compounds",
          label: "Additional Family",
          description:
            "Selected PA6 compound options for reinforced, impact-modified, flame-retardant, wear-related, and mineral-filled molded parts.",
          metricLabel: "listed grades",
        },
        {
          title: "PA66 Compounds",
          label: "Additional Family",
          description:
            "Selected PA66 compound options for reinforced, flame-retardant, wear-related, and dimensionally stable molded parts.",
          metricLabel: "listed grades",
        },
        {
          title: "PPA Compounds",
          label: "Higher Temperature",
          description:
            "PPA compound options for higher-temperature molded parts that need stiffness and dimensional stability.",
          metricLabel: "listed grades",
        },
        {
          title: "Conductive & Antistatic Compounds",
          label: "Cross-Material",
          description:
            "Compare CNT antistatic and carbon-fiber conductive options across POM, ABS, PC, PA6, PA66, PPS, TPU, and other matrices.",
          metricLabel: "listed grades",
        },
      ],
    },
    inquiry: {
      title: "Prepare a Material Shortlist",
      eyebrow: "Inquiry Preparation",
      action: "Discuss Your Application",
      body:
        "Share the application, mold stage, cavity count, shrinkage or warpage concern, key performance requirements, current material reference, color, document requirements, and estimated volume. These inputs identify the relevant material family and establish the grade data, document, and sample follow-up for the project.",
      contactSource: "Product directory",
    },
  },
  Contact: {
    metadata: {
      title: "Discuss a Material Requirement | Taiyi Polymer",
      description:
        "Contact Jiangsu Taiyi Nano Technology Co., Ltd. for modified POM, engineering plastic compounds, POM resin, material recommendations, documents, samples, and project evaluation.",
      imageAlt: "Taiyi Polymer engineering-plastic production line",
    },
    breadcrumbHome: "Home",
    breadcrumbContact: "Contact",
    hero: {
      title: "Request a Material Review",
      description:
        "Tell us the part function, operating conditions and target requirements. We will identify relevant material families, confirm available documents and outline the next sample or evaluation step.",
    },
    formPanel: {
      title: "Start with the essentials",
      body:
        "Company, email, and application are enough to start. Add technical details only if you already have them.",
      requiredBefore: "Fields marked",
      requiredAfter: "are required.",
    },
    sales: {
      title: "Sales Contact",
      contactPerson: "Contact Person",
      role: "Sales Manager",
      company: "Company",
      email: "Email",
      whatsapp: "WhatsApp",
      location: "Location",
      locationValue: "Yancheng, Jiangsu, China",
      reviewTitle: "What We Can Review",
      reviewItems: [
        "Relevant material families and candidate grades",
        "Available technical documents and sample needs",
      ],
      emailDirectly: "Email Directly",
    },
    directEmail: {
      greeting: "Dear Ethan,",
      application: "Application or part",
      material: "Material or current grade",
      reference: "Reference grade",
      candidates: "Candidate shortlist",
      requirement: "Priority requirement",
      keyRequirements: "Key requirements:",
      documentNeeds: "Document needs:",
      closing: "Regards,",
      subject: "Material Requirement Request",
    },
    context: {
      grade: "Grade of interest",
      reference: "Reference grade",
      candidates: "Candidate shortlist",
      requirement: "Priority requirement",
      intent: "Inquiry intent",
      sampleIntent: "Sample request",
      evaluationIntent: "Grade evaluation",
      tdsIntent: "TDS or documents",
      quoteSupplyIntent: "Quote or supply discussion",
    },
    form: {
      contextFrom: "From",
      contextPrefilled:
        "These details are prefilled. You can edit any field below.",
      clearContext: "Clear context",
      inquiryTypeLabel: "What do you need?",
      inquiryTypePlaceholder: "Select a request type",
      inquiryTypeOptions: {
        "grade-evaluation": "Grade recommendation",
        tds: "TDS or documents",
        sample: "Sample",
        "quote-supply": "Quote or supply discussion",
      },
      companyLabel: "Company",
      companyPlaceholder: "Company name",
      emailLabel: "Email",
      materialLabel: "Material Family (optional)",
      materialPlaceholder: "Choose a material family",
      materialOptionLabels: {
        "Modified POM Compounds": "Modified POM Compounds",
        "Wear-Resistant & Low-Friction POM":
          "Wear-Resistant & Low-Friction POM",
        "High-Impact POM": "High-Impact POM",
        "UV-Resistant POM": "UV-Resistant POM",
        "Glass Fiber Reinforced POM": "Glass Fiber Reinforced POM",
        "Glass Bead Filled POM": "Glass Bead Filled POM",
        "Carbon Fiber Reinforced POM Compound":
          "Carbon Fiber Reinforced POM Compound",
        "Conductive / Antistatic POM": "Conductive / Antistatic POM",
        "Base POM Resin": "Base POM Resin",
        "Ultra-High Flow POM": "Ultra-High Flow POM",
        "PA6 Compounds": "PA6 Compounds",
        "PA66 Compounds": "PA66 Compounds",
        "PPA Compounds": "PPA Compounds",
        "Conductive & Antistatic Compounds":
          "Conductive & Antistatic Compounds",
        "Other Engineering Plastic Compound":
          "Other Engineering Plastic Compound",
      },
      applicationLabel: "Application / Part",
      applicationPlaceholder: "Gear, clip, housing…",
      detailsLabel: "Requirement Details (optional)",
      detailsPlaceholder:
        "Current grade, operating conditions, target properties, annual volume, or document needs.",
      sending: "Sending…",
      submit: "Submit Project Requirements",
      fallbackNote:
        "If direct delivery is unavailable, an email draft will open instead.",
      sentStatus:
        "Submitted. We will review your requirement and reply by email.",
      fallbackStatus:
        "An email draft was prepared, and the inquiry text was copied when possible.",
      emailDraft: {
        notSpecified: "Not specified",
        greeting: "Dear Ethan,",
        intro: "Please review the following material requirement:",
        company: "Company",
        email: "Email",
        material: "Material Interest",
        application: "Application / Part",
        inquiryType: "What you need",
        grade: "Grade",
        source: "Source",
        details: "Requirement Details:",
        closing: "Regards,",
        subjectPrefix: "Material Requirement Request",
      },
    },
  },
} satisfies SiteMessages;

export default messages;
