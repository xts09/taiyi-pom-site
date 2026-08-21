import type { SiteMessages } from "@/i18n/types";
import coreMessages from "./de-core.ts";

const messages = {
  ...coreMessages,
  Taxonomy: {
    products: {
      pom: "POM-Compounds",
      pa6: "PA6-Compounds",
      pa66: "PA66-Compounds",
      ppa: "PPA-Compounds",
      pomResin: "POM-Basisharz",
      conductiveAntistatic: "Leitfähige und antistatische Compounds",
    },
    productEyebrows: {
      coreLine: "Kernsortiment",
      additionalFamily: "Weitere Werkstofffamilie",
      higherTemperature: "Für höhere Temperaturen",
      supplement: "Ergänzung",
      crossMaterial: "Werkstoffübergreifend",
    },
    applications: {
      automotive: "Automobilindustrie",
      electronics: "Elektronik",
      "conveyor-automation": "Fördertechnik und Automation",
      "motion-components": "Bewegungskomponenten",
      "water-control": "Wassertechnik",
      "washing-machine-components": "Waschmaschinen-Komponenten",
      "outdoor-equipment": "Outdoor-Geräte",
      "textile-machinery": "Textilmaschinen",
    },
    componentSolutions: "Bauteillösungen",
    resources: {
      "material-selection": {
        title: "Werkstoffauswahl",
        navigationLabel: "Werkstoff wählen",
      },
      "processing-troubleshooting": {
        title: "Verarbeitung und Fehleranalyse",
        navigationLabel: "Verarbeiten und optimieren",
      },
      "data-validation": {
        title: "Daten und Validierung",
        navigationLabel: "Daten finden und validieren",
      },
    },
  },
  Header: {
    brandHomeLabel: "Startseite von Taiyi Polymer",
    navigationAria: "Hauptnavigation",
    products: "Produkte",
    productCategories: "Produktkategorien",
    productDescription:
      "Beginnen Sie mit einer Werkstofffamilie oder vergleichen Sie leitfähige und antistatische Typen über mehrere Matrizes hinweg.",
    allProducts: "Alle Produkte",
    applications: "Anwendungen",
    applicationAreas: "Anwendungsbereiche",
    applicationDescription:
      "Finden Sie typische Spritzgussanwendungen nach Einsatzbedingung und Werkstoffanforderung.",
    allApplications: "Alle Anwendungen",
    resources: "Ressourcen",
    technicalResources: "Technische Ressourcen",
    allResources: "Alle Ressourcen",
    aboutUs: "Über uns",
    contact: "Kontakt",
    searchLabel: "Technische Datenblätter und Ressourcen durchsuchen",
    languageSwitcherLabel: "Sprache",
    englishDestinationLabel: "Inhalt auf Englisch",
    menu: "Menü",
    close: "Schließen",
    findGradeData: "Werkstoffdaten und TDS finden",
    discussApplication: "Anwendung besprechen",
  },
  Footer: {
    brandRelation: "Taiyi Polymer · PLATFORM® Technische Werkstoffe",
    logoAlt: "Eingetragene Marke PLATFORM",
    pitchTitle: "Werkstoffentscheidungen, ausgehend vom Bauteil.",
    pitchCopy:
      "Beschreiben Sie Ihr Bauteil, die Einsatzbedingungen und Leistungsziele. Wir grenzen passende Typen ein und klären verfügbare Muster sowie technische Unterlagen für Ihre Bewertung.",
    discussApplication: "Anwendung besprechen",
    products: "Produkte",
    applications: "Anwendungen",
    allApplications: "Alle Anwendungen",
    resources: "Ressourcen",
    company: "Unternehmen",
    aboutUs: "Über uns",
    contactSales: "Vertrieb kontaktieren",
    qualityCompliance: "Qualität und Konformität",
    manufacturing: "Fertigung",
    email: "E-Mail",
    call: "Anrufen",
    emailAria: "E-Mail an Taiyi Polymer senden",
    callAria: "Taiyi Polymer anrufen",
    whatsappAria: "Taiyi Polymer über WhatsApp kontaktieren",
    contactActionsAria: "Kontaktmöglichkeiten im Footer",
    navigationAria: "Footer-Navigation",
    location: "Yancheng, Jiangsu, China",
    rightsReserved: "Alle Rechte vorbehalten.",
    privacyPolicy: "Datenschutzerklärung",
  },
  FloatingContact: {
    mailSubject: "Anfrage zu Werkstoffanforderungen",
    email: "E-Mail",
    whatsapp: "WhatsApp",
    call: "Anrufen",
    closeOptions: "Kontaktoptionen schließen",
    openOptions: "Kontaktoptionen öffnen",
    salesContact: "Vertriebskontakt",
    title: "Anwendung besprechen",
    description:
      "Teilen Sie unserem Werkstoffteam Bauteil, Leistungsziele und benötigte Unterlagen mit.",
    directOptionsAria: "Direkte Kontaktmöglichkeiten",
    triggerLabel: "Kontakt",
  },
  Analytics: {
    title: "Analyse-Einstellungen",
    descriptionBeforeLink:
      "Wir nutzen Google Analytics, um die Websitenutzung zu verstehen und Werkstoffinformationen zu verbessern. Die Analyse bleibt deaktiviert, bis Sie zustimmen. Lesen Sie unsere",
    privacyPolicy: "Datenschutzerklärung",
    currentChoice: "Aktuelle Auswahl:",
    accepted: "akzeptiert",
    notAccepted: "nicht akzeptiert",
    accept: "Analyse akzeptieren",
    continueWithout: "Ohne Analyse fortfahren",
    settings: "Cookie-Einstellungen",
  },
  Products: {
    metadata: {
      title: "Technische Kunststoff-Compounds | Taiyi Polymer",
      description:
        "Entdecken Sie modifizierte POM-Compounds, POM-Basisharz, ausgewählte PA6-, PA66- und PPA-Familien sowie leitfähige und antistatische Compounds von Taiyi Polymer.",
      imageAlt:
        "POM-Werkstoffe und Verzeichnis technischer Kunststoffe von Taiyi Polymer",
    },
    breadcrumbHome: "Startseite",
    breadcrumbProducts: "Produkte",
    hero: {
      eyebrow: "Produktverzeichnis",
      title: "Technische Kunststoff-Compounds",
      subtitle: "Modifiziertes POM als Kernsortiment",
      body:
        "Durchsuchen Sie modifiziertes POM als Kernsortiment sowie POM-Basisharz und ausgewählte PA6-, PA66-, PPA-, leitfähige und antistatische Optionen, wenn die Anwendung ein anderes Eigenschaftsprofil erfordert.",
      startAction: "Nach Bauteilanforderung auswählen",
      dataSheetsAction: "Typendaten & TDS finden",
    },
    selection: {
      kicker: "Anforderung zuerst",
      title: "Was muss das Bauteil leisten?",
      body:
        "Wählen Sie den passendsten Prüfpfad. Jeder Pfad erläutert die entscheidenden Zielkonflikte, bevor ein konkreter Typ verglichen wird.",
      note:
        "Benötigen Sie höhere Temperaturbeständigkeit oder eine andere Polymerfamilie? Sehen Sie unten das gesamte Werkstoffspektrum.",
      navigationAria: "Werkstoffpfade nach Bauteilanforderung",
      paths: [
        {
          label: "Verschleiß / Reibung",
          title: "Bewegte oder gleitende Bauteile",
          description:
            "Vergleichen Sie Last, Geschwindigkeit, Gegenkörper, Schmierung, Geräusch und die geforderte Verschleißlebensdauer.",
        },
        {
          label: "Steifigkeit / Maßhaltigkeit",
          title: "Präzision unter Last",
          description:
            "Vergleichen Sie Steifigkeit, Kriechen, Schwindungsverhalten, Verzug und Fließorientierung im Formteil.",
        },
        {
          label: "Schlagzähigkeit / Montage",
          title: "Schnappverbindungen oder Stoßlasten",
          description:
            "Prüfen Sie Stoßbelastung, Temperatur, Bindenähte und Montagespannung, bevor Sie die Zähigkeit festlegen.",
        },
        {
          label: "Ableitfähigkeit",
          title: "Leitfähige oder antistatische Funktion",
          description:
            "Definieren Sie Widerstandsziel, Erdung, Geometrie, Farbe und Prüfverfahren, bevor Sie eine Matrix wählen.",
        },
      ],
    },
    families: {
      kicker: "Gesamtes Werkstoffspektrum",
      title: "Alle Produktfamilien durchsuchen",
      body:
        "Modifiziertes POM ist das Kernsortiment. Basisharz, ausgewählte PA6-, PA66- und PPA-Typen sowie werkstoffübergreifende Lösungen zur Ableitfähigkeit stehen bereit, wenn die Anwendung in eine andere Richtung weist.",
      items: [
        {
          title: "Modifizierte POM-Compounds",
          label: "Kernsortiment",
          description:
            "Verschleißfeste, reibungsarme, verstärkte, leitfähige, antistatische und schlagzähe POM-Optionen für präzise Spritzgussteile.",
          metricLabel: "modifizierte Typen",
        },
        {
          title: "POM-Basisharz",
          label: "Ausgewählte Beschaffung",
          description:
            "Ausgewählte Basisharze für den POM-Grundvergleich, technische Unterlagen und Projektbemusterung.",
          metricLabel: "Basistypen",
        },
        {
          title: "PA6-Compounds",
          label: "Weitere Werkstofffamilie",
          description:
            "Ausgewählte PA6-Compounds für verstärkte, schlagzähmodifizierte, flammgeschützte, verschleißbeanspruchte und mineralgefüllte Formteile.",
          metricLabel: "gelistete Typen",
        },
        {
          title: "PA66-Compounds",
          label: "Weitere Werkstofffamilie",
          description:
            "Ausgewählte PA66-Compounds für verstärkte, flammgeschützte, verschleißbeanspruchte und maßhaltige Formteile.",
          metricLabel: "gelistete Typen",
        },
        {
          title: "PPA-Compounds",
          label: "Für höhere Temperaturen",
          description:
            "PPA-Compounds für Formteile bei höheren Temperaturen, die Steifigkeit und Maßhaltigkeit erfordern.",
          metricLabel: "gelistete Typen",
        },
        {
          title: "Leitfähige und antistatische Compounds",
          label: "Werkstoffübergreifend",
          description:
            "Vergleichen Sie CNT-antistatische und carbonfaserleitfähige Optionen in POM, ABS, PC, PA6, PA66, PPS, TPU und weiteren Matrizes.",
          metricLabel: "gelistete Typen",
        },
      ],
    },
    inquiry: {
      title: "Werkstoff-Shortlist vorbereiten",
      eyebrow: "Anfrage vorbereiten",
      action: "Anwendung besprechen",
      body:
        "Nennen Sie Anwendung, Werkzeugstand, Kavitätenzahl, Schwindungs- oder Verzugsrisiko, zentrale Leistungsanforderungen, aktuellen Referenzwerkstoff, Farbe, benötigte Unterlagen und geschätztes Volumen. Damit lassen sich die relevante Werkstofffamilie sowie die nächsten Schritte für Typendaten, Dokumente und Muster festlegen.",
      contactSource: "Produktverzeichnis",
    },
  },
} satisfies SiteMessages;

export default messages;
