import type { ProductFunnelMessages } from "@/i18n/productFunnelTypes";

const messages = {
  common: {
    home: "Accueil",
    products: "Produits",
    category: "Résine POM de base",
    technicalData: "Données techniques",
    contact: "Contact",
    contactSourceCategory: "Catégorie résine POM de base",
    contactSourceGrade: "Page produit XT-100",
    contactSourceTechnicalData: "Données techniques XT-100",
  },
  category: {
    metadata: {
      title: "Résines POM de base pour moulage de précision | Taiyi Polymer",
      description:
        "Comparez les résines POM de base Taiyi Polymer selon la fluidité, la résistance en traction, la tenue thermique et les contraintes du projet.",
      imageAlt: "Résine POM de base naturelle de Taiyi Polymer",
    },
    hero: {
      eyebrow: "Répertoire matières",
      title: "Résine POM de base",
      description:
        "Comparez des grades de base pour pièces injectées de précision ou d'usage général selon la fluidité, le profil mécanique, la tenue thermique et la géométrie de la pièce.",
      overviewLabel: "Cadre de sélection",
      overview:
        "La présélection tient compte du parcours d'écoulement, de l'épaisseur, de l'état du moule et des performances demandées. La validation finale se fait par essai dans le procédé du client.",
      documentsTitle: "Documents selon le grade et le projet",
      documentsBody:
        "La disponibilité des TDS, SDS, COA, REACH et RoHS est confirmée selon le grade, le marché visé et l'étape du projet.",
      contactAction: "Parler de votre application",
      technicalDataAction: "Ouvrir les données techniques",
    },
    navigation: {
      aria: "Navigation de la catégorie résine POM de base",
      title: "Résine POM de base",
      subtitle: "Comparer fluidité, résistance et contraintes d'outillage",
      grades: "Grades",
      faq: "FAQ",
    },
    directory: {
      kicker: "Sélection des grades",
      title: "Comparer les grades POM de base",
      body:
        "Les valeurs servent à la présélection technique. Pour un grade sans page localisée validée, l'action ouvre directement une demande d'étude projet.",
      countSuffix: "grades répertoriés",
      grade: "Grade",
      keyData: "Données clés",
      route: "Étape suivante",
      mfi: "MFI",
      tensile: "Traction",
      hdt: "HDT",
      color: "Couleur",
      natural: "Naturel",
      detailAction: "Détails du grade",
      reviewAction: "Étude projet",
      summaries: {
        "etm090nc-base-pom-resin":
          "Grade standard offrant un équilibre entre résistance et stabilité dimensionnelle.",
        "etm130-base-pom-resin":
          "Fluidité moyenne et profil mécanique équilibré.",
        "etm1500-base-pom-resin":
          "Très haute fluidité pour faciliter le remplissage de pièces complexes.",
        "etm1800-base-pom-resin":
          "Fluidité maximale pour les pièces à parcours d'écoulement très exigeant.",
        "etm270-base-pom-resin":
          "Haute fluidité pour pièces injectées minces et composants de précision.",
        "etm450-base-pom-resin":
          "Haute fluidité pour pièces de précision, électriques et automobiles.",
        "etm750-base-pom-resin":
          "Très haute fluidité pour pièces minces ou sensibles au remplissage.",
        "xt-100-base-pom-resin":
          "POM à faible densité et orientation haute résistance au choc pour pièces injectées de précision ou d'usage général.",
      },
    },
    faq: {
      kicker: "FAQ",
      title: "Questions de présélection",
      items: [
        {
          question: "Comment choisir le niveau de fluidité ?",
          answer:
            "L'épaisseur, le parcours d'écoulement, le point d'injection, le nombre d'empreintes et l'état du moule déterminent la fluidité utile. Un MFI plus élevé ne garantit pas, à lui seul, de meilleures performances de pièce.",
        },
        {
          question: "Ces grades sont-ils directement interchangeables ?",
          answer:
            "Non. Les fiches techniques servent à la présélection ; la géométrie, le moule, le procédé, les dimensions et l'usage final doivent être validés dans le procédé réel.",
        },
        {
          question: "Quels documents peut-on demander ?",
          answer:
            "La disponibilité des TDS, SDS, COA, REACH et RoHS est confirmée pour le grade et le projet concernés.",
        },
      ],
    },
    inquiry: {
      eyebrow: "Étude projet",
      title: "Préparer une présélection de grades exploitable",
      body:
        "Transmettez la fonction de la pièce, l'épaisseur, le parcours d'écoulement, l'état du moule, la matière actuelle, les objectifs, la couleur, les documents requis et le volume estimé. Ces éléments cadrent les données, échantillons et essais suivants.",
      action: "Envoyer les données du projet",
      steps: ["Géométrie de la pièce", "Procédé et moule", "Documents et échantillons"],
    },
  },
  grade: {
    metadata: {
      title: "XT-100 POM à faible densité et haute résistance au choc | Taiyi Polymer",
      description:
        "Évaluez le POM XT-100 à partir des données de densité, MFI, traction, choc et tenue thermique, puis demandez les documents ou un échantillon.",
      imageAlt: "Granulés naturels de POM XT-100 de Taiyi Polymer",
    },
    breadcrumb: "XT-100",
    eyebrow: "POM à faible densité et orientation haute résistance au choc · Injection",
    positioning:
      "Un grade candidat pour pièces injectées de précision ou d'usage général lorsque densité, résistance au choc et fluidité équilibrée doivent être examinées ensemble.",
    summary:
      "Les valeurs publiées servent à la sélection initiale. L'aptitude doit être confirmée avec la géométrie réelle, le moule, la fenêtre de procédé et les conditions d'utilisation.",
    documentSupport: "Documents matière",
    documentNote: "Disponibilité confirmée selon le grade, le marché visé et le projet.",
    sampleAction: "Demander un échantillon XT-100",
    evaluationAction: "Demander une étude du grade",
    independentNote: "Grade Taiyi indépendant · Essai sur échantillon recommandé",
    snapshot: {
      aria: "Synthèse des données XT-100",
      title: "Profil de présélection XT-100",
      body:
        "Examinez d'abord la fluidité, la traction, la tenue thermique et la couleur, puis validez la pièce et le procédé.",
      mfi: "MFI",
      tensile: "Traction",
      hdt: "HDT",
      color: "Couleur",
      flowNote: "Profil à faible densité et orientation haute résistance au choc",
      colorValue: "Naturel",
    },
    sectionNav: {
      aria: "Sections de la page produit XT-100",
      properties: "Données",
      fit: "Profil matière",
      evaluation: "Parcours d'essai",
      notes: "Précautions",
    },
    properties: {
      kicker: "Données techniques",
      title: "Valeurs de référence pour la présélection",
      body:
        "Les valeurs doivent être lues avec leurs unités, normes et conditions d'essai. Elles ne remplacent ni un essai de moulage ni une validation client.",
      property: "Propriété",
      value: "Valeur",
      unit: "Unité",
      method: "Méthode d'essai",
      requestAction: "Demander les documents à jour",
      labels: {
        Density: "Masse volumique",
        "Melt Flow Rate (MFI)": "Indice de fluidité (MFI)",
        "Molding Shrinkage": "Retrait au moulage",
        "Water Absorption": "Absorption d'eau",
        "Tensile Strength": "Résistance en traction",
        "Tensile Strain at Break": "Allongement à la rupture",
        "Flexural Strength": "Résistance en flexion",
        "Flexural Modulus": "Module de flexion",
        "Charpy Notched Impact Strength": "Résistance au choc Charpy entaillé",
        "Izod Notched Impact Strength": "Résistance au choc Izod entaillé",
        "Melting Temperature": "Température de fusion",
        "Heat Deflection Temperature": "Température de fléchissement sous charge",
        "Coefficient of Linear Thermal Expansion, CLTE":
          "Coefficient de dilatation thermique linéaire (CLTE)",
        "Volume Resistivity": "Résistivité volumique",
        "Surface Resistivity": "Résistivité de surface",
        "Dielectric Strength": "Rigidité diélectrique",
      },
      internalMethod: "Méthode interne",
      injectionMolding: "Injection",
    },
    featuresTitle: "Caractéristiques de présélection",
    features: [
      "Orientation faible densité",
      "Orientation haute résistance au choc",
      "Prévu pour le moulage par injection",
      "Couleur naturelle",
    ],
    applicationsTitle: "Applications à évaluer",
    applications: [
      "Pièces techniques de précision",
      "Composants automobiles",
      "Pièces électriques et électroniques",
      "Pièces injectées industrielles",
    ],
    evaluation: {
      kicker: "Parcours d'évaluation",
      title: "Passer de l'analyse des données à la décision pièce",
      body:
        "XT-100 est proposé comme grade candidat à évaluer. La validation finale doit suivre un essai dans le moule du client et dans les conditions réelles d'utilisation.",
      steps: [
        {
          title: "Décrire l'application",
          body: "Transmettre la géométrie, le procédé, la matière actuelle et les objectifs clés.",
        },
        {
          title: "Examiner données et échantillon",
          body: "Définir les documents, la couleur, la quantité d'échantillon et les essais utiles.",
        },
        {
          title: "Valider dans votre procédé",
          body: "Vérifier remplissage, dimensions, aspect et performances d'usage sur la pièce réelle.",
        },
      ],
    },
    notes: {
      title: "Précautions d'évaluation matière",
      body:
        "Cette page facilite la présélection de XT-100. La conception, le moule, le procédé, les objectifs de performance et les exigences propres au client peuvent modifier le résultat. Demandez les documents à jour et confirmez le grade par échantillonnage et essais d'application.",
    },
    inquiry: {
      eyebrow: "Étude projet XT-100",
      title: "Évaluer XT-100 pour votre pièce moulée ?",
      body:
        "Envoyez l'application, le procédé, la matière actuelle, les propriétés visées, la couleur, le volume estimé et les documents requis. Nous préparerons l'étude du grade et de l'échantillon.",
      action: "Demander l'évaluation XT-100",
    },
  },
  technicalData: {
    metadata: {
      title: "Données techniques et TDS POM | Taiyi Polymer",
      description:
        "Consultez des données POM validées avec unités, normes et conditions d'essai, puis demandez les TDS et documents de projet à jour.",
      imageAlt: "Données techniques POM et vérification TDS chez Taiyi Polymer",
    },
    eyebrow: "Données et preuves",
    title: "Données techniques pour l'évaluation matière",
    description:
      "Cette version linguistique ne publie que les grades dont la page technique et les explications ont été entièrement vérifiées. Chaque valeur doit être lue avec son unité, sa norme et sa condition d'essai.",
    evidenceTitle: "Données de grade validées",
    evidenceBody:
      "XT-100 est le premier jeu de données entièrement localisé de cette étape. D'autres grades seront ajoutés après le même contrôle technique et linguistique.",
    gradeLabel: "Grade",
    materialLabel: "Matière",
    statusLabel: "État des données",
    statusValue: "Données web disponibles · PDF à confirmer sur demande",
    viewAction: "Ouvrir les données XT-100",
    requestAction: "Demander la TDS à jour",
    scopeTitle: "Points à vérifier avant validation",
    scopeItems: [
      "Norme, unité et condition d'essai de chaque valeur",
      "Géométrie, moule et fenêtre de procédé réelle",
      "Révision documentaire, marché visé et exigences propres au client",
    ],
    inquiryEyebrow: "Vérification documentaire",
    inquiryTitle: "Besoin d'une TDS, SDS, COA, REACH ou RoHS ?",
    inquiryBody:
      "Indiquez le grade, le marché visé, l'application, l'étape du projet et les documents nécessaires. Leur disponibilité et leur révision seront confirmées pour le projet.",
    inquiryAction: "Demander les documents",
  },
} satisfies ProductFunnelMessages;

export default messages;
