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
      heading: "ETM 100P for massage-chair armrest gears",
      label: "Application case · POM gears",
      conditions: "Customer validation in the assembled mechanism", method: "What the test evaluated", result: "Assembly test result",
      scope: "Production adoption and repeat orders", back: "Precision plastic gears", contactTitle: "Evaluating a similar gear mechanism?",
    },
    eyebrow: "Component test example",
    title: "Gear endurance in an armrest mechanism",
    introduction: `A customer needed better wear performance from the gears in a massage-chair armrest mechanism. An assembly using Taiyi Polymer ${test.grade} POM gears met the customer's endurance requirement. The customer subsequently adopted the material for production and placed repeat orders.`,
    story: {
      challengeTitle: "The challenge: armrest gear wear",
      challenge: "Insufficient gear wear resistance was the starting point for this project. The customer needed to assess the material in the working armrest assembly, with a defined endurance requirement under load.",
      solutionTitle: `The material solution: ${test.grade} POM gears`,
      solution: `The project used Taiyi Polymer ${test.grade} for the POM gears in the armrest mechanism. Those gears were evaluated as part of the assembled left and right mechanisms, connecting the material application to the customer's operating and acceptance requirements.`,
      validation: `The customer first checked that the mechanisms functioned normally, then applied ${test.loadPerSideKg}\u00a0kg to each side and ran them on a dedicated fixture. Daily inspections recorded abnormalities, and the assembly was assessed against the project's ${cycles}-cycle requirement.`,
      takeaway: `Following the material application and assembly validation, the customer adopted ${test.grade} for production and placed repeat orders. The project progressed from an identified wear concern to production use.`,
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
      heading: "按摩椅扶手齿轮：ETM 100P 的应用与量产",
      label: "应用案例 · POM 齿轮",
      conditions: "客户验证：装入实际机构后带载运行", method: "这次试验验证了什么", result: "组件试验结果",
      scope: "后续应用：量产与复购", back: "精密塑料齿轮", contactTitle: "你也在评估类似的齿轮机构？",
    },
    eyebrow: "组件试验案例",
    title: "扶手翻转机构的齿轮寿命验证",
    introduction: `针对按摩椅扶手齿轮耐磨表现不足的问题，客户将台益 ${test.grade} POM 用于扶手翻转机构齿轮。机构样件通过了客户的寿命验收，该材料随后用于量产，并形成复购。`,
    story: {
      challengeTitle: "客户问题：扶手齿轮磨损",
      challenge: "齿轮耐磨表现不足是这次项目的起点。客户需要确认材料用于扶手翻转机构后，能否在带载运行中达到项目规定的寿命要求，因而将实际组件表现作为验收依据。",
      solutionTitle: `材料方案：${test.grade}`,
      solution: `本项目采用台益 ${test.grade} 作为扶手翻转机构的 POM 齿轮材料，并将齿轮装入左右机构进行评估。材料应用与机构运行条件结合起来，以客户实际组件的试验结果判断这次方案能否达到验收要求。`,
      validation: `客户先确认左右翻转机构功能正常，再分别加载 ${test.loadPerSideKg}\u00a0kg，使用专检具进行带载循环。试验过程中每日点检并记录异常，按项目规定的 ${cycles}\u00a0次循环要求判定组件是否合格。`,
      takeaway: `在材料应用和组件验证之后，客户将 ${test.grade} 用于该项目量产，并进行了后续复购。围绕齿轮耐磨问题开展的材料应用，由实际机构验证进入了生产使用。`,
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
