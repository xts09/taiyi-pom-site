export const gearEnduranceTest = {
  id: "etm-100p-gear-endurance",
  grade: "ETM 100P",
  sampleQuantity: 1,
  loadPerSideKg: 20,
  temperatureC: 25,
  temperatureToleranceC: 5,
  relativeHumidityPercent: 45,
  projectRequirementCycles: 27_500,
  componentPath: "/components/precision-plastic-gears",
  casePath: "/case-studies/etm-100p-armrest-gear-endurance",
  guidePath: "/resources/pom-gear-material-selection",
  interpretationId: "gear-test-interpretation",
} as const;

const test = gearEnduranceTest;
const cycles = new Intl.NumberFormat("en-US").format(test.projectRequirementCycles);

const evidenceCopy = {
  en: {
    page: {
      title: "ETM 100P armrest gear endurance case | Taiyi Polymer",
      description: "An anonymous ETM 100P POM gear assembly case: 20 kg load per side, a 27,500-cycle project requirement and subsequent wear observations from one reported sample.",
      heading: "ETM 100P in an armrest gear mechanism",
      label: "Application case · POM gears",
      conditions: "Material application and validation", method: "What the test evaluated", result: "Project result",
      scope: "What this application established", back: "Precision plastic gears", contactTitle: "Evaluating a similar gear mechanism?",
    },
    eyebrow: "Component test example",
    title: "Gear endurance in an armrest mechanism",
    introduction: `A massage-chair armrest project used Taiyi Polymer ${test.grade} POM gears to address gear wear. The tested assembly met the project's ${cycles}-cycle requirement in the customer's loaded endurance test.`,
    story: {
      challengeTitle: "The challenge: armrest gear wear",
      challenge: `The customer wanted to address wear in the armrest rotation gears. The project needed to establish whether the assembled mechanisms could meet a ${cycles}-cycle requirement with ${test.loadPerSideKg}\u00a0kg applied to each side.`,
      validation: `The project used ${test.grade} for the POM gears in the armrest mechanism. The customer ran the left and right mechanisms on a dedicated fixture, checking them daily and recording any abnormalities.`,
      takeaway: `The tested assembly with ${test.grade} gears met this project's acceptance requirement. Subsequent wear observations identified the small gears as a part requiring further attention. For a similar mechanism, this case provides an assembly-level reference to assess alongside the actual load, motion and condition of each gear stage.`,
    },
    facts: [
      { label: "Load per mechanism", value: `${test.loadPerSideKg} kg on each side` },
      { label: "Test environment", value: `${test.temperatureC}°C ± ${test.temperatureToleranceC}°C / ${test.relativeHumidityPercent}% RH` },
      { label: "Reported sample quantity", value: `${test.sampleQuantity} pc` },
      { label: "Project requirement", value: `${cycles} cycles` },
    ],
    procedure: `The report recorded a pass against the project requirement of ${cycles} cycles for the tested assembly.`,
    observations: "Subsequent testing beyond that requirement recorded wear-induced slipping of the small gears, while the second-stage gears remained functional at the recorded inspection points.",
    scope: "These results apply to the historical sample and test conditions. Another gear design requires validation with its own load, motion, mating components and lubrication.",
    action: "Discuss Your Gear Application",
    guideAction: "How to interpret gear tests",
    application: "Massage-chair armrest gear mechanism",
    interpretation: {
      title: "Separate acceptance criteria from failure observations",
      navLabel: "Reading a test result",
      paragraphs: [
        "Passing a specified cycle requirement and documenting later wear are different records. In one customer-side POM gear-assembly test, the report recorded a pass against the project requirement alongside later observations of small-gear slipping and the functional condition of the second-stage gears.",
        "For a comparable test, define load, motion, mating components, lubrication, environment, sample quantity, inspection items and failure criteria. Record the condition of each gear stage so that the findings can inform material and design reviews.",
      ],
      caseAction: "Read the armrest gear test example",
    },
  },
  zh: {
    page: {
      title: "ETM 100P 扶手翻转机构齿轮寿命试验案例 | Taiyi Polymer",
      description: "ETM 100P POM 齿轮组件匿名案例：左右各 20 kg 负载、27,500 次项目要求，以及一个报告样件在后续运行中的磨损观察。",
      heading: "ETM 100P 用于扶手翻转机构齿轮",
      label: "应用案例 · POM 齿轮",
      conditions: "材料应用与验证", method: "这次试验验证了什么", result: "项目结果",
      scope: "这项应用验证说明了什么", back: "精密塑料齿轮", contactTitle: "你也在评估类似的齿轮机构？",
    },
    eyebrow: "组件试验案例",
    title: "扶手翻转机构的齿轮寿命验证",
    introduction: `为解决按摩椅扶手齿轮的磨损问题，项目将台益 ${test.grade} 用于机构齿轮。客户带载测试的样件通过了 ${cycles}\u00a0次项目要求。`,
    story: {
      challengeTitle: "客户问题：扶手齿轮磨损",
      challenge: `客户希望解决扶手翻转机构的齿轮磨损问题。项目需要确认，齿轮装入机构后，能否在左右各 ${test.loadPerSideKg}\u00a0kg 负载下达到 ${cycles}\u00a0次循环的验收要求。`,
      validation: `项目将 ${test.grade} 用于扶手翻转机构的 POM 齿轮，随后进行组件验证。左右机构使用专检具运行，客户每日点检并记录异常。`,
      takeaway: `采用 ${test.grade} 齿轮的该机构样件达到了本项目的验收要求，后续观察也明确了仍需关注的小齿轮磨损部位。这为类似机构的材料评估提供了一项实际组件记录，使用时应同时对照负载、动作与各级齿轮状态。`,
    },
    facts: [
      { label: "机构负载", value: `左右各 ${test.loadPerSideKg} kg` },
      { label: "试验环境", value: `${test.temperatureC}°C ± ${test.temperatureToleranceC}°C / ${test.relativeHumidityPercent}% RH` },
      { label: "报告记载的试验数量", value: `${test.sampleQuantity} pc` },
      { label: "项目要求", value: `${cycles} 次` },
    ],
    procedure: `报告判定该样件满足项目规定的 ${cycles}\u00a0次要求，试验结论为合格。`,
    observations: "超过项目要求后的试验记录显示，小齿轮出现磨损打滑，二级齿轮在所记录的检查节点仍功能正常。",
    scope: "结果适用于该次历史样件和试验条件。其他齿轮设计仍需结合实际负载、运动方式、配对件与润滑条件验证。",
    action: "讨论齿轮工况与验证要求",
    guideAction: "了解如何解读齿轮试验",
    application: "按摩椅扶手翻转机构齿轮",
    interpretation: {
      title: "把验收要求和失效观察分开记录",
      navLabel: "试验结果解读",
      paragraphs: [
        "组件通过规定次数的验收，与继续运行后何时出现磨损，是两个不同的记录。在一项客户侧 POM 齿轮组件试验中，报告判定样件满足项目规定的次数要求，同时记录了后续小齿轮磨损打滑及二级齿轮的功能状态。",
        "制定类似试验时，应写明负载、运动方式、配对件、润滑、环境、样本数量、点检项目与失效判据。分别记录各级齿轮状态，才能让结果用于后续选材和结构评估。",
      ],
      caseAction: "查看扶手翻转机构齿轮试验案例",
    },
  },
};

export function getGearEnduranceEvidence(localeSegment?: string) {
  if (localeSegment && localeSegment !== "zh") return undefined;
  return evidenceCopy[localeSegment === "zh" ? "zh" : "en"];
}
