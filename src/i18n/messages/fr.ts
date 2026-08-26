import type { SiteMessages } from "@/i18n/types";
import coreMessages from "./fr-core.ts";

const messages = {
  ...coreMessages,
  Taxonomy: {
    products: {
      pom: "Compounds POM",
      pa6: "Compounds PA6",
      pa66: "Compounds PA66",
      ppa: "Compounds PPA",
      pomResin: "Résine POM",
      conductiveAntistatic: "Compounds conducteurs et antistatiques",
    },
    productEyebrows: {
      coreLine: "Gamme principale",
      additionalFamily: "Famille complémentaire",
      higherTemperature: "Haute température",
      supplement: "Complément",
      crossMaterial: "Multi-matrices",
    },
    applications: {
      automotive: "Automobile",
      electronics: "Électronique",
      "conveyor-automation": "Convoyage et automatisation",
      "motion-components": "Composants en mouvement",
      "water-control": "Gestion de l'eau",
      "washing-machine-components": "Machine à laver",
      "outdoor-equipment": "Équipements extérieurs",
      "textile-machinery": "Machines textiles",
    },
    componentSolutions: "Solutions par composant",
    resources: {
      "material-selection": {
        title: "Sélection des matériaux",
        navigationLabel: "Choisir un matériau",
      },
      "processing-troubleshooting": {
        title: "Mise en œuvre et dépannage",
        navigationLabel: "Transformer et dépanner",
      },
      "data-validation": {
        title: "Données et validation",
        navigationLabel: "Trouver et valider les données",
      },
    },
  },
  Header: {
    brandHomeLabel: "Accueil Taiyi Polymer",
    navigationAria: "Navigation principale",
    products: "Produits",
    productCategories: "Catégories de produits",
    productDescription:
      "Commencez par une famille de matériaux ou comparez les grades conducteurs et antistatiques entre plusieurs matrices.",
    allProducts: "Tous les produits",
    applications: "Applications",
    applicationAreas: "Domaines d'application",
    applicationDescription:
      "Parcourez les applications courantes de pièces moulées selon les conditions d'usage et les exigences matériau.",
    allApplications: "Toutes les applications",
    resources: "Ressources",
    technicalResources: "Ressources techniques",
    allResources: "Toutes les ressources",
    aboutUs: "À propos",
    contact: "Contact",
    searchLabel: "Rechercher des fiches techniques et des ressources",
    languageSwitcherLabel: "Langue",
    englishDestinationLabel: "Contenu en anglais",
    menu: "Menu",
    close: "Fermer",
    findGradeData: "Trouver les données grades et TDS",
    discussApplication: "Parler de votre application",
  },
  Footer: {
    brandRelation: "Taiyi Polymer · Matériaux techniques PLATFORM®",
    logoAlt: "Marque déposée PLATFORM",
    pitchTitle: "Le choix matière guidé par la pièce.",
    pitchCopy:
      "Présentez-nous votre pièce, ses conditions d'utilisation et ses objectifs de performance. Nous vous aiderons à présélectionner les grades pertinents et à confirmer les échantillons et documents techniques disponibles pour l'évaluation.",
    discussApplication: "Parler de votre application",
    products: "Produits",
    applications: "Applications",
    allApplications: "Toutes les applications",
    resources: "Ressources",
    company: "Entreprise",
    aboutUs: "À propos",
    contactSales: "Contacter le service commercial",
    qualityCompliance: "Qualité et conformité",
    manufacturing: "Production",
    email: "E-mail",
    call: "Téléphone",
    emailAria: "Envoyer un e-mail à Taiyi Polymer",
    callAria: "Appeler Taiyi Polymer",
    whatsappAria: "Contacter Taiyi Polymer sur WhatsApp",
    contactActionsAria: "Actions de contact du pied de page",
    navigationAria: "Navigation du pied de page",
    location: "Yancheng, Jiangsu, Chine",
    rightsReserved: "Tous droits réservés.",
    privacyPolicy: "Politique de confidentialité",
  },
  FloatingContact: {
    mailSubject: "Demande relative aux exigences matière",
    email: "E-mail",
    whatsapp: "WhatsApp",
    call: "Téléphone",
    closeOptions: "Fermer les options de contact",
    openOptions: "Ouvrir les options de contact",
    salesContact: "Contact commercial",
    title: "Parler de votre application",
    description:
      "Transmettez à notre équipe matériaux votre pièce, vos objectifs de performance et les documents nécessaires.",
    directOptionsAria: "Options de contact direct",
    triggerLabel: "Contact",
  },
  Analytics: {
    title: "Vos choix de confidentialité",
    descriptionBeforeLink:
      "Nous utilisons des cookies d’analyse facultatifs pour comprendre comment les visiteurs utilisent ce site et améliorer nos informations sur les matériaux. Les statistiques restent désactivées sans votre accord. Vous pouvez modifier votre choix à tout moment dans les paramètres des cookies. Consultez notre",
    privacyPolicy: "Politique de confidentialité",
    currentChoice: "Choix actuel :",
    accepted: "accepté",
    notAccepted: "refusé",
    accept: "Accepter les cookies d’analyse",
    continueWithout: "Continuer sans cookies d’analyse",
    settings: "Paramètres des cookies",
  },
  Products: {
    metadata: {
      title: "Compounds de plastiques techniques | Taiyi Polymer",
      description:
        "Découvrez les compounds POM modifiés, la résine POM de base, des familles PA6, PA66 et PPA sélectionnées, ainsi que les compounds conducteurs et antistatiques de Taiyi Polymer.",
      imageAlt:
        "Répertoire des matériaux POM et plastiques techniques de Taiyi Polymer",
    },
    breadcrumbHome: "Accueil",
    breadcrumbProducts: "Produits",
    hero: {
      eyebrow: "Répertoire produits",
      title: "Compounds de plastiques techniques",
      subtitle: "Le POM modifié au cœur de la gamme",
      body:
        "Parcourez le POM modifié comme gamme principale, avec la résine POM de base et des options PA6, PA66, PPA, conductrices et antistatiques sélectionnées lorsque l’application exige un autre équilibre de propriétés.",
      startAction: "Choisir selon les exigences de la pièce",
      dataSheetsAction: "Trouver les données grade et TDS",
    },
    selection: {
      kicker: "Les exigences d'abord",
      title: "Que doit accomplir la pièce ?",
      body:
        "Choisissez le parcours de présélection le plus proche. Chaque parcours précise les compromis à examiner avant de comparer un grade exact.",
      note:
        "Besoin d'une tenue thermique supérieure ou d'une autre famille de polymères ? Consultez toute la gamme ci-dessous.",
      navigationAria: "Parcours matière selon les exigences de la pièce",
      paths: [
        {
          label: "Usure / Frottement",
          title: "Pièces mobiles ou coulissantes",
          description:
            "Comparez la charge, la vitesse, le matériau antagoniste, la lubrification, le bruit et la durée de vie en usure requise.",
        },
        {
          label: "Rigidité / Dimension",
          title: "Précision sous charge",
          description:
            "Comparez la rigidité, le fluage, le retrait, le gauchissement et l'orientation d'écoulement dans la pièce moulée.",
        },
        {
          label: "Impact / Assemblage",
          title: "Clipsage ou charges de choc",
          description:
            "Vérifiez le choc, la température, les lignes de soudure et les contraintes d'assemblage avant de choisir le niveau de ténacité.",
        },
        {
          label: "Contrôle électrostatique",
          title: "Fonction conductrice ou antistatique",
          description:
            "Définissez la résistance cible, la mise à la terre, la géométrie, la couleur et la méthode d'essai avant de choisir une matrice.",
        },
      ],
    },
    families: {
      kicker: "Gamme complète de matériaux",
      title: "Parcourir toutes les familles de produits",
      body:
        "Le POM modifié constitue la gamme principale. La résine de base, des PA6, PA66 et PPA sélectionnés ainsi que des solutions multi-matrices de contrôle électrostatique restent disponibles lorsque l'application l'exige.",
      items: [
        {
          title: "Compounds POM modifiés",
          label: "Gamme principale",
          description:
            "Solutions POM résistantes à l'usure, à faible frottement, renforcées, conductrices, antistatiques ou à haute résistance aux chocs pour pièces moulées de précision.",
          metricLabel: "grades modifiés",
        },
        {
          title: "Résine POM de base",
          label: "Approvisionnement sélectionné",
          description:
            "Résines de base sélectionnées pour la comparaison POM, les documents techniques et l'échantillonnage de projet.",
          metricLabel: "grades de base",
        },
        {
          title: "Compounds PA6",
          label: "Famille complémentaire",
          description:
            "Compounds PA6 sélectionnés pour pièces renforcées, modifiées choc, ignifugées, soumises à l'usure ou chargées minérales.",
          metricLabel: "grades répertoriés",
        },
        {
          title: "Compounds PA66",
          label: "Famille complémentaire",
          description:
            "Compounds PA66 sélectionnés pour pièces renforcées, ignifugées, soumises à l'usure et dimensionnellement stables.",
          metricLabel: "grades répertoriés",
        },
        {
          title: "Compounds PPA",
          label: "Haute température",
          description:
            "Compounds PPA pour pièces moulées à température plus élevée nécessitant rigidité et stabilité dimensionnelle.",
          metricLabel: "grades répertoriés",
        },
        {
          title: "Compounds conducteurs et antistatiques",
          label: "Multi-matrices",
          description:
            "Comparez les solutions antistatiques CNT et conductrices renforcées de fibres de carbone dans des matrices POM, ABS, PC, PA6, PA66, PPS, TPU et autres.",
          metricLabel: "grades répertoriés",
        },
      ],
    },
    inquiry: {
      title: "Préparer une présélection de matériaux",
      eyebrow: "Préparation de la demande",
      action: "Parler de votre application",
      body:
        "Indiquez l'application, l'état d'avancement du moule, le nombre d'empreintes, les risques de retrait ou de gauchissement, les performances clés, la matière de référence actuelle, la couleur, les documents requis et le volume estimé. Ces éléments permettent d'identifier la famille pertinente et de cadrer les données grade, documents et échantillons à fournir.",
      contactSource: "Répertoire produits",
    },
  },
} satisfies SiteMessages;

export default messages;
