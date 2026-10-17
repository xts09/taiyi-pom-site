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
      "Familles de matériaux et grades conducteurs ou antistatiques pour différentes matrices polymères.",
    allProducts: "Tous les produits",
    applications: "Applications",
    applicationAreas: "Domaines d'application",
    applicationDescription:
      "Parcourez les applications courantes de pièces moulées selon les conditions d'usage et les exigences matériau.",
    allApplications: "Toutes les applications",
    resources: "Ressources",
    technicalResources: "Ressources techniques",
    resourceDescription:
      "Trouvez des guides pratiques pour la sélection des matériaux, le dépannage de la mise en œuvre et la validation des données.",
    allResources: "Toutes les ressources",
    news: "Actualités",
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
    products: "Produits",
    applications: "Applications",
    allApplications: "Toutes les applications",
    resources: "Ressources",
    technicalData: "Données des grades et TDS",
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
    triggerLabel: "Discuter de votre application",
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
    dismiss: "Décider plus tard",
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
      title: "Matériaux et grades",
      body:
        "Les POM modifiés PLATFORM® associent résistance à l’usure, faible frottement et stabilité dimensionnelle pour les engrenages, paliers et pièces à ajustement précis. Taiyi Polymer propose des grades lubrifiés, renforcés ou modifiés choc, ainsi que des PA6, PA66, PPA et matériaux conducteurs et antistatiques pour l’automobile, l’électricité, l’électronique et les machines industrielles.",
      startAction: "Choisir selon les exigences de la pièce",
      dataSheetsAction: "Trouver les données grade et TDS",
    },
    selection: {
      kicker: "Les exigences d'abord",
      title: "Que doit accomplir la pièce ?",
      body:
        "Identifiez la défaillance dominante, puis choisissez les premières formulations et critères par ces parcours.",
      navigationAria: "Parcours matière selon les exigences de la pièce",
      paths: [
        {
          label: "Usure / Frottement",
          title: "Pièces mobiles ou coulissantes",
          description:
            "Pour stick-slip et effort, comparez PTFE ou silicone ; pour le jeu croissant, usure et tenue mécanique.",
        },
        {
          label: "Rigidité / Dimension",
          title: "Précision sous charge",
          description:
            "Pour la flèche des supports, comparez module en flexion et fluage ; pour les ajustements, retrait orienté et gauchissement.",
        },
        {
          label: "Impact / Assemblage",
          title: "Clipsage ou charges de choc",
          description:
            "Pour fissures de clips, vérifiez ténacité entaillée et déformation ; pour serrage durable, retenue après fluage.",
        },
        {
          label: "Contrôle électrostatique",
          title: "Fonction conductrice ou antistatique",
          description:
            "Fixez méthode de résistance et terre, puis matrice et système CNT/carbone selon température, rigidité et dimensions.",
        },
      ],
    },
    families: {
      kicker: "Gamme complète de matériaux",
      title: "Parcourir toutes les familles de produits",
      body:
        "Grades répertoriés et applications dans six familles de produits.",
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
          label: "Résine de base",
          description:
            "Établissez les références de moulage, dimensions et mécanique ; choisissez la fluidité pour pièces courantes, complexes ou minces.",
          metricLabel: "grades de base",
        },
        {
          title: "Compounds PA6",
          label: "Polyamides",
          description:
            "PA6 renforcé verre, modifié choc, ignifugé, anti-usure ou chargé minéral ; sélection selon rigidité, ténacité au montage et fluidité.",
          metricLabel: "grades répertoriés",
        },
        {
          title: "Compounds PA66",
          label: "Polyamides",
          description:
            "PA66 renforcé verre, ignifugé ou anti-usure ; privilégiez la rigidité sous charge chaude et séparez dimensions sèches et conditionnées.",
          metricLabel: "grades répertoriés",
        },
        {
          title: "Compounds PPA",
          label: "Haute température",
          description:
            "Si rigidité à chaud ou dimensions en humidité limitent le PA66, comparez les grades PPA et vérifiez séchage, température du moule et équipement.",
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
        "Transmettez fonction, matériau actuel et exigences non atteintes, avec plans ou conditions disponibles. Recevez comparaison de grades, TDS, appui en échantillons et contrôles prioritaires.",
      contactSource: "Répertoire produits",
    },
  },
} satisfies SiteMessages;

export default messages;
