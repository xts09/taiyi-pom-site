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
        "Comparez les résines POM de base Taiyi Polymer selon la fluidité, la résistance en traction, la tenue thermique et les contraintes du projet.",
      imageAlt: "Résine POM de base naturelle de Taiyi Polymer",
    },
    hero: {
      eyebrow: "Famille POM modifiée",
      title: "Résine POM de base",
      description:
        "Comparez des grades de base pour pièces injectées de précision ou d'usage général selon la fluidité, le profil mécanique, la tenue thermique et la géométrie de la pièce.",
      overviewLabel: "Parcours de sélection",
      overview:
        "Présélectionnez parmi les grades répertoriés, puis ouvrez la page du grade pour consulter les valeurs publiées, les notes d’application et le statut des documents.",
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
  categoryProfiles: {
    "glass-bead-filled-pom-compound": {
      categoryLabel: "POM chargé de billes de verre",
      metadata: {
        title: "POM à billes de verre : grades | Taiyi Polymer",
        description:
          "Évaluez le POM chargé de billes de verre selon le retrait, le profil thermique, les exigences de la pièce et les documents disponibles.",
        imageAlt: "POM naturel chargé de billes de verre de Taiyi Polymer",
      },
      hero: {
        eyebrow: "Famille POM modifiée",
        title: "POM chargé de billes de verre",
        description:
          "Évaluez EGB25, chargé de 25 % de billes de verre, selon la fluidité, les retraits longitudinal et transversal, le profil thermique et les exigences de la pièce moulée.",
        overviewLabel: "Parcours de sélection",
        overview:
          "Présélectionnez parmi les grades répertoriés, puis ouvrez la page du grade pour consulter les valeurs publiées, les notes d’application et le statut des documents.",
      },
      navigation: {
        aria: "Navigation des sections du POM chargé de billes de verre",
        title: "POM chargé de billes de verre",
        subtitle: "Comparer retrait, profil thermique et exigences de la pièce",
      },
      directory: {
        kicker: "Sélection du grade",
        title: "Évaluer le grade POM chargé de billes de verre",
        body:
          "EGB25 est entièrement révisé dans cette langue. Les données servent à la présélection ; l’approbation finale doit être obtenue dans le moule et l’application du client.",
        summaries: {
          "egb25-glass-bead-pom":
            "POM chargé de 25 % de billes de verre pour évaluer l’équilibre des retraits longitudinal et transversal.",
        },
      },
      faq: {
        kicker: "FAQ",
        title: "Questions sur la charge de billes de verre",
        items: [
          {
            question: "Pourquoi comparer les retraits longitudinal et transversal ?",
            answer:
              "Les billes de verre peuvent favoriser un profil de retrait plus équilibré, mais la géométrie, le point d’injection, l’épaisseur et le procédé continuent d’influencer la pièce réelle.",
          },
          {
            question: "EGB25 peut-il être approuvé sans essai dans le moule ?",
            answer:
              "Non. Les valeurs de fiche technique servent à la présélection. Les dimensions, le gauchissement, l’état de surface et les performances doivent être confirmés dans le moule et le procédé prévus.",
          },
          {
            question: "Quels documents peuvent être demandés ?",
            answer:
              "La disponibilité des TDS, SDS, COA, REACH et RoHS est confirmée selon le grade, le marché cible et le projet.",
          },
        ],
      },
      inquiry: {
        eyebrow: "Évaluation du projet EGB25",
        title: "Évaluer EGB25 pour vos objectifs dimensionnels",
        body:
          "Transmettez la géométrie, l’épaisseur, le point d’injection, l’état du moule, les retraits actuels, les tolérances, la couleur et les documents requis. Nous préparerons l’évaluation du grade et de l’échantillon.",
        steps: ["Géométrie et injection", "Retrait et tolérances", "Documents et échantillon"],
      },
    },
    "glass-fiber-reinforced-pom-compound": {
      categoryLabel: "POM renforcé de fibres de verre",
      metadata: {
        title: "POM renforcé de fibres de verre | Taiyi Polymer",
        description:
          "Comparez les POM renforcés de 10 à 30 % de fibres de verre selon la rigidité, le retrait, le profil thermique et le projet.",
        imageAlt: "POM naturel renforcé de fibres de verre de Taiyi Polymer",
      },
      hero: {
        eyebrow: "Famille POM modifiée",
        title: "POM renforcé de fibres de verre",
        description:
          "Comparez les grades POM renforcés de 10 à 30 % de fibres de verre selon la fluidité, la rigidité, le retrait, le profil thermique et les exigences de la pièce.",
        overviewLabel: "Parcours de sélection",
        overview:
          "Présélectionnez parmi les grades répertoriés, puis ouvrez la page du grade pour consulter les valeurs publiées, les notes d’application et le statut des documents.",
      },
      navigation: {
        aria: "Navigation des sections du POM renforcé de fibres de verre",
        title: "POM renforcé de fibres de verre",
        subtitle: "Comparer teneur en fibres, rigidité, retrait et mise en œuvre",
      },
      directory: {
        kicker: "Sélection du grade",
        title: "Comparer les grades POM renforcés de fibres de verre",
        body:
          "EGH502H dispose d’une page entièrement révisée dans cette langue. Pour les autres grades, l’étape suivante mène à une évaluation de projet jusqu’à ce que leur page technique atteigne le même niveau de validation.",
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
        title: "Questions sur le renforcement en fibres de verre",
        items: [
          {
            question: "Comment choisir la teneur en fibres de verre ?",
            answer:
              "La rigidité, la charge, l’épaisseur, le retrait, le gauchissement, la longueur d’écoulement et l’aspect doivent être évalués ensemble. Une teneur supérieure n’est pas automatiquement préférable pour chaque pièce.",
          },
          {
            question: "Pourquoi l’orientation des fibres est-elle importante ?",
            answer:
              "Les fibres s’orientent avec l’écoulement de la matière. Le point d’injection, le sens d’écoulement et la géométrie peuvent donc modifier sensiblement les propriétés, le retrait et le gauchissement de la pièce.",
          },
          {
            question: "Tous les grades listés sont-ils déjà entièrement localisés ?",
            answer:
              "Non. EGH502H dispose actuellement de la page linguistique entièrement révisée. Les autres grades passent d’abord par une évaluation de données et d’échantillon liée au projet.",
          },
        ],
      },
      inquiry: {
        eyebrow: "Évaluation du projet",
        title: "Présélectionner un POM renforcé de fibres de verre",
        body:
          "Transmettez la charge et la rigidité visées, la géométrie, l’épaisseur, le point d’injection, l’état du moule, le retrait ou gauchissement actuel, la couleur et les documents requis. Nous préparerons une liste de grades et le parcours d’échantillonnage.",
        steps: ["Charge et rigidité", "Moule et flux des fibres", "Documents et échantillon"],
      },
    },
    "high-impact-pom-compound": {
      categoryLabel: "POM haute résistance aux chocs",
      metadata: {
        title: "POM haute résistance aux chocs | Taiyi Polymer",
        description:
          "Comparez les grades POM modifiés choc selon la résistance aux chocs, le comportement à basse température, l’allongement, la fluidité et le risque projet.",
        imageAlt: "POM naturel haute résistance aux chocs de Taiyi Polymer",
      },
      hero: {
        eyebrow: "Famille POM modifiée",
        title: "POM haute résistance aux chocs",
        description:
          "Comparez six grades POM destinés à une meilleure résistance aux chocs et aux besoins à basse température selon la fluidité, l’allongement, la résistance et le profil thermique.",
        overviewLabel: "Parcours de sélection",
        overview:
          "Présélectionnez parmi les grades répertoriés, puis ouvrez la page du grade pour consulter les valeurs publiées, les notes d’application et le statut des documents.",
      },
      navigation: {
        aria: "Navigation des sections du POM haute résistance aux chocs",
        title: "POM haute résistance aux chocs",
        subtitle: "Comparer choc, allongement, fluidité et exigences à basse température",
      },
      directory: {
        kicker: "Sélection du grade",
        title: "Comparer les grades POM haute résistance aux chocs",
        body:
          "EHI402T et EDR180 disposent de pages entièrement révisées dans cette langue. Pour les autres grades, l’étape suivante mène à l’évaluation des données et de l’échantillon liée au projet.",
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
        title: "Questions sur la modification choc",
        items: [
          {
            question: "Comment présélectionner un grade POM résistant aux chocs ?",
            answer:
              "Le cas de charge, les entailles, l’épaisseur, la température d’utilisation, l’allongement visé, la rigidité et la longueur d’écoulement doivent être évalués ensemble. Une seule valeur d’impact ne suffit pas à l’approbation.",
          },
          {
            question: "Un grade résistant aux chocs convient-il automatiquement au froid ?",
            answer:
              "Non. Ces grades visent le choc et le comportement à basse température, mais la température réelle, la durée de charge, la géométrie et les conditions d’essai doivent être confirmées pour le projet.",
          },
          {
            question: "Les six grades sont-ils déjà entièrement localisés ?",
            answer:
              "Non. EHI402T et EDR180 disposent actuellement de pages linguistiques entièrement révisées. Les autres grades passent d’abord par une évaluation liée au projet.",
          },
        ],
      },
      inquiry: {
        eyebrow: "Évaluation du projet",
        title: "Présélectionner un POM haute résistance aux chocs",
        body:
          "Transmettez le cas de charge, la température d’utilisation, la géométrie, l’épaisseur, le matériau actuel, le mode de rupture, les valeurs cibles, la couleur et les documents requis. Nous préparerons une liste de grades et le parcours d’échantillonnage.",
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
