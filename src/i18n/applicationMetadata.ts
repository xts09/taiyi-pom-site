import type { LocalizedApplicationSlug } from "@/i18n/applicationTypes";

type ApplicationMetadataCopy = {
  title: string;
  description: string;
};

export const applicationDetailMetadata = {
  en: {
    automotive: {
      title: "POM for Automotive Components | Taiyi Polymer",
      description:
        "POM selection for automotive gears, guides and housings, covering wear, impact, stiffness and part-specific material evaluation.",
    },
    electronics: {
      title: "Engineering Plastics for Electronics | Taiyi Polymer",
      description:
        "Material selection for electrical connectors, drive gears and ESD handling parts, covering wear, friction and electrical requirements.",
    },
    "conveyor-automation": {
      title: "POM for Conveyor & Automation Parts | Taiyi Polymer",
      description:
        "Compare POM options for chain plates, rollers and conveyor supports by contact wear, friction, static control and load requirements.",
    },
    "motion-components": {
      title: "POM for Gears, Bushings & Motion Parts | Taiyi Polymer",
      description:
        "Compare wear-resistant, low-friction and reinforced POM for gears, bushings and guides, with grade data and component case references.",
    },
    "water-control": {
      title: "POM for Valves & Water-Control Parts | Taiyi Polymer",
      description:
        "POM selection for valve internals, guides, housings and pump parts by motion, sealing interfaces, media exposure and dimensional requirements.",
    },
    "washing-machine-components": {
      title: "POM for Washing Machine Components | Taiyi Polymer",
      description:
        "Compare POM for washing machine fill, drum-drive and drainage parts by wear, friction, load and dimensional requirements.",
    },
    "outdoor-equipment": {
      title: "POM for Outdoor Equipment Parts | Taiyi Polymer",
      description:
        "Compare POM candidates for irrigation, cutting-line feed, drive and housing parts by UV exposure, impact, wear and dimensional needs.",
    },
    "textile-machinery": {
      title: "POM for Textile Machinery Parts | Taiyi Polymer",
      description:
        "Compare POM for yarn guides, heddle lifters and spindle supports by sliding wear, friction, stiffness and dimensional requirements.",
    },
  },
  zh: {
    automotive: {
      title: "汽车零部件 POM 选型 | 台益",
      description:
        "比较汽车齿轮、导向件与壳体的 POM 候选材料，了解耐磨、抗冲、刚性和尺寸要求，并查看相关牌号资料与应用案例。",
    },
    electronics: {
      title: "电子电气工程塑料选型 | 台益",
      description:
        "了解连接器、传动齿轮与静电防护搬运部件的工程塑料选型，比较摩擦、磨损与电气要求，并查找相关材料和牌号数据。",
    },
    "conveyor-automation": {
      title: "输送与自动化部件 POM 选型 | 台益",
      description:
        "围绕输送链板、滚轮与支撑件，比较 POM 材料在接触磨损、摩擦、静电控制及载荷条件下的选型要点。",
    },
    "motion-components": {
      title: "齿轮、轴套与运动部件 POM 选型 | 台益",
      description:
        "比较齿轮、轴套与导向件的耐磨、低摩擦及增强 POM 候选材料，查看选型要点、牌号数据和相关零件案例。",
    },
    "water-control": {
      title: "阀芯与水路控制部件 POM 选型 | 台益",
      description:
        "围绕阀芯、导向件、壳体与泵类部件，比较 POM 选型中的运动、密封配合、介质接触与尺寸要求。",
    },
    "washing-machine-components": {
      title: "洗衣机零部件 POM 选型 | 台益",
      description:
        "比较洗衣机进水分配、滚筒传动与排水部件的 POM 材料选型，了解摩擦、磨损、载荷和尺寸要求。",
    },
    "outdoor-equipment": {
      title: "户外设备零部件 POM 选型 | 台益",
      description:
        "比较灌溉、割草机放线、传动与壳体部件的 POM 候选材料，结合光照、冲击、磨损和尺寸要求筛选。",
    },
    "textile-machinery": {
      title: "纺织机械零部件 POM 选型 | 台益",
      description:
        "围绕导纱器、提综器与纺锭支撑件，比较 POM 材料的摩擦、磨损、刚性和尺寸控制要求。",
    },
  },
} satisfies Record<"en" | "zh", Record<LocalizedApplicationSlug, ApplicationMetadataCopy>>;
