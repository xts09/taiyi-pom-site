import type { MessageLocale } from "../i18n/config";
import type { ApplicationPartGroupsCopy } from "./applicationPartGroupPresentation";

type OutdoorPageCopy = ApplicationPartGroupsCopy & { driveMaterialTitle: string };

export const outdoorPageDesign: Record<MessageLocale, OutdoorPageCopy> = {
  en: {
    sectionTitle: "Material requirements for outdoor equipment parts",
    tabsLabel: "Outdoor equipment applications", partsLabel: "Part requirements",
    imageLabel: "Part illustration", materialsAction: "View materials & grades",
    driveMaterialTitle: "Wear-resistant & low-friction POM",
    groups: {
      "outdoor-irrigation": {
        title: "Irrigation", compactTitle: "Irrigation",
        scope: "Sprinkler heads, connectors and pulsator wheels.",
        intro: "Hot-water and fluid exposure can alter sealing dimensions; repeated actuation wears mating surfaces. Balance dimensional retention and starting force, then leakage after pressure cycles.",
      },
      "outdoor-cutting-line-feed": {
        title: "Cutting & line feed", compactTitle: "Cutting & line feed",
        scope: "Trimmer spools and drive heads.",
        intro: "Impacts load locks and rims; outlet wear disrupts line feed. Balance cold toughness and surface wear, then retention and clearance at high speed.",
      },
      "outdoor-drive-starting": {
        title: "Drive & starting", compactTitle: "Drive & starting",
        scope: "Lawn mower gears and recoil starter assemblies.",
        intro: "For continuous meshing, control tooth heat and wear; for starts or reversals, balance root loading with impact toughness.",
      },
      "outdoor-housing-retention": {
        title: "Housing & retention", compactTitle: "Housing & retention",
        scope: "Clips that retain outdoor equipment housings.",
        intro: "Control clip-root assembly strain and sustained-clamp creep separately. For exposed parts, compare toughness and color after light aging; check cracking in cold assembly.",
      },
    },
  },
  de: {
    sectionTitle: "Werkstoffe für Bauteile von Outdoor-Geräten",
    tabsLabel: "Anwendungen in Outdoor-Geräten", partsLabel: "Bauteilanforderungen",
    imageLabel: "Bauteilabbildung", materialsAction: "Werkstoffe und Typen ansehen",
    driveMaterialTitle: "Verschleißfestes und reibungsarmes POM",
    groups: {
      "outdoor-irrigation": {
        title: "Bewässerung", compactTitle: "Bewässerung",
        scope: "Regnerköpfe, Anschlüsse und Impulsräder.",
        intro: "Heißwasser und Medien können Dichtmaße ändern; Betätigung verschleißt Passflächen. Wägen Sie Maßhaltung und Anlaufkraft ab; prüfen Sie Leckage nach Druckzyklen.",
      },
      "outdoor-cutting-line-feed": {
        title: "Schneiden und Fadenzufuhr", compactTitle: "Schneiden & Faden",
        scope: "Fadenspulen und Antriebsköpfe von Rasentrimmern.",
        intro: "Stöße belasten Verriegelung und Rand, Auslassverschleiß stört Fadenvorschub. Wägen Sie Kältezähigkeit und Verschleiß ab; prüfen Sie Halt und Spiel bei hoher Drehzahl.",
      },
      "outdoor-drive-starting": {
        title: "Antrieb und Start", compactTitle: "Antrieb & Start",
        scope: "Rasenmäherzahnräder und Seilzugstarter.",
        intro: "Bei Dauereingriff kontrollieren Sie Zahnwärme und Verschleiß, bei Anfahren und Umkehr Zahnfußlast und Schlagzähigkeit.",
      },
      "outdoor-housing-retention": {
        title: "Gehäuse und Befestigung", compactTitle: "Gehäuse & Halt",
        scope: "Clips zur Befestigung von Gehäusen im Außeneinsatz.",
        intro: "Kontrollieren Sie Montagedehnung und Klemmkriechen getrennt. Bei Außenteilen vergleichen Sie Zähigkeit und Farbe nach Lichtalterung; prüfen Sie Kältemontagerisse.",
      },
    },
  },
  fr: {
    sectionTitle: "Exigences des pièces d’équipements extérieurs",
    tabsLabel: "Applications des équipements extérieurs", partsLabel: "Exigences des pièces",
    imageLabel: "Illustration de la pièce", materialsAction: "Voir les matériaux et grades",
    driveMaterialTitle: "POM résistant à l’usure et à faible frottement",
    groups: {
      "outdoor-irrigation": {
        title: "Irrigation", compactTitle: "Irrigation",
        scope: "Têtes d’arroseur, raccords et roues d’impulsion.",
        intro: "Eau chaude et fluides modifient les dimensions de joint ; l’actionnement use les portées. Équilibrez dimensions et effort initial, puis fuite après pression.",
      },
      "outdoor-cutting-line-feed": {
        title: "Coupe et alimentation du fil", compactTitle: "Coupe & fil",
        scope: "Bobines et têtes d’entraînement de coupe-bordures.",
        intro: "Les chocs chargent verrous et bords ; l’usure perturbe l’avance du fil. Équilibrez ténacité à froid et usure, puis retenue et jeu à grande vitesse.",
      },
      "outdoor-drive-starting": {
        title: "Entraînement et démarrage", compactTitle: "Entraînement",
        scope: "Engrenages de tondeuse et ensembles de lanceur à rappel.",
        intro: "En engrènement continu, contrôlez chaleur et usure ; aux démarrages et inversions, équilibrez charge en pied et ténacité.",
      },
      "outdoor-housing-retention": {
        title: "Carter et fixation", compactTitle: "Carter & fixation",
        scope: "Clips de fixation des carters d’équipements extérieurs.",
        intro: "Contrôlez séparément déformation au montage et fluage de serrage. Pour l’extérieur, comparez ténacité et couleur après lumière ; vérifiez les fissures au montage froid.",
      },
    },
  },
  "pt-BR": {
    sectionTitle: "Requisitos de materiais para peças de equipamentos externos",
    tabsLabel: "Aplicações em equipamentos externos", partsLabel: "Requisitos das peças",
    imageLabel: "Ilustração da peça", materialsAction: "Ver materiais e grades",
    driveMaterialTitle: "POM resistente ao desgaste e de baixo atrito",
    groups: {
      "outdoor-irrigation": {
        title: "Irrigação", compactTitle: "Irrigação",
        scope: "Cabeças de aspersor, conectores e rodas de impulso.",
        intro: "Água quente e fluidos alteram dimensões de vedação; atuação desgasta ajustes. Equilibre dimensões e força inicial, depois vazamento após pressão.",
      },
      "outdoor-cutting-line-feed": {
        title: "Corte e alimentação do fio", compactTitle: "Corte & fio",
        scope: "Carretéis e cabeçotes de acionamento de aparadores.",
        intro: "Impactos carregam travas e bordas; desgaste prejudica alimentação. Equilibre tenacidade no frio e desgaste, depois retenção e folga em alta rotação.",
      },
      "outdoor-drive-starting": {
        title: "Acionamento e partida", compactTitle: "Acionamento",
        scope: "Engrenagens de cortador de grama e conjuntos de partida retrátil.",
        intro: "Em engrenamento contínuo, controle calor e desgaste; nas partidas e inversões, equilibre carga na raiz e tenacidade.",
      },
      "outdoor-housing-retention": {
        title: "Carcaça e fixação", compactTitle: "Carcaça & fixação",
        scope: "Clipes que fixam carcaças de equipamentos externos.",
        intro: "Controle separadamente deformação de montagem e fluência de fixação. Em peças expostas, compare tenacidade e cor após luz; verifique trincas na montagem fria.",
      },
    },
  },
  "zh-CN": {
    sectionTitle: "户外设备部件的材料关注点",
    tabsLabel: "户外设备应用", partsLabel: "部件要求",
    imageLabel: "部件示意", materialsAction: "查看材料与牌号",
    driveMaterialTitle: "耐磨与低摩擦 POM",
    groups: {
      "outdoor-irrigation": {
        title: "灌溉", compactTitle: "灌溉",
        scope: "喷头、灌溉连接件与脉冲轮。",
        intro: "热水与介质接触后的尺寸变化可能扰乱密封，重复启闭还会磨损配合面。先平衡尺寸保持与低启动阻力，再检查压力循环后的泄漏。",
      },
      "outdoor-cutting-line-feed": {
        title: "切割与送线", compactTitle: "切割与送线",
        scope: "打草机线盘与驱动头。",
        intro: "碰撞冲击锁止与轮缘，出线口磨损扰乱送线。先平衡低温韧性与表面耐磨，再检查高速旋转的保持力和间隙。",
      },
      "outdoor-drive-starting": {
        title: "驱动与启动", compactTitle: "驱动与启动",
        scope: "割草机齿轮与手拉启动器总成。",
        intro: "持续啮合优先控制齿面温升与磨损，启停或换向优先平衡齿根承载与冲击韧性。",
      },
      "outdoor-housing-retention": {
        title: "壳体与固定", compactTitle: "壳体与固定",
        scope: "户外设备壳体卡扣。",
        intro: "卡臂根部的装配应变与持续夹持的蠕变需分别控制。外露部件同时比较光照后的韧性与颜色，低温拆装重点检查开裂。",
      },
    },
  },
};
