import type { HomeTaskFirstMessages } from "@/i18n/types";

type AlignedHomeLocale = "en" | "de" | "fr" | "pt-br";

export const homeTaskFirstLocaleMessages = {
  en: {
    entry: {
      eyebrow: "Start with your task",
      title: "Material selection usually starts with the part conditions",
      body: "Gears bring the mating surfaces, wear and noise into focus. Structural parts depend more on stiffness, shrinkage and dimensional stability. Electrical parts first require a defined resistance range and operating environment. A material name or single property can support an initial screen, but it rarely establishes suitability for the application on its own.",
      ariaLabel: "Choose a path based on your current material-selection task",
      items: [
        {
          label: "Part",
          title: "I am selecting material for a part",
          description:
            "Start from the part function, motion, load, assembly environment and tooling stage to reach the relevant material path.",
          action: "Browse part paths",
        },
        {
          label: "Performance need",
          title: "I need to solve a performance problem",
          description:
            "Start from wear, low friction, reinforcement, impact, weathering, conductivity or antistatic requirements.",
          action: "Explore material options",
        },
        {
          label: "Grade & data",
          title: "I already have a reference grade",
          description:
            "Use the material type, grade or a performance keyword to find available data and technical documents for further evaluation.",
          action: "Find grades & TDS",
        },
      ],
    },
    core: {
      eyebrow: "Core product",
      title: "Modified POM is our core material line",
      body: "For gears, bushings, sliding parts, structural parts and electrical-function components, we offer base and high-flow POM, wear-resistant and low-friction POM, reinforced, impact-modified, weather-resistant, conductive and antistatic compound options.",
      action: "Browse POM material families",
      materialImageAlt:
        "Natural POM resin pellets used in modified POM compounding and grade development.",
      materialImageCaption: "POM resin pellets",
      directionsAria: "Modified POM options and material families",
      groups: [
        {
          title: "Wear & low friction",
          description:
            "Compare wear-resistant and low-friction POM options against the mating surfaces, load, speed, lubrication and target wear behavior.",
          action: "Wear & low-friction POM",
          relatedLinks: [],
        },
        {
          title: "Reinforcement & dimensional control",
          description:
            "Compare reinforced and filled options using stiffness, shrinkage, warpage, fiber orientation and dimensional requirements.",
          action: "Glass-fiber POM",
          relatedLinks: ["Carbon-fiber POM", "Glass-bead-filled POM"],
        },
        {
          title: "Impact & weather resistance",
          description:
            "Screen specific grades for impact, low-temperature toughness, assembly stress or light exposure.",
          action: "High-impact POM",
          relatedLinks: ["Weather-resistant POM"],
        },
        {
          title: "Conductive & antistatic",
          description:
            "Define the resistance range, test method, grounding, color and environment before comparing conductive and antistatic options.",
          action: "Conductive & antistatic POM",
          relatedLinks: ["Static control across polymers"],
        },
      ],
      supportingTitle: "When POM is not the only answer",
      supportingBody:
        "When a part needs a different balance of stiffness, heat resistance, moisture response or processing behavior, selected base POM resin, PA6, PA66 and PPA materials can also be evaluated.",
      supportingLinks: ["Base POM resin", "PA6", "PA66", "PPA"],
      allFamiliesAction: "View all material families",
    },
    applications: {
      eyebrow: "Component solutions",
      title: "Different parts bring different priorities",
      body: "Start with the actual part, define the governing conditions, then connect them to candidate material families, grade data and validation requirements.",
      action: "View all component paths",
      items: [
        {
          title: "Precision plastic gears",
          description:
            "Torque, tooth geometry, speed, mating material, lubrication and accuracy targets shape the candidate range together.",
          imageAlt:
            "Precision plastic gears and motion components used to explain material selection.",
        },
        {
          title: "Bushings & sleeves",
          description:
            "Load, sliding speed, shaft and housing materials, clearance, lubrication and environment determine the candidate range.",
          imageAlt:
            "Engineering-plastic bushings, sleeves and sliding guides used to explain material selection.",
        },
        {
          title: "Conveyor chain components",
          description:
            "Chain tension, joint wear, guide-rail friction, pitch, static targets and environment need to be considered together.",
          imageAlt:
            "Plastic conveyor plates, links and automation components used to explain material selection.",
        },
        {
          title: "Valve spools & cartridges",
          description:
            "Pressure, media, sealing, spool clearance, motion cycles and flow function establish the application boundary.",
          imageAlt:
            "Molded valve spools, cartridges and internal flow-control parts used to explain material selection.",
        },
        {
          title: "Textile guide components",
          description:
            "Yarn, speed, tension, contact geometry, surface quality, wear and static behavior all influence material choice.",
          imageAlt:
            "Yarn-guide components for textile machinery used to explain material selection.",
        },
        {
          title: "IC handling trays",
          description:
            "ESD class, process temperature, flatness, pocket geometry, cleanliness and handling conditions must be defined together.",
          imageAlt:
            "IC handling trays and precision pockets used to explain material selection.",
        },
      ],
    },
    process: {
      eyebrow: "Working process",
      title: "Three steps from part requirements to candidate grades",
      body: "Use the information already available to form an initial material range, then confirm data, documents and project-validation conditions step by step.",
      stepsAria: "Three steps from part requirements to candidate grades",
      steps: [
        {
          title: "Describe the part",
          description:
            "Share its function, operating conditions, tooling stage and most important performance target.",
        },
        {
          title: "Narrow the material range",
          description:
            "Use candidate material families and available grade data to build a grade shortlist for further evaluation.",
        },
        {
          title: "Move into project validation",
          description:
            "Confirm TDS and document availability, followed by sample and molding-trial arrangements where needed.",
        },
      ],
    },
    collaboration: {
      eyebrow: "Project collaboration",
      title: "A practical path from requirements to validation",
      body: "A complete material specification is not required to begin. Start with the part's operating conditions, an existing performance issue or a reference grade, then narrow the candidate materials step by step.",
      itemsAria: "How Taiyi Polymer supports project collaboration",
      items: [
        {
          title: "Direct project communication",
          description:
            "Commercial, technical and production requirements stay aligned around the same part requirements, reducing repeated handoffs.",
        },
        {
          title: "Flexible pilot validation",
          description:
            "Samples, pilot quantities and molding trials can be used to assess candidate materials before moving to repeat supply.",
        },
        {
          title: "Project-based customization",
          description:
            "When technical targets, validation conditions and expected production volumes are clear, formulation adjustments or custom-grade development can be evaluated.",
        },
      ],
    },
    proof: {
      eyebrow: "Manufacturing & validation evidence",
      title: "A practical basis for engineering and supplier evaluation",
      body: "In-house production, internal testing and grade-specific material documents support candidate-material evaluation and the next supply discussion.",
      factoryImageAlt:
        "Twin-screw extrusion lines at the Taiyi Polymer manufacturing site in Yancheng.",
      factoryImageCaption: "Yancheng manufacturing site · twin-screw extrusion workshop",
      metricsAria: "Taiyi Polymer manufacturing and testing figures",
      metricLabels: [
        "Annual compound capacity",
        "In-house twin-screw lines",
        "In-house test equipment",
      ],
      metricNotes: ["metric tons/year", "lines", "units"],
      documentsTitle: "Project documents",
      documentsBody:
        "TDS, SDS, COA, REACH and RoHS availability is confirmed by grade and project.",
      documentsAria: "Document types available for confirmation by grade and project",
      certificatesTitle: "Quality-management system certificates",
      certificateAction: "View all certificates and certified scopes",
      certificateOpenAction: "View certificate",
      internationalLabel: "International project support",
      internationalBody:
        "Material documentation and export-delivery coordination are available for international projects.",
    },
  },
  de: {
    entry: {
      eyebrow: "Beginnen Sie mit Ihrer Aufgabe",
      title: "Die Werkstoffwahl beginnt meist bei den Einsatzbedingungen des Bauteils",
      body: "Bei Zahnrädern stehen Reibpaarung, Verschleiß und Geräusch im Vordergrund. Bei Strukturteilen sind Steifigkeit, Schwindung und Maßhaltigkeit entscheidend. Für elektrische Bauteile müssen zuerst Widerstandsbereich und Einsatzumgebung feststehen. Werkstoffname oder Einzelwert helfen bei der Vorauswahl, reichen aber selten für eine belastbare Eignungsbewertung.",
      ariaLabel: "Pfad nach aktueller Aufgabe der Werkstoffauswahl wählen",
      items: [
        {
          label: "Bauteil",
          title: "Ich wähle einen Werkstoff für ein Bauteil",
          description:
            "Beginnen Sie mit Funktion, Bewegung, Last, Montageumgebung und Werkzeugstand des Bauteils.",
          action: "Bauteilpfade ansehen",
        },
        {
          label: "Leistungsanforderung",
          title: "Ich muss ein Leistungsproblem lösen",
          description:
            "Starten Sie mit Anforderungen an Verschleiß, geringe Reibung, Verstärkung, Schlagzähigkeit, Bewitterung, Leitfähigkeit oder Antistatik.",
          action: "Werkstoffrichtungen ansehen",
        },
        {
          label: "Typ & Daten",
          title: "Ich habe bereits einen Referenztyp",
          description:
            "Suchen Sie über Werkstoff, Typ oder Leistungsmerkmal nach verfügbaren Daten und technischen Unterlagen für die weitere Bewertung.",
          action: "Typen & TDS finden",
        },
      ],
    },
    core: {
      eyebrow: "Kernprodukt",
      title: "Modifiziertes POM ist unsere zentrale Werkstofflinie",
      body: "Für Zahnräder, Buchsen, Gleitteile, Strukturteile und elektrische Funktionsbauteile bieten wir Basis- und Hochfließtypen sowie verschleißfeste, reibungsarme, verstärkte, schlagzähmodifizierte, witterungsbeständige, leitfähige und antistatische Richtungen.",
      action: "POM-Werkstofffamilien ansehen",
      materialImageAlt:
        "Naturfarbenes POM-Granulat für die Compoundierung und Typenentwicklung.",
      materialImageCaption: "POM-Rohstoffgranulat",
      directionsAria: "Richtungen und Werkstofffamilien für modifiziertes POM",
      groups: [
        {
          title: "Verschleiß & geringe Reibung",
          description:
            "Gleitwerkstoffe anhand von Reibpaarung, Last, Geschwindigkeit, Schmierung und Zielverschleiß vergleichen.",
          action: "Verschleißarmes POM",
          relatedLinks: [],
        },
        {
          title: "Verstärkung & Maßkontrolle",
          description:
            "Verstärkte und gefüllte Richtungen nach Steifigkeit, Schwindung, Verzug, Faserorientierung und Maßanforderungen vergleichen.",
          action: "Glasfaser-POM",
          relatedLinks: ["Carbonfaser-POM", "Glaskugelgefülltes POM"],
        },
        {
          title: "Schlagzähigkeit & Witterung",
          description:
            "Konkrete Typen anhand von Schlagzähigkeit, Tieftemperaturverhalten, Montagespannung oder Lichteinwirkung prüfen.",
          action: "Schlagzähmodifiziertes POM",
          relatedLinks: ["Witterungsbeständiges POM"],
        },
        {
          title: "Leitfähig & antistatisch",
          description:
            "Widerstandsbereich, Prüfverfahren, Erdung, Farbe und Umgebung vor dem Werkstoffvergleich festlegen.",
          action: "Leitfähiges & antistatisches POM",
          relatedLinks: ["Elektrostatik über mehrere Polymere"],
        },
      ],
      supportingTitle: "Wenn POM nicht die einzige Antwort ist",
      supportingBody:
        "Erfordert das Bauteil ein anderes Verhältnis von Steifigkeit, Wärmebeständigkeit, Feuchteverhalten oder Verarbeitung, können auch ausgewählte POM-Basisharze sowie PA6-, PA66- und PPA-Werkstoffe bewertet werden.",
      supportingLinks: ["POM-Basisharz", "PA6", "PA66", "PPA"],
      allFamiliesAction: "Alle Werkstofffamilien ansehen",
    },
    applications: {
      eyebrow: "Bauteillösungen",
      title: "Unterschiedliche Bauteile, unterschiedliche Schwerpunkte",
      body: "Beginnen Sie mit dem realen Bauteil, bestimmen Sie die maßgebenden Bedingungen und verbinden Sie diese mit Werkstoffrichtungen, Typendaten und Validierungsanforderungen.",
      action: "Alle Bauteilpfade ansehen",
      items: [
        {
          title: "Präzisionszahnräder aus Kunststoff",
          description:
            "Drehmoment, Zahngeometrie, Drehzahl, Gegenlaufwerkstoff, Schmierung und Genauigkeitsziel bestimmen gemeinsam den Kandidatenkreis.",
          imageAlt:
            "Präzisionszahnräder und Bewegungsteile aus Kunststoff zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "Buchsen & Hülsen",
          description:
            "Last, Gleitgeschwindigkeit, Welle und Gehäuse, Passung, Schmierung und Umgebung bestimmen die Kandidatenrichtung.",
          imageAlt:
            "Kunststoffbuchsen, Hülsen und Gleitführungen zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "Förderketten-Komponenten",
          description:
            "Kettenzug, Gelenkverschleiß, Schienenreibung, Teilung, Elektrostatik und Umgebung sind gemeinsam zu bewerten.",
          imageAlt:
            "Kunststoff-Förderplatten, Kettenglieder und Automatisierungsteile zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "Ventilkolben & Kartuschen",
          description:
            "Druck, Medium, Abdichtung, Kolbenspiel, Bewegungszyklen und Durchflussfunktion definieren die Einsatzgrenze.",
          imageAlt:
            "Geformte Ventilkolben, Kartuschen und interne Durchflusskomponenten zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "Textilführungen",
          description:
            "Garn, Geschwindigkeit, Spannung, Kontaktgeometrie, Oberflächengüte, Verschleiß und Elektrostatik beeinflussen die Werkstoffwahl.",
          imageAlt:
            "Garnführungen für Textilmaschinen zur Erläuterung der Werkstoffauswahl.",
        },
        {
          title: "IC-Transporttrays",
          description:
            "ESD-Klasse, Prozesstemperatur, Ebenheit, Taschgeometrie, Sauberkeit und Handhabung müssen gemeinsam festgelegt werden.",
          imageAlt:
            "IC-Transporttrays und Präzisionstaschen zur Erläuterung der Werkstoffauswahl.",
        },
      ],
    },
    process: {
      eyebrow: "Zusammenarbeit",
      title: "In drei Schritten von Bauteilanforderungen zu Kandidatentypen",
      body: "Aus den bereits verfügbaren Angaben entsteht zunächst ein Werkstoffbereich; Daten, Unterlagen und Bedingungen der Projektvalidierung werden anschließend schrittweise bestätigt.",
      stepsAria: "Drei Schritte von Bauteilanforderungen zu Kandidatentypen",
      steps: [
        {
          title: "Bauteil beschreiben",
          description:
            "Funktion, Einsatzbedingungen, Werkzeugstand und wichtigstes Leistungsziel nennen.",
        },
        {
          title: "Werkstoffbereich eingrenzen",
          description:
            "Aus Werkstoffrichtungen und verfügbaren Typendaten eine Kandidatenliste für die weitere Bewertung bilden.",
        },
        {
          title: "Projektvalidierung beginnen",
          description:
            "TDS- und Dokumentverfügbarkeit sowie bei Bedarf Muster und Spritzgießversuche abstimmen.",
        },
      ],
    },
    collaboration: {
      eyebrow: "Projektzusammenarbeit",
      title: "Ein praxisnaher Weg von der Anforderung zur Validierung",
      body: "Für den Einstieg ist keine vollständig definierte Werkstoffspezifikation erforderlich. Die Einsatzbedingungen des Bauteils, ein aktuelles Fehlerbild oder ein Referenztyp genügen, um die Werkstoffauswahl schrittweise einzugrenzen.",
      itemsAria: "Arbeitsweise von Taiyi Polymer in der Projektzusammenarbeit",
      items: [
        {
          title: "Direkte Projektabstimmung",
          description:
            "Kommerzielle, werkstofftechnische und fertigungstechnische Anforderungen werden gemeinsam im selben Projektkontext abgestimmt, ohne Informationen mehrfach weiterzugeben.",
        },
        {
          title: "Flexible Bemusterung und Kleinserienvalidierung",
          description:
            "Muster, Versuchsmengen und Spritzgießversuche ermöglichen die Bewertung der Werkstoffauswahl, bevor die Serienbelieferung abgestimmt wird.",
        },
        {
          title: "Projektbezogene Rezepturanpassung",
          description:
            "Sind technische Ziele, Validierungsbedingungen und der erwartete Serienbedarf klar, können Rezepturanpassungen oder eine kundenspezifische Materialentwicklung bewertet werden.",
        },
      ],
    },
    proof: {
      eyebrow: "Fertigung & Validierungsgrundlage",
      title: "Eine belastbare Grundlage für Technik und Lieferantenbewertung",
      body: "Eigene Fertigung, interne Prüfungen und typbezogene Werkstoffunterlagen unterstützen die Bewertung von Kandidaten und die weitere Lieferabstimmung.",
      factoryImageAlt:
        "Doppelschnecken-Extrusionslinien am Taiyi-Polymer-Produktionsstandort in Yancheng.",
      factoryImageCaption: "Produktionsstandort Yancheng · Doppelschnecken-Extrusion",
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
      eyebrow: "Commencez par votre besoin",
      title: "Le choix matière commence généralement par les conditions de la pièce",
      body: "Pour un engrenage, le couple de frottement, l'usure et le bruit sont prioritaires. Une pièce structurelle dépend davantage de la rigidité, du retrait et de la stabilité dimensionnelle. Une pièce électrique exige d'abord une plage de résistance et un environnement définis. Le nom d'une matière ou une valeur isolée aide à présélectionner, mais suffit rarement à confirmer l'adéquation réelle.",
      ariaLabel: "Choisir un parcours selon le besoin actuel de sélection matière",
      items: [
        {
          label: "Pièce",
          title: "Je sélectionne une matière pour une pièce",
          description:
            "Partez de la fonction, du mouvement, de la charge, de l'environnement d'assemblage et de l'avancement de l'outillage.",
          action: "Parcourir les pièces",
        },
        {
          label: "Performance",
          title: "Je dois résoudre un problème de performance",
          description:
            "Partez de l'usure, du faible frottement, du renforcement, de l'impact, des intempéries, de la conductivité ou de l'antistatique.",
          action: "Voir les orientations matière",
        },
        {
          label: "Grade & données",
          title: "J'ai déjà un grade de référence",
          description:
            "Utilisez le type de matière, le grade ou un mot-clé de performance pour trouver les données et documents techniques disponibles.",
          action: "Trouver grades & TDS",
        },
      ],
    },
    core: {
      eyebrow: "Produit principal",
      title: "Le POM modifié est notre gamme matière principale",
      body: "Pour engrenages, bagues, pièces coulissantes, pièces structurelles et composants électriques, nous proposons des orientations POM de base et haute fluidité, faible friction, renforcées, résistantes aux chocs et aux intempéries, conductrices et antistatiques.",
      action: "Voir les familles POM",
      materialImageAlt:
        "Granulés de résine POM naturelle utilisés pour le compoundage et le développement de grades.",
      materialImageCaption: "Granulés de résine POM",
      directionsAria: "Orientations et familles de POM modifié",
      groups: [
        {
          title: "Usure & faible frottement",
          description:
            "Comparer les orientations de glissement selon le couple de frottement, la charge, la vitesse, la lubrification et l'usure visée.",
          action: "POM anti-usure",
          relatedLinks: [],
        },
        {
          title: "Renforcement & maîtrise dimensionnelle",
          description:
            "Comparer les solutions renforcées et chargées selon la rigidité, le retrait, le gauchissement, l'orientation des fibres et les tolérances.",
          action: "POM renforcé fibres de verre",
          relatedLinks: ["POM renforcé fibres de carbone", "POM chargé billes de verre"],
        },
        {
          title: "Choc & tenue aux intempéries",
          description:
            "Évaluer les grades selon le choc, la ténacité à basse température, les contraintes d'assemblage ou l'exposition lumineuse.",
          action: "POM haute résistance au choc",
          relatedLinks: ["POM résistant aux intempéries"],
        },
        {
          title: "Conducteur & antistatique",
          description:
            "Définir la plage de résistance, la méthode d'essai, la mise à la terre, la couleur et l'environnement avant comparaison.",
          action: "POM conducteur & antistatique",
          relatedLinks: ["Contrôle électrostatique multi-polymères"],
        },
      ],
      supportingTitle: "Lorsque le POM n'est pas la seule réponse",
      supportingBody:
        "Si la pièce exige un autre équilibre entre rigidité, tenue thermique, humidité ou mise en œuvre, des résines POM de base et des matières PA6, PA66 et PPA sélectionnées peuvent aussi être évaluées.",
      supportingLinks: ["Résine POM", "PA6", "PA66", "PPA"],
      allFamiliesAction: "Voir toutes les familles matière",
    },
    applications: {
      eyebrow: "Solutions par composant",
      title: "Chaque pièce impose ses propres priorités",
      body: "Partez de la pièce réelle, définissez les conditions dominantes, puis reliez-les aux orientations matière, aux données grade et aux exigences de validation.",
      action: "Voir tous les parcours composants",
      items: [
        {
          title: "Engrenages plastiques de précision",
          description:
            "Couple, denture, vitesse, matériau en contact, lubrification et précision définissent ensemble la plage de candidats.",
          imageAlt:
            "Engrenages plastiques de précision et composants en mouvement illustrant la sélection matière.",
        },
        {
          title: "Bagues & douilles",
          description:
            "Charge, vitesse de glissement, arbre et logement, jeu, lubrification et environnement déterminent l'orientation candidate.",
          imageAlt:
            "Bagues, douilles et guides coulissants en plastique technique illustrant la sélection matière.",
        },
        {
          title: "Composants de chaînes de convoyage",
          description:
            "Traction, usure des articulations, frottement du rail, pas, cible électrostatique et environnement doivent être évalués ensemble.",
          imageAlt:
            "Plaques, maillons de convoyeur et composants d'automatisation en plastique illustrant la sélection matière.",
        },
        {
          title: "Tiroirs & cartouches de vanne",
          description:
            "Pression, fluide, étanchéité, jeu du tiroir, cycles et fonction de débit définissent les limites de l'application.",
          imageAlt:
            "Tiroirs, cartouches et composants internes de contrôle des fluides illustrant la sélection matière.",
        },
        {
          title: "Guides textiles",
          description:
            "Fil, vitesse, tension, géométrie de contact, état de surface, usure et comportement électrostatique influencent le choix.",
          imageAlt:
            "Guides-fils pour machines textiles illustrant la sélection matière.",
        },
        {
          title: "Plateaux de manutention IC",
          description:
            "Classe ESD, température procédé, planéité, géométrie des alvéoles, propreté et manutention doivent être définies ensemble.",
          imageAlt:
            "Plateaux de manutention IC et alvéoles de précision illustrant la sélection matière.",
        },
      ],
    },
    process: {
      eyebrow: "Démarche",
      title: "Trois étapes, des exigences de la pièce aux grades candidats",
      body: "Les informations déjà disponibles permettent d'établir un premier champ matière, puis de confirmer progressivement les données, documents et conditions de validation du projet.",
      stepsAria: "Trois étapes, des exigences de la pièce aux grades candidats",
      steps: [
        {
          title: "Décrire la pièce",
          description:
            "Indiquez sa fonction, ses conditions d'utilisation, l'avancement de l'outillage et l'objectif de performance prioritaire.",
        },
        {
          title: "Réduire le champ matière",
          description:
            "Utilisez les orientations matière et les données disponibles pour établir une liste de candidats à évaluer.",
        },
        {
          title: "Passer à la validation projet",
          description:
            "Confirmez la disponibilité des TDS et documents, puis les échantillons et essais de moulage si nécessaire.",
        },
      ],
    },
    collaboration: {
      eyebrow: "Collaboration projet",
      title: "Une démarche concrète, des exigences de la pièce à la validation",
      body: "Il n'est pas nécessaire de disposer d'une spécification matière complète pour commencer. Les conditions d'utilisation de la pièce, un mode de défaillance observé ou un grade de référence suffisent pour réduire progressivement le nombre de matières candidates.",
      itemsAria: "Mode de collaboration de Taiyi Polymer sur les projets",
      items: [
        {
          title: "Des échanges projet directs",
          description:
            "Les exigences commerciales, techniques et de production sont alignées sur les mêmes besoins de la pièce, sans multiplier les relais d'information.",
        },
        {
          title: "Une validation flexible en petite série",
          description:
            "Échantillons, lots pilotes et essais de moulage permettent d'évaluer les matières candidates avant de passer à un approvisionnement régulier.",
        },
        {
          title: "Des ajustements de formulation par projet",
          description:
            "Lorsque les objectifs techniques, les conditions de validation et les volumes de production prévus sont clairs, un ajustement de formulation ou un développement matière spécifique peut être étudié.",
        },
      ],
    },
    proof: {
      eyebrow: "Fabrication & éléments de validation",
      title: "Une base concrète pour l'ingénierie et l'évaluation fournisseur",
      body: "La production intégrée, les essais internes et les documents matière confirmés par grade soutiennent l'évaluation des candidats et la suite des échanges d'approvisionnement.",
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
      documentsAria: "Types de documents à confirmer selon le grade et le projet",
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
      eyebrow: "Comece pela sua tarefa",
      title: "A seleção do material geralmente começa pelas condições da peça",
      body: "Em engrenagens, o par de atrito, o desgaste e o ruído ganham prioridade. Peças estruturais dependem mais de rigidez, retração e estabilidade dimensional. Peças elétricas exigem primeiro uma faixa de resistência e um ambiente de uso definidos. O nome do material ou uma propriedade isolada ajuda na triagem inicial, mas raramente confirma a adequação real.",
      ariaLabel: "Escolher um caminho conforme a tarefa atual de seleção de material",
      items: [
        {
          label: "Peça",
          title: "Estou selecionando material para uma peça",
          description:
            "Comece pela função, movimento, carga, ambiente de montagem e estágio do molde da peça.",
          action: "Explorar caminhos por peça",
        },
        {
          label: "Desempenho",
          title: "Preciso resolver um problema de desempenho",
          description:
            "Comece por desgaste, baixo atrito, reforço, impacto, intempéries, condutividade ou requisito antiestático.",
          action: "Ver direções de material",
        },
        {
          label: "Grade & dados",
          title: "Já tenho um grade de referência",
          description:
            "Use o tipo de material, o grade ou uma palavra-chave de desempenho para encontrar dados e documentos técnicos disponíveis.",
          action: "Encontrar grades & TDS",
        },
      ],
    },
    core: {
      eyebrow: "Produto principal",
      title: "O POM modificado é nossa principal linha de materiais",
      body: "Para engrenagens, buchas, peças deslizantes, peças estruturais e componentes com função elétrica, oferecemos direções base e de alto fluxo, baixo atrito, reforçadas, modificadas para impacto, resistentes às intempéries, condutivas e antiestáticas.",
      action: "Ver famílias de POM",
      materialImageAlt:
        "Grânulos de resina POM natural usados na composição e no desenvolvimento de grades.",
      materialImageCaption: "Grânulos de resina POM",
      directionsAria: "Direções e famílias de POM modificado",
      groups: [
        {
          title: "Desgaste & baixo atrito",
          description:
            "Compare direções para deslizamento considerando par de atrito, carga, velocidade, lubrificação e desgaste-alvo.",
          action: "POM de baixo desgaste",
          relatedLinks: [],
        },
        {
          title: "Reforço & controle dimensional",
          description:
            "Compare direções reforçadas e preenchidas por rigidez, retração, empenamento, orientação de fibras e exigências dimensionais.",
          action: "POM com fibra de vidro",
          relatedLinks: ["POM com fibra de carbono", "POM com microesferas de vidro"],
        },
        {
          title: "Impacto & resistência às intempéries",
          description:
            "Avalie grades por impacto, tenacidade em baixa temperatura, tensão de montagem ou exposição à luz.",
          action: "POM de alto impacto",
          relatedLinks: ["POM resistente às intempéries"],
        },
        {
          title: "Condutivo & antiestático",
          description:
            "Defina faixa de resistência, método de ensaio, aterramento, cor e ambiente antes de comparar as direções.",
          action: "POM condutivo & antiestático",
          relatedLinks: ["Controle estático entre polímeros"],
        },
      ],
      supportingTitle: "Quando o POM não é a única resposta",
      supportingBody:
        "Quando a peça exige outro equilíbrio de rigidez, resistência térmica, umidade ou processamento, resina POM base e materiais PA6, PA66 e PPA selecionados também podem ser avaliados.",
      supportingLinks: ["Resina POM base", "PA6", "PA66", "PPA"],
      allFamiliesAction: "Ver todas as famílias de materiais",
    },
    applications: {
      eyebrow: "Soluções por componente",
      title: "Peças diferentes trazem prioridades diferentes",
      body: "Comece pela peça real, defina as condições dominantes e conecte-as às direções de material, aos dados de grade e às exigências de validação.",
      action: "Ver todos os caminhos por componente",
      items: [
        {
          title: "Engrenagens plásticas de precisão",
          description:
            "Torque, geometria do dente, rotação, material de contato, lubrificação e precisão definem juntos a faixa de candidatos.",
          imageAlt:
            "Engrenagens plásticas de precisão e componentes de movimento usados para explicar a seleção de materiais.",
        },
        {
          title: "Buchas & mangas",
          description:
            "Carga, velocidade de deslizamento, eixo e alojamento, folga, lubrificação e ambiente determinam a direção candidata.",
          imageAlt:
            "Buchas, mangas e guias deslizantes em plástico de engenharia usados para explicar a seleção de materiais.",
        },
        {
          title: "Componentes de correntes transportadoras",
          description:
            "Tração, desgaste das articulações, atrito da guia, passo, meta eletrostática e ambiente devem ser avaliados em conjunto.",
          imageAlt:
            "Placas, elos de transportador e componentes de automação em plástico usados para explicar a seleção de materiais.",
        },
        {
          title: "Carretéis & cartuchos de válvula",
          description:
            "Pressão, fluido, vedação, folga do carretel, ciclos de movimento e função de vazão definem os limites da aplicação.",
          imageAlt:
            "Carretéis, cartuchos e componentes internos de controle de fluxo usados para explicar a seleção de materiais.",
        },
        {
          title: "Guias têxteis",
          description:
            "Fio, velocidade, tensão, geometria de contato, acabamento, desgaste e comportamento eletrostático influenciam a seleção.",
          imageAlt:
            "Guias de fios para máquinas têxteis usados para explicar a seleção de materiais.",
        },
        {
          title: "Bandejas de manuseio de IC",
          description:
            "Classe ESD, temperatura de processo, planicidade, geometria dos alojamentos, limpeza e manuseio devem ser definidos juntos.",
          imageAlt:
            "Bandejas de manuseio de IC e alojamentos de precisão usados para explicar a seleção de materiais.",
        },
      ],
    },
    process: {
      eyebrow: "Processo de trabalho",
      title: "Três etapas dos requisitos da peça aos grades candidatos",
      body: "Use as informações já disponíveis para formar uma faixa inicial de materiais e confirme, passo a passo, os dados, documentos e condições de validação do projeto.",
      stepsAria: "Três etapas dos requisitos da peça aos grades candidatos",
      steps: [
        {
          title: "Descreva a peça",
          description:
            "Informe a função, as condições de uso, o estágio do molde e o objetivo de desempenho mais importante.",
        },
        {
          title: "Reduza a faixa de materiais",
          description:
            "Use as direções de material e os dados disponíveis para formar uma lista de candidatos para avaliação.",
        },
        {
          title: "Avance para a validação do projeto",
          description:
            "Confirme a disponibilidade de TDS e documentos e, quando necessário, amostras e testes de moldagem.",
        },
      ],
    },
    collaboration: {
      eyebrow: "Colaboração de projeto",
      title: "Um caminho prático dos requisitos à validação",
      body: "Não é necessário ter uma especificação completa do material para começar. As condições de uso da peça, um modo de falha atual ou um grade de referência permitem restringir gradualmente as opções de material.",
      itemsAria: "Formas de colaboração da Taiyi Polymer em projetos",
      items: [
        {
          title: "Comunicação direta no projeto",
          description:
            "Os requisitos comerciais, técnicos e de produção ficam alinhados em torno das mesmas condições da peça, sem sucessivos repasses de informação.",
        },
        {
          title: "Validação flexível em pequenos lotes",
          description:
            "Amostras, lotes-piloto e testes de moldagem permitem avaliar as opções de material antes de avançar para o fornecimento regular.",
        },
        {
          title: "Ajustes de formulação por projeto",
          description:
            "Quando as metas técnicas, as condições de validação e o volume previsto de produção estão claros, podem ser avaliados ajustes de formulação ou o desenvolvimento de um grade específico.",
        },
      ],
    },
    proof: {
      eyebrow: "Fabricação & evidências de validação",
      title: "Uma base prática para engenharia e avaliação do fornecedor",
      body: "Produção própria, ensaios internos e documentos de material confirmados por grade apoiam a avaliação dos candidatos e a próxima etapa de fornecimento.",
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
      certificatesTitle: "Certificados dos sistemas de gestão",
      certificateAction: "Ver todos os certificados e escopos",
      certificateOpenAction: "Ver certificado",
      internationalLabel: "Suporte a projetos internacionais",
      internationalBody:
        "Documentação de material e coordenação de entregas de exportação estão disponíveis para projetos internacionais.",
    },
  },
} satisfies Record<AlignedHomeLocale, HomeTaskFirstMessages>;
