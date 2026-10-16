import type { MessageLocale } from "../i18n/config";
import type { ApplicationPartGroupsCopy } from "./applicationPartGroupPresentation";

type WashingMachinePageCopy = ApplicationPartGroupsCopy & {
  driveMaterialTitle: string;
};

export const washingMachinePageDesign: Record<MessageLocale, WashingMachinePageCopy> = {
  en: {
    sectionTitle: "Material requirements for washing machine parts",
    tabsLabel: "Washing machine applications",
    partsLabel: "Part requirements",
    imageLabel: "Part illustration",
    materialsAction: "View materials & grades",
    driveMaterialTitle: "Wear-resistant & low-friction POM",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "Water inlet & distribution", compactTitle: "Water inlet",
        scope: "Water guide pipes and inlet valve connections.",
        intro: "Hot-water and fluid exposure can alter sealing dimensions; repeated actuation wears mating surfaces. Balance dimensional retention and starting force, then leakage after pressure cycles.",
      },
      "washing-machine-drum-drive": {
        title: "Drum drive", compactTitle: "Drum drive",
        scope: "Drive gears, transmission wheels and reduction gear assemblies.",
        intro: "For continuous meshing, control tooth heat and wear; for starts or reversals, balance root loading with impact toughness.",
      },
      "washing-machine-drainage": {
        title: "Drainage", compactTitle: "Drainage",
        scope: "Pump housings, control valves and valve assemblies.",
        intro: "Hot-water and fluid exposure can alter sealing dimensions; repeated actuation wears mating surfaces. Balance dimensional retention and starting force, then leakage after pressure cycles.",
      },
    },
  },
  de: {
    sectionTitle: "Werkstoffe für Waschmaschinen",
    tabsLabel: "Anwendungen in Waschmaschinen",
    partsLabel: "Bauteilanforderungen",
    imageLabel: "Bauteilabbildung",
    materialsAction: "Werkstoffe und Typen ansehen",
    driveMaterialTitle: "Verschleißfestes und reibungsarmes POM",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "Wasserzulauf und Verteilung", compactTitle: "Zulauf",
        scope: "Wasserführungsrohre und Anschlüsse am Zulaufventil.",
        intro: "Heißwasser und Medien können Dichtmaße ändern; Betätigung verschleißt Passflächen. Wägen Sie Maßhaltung und Anlaufkraft ab; prüfen Sie Leckage nach Druckzyklen.",
      },
      "washing-machine-drum-drive": {
        title: "Trommelantrieb", compactTitle: "Antrieb",
        scope: "Antriebszahnräder, Antriebsräder und Untersetzungsgetriebe.",
        intro: "Bei Dauereingriff kontrollieren Sie Zahnwärme und Verschleiß, bei Anfahren und Umkehr Zahnfußlast und Schlagzähigkeit.",
      },
      "washing-machine-drainage": {
        title: "Wasserablauf", compactTitle: "Ablauf",
        scope: "Pumpengehäuse, Steuerventile und Ablaufventilbaugruppen.",
        intro: "Heißwasser und Medien können Dichtmaße ändern; Betätigung verschleißt Passflächen. Wägen Sie Maßhaltung und Anlaufkraft ab; prüfen Sie Leckage nach Druckzyklen.",
      },
    },
  },
  fr: {
    sectionTitle: "Matériaux pour les pièces de lave-linge",
    tabsLabel: "Applications dans les lave-linge",
    partsLabel: "Exigences des pièces",
    imageLabel: "Illustration de pièce",
    materialsAction: "Voir les matériaux et grades",
    driveMaterialTitle: "POM résistant à l'usure et à faible frottement",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "Arrivée et distribution d'eau", compactTitle: "Arrivée",
        scope: "Conduits d'eau et raccords de vanne d'arrivée.",
        intro: "Eau chaude et fluides modifient les dimensions de joint ; l’actionnement use les portées. Équilibrez dimensions et effort initial, puis fuite après pression.",
      },
      "washing-machine-drum-drive": {
        title: "Entraînement du tambour", compactTitle: "Tambour",
        scope: "Engrenages d'entraînement, roues de transmission et réducteurs.",
        intro: "En engrènement continu, contrôlez chaleur et usure ; aux démarrages et inversions, équilibrez charge en pied et ténacité.",
      },
      "washing-machine-drainage": {
        title: "Vidange", compactTitle: "Vidange",
        scope: "Corps de pompe, vannes de commande et ensembles de vanne de vidange.",
        intro: "Eau chaude et fluides modifient les dimensions de joint ; l’actionnement use les portées. Équilibrez dimensions et effort initial, puis fuite après pression.",
      },
    },
  },
  "pt-BR": {
    sectionTitle: "Materiais para peças de lavadoras",
    tabsLabel: "Aplicações em lavadoras",
    partsLabel: "Requisitos das peças",
    imageLabel: "Ilustração da peça",
    materialsAction: "Ver materiais e grades",
    driveMaterialTitle: "POM resistente ao desgaste e de baixo atrito",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "Entrada e distribuição de água", compactTitle: "Entrada",
        scope: "Tubos de água e conexões da válvula de entrada.",
        intro: "Água quente e fluidos alteram dimensões de vedação; atuação desgasta ajustes. Equilibre dimensões e força inicial, depois vazamento após pressão.",
      },
      "washing-machine-drum-drive": {
        title: "Acionamento do tambor", compactTitle: "Acionamento",
        scope: "Engrenagens de acionamento, rodas de transmissão e conjuntos redutores.",
        intro: "Em engrenamento contínuo, controle calor e desgaste; nas partidas e inversões, equilibre carga na raiz e tenacidade.",
      },
      "washing-machine-drainage": {
        title: "Drenagem", compactTitle: "Drenagem",
        scope: "Carcaças de bomba, válvulas de controle e conjuntos de válvula de drenagem.",
        intro: "Água quente e fluidos alteram dimensões de vedação; atuação desgasta ajustes. Equilibre dimensões e força inicial, depois vazamento após pressão.",
      },
    },
  },
  "zh-CN": {
    sectionTitle: "洗衣机零部件的材料关注点",
    tabsLabel: "洗衣机应用小分类",
    partsLabel: "部件要求",
    imageLabel: "部件示意",
    materialsAction: "查看材料与牌号",
    driveMaterialTitle: "耐磨与低摩擦 POM",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "进水与分配", compactTitle: "进水",
        scope: "导水管与进水阀连接管。",
        intro: "热水与介质接触后的尺寸变化可能扰乱密封，重复启闭还会磨损配合面。先平衡尺寸保持与低启动阻力，再检查压力循环后的泄漏。",
      },
      "washing-machine-drum-drive": {
        title: "滚筒驱动", compactTitle: "传动",
        scope: "滚筒传动齿轮、传动轮与减速齿轮总成。",
        intro: "持续啮合优先控制齿面温升与磨损，启停或换向优先平衡齿根承载与冲击韧性。",
      },
      "washing-machine-drainage": {
        title: "排水", compactTitle: "排水",
        scope: "排水泵壳体、控制阀与阀门总成。",
        intro: "热水与介质接触后的尺寸变化可能扰乱密封，重复启闭还会磨损配合面。先平衡尺寸保持与低启动阻力，再检查压力循环后的泄漏。",
      },
    },
  },
};
