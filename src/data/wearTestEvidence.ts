const unpublishedSourceFields = {
  reportNumber: null, equipment: null, method: null, counterface: null,
  contactGeometry: null, lubrication: null, repeatCount: null,
} as const;

export const wearTestEvidence = {
  benchmarkPath: "/resources/pom-wear-benchmark",
  sectionId: "internal-wear-test-records",
  records: [
    {
      id: "enm1040", grade: "ENM1040", specimen: "ENM1040 7#", source: unpublishedSourceFields,
      group: "high-load", date: "2026-01-12", load: "2266.81", rpm: "164.9",
      durationSeconds: 39600, ambient: "23", temperature: "30.4", force: "121.96",
      before: "8.348", after: "8.308", loss: "0.040",
      outcome: "completed", curve: "/images/wear-benchmark/enm1040-curve.png",
      photos: ["/images/wear-benchmark/enm1040-before.png", "/images/wear-benchmark/enm1040-after.png"],
      productPath: "/products/enm1040-high-wear-resistant-pom",
    },
    {
      id: "eso102", grade: "ESO102", specimen: "ESO102", source: unpublishedSourceFields,
      group: "high-load", date: "2023-03-30", load: "2266.82", rpm: "164.9",
      durationSeconds: 39600, ambient: "23", temperature: "32.4", force: "138.30",
      before: "8.476", after: "8.368", loss: "0.108",
      outcome: "completed", curve: "/images/wear-benchmark/eso102-curve.png",
      photos: null, productPath: null,
    },
    {
      id: "etm100-nm", grade: "ETM100-NM", specimen: "ETM100-NM", source: unpublishedSourceFields,
      group: "high-load", date: "2025-10-15", load: "2266.80", rpm: "165.2",
      durationSeconds: 39600, ambient: "23", temperature: "39.4", force: "134.36",
      before: null, after: null, loss: null,
      outcome: "completed", curve: "/images/wear-benchmark/etm100-nm-curve.png",
      photos: ["/images/wear-benchmark/etm100-nm-before.jpeg", "/images/wear-benchmark/etm100-nm-after.jpeg"],
      productPath: null,
    },
    {
      id: "ems102", grade: "EMS102", specimen: "EMS102", source: unpublishedSourceFields,
      group: "high-load", date: "2025-12-10", load: "2267", rpm: "165",
      durationSeconds: 984, ambient: "23", temperature: "37.7", force: "319.25",
      before: "8.688", after: "7.692", loss: "0.996",
      outcome: "worn-through", curve: "/images/wear-benchmark/ems102-curve.png",
      photos: ["/images/wear-benchmark/ems102-before.png", "/images/wear-benchmark/ems102-after.png"],
      productPath: "/products/ems102-high-wear-resistant-pom",
    },
    {
      id: "eptl402", grade: "EPTL402", specimen: "EPTL402", source: unpublishedSourceFields,
      group: "high-load", date: "2024-08-24", load: "2266.62", rpm: "164.1",
      durationSeconds: 543, ambient: "23", temperature: "40.8", force: "263.01",
      before: "9.175", after: "8.093", loss: "1.082",
      outcome: "worn-through", curve: "/images/wear-benchmark/eptl402-curve.png",
      photos: null, productPath: "/products/eptl402-high-wear-resistant-pom",
    },
    {
      id: "eps055", grade: "EPS055", specimen: "EPS055", source: unpublishedSourceFields,
      group: "low-load", date: "2026-04-29", load: "99.72", rpm: "20.4",
      durationSeconds: 14400, ambient: "23", temperature: "23.4", force: "17.83",
      before: "8.498", after: "8.497", loss: "0.001",
      outcome: "completed", curve: "/images/wear-benchmark/eps055-curve.png",
      photos: ["/images/wear-benchmark/eps055-before.png", "/images/wear-benchmark/eps055-after.png"],
      productPath: null,
    },
  ],
} as const;

export type WearTestRecord = (typeof wearTestEvidence.records)[number];
export type WearTestGroup = WearTestRecord["group"];

export function getWearTestCounts(records: readonly Pick<WearTestRecord, "grade" | "group">[] = wearTestEvidence.records) {
  return {
    records: records.length,
    grades: new Set(records.map(record => record.grade)).size,
    groups: {
      "high-load": new Set(records.filter(record => record.group === "high-load").map(record => record.grade)).size,
      "low-load": new Set(records.filter(record => record.group === "low-load").map(record => record.grade)).size,
    },
  };
}
const counts = getWearTestCounts();
const enGradeCount = (count: number) => `${count} ${count === 1 ? "grade" : "grades"}`;

const copy = {
  en: {
    navLabel: "Wear test benchmark",
    entryTitle: "Wear test benchmark",
    entryIntro: `Explore ${counts.records} report records by condition, with measured results, process curves and available specimen photos.`,
    entryAction: "Open the wear test benchmark",
    benchmarkTitle: "POM wear test benchmark",
    benchmarkIntro: `Explore test results for ${counts.grades} POM grades, with load, run time, process curves and before-and-after specimen photos.`,
    benchmarkKicker: "TEST EVIDENCE / POM",
    tableTitle: "Test results",
    tableIntro: "Compare conditions, run time and end state together. Validate part performance under the intended operating conditions.",
    missingValue: "— indicates a value not listed on this page.",
    sourceTitle: "Record source & method",
    sourceIntro: "Internal wear-test record, indexed here by grade and test date. The page locator identifies this entry; it is separate from the original report number.",
    recordLocator: "Page record locator",
    notPublished: "Not provided in the public summary",
    sourceFields: { reportNumber: "Original report number", equipment: "Equipment", method: "Test method", counterface: "Counterface", contactGeometry: "Contact geometry", lubrication: "Lubrication", repeatCount: "Repeat count" },
    recordUse: "Use this record for initial sample screening. For part validation, share the mating material, contact geometry, load, speed and lubrication conditions.",
    recordAction: "View record",
    detailTitle: "Curves & specimen photos",
    detailIntro: "Open a grade to explore its results, images and full test data.",
    allData: "Full test data",
    backToResults: "Back to results",
    inquiryAction: "Ask about",
    relatedTitle: "Find a POM grade for your application",
    relatedIntro: "Tell us about the part, load and operating speed to discuss grade selection and sample testing.",
    guideAction: "Wear & low-friction selection guide",
    landingAction: "Explore wear-resistant POM",
    contactAction: "Discuss Your Application",
    productAction: "See grade details", reportSpecimen: "Report specimen",
    date: "Test date", ambient: "Ambient", temperature: "Reported friction temperature",
    force: "Reported friction force",
    before: "Mass before", after: "Mass after", loss: "Mass loss",
    load: "Load", rpm: "Speed", duration: "Run time", grade: "Grade",
    outcome: "End state", completed: "Completed",
    wornThrough: "Worn through",
    groups: {
      "high-load": {
        title: "≈ 2.27 kN · ≈ 165 rpm",
        summary: enGradeCount(counts.groups["high-load"]),
      },
      "low-load": {
        title: "≈ 100 N · ≈ 20 rpm",
        summary: enGradeCount(counts.groups["low-load"]),
      },
    },
  },
  zh: {
    navLabel: "耐磨测试 Benchmark",
    entryTitle: "耐磨测试 Benchmark",
    entryIntro: `按工况查看 ${counts.records} 条报告记录、测量值、过程曲线和现有试样照片。`,
    entryAction: "查看耐磨测试 Benchmark",
    benchmarkTitle: "POM 耐磨测试 Benchmark",
    benchmarkIntro: `查看 ${counts.grades} 个 POM 牌号的测试结果、运行工况、过程曲线与试验前后照片。`,
    benchmarkKicker: "测试证据 / POM",
    tableTitle: "测试结果",
    tableIntro: "结合工况、时长和结束状态比较；实际零件表现需按目标工况验证。",
    missingValue: "— 为本页未列出的数值。",
    sourceTitle: "记录来源与方法",
    sourceIntro: "数据整理自内部磨损试验记录，按牌号和试验日期索引。页面记录标识用于定位本条内容，与原报告编号分开管理。",
    recordLocator: "页面记录标识",
    notPublished: "公开摘要未提供",
    sourceFields: { reportNumber: "原报告编号", equipment: "试验设备", method: "试验方法", counterface: "对磨材料", contactGeometry: "接触几何", lubrication: "润滑条件", repeatCount: "重复试验次数" },
    recordUse: "本条记录可用于试样初筛。进行零件验证时，请提供对磨材料、接触几何、载荷、速度和润滑条件。",
    recordAction: "查看记录",
    detailTitle: "曲线与试样照片",
    detailIntro: "展开牌号，查看测试结果、图片与完整试验数据。",
    allData: "完整试验数据",
    backToResults: "返回结果表",
    inquiryAction: "咨询",
    relatedTitle: "为你的应用选择耐磨 POM",
    relatedIntro: "提供零件用途、载荷与运行速度，与我们讨论牌号选择和试样评估。",
    guideAction: "耐磨与低摩擦 POM 选型指南",
    landingAction: "了解耐磨 POM 材料",
    contactAction: "讨论您的应用",
    productAction: "查看牌号详情", reportSpecimen: "报告试样",
    date: "试验日期", ambient: "环境温度", temperature: "报告摩擦温度",
    force: "报告摩擦力",
    before: "试前质量", after: "试后质量", loss: "质量损失",
    load: "载荷", rpm: "转速", duration: "试验时长", grade: "牌号",
    outcome: "结束状态", completed: "完成试验",
    wornThrough: "试样磨穿",
    groups: {
      "high-load": {
        title: "约 2.27 kN · 约 165 rpm",
        summary: `${counts.groups["high-load"]} 个牌号`,
      },
      "low-load": {
        title: "约 100 N · 约 20 rpm",
        summary: `${counts.groups["low-load"]} 个牌号`,
      },
    },
  },
} as const;

export function getWearTestEvidenceCopy(localeSegment?: string) {
  if (localeSegment && localeSegment !== "zh") return undefined;
  return copy[localeSegment === "zh" ? "zh" : "en"];
}

export function formatWearDuration(seconds: number, locale: "en" | "zh") {
  if (seconds % 3600 === 0) return `${seconds / 3600} ${locale === "zh" ? "小时" : "h"}`;
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return locale === "zh" ? `${minutes} 分 ${remainder} 秒` : `${minutes} min ${remainder} s`;
}
