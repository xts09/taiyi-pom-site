import { headerPomMenuMessages } from "../headerPomMenuMessages.ts";
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
      additionalFamily: "Polyamid-Familie",
      higherTemperature: "Hochtemperatur-Polyamid",
      supplement: "Basisharz",
      crossMaterial: "Leitfähig & antistatisch",
    },
    applications: {
      automotive: "Automobilindustrie",
      electronics: "Elektronik",
      "conveyor-automation": "Fördertechnik und Automation",
      "motion-components": "Bewegungskomponenten",
      "water-control": "Wassertechnik",
      "washing-machine-components": "Waschmaschine",
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
    pomMenu: headerPomMenuMessages["de"],
    brandHomeLabel: "Startseite von Taiyi Polymer",
    navigationAria: "Hauptnavigation",
    products: "Produkte",
    productCategories: "Produktkategorien",
    productDescription:
      "Werkstofffamilien und leitfähige sowie antistatische Typen für unterschiedliche Polymermatrizes.",
    allProducts: "Alle Produkte",
    applications: "Anwendungen",
    applicationAreas: "Anwendungsbereiche",
    applicationDescription:
      "Finden Sie typische Spritzgussanwendungen nach Einsatzbedingung und Werkstoffanforderung.",
    allApplications: "Alle Anwendungen",
    resources: "Ressourcen",
    technicalResources: "Technische Ressourcen",
    resourceDescription:
      "Finden Sie praxisnahe Leitfäden zur Werkstoffauswahl, Fehlerbehebung bei der Verarbeitung und Datenvalidierung.",
    allResources: "Alle Ressourcen",
    news: "Aktuelles",
    aboutUs: "Über uns",
    contact: "Kontakt",
    searchLabel: "Technische Datenblätter und Ressourcen durchsuchen",
    languageSwitcherLabel: "Sprache",
    englishDestinationLabel: "Inhalt auf Englisch",
    menu: "Menü",
    close: "Schließen",
    findGradeData: "Werkstoffdaten und TDS finden",
    findTds: "TDS finden",
    discussApplication: "Anwendung besprechen",
  },
  Footer: {
    brandRelation: "Taiyi Polymer · PLATFORM® Technische Werkstoffe",
    logoAlt: "Eingetragene Marke PLATFORM",
    products: "Produkte",
    applications: "Anwendungen",
    allApplications: "Alle Anwendungen",
    resources: "Ressourcen",
    technicalData: "Werkstoffdaten & TDS",
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
    triggerLabel: "Anwendung besprechen",
  },
  Analytics: {
    title: "Ihre Datenschutzeinstellungen",
    descriptionBeforeLink:
      "Wir verwenden optionale Analyse-Cookies, um zu verstehen, wie Besucher diese Website nutzen, und unsere Werkstoffinformationen zu verbessern. Die Analyse bleibt deaktiviert, bis Sie zustimmen. Sie können Ihre Auswahl jederzeit in den Cookie-Einstellungen ändern. Lesen Sie unsere",
    privacyPolicy: "Datenschutzerklärung",
    currentChoice: "Aktuelle Auswahl:",
    accepted: "akzeptiert",
    notAccepted: "nicht akzeptiert",
    accept: "Analyse-Cookies akzeptieren",
    continueWithout: "Ohne Analyse-Cookies fortfahren",
    dismiss: "Später entscheiden",
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
      title: "Werkstoffe und Typen",
      body:
        "Modifiziertes POM von PLATFORM® verbindet Verschleißfestigkeit, geringe Reibung und Maßhaltigkeit für Zahnräder, Lager und präzise Passungen. Taiyi Polymer bietet gleitmodifizierte, verstärkte und schlagzähmodifizierte Typen sowie PA6, PA66, PPA und leitfähige oder antistatische Werkstoffe für Automobilbau, Elektrotechnik, Elektronik und Industriemaschinen.",
      startAction: "Nach Bauteilanforderung auswählen",
      dataSheetsAction: "Typendaten & TDS finden",
    },
    selection: {
      kicker: "Anforderung zuerst",
      title: "Was muss das Bauteil leisten?",
      body:
        "Vergleichen Sie Modifizierungssysteme anhand der wesentlichen Ausfallrisiken des Bauteils und legen Sie die zu prüfenden Kennwerte fest.",
      navigationAria: "Werkstoffpfade nach Bauteilanforderung",
      paths: [
        {
          label: "Verschleiß / Reibung",
          title: "Bewegte oder gleitende Bauteile",
          description:
            "Bei Stick-Slip und Betätigungskraft vergleichen Sie PTFE oder Silikonöl, bei Spielzunahme Verschleiß und mechanischen Erhalt.",
        },
        {
          label: "Steifigkeit / Maßhaltigkeit",
          title: "Präzision unter Last",
          description:
            "Bei Halterdurchbiegung vergleichen Sie Biegemodul und Kriechen, bei Präzisionspassungen Richtungsschwindung und Verzug.",
        },
        {
          label: "Schlagzähigkeit / Montage",
          title: "Schnappverbindungen oder Stoßlasten",
          description:
            "Bei Rastrissen prüfen Sie Kerbzähigkeit und Montagedehnung, bei Dauerklemmung Haltekraft nach Kriechen.",
        },
        {
          label: "Ableitfähigkeit",
          title: "Leitfähige oder antistatische Funktion",
          description:
            "Definieren Sie Widerstandsverfahren und Erdung und wählen Sie Matrix und CNT-/Kohlenstofffasersystem nach Temperatur, Steifigkeit und Maßen.",
        },
      ],
    },
    families: {
      kicker: "Gesamtes Werkstoffspektrum",
      title: "Alle Produktfamilien durchsuchen",
      body:
        "Gelistete Werkstofftypen und Anwendungen in sechs Produktfamilien.",
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
          label: "Basisharz",
          description:
            "Für Form-, Maß- und Mechanikreferenzen; Fließtypen für allgemeine, komplexe oder dünnwandige Teile wählen.",
          metricLabel: "Basistypen",
        },
        {
          title: "PA6-Compounds",
          label: "Polyamide",
          description:
            "Glasfaserverstärktes, schlagzähes, flammgeschütztes, verschleißmodifiziertes und mineralgefülltes PA6; Auswahl nach Steifigkeit, Montagezähigkeit und Fließen.",
          metricLabel: "gelistete Typen",
        },
        {
          title: "PA66-Compounds",
          label: "Polyamide",
          description:
            "Glasfaserverstärktes, flammgeschütztes und verschleißmodifiziertes PA66; bei Warmlast Steifigkeitserhalt priorisieren und Trocken-/Konditionierungsmaße getrennt vergleichen.",
          metricLabel: "gelistete Typen",
        },
        {
          title: "PPA-Compounds",
          label: "Für höhere Temperaturen",
          description:
            "Wenn PA66-Warmsteifigkeit oder Feuchtemaße begrenzen, vergleichen Sie PPA-Typen sowie Trocknung, Werkzeugtemperatur und Anlagenfähigkeit.",
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
        "Senden Sie Bauteilfunktion, aktuellen Werkstoff und verfehlte Anforderungen sowie vorhandene Zeichnungen oder Einsatzdaten. Sie erhalten Typvergleiche, TDS, Versuchsmusterunterstützung und wichtige Prüfpunkte.",
      contactSource: "Produktverzeichnis",
    },
  },
} satisfies SiteMessages;

export default messages;
