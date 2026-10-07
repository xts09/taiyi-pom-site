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
        intro: "Water pressure, media, connection geometry and repeated rotation shape fit and wear requirements. Sunlight exposure depends on the installed position.",
      },
      "outdoor-cutting-line-feed": {
        title: "Cutting & line feed", compactTitle: "Cutting & line feed",
        scope: "Trimmer spools and drive heads.",
        intro: "Spool balance, drive engagement and line clearance affect rotation and line feed. Line tension and collisions add to the loads on these moving parts.",
      },
      "outdoor-drive-starting": {
        title: "Drive & starting", compactTitle: "Drive & starting",
        scope: "Lawn mower gears and recoil starter assemblies.",
        intro: "Gear teeth carry torque; starter assemblies route the cord and retain the spring. Repeated starts, impact and mounting fit call for different checks at each interface.",
      },
      "outdoor-housing-retention": {
        title: "Housing & retention", compactTitle: "Housing & retention",
        scope: "Clips that retain outdoor equipment housings.",
        intro: "Assembly strain and holding force affect clip geometry and toughness. Sunlight and temperature changes depend on where the housing is fitted and how it is used.",
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
        intro: "Wasserdruck, Medien, Anschlussgeometrie und wiederholte Drehbewegung bestimmen die Anforderungen an Passung und Verschleiß. Die Sonneneinstrahlung hängt von der Einbauposition ab.",
      },
      "outdoor-cutting-line-feed": {
        title: "Schneiden und Fadenzufuhr", compactTitle: "Schneiden & Faden",
        scope: "Fadenspulen und Antriebsköpfe von Rasentrimmern.",
        intro: "Spulenwuchtung, Antriebseingriff und Fadenfreiraum beeinflussen Drehbewegung und Fadenzufuhr. Fadenspannung und Stöße erhöhen die Belastung der beweglichen Teile.",
      },
      "outdoor-drive-starting": {
        title: "Antrieb und Start", compactTitle: "Antrieb & Start",
        scope: "Rasenmäherzahnräder und Seilzugstarter.",
        intro: "Zahnflanken übertragen Drehmoment; Starter führen das Seil und halten die Feder. Wiederholte Starts, Stöße und die Befestigung erfordern unterschiedliche Prüfungen an den jeweiligen Schnittstellen.",
      },
      "outdoor-housing-retention": {
        title: "Gehäuse und Befestigung", compactTitle: "Gehäuse & Halt",
        scope: "Clips zur Befestigung von Gehäusen im Außeneinsatz.",
        intro: "Montageverformung und Haltekraft beeinflussen Clipgeometrie und Zähigkeit. Sonneneinstrahlung und Temperaturwechsel hängen von Einbauort und Nutzung des Gehäuses ab.",
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
        intro: "La pression de l’eau, le fluide, la géométrie des raccords et les rotations répétées déterminent les besoins d’ajustement et de tenue à l’usure. L’exposition au soleil dépend de la position de montage.",
      },
      "outdoor-cutting-line-feed": {
        title: "Coupe et alimentation du fil", compactTitle: "Coupe & fil",
        scope: "Bobines et têtes d’entraînement de coupe-bordures.",
        intro: "L’équilibrage de la bobine, l’engagement de l’entraînement et le jeu autour du fil influencent la rotation et l’alimentation du fil. La tension et les chocs sollicitent aussi ces pièces mobiles.",
      },
      "outdoor-drive-starting": {
        title: "Entraînement et démarrage", compactTitle: "Entraînement",
        scope: "Engrenages de tondeuse et ensembles de lanceur à rappel.",
        intro: "Les dents transmettent le couple ; les lanceurs guident le cordon et maintiennent le ressort. Les démarrages répétés, les chocs et les fixations sollicitent des interfaces différentes.",
      },
      "outdoor-housing-retention": {
        title: "Carter et fixation", compactTitle: "Carter & fixation",
        scope: "Clips de fixation des carters d’équipements extérieurs.",
        intro: "La déformation au montage et l’effort de maintien influencent la géométrie et la ténacité du clip. Le soleil et les variations de température dépendent de l’emplacement et de l’usage du carter.",
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
        intro: "Pressão da água, fluido, geometria das conexões e rotação repetida definem os requisitos de ajuste e desgaste. A exposição ao sol depende da posição de instalação.",
      },
      "outdoor-cutting-line-feed": {
        title: "Corte e alimentação do fio", compactTitle: "Corte & fio",
        scope: "Carretéis e cabeçotes de acionamento de aparadores.",
        intro: "Balanceamento do carretel, engate do acionamento e folga do fio afetam a rotação e a alimentação. A tensão do fio e os impactos também solicitam essas peças móveis.",
      },
      "outdoor-drive-starting": {
        title: "Acionamento e partida", compactTitle: "Acionamento",
        scope: "Engrenagens de cortador de grama e conjuntos de partida retrátil.",
        intro: "Os dentes transmitem torque; o conjunto de partida guia a corda e retém a mola. Partidas repetidas, impactos e ajustes de montagem exigem atenção a interfaces distintas.",
      },
      "outdoor-housing-retention": {
        title: "Carcaça e fixação", compactTitle: "Carcaça & fixação",
        scope: "Clipes que fixam carcaças de equipamentos externos.",
        intro: "A deformação na montagem e a força de retenção influenciam a geometria e a tenacidade do clipe. Sol e variações de temperatura dependem do local de instalação e do uso da carcaça.",
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
        intro: "水压、介质、连接结构与反复旋转影响配合和磨损要求。日照条件则取决于部件的实际安装位置。",
      },
      "outdoor-cutting-line-feed": {
        title: "切割与送线", compactTitle: "切割与送线",
        scope: "打草机线盘与驱动头。",
        intro: "线盘平衡、驱动啮合与出线间隙影响旋转和送线，线张力与碰撞还会增加运动部件的载荷。",
      },
      "outdoor-drive-starting": {
        title: "驱动与启动", compactTitle: "驱动与启动",
        scope: "割草机齿轮与手拉启动器总成。",
        intro: "齿面承担扭矩，启动器负责拉绳导向与弹簧固定。反复启动、冲击和安装配合，对各处接触界面提出不同要求。",
      },
      "outdoor-housing-retention": {
        title: "壳体与固定", compactTitle: "壳体与固定",
        scope: "户外设备壳体卡扣。",
        intro: "装配应变与保持力影响卡扣结构和韧性，日照与温度变化则与壳体的安装位置、使用方式有关。",
      },
    },
  },
};
