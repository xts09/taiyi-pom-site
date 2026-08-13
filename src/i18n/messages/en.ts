import type { SiteMessages } from "@/i18n/types";

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
      "washing-machine-components": "Washing Machine Components",
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
    menu: "Menu",
    close: "Close",
    findGradeData: "Find Grade Data & TDS",
    discussApplication: "Discuss Your Application",
  },
  Footer: {
    brandRelation: "Taiyi Polymer · PLATFORM® Engineering Materials",
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
        "Start with what the part must do, choose the closest material family, then compare listed grades, processing constraints and available documents.",
      startAction: "Start with Part Requirements",
      dataSheetsAction: "Find Technical Data Sheets",
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
} satisfies SiteMessages;

export default messages;
