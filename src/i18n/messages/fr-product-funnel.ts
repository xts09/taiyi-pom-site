import type { ProductFunnelMessages } from "@/i18n/productFunnelTypes";

const messages = {
  common: {
    home: "Accueil",
    products: "Produits",
    category: "Résine POM de base",
    technicalData: "Données techniques",
    contact: "Contact",
    contactSourceCategory: "Catégorie de produit",
    contactSourceGrade: "Page localisée d'un grade POM",
    contactSourceTechnicalData: "Données techniques POM localisées",
  },
  category: {
    metadata: {
      title: "Résines POM de base pour moulage de précision | Taiyi Polymer",
      description:
        "Le POM de base PLATFORM® couvre la fluidité standard à l’ultra-haute fluidité pour les pièces injectées générales, précises, minces ou sensibles au remplissage.",
      imageAlt: "Résine POM de base naturelle de Taiyi Polymer",
    },
    hero: {
      eyebrow: "Famille POM modifiée",
      title: "Résine POM de base",
      description:
        "Le POM PLATFORM® couvre différents niveaux de fluidité, de la valeur standard à l’ultra-haute fluidité, pour les pièces injectées générales, de précision, à parois minces ou difficiles à remplir.",
      overviewLabel: "Aperçu de la gamme",
      overview:
        "La gamme réunit les données mécaniques, thermiques et de transformation utiles aux applications automobiles, électriques, sanitaires et industrielles. Les documents techniques et les échantillons sont confirmés selon le grade et le projet.",
      documentsTitle: "Documents techniques et réglementaires",
      contactAction: "Parler de votre application",
      technicalDataAction: "Ouvrir les données techniques",
    },
    navigation: {
      aria: "Navigation de la catégorie résine POM de base",
      title: "Résine POM de base",
      subtitle: "De la fluidité standard à l’ultra-haute fluidité",
      grades: "Grades",
      faq: "FAQ",
    },
    directory: {
      kicker: "Gamme de grades",
      title: "Grades de POM de base",
      body:
        "La gamme va d’un profil équilibré à l’ultra-haute fluidité. Le catalogue réunit le positionnement, les données clés, les détails produit et les documents projet disponibles.",
      countSuffix: "grades répertoriés",
      grade: "Grade",
      keyData: "Données clés",
      route: "Étape suivante",
      mfi: "MFI",
      tensile: "Traction",
      hdt: "HDT",
      color: "Couleur",
      natural: "Naturel",
      black: "Noir",
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
          "Ultra-haute fluidité pour les pièces à long parcours d’écoulement ou difficiles à remplir.",
        "etm270-base-pom-resin":
          "Haute fluidité pour pièces injectées minces et composants de précision.",
        "etm450-base-pom-resin":
          "Haute fluidité pour pièces de précision, électriques et automobiles.",
        "etm750-base-pom-resin":
          "Très haute fluidité pour pièces minces ou sensibles au remplissage.",
        "xt-100-base-pom-resin":
          "POM à faible densité et résistance aux chocs améliorée pour les pièces injectées générales ou de précision.",
      },
    },
    faq: {
      kicker: "FAQ",
      title: "Informations produit et applications",
      items: [
        {
          question: "À quelles pièces la gamme de POM de base est-elle destinée ?",
          answer:
            "La gamme couvre les pièces injectées générales, précises et à parois minces des secteurs automobile, électrique, sanitaire et industriel, avec différentes priorités de remplissage, de propriétés mécaniques ou de maîtrise dimensionnelle.",
        },
        {
          question: "Quels niveaux de fluidité la gamme couvre-t-elle ?",
          answer:
            "La gamme s’étend de la fluidité standard et moyenne à la haute et l’ultra-haute fluidité pour le remplissage conventionnel, les pièces de précision, les parois minces et les chemins d’écoulement plus longs.",
        },
        {
          question: "Quels documents peut-on demander ?",
          answer:
            "La disponibilité des TDS, SDS, COA, REACH et RoHS est confirmée pour le grade et le projet concernés.",
        },
      ],
    },
    inquiry: {
      eyebrow: "Support projet pour POM de base",
      title: "Comparer les grades sur la pièce et le procédé",
      body:
        "À partir de la fonction de la pièce, du moule et des conditions de transformation, nous comparons les grades concernés et fournissons les données, documents et échantillons disponibles pour les essais de moulage.",
      action: "Contacter l’équipe matériaux",
      steps: ["Pièce et conditions", "Moule et procédé", "Données et échantillons"],
    },
  },
  categoryProfiles: {
    "glass-bead-filled-pom-compound": {
      categoryLabel: "POM chargé de billes de verre",
      metadata: {
        title: "POM à billes de verre : grades | Taiyi Polymer",
        description:
          "PLATFORM® EGB25 contient 25 % de billes de verre et s’adresse aux pièces POM injectées qui exigent des données de retrait longitudinal et transversal, de comportement dimensionnel et de propriétés thermiques.",
        imageAlt: "POM naturel chargé de billes de verre de Taiyi Polymer",
      },
      hero: {
        eyebrow: "Famille POM modifiée",
        title: "POM chargé de billes de verre",
        description:
          "Pour les pièces de précision sensibles aux dimensions, PLATFORM® EGB25 chargé de 25 % de billes de verre offre un profil plus équilibré de retrait longitudinal et transversal, avec des données de fluidité, de propriétés mécaniques et thermiques pour la validation projet.",
        overviewLabel: "Aperçu de la gamme",
        overview:
          "EGB25 réunit les données de retrait au moulage, les propriétés mécaniques et thermiques ainsi que les informations de transformation. Les documents techniques et les échantillons sont confirmés selon le projet.",
      },
      navigation: {
        aria: "Navigation des sections du POM chargé de billes de verre",
        title: "POM chargé de billes de verre",
        subtitle: "25 % de billes de verre pour un retrait équilibré et des propriétés thermiques maîtrisées",
      },
      directory: {
        kicker: "Données du grade",
        title: "EGB25 POM chargé de billes de verre",
        body:
          "La page EGB25 réunit les retraits longitudinal et transversal ainsi que les données mécaniques et thermiques publiées pour le grade.",
        summaries: {
          "egb25-glass-bead-pom":
            "POM chargé de 25 % de billes de verre avec un profil plus équilibré de retrait longitudinal et transversal.",
        },
      },
      faq: {
        kicker: "FAQ",
        title: "Informations produit et applications",
        items: [
          {
            question: "À quelles pièces EGB25 est-il destiné ?",
            answer:
              "EGB25 s’adresse aux pièces de précision qui exigent des données de retrait longitudinal et transversal, de comportement dimensionnel et de propriétés thermiques dans les projets automobiles, électriques, sanitaires et industriels.",
          },
          {
            question: "Quelles données la page du grade présente-t-elle ?",
            answer:
              "La page présente le retrait au moulage ainsi que les propriétés mécaniques, thermiques et de transformation afin d’intégrer les données matériau à la validation de la pièce et du moule.",
          },
          {
            question: "Quels documents peuvent être demandés ?",
            answer:
              "La disponibilité des TDS, SDS, COA, REACH et RoHS est confirmée selon le grade, le marché cible et le projet.",
          },
        ],
      },
      inquiry: {
        eyebrow: "Support projet EGB25",
        title: "Intégrer les données de retrait à la validation de la pièce réelle",
        body:
          "À partir des dimensions, des tolérances, du moule et de la matière actuelle, nous fournissons les données EGB25, les documents techniques et les échantillons disponibles pour les essais de moulage.",
        steps: ["Géométrie et injection", "Retrait et tolérances", "Documents et échantillon"],
      },
    },
    "glass-fiber-reinforced-pom-compound": {
      categoryLabel: "POM renforcé de fibres de verre",
      metadata: {
        title: "POM renforcé de fibres de verre | Taiyi Polymer",
        description:
          "Le POM PLATFORM® renforcé couvre 10 à 30 % de fibres de verre pour les pièces injectées qui exigent davantage de rigidité, de résistance et de maîtrise dimensionnelle.",
        imageAlt: "POM naturel renforcé de fibres de verre de Taiyi Polymer",
      },
      hero: {
        eyebrow: "Famille POM modifiée",
        title: "POM renforcé de fibres de verre",
        description:
          "Pour les engrenages, supports et pièces structurelles, le POM PLATFORM® renforcé couvre 10 à 30 % de fibres de verre avec différents équilibres de rigidité, de résistance, de fluidité et d’impact.",
        overviewLabel: "Aperçu de la gamme",
        overview:
          "La gamme couvre différents niveaux de renfort et profils de performance. Les données mécaniques, thermiques et de retrait, les détails produit, les documents techniques et les échantillons sont disponibles par grade.",
      },
      navigation: {
        aria: "Navigation des sections du POM renforcé de fibres de verre",
        title: "POM renforcé de fibres de verre",
        subtitle: "10 à 30 % de fibres de verre pour les pièces structurelles et porteuses de précision",
      },
      directory: {
        kicker: "Gamme de grades",
        title: "Grades de POM renforcés de fibres de verre",
        body:
          "La gamme couvre de 10 à 30 % de fibres de verre. Le catalogue réunit différents équilibres de rigidité, de résistance, d’impact, de fluidité et de retrait au moulage.",
        summaries: {
          "egh202h-glass-fiber-pom": "10 % de fibres de verre pour une hausse modérée de la rigidité.",
          "egh302h-glass-fiber-pom": "15 % de fibres de verre pour davantage de résistance et de rigidité.",
          "egh402h-glass-fiber-pom": "20 % de fibres de verre, forte rigidité et retrait réduit.",
          "egh402t-glass-fiber-pom": "20 % de fibres de verre avec fluidité et maîtrise dimensionnelle équilibrées.",
          "egh502h-glass-fiber-pom": "25 % de fibres de verre pour forte rigidité, tenue au fluage et faible retrait.",
          "egh502t-glass-fiber-pom": "25 % de fibres de verre pour rigidité et fluidité de transformation maîtrisée.",
          "egh580h-glass-fiber-pom": "25 % de fibres de verre pour forte résistance en flexion et maîtrise dimensionnelle.",
          "egh580t-glass-fiber-pom": "25 % de fibres de verre avec impact et fluidité équilibrés.",
          "egh602h-glass-fiber-pom": "30 % de fibres de verre pour forte rigidité et stabilité dimensionnelle.",
          "egh602t-glass-fiber-pom": "30 % de fibres de verre pour faible retrait et transformation stable.",
        },
      },
      faq: {
        kicker: "FAQ",
        title: "Informations produit et applications",
        items: [
          {
            question: "À quelles pièces ces matériaux sont-ils destinés ?",
            answer:
              "Ces matériaux s’adressent principalement aux engrenages, supports, boîtiers et autres pièces de précision ou structurelles qui exigent davantage de rigidité, de résistance et de maîtrise dimensionnelle.",
          },
          {
            question: "Quelles sont les différences entre les grades ?",
            answer:
              "La gamme couvre de 10 à 30 % de fibres de verre et offre différents équilibres de rigidité, de résistance, d’impact, de fluidité et de retrait au moulage. Les pages de grade présentent les détails et données publiées.",
          },
          {
            question: "Quelles informations sont disponibles pour les essais ?",
            answer:
              "Les données de grade, les documents techniques et les échantillons disponibles peuvent être complétés par un échange sur le moule, le sens d’écoulement et l’orientation des fibres.",
          },
        ],
      },
      inquiry: {
        eyebrow: "Projet en POM renforcé de fibres de verre",
        title: "Comparer le renfort, la rigidité et le retrait",
        body:
          "À partir des exigences de charge, de rigidité et de dimensions ainsi que du moule, nous comparons les grades concernés et fournissons les données, documents et échantillons disponibles pour les essais de moulage.",
        steps: ["Charge et rigidité", "Moule et flux des fibres", "Documents et échantillon"],
      },
    },
    "high-impact-pom-compound": {
      categoryLabel: "POM haute résistance aux chocs",
      metadata: {
        title: "POM haute résistance aux chocs | Taiyi Polymer",
        description:
          "Le POM PLATFORM® modifié choc est destiné aux pièces injectées sensibles aux chocs, sollicitées à l’assemblage ou utilisées à basse température, avec différents équilibres de rigidité, de ténacité et de transformation.",
        imageAlt: "POM naturel haute résistance aux chocs de Taiyi Polymer",
      },
      hero: {
        eyebrow: "Famille POM modifiée",
        title: "POM haute résistance aux chocs",
        description:
          "Le POM PLATFORM® modifié choc apporte davantage de ténacité aux pièces fonctionnelles sensibles aux chocs, sollicitées à l’assemblage ou utilisées à basse température, avec différents équilibres d’impact, d’allongement, de rigidité et de transformation.",
        overviewLabel: "Aperçu de la gamme",
        overview:
          "La gamme couvre différents équilibres entre rigidité, ténacité, allongement et comportement à basse température. Les données publiées, les documents techniques et les échantillons disponibles sont présentés par grade.",
      },
      navigation: {
        aria: "Navigation des sections du POM haute résistance aux chocs",
        title: "POM haute résistance aux chocs",
        subtitle: "Pour le choc, la basse température, l’allongement et la transformation",
      },
      directory: {
        kicker: "Gamme de grades",
        title: "Grades de POM haute résistance aux chocs",
        body:
          "Le catalogue réunit les détails produit, les données clés et différents profils de résistance aux chocs, d’allongement, de rigidité, de fluidité et de propriétés thermiques.",
        summaries: {
          "edr100-high-impact-pom": "POM modifié choc pour pièces fonctionnelles demandant une meilleure ténacité.",
          "edr180-high-impact-pom": "POM modifié choc orienté basse température et fort allongement à la rupture.",
          "ehi100st-high-impact-pom": "Équilibre entre rigidité et ténacité pour pièces moulées.",
          "ehi202t-high-impact-pom": "POM modifié choc pour composants automobiles, électriques, sanitaires et industriels.",
          "ehi402t-high-impact-pom": "Ténacité améliorée avec un profil de transformation équilibré.",
          "ehi602t-high-impact-pom": "Résistance aux chocs et allongement renforcés pour pièces sollicitées.",
        },
      },
      faq: {
        kicker: "FAQ",
        title: "Informations produit et applications",
        items: [
          {
            question: "À quelles pièces le POM modifié choc est-il destiné ?",
            answer:
              "Ces matériaux s’adressent principalement aux pièces fonctionnelles sensibles aux chocs, sollicitées à l’assemblage ou utilisées à basse température, notamment clips, boîtiers et pièces de mécanisme dans les secteurs automobile, électrique, sanitaire et industriel.",
          },
          {
            question: "Quels profils de performance la gamme offre-t-elle ?",
            answer:
              "La gamme va d’un équilibre rigidité-ténacité à davantage de résistance aux chocs, d’allongement et de performance à basse température, avec différents profils de fluidité et de propriétés thermiques.",
          },
          {
            question: "Quelles informations sont disponibles par grade ?",
            answer:
              "Chaque grade dispose de données produit publiées. Les documents techniques et les échantillons disponibles sont confirmés selon le grade et le projet.",
          },
        ],
      },
      inquiry: {
        eyebrow: "Projet en POM modifié choc",
        title: "Comparer ténacité, rigidité et comportement à basse température",
        body:
          "À partir des exigences de choc, de température, de charge et de géométrie, nous comparons les grades concernés et fournissons les données, documents et échantillons disponibles pour les essais sur pièce.",
        steps: ["Charge et température", "Géométrie et risque de rupture", "Documents et échantillon"],
      },
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
    summary:
      "XT-100 est un grade candidat pour les pièces injectées de précision ou d'usage général lorsque la densité, la résistance au choc et une fluidité équilibrée doivent être examinées ensemble. Les valeurs publiées facilitent la sélection initiale ; confirmez l'aptitude avec la géométrie réelle, le moule, la fenêtre de procédé et les conditions d'utilisation.",
    documentSupport: "Documents matière",
    documentNote: "Disponibilité confirmée selon le grade, le marché visé et le projet.",
    sampleAction: "Demander un échantillon XT-100",
    evaluationAction: "Demander une étude du grade",
    independentNote: "Grade Taiyi indépendant · Essai sur échantillon recommandé",
    snapshot: {
      aria: "Synthèse des données XT-100",
      title: "Profil de présélection XT-100",
      body:
        "Valeurs de référence et méthodes d'essai publiées pour la comparaison initiale des grades.",
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
  gradeProfiles: {
    "etm450-base-pom-resin": {
      metadata: {
        title: "ETM450 POM haute fluidité pour précision | Taiyi Polymer",
        description:
          "Évaluez ETM450, grade POM haute fluidité pour l'injection de précision, puis consultez les données techniques et demandez un échantillon.",
        imageAlt: "Granulés naturels de POM ETM450 de Taiyi Polymer",
      },
      breadcrumb: "ETM450",
      eyebrow: "POM haute fluidité · Injection",
      summary:
        "ETM450 est un grade candidat pour les pièces injectées de précision lorsque le remplissage et le profil mécanique doivent être examinés ensemble. Les valeurs publiées facilitent la sélection initiale ; confirmez l'aptitude avec la géométrie réelle, le moule, la fenêtre de procédé et les conditions d'utilisation.",
      sampleAction: "Demander un échantillon ETM450",
      snapshot: {
        aria: "Synthèse des données ETM450",
        title: "Profil de présélection ETM450",
        body:
          "Valeurs de référence et méthodes d'essai publiées pour la comparaison initiale des grades.",
        flowNote: "Profil haute fluidité pour l'injection de précision",
      },
      sectionNavAria: "Sections de la page produit ETM450",
      features: [
        "Haute fluidité",
        "Orientation injection de précision",
        "Prévu pour le moulage par injection",
        "Couleur naturelle",
      ],
      applications: [
        "Pièces injectées de précision",
        "Composants automobiles",
        "Pièces électriques et électroniques",
        "Raccords sanitaires",
      ],
      evaluationBody:
        "ETM450 est proposé comme grade candidat à évaluer. La validation finale doit suivre un essai dans le moule du client et dans les conditions réelles d'utilisation.",
      notesBody:
        "Cette page facilite la présélection d'ETM450. La conception, le moule, le procédé, les objectifs de performance et les exigences propres au client peuvent modifier le résultat. Demandez les documents à jour et confirmez le grade par échantillonnage et essais d'application.",
      inquiry: {
        eyebrow: "Étude projet ETM450",
        title: "Évaluer ETM450 pour votre pièce moulée ?",
        body:
          "Envoyez l'application, le procédé, la matière actuelle, les propriétés visées, la couleur, le volume estimé et les documents requis. Nous préparerons l'étude du grade et de l'échantillon.",
        action: "Demander l'évaluation ETM450",
      },
    },
    "etm750-base-pom-resin": {
      metadata: {
        title: "ETM750 POM très fluide pour parois minces | Taiyi Polymer",
        description:
          "Évaluez ETM750, un grade POM à très haute fluidité pour pièces injectées à paroi mince ou difficiles à remplir, puis demandez les données ou un échantillon.",
        imageAlt: "Granulés naturels de POM ETM750 de Taiyi Polymer",
      },
      breadcrumb: "ETM750",
      eyebrow: "POM à très haute fluidité · Injection",
      summary:
        "ETM750 est un grade candidat pour les pièces à paroi mince ou difficiles à remplir lorsque le parcours d'écoulement et les performances mécaniques doivent être examinés ensemble. Les valeurs publiées facilitent la sélection initiale ; confirmez l'aptitude avec la géométrie réelle, le moule, la fenêtre de procédé et les conditions d'utilisation.",
      sampleAction: "Demander un échantillon ETM750",
      snapshot: {
        aria: "Synthèse des données ETM750",
        title: "Profil de présélection ETM750",
        body:
          "Valeurs de référence et méthodes d'essai publiées pour la comparaison initiale des grades.",
        flowNote: "Profil à très haute fluidité pour pièces à paroi mince",
      },
      sectionNavAria: "Sections de la page produit ETM750",
      features: [
        "Très haute fluidité",
        "Orientation pièces à paroi mince",
        "Prévu pour le moulage par injection",
        "Couleur naturelle",
      ],
      applications: [
        "Pièces injectées à paroi mince",
        "Composants automobiles",
        "Pièces électriques et électroniques",
        "Pièces injectées industrielles",
      ],
      evaluationBody:
        "ETM750 est proposé comme grade candidat à évaluer. La validation finale doit suivre des essais de remplissage et de pièce dans le moule du client et dans les conditions réelles d'utilisation.",
      notesBody:
        "Cette page facilite la présélection d'ETM750. Le parcours d'écoulement, l'épaisseur, le point d'injection, le moule, le procédé et les objectifs de performance peuvent modifier le résultat. Demandez les documents à jour et confirmez le grade par échantillonnage et essais d'application.",
      inquiry: {
        eyebrow: "Étude projet ETM750",
        title: "Évaluer ETM750 pour votre pièce à paroi mince ?",
        body:
          "Envoyez l'épaisseur, le parcours d'écoulement, le point d'injection, l'état du moule, la matière actuelle, les objectifs, la couleur, le volume et les documents requis. Nous préparerons l'étude du grade et de l'échantillon.",
        action: "Demander l'évaluation ETM750",
      },
    },
    "egb25-glass-bead-pom": {
      categoryLabel: "POM chargé de billes de verre",
      metadata: {
        title: "EGB25 POM à 25 % de billes de verre | Taiyi Polymer",
        description:
          "Évaluez EGB25, un POM chargé de 25 % de billes de verre, selon le retrait, les données thermiques et mécaniques, puis demandez des documents ou un échantillon.",
        imageAlt: "Granulés POM EGB25 naturels de Taiyi Polymer",
      },
      breadcrumb: "EGB25",
      eyebrow: "POM à 25 % de billes de verre · Injection",
      summary:
        "EGB25 est un grade candidat pour les pièces injectées nécessitant une étude conjointe du retrait longitudinal et transversal ainsi que du profil thermique. Les valeurs publiées facilitent la présélection ; confirmez l'adéquation avec la géométrie réelle, le moule, la fenêtre de procédé et les conditions d'utilisation.",
      sampleAction: "Demander un échantillon EGB25",
      snapshot: {
        aria: "Synthèse des propriétés EGB25",
        title: "Profil de sélection EGB25",
        body:
          "Valeurs de référence et méthodes d'essai publiées pour la comparaison initiale des grades.",
        flowNote: "MFI 8,5 g/10 min à 195 °C/2,16 kg",
      },
      sectionNavAria: "Sections de la page produit EGB25",
      features: [
        "25 % de billes de verre",
        "Orientation équilibrée du retrait longitudinal et transversal",
        "Température de fléchissement sous charge de 110 °C à 1,8 MPa",
        "Couleur naturelle",
      ],
      applications: [
        "Composants automobiles",
        "Pièces électriques et électroniques",
        "Composants sanitaires",
        "Pièces injectées industrielles",
      ],
      evaluationBody:
        "EGB25 est proposé comme grade candidat à évaluer. La validation finale doit suivre l'étude du retrait, des dimensions et des performances dans le moule du client et dans les conditions réelles d'utilisation.",
      notesBody:
        "Cette page facilite la présélection d'EGB25. La géométrie, l'épaisseur, le point d'injection, le moule, le procédé et les conditions d'essai peuvent modifier le résultat. Demandez les documents à jour et confirmez le grade par échantillonnage et essais d'application.",
      inquiry: {
        eyebrow: "Étude projet EGB25",
        title: "Évaluer EGB25 pour votre pièce injectée ?",
        body:
          "Envoyez la géométrie, l'objectif de retrait, l'état du moule, la matière actuelle, les performances visées, la couleur, le volume et les documents requis. Nous préparerons l'étude du grade et de l'échantillon.",
        action: "Demander l'évaluation EGB25",
      },
    },
    "egh502h-glass-fiber-pom": {
      categoryLabel: "POM renforcé de fibres de verre",
      metadata: {
        title: "EGH502H POM à 25 % de fibre de verre | Taiyi Polymer",
        description:
          "Évaluez EGH502H, un POM renforcé de 25 % de fibre de verre, selon la rigidité, le retrait et les données thermiques et mécaniques, puis demandez un échantillon.",
        imageAlt: "Granulés POM EGH502H naturels de Taiyi Polymer",
      },
      breadcrumb: "EGH502H",
      eyebrow: "POM à 25 % de fibre de verre · Haute rigidité",
      summary:
        "EGH502H est un grade candidat pour les pièces moulées nécessitant une étude conjointe de la rigidité élevée, du faible retrait et du profil thermique. Les valeurs publiées facilitent la présélection ; confirmez l'adéquation avec la géométrie réelle, l'orientation des fibres, le moule, la fenêtre de procédé et les conditions d'utilisation.",
      sampleAction: "Demander un échantillon EGH502H",
      snapshot: {
        aria: "Synthèse des propriétés EGH502H",
        title: "Profil de sélection EGH502H",
        body:
          "Valeurs de référence et méthodes d'essai publiées pour la comparaison initiale des grades.",
        flowNote: "MFI 8,5 g/10 min à 195 °C/2,16 kg",
      },
      sectionNavAria: "Sections de la page produit EGH502H",
      features: [
        "25 % de fibre de verre",
        "Rigidité élevée",
        "Orientation résistance au fluage",
        "Faible retrait au moulage",
      ],
      applications: [
        "Composants automobiles",
        "Pièces électriques",
        "Pièces électroniques",
        "Pièces injectées industrielles",
      ],
      evaluationBody:
        "EGH502H est proposé comme grade candidat à évaluer. La validation finale doit suivre l'étude de l'orientation des fibres, des dimensions et des performances dans le moule du client et dans les conditions réelles d'utilisation.",
      notesBody:
        "Cette page facilite la présélection d'EGH502H. Le sens d'écoulement, le point d'injection, les lignes de soudure, l'épaisseur, le moule et les conditions d'essai peuvent modifier la rigidité, le retrait et le comportement de la pièce. Demandez les documents à jour et confirmez le grade par échantillonnage et essais d'application.",
      inquiry: {
        eyebrow: "Étude projet EGH502H",
        title: "Évaluer EGH502H pour votre pièce rigide ?",
        body:
          "Envoyez la géométrie, les objectifs de charge et de rigidité, le point d'injection, l'état du moule, la matière actuelle, la couleur, le volume et les documents requis. Nous préparerons l'étude du grade et de l'échantillon.",
        action: "Demander l’évaluation EGH502H",
      },
    },
    "ehi402t-high-impact-pom": {
      categoryLabel: "POM haute résistance aux chocs",
      metadata: {
        title: "EHI402T POM haute résistance aux chocs | Taiyi Polymer",
        description:
          "Évaluez EHI402T selon la résistance aux chocs, le comportement à basse température, l’allongement, la fluidité et les données mécaniques et thermiques.",
        imageAlt: "Granulés naturels de POM EHI402T de Taiyi Polymer",
      },
      breadcrumb: "EHI402T",
      eyebrow: "POM modifié choc · Transformation équilibrée",
      summary:
        "EHI402T est un grade candidat pour les pièces fonctionnelles où la ténacité améliorée, le comportement à basse température et un profil de transformation équilibré doivent être évalués ensemble. Les valeurs publiées facilitent la présélection ; confirmez l'adéquation avec la géométrie réelle, les entailles, le cas de charge, le moule, la fenêtre de procédé et la température d'utilisation.",
      sampleAction: "Demander un échantillon EHI402T",
      snapshot: {
        aria: "Synthèse des données EHI402T",
        title: "Profil de sélection EHI402T",
        body:
          "Valeurs de référence et méthodes d'essai publiées pour la comparaison initiale des grades.",
        flowNote: "Profil résistant aux chocs avec transformation équilibrée",
      },
      sectionNavAria: "Sections de la page produit EHI402T",
      features: [
        "Orientation haute résistance aux chocs",
        "Orientation basse température",
        "Profil de transformation équilibré",
        "Couleur naturelle",
      ],
      applications: [
        "Composants automobiles",
        "Pièces électriques et électroniques",
        "Composants sanitaires",
        "Pièces industrielles injectées",
      ],
      evaluationBody:
        "EHI402T est proposé comme candidat à l’évaluation technique. L’approbation finale suit les essais de pièce, de choc et de basse température dans le moule du client et les conditions réelles d’utilisation.",
      notesBody:
        "Cette page soutient la présélection d’EHI402T. Les entailles, l’épaisseur, le sens d’écoulement, les lignes de soudure, la durée de charge, la température, le moule et les conditions d’essai peuvent modifier le comportement réel au choc. Demandez les documents à jour et confirmez le grade par échantillonnage et essais d’application.",
      inquiry: {
        eyebrow: "Évaluation du projet EHI402T",
        title: "Évaluer EHI402T pour votre pièce sollicitée aux chocs ?",
        body:
          "Transmettez le cas de charge, la température d’utilisation, la géométrie, l’épaisseur, le matériau actuel, le mode de rupture, les valeurs cibles, la couleur, le volume et les documents requis. Nous préparerons l’évaluation du grade et de l’échantillon.",
        action: "Demander l’évaluation EHI402T",
      },
    },
    "edr180-high-impact-pom": {
      categoryLabel: "POM haute résistance aux chocs",
      metadata: {
        title: "EDR180 POM choc à fort allongement | Taiyi Polymer",
        description:
          "Évaluez EDR180 selon la résistance aux chocs, le comportement à basse température, le fort allongement à la rupture, la fluidité et les données techniques.",
        imageAlt: "Granulés naturels de POM EDR180 de Taiyi Polymer",
      },
      breadcrumb: "EDR180",
      eyebrow: "POM modifié choc · Fort allongement à la rupture",
      summary:
        "EDR180 est un grade candidat pour les pièces fonctionnelles où la résistance aux chocs, le comportement à basse température et une réserve d'allongement élevée doivent être évalués ensemble. Les valeurs publiées facilitent la présélection ; confirmez l'adéquation avec la géométrie réelle, les entailles, le cas de charge, le moule, la fenêtre de procédé et la température d'utilisation.",
      sampleAction: "Demander un échantillon EDR180",
      snapshot: {
        aria: "Synthèse des données EDR180",
        title: "Profil de sélection EDR180",
        body:
          "Valeurs de référence et méthodes d'essai publiées pour la comparaison initiale des grades.",
        flowNote: "Profil résistant aux chocs avec fort allongement",
      },
      sectionNavAria: "Sections de la page produit EDR180",
      features: [
        "Orientation haute résistance aux chocs",
        "Orientation basse température",
        "Fort allongement à la rupture",
        "Couleur naturelle",
      ],
      applications: [
        "Composants automobiles",
        "Pièces électriques et électroniques",
        "Composants sanitaires",
        "Pièces industrielles injectées",
      ],
      evaluationBody:
        "EDR180 est proposé comme candidat à l’évaluation technique. L’approbation finale suit les essais de pièce, de choc, d’allongement et de basse température dans le moule du client et les conditions réelles d’utilisation.",
      notesBody:
        "Cette page soutient la présélection d’EDR180. Les entailles, l’épaisseur, le sens d’écoulement, les lignes de soudure, la durée de charge, la température, le moule et les conditions d’essai peuvent modifier l’allongement et le comportement au choc. Demandez les documents à jour et confirmez le grade par échantillonnage et essais d’application.",
      inquiry: {
        eyebrow: "Évaluation du projet EDR180",
        title: "Évaluer EDR180 pour votre pièce sollicitée aux chocs ?",
        body:
          "Transmettez le cas de charge, la température d’utilisation, la géométrie, l’épaisseur, le matériau actuel, le mode de rupture, l’allongement visé, la couleur, le volume et les documents requis. Nous préparerons l’évaluation du grade et de l’échantillon.",
        action: "Demander l’évaluation EDR180",
      },
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
      "ETM450, ETM750, XT-100, EGB25, EGH502H, EHI402T et EDR180 forment le groupe de données entièrement localisé. D'autres grades seront ajoutés après le même contrôle technique et linguistique.",
    gradeLabel: "Grade",
    materialLabel: "Matière",
    statusLabel: "État des données",
    statusValue: "Données web disponibles · PDF à confirmer sur demande",
    viewAction: "Ouvrir les données du grade",
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
