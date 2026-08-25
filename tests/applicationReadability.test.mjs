import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { translateEnglishApplicationText } from "../src/i18n/englishApplicationNarrative.ts";
import zhCNApplicationDetailsA from "../src/i18n/messages/zh-CN-application-details-a.ts";
import zhCNApplicationDetailsB from "../src/i18n/messages/zh-CN-application-details-b.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");

test("application detail renders each part and material card from one semantic list", () => {
  const pageSource = readProjectFile(
    "src/components/localized/LocalizedApplicationDetailPage.tsx",
  );
  const expandableSource = readProjectFile(
    "src/components/ApplicationExpandableGrid.tsx",
  );
  const styleSource = readProjectFile("src/app/(en)/styles/applications.css");

  assert.equal(
    pageSource.match(/\{applicationUseCards\.map\(\(card\) => \(/g)?.length,
    1,
  );
  assert.equal(pageSource.match(/materialDirectionCards\.map/g)?.length, 1);
  assert.equal(pageSource.match(/<ApplicationExpandableGrid/g)?.length, 2);
  assert.doesNotMatch(
    pageSource,
    /application-use-grid-desktop|application-use-mobile-content|application-notes-grid-desktop|application-notes-mobile-content|application-mobile-disclosure/,
  );
  assert.match(expandableSource, /Children\.toArray\(children\)/);
  assert.match(expandableSource, /items\.slice\(0, initialVisibleCount\)/);
  assert.match(expandableSource, /items\.slice\(initialVisibleCount\)/);
  assert.match(styleSource, /application-expandable-toggle\s*~\s*\*/);
});

test("reviewed English application overrides remove confirmed machine phrasing", () => {
  const reviewedCopy = [
    translateEnglishApplicationText(
      "卡扣、紧固件或受冲击部件需要更高韧性时进入候选；仍需结合缺口、温度、载荷和实际部件确认。",
    ),
    translateEnglishApplicationText(
      "启动阻力、粘滑、摩擦噪声或配合表面顺畅性影响机构表现时进入候选。",
    ),
    translateEnglishApplicationText(
      "滑动、旋转或配合界面需要降低摩擦、噪声或粘滑时进入候选，并结合电气要求判断。",
    ),
    translateEnglishApplicationText(
      "现有方向无法同时满足电气、机械、颜色或加工目标时再讨论调整；若阻燃、高温或法规要求主导，应先确认 POM 是否仍适合作为候选。",
    ),
    translateEnglishApplicationText(
      "部件存在持续或周期性日照，并已明确暴露时长、颜色、外观或性能保持目标时进入候选，仍需按牌号与测试条件确认。",
    ),
    translateEnglishApplicationText(
      "当暴露、颜色、冲击、磨损、介质和尺寸要求同时存在时，根据明确的优先级建立定制方向；若阻燃或高温是主导条件，应先判断是否仍适合 POM。",
    ),
  ].join(" ");

  assert.doesNotMatch(
    reviewedCopy,
    /fasteners, fasteners|sticky slippage|slippery slipping|exposure exposure|; If/,
  );
  assert.match(reviewedCopy, /stick-slip/);
  assert.match(reviewedCopy, /appropriate candidate/);
});

test("A3 exact relationships use canonical English component terms", () => {
  const expectedTerms = new Map([
    ["雨刮电机齿轮", "Wiper Motor Gear"],
    ["复印机传动齿轮", "Copier Drive Gear"],
    ["精密齿轮", "Precision Gear"],
    ["蜗轮", "Worm Gear"],
    ["滚筒传动齿轮", "Drum Drive Gear"],
    ["减速齿轮总成", "Reduction Gear Assembly"],
    ["割草机齿轮", "Lawn Mower Gear"],
    ["轴套", "Bushing"],
    ["套筒", "Sleeve"],
    ["导向环", "Guide Ring"],
    ["滑块", "Sliding Block"],
    ["座椅导向环", "Seat Guide Ring"],
    ["小型输送链板", "Mini Conveyor Chain Plate"],
    ["高载荷输送链", "High-Load Conveyor Chain"],
    ["输送带分段模块", "Conveyor Segment"],
    ["抗静电防滑输送链板", "Antistatic Anti-Slip Conveyor Chain Plate"],
    ["输送滚轮", "Conveyor Roller"],
    ["输送链板支架", "Conveyor Chain Plate Bracket"],
    ["导电输送链板", "Conductive Conveyor Chain Plate"],
    ["阀芯总成", "Valve Spool Assembly"],
    ["阀筒", "Valve Cartridge"],
    ["阀门内部部件", "Valve Internal Parts"],
    ["导向轮", "Guide Wheel"],
    ["导纱器", "Yarn Guide"],
    ["提综器", "Heddle Lifter"],
    ["气流纺导向件", "Air-Spinning Guide"],
    ["纺织导向轮", "Textile Guide Wheel"],
    ["纺锭支撑件", "Textile Spindle Support"],
    ["IC 搬运托盘", "IC Handling Tray"],
  ]);

  for (const [source, expected] of expectedTerms) {
    assert.equal(translateEnglishApplicationText(source), expected);
  }
});

test("reviewed Application density rollout removes only family-wide repeated framing", () => {
  const pageSource = readProjectFile(
    "src/components/localized/LocalizedApplicationDetailPage.tsx",
  );
  const secondaryNavSource = readProjectFile(
    "src/components/SecondarySectionNav.tsx",
  );
  const applicationDetails = {
    ...zhCNApplicationDetailsA,
    ...zhCNApplicationDetailsB,
  };
  const reviewedSlugs = [
    "automotive",
    "electronics",
    "conveyor-automation",
    "motion-components",
    "water-control",
    "washing-machine-components",
    "outdoor-equipment",
    "textile-machinery",
  ];

  assert.match(
    pageSource,
    /reviewedApplicationDensitySlugs = new Set<string>/,
  );
  assert.doesNotMatch(pageSource, /isWaterControlCopyPilot/);
  assert.deepEqual(Object.keys(applicationDetails).sort(), reviewedSlugs.sort());
  for (const slug of reviewedSlugs) {
    assert.match(pageSource, new RegExp(`"${slug}"`));
  }
  assert.match(secondaryNavSource, /subtitle\?: string/);
  assert.match(secondaryNavSource, /\{subtitle \? \(/);
  assert.match(pageSource, /cardLabel\?: string/);
  assert.match(
    pageSource,
    /showKeyUseLabel=\{!usesReviewedApplicationDensity\}/,
  );

  for (const detail of Object.values(applicationDetails)) {
    assert.equal(detail.detailUi?.hero?.primaryAction, "讨论您的应用");
    assert.equal(detail.detailUi?.evaluation?.action, "讨论您的应用");
    assert.equal(detail.selectionItems?.length, 4);
  }
  assert.equal(
    translateEnglishApplicationText("讨论您的应用"),
    "Discuss Your Application",
  );

  assert.equal(
    Object.values(applicationDetails).reduce(
      (total, detail) => total + detail.parts.length,
      0,
    ),
    68,
  );
  assert.equal(
    Object.values(applicationDetails).reduce(
      (total, detail) => total + detail.materialDirections.length,
      0,
    ),
    33,
  );
  for (const detail of Object.values(applicationDetails)) {
    assert.match(detail.detailUi?.materials?.description ?? "", /不代表/);
    assert.ok(detail.detailUi?.evaluation?.description);
  }
});
