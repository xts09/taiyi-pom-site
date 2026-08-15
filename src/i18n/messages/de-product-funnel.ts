import type { ProductFunnelMessages } from "@/i18n/productFunnelTypes";

const messages = {
  common: {
    home: "Startseite",
    products: "Produkte",
    category: "POM-Basisharz",
    technicalData: "Technische Daten",
    contact: "Kontakt",
    contactSourceCategory: "POM-Basisharz-Kategorie",
    contactSourceGrade: "Lokalisierte POM-Typseite",
    contactSourceTechnicalData: "Lokalisierte technische POM-Daten",
  },
  category: {
    metadata: {
      title: "POM-Basisharze für Präzisionsspritzguss | Taiyi Polymer",
      description:
        "Vergleichen Sie POM-Basisharze von Taiyi Polymer nach Fließfähigkeit, Zugfestigkeit, Wärmeformbeständigkeit und Projektanforderungen.",
      imageAlt: "Naturfarbenes POM-Basisharz von Taiyi Polymer",
    },
    hero: {
      eyebrow: "Werkstoffverzeichnis",
      title: "POM-Basisharz",
      description:
        "Vergleichen Sie Basistypen für Präzisions- und allgemeine Spritzgussteile anhand von Fließfähigkeit, mechanischem Profil, Wärmeformbeständigkeit und Bauteilgeometrie.",
      overviewLabel: "Auswahlrahmen",
      overview:
        "Die Vorauswahl beginnt mit Fließweg, Wanddicke, Werkzeugzustand und den geforderten Bauteileigenschaften. Die endgültige Freigabe erfolgt nach Musterung im Kundenprozess.",
      documentsTitle: "Unterlagen nach Typ und Projekt",
      documentsBody:
        "TDS, SDS, COA, REACH und RoHS werden nach Typ, Zielmarkt und Projektstand bestätigt.",
      contactAction: "Anwendung besprechen",
      technicalDataAction: "Technische Daten öffnen",
    },
    navigation: {
      aria: "Abschnittsnavigation POM-Basisharz",
      title: "POM-Basisharz",
      subtitle: "Fließfähigkeit, Festigkeit und Werkzeuganforderungen vergleichen",
      grades: "Typen",
      faq: "FAQ",
    },
    directory: {
      kicker: "Typenauswahl",
      title: "POM-Basistypen vergleichen",
      body:
        "Die Kennwerte dienen der technischen Vorauswahl. Für Typen ohne freigegebene Sprachseite führt die Aktion direkt zur projektbezogenen Prüfung.",
      countSuffix: "gelistete Typen",
      grade: "Typ",
      keyData: "Kerndaten",
      route: "Nächster Schritt",
      mfi: "MFI",
      tensile: "Zugfestigkeit",
      hdt: "HDT",
      color: "Farbe",
      natural: "Natur",
      detailAction: "Typdetails",
      reviewAction: "Projektprüfung",
      summaries: {
        "etm090nc-base-pom-resin":
          "Standardtyp mit ausgewogener Festigkeit und Maßstabilität.",
        "etm130-base-pom-resin":
          "Mittlere Fließfähigkeit und ausgewogenes mechanisches Profil.",
        "etm1500-base-pom-resin":
          "Sehr hohe Fließfähigkeit für leichteres Füllen komplexer Formteile.",
        "etm1800-base-pom-resin":
          "Maximale Fließrichtung für besonders fließwegkritische Formteile.",
        "etm270-base-pom-resin":
          "Hohe Fließfähigkeit für dünnwandige und präzise Spritzgussteile.",
        "etm450-base-pom-resin":
          "Hohe Fließfähigkeit für Präzisions-, Elektro- und Automobilteile.",
        "etm750-base-pom-resin":
          "Sehr hohe Fließfähigkeit für dünnwandige und füllkritische Bauteile.",
        "xt-100-base-pom-resin":
          "POM mit niedriger Dichte und hoher Schlagzähigkeitsrichtung für Präzisions- und allgemeine Spritzgussteile.",
      },
    },
    faq: {
      kicker: "FAQ",
      title: "Fragen zur Vorauswahl",
      items: [
        {
          question: "Wie wird der passende Fließbereich gewählt?",
          answer:
            "Wanddicke, Fließweg, Anschnitt, Kavitätenzahl und Werkzeugzustand bestimmen den benötigten Fließbereich. Ein höherer MFI-Wert allein bedeutet nicht automatisch eine bessere Bauteilleistung.",
        },
        {
          question: "Sind die Typen direkt austauschbar?",
          answer:
            "Nein. Datenblätter unterstützen die Vorauswahl; Bauteilgeometrie, Werkzeug, Verarbeitung, Maßhaltigkeit und Endanwendung müssen im eigenen Prozess geprüft werden.",
        },
        {
          question: "Welche Unterlagen können angefragt werden?",
          answer:
            "Die Verfügbarkeit von TDS, SDS, COA, REACH- und RoHS-Unterlagen wird typ- und projektbezogen bestätigt.",
        },
      ],
    },
    inquiry: {
      eyebrow: "Projektprüfung",
      title: "Eine belastbare Typen-Shortlist vorbereiten",
      body:
        "Senden Sie Bauteilfunktion, Wanddicke, Fließweg, Werkzeugstand, aktuellen Werkstoff, Zielwerte, Farbe, Dokumentenbedarf und geschätztes Volumen. Daraus lässt sich die nächste Daten-, Muster- und Prüfphase ableiten.",
      action: "Projektangaben senden",
      steps: ["Bauteilgeometrie", "Prozess und Werkzeug", "Unterlagen und Muster"],
    },
  },
  grade: {
    metadata: {
      title: "XT-100 POM mit niedriger Dichte und hoher Schlagzähigkeit | Taiyi Polymer",
      description:
        "Prüfen Sie XT-100 POM anhand von Dichte, MFI, Zug-, Schlag- und Wärmedaten und fordern Sie Unterlagen oder ein Muster für die technische Bewertung an.",
      imageAlt: "Naturfarbenes XT-100 POM-Granulat von Taiyi Polymer",
    },
    breadcrumb: "XT-100",
    eyebrow: "POM mit niedriger Dichte und hoher Schlagzähigkeitsrichtung · Spritzguss",
    positioning:
      "Ein Kandidat für Präzisions- und allgemeine Spritzgussteile, bei denen Dichte, Schlagzähigkeit und ein ausgewogenes Fließprofil gemeinsam geprüft werden.",
    summary:
      "Die veröffentlichten Werte dienen der frühen Werkstoffauswahl. Die Eignung muss mit realer Bauteilgeometrie, Werkzeug, Prozessfenster und Einsatzbedingungen bestätigt werden.",
    documentSupport: "Dokumentenunterstützung",
    documentNote: "Verfügbarkeit wird nach Typ, Zielmarkt und Projekt bestätigt.",
    sampleAction: "XT-100 Muster anfragen",
    evaluationAction: "Typprüfung anfragen",
    independentNote: "Eigenständiger Taiyi-Typ · Musterprüfung empfohlen",
    snapshot: {
      aria: "XT-100 Kennwertübersicht",
      title: "XT-100 Auswahlprofil",
      body:
        "Prüfen Sie zuerst Fließfähigkeit, Zugfestigkeit, Wärmeformbeständigkeit und Farbe; danach folgen Bauteil- und Prozessvalidierung.",
      mfi: "MFI",
      tensile: "Zugfestigkeit",
      hdt: "HDT",
      color: "Farbe",
      flowNote: "Profil mit niedriger Dichte und hoher Schlagzähigkeitsrichtung",
      colorValue: "Natur",
    },
    sectionNav: {
      aria: "Abschnitte der XT-100 Produktseite",
      properties: "Kennwerte",
      fit: "Werkstoffprofil",
      evaluation: "Prüfweg",
      notes: "Hinweise",
    },
    properties: {
      kicker: "Technische Nachweise",
      title: "Referenzwerte für die Vorauswahl",
      body:
        "Werte, Einheiten, Normen und Prüfbedingungen müssen gemeinsam gelesen werden. Sie ersetzen keine Musterung und keine kundenspezifische Freigabe.",
      property: "Eigenschaft",
      value: "Wert",
      unit: "Einheit",
      method: "Prüfmethode",
      requestAction: "Aktuelle Unterlagen anfragen",
      labels: {
        Density: "Dichte",
        "Melt Flow Rate (MFI)": "Schmelzeflussrate (MFI)",
        "Molding Shrinkage": "Formschwindung",
        "Water Absorption": "Wasseraufnahme",
        "Tensile Strength": "Zugfestigkeit",
        "Tensile Strain at Break": "Bruchdehnung",
        "Flexural Strength": "Biegefestigkeit",
        "Flexural Modulus": "Biegemodul",
        "Charpy Notched Impact Strength": "Charpy-Kerbschlagzähigkeit",
        "Izod Notched Impact Strength": "Izod-Kerbschlagzähigkeit",
        "Melting Temperature": "Schmelztemperatur",
        "Heat Deflection Temperature": "Wärmeformbeständigkeit",
        "Coefficient of Linear Thermal Expansion, CLTE":
          "Linearer Wärmeausdehnungskoeffizient (CLTE)",
        "Volume Resistivity": "Spezifischer Durchgangswiderstand",
        "Surface Resistivity": "Oberflächenwiderstand",
        "Dielectric Strength": "Durchschlagfestigkeit",
      },
      internalMethod: "Interne Methode",
      injectionMolding: "Spritzguss",
    },
    featuresTitle: "Auswahlmerkmale",
    features: [
      "Richtung mit niedriger Dichte",
      "Richtung mit hoher Schlagzähigkeit",
      "Für Spritzguss vorgesehen",
      "Naturfarbe",
    ],
    applicationsTitle: "Typische Prüfrichtungen",
    applications: [
      "Präzise technische Kunststoffteile",
      "Automobilkomponenten",
      "Elektro- und Elektronikteile",
      "Industrielle Spritzgussteile",
    ],
    evaluation: {
      kicker: "Technischer Prüfweg",
      title: "Von der Datenprüfung zur Bauteilentscheidung",
      body:
        "XT-100 wird als Kandidat zur technischen Bewertung angeboten. Die endgültige Freigabe erfolgt nach Prüfung im Kundenwerkzeug und in der realen Anwendung.",
      steps: [
        {
          title: "Anwendung beschreiben",
          body: "Bauteilgeometrie, Prozess, aktueller Werkstoff und Zielwerte übermitteln.",
        },
        {
          title: "Daten und Muster prüfen",
          body: "Unterlagen, Farbe, Mustermenge und relevantes Prüfprogramm festlegen.",
        },
        {
          title: "Im eigenen Prozess validieren",
          body: "Füllung, Maße, Oberfläche und Endanwendung am realen Bauteil bewerten.",
        },
      ],
    },
    notes: {
      title: "Hinweise zur Werkstoffbewertung",
      body:
        "Diese Seite unterstützt die vorläufige Auswahl von XT-100. Bauteildesign, Werkzeug, Verarbeitung, Leistungsziele und kundenspezifische Anforderungen können das Ergebnis verändern. Fordern Sie die aktuellen Unterlagen an und bestätigen Sie den Typ durch Musterung und Anwendungstests.",
    },
    inquiry: {
      eyebrow: "XT-100 Projektprüfung",
      title: "XT-100 für Ihr Formteil prüfen?",
      body:
        "Senden Sie Anwendung, Verarbeitungsverfahren, aktuellen Werkstoff, Zielwerte, Farbe, geschätztes Volumen und benötigte Unterlagen. Wir bereiten die Typ- und Musterprüfung vor.",
      action: "XT-100 Prüfung anfragen",
    },
  },
  gradeProfiles: {
    "etm450-base-pom-resin": {
      metadata: {
        title: "ETM450 hochfließendes POM für Präzisionsteile | Taiyi Polymer",
        description:
          "Prüfen Sie ETM450 als hochfließenden POM-Typ für Präzisionsspritzguss anhand von MFI, Zug-, Schlag- und Wärmedaten und fordern Sie ein Muster an.",
        imageAlt: "Naturfarbenes ETM450 POM-Granulat von Taiyi Polymer",
      },
      breadcrumb: "ETM450",
      eyebrow: "Hochfließendes POM · Spritzguss",
      positioning:
        "Ein Kandidat für Präzisionsspritzgussteile, bei denen gute Formfüllung und ein belastbares mechanisches Profil gemeinsam geprüft werden.",
      summary:
        "Die veröffentlichten Werte dienen der frühen Werkstoffauswahl. Die Eignung muss mit realer Bauteilgeometrie, Werkzeug, Prozessfenster und Einsatzbedingungen bestätigt werden.",
      sampleAction: "ETM450 Muster anfragen",
      snapshot: {
        aria: "ETM450 Kennwertübersicht",
        title: "ETM450 Auswahlprofil",
        body:
          "Prüfen Sie zuerst Fließfähigkeit, Zugfestigkeit, Wärmeformbeständigkeit und Farbe; danach folgen Bauteil- und Prozessvalidierung.",
        flowNote: "Hochfließendes Profil für Präzisionsspritzguss",
      },
      sectionNavAria: "Abschnitte der ETM450 Produktseite",
      features: [
        "Hohe Fließfähigkeit",
        "Für Präzisionsspritzguss ausgerichtet",
        "Für Spritzguss vorgesehen",
        "Naturfarbe",
      ],
      applications: [
        "Präzisionsformteile",
        "Automobilkomponenten",
        "Elektro- und Elektronikteile",
        "Sanitärarmaturen",
      ],
      evaluationBody:
        "ETM450 wird als Kandidat zur technischen Bewertung angeboten. Die endgültige Freigabe erfolgt nach Prüfung im Kundenwerkzeug und in der realen Anwendung.",
      notesBody:
        "Diese Seite unterstützt die vorläufige Auswahl von ETM450. Bauteildesign, Werkzeug, Verarbeitung, Leistungsziele und kundenspezifische Anforderungen können das Ergebnis verändern. Fordern Sie die aktuellen Unterlagen an und bestätigen Sie den Typ durch Musterung und Anwendungstests.",
      inquiry: {
        eyebrow: "ETM450 Projektprüfung",
        title: "ETM450 für Ihr Formteil prüfen?",
        body:
          "Senden Sie Anwendung, Verarbeitungsverfahren, aktuellen Werkstoff, Zielwerte, Farbe, geschätztes Volumen und benötigte Unterlagen. Wir bereiten die Typ- und Musterprüfung vor.",
        action: "ETM450 Prüfung anfragen",
      },
    },
    "etm750-base-pom-resin": {
      metadata: {
        title: "ETM750 hochfließendes POM für Dünnwandteile | Taiyi Polymer",
        description:
          "Prüfen Sie ETM750 als sehr hochfließenden POM-Typ für dünnwandige und füllkritische Spritzgussteile und fordern Sie Daten oder ein Muster an.",
        imageAlt: "Naturfarbenes ETM750 POM-Granulat von Taiyi Polymer",
      },
      breadcrumb: "ETM750",
      eyebrow: "Sehr hochfließendes POM · Spritzguss",
      positioning:
        "Ein Kandidat für dünnwandige und füllkritische Spritzgussteile, bei denen lange Fließwege und die mechanische Leistung gemeinsam geprüft werden.",
      summary:
        "Die veröffentlichten Werte dienen der frühen Werkstoffauswahl. Die Eignung muss mit realer Bauteilgeometrie, Werkzeug, Prozessfenster und Einsatzbedingungen bestätigt werden.",
      sampleAction: "ETM750 Muster anfragen",
      snapshot: {
        aria: "ETM750 Kennwertübersicht",
        title: "ETM750 Auswahlprofil",
        body:
          "Prüfen Sie zuerst Fließfähigkeit, Zugfestigkeit, Wärmeformbeständigkeit und Farbe; danach folgen Füll-, Bauteil- und Prozessvalidierung.",
        flowNote: "Sehr hochfließendes Profil für dünnwandige Formteile",
      },
      sectionNavAria: "Abschnitte der ETM750 Produktseite",
      features: [
        "Sehr hohe Fließfähigkeit",
        "Ausrichtung auf dünnwandige Formteile",
        "Für Spritzguss vorgesehen",
        "Naturfarbe",
      ],
      applications: [
        "Dünnwandige Formteile",
        "Automobilkomponenten",
        "Elektro- und Elektronikteile",
        "Industrielle Spritzgussteile",
      ],
      evaluationBody:
        "ETM750 wird als Kandidat zur technischen Bewertung angeboten. Die endgültige Freigabe erfolgt nach Füll- und Bauteilprüfung im Kundenwerkzeug und in der realen Anwendung.",
      notesBody:
        "Diese Seite unterstützt die vorläufige Auswahl von ETM750. Fließweg, Wanddicke, Anschnitt, Werkzeug, Verarbeitung und Leistungsziele können das Ergebnis verändern. Fordern Sie die aktuellen Unterlagen an und bestätigen Sie den Typ durch Musterung und Anwendungstests.",
      inquiry: {
        eyebrow: "ETM750 Projektprüfung",
        title: "ETM750 für Ihr dünnwandiges Formteil prüfen?",
        body:
          "Senden Sie Wanddicke, Fließweg, Anschnitt, Werkzeugstand, aktuellen Werkstoff, Zielwerte, Farbe, Volumen und benötigte Unterlagen. Wir bereiten die Typ- und Musterprüfung vor.",
        action: "ETM750 Prüfung anfragen",
      },
    },
  },
  technicalData: {
    metadata: {
      title: "Technische Daten und TDS für POM | Taiyi Polymer",
      description:
        "Öffnen Sie geprüfte POM-Typdaten mit Einheiten, Normen und Prüfbedingungen und fragen Sie aktuelle TDS- und Projektdokumente an.",
      imageAlt: "Technische POM-Daten und TDS-Prüfung bei Taiyi Polymer",
    },
    eyebrow: "Daten und Nachweise",
    title: "Technische Daten für die Werkstoffprüfung",
    description:
      "Diese Sprachversion veröffentlicht nur Typen, deren technische Seite und Erklärtexte vollständig geprüft wurden. Werte sind zusammen mit Einheit, Norm und Prüfbedingung zu lesen.",
    evidenceTitle: "Freigegebene Typdaten",
    evidenceBody:
      "ETM450, ETM750 und XT-100 bilden die erste vollständig lokalisierte Datengruppe. Weitere Typen werden erst nach derselben technischen und sprachlichen Prüfung ergänzt.",
    gradeLabel: "Typ",
    materialLabel: "Werkstoff",
    statusLabel: "Datenstatus",
    statusValue: "Webdaten verfügbar · PDF nach Anfrage bestätigen",
    viewAction: "Typdaten öffnen",
    requestAction: "Aktuelle TDS anfragen",
    scopeTitle: "Was vor einer Freigabe zu prüfen ist",
    scopeItems: [
      "Norm, Einheit und Prüfbedingung jedes Kennwerts",
      "Bauteilgeometrie, Werkzeug und reales Prozessfenster",
      "Dokumentenrevision, Zielmarkt und kundenspezifische Anforderungen",
    ],
    inquiryEyebrow: "Dokumentenprüfung",
    inquiryTitle: "Benötigen Sie TDS, SDS, COA, REACH oder RoHS?",
    inquiryBody:
      "Nennen Sie Typ, Zielmarkt, Anwendung, Projektstand und benötigte Unterlagen. Die Verfügbarkeit und aktuelle Revision werden projektbezogen bestätigt.",
    inquiryAction: "Unterlagen anfragen",
  },
} satisfies ProductFunnelMessages;

export default messages;
