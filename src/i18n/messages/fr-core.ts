import type { SiteMessages } from "@/i18n/types";
import { homeTaskFirstLocaleMessages } from "../homeTaskFirstLocaleMessages.ts";

const messages = {
  Home: {
    metadata: {
      title: "Compounds POM modifiés pour pièces industrielles | Taiyi Polymer",
      description:
        "Taiyi Polymer fabrique des compounds POM modifiés pour pièces moulées de précision résistantes à l'usure, à faible frottement, renforcées, conductrices ou antistatiques, avec une offre sélectionnée en PA6, PA66 et PPA.",
      imageAlt: "Fabrication de compounds POM modifiés chez Taiyi Polymer",
    },
    hero: {
      eyebrowDesktop: "COMPOUNDAGE POM · SUPPORT MATIÈRE",
      eyebrowMobile: "COMPOUNDAGE POM",
      title: "Fabricant de compounds POM modifiés pour pièces moulées de précision",
      body:
        "De l'usure et du faible frottement au renforcement et au contrôle électrostatique, réduisez le champ matière selon les conditions de la pièce, puis examinez données grade, échantillons et essais de moulage.",
      exploreAction: "Trouver par type de pièce",
      contactAction: "Trouver grades & TDS",
    },
    metrics: [
      { label: "Capacité annuelle de compounds", note: "Tonnes par an" },
      { label: "Racines industrielles", note: "Héritage dans la fabrication de plastiques techniques" },
      { label: "Lignes bivis", note: "Lignes d'extrusion internes" },
      { label: "Surface du site", note: "Mètres carrés" },
      { label: "Équipements d'essai", note: "Unités internes" },
    ],
    materials: {
      title: "Gamme de matériaux",
      body:
        "Commencez par le POM modifié, notre gamme principale. Nous étudions aussi des compounds PA6, PA66 et PPA sélectionnés lorsqu'une pièce nécessite un autre équilibre entre rigidité, tenue thermique et comportement de mise en œuvre.",
      documentSupport: "Documents selon le grade et le projet",
      dataSheetsAction: "Trouver les données grade et TDS",
      coreLabel: "Gamme principale",
      coreDirectionsAria: "Axes de performance des compounds POM",
      coreDirections: [
        "Résistance à l'usure",
        "Faible frottement",
        "Renforcement",
        "Conducteur / antistatique",
      ],
      allFamiliesAction: "Voir toutes les familles",
      additionalFamiliesAria: "Familles de matériaux complémentaires",
      items: [
        {
          title: "Compounds POM",
          description:
            "Gamme principale pour pièces moulées exigeant résistance à l'usure, faible frottement, renforcement, conductivité ou propriétés antistatiques.",
          action: "Voir les compounds POM",
          specs: [
            ["Rôle", "Gamme principale"],
            ["Axes", "Usure / Frottement / Renforcement"],
            ["Usage", "Pièces moulées de précision"],
            ["Données", "TDS par grade"],
          ],
        },
        {
          title: "Compounds PA6",
          description:
            "Compounds PA6 sélectionnés pour pièces renforcées, modifiées choc, ignifugées, soumises à l'usure ou chargées minérales.",
          action: "Voir les compounds PA6",
          specs: [
            ["Rôle", "Famille complémentaire"],
            ["Matériau", "PA6"],
            ["Usage", "Pièces renforcées / soumises aux chocs"],
            ["Périmètre", "Selon le projet"],
          ],
        },
        {
          title: "Compounds PA66",
          description:
            "Compounds PA66 sélectionnés pour pièces renforcées, ignifugées, soumises à l'usure et dimensionnellement stables.",
          action: "Voir les compounds PA66",
          specs: [
            ["Rôle", "Famille complémentaire"],
            ["Matériau", "PA66"],
            ["Usage", "Pièces rigides / soumises à la chaleur"],
            ["Périmètre", "Selon le projet"],
          ],
        },
        {
          title: "Compounds PPA",
          description:
            "Compounds PPA étudiés par projet pour pièces moulées à température plus élevée exigeant rigidité et stabilité dimensionnelle.",
          action: "Voir les compounds PPA",
          specs: [
            ["Rôle", "Famille complémentaire"],
            ["Matériau", "PPA"],
            ["Usage", "Pièces haute température"],
            ["Périmètre", "Selon le projet"],
          ],
        },
        {
          title: "Résine POM de base",
          description:
            "Ligne d'approvisionnement complémentaire pour les clients recherchant certaines résines POM de base en plus des compounds.",
          action: "Voir les grades de résine",
          specs: [
            ["Rôle", "Ligne complémentaire"],
            ["Usage", "Approvisionnement sélectionné"],
            ["Besoin", "Résine de base"],
            ["Couleur", "Naturel"],
          ],
        },
      ],
    },
    qualification: {
      title: "Comment nous établissons une présélection de grades",
      intro:
        "Nous comparons la pièce, le moule, les conditions d'utilisation et les documents requis pour retenir des grades candidats avant examen des TDS, échantillonnage et essais de moulage.",
      applicationAction: "Explorer les parcours d'application",
      figureAlt: "Granulés noirs de plastique technique disposés dans une coupelle de laboratoire.",
      figureLabel: "Éléments d'évaluation",
      figureCaption:
        "Les matériaux candidats sont vérifiés par rapport aux contraintes de la pièce, de la mise en œuvre et des documents.",
      stepsAria: "Étapes de qualification des grades",
      steps: [
        {
          stage: "Entrées",
          title: "Pièce et outillage",
          description:
            "Type de pièce, avancement du moule, nombre d'empreintes, point d'injection, mouvement et environnement d'assemblage.",
        },
        {
          stage: "Mise en œuvre",
          title: "Procédé et maîtrise dimensionnelle",
          description:
            "Fluidité, remplissage multi-empreintes, retrait, gauchissement, stabilité dimensionnelle et couleur.",
        },
        {
          stage: "Performances",
          title: "Objectifs de performance",
          description:
            "Usure, frottement, rigidité, impact, conductivité, comportement antistatique et température de service.",
        },
        {
          stage: "Décision",
          title: "Présélection de grades",
          description:
            "Les candidats sont comparés avant de confirmer la disponibilité des documents et les besoins d'essais sur échantillons.",
        },
      ],
    },
    quality: {
      title: "Justificatifs pour la qualification fournisseur",
      body:
        "Les reconnaissances d'entreprise et certificats de systèmes de management de Jiangsu Taiyi Nano Technology Co., Ltd., associés aux documents matière, accélèrent l'évaluation fournisseur par les achats.",
      panelAria: "Justificatifs de l'entreprise et documents matière",
      qualifications: [
        { category: "Reconnaissance d'entreprise", title: "Entreprise nationale de haute technologie" },
        {
          category: "Désignation provinciale",
          title: "PME spécialisée et innovante de la province du Jiangsu",
        },
        { category: "Propriété intellectuelle", title: "29 brevets accordés" },
      ],
      documentSupportTitle: "Documents disponibles",
      documentSupportBody: "Disponibilité confirmée selon le grade et le projet.",
      documentListAria: "Documents matière disponibles selon le grade et le projet",
      documentNames: {
        TDS: "Fiche technique",
        SDS: "Fiche de données de sécurité",
        COA: "Certificat d'analyse",
        REACH: "Enregistrement, évaluation, autorisation et restriction des substances chimiques",
        RoHS: "Restriction des substances dangereuses",
      },
      certifications: [
        {
          system: "Management de la qualité automobile",
          scope:
            "Fabrication de granulés plastiques, hors conception du produit selon la clause 8.3.",
        },
        {
          system: "Management de la qualité",
          scope: "Production de matériaux nanopolymères (particules plastiques).",
        },
        {
          system: "Management environnemental",
          scope:
            "Management environnemental des activités commerciales liées aux matériaux nanopolymères (particules plastiques).",
        },
        {
          system: "Santé et sécurité au travail",
          scope:
            "Management de la santé et de la sécurité au travail dans les activités commerciales liées aux matériaux nanopolymères (particules plastiques).",
        },
      ],
      featuredDescription: "Système de management de la qualité automobile",
      certificateAvailable: "Certificat PDF disponible pour consultation",
      certifiedScope: "Périmètre certifié",
      openCertificate: "Ouvrir le certificat PDF",
      openCertificateAria: "Ouvrir le certificat {standard} au format PDF",
      scopePrefix: "Périmètre :",
      openPdf: "Ouvrir le PDF",
    },
    exportNetwork: {
      eyebrow: "RÉSEAU D'APPROVISIONNEMENT",
      title: "Routes d'exportation",
      description:
        "Les flux projet relient le site de production de Yancheng à des destinations d'Asie centrale, d'Europe, d'Asie de l'Est et des Amériques.",
      mapAlt:
        "Carte du monde montrant le site de production de Taiyi et ses régions d'exportation en Asie centrale, Europe, Asie de l'Est et dans les Amériques.",
      legendAria: "Légende de la carte",
      productionBase: "Site de production",
      exportRegion: "Région d'exportation",
      regionsTitle: "Régions desservies",
      regionsBody: "Sélectionnez une région pour mettre ses routes en évidence sur la carte.",
      factsAria: "Données du réseau d'exportation",
      productionBaseValue: "Yancheng, Jiangsu, Chine",
      listedDestinations: "Destinations indiquées",
      listedDestinationsValue: "9 destinations affichées",
      routes: [
        { region: "Asie centrale", coverage: "Ouzbékistan et Kazakhstan" },
        { region: "Europe", coverage: "Pologne et Turquie" },
        { region: "Asie de l'Est", coverage: "Corée du Sud et Japon" },
        { region: "Amériques", coverage: "Mexique, Brésil et Argentine" },
      ],
    },
    inquiry: {
      eyebrow: "Partir des éléments connus",
      title: "Commencer par les exigences connues de la pièce et réduire progressivement le champ matière",
      body:
        "Une spécification complète n'est pas nécessaire. Indiquez la fonction de la pièce, les conditions d'utilisation, la matière actuelle ou le mode de défaillance; les inconnues peuvent rester à confirmer.",
      checklistLabel: "Éléments utiles au départ",
      checklist: [
        "Fonction de la pièce et type de mouvement",
        "État du moule et contraintes de mise en œuvre",
        "Objectifs de performance prioritaires",
        "Matière actuelle, indices de défaillance et calendrier",
      ],
      action: "Parler de votre application",
    },
    taskFirst: homeTaskFirstLocaleMessages.fr,
  },
  Contact: {
    metadata: {
      title: "Échanger sur un besoin matière | Taiyi Polymer",
      description:
        "Contactez Jiangsu Taiyi Nano Technology Co., Ltd. pour le POM modifié, les compounds de plastiques techniques, la résine POM, la sélection matière, les documents, les échantillons et l'évaluation de projet.",
      imageAlt: "Ligne de production de plastiques techniques de Taiyi Polymer",
    },
    breadcrumbHome: "Accueil",
    breadcrumbContact: "Contact",
    hero: {
      title: "Demander une étude matière",
      description:
        "Indiquez la fonction de la pièce, les conditions d'utilisation et les exigences visées. Nous identifierons les familles pertinentes, confirmerons les documents disponibles et préciserons la prochaine étape d'échantillonnage ou d'évaluation.",
    },
    formPanel: {
      title: "Commencez par l'essentiel",
      body:
        "L'entreprise, l'adresse e-mail et l'application suffisent pour démarrer. Ajoutez les détails techniques seulement s'ils sont déjà disponibles.",
      requiredBefore: "Les champs marqués",
      requiredAfter: "sont obligatoires.",
    },
    sales: {
      title: "Contact commercial",
      contactPerson: "Interlocuteur",
      role: "Responsable commercial",
      company: "Société",
      email: "E-mail",
      whatsapp: "WhatsApp",
      location: "Localisation",
      locationValue: "Yancheng, Jiangsu, Chine",
      reviewTitle: "Ce que nous pouvons étudier",
      reviewItems: [
        "Familles de matériaux pertinentes et grades candidats",
        "Documents techniques disponibles et besoins d'échantillons",
      ],
      emailDirectly: "Envoyer un e-mail",
    },
    directEmail: {
      greeting: "Bonjour Ethan,",
      application: "Application ou pièce",
      material: "Matériau ou grade actuel",
      reference: "Grade de référence",
      candidates: "Présélection de candidats",
      requirement: "Exigence prioritaire",
      keyRequirements: "Exigences principales :",
      documentNeeds: "Documents requis :",
      closing: "Cordialement,",
      subject: "Demande d'étude d'un besoin matière",
    },
    context: {
      grade: "Grade étudié",
      reference: "Grade de référence",
      candidates: "Présélection de candidats",
      requirement: "Exigence prioritaire",
      intent: "Objet de la demande",
      sampleIntent: "Demande d'échantillon",
      evaluationIntent: "Évaluation de grade",
      tdsIntent: "TDS ou documents",
    },
    form: {
      contextFrom: "Contexte",
      contextPrefilled: "Ces informations sont préremplies. Vous pouvez modifier chaque champ.",
      clearContext: "Effacer le contexte",
      inquiryTypeLabel: "De quoi avez-vous besoin ?",
      inquiryTypePlaceholder: "Sélectionner un type de demande",
      inquiryTypeOptions: {
        "grade-evaluation": "Recommandation de grade",
        tds: "TDS ou documents",
        sample: "Échantillon",
        "quote-supply": "Devis ou échange sur l'approvisionnement",
      },
      companyLabel: "Société",
      companyPlaceholder: "Nom de la société",
      emailLabel: "E-mail",
      materialLabel: "Famille de matériaux (facultatif)",
      materialPlaceholder: "Choisir une famille de matériaux",
      materialOptionLabels: {
        "Modified POM Compounds": "Compounds POM modifiés",
        "Wear-Resistant & Low-Friction POM": "POM résistant à l'usure et à faible frottement",
        "High-Impact POM": "POM haute résistance aux chocs",
        "UV-Resistant POM": "POM résistant aux UV",
        "Glass Fiber Reinforced POM": "POM renforcé de fibres de verre",
        "Glass Bead Filled POM": "POM chargé de billes de verre",
        "Carbon Fiber Reinforced POM Compound": "Compound POM renforcé de fibres de carbone",
        "Conductive / Antistatic POM": "POM conducteur / antistatique",
        "Base POM Resin": "Résine POM de base",
        "Ultra-High Flow POM": "POM ultra-fluide",
        "PA6 Compounds": "Compounds PA6",
        "PA66 Compounds": "Compounds PA66",
        "PPA Compounds": "Compounds PPA",
        "Conductive & Antistatic Compounds": "Compounds conducteurs et antistatiques",
        "Other Engineering Plastic Compound": "Autre compound de plastique technique",
      },
      applicationLabel: "Application / Pièce",
      applicationPlaceholder: "Engrenage, clip, boîtier…",
      detailsLabel: "Détails du besoin (facultatif)",
      detailsPlaceholder:
        "Grade actuel, conditions d'utilisation, propriétés visées, volume annuel ou documents requis.",
      sending: "Envoi en cours…",
      submit: "Envoyer les exigences du projet",
      fallbackNote: "Si l'envoi direct est indisponible, un brouillon d'e-mail s'ouvrira.",
      sentStatus: "Demande envoyée. Nous l'étudierons et vous répondrons par e-mail.",
      fallbackStatus:
        "Un brouillon d'e-mail a été préparé et le texte de la demande a été copié lorsque cela était possible.",
      emailDraft: {
        notSpecified: "Non renseigné",
        greeting: "Bonjour Ethan,",
        intro: "Merci d'étudier le besoin matière suivant :",
        company: "Société",
        email: "E-mail",
        material: "Matériau recherché",
        application: "Application / Pièce",
        inquiryType: "Votre besoin",
        grade: "Grade",
        source: "Source",
        details: "Détails du besoin :",
        closing: "Cordialement,",
        subjectPrefix: "Besoin matière",
      },
    },
  },
} satisfies Pick<SiteMessages, "Home" | "Contact">;

export default messages;
