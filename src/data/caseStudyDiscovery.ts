import type { LocalizedResourceArticleSlug } from "../i18n/resourceTypes";

export const caseApplicationCategories = [
  { id: "automotive", zh: "汽车部件", en: "Automotive" },
  { id: "appliances", zh: "家电与商用设备", en: "Home & commercial" },
  { id: "pumps-valves", zh: "泵与阀门", en: "Pumps & valves" },
  { id: "conveying", zh: "输送设备", en: "Conveying" },
  { id: "energy", zh: "新能源设备", en: "Renewable energy" },
] as const;

export type CaseApplicationCategory = typeof caseApplicationCategories[number]["id"];
type Bilingual = { zh: string; en: string };
type ArticleKey = "reinforcement" | "warpage" | "processing" | "gear" | "wear" | "validation";

export const caseReadingGuides: Record<ArticleKey, { slug: LocalizedResourceArticleSlug; reason: Bilingual }> = {
  reinforcement: {
    slug: "reinforcement-materials-overview",
    reason: { zh: "比较增强材料的刚性、韧性与成型取舍。", en: "Compare stiffness, toughness and molding trade-offs in reinforced materials." },
  },
  warpage: {
    slug: "pom-warpage-troubleshooting",
    reason: { zh: "检查收缩方向、结构和工艺对尺寸变化的影响。", en: "Review how shrinkage direction, geometry and processing affect dimensions." },
  },
  processing: {
    slug: "processing-guide",
    reason: { zh: "梳理充模、保压、冷却与表面缺陷的试模检查。", en: "Plan molding checks for filling, packing, cooling and surface defects." },
  },
  gear: {
    slug: "pom-gear-material-selection",
    reason: { zh: "从载荷、失效形式和配合条件评估齿轮材料。", en: "Evaluate gear materials against load, failure modes and mating conditions." },
  },
  wear: {
    slug: "wear-resistant-low-friction-pom-selection-guide",
    reason: { zh: "结合配对材料与工况，区分磨损、摩擦和噪声问题。", en: "Distinguish wear, friction and noise within the actual contact system." },
  },
  validation: {
    slug: "alternative-pom-grade-validation",
    reason: { zh: "安排原材料与候选材料的对照试模和零件验证。", en: "Compare baseline and candidate materials through molding and part validation." },
  },
};

type CaseDiscovery = {
  category: CaseApplicationCategory;
  topic: Bilingual;
  summary: Bilingual;
  articles: readonly ArticleKey[];
};

export const caseStudyDiscovery: Record<string, CaseDiscovery> = {
  "etm-100p-gear-endurance": {
    category: "appliances", topic: { zh: "齿轮磨损", en: "Gear wear" },
    summary: { zh: "针对扶手齿轮耐磨不足，完成机构寿命验收，随后用于量产并形成复购。", en: "An armrest gear wear issue led to assembly life testing, followed by production use and repeat orders." },
    articles: ["gear", "wear"],
  },
  "gf-case-01": {
    category: "automotive", topic: { zh: "高温尺寸稳定", en: "Dimensional stability under heat" },
    summary: { zh: "改善高温持续载荷下的安装区变形，保持玻璃升降机构的孔位稳定。", en: "Address mounting-area deformation under heat and sustained load to stabilize window-regulator hole positions." },
    articles: ["reinforcement", "warpage"],
  },
  "gf-case-02": {
    category: "automotive", topic: { zh: "轴孔定位", en: "Shaft alignment" },
    summary: { zh: "提高轴承支撑区刚性，改善电机发热后的齿轮中心距与运行噪声。", en: "Improve bearing-support stiffness to maintain gear center distances and noise behavior as the motor heats up." },
    articles: ["reinforcement", "gear"],
  },
  "gf-case-03": {
    category: "pumps-valves", topic: { zh: "强度与韧性", en: "Strength and toughness" },
    summary: { zh: "减少固定耳受载变形，同时兼顾小型卡扣和薄壁结构的装配需求。", en: "Reduce loaded deformation of mounting lugs while accommodating small snap-fits and thin-wall assembly features." },
    articles: ["reinforcement", "processing"],
  },
  "gf-case-04": {
    category: "automotive", topic: { zh: "复杂筋位充模", en: "Rib filling" },
    summary: { zh: "解决复杂筋位短射与孔位稳定性之间的取舍，进入下一阶段耐久验证。", en: "Balance complex-rib filling with stable shaft-hole positions before further durability validation." },
    articles: ["processing", "reinforcement"],
  },
  "gf-case-05": {
    category: "appliances", topic: { zh: "齿根变形", en: "Tooth-root deformation" },
    summary: { zh: "降低卡料冲击下的齿根变形，在装机测试中检查启停与噪声表现。", en: "Reduce tooth-root deformation during jams and check start-stop behavior and noise in the machine." },
    articles: ["gear", "wear"],
  },
  "gf-case-06": {
    category: "pumps-valves", topic: { zh: "持续载荷变形", en: "Sustained-load deformation" },
    summary: { zh: "改善长期静载下的支架变形，保持电机轴与减速齿轮的相对位置。", en: "Limit bracket deformation under sustained static load to maintain motor-shaft and reduction-gear alignment." },
    articles: ["reinforcement", "validation"],
  },
  "gf-case-07": {
    category: "pumps-valves", topic: { zh: "冷热循环", en: "Hot-cold cycling" },
    summary: { zh: "改善冷热水循环后的支撑尺寸漂移，减小阀芯旋转扭矩变化。", en: "Improve support stability after hot-cold water cycling and reduce changes in cartridge rotation torque." },
    articles: ["warpage", "validation"],
  },
  "gf-case-08": {
    category: "energy", topic: { zh: "连接孔变形", en: "Connection-hole deformation" },
    summary: { zh: "改善重复加载后的连接孔椭圆化，降低传动机构间隙的增长。", en: "Improve connection-hole shape retention under repeated loads and slow the growth of drive clearance." },
    articles: ["reinforcement", "validation"],
  },
  "gf-case-09": {
    category: "appliances", topic: { zh: "电机定位", en: "Motor positioning" },
    summary: { zh: "减少频繁启停后的电机支座变形，改善研磨机构振动与异常噪声。", en: "Reduce motor-support deformation during frequent starts and improve grinder vibration and abnormal noise." },
    articles: ["reinforcement", "warpage"],
  },
  "gf-case-10": {
    category: "conveying", topic: { zh: "悬臂刚性", en: "Cantilever stiffness" },
    summary: { zh: "提高悬臂侧向刚性，避免继续增加壁厚带来的冷却与缩水问题。", en: "Increase lateral cantilever stiffness without continued wall thickening and its cooling and sink-mark problems." },
    articles: ["processing", "reinforcement"],
  },
};
