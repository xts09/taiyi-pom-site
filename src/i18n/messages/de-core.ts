import type { SiteMessages } from "@/i18n/types";
import { homeTaskFirstLocaleMessages } from "../homeTaskFirstLocaleMessages.ts";

const messages = {
  Home: {
    metadata: {
      title: "Modifizierte POM-Compounds für Industrieteile | Taiyi Polymer",
      description:
        "Taiyi Polymer fertigt modifizierte POM-Compounds für verschleißfeste, reibungsarme, verstärkte, leitfähige und antistatische Präzisionsformteile sowie ausgewählte PA6-, PA66- und PPA-Compounds.",
      imageAlt: "Fertigung modifizierter POM-Compounds bei Taiyi Polymer",
    },
    hero: {
      eyebrowDesktop: "TAIYI POLYMER · PLATFORM® WERKSTOFFE",
      eyebrowMobile: "TAIYI POLYMER · PLATFORM®",
      title: "Hersteller modifizierter POM-Compounds für Präzisionsformteile",
      body:
        "Taiyi Polymer entwickelt modifizierte POM-Compounds für verschleißfeste, reibungsarme, verstärkte, leitfähige und antistatische Präzisionsteile und unterstützt ausgewählte PA6-, PA66- und PPA-Projekte von der Typenauswahl bis zur Produktion.",
      exploreAction: "Werkstoff nach Bauteil finden",
      contactAction: "Typen & TDS finden",
    },
    metrics: [
      { label: "Jährliche Compound-Kapazität", note: "Tonnen pro Jahr" },
      { label: "Wurzeln der Fertigung", note: "Tradition in der Herstellung technischer Kunststoffe" },
      { label: "Doppelschneckenlinien", note: "Eigene Extrusionslinien" },
      { label: "Betriebsfläche", note: "Quadratmeter" },
      { label: "Prüfgeräte", note: "Eigene Einheiten" },
    ],
    materials: {
      title: "Werkstoffspektrum",
      body:
        "Beginnen Sie mit modifiziertem POM, unserer Kernproduktlinie. Ausgewählte PA6-, PA66- und PPA-Compounds prüfen wir, wenn ein Bauteil ein anderes Verhältnis von Steifigkeit, Wärmebeständigkeit oder Verarbeitungsverhalten benötigt.",
      documentSupport: "Dokumente nach Typ und Projekt",
      dataSheetsAction: "Typendaten und TDS finden",
      coreLabel: "Kernproduktlinie",
      coreDirectionsAria: "Leistungsrichtungen der POM-Compounds",
      coreDirections: [
        "Verschleißfestigkeit",
        "Geringe Reibung",
        "Verstärkung",
        "Leitfähigkeit",
        "Antistatik",
      ],
      allFamiliesAction: "Alle Werkstofffamilien",
      additionalFamiliesAria: "Weitere Werkstofffamilien",
      items: [
        {
          title: "POM-Compounds",
          description:
            "Kernproduktlinie für Formteile mit Anforderungen an Verschleißfestigkeit, geringe Reibung, Verstärkung, Leitfähigkeit oder antistatische Eigenschaften.",
          action: "POM-Compounds ansehen",
          specs: [
            ["Rolle", "Kernproduktlinie"],
            ["Richtungen", "Verschleiß / Reibung / Verstärkung"],
            ["Eignung", "Präzisionsformteile"],
            ["Daten", "Typenspezifisches TDS"],
          ],
        },
        {
          title: "PA6-Compounds",
          description:
            "Ausgewählte PA6-Compounds für verstärkte, schlagzähmodifizierte, flammgeschützte, verschleißbeanspruchte und mineralgefüllte Formteile.",
          action: "PA6-Compounds ansehen",
          specs: [
            ["Rolle", "Weitere Werkstofffamilie"],
            ["Werkstoff", "PA6"],
            ["Eignung", "Verstärkte / schlagbeanspruchte Teile"],
            ["Umfang", "Projektbezogen"],
          ],
        },
        {
          title: "PA66-Compounds",
          description:
            "Ausgewählte PA66-Compounds für verstärkte, flammgeschützte, verschleißbeanspruchte und maßhaltige Formteile.",
          action: "PA66-Compounds ansehen",
          specs: [
            ["Rolle", "Weitere Werkstofffamilie"],
            ["Werkstoff", "PA66"],
            ["Eignung", "Steife / wärmebeanspruchte Teile"],
            ["Umfang", "Projektbezogen"],
          ],
        },
        {
          title: "PPA-Compounds",
          description:
            "Projektbezogene PPA-Compounds für Formteile bei höheren Temperaturen, die Steifigkeit und Maßhaltigkeit erfordern.",
          action: "PPA-Compounds ansehen",
          specs: [
            ["Rolle", "Weitere Werkstofffamilie"],
            ["Werkstoff", "PPA"],
            ["Eignung", "Hochtemperaturbauteile"],
            ["Umfang", "Projektbezogen"],
          ],
        },
        {
          title: "POM-Basisharz",
          description:
            "Ergänzende Beschaffungslinie für Kunden, die ausgewählte POM-Basisharze zusätzlich zur Compound-Unterstützung benötigen.",
          action: "Harztypen ansehen",
          specs: [
            ["Rolle", "Ergänzende Linie"],
            ["Nutzung", "Ausgewählte Beschaffung"],
            ["Eignung", "Bedarf an Basisharz"],
            ["Farbe", "Natur"],
          ],
        },
      ],
    },
    qualification: {
      title: "So erstellen wir eine Typen-Shortlist",
      intro:
        "Wir vergleichen Bauteil, Werkzeug, Einsatzbedingungen und Dokumentenbedarf, um Kandidaten für TDS-Prüfung, Muster und Spritzgießversuche einzugrenzen.",
      applicationAction: "Anwendungspfade ansehen",
      figureAlt: "Schwarzes Kunststoffgranulat in einer Laborschale.",
      figureLabel: "Prüfgrundlage",
      figureCaption:
        "Kandidaten werden anhand von Bauteil-, Verarbeitungs- und Dokumentenanforderungen geprüft.",
      stepsAria: "Stufen der Typenqualifizierung",
      steps: [
        {
          stage: "Eingabe",
          title: "Bauteil und Werkzeug",
          description:
            "Bauteiltyp, Werkzeugstand, Kavitätenzahl, Anschnitt, Bewegungsart und Montageumgebung.",
        },
        {
          stage: "Verarbeitung",
          title: "Verarbeitung und Maßkontrolle",
          description:
            "Fließfähigkeit, Mehrkavitätenfüllung, Schwindung, Verzug, Maßhaltigkeit und Farbanforderungen.",
        },
        {
          stage: "Leistung",
          title: "Leistungsziele",
          description:
            "Verschleiß, Reibung, Steifigkeit, Schlagzähigkeit, Leitfähigkeit, Antistatik und Einsatztemperatur.",
        },
        {
          stage: "Entscheidung",
          title: "Typen-Shortlist",
          description:
            "Kandidaten werden verglichen, bevor Dokumentverfügbarkeit und Bedarf an Musterversuchen bestätigt werden.",
        },
      ],
    },
    quality: {
      title: "Nachweise für die Lieferantenqualifizierung",
      body:
        "Unternehmensauszeichnungen und Managementsystem-Zertifikate der Jiangsu Taiyi Nano Technology Co., Ltd. sowie werkstoffbezogene Dokumente beschleunigen die Lieferantenprüfung im Einkauf.",
      panelAria: "Unternehmensnachweise und werkstoffbezogene Dokumente",
      qualifications: [
        { category: "Unternehmensauszeichnung", title: "Nationales Hightech-Unternehmen" },
        {
          category: "Provinzielle Auszeichnung",
          title: "Spezialisiertes und innovatives KMU der Provinz Jiangsu",
        },
        { category: "Geistiges Eigentum", title: "29 erteilte Patente" },
      ],
      documentSupportTitle: "Dokumentenunterstützung",
      documentSupportBody: "Verfügbarkeit nach Typ und Projekt bestätigt.",
      documentListAria: "Werkstoffdokumente nach Typ und Projekt",
      documentNames: {
        TDS: "Technisches Datenblatt",
        SDS: "Sicherheitsdatenblatt",
        COA: "Analysezertifikat",
        REACH: "Registrierung, Bewertung, Zulassung und Beschränkung chemischer Stoffe",
        RoHS: "Beschränkung gefährlicher Stoffe",
      },
      certifications: [
        {
          system: "Qualitätsmanagement Automobilindustrie",
          scope:
            "Herstellung von Kunststoffgranulat, ausgenommen Produktentwicklung nach Abschnitt 8.3.",
        },
        {
          system: "Qualitätsmanagement",
          scope: "Herstellung von Nanopolymer-Werkstoffen (Kunststoffpartikel).",
        },
        {
          system: "Umweltmanagement",
          scope:
            "Umweltmanagement in vertriebsbezogenen Bereichen für Nanopolymer-Werkstoffe (Kunststoffpartikel).",
        },
        {
          system: "Arbeits- und Gesundheitsschutz",
          scope:
            "Arbeits- und Gesundheitsschutzmanagement in vertriebsbezogenen Bereichen für Nanopolymer-Werkstoffe (Kunststoffpartikel).",
        },
      ],
      featuredDescription: "Qualitätsmanagementsystem der Automobilindustrie",
      certificateAvailable: "Zertifikat als PDF verfügbar",
      certifiedScope: "Zertifizierter Geltungsbereich",
      openCertificate: "Zertifikat-PDF öffnen",
      openCertificateAria: "Zertifikat {standard} als PDF öffnen",
      scopePrefix: "Geltungsbereich:",
      openPdf: "PDF öffnen",
    },
    exportNetwork: {
      eyebrow: "LIEFERNETZWERK",
      title: "Exportrouten",
      description:
        "Projektrouten verbinden den Produktionsstandort Yancheng mit Zielen in Zentralasien, Europa, Ostasien und Amerika.",
      mapAlt:
        "Weltkarte mit Taiyi-Produktionsstandort und Exportregionen in Zentralasien, Europa, Ostasien und Amerika.",
      legendAria: "Kartenlegende",
      productionBase: "Produktionsstandort",
      exportRegion: "Exportregion",
      regionsTitle: "Projektregionen",
      regionsBody: "Wählen Sie eine Region, um die Routen auf der Karte hervorzuheben.",
      factsAria: "Fakten zum Exportnetzwerk",
      productionBaseValue: "Yancheng, Jiangsu, China",
      listedDestinations: "Aufgeführte Ziele",
      listedDestinationsValue: "9 Ziele dargestellt",
      routes: [
        { region: "Zentralasien", coverage: "Usbekistan und Kasachstan" },
        { region: "Europa", coverage: "Polen und Türkei" },
        { region: "Ostasien", coverage: "Südkorea und Japan" },
        { region: "Amerika", coverage: "Mexiko, Brasilien und Argentinien" },
      ],
    },
    inquiry: {
      eyebrow: "Anwendungsprüfung",
      title: "Teilen Sie uns Ihre Bauteilanforderungen mit",
      body:
        "Mit den folgenden Angaben grenzen wir Werkstoffrichtungen ein und klären verfügbare Typendaten, Dokumente und Muster.",
      checklistLabel: "Hilfreiche Ausgangsdaten",
      checklist: [
        "Bauteilfunktion und Bewegungsart",
        "Werkzeugstand und Verarbeitungsgrenzen",
        "Priorisierte Leistungsziele",
        "Aktueller Werkstoff, Schadensbild und Zeitplan",
      ],
      action: "Anwendung besprechen",
    },
    taskFirst: homeTaskFirstLocaleMessages.de,
  },
  Contact: {
    metadata: {
      title: "Werkstoffanforderung besprechen | Taiyi Polymer",
      description:
        "Kontaktieren Sie Jiangsu Taiyi Nano Technology Co., Ltd. zu modifiziertem POM, technischen Kunststoffcompounds, POM-Harz, Werkstoffempfehlungen, Dokumenten, Mustern und Projektbewertung.",
      imageAlt: "Produktionslinie für technische Kunststoffe bei Taiyi Polymer",
    },
    breadcrumbHome: "Startseite",
    breadcrumbContact: "Kontakt",
    hero: {
      title: "Werkstoffprüfung anfragen",
      description:
        "Beschreiben Sie Bauteilfunktion, Einsatzbedingungen und Zielanforderungen. Wir identifizieren relevante Werkstofffamilien, bestätigen verfügbare Dokumente und skizzieren den nächsten Muster- oder Bewertungsschritt.",
    },
    formPanel: {
      title: "Beginnen Sie mit den Kerndaten",
      body:
        "Unternehmen, E-Mail und Anwendung genügen für den Start. Technische Details können Sie ergänzen, wenn sie bereits vorliegen.",
      requiredBefore: "Mit",
      requiredAfter: "gekennzeichnete Felder sind Pflichtfelder.",
    },
    sales: {
      title: "Vertriebskontakt",
      contactPerson: "Ansprechpartner",
      role: "Vertriebsleiter",
      company: "Unternehmen",
      email: "E-Mail",
      whatsapp: "WhatsApp",
      location: "Standort",
      locationValue: "Yancheng, Jiangsu, China",
      reviewTitle: "Was wir prüfen können",
      reviewItems: [
        "Relevante Werkstofffamilien und Kandidatentypen",
        "Verfügbare technische Dokumente und Musterbedarf",
      ],
      emailDirectly: "Direkt per E-Mail",
    },
    directEmail: {
      greeting: "Guten Tag Ethan,",
      application: "Anwendung oder Bauteil",
      material: "Werkstoff oder aktueller Typ",
      reference: "Referenztyp",
      candidates: "Kandidaten-Shortlist",
      requirement: "Priorisierte Anforderung",
      keyRequirements: "Zentrale Anforderungen:",
      documentNeeds: "Benötigte Dokumente:",
      closing: "Mit freundlichen Grüßen",
      subject: "Anfrage zu einer Werkstoffanforderung",
    },
    context: {
      grade: "Interessierender Typ",
      reference: "Referenztyp",
      candidates: "Kandidaten-Shortlist",
      requirement: "Priorisierte Anforderung",
      intent: "Anfrageziel",
      sampleIntent: "Musteranfrage",
      evaluationIntent: "Typenbewertung",
      tdsIntent: "TDS oder Unterlagen",
      quoteSupplyIntent: "Angebot oder Liefergespräch",
    },
    form: {
      contextFrom: "Ausgangspunkt",
      contextPrefilled: "Diese Angaben sind vorausgefüllt und können bearbeitet werden.",
      clearContext: "Vorauswahl löschen",
      inquiryTypeLabel: "Was benötigen Sie?",
      inquiryTypePlaceholder: "Anfrageart auswählen",
      inquiryTypeOptions: {
        "grade-evaluation": "Typenempfehlung",
        tds: "TDS oder Unterlagen",
        sample: "Muster",
        "quote-supply": "Angebot oder Liefergespräch",
      },
      companyLabel: "Unternehmen",
      companyPlaceholder: "Unternehmensname",
      emailLabel: "E-Mail",
      materialLabel: "Werkstofffamilie (optional)",
      materialPlaceholder: "Werkstofffamilie auswählen",
      materialOptionLabels: {
        "Modified POM Compounds": "Modifizierte POM-Compounds",
        "Wear-Resistant & Low-Friction POM": "Verschleißfestes und reibungsarmes POM",
        "High-Impact POM": "Schlagzähes POM",
        "UV-Resistant POM": "UV-beständiges POM",
        "Glass Fiber Reinforced POM": "Glasfaserverstärktes POM",
        "Glass Bead Filled POM": "Glaskugelgefülltes POM",
        "Carbon Fiber Reinforced POM Compound": "Carbonfaserverstärktes POM-Compound",
        "Conductive / Antistatic POM": "Leitfähiges / antistatisches POM",
        "Base POM Resin": "POM-Basisharz",
        "Ultra-High Flow POM": "Ultrahochfließendes POM",
        "PA6 Compounds": "PA6-Compounds",
        "PA66 Compounds": "PA66-Compounds",
        "PPA Compounds": "PPA-Compounds",
        "Conductive & Antistatic Compounds": "Leitfähige und antistatische Compounds",
        "Other Engineering Plastic Compound": "Anderes technisches Kunststoffcompound",
      },
      applicationLabel: "Anwendung / Bauteil",
      applicationPlaceholder: "Zahnrad, Clip, Gehäuse …",
      detailsLabel: "Anforderungsdetails (optional)",
      detailsPlaceholder:
        "Aktueller Typ, Einsatzbedingungen, Zielwerte, Jahresmenge oder Dokumentenbedarf.",
      sending: "Wird gesendet …",
      submit: "Projektanforderungen senden",
      fallbackNote: "Falls die direkte Zustellung nicht möglich ist, öffnet sich ein E-Mail-Entwurf.",
      sentStatus: "Gesendet. Wir prüfen Ihre Anforderung und antworten per E-Mail.",
      fallbackStatus:
        "Ein E-Mail-Entwurf wurde vorbereitet; der Anfragetext wurde nach Möglichkeit kopiert.",
      emailDraft: {
        notSpecified: "Nicht angegeben",
        greeting: "Guten Tag Ethan,",
        intro: "Bitte prüfen Sie die folgende Werkstoffanforderung:",
        company: "Unternehmen",
        email: "E-Mail",
        material: "Werkstoffinteresse",
        application: "Anwendung / Bauteil",
        inquiryType: "Ihr Bedarf",
        grade: "Typ",
        source: "Quelle",
        details: "Anforderungsdetails:",
        closing: "Mit freundlichen Grüßen",
        subjectPrefix: "Werkstoffanforderung",
      },
    },
  },
} satisfies Pick<SiteMessages, "Home" | "Contact">;

export default messages;
