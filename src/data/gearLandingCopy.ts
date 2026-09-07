import { gearEnduranceTest as test } from "./gearEnduranceEvidence";

const cycles = new Intl.NumberFormat("en-US").format(test.projectRequirementCycles);

export const gearLandingCopy = {
  en: {
    summary: "Compare POM materials for molded transmission gears, worm wheels and small gear mechanisms. Start with the load, wear or dimensional issue your part needs to solve.",
    secondary: "Compare Materials",
    materialsTitle: "Which POM direction fits your gear?",
    materialsIntro: "Use these three starting points to narrow the material family, then validate a grade in your assembly.",
    directions: [
      { title: "Balanced POM", purpose: "For general transmission and dimensional consistency.", check: "Validate fatigue and dimensional stability at the actual torque, speed and temperature." },
      { title: "Wear-resistant POM", purpose: "For sliding contact and friction or wear concerns.", check: "Test the actual mating part and lubrication. Friction data alone does not predict gear life." },
      { title: "Reinforced POM", purpose: "For parts where stiffness and load deformation lead the review.", check: "Check fiber-related shrinkage and warpage, as well as wear on the mating part." },
    ],
    suitabilityLabel: "Best suited to",
    validationLabel: "Key validation",
    compareDetails: "Selection checks and limitations",
    caseLabel: "Application case", caseTitle: "ETM 100P for massage-chair armrest gears",
    caseSummary: `To address armrest gear wear in a massage-chair project, ${test.grade} was evaluated in an assembled mechanism. A customer-side test of ${test.sampleQuantity} sample at ${test.loadPerSideKg}\u00a0kg per side, ${test.temperatureC}\u00a0±\u00a0${test.temperatureToleranceC}°C and ${test.relativeHumidityPercent}%\u00a0RH recorded a pass against the ${cycles}-cycle requirement, followed by small-gear wear and slipping in further testing. The result applies to that sample and those conditions.`,
    caseAction: "Read the Case Study",
    inquiryTitle: "Discuss your gear requirements",
    inquirySummary: "Share your current material, main concern and known operating conditions. We can help narrow the material options and identify what your assembly needs to validate.",
    checklist: "Full project information checklist",
    technicalTitle: "Working through a gear problem?",
    technicalIntro: "Open the topic that matches your current design or test question.",
    diagnosis: "Wear, noise, distortion or premature failure",
    applications: "Related applications", resources: "Gear selection and testing guides",
  },
  zh: {
    summary: "为注塑传动齿轮、蜗轮和小型齿轮机构选择 POM 材料。从零件的承载、磨损或尺寸问题出发，找到值得验证的材料方向。",
    secondary: "比较材料方向",
    materialsTitle: "你的齿轮，先看哪类 POM？",
    materialsIntro: "先缩小材料范围，再结合实际齿轮组件验证具体牌号。",
    directions: [
      { title: "平衡型 POM", purpose: "用于常规传动，兼顾尺寸稳定与综合性能。", check: "在实际扭矩、转速和温度下，验证疲劳表现与尺寸稳定性。" },
      { title: "耐磨型 POM", purpose: "存在滑动接触，重点关注摩擦与磨损。", check: "使用实际配对件与润滑条件测试，摩擦系数不能直接换算齿轮寿命。" },
      { title: "增强型 POM", purpose: "重点关注刚性，以及负载下的变形。", check: "同时检查纤维取向引起的收缩、翘曲，以及对配对件的磨损。" },
    ],
    suitabilityLabel: "适用场景",
    validationLabel: "验证重点",
    compareDetails: "选型注意事项与适用边界",
    caseLabel: "应用案例", caseTitle: "ETM 100P 用于按摩椅扶手齿轮",
    caseSummary: `为应对按摩椅扶手齿轮的磨损问题，项目采用 ${test.grade} 进行组件验证。客户侧 ${test.sampleQuantity} 件样件在左右各 ${test.loadPerSideKg}\u00a0kg、${test.temperatureC}\u00a0±\u00a0${test.temperatureToleranceC}°C、${test.relativeHumidityPercent}%\u00a0RH 条件下，报告判定满足 ${cycles}\u00a0次项目要求；继续运行后记录到小齿轮磨损打滑，结果限于该次样件与工况。`,
    caseAction: "查看完整案例",
    inquiryTitle: "确认齿轮选材与验证重点",
    inquirySummary: "说明现用材料、主要问题和已知工况，我们会协助缩小材料范围，并明确组件还需要验证哪些项目。",
    checklist: "展开完整项目资料清单",
    technicalTitle: "正在排查齿轮问题？",
    technicalIntro: "按当前遇到的问题，展开相应内容。",
    diagnosis: "磨损、噪声、变形与提前失效",
    applications: "相关应用", resources: "齿轮选材与验证指南",
  },
} as const;
