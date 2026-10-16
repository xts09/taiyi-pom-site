import type { MessageLocale } from "../i18n/config";
import type { ApplicationPartGroupsCopy } from "./applicationPartGroupPresentation";

type AutomotivePartGroupCopy = ApplicationPartGroupsCopy & { driveMaterialTitle: string };

export const automotivePartGroupPageDesign: Record<MessageLocale, AutomotivePartGroupCopy> = {
  "zh-CN": {
    sectionTitle: "汽车零部件的材料要求", tabsLabel: "汽车零部件分类",
    partsLabel: "部件要求", imageLabel: "部件示意", materialsAction: "查看材料与牌号",
    materialsLabel: "所选部件的材料方向", driveMaterialTitle: "耐磨与低摩擦 POM",
    groups: {
      "automotive-visibility-window": {
        title: "视野与车窗系统", compactTitle: "视野与车窗",
        scope: "车窗升降器、雨刮机构与后视镜底座。",
        intro: "持续啮合优先控制齿面温升与磨损，启停或换向优先平衡齿根承载与冲击韧性。",
      },
      "automotive-fuel-management": {
        title: "燃油管理", compactTitle: "燃油管理",
        scope: "燃油泵、滤芯与加油口盖中的塑料部件。",
        intro: "介质引起的尺寸变化会改变运动间隙与密封接触。先按燃油组分和温度确定暴露条件，再比较耐磨、尺寸保持和客户要求的资料。",
      },
      "automotive-seat-adjustment-guidance": {
        title: "座椅调节与导向", compactTitle: "座椅导向",
        scope: "座椅机构中的导向环与滑动配合。",
        intro: "频繁启停先解决粘滑与异响，长行程往复先控制间隙增长。按钢轨或塑轨和粉尘状态，分别比较润滑配方的启动阻力与磨耗。",
      },
      "automotive-control-actuation": {
        title: "操控与执行", compactTitle: "操控与执行",
        scope: "换挡座与制动执行器内部部件。",
        intro: "持续啮合优先控制齿面温升与磨损，启停或换向优先平衡齿根承载与冲击韧性。",
      },
      "automotive-retention-latching": {
        title: "固定与锁止", compactTitle: "固定与锁止",
        scope: "卡扣、紧固件与锁扣。",
        intro: "卡臂根部的装配应变与持续夹持的蠕变需分别控制。外露部件同时比较光照后的韧性与颜色，低温拆装重点检查开裂。",
      },
    },
  },
  en: {
    sectionTitle: "Material requirements for automotive parts", tabsLabel: "Automotive part categories",
    partsLabel: "Part requirements", imageLabel: "Part illustration", materialsAction: "View materials & grades",
    materialsLabel: "Material direction for the selected part", driveMaterialTitle: "Wear-resistant & low-friction POM",
    groups: {
      "automotive-visibility-window": {
        title: "Visibility & window systems", compactTitle: "Windows & wipers",
        scope: "Window regulators, wiper mechanisms and mirror bases.",
        intro: "For continuous meshing, control tooth heat and wear; for starts or reversals, balance root loading with impact toughness.",
      },
      "automotive-fuel-management": {
        title: "Fuel management", compactTitle: "Fuel management",
        scope: "Plastic parts in fuel pumps, filters and filler caps.",
        intro: "Fluid-induced dimensional changes alter motion clearance and sealing. Define exposure by fuel composition and temperature, then compare wear, dimensions and customer-required documents.",
      },
      "automotive-seat-adjustment-guidance": {
        title: "Seat adjustment & guidance", compactTitle: "Seat guidance",
        scope: "Guide rings and sliding fits in seat mechanisms.",
        intro: "For frequent starts, address stick-slip noise; for long reciprocation, clearance growth. Compare starting force and wear by steel/plastic rail and dust exposure.",
      },
      "automotive-control-actuation": {
        title: "Control & actuation", compactTitle: "Control & actuation",
        scope: "Shift supports and internal brake-actuator parts.",
        intro: "For continuous meshing, control tooth heat and wear; for starts or reversals, balance root loading with impact toughness.",
      },
      "automotive-retention-latching": {
        title: "Retention & latching", compactTitle: "Retention & latching",
        scope: "Clips, fasteners and latches.",
        intro: "Control clip-root assembly strain and sustained-clamp creep separately. For exposed parts, compare toughness and color after light aging; check cracking in cold assembly.",
      },
    },
  },
  de: {
    sectionTitle: "Werkstoffanforderungen für Fahrzeugbauteile", tabsLabel: "Fahrzeugbauteile nach Funktion",
    partsLabel: "Bauteilanforderungen", imageLabel: "Bauteilabbildung", materialsAction: "Werkstoffe und Typen ansehen",
    materialsLabel: "Werkstoffrichtung für das ausgewählte Bauteil", driveMaterialTitle: "Verschleißarmer und reibungsarmer POM",
    groups: {
      "automotive-visibility-window": {
        title: "Sicht- und Fenstersysteme", compactTitle: "Fenster und Wischer",
        scope: "Fensterheber, Wischermechanismen und Spiegelhalterungen.",
        intro: "Bei Dauereingriff kontrollieren Sie Zahnwärme und Verschleiß, bei Anfahren und Umkehr Zahnfußlast und Schlagzähigkeit.",
      },
      "automotive-fuel-management": {
        title: "Kraftstoffmanagement", compactTitle: "Kraftstoffsysteme",
        scope: "Kunststoffteile in Kraftstoffpumpen, Filtern und Tankverschlüssen.",
        intro: "Medienbedingte Maßänderungen beeinflussen Bewegungsspiel und Dichtkontakt. Definieren Sie Kraftstoff und Temperatur und vergleichen Sie Verschleiß, Maßhaltung und Kundenunterlagen.",
      },
      "automotive-seat-adjustment-guidance": {
        title: "Sitzverstellung und -führung", compactTitle: "Sitzführung",
        scope: "Führungsringe und Gleitpassungen in Sitzmechanismen.",
        intro: "Bei häufigen Starts adressieren Sie Stick-Slip, bei langem Hub Spielzunahme. Vergleichen Sie Anlaufkraft und Verschleiß nach Stahl-/Kunststoffschiene und Staub.",
      },
      "automotive-control-actuation": {
        title: "Steuerung und Betätigung", compactTitle: "Betätigung",
        scope: "Schalthebelaufnahmen und interne Bremsaktorbauteile.",
        intro: "Bei Dauereingriff kontrollieren Sie Zahnwärme und Verschleiß, bei Anfahren und Umkehr Zahnfußlast und Schlagzähigkeit.",
      },
      "automotive-retention-latching": {
        title: "Befestigung und Verriegelung", compactTitle: "Befestigung",
        scope: "Clips, Befestigungselemente und Verriegelungen.",
        intro: "Kontrollieren Sie Montagedehnung und Klemmkriechen getrennt. Bei Außenteilen vergleichen Sie Zähigkeit und Farbe nach Lichtalterung; prüfen Sie Kältemontagerisse.",
      },
    },
  },
  fr: {
    sectionTitle: "Exigences matière des pièces automobiles", tabsLabel: "Catégories de pièces automobiles",
    partsLabel: "Exigences des pièces", imageLabel: "Illustration de la pièce", materialsAction: "Voir les matières et grades",
    materialsLabel: "Orientation matière de la pièce sélectionnée", driveMaterialTitle: "POM résistant à l’usure et à faible frottement",
    groups: {
      "automotive-visibility-window": {
        title: "Visibilité et mécanismes de vitres", compactTitle: "Vitres et essuie-glaces",
        scope: "Lève-vitres, essuie-glaces et supports de rétroviseur.",
        intro: "En engrènement continu, contrôlez chaleur et usure ; aux démarrages et inversions, équilibrez charge en pied et ténacité.",
      },
      "automotive-fuel-management": {
        title: "Gestion du carburant", compactTitle: "Circuit de carburant",
        scope: "Pièces plastiques des pompes, filtres et bouchons de carburant.",
        intro: "Les variations dues au fluide modifient jeu et étanchéité. Définissez carburant et température, puis comparez usure, dimensions et documents client.",
      },
      "automotive-seat-adjustment-guidance": {
        title: "Réglage et guidage du siège", compactTitle: "Guidage du siège",
        scope: "Bagues de guidage et ajustements coulissants des sièges.",
        intro: "Aux démarrages fréquents, traitez le stick-slip ; en longue course, le jeu. Comparez effort initial et usure selon rail acier/plastique et poussière.",
      },
      "automotive-control-actuation": {
        title: "Commande et actionnement", compactTitle: "Actionnement",
        scope: "Supports de commande et pièces internes d’actionneurs de frein.",
        intro: "En engrènement continu, contrôlez chaleur et usure ; aux démarrages et inversions, équilibrez charge en pied et ténacité.",
      },
      "automotive-retention-latching": {
        title: "Fixation et verrouillage", compactTitle: "Fixation",
        scope: "Clips, fixations et loquets.",
        intro: "Contrôlez séparément déformation au montage et fluage de serrage. Pour l’extérieur, comparez ténacité et couleur après lumière ; vérifiez les fissures au montage froid.",
      },
    },
  },
  "pt-BR": {
    sectionTitle: "Requisitos de materiais para peças automotivas", tabsLabel: "Categorias de peças automotivas",
    partsLabel: "Requisitos das peças", imageLabel: "Ilustração da peça", materialsAction: "Ver materiais e graus",
    materialsLabel: "Material para a peça selecionada", driveMaterialTitle: "POM resistente ao desgaste e de baixo atrito",
    groups: {
      "automotive-visibility-window": {
        title: "Visibilidade e sistemas de vidros", compactTitle: "Vidros e limpadores",
        scope: "Elevadores de vidro, limpadores e bases de retrovisores.",
        intro: "Em engrenamento contínuo, controle calor e desgaste; nas partidas e inversões, equilibre carga na raiz e tenacidade.",
      },
      "automotive-fuel-management": {
        title: "Gestão de combustível", compactTitle: "Combustível",
        scope: "Peças plásticas de bombas, filtros e tampas de combustível.",
        intro: "Variações por fluido alteram folga e vedação. Defina combustível e temperatura, depois compare desgaste, dimensões e documentos do cliente.",
      },
      "automotive-seat-adjustment-guidance": {
        title: "Ajuste e guia do banco", compactTitle: "Guia do banco",
        scope: "Anéis-guia e encaixes deslizantes dos mecanismos do banco.",
        intro: "Em partidas frequentes, trate stick-slip; em cursos longos, aumento de folga. Compare força inicial e desgaste por trilho de aço/plástico e poeira.",
      },
      "automotive-control-actuation": {
        title: "Controle e acionamento", compactTitle: "Acionamento",
        scope: "Suportes de câmbio e peças internas de atuadores de freio.",
        intro: "Em engrenamento contínuo, controle calor e desgaste; nas partidas e inversões, equilibre carga na raiz e tenacidade.",
      },
      "automotive-retention-latching": {
        title: "Fixação e travamento", compactTitle: "Fixação",
        scope: "Clipes, fixadores e travas.",
        intro: "Controle separadamente deformação de montagem e fluência de fixação. Em peças expostas, compare tenacidade e cor após luz; verifique trincas na montagem fria.",
      },
    },
  },
};
