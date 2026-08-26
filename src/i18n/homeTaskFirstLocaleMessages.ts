import type { HomeTaskFirstMessages } from "@/i18n/types";

type AlignedHomeLocale = "en" | "de" | "fr" | "pt-br";

export const homeTaskFirstLocaleMessages = {
  en: {
    entry: {
      eyebrow: "Material selection",
      title: "Start with the part requirements and find the right material",
      body: "For gears, focus on counterfaces, wear and noise; for structural parts, stiffness, shrinkage and dimensional stability; for electrical parts, resistance range and operating environment.",
      ariaLabel: "Choose a path based on your current material-selection task",
      items: [
        {
          label: "Part",
          title: "I am selecting material for a part",
          description:
            "Start with the part function, motion, load, assembly environment and tooling stage.",
          action: "Browse part paths",
        },
        {
          label: "Performance need",
          title: "I need to solve a performance problem",
          description:
            "Start with the performance gap: wear, low friction, reinforcement, impact, weathering, conductivity or antistatic behavior.",
          action: "Explore material options",
        },
        {
          label: "Grade & data",
          title: "I already have a reference grade",
          description:
            "Start with a reference grade, material type or performance keyword to locate listed grades, TDS and technical documents.",
          action: "Find Grade Data & TDS",
        },
      ],
    },
    core: {
      eyebrow: "Products",
      title: "Modified POM, Our Core Material for Precision Parts",
      body: "POM combines well-balanced mechanical properties with wear resistance, self-lubrication and dimensional stability. It was first commercialized to replace machinery components such as gears, screws and bearings that had traditionally been made of metal. Today, its applications range from everyday goods such as zippers and toothbrushes to automotive components including door locks and latches, seat-belt locking mechanisms and fuel-system parts. PLATFORM® takes this proven material further through modification—engineered for parts that cannot afford inconsistency, and for manufacturers who expect precision to hold from the first trial to full-scale production.",
      action: "Explore the POM Compound Series",
      materialImageAlt:
        "Black carbon-fiber-reinforced POM pellets for engineering injection-molded parts.",
      materialImageCaption: "Carbon Fiber Reinforced POM",
      directionsAria: "Modified POM options and material families",
      panelLabel: "Selection priorities",
      technicalTitle: "POM technical information",
      technicalLinks: [
        {
          title: "Standard molding conditions",
          description:
            "Review handling, trial setup and grade-specific processing points.",
        },
        {
          title: "Molding technology",
          description:
            "Open molding, process-control and troubleshooting resources.",
        },
        {
          title: "Grade compositions & catalogue",
          description:
            "Browse POM material families and current listed grades.",
        },
      ],
      gradeNote:
        "Can't find the grade you need? Search current grade data or discuss the requirement with us.",
      contactAction: "Discuss Your Application",
      reviewLabel: "Confirm first",
      materialsLabel: "Material routes",
      groups: [
        {
          title: "Wear & low friction",
          summary: "Sliding, noise & counterfaces",
          panelTitle: "Help moving parts resist wear and run more quietly",
          description: "",
          reviewInputs: [
            "Counterface material and surface condition",
            "Load, speed and lubrication conditions",
            "Service life, wear and noise targets",
          ],
          componentsNote:
            "Common components: gears, bushings, sliders, guides and conveyor-chain parts",
          action: "Wear & low-friction POM",
          relatedLinks: [],
        },
        {
          title: "Reinforcement & dimensional control",
          summary: "Stiffness, shrinkage & warpage",
          panelTitle: "Improve stiffness and dimensional stability",
          description: "",
          reviewInputs: [
            "Load direction and stiffness target",
            "Wall thickness, gate position and fiber orientation",
            "Shrinkage and critical dimensional tolerances",
          ],
          componentsNote:
            "Common components: brackets, housings, precision structures and load-bearing parts",
          action: "Glass-fiber POM",
          relatedLinks: ["Carbon-fiber POM", "Glass-bead-filled POM"],
        },
        {
          title: "Impact & weather resistance",
          summary: "Toughness, assembly stress & light",
          panelTitle: "Add toughness for assembly and outdoor exposure",
          description: "",
          reviewInputs: [
            "Impact temperature and notch condition",
            "Assembly strain and repeated loading",
            "Light exposure, color and exposure duration",
          ],
          componentsNote:
            "Common components: clips, locking parts, assembly structures and outdoor moving parts",
          action: "High-impact POM",
          relatedLinks: ["Weather-resistant POM"],
        },
        {
          title: "Conductive & antistatic",
          summary: "Resistance range, grounding & environment",
          panelTitle:
            "Choose conductive or antistatic materials by resistance target",
          description: "",
          reviewInputs: [
            "Surface or volume resistance range",
            "Test method, grounding and humidity",
            "Color, cleanliness and use environment",
          ],
          componentsNote:
            "Common components: IC trays, handling fixtures, electrical structures and static-control parts",
          action: "Conductive & antistatic POM",
          relatedLinks: ["Static control across polymers"],
        },
      ],
      supportingTitle: "Beyond POM: more engineering-plastic options",
      supportingBody:
        "Compare other materials when stiffness, heat resistance, moisture response or processing needs a different balance.",
      supportingLinks: ["Base POM resin", "PA6", "PA66", "PPA"],
      allFamiliesAction: "View all material families",
    },
    components: {
      eyebrow: "Component Solutions",
      title: "Find the Right Material for Each Part",
      body: "Review the key operating conditions and material priorities for each part.",
      action: "View all components",
      items: [
        {
          title: "Precision Plastic Gears",
          description:
            "Screen by torque, tooth geometry, speed, mating material, lubrication and accuracy targets.",
          imageAlt:
            "Precision plastic gears and motion components used to explain material selection.",
        },
        {
          title: "Bushings and Sleeves",
          description:
            "Screen by load, sliding speed, shaft and housing materials, clearance, lubrication and operating environment.",
          imageAlt:
            "Engineering-plastic bushings, sleeves and sliding guides used to explain material selection.",
        },
        {
          title: "Conveyor Chain Components",
          description:
            "Check chain tension, joint wear, guide-rail friction, pitch, static-control targets and operating environment.",
          imageAlt:
            "Plastic conveyor plates, links and automation components used to explain material selection.",
        },
        {
          title: "Valve Spools and Cartridges",
          description:
            "Define pressure, media, sealing conditions, spool clearance, motion cycles and flow function.",
          imageAlt:
            "Molded valve spools, cartridges and internal flow-control parts used to explain material selection.",
        },
        {
          title: "Textile Guide Components",
          description:
            "Check yarn, speed, tension, contact geometry, surface quality, wear and static behavior.",
          imageAlt:
            "Yarn-guide components for textile machinery used to explain material selection.",
        },
        {
          title: "IC Handling Trays",
          description:
            "Define ESD class, process temperature, flatness, pocket geometry, cleanliness and handling conditions.",
          imageAlt:
            "IC handling trays and precision pockets used to explain material selection.",
        },
      ],
    },
    applications: {
      eyebrow: "Applications",
      title: "Explore Materials by Application",
      body: "Review material directions for each operating context.",
      action: "View all applications",
      items: [
        {
          title: "Automotive",
          description:
            "Functional molded parts for vehicle doors, seats, fuel systems, wipers, control boxes, and interior mechanisms.",
          imageAlt:
            "Vehicle assembly line with automotive functional modules.",
        },
        {
          title: "Electronics",
          description:
            "Precision molded parts for electrical connection, insulation, control, and actuation.",
          imageAlt:
            "Electronics assembly station with functional electrical modules.",
        },
        {
          title: "Conveyor Automation",
          description:
            "Plastic chain plates, conveyor guides, rollers, and handling components for clean automated movement.",
          imageAlt:
            "Clean automated conveyor line with modular chain plates.",
        },
        {
          title: "Motion",
          description:
            "Gears, rollers, bushings, sleeves, and sliding parts for transmission, guidance, and low-friction movement.",
          imageAlt:
            "Industrial motion module with gears and molded moving parts.",
        },
        {
          title: "Water Control",
          description:
            "Valve, sanitary, pump, and water-control molded parts for clean movement and stable assembly.",
          imageAlt:
            "Clean water-control assembly line with valve and flow modules.",
        },
        {
          title: "Washing Machine",
          description:
            "Functional molded components for drum drive, water routing, drainage, valves, and moving assemblies.",
          imageAlt:
            "Washing-machine mechanism with molded drive, drainage and door-lock components.",
        },
        {
          title: "Outdoor Equipment",
          description:
            "Weather-exposed molded parts for garden equipment, sprinklers, outdoor mechanisms, and durable assemblies.",
          imageAlt:
            "Outdoor-equipment assembly line with garden-machinery modules.",
        },
        {
          title: "Textile Machinery",
          description:
            "Wear-resistant guide, motion, and low-shrinkage molded parts for textile and fabric-handling systems.",
          imageAlt:
            "Textile-machinery production line with yarn-handling and guide components.",
        },
      ],
    },
    process: {
      stepsAria: "Define the need, select candidates, then validate and scale",
      steps: [
        {
          title: "Define the Need",
          description:
            "Clarify part function, service conditions and processing constraints.",
        },
        {
          title: "Select Candidates",
          description:
            "Shortlist grades that fit the application and trial scope.",
        },
        {
          title: "Validate & Scale",
          description:
            "Test, review results and prepare the selected material for production.",
        },
      ],
    },
    collaboration: {
      eyebrow: "APPLICATION-LED SUPPORT",
      title: "Decisions Built Around the Part",
      body:
        "We connect part requirements with material candidates, trial evidence and a workable route to production.",
      itemsAria: "How Taiyi Polymer supports project collaboration",
      items: [
        {
          title: "Cross-Functional Review",
          description:
            "Commercial, technical and production teams assess performance targets, processing conditions and supply needs together.",
        },
        {
          title: "Evidence Before Scale-Up",
          description:
            "Samples, small trial lots and molding feedback help compare candidate materials before a production decision.",
        },
        {
          title: "Practical Formulation Assessment",
          description:
            "If an existing grade does not fit, we assess whether a formulation adjustment is technically appropriate and feasible to produce.",
        },
      ],
      action: "Discuss Your Application",
    },
    proof: {
      eyebrow: "Manufacturing & Validation",
      body:
        "Modified compounds are produced on in-house twin-screw lines and evaluated using internal test equipment. Available technical, batch and compliance documents are confirmed by grade and project.",
      factoryImageAlt:
        "Twin-screw extrusion lines at the Taiyi Polymer manufacturing site in Yancheng.",
      factoryImageCaption:
        "Yancheng manufacturing site · twin-screw extrusion workshop",
      metricsAria: "Taiyi Polymer manufacturing and testing figures",
      metricLabels: [
        "Annual Compound Capacity",
        "In-House Twin-Screw Lines",
        "In-House Test Equipment",
      ],
      metricNotes: ["metric tons/year", "lines", "units"],
      documentsTitle: "Project Documents",
      documentsBody:
        "TDS, SDS, COA, REACH and RoHS availability is confirmed by grade and project.",
      documentsAria:
        "Document types available for confirmation by grade and project",
      documentsAction: "Request Project Documents",
      documentTypeDescriptions: [
        "Technical data",
        "Safety and handling",
        "Batch test results",
        "Substance compliance",
        "Restricted substances",
      ],
      certificatesTitle: "Quality-Management System Certificates",
      certificateAction: "View all certificates and certified scopes",
      certificateOpenAction: "View certificate",
      internationalLabel: "International Project Support",
      internationalBody:
        "Material documentation and export-delivery coordination are available for international projects.",
    },
  },
  de: {
    entry: {
      eyebrow: "Werkstoffauswahl",
      title: "Von der Bauteilanforderung zum passenden Werkstoff",
      body: "Bei Zahnrädern zählen Reibpaarung, Verschleiß und Geräusch, bei Strukturteilen Steifigkeit, Schwindung und Maßhaltigkeit, bei elektrischen Bauteilen Widerstandsbereich und Einsatzumgebung.",
      ariaLabel: "Pfad nach aktueller Aufgabe der Werkstoffauswahl wählen",
      items: [
        {
          label: "Bauteil",
          title: "Ich wähle einen Werkstoff für ein Bauteil",
          description:
            "Beginnen Sie mit Bauteilfunktion, Bewegung, Last, Montageumgebung und Werkzeugstand.",
          action: "Bauteilpfade ansehen",
        },
        {
          label: "Leistungsanforderung",
          title: "Ich muss ein Leistungsproblem lösen",
          description:
            "Beginnen Sie mit der Leistungslücke: Verschleiß, geringe Reibung, Verstärkung, Schlagzähigkeit, Bewitterung, Leitfähigkeit oder Antistatik.",
          action: "Werkstoffrichtungen ansehen",
        },
        {
          label: "Typ & Daten",
          title: "Ich habe bereits einen Referenztyp",
          description:
            "Suchen Sie mit Referenztyp, Werkstoffart oder Leistungsmerkmal nach gelisteten Typen, TDS und technischen Unterlagen.",
          action: "Typendaten & TDS finden",
        },
      ],
    },
    core: {
      eyebrow: "Produkte",
      title: "Modifiziertes POM – unser Kernwerkstoff für Präzisionsteile",
      body: "POM verbindet ausgewogene mechanische Eigenschaften mit Verschleißfestigkeit, Selbstschmierung und hoher Maßhaltigkeit. Der Werkstoff wurde ursprünglich kommerziell eingesetzt, um zuvor aus Metall gefertigte Maschinenteile wie Zahnräder, Schrauben und Lager zu ersetzen. Heute reicht sein Anwendungsspektrum von Alltagsprodukten wie Reißverschlüssen und Zahnbürsten bis zu Fahrzeugkomponenten wie Türschlössern und Verriegelungen, Sicherheitsgurtmechanismen und Teilen von Kraftstoffsystemen. PLATFORM® führt diesen bewährten Werkstoff durch gezielte Modifizierung weiter – für Bauteile, die keine Schwankungen verzeihen, und für Hersteller, die vom ersten Werkzeugversuch bis zur Serienproduktion auf Präzision und Beständigkeit angewiesen sind.",
      action: "Modifizierte POM-Reihe entdecken",
      materialImageAlt:
        "Schwarzes kohlenfaserverstärktes POM-Granulat für technische Spritzgussteile.",
      materialImageCaption: "Kohlenfaserverstärktes POM",
      directionsAria: "Richtungen und Werkstofffamilien für modifiziertes POM",
      panelLabel: "Auswahlkriterien",
      technicalTitle: "Technische POM-Informationen",
      technicalLinks: [
        {
          title: "Standard-Verarbeitungsbedingungen",
          description:
            "Hinweise zu Handhabung, Versuchsvorbereitung und typspezifischer Verarbeitung.",
        },
        {
          title: "Spritzgießtechnik",
          description:
            "Ressourcen zu Formgebung, Prozesskontrolle und Fehleranalyse.",
        },
        {
          title: "Typenzusammensetzung & Katalog",
          description:
            "POM-Werkstofffamilien und aktuell gelistete Typen ansehen.",
        },
      ],
      gradeNote:
        "Gesuchten Typ nicht gefunden? Durchsuchen Sie die aktuellen Typendaten oder besprechen Sie die Anforderung mit uns.",
      contactAction: "Anwendung besprechen",
      reviewLabel: "Zuerst klären",
      materialsLabel: "Werkstoffpfade",
      groups: [
        {
          title: "Verschleiß & geringe Reibung",
          summary: "Gleiten, Geräusch & Reibpaarung",
          panelTitle: "Bewegte Teile verschleißfester und leiser auslegen",
          description: "",
          reviewInputs: [
            "Gegenlaufwerkstoff und Oberflächenzustand",
            "Last, Geschwindigkeit und Schmierung",
            "Lebensdauer-, Verschleiß- und Geräuschziel",
          ],
          componentsNote:
            "Typische Bauteile: Zahnräder, Buchsen, Gleiter, Führungen und Förderkettenteile",
          action: "Verschleißarmes POM",
          relatedLinks: [],
        },
        {
          title: "Verstärkung & Maßkontrolle",
          summary: "Steifigkeit, Schwindung & Verzug",
          panelTitle: "Steifigkeit und Maßhaltigkeit verbessern",
          description: "",
          reviewInputs: [
            "Lastrichtung und Steifigkeitsziel",
            "Wanddicke, Anschnitt und Faserorientierung",
            "Schwindung und kritische Maßtoleranzen",
          ],
          componentsNote:
            "Typische Bauteile: Halter, Gehäuse, Präzisionsstrukturen und tragende Teile",
          action: "Glasfaser-POM",
          relatedLinks: ["Carbonfaser-POM", "Glaskugelgefülltes POM"],
        },
        {
          title: "Schlagzähigkeit & Witterung",
          summary: "Zähigkeit, Montagespannung & Licht",
          panelTitle: "Mehr Zähigkeit für Montage und Außeneinsatz",
          description: "",
          reviewInputs: [
            "Schlagtemperatur und Kerbbedingung",
            "Montagedehnung und wiederholte Last",
            "Licht, Farbe und Expositionsdauer",
          ],
          componentsNote:
            "Typische Bauteile: Clips, Verriegelungen, Montagestrukturen und bewegte Außenbauteile",
          action: "Schlagzähmodifiziertes POM",
          relatedLinks: ["Witterungsbeständiges POM"],
        },
        {
          title: "Leitfähig & antistatisch",
          summary: "Widerstand, Erdung & Umgebung",
          panelTitle:
            "Leitfähige und antistatische Werkstoffe nach Widerstandsziel wählen",
          description: "",
          reviewInputs: [
            "Oberflächen- oder Volumenwiderstand",
            "Prüfverfahren, Erdung und Feuchte",
            "Farbe, Sauberkeit und Einsatzumgebung",
          ],
          componentsNote:
            "Typische Bauteile: IC-Trays, Handhabungsvorrichtungen, elektrische Strukturen und ESD-Bauteile",
          action: "Leitfähiges & antistatisches POM",
          relatedLinks: ["Elektrostatik über mehrere Polymere"],
        },
      ],
      supportingTitle: "Mehr als POM: weitere technische Kunststoffe",
      supportingBody:
        "Vergleichen Sie weitere Werkstoffe, wenn Steifigkeit, Wärmebeständigkeit, Feuchteverhalten oder Verarbeitung anders gewichtet werden müssen.",
      supportingLinks: ["POM-Basisharz", "PA6", "PA66", "PPA"],
      allFamiliesAction: "Alle Werkstofffamilien ansehen",
    },
    components: {
      eyebrow: "Bauteillösungen",
      title: "Der passende Werkstoff für jedes Bauteil",
      body: "Sehen Sie die wichtigsten Einsatzbedingungen und Auswahlkriterien je Bauteil.",
      action: "Alle Bauteile ansehen",
      items: [
        {
          title: "Präzisionszahnräder aus Kunststoff",
          description:
            "Nach Drehmoment, Zahngeometrie, Drehzahl, Gegenlaufwerkstoff, Schmierung und Genauigkeitszielen eingrenzen.",
          imageAlt:
            "Präzisionszahnräder und Bewegungsteile aus Kunststoff zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "Buchsen & Hülsen",
          description:
            "Nach Last, Gleitgeschwindigkeit, Wellen- und Gehäusewerkstoff, Spiel, Schmierung und Einsatzumgebung eingrenzen.",
          imageAlt:
            "Kunststoffbuchsen, Hülsen und Gleitführungen zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "Förderketten-Komponenten",
          description:
            "Kettenzug, Gelenkverschleiß, Schienenreibung, Teilung, Elektrostatikziel und Einsatzumgebung prüfen.",
          imageAlt:
            "Kunststoff-Förderplatten, Kettenglieder und Automatisierungsteile zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "Ventilkolben & Kartuschen",
          description:
            "Druck, Medium, Dichtbedingungen, Kolbenspiel, Bewegungszyklen und Durchflussfunktion definieren.",
          imageAlt:
            "Geformte Ventilkolben, Kartuschen und interne Durchflusskomponenten zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "Textilführungen",
          description:
            "Garn, Geschwindigkeit, Spannung, Kontaktgeometrie, Oberflächengüte, Verschleiß und Elektrostatik prüfen.",
          imageAlt:
            "Garnführungen für Textilmaschinen zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "IC-Transporttrays",
          description:
            "ESD-Klasse, Prozesstemperatur, Ebenheit, Taschgeometrie, Sauberkeit und Handhabungsbedingungen definieren.",
          imageAlt:
            "IC-Transporttrays und Präzisionstaschen zur Erläuterung der Werkstoffauswahl.",
        },
      ],
    },
    applications: {
      eyebrow: "Anwendungen",
      title: "Werkstoffe nach Anwendung erkunden",
      body: "Werkstoffrichtungen für den jeweiligen Einsatzkontext prüfen.",
      action: "Alle Anwendungen ansehen",
      items: [
        {
          title: "Automobil",
          description:
            "Funktionelle Spritzgussteile für Türen, Sitze, Kraftstoffsysteme, Scheibenwischer, Steuerkästen und Innenmechanismen.",
          imageAlt:
            "Fahrzeugmontagelinie einschließlich Automobil-Funktionsmodule",
        },
        {
          title: "Elektronik und Elektrik",
          description:
            "Präzisionsspritzgussteile für elektrische Verbindungen, Isolierungen, Steuerungen und Aktoren.",
          imageAlt:
            "Elektronische Montagestation einschließlich funktionaler elektrischer Module",
        },
        {
          title: "Förderer und Automatisierung",
          description:
            "Kunststoffkettenplatten, Förderschienen, Rollen und Handhabungskomponenten für sauberen automatisierten Transport.",
          imageAlt:
            "Saubere automatisierte Förderlinien mit modularen Kettenplatten",
        },
        {
          title: "Bewegung",
          description:
            "Zahnräder, Rollen, Buchsen, Hülsen und Gleitteile für Übertragung, Führung und reibungsarme Bewegung.",
          imageAlt:
            "Industrielle Bewegungsmodule einschließlich Zahnrädern und spritzgegossenen beweglichen Teilen",
        },
        {
          title: "Wasserkreislauf-Steuerung",
          description:
            "Spritzgussteile für Ventile, Sanitärartikel, Pumpen und Wasserstraßenkontrollsysteme.",
          imageAlt:
            "Montagelinie für saubere Wasserstraßensteuerung einschließlich Ventilen und Durchflussmodulen",
        },
        {
          title: "Waschmaschine",
          description:
            "Funktionelle Spritzgussteile für Trommelantrieb, Wasserwege, Entwässerung, Ventile und reibungsarme Bewegungsmechanismen.",
          imageAlt:
            "Taumelwaschmaschinenmechanismus einschließlich Spritzgussgetriebe, Entwässerung und Türverriegelung Komponenten",
        },
        {
          title: "Außenausrüstung",
          description:
            "Freiliegende Spritzgussteile für Gartengeräte, Sprinkleranlagen, Außenmechanismen und langlebige Gerätebaugruppen.",
          imageAlt:
            "Montagelinie für Outdoor-Ausrüstung einschließlich Gartenmaschinenmodule",
        },
        {
          title: "Textilmaschinen",
          description:
            "Verschleißfeste Führungen, Bewegungs- und schrumpfungsarme Spritzgussteile für Textilmaschinen und Fördersysteme.",
          imageAlt:
            "Textilmaschinen-Produktionslinie einschließlich Garnförder- und Führungskomponenten",
        },
      ],
    },
    process: {
      stepsAria:
        "Bedarf definieren, Kandidaten auswählen, validieren und skalieren",
      steps: [
        {
          title: "Bedarf definieren",
          description:
            "Bauteilfunktion, Einsatzbedingungen und Verarbeitungsgrenzen klären.",
        },
        {
          title: "Kandidaten auswählen",
          description:
            "Typen auswählen, die zur Anwendung und zum Versuchsumfang passen.",
        },
        {
          title: "Validieren & skalieren",
          description:
            "Prüfen, Ergebnisse auswerten und den ausgewählten Werkstoff für die Produktion vorbereiten.",
        },
      ],
    },
    collaboration: {
      eyebrow: "ANWENDUNGSORIENTIERTE UNTERSTÜTZUNG",
      title: "Entscheidungen rund um das Bauteil",
      body:
        "Wir verbinden Bauteilanforderungen mit Werkstoffkandidaten, Versuchsnachweisen und einem praktikablen Weg zur Produktion.",
      itemsAria: "Arbeitsweise von Taiyi Polymer in der Projektzusammenarbeit",
      items: [
        {
          title: "Funktionsübergreifende Prüfung",
          description:
            "Vertrieb, Technik und Produktion bewerten Leistungsziele, Verarbeitungsbedingungen und Versorgungsanforderungen gemeinsam.",
        },
        {
          title: "Nachweise vor der Serienfertigung",
          description:
            "Muster, kleine Versuchsmengen und Rückmeldungen aus Spritzgießversuchen helfen, Werkstoffkandidaten vor der Produktionsentscheidung zu vergleichen.",
        },
        {
          title: "Praxisnahe Rezepturbewertung",
          description:
            "Wenn ein bestehender Typ nicht passt, prüfen wir, ob eine Rezepturanpassung technisch geeignet und produktionstechnisch umsetzbar ist.",
        },
      ],
      action: "Ihre Anwendung besprechen",
    },
    proof: {
      eyebrow: "Fertigung & Validierung",
      body:
        "Modifizierte Compounds werden auf eigenen Doppelschneckenlinien hergestellt und mit internen Prüfgeräten bewertet. Verfügbare technische, chargenbezogene und Compliance-Dokumente werden nach Typ und Projekt bestätigt.",
      factoryImageAlt:
        "Doppelschnecken-Extrusionslinien am Taiyi-Polymer-Produktionsstandort in Yancheng.",
      factoryImageCaption:
        "Produktionsstandort Yancheng · Doppelschnecken-Extrusion",
      metricsAria: "Fertigungs- und Prüfdaten von Taiyi Polymer",
      metricLabels: [
        "Jährliche Compound-Kapazität",
        "Eigene Doppelschneckenlinien",
        "Interne Prüfgeräte",
      ],
      metricNotes: ["Tonnen/Jahr", "Linien", "Geräte"],
      documentsTitle: "Projektunterlagen",
      documentsBody:
        "Die Verfügbarkeit von TDS, SDS, COA, REACH und RoHS wird nach Typ und Projekt bestätigt.",
      documentsAria: "Nach Typ und Projekt bestätigbare Dokumentarten",
      documentsAction: "Projektunterlagen anfordern",
      documentTypeDescriptions: [
        "Technische Daten",
        "Sicherheit und Handhabung",
        "Chargenprüfergebnisse",
        "Stoffkonformität",
        "Beschränkte Stoffe",
      ],
      certificatesTitle: "Zertifikate der Managementsysteme",
      certificateAction: "Alle Zertifikate und Geltungsbereiche ansehen",
      certificateOpenAction: "Zertifikat ansehen",
      internationalLabel: "Unterstützung internationaler Projekte",
      internationalBody:
        "Für internationale Projekte stehen Werkstoffunterlagen und Koordination der Exportlieferung zur Verfügung.",
    },
  },
  fr: {
    entry: {
      eyebrow: "Sélection matière",
      title: "Partez du besoin pièce pour trouver la bonne matière",
      body: "Pour les engrenages, regardez le contre-matériau, l'usure et le bruit ; pour les pièces structurelles, la rigidité, le retrait et la stabilité dimensionnelle ; pour les pièces électriques, la plage de résistance et l'environnement.",
      ariaLabel:
        "Choisir un parcours selon le besoin actuel de sélection matière",
      items: [
        {
          label: "Pièce",
          title: "Je sélectionne une matière pour une pièce",
          description:
            "Partez de la fonction de la pièce, du mouvement, de la charge, de l'environnement d'assemblage et de l'avancement de l'outillage.",
          action: "Parcourir les pièces",
        },
        {
          label: "Performance",
          title: "Je dois résoudre un problème de performance",
          description:
            "Partez de l'écart de performance : usure, faible frottement, renforcement, impact, intempéries, conductivité ou comportement antistatique.",
          action: "Voir les orientations matière",
        },
        {
          label: "Grade & données",
          title: "J'ai déjà un grade de référence",
          description:
            "Partez d'un grade de référence, d'un type de matière ou d'un mot-clé de performance pour trouver les grades répertoriés, les TDS et les documents techniques.",
          action: "Trouver les données de grade & TDS",
        },
      ],
    },
    core: {
      eyebrow: "Produits",
      title: "Le POM modifié, notre matière clé pour les pièces de précision",
      body: "Le POM associe des propriétés mécaniques équilibrées à une excellente résistance à l’usure, une autolubrification et une grande stabilité dimensionnelle. Il a d’abord été commercialisé pour remplacer des composants mécaniques jusque-là fabriqués en métal, tels que les engrenages, les vis et les paliers. Aujourd’hui, ses applications vont des produits du quotidien, comme les fermetures à glissière et les brosses à dents, aux composants automobiles tels que les serrures et loquets de porte, les mécanismes de verrouillage de ceinture et les pièces de circuit carburant. PLATFORM® pousse plus loin cette matière éprouvée grâce à la modification — pour les pièces qui ne tolèrent aucune variation et pour les industriels qui exigent précision et constance, du premier essai à la production en série.",
      action: "Découvrir la gamme POM modifié",
      materialImageAlt:
        "Granulés noirs de POM renforcé de fibres de carbone pour pièces techniques injectées.",
      materialImageCaption: "POM renforcé de fibres de carbone",
      directionsAria: "Orientations et familles de POM modifié",
      panelLabel: "Priorités de sélection",
      technicalTitle: "Informations techniques POM",
      technicalLinks: [
        {
          title: "Conditions standard de moulage",
          description:
            "Consultez la manutention, la préparation des essais et les points de mise en œuvre propres au grade.",
        },
        {
          title: "Technologie de moulage",
          description:
            "Accédez aux ressources sur le moulage, la maîtrise du procédé et le dépannage.",
        },
        {
          title: "Composition des grades & catalogue",
          description:
            "Parcourez les familles POM et les grades actuellement répertoriés.",
        },
      ],
      gradeNote:
        "Vous ne trouvez pas le grade recherché ? Consultez les données actuelles ou échangez avec nous sur votre besoin.",
      contactAction: "Discuter de votre application",
      reviewLabel: "À confirmer d'abord",
      materialsLabel: "Parcours matière",
      groups: [
        {
          title: "Usure & faible frottement",
          summary: "Glissement, bruit & contre-matériau",
          panelTitle:
            "Des pièces mobiles plus résistantes à l'usure et plus silencieuses",
          description: "",
          reviewInputs: [
            "Matériau en contact et état de surface",
            "Charge, vitesse et conditions de lubrification",
            "Objectifs de durée de vie, d'usure et de bruit",
          ],
          componentsNote:
            "Pièces courantes : engrenages, bagues, coulisseaux, guides et composants de chaînes de convoyage",
          action: "POM anti-usure",
          relatedLinks: [],
        },
        {
          title: "Renforcement & maîtrise dimensionnelle",
          summary: "Rigidité, retrait & gauchissement",
          panelTitle: "Améliorer la rigidité et la stabilité dimensionnelle",
          description: "",
          reviewInputs: [
            "Direction de charge et objectif de rigidité",
            "Épaisseur, point d'injection et orientation des fibres",
            "Retrait et tolérances dimensionnelles critiques",
          ],
          componentsNote:
            "Pièces courantes : supports, boîtiers, structures de précision et pièces porteuses",
          action: "POM renforcé fibres de verre",
          relatedLinks: [
            "POM renforcé fibres de carbone",
            "POM chargé billes de verre",
          ],
        },
        {
          title: "Choc & tenue aux intempéries",
          summary: "Ténacité, assemblage & lumière",
          panelTitle: "Renforcer la ténacité pour l'assemblage et l'extérieur",
          description: "",
          reviewInputs: [
            "Température de choc et condition d'entaille",
            "Déformation d'assemblage et charges répétées",
            "Lumière, couleur et durée d'exposition",
          ],
          componentsNote:
            "Pièces courantes : clips, verrouillages, structures d'assemblage et pièces mobiles extérieures",
          action: "POM haute résistance au choc",
          relatedLinks: ["POM résistant aux intempéries"],
        },
        {
          title: "Conducteur & antistatique",
          summary: "Résistance, mise à la terre & milieu",
          panelTitle:
            "Choisir le conducteur ou l'antistatique selon la cible de résistance",
          description: "",
          reviewInputs: [
            "Plage de résistance surfacique ou volumique",
            "Méthode d'essai, mise à la terre et humidité",
            "Couleur, propreté et environnement d'utilisation",
          ],
          componentsNote:
            "Pièces courantes : plateaux IC, outillages de manutention, structures électriques et pièces de contrôle électrostatique",
          action: "POM conducteur & antistatique",
          relatedLinks: ["Contrôle électrostatique multi-polymères"],
        },
      ],
      supportingTitle: "Au-delà du POM : d'autres plastiques techniques",
      supportingBody:
        "Comparez d'autres matières lorsque la rigidité, la tenue thermique, l'humidité ou la mise en œuvre exigent un équilibre différent.",
      supportingLinks: ["Résine POM", "PA6", "PA66", "PPA"],
      allFamiliesAction: "Voir toutes les familles matière",
    },
    components: {
      eyebrow: "Solutions pour composants",
      title: "Le bon matériau pour chaque pièce",
      body: "Consultez les conditions clés et les priorités matière de chaque pièce.",
      action: "Voir tous les composants",
      items: [
        {
          title: "Engrenages plastiques de précision",
          description:
            "Présélectionner selon le couple, la denture, la vitesse, le matériau en contact, la lubrification et les objectifs de précision.",
          imageAlt:
            "Engrenages plastiques de précision et composants en mouvement illustrant la sélection matière.",
        },
        {
          title: "Bagues & douilles",
          description:
            "Présélectionner selon la charge, la vitesse de glissement, les matériaux de l'arbre et du logement, le jeu, la lubrification et l'environnement d'utilisation.",
          imageAlt:
            "Bagues, douilles et guides coulissants en plastique technique illustrant la sélection matière.",
        },
        {
          title: "Composants de chaînes de convoyage",
          description:
            "Évaluer la traction, l'usure des articulations, le frottement du rail, le pas, les objectifs de contrôle électrostatique et l'environnement d'utilisation.",
          imageAlt:
            "Plaques, maillons de convoyeur et composants d'automatisation en plastique illustrant la sélection matière.",
        },
        {
          title: "Tiroirs & cartouches de vanne",
          description:
            "Définir la pression, le fluide, les conditions d'étanchéité, le jeu du tiroir, les cycles de mouvement et la fonction de débit.",
          imageAlt:
            "Tiroirs, cartouches et composants internes de contrôle des fluides illustrant la sélection matière.",
        },
        {
          title: "Guides textiles",
          description:
            "Évaluer le fil, la vitesse, la tension, la géométrie de contact, l'état de surface, l'usure et le comportement électrostatique.",
          imageAlt:
            "Guides-fils pour machines textiles illustrant la sélection matière.",
        },
        {
          title: "Plateaux de manutention IC",
          description:
            "Définir la classe ESD, la température procédé, la planéité, la géométrie des alvéoles, la propreté et les conditions de manutention.",
          imageAlt:
            "Plateaux de manutention IC et alvéoles de précision illustrant la sélection matière.",
        },
      ],
    },
    applications: {
      eyebrow: "Applications",
      title: "Explorer les matériaux par application",
      body: "Examiner les orientations matière selon chaque contexte d’usage.",
      action: "Voir toutes les applications",
      items: [
        {
          title: "Automobile",
          description:
            "Pièces fonctionnelles moulées par injection pour portes, sièges, systèmes de carburant, essuie-glaces et mécanismes intérieurs.",
          imageAlt:
            "Ligne d'assemblage de véhicules comprenant des modules fonctionnels automobiles",
        },
        {
          title: "Électronique et électrique",
          description:
            "Pièces moulées de précision pour les connexions électriques, l'isolation, les commandes et les actionneurs.",
          imageAlt:
            "Station d'assemblage électronique comprenant des modules électriques fonctionnels",
        },
        {
          title: "Convoyeur et automatisation",
          description:
            "Plaques à chaîne, rails de guidage, rouleaux et composants de manutention pour un transport automatisé propre.",
          imageAlt:
            "Ligne de convoyage automatisée propre avec plaques de chaîne modulaires",
        },
        {
          title: "Mouvement",
          description:
            "Engrenages, rouleaux, bagues, douilles et pièces coulissantes pour transmission et mouvement à faible friction.",
          imageAlt:
            "Module de mouvement industriel comprenant des engrenages et des pièces mobiles moulées par injection",
        },
        {
          title: "Composants pour circuits d’eau",
          description:
            "Pièces moulées par injection utilisées dans les vannes, les appareils sanitaires, les pompes et les circuits d’eau.",
          imageAlt:
            "Ligne d'assemblage de contrôle des circuits d’eau comprenant des vannes et des modules de débit",
        },
        {
          title: "Machine à laver",
          description:
            "Pièces fonctionnelles moulées pour la transmission du tambour, les circuits d’eau, le drainage, les vannes et les mécanismes mobiles.",
          imageAlt:
            "Mécanisme de machine à laver comprenant transmission moulée, drainage et verrouillage de porte",
        },
        {
          title: "Équipement extérieur",
          description:
            "Pièces moulées exposées à l’extérieur pour équipements de jardin, arrosage et mécanismes durables.",
          imageAlt:
            "Ligne d'assemblage d'équipements extérieurs comprenant des modules de machines de jardin",
        },
        {
          title: "Machines textiles",
          description:
            "Guides résistants à l'usure et pièces moulées à faible retrait pour machines textiles et systèmes de transport.",
          imageAlt:
            "Ligne de production de machines textiles avec composants de transport et de guidage du fil",
        },
      ],
    },
    process: {
      stepsAria:
        "Définir le besoin, sélectionner les candidats, valider et passer à l'échelle",
      steps: [
        {
          title: "Définir le besoin",
          description:
            "Clarifier la fonction de la pièce, les conditions de service et les contraintes de transformation.",
        },
        {
          title: "Sélectionner les candidats",
          description:
            "Présélectionner les grades adaptés à l'application et au périmètre des essais.",
        },
        {
          title: "Valider & passer à l'échelle",
          description:
            "Tester, examiner les résultats et préparer le matériau sélectionné pour la production.",
        },
      ],
    },
    collaboration: {
      eyebrow: "ACCOMPAGNEMENT GUIDÉ PAR L’APPLICATION",
      title: "Des décisions construites autour de la pièce",
      body:
        "Nous relions les exigences de la pièce aux matériaux candidats, aux résultats d’essais et à une voie réalisable vers la production.",
      itemsAria: "Mode de collaboration de Taiyi Polymer sur les projets",
      items: [
        {
          title: "Évaluation interfonctionnelle",
          description:
            "Les équipes commerciales, techniques et de production évaluent ensemble les objectifs de performance, les conditions de transformation et les besoins d’approvisionnement.",
        },
        {
          title: "Des preuves avant l’industrialisation",
          description:
            "Les échantillons, les petits lots d’essai et les retours de moulage permettent de comparer les matériaux candidats avant une décision de production.",
        },
        {
          title: "Évaluation pratique de formulation",
          description:
            "Si un grade existant ne convient pas, nous évaluons si un ajustement de formulation est techniquement approprié et réalisable en production.",
        },
      ],
      action: "Discuter de votre application",
    },
    proof: {
      eyebrow: "Fabrication & validation",
      body:
        "Les compounds modifiés sont produits sur nos lignes bivis intégrées et évalués avec nos équipements d’essai internes. Les documents techniques, de lot et de conformité disponibles sont confirmés selon le grade et le projet.",
      factoryImageAlt:
        "Lignes d'extrusion bivis du site de production Taiyi Polymer à Yancheng.",
      factoryImageCaption: "Site de Yancheng · atelier d'extrusion bivis",
      metricsAria: "Données de fabrication et d'essais de Taiyi Polymer",
      metricLabels: [
        "Capacité annuelle de compoundage",
        "Lignes bivis intégrées",
        "Équipements d'essai internes",
      ],
      metricNotes: ["tonnes/an", "lignes", "équipements"],
      documentsTitle: "Documents projet",
      documentsBody:
        "La disponibilité des TDS, SDS, COA, REACH et RoHS est confirmée selon le grade et le projet.",
      documentsAria:
        "Types de documents à confirmer selon le grade et le projet",
      documentsAction: "Demander les documents du projet",
      documentTypeDescriptions: [
        "Données techniques",
        "Sécurité et manipulation",
        "Résultats d’essai du lot",
        "Conformité des substances",
        "Substances restreintes",
      ],
      certificatesTitle: "Certificats des systèmes de management",
      certificateAction: "Voir tous les certificats et périmètres",
      certificateOpenAction: "Voir le certificat",
      internationalLabel: "Support des projets internationaux",
      internationalBody:
        "La documentation matière et la coordination des livraisons export sont disponibles pour les projets internationaux.",
    },
  },
  "pt-br": {
    entry: {
      eyebrow: "Seleção de material",
      title: "Comece pelos requisitos da peça e encontre o material certo",
      body: "Em engrenagens, avalie contraface, desgaste e ruído; em peças estruturais, rigidez, retração e estabilidade dimensional; em peças elétricas, faixa de resistência e ambiente de uso.",
      ariaLabel:
        "Escolher um caminho conforme a tarefa atual de seleção de material",
      items: [
        {
          label: "Peça",
          title: "Estou selecionando material para uma peça",
          description:
            "Comece pela função da peça, movimento, carga, ambiente de montagem e estágio do molde.",
          action: "Explorar caminhos por peça",
        },
        {
          label: "Desempenho",
          title: "Preciso resolver um problema de desempenho",
          description:
            "Comece pela lacuna de desempenho: desgaste, baixo atrito, reforço, impacto, intempéries, condutividade ou comportamento antiestático.",
          action: "Ver direções de material",
        },
        {
          label: "Grade & dados",
          title: "Já tenho um grade de referência",
          description:
            "Comece por um grade de referência, tipo de material ou palavra-chave de desempenho para localizar grades listados, TDS e documentos técnicos.",
          action: "Encontrar dados de grade e TDS",
        },
      ],
    },
    core: {
      eyebrow: "Produtos",
      title: "POM modificado, nosso material principal para peças de precisão",
      body: "O POM combina propriedades mecânicas equilibradas com resistência ao desgaste, autolubrificação e estabilidade dimensional. O material foi inicialmente comercializado para substituir componentes de máquinas, como engrenagens, parafusos e rolamentos, que antes eram fabricados em metal. Hoje, suas aplicações vão de produtos cotidianos, como zíperes e escovas de dentes, a componentes automotivos, incluindo fechaduras e travas de portas, mecanismos de travamento de cintos de segurança e peças de sistemas de combustível. A PLATFORM® leva esse material comprovado além por meio da modificação — para peças que não admitem variação e para fabricantes que exigem precisão e consistência, do primeiro teste à produção em escala.",
      action: "Conheça a linha de POM modificado",
      materialImageAlt:
        "Grânulos pretos de POM reforçado com fibra de carbono para peças técnicas injetadas.",
      materialImageCaption: "POM reforçado com fibra de carbono",
      directionsAria: "Direções e famílias de POM modificado",
      panelLabel: "Prioridades de seleção",
      technicalTitle: "Informações técnicas de POM",
      technicalLinks: [
        {
          title: "Condições padrão de moldagem",
          description:
            "Consulte manuseio, preparação de testes e pontos de processo específicos do grade.",
        },
        {
          title: "Tecnologia de moldagem",
          description:
            "Acesse recursos de moldagem, controle de processo e solução de problemas.",
        },
        {
          title: "Composição dos grades & catálogo",
          description:
            "Veja as famílias de POM e os grades atualmente listados.",
        },
      ],
      gradeNote:
        "Não encontrou o grade necessário? Consulte os dados atuais ou converse conosco sobre o requisito.",
      contactAction: "Discutir sua aplicação",
      reviewLabel: "Confirme primeiro",
      materialsLabel: "Rotas de material",
      groups: [
        {
          title: "Desgaste & baixo atrito",
          summary: "Deslizamento, ruído & contraface",
          panelTitle:
            "Mais resistência ao desgaste e menos ruído em peças móveis",
          description: "",
          reviewInputs: [
            "Material da contraface e condição superficial",
            "Carga, velocidade e condições de lubrificação",
            "Metas de vida útil, desgaste e ruído",
          ],
          componentsNote:
            "Componentes comuns: engrenagens, buchas, deslizadores, guias e peças de correntes transportadoras",
          action: "POM de baixo desgaste",
          relatedLinks: [],
        },
        {
          title: "Reforço & controle dimensional",
          summary: "Rigidez, retração & empenamento",
          panelTitle: "Melhor rigidez e estabilidade dimensional",
          description: "",
          reviewInputs: [
            "Direção da carga e meta de rigidez",
            "Espessura, ponto de injeção e orientação das fibras",
            "Retração e tolerâncias dimensionais críticas",
          ],
          componentsNote:
            "Componentes comuns: suportes, carcaças, estruturas de precisão e peças de suporte de carga",
          action: "POM com fibra de vidro",
          relatedLinks: [
            "POM com fibra de carbono",
            "POM com microesferas de vidro",
          ],
        },
        {
          title: "Impacto & resistência às intempéries",
          summary: "Tenacidade, montagem & luz",
          panelTitle: "Mais tenacidade para montagem e uso externo",
          description: "",
          reviewInputs: [
            "Temperatura de impacto e condição de entalhe",
            "Deformação de montagem e carga repetida",
            "Luz, cor e duração da exposição",
          ],
          componentsNote:
            "Componentes comuns: clipes, travas, estruturas de montagem e peças móveis externas",
          action: "POM de alto impacto",
          relatedLinks: ["POM resistente às intempéries"],
        },
        {
          title: "Condutivo & antiestático",
          summary: "Resistência, aterramento & ambiente",
          panelTitle:
            "Escolha materiais condutivos e antiestáticos pela meta de resistência",
          description: "",
          reviewInputs: [
            "Faixa de resistência superficial ou volumétrica",
            "Método de ensaio, aterramento e umidade",
            "Cor, limpeza e ambiente de uso",
          ],
          componentsNote:
            "Componentes comuns: bandejas de IC, dispositivos de manuseio, estruturas elétricas e peças de controle eletrostático",
          action: "POM condutivo & antiestático",
          relatedLinks: ["Controle estático entre polímeros"],
        },
      ],
      supportingTitle: "Além do POM: mais opções de plásticos de engenharia",
      supportingBody:
        "Compare outros materiais quando rigidez, resistência térmica, umidade ou processamento exigirem um equilíbrio diferente.",
      supportingLinks: ["Resina POM base", "PA6", "PA66", "PPA"],
      allFamiliesAction: "Ver todas as famílias de materiais",
    },
    components: {
      eyebrow: "Soluções para componentes",
      title: "O material certo para cada peça",
      body: "Veja as condições principais e as prioridades de material de cada peça.",
      action: "Ver todos os componentes",
      items: [
        {
          title: "Engrenagens plásticas de precisão",
          description:
            "Faça a triagem por torque, geometria do dente, rotação, material de contato, lubrificação e metas de precisão.",
          imageAlt:
            "Engrenagens plásticas de precisão e componentes de movimento usados para explicar a seleção de materiais.",
        },
        {
          title: "Buchas & mangas",
          description:
            "Faça a triagem por carga, velocidade de deslizamento, materiais do eixo e alojamento, folga, lubrificação e ambiente de operação.",
          imageAlt:
            "Buchas, mangas e guias deslizantes em plástico de engenharia usados para explicar a seleção de materiais.",
        },
        {
          title: "Componentes de correntes transportadoras",
          description:
            "Verifique tração da corrente, desgaste das articulações, atrito da guia, passo, metas de controle eletrostático e ambiente de operação.",
          imageAlt:
            "Placas, elos de transportador e componentes de automação em plástico usados para explicar a seleção de materiais.",
        },
        {
          title: "Carretéis & cartuchos de válvula",
          description:
            "Defina pressão, fluido, condições de vedação, folga do carretel, ciclos de movimento e função de vazão.",
          imageAlt:
            "Carretéis, cartuchos e componentes internos de controle de fluxo usados para explicar a seleção de materiais.",
        },
        {
          title: "Guias têxteis",
          description:
            "Verifique fio, velocidade, tensão, geometria de contato, qualidade superficial, desgaste e comportamento eletrostático.",
          imageAlt:
            "Guias de fios para máquinas têxteis usados para explicar a seleção de materiais.",
        },
        {
          title: "Bandejas de manuseio de IC",
          description:
            "Defina classe ESD, temperatura de processo, planicidade, geometria dos alojamentos, limpeza e condições de manuseio.",
          imageAlt:
            "Bandejas de manuseio de IC e alojamentos de precisão usados para explicar a seleção de materiais.",
        },
      ],
    },
    applications: {
      eyebrow: "Aplicações",
      title: "Explore materiais por aplicação",
      body: "Avalie direções de material para cada contexto de uso.",
      action: "Ver todas as aplicações",
      items: [
        {
          title: "Automotivo",
          description:
            "Peças funcionais moldadas para portas, assentos, sistemas de combustível, limpadores e mecanismos internos.",
          imageAlt:
            "Linha de montagem de veículos com módulos funcionais automotivos",
        },
        {
          title: "Eletrônico e elétrico",
          description:
            "Peças moldadas de precisão para conexões elétricas, isolamento, controle e atuação.",
          imageAlt:
            "Estação de montagem eletrônica com módulos elétricos funcionais",
        },
        {
          title: "Transportador e automação",
          description:
            "Placas de corrente plásticas, guias, rolos e componentes de manuseio para transporte automatizado limpo.",
          imageAlt:
            "Linha transportadora automatizada com placas de corrente modulares",
        },
        {
          title: "Movimento",
          description:
            "Engrenagens, rolos, buchas, mangas e peças deslizantes para transmissão e movimento de baixo atrito.",
          imageAlt:
            "Módulo de movimento industrial com engrenagens e peças móveis moldadas",
        },
        {
          title: "Controle de circuitos de água",
          description:
            "Peças injetadas para válvulas, aplicações sanitárias, bombas e sistemas de controle de água.",
          imageAlt:
            "Linha de montagem de controle de água com válvulas e módulos de fluxo",
        },
        {
          title: "Máquina de lavar",
          description:
            "Peças funcionais para transmissão do tambor, circulação de água, drenagem, válvulas e mecanismos móveis.",
          imageAlt:
            "Mecanismo de máquina de lavar com transmissão moldada, drenagem e trava de porta",
        },
        {
          title: "Equipamentos externos",
          description:
            "Peças moldadas expostas ao tempo para equipamentos de jardim, irrigação e mecanismos externos duráveis.",
          imageAlt:
            "Linha de montagem de equipamentos externos com módulos de máquinas de jardim",
        },
        {
          title: "Máquinas têxteis",
          description:
            "Guias resistentes ao desgaste e peças de baixo encolhimento para máquinas têxteis e transporte de fios.",
          imageAlt:
            "Linha de produção de máquinas têxteis com componentes de transporte e guia de fios",
        },
      ],
    },
    process: {
      stepsAria:
        "Definir a necessidade, selecionar candidatos, validar e ampliar a escala",
      steps: [
        {
          title: "Defina a necessidade",
          description:
            "Esclareça a função da peça, as condições de serviço e as restrições de processamento.",
        },
        {
          title: "Selecione candidatos",
          description:
            "Selecione grades compatíveis com a aplicação e o escopo dos testes.",
        },
        {
          title: "Valide & amplie a escala",
          description:
            "Teste, analise os resultados e prepare o material selecionado para a produção.",
        },
      ],
    },
    collaboration: {
      eyebrow: "SUPORTE ORIENTADO PELA APLICAÇÃO",
      title: "Decisões construídas em torno da peça",
      body:
        "Conectamos os requisitos da peça a materiais candidatos, evidências de testes e uma rota viável para a produção.",
      itemsAria: "Formas de colaboração da Taiyi Polymer em projetos",
      items: [
        {
          title: "Análise multifuncional",
          description:
            "As equipes comercial, técnica e de produção avaliam juntas as metas de desempenho, as condições de processamento e as necessidades de fornecimento.",
        },
        {
          title: "Evidências antes da produção em escala",
          description:
            "Amostras, pequenos lotes de teste e feedback de moldagem ajudam a comparar materiais candidatos antes de uma decisão de produção.",
        },
        {
          title: "Avaliação prática de formulação",
          description:
            "Se um grade existente não for adequado, avaliamos se um ajuste de formulação é tecnicamente apropriado e viável para produção.",
        },
      ],
      action: "Discuta sua aplicação",
    },
    proof: {
      eyebrow: "Fabricação & validação",
      body:
        "Os compostos modificados são produzidos em linhas próprias de dupla rosca e avaliados com equipamentos internos de ensaio. A disponibilidade de documentos técnicos, de lote e de conformidade é confirmada por grade e projeto.",
      factoryImageAlt:
        "Linhas de extrusão de dupla rosca na unidade de fabricação da Taiyi Polymer em Yancheng.",
      factoryImageCaption: "Unidade de Yancheng · extrusão de dupla rosca",
      metricsAria: "Dados de fabricação e ensaios da Taiyi Polymer",
      metricLabels: [
        "Capacidade anual de compostos",
        "Linhas próprias de dupla rosca",
        "Equipamentos internos de ensaio",
      ],
      metricNotes: ["toneladas/ano", "linhas", "unidades"],
      documentsTitle: "Documentos do projeto",
      documentsBody:
        "A disponibilidade de TDS, SDS, COA, REACH e RoHS é confirmada por grade e projeto.",
      documentsAria: "Tipos de documentos a confirmar por grade e projeto",
      documentsAction: "Solicitar documentos do projeto",
      documentTypeDescriptions: [
        "Dados técnicos",
        "Segurança e manuseio",
        "Resultados de ensaio do lote",
        "Conformidade de substâncias",
        "Substâncias restritas",
      ],
      certificatesTitle: "Certificados dos sistemas de gestão",
      certificateAction: "Ver todos os certificados e escopos",
      certificateOpenAction: "Ver certificado",
      internationalLabel: "Suporte a projetos internacionais",
      internationalBody:
        "Documentação de material e coordenação de entregas de exportação estão disponíveis para projetos internacionais.",
    },
  },
} satisfies Record<AlignedHomeLocale, HomeTaskFirstMessages>;
