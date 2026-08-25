import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { applications } from "../src/data/applications.ts";
import {
  applicationInlineGroupPresentations,
  applicationSystemSectionPresentations,
  resolveApplicationInlinePartGroups,
  resolveApplicationInlinePartGroupsFromPresentation,
} from "../src/data/applicationSystemPresentation.ts";
import { applicationComponentRelations } from "../src/data/applicationComponentRelations.ts";
import {
  applicationIdentityRegistry,
  componentCandidates,
  partClassifications,
} from "../src/data/partTaxonomy.ts";
import {
  applicationSystemTopicPromotions,
  systemTopicReleases,
} from "../src/data/systemTopicReleases.ts";
import { systemTopics } from "../src/data/systemTopics.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");
const locales = ["en", "de", "fr", "pt-BR", "zh-CN"];
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
const expectedGroups = {
  automotive: [
    [
      "automotive-fuel-management",
      ["fuel-pump-assembly", "fuel-filter-element", "fuel-cap-assembly"],
    ],
    [
      "automotive-visibility-window",
      [
        "window-regulator",
        "wiper-motor-gear",
        "interior-rearview-mirror-base",
        "wiper-arm-components",
      ],
    ],
    [
      "automotive-seat-adjustment-guidance",
      ["seat-guide-ring"],
    ],
    ["automotive-shift-control", ["gear-shift-seat"]],
    ["automotive-brake-actuation", ["ev-brake-component"]],
    [
      "automotive-retention-latching",
      ["automotive-clips-and-fasteners", "safety-latch"],
    ],
  ],
  electronics: [
    [
      "electronics-interconnects",
      ["connector-housing", "terminal-housing", "panel-mount-signal-connector"],
    ],
    [
      "electronics-drive-motion",
      [
        "copier-drive-gear",
        "toner-cartridge-drive-components",
        "robotic-joint-gearbox",
      ],
    ],
    [
      "electronics-esd-handling",
      ["ic-handling-tray", "antistatic-precision-component"],
    ],
  ],
  "conveyor-automation": [
    [
      "conveyor-surface-chain-path",
      [
        "mini-conveyor-chain-plate",
        "high-load-conveyor-chain",
        "conveyor-segment",
        "antistatic-anti-slip-conveyor-chain-plate",
        "conveyor-panel",
        "conductive-conveyor-chain-plate",
      ],
    ],
    [
      "conveyor-rolling-support",
      ["conveyor-roller", "conveyor-chain-plate-bracket"],
    ],
  ],
  "motion-components": [
    [
      "motion-transmission-actuation",
      ["precision-gear", "worm-gear", "cam"],
    ],
    ["motion-rotary-support", ["roller", "bushing", "sleeve"]],
    ["motion-linear-guidance", ["guide-ring", "sliding-block"]],
  ],
  "water-control": [
    [
      "water-valve-internals-actuation",
      [
        "valve-spool-assembly",
        "valve-cartridge",
        "valve-internal-parts",
        "valve-component",
        "thermostatic-valve-body",
      ],
    ],
    ["water-rolling-guidance", ["guide-wheel"]],
    ["water-valve-housing", ["valve-housing-component"]],
    ["water-pumping", ["pump-impeller"]],
  ],
  "washing-machine-components": [
    [
      "washing-machine-fill-and-distribution",
      ["water-guide-pipe", "inlet-valve-connecting-pipe"],
    ],
    [
      "washing-machine-drum-drive",
      ["drum-drive-gear", "transmission-wheel", "reduction-gear-assembly"],
    ],
    [
      "washing-machine-drainage",
      ["drain-pump-housing", "drain-control-valve", "drain-valve-assembly"],
    ],
  ],
  "outdoor-equipment": [
    [
      "outdoor-irrigation",
      ["sprinkler-head", "irrigation-connector", "irrigation-pulsator-wheel"],
    ],
    ["outdoor-cutting-line-feed", ["trimmer-spool", "trimmer-drive-head"]],
    ["outdoor-drive-starting", ["lawn-mower-gear", "recoil-starter-assembly"]],
    ["outdoor-housing-retention", ["weather-resistant-housing-clip"]],
  ],
  "textile-machinery": [
    [
      "textile-yarn-path-guidance",
      ["yarn-guide", "air-spinning-guide", "textile-guide-wheel"],
    ],
    [
      "textile-shedding-heddle-motion",
      ["heddle-wire-bundle", "heddle-lifter"],
    ],
    ["textile-linear-guidance", ["textile-sliding-block"]],
    [
      "textile-package-spindle-support",
      ["bobbin-holder", "textile-spindle-support"],
    ],
  ],
};
const expectedSemanticCorrectionLabels = {
  automotive: {
    "automotive-seat-adjustment-guidance": {
      en: "Seat Adjustment & Guidance",
      de: "Sitzverstellung und -führung",
      fr: "Réglage et guidage du siège",
      "pt-BR": "Ajuste e guia do banco",
      "zh-CN": "座椅调节与导向",
    },
    "automotive-shift-control": {
      en: "Shift Control",
      de: "Schaltbetätigung",
      fr: "Commande de changement de vitesse",
      "pt-BR": "Controle de seleção de marchas",
      "zh-CN": "换挡控制",
    },
    "automotive-brake-actuation": {
      en: "Brake Actuation",
      de: "Bremsbetätigung",
      fr: "Actionnement du frein",
      "pt-BR": "Acionamento do freio",
      "zh-CN": "制动执行",
    },
  },
  "water-control": {
    "water-rolling-guidance": {
      en: "Rolling Guidance",
      de: "Rollenführung",
      fr: "Guidage par roulement",
      "pt-BR": "Guia por rolagem",
      "zh-CN": "滚动导向",
    },
    "water-valve-housing": {
      en: "Valve Housing",
      de: "Ventilgehäuse",
      fr: "Corps de vanne",
      "pt-BR": "Carcaça da válvula",
      "zh-CN": "阀门壳体",
    },
  },
  "textile-machinery": {
    "textile-shedding-heddle-motion": {
      en: "Shedding & Heddle Motion",
      de: "Fachbildung und Litzenbewegung",
      fr: "Formation de la foule et mouvement des lisses",
      "pt-BR": "Formação da cala e movimento dos liços",
      "zh-CN": "开口与综丝运动",
    },
    "textile-linear-guidance": {
      en: "Linear Guidance",
      de: "Linearführung",
      fr: "Guidage linéaire",
      "pt-BR": "Guia linear",
      "zh-CN": "直线导向",
    },
  },
};

test("registers exactly the eight reviewed Application inline-group capabilities", () => {
  const slugByApplicationId = new Map(
    applicationIdentityRegistry.map((application) => [
      application.id,
      application.slug,
    ]),
  );

  assert.deepEqual(
    applicationInlineGroupPresentations.map((presentation) =>
      slugByApplicationId.get(presentation.applicationId),
    ),
    reviewedSlugs,
  );
  assert.equal(applicationInlineGroupPresentations.length, 8);
  assert.equal(
    applicationInlineGroupPresentations.reduce(
      (total, presentation) => total + presentation.groups.length,
      0,
    ),
    29,
  );
});

test("covers all 68 canonical Parts exactly once with explicit reviewed membership", () => {
  let canonicalPartCount = 0;
  let groupedPartCount = 0;

  for (const application of applications) {
    const groups = resolveApplicationInlinePartGroups(application, "en");
    assert.ok(groups, application.slug);
    assert.deepEqual(
      groups.map((group) => [String(group.id), [...group.partIds]]),
      expectedGroups[application.slug],
      application.slug,
    );

    const canonicalPartIds = application.parts.map((part) => part.id);
    const groupedPartIds = groups.flatMap((group) => group.partIds);
    canonicalPartCount += canonicalPartIds.length;
    groupedPartCount += groupedPartIds.length;

    assert.equal(new Set(groupedPartIds).size, groupedPartIds.length);
    assert.deepEqual([...groupedPartIds].sort(), [...canonicalPartIds].sort());
  }

  assert.equal(canonicalPartCount, 68);
  assert.equal(groupedPartCount, 68);
});

test("keeps group order and membership identical while supplying five explicit locale labels", () => {
  for (const application of applications) {
    const englishGroups = resolveApplicationInlinePartGroups(application, "en");
    assert.ok(englishGroups);

    for (const locale of locales) {
      const groups = resolveApplicationInlinePartGroups(application, locale);
      assert.ok(groups, `${application.slug}::${locale}`);
      assert.deepEqual(
        groups.map((group) => [String(group.id), [...group.partIds]]),
        englishGroups.map((group) => [String(group.id), [...group.partIds]]),
      );
      assert.equal(groups.every((group) => group.label.trim().length > 0), true);
    }
  }
});

test("locks the seven human-approved semantic correction labels across all locales", () => {
  for (const [slug, expectedLabelsByGroupId] of Object.entries(
    expectedSemanticCorrectionLabels,
  )) {
    const application = applications.find((candidate) => candidate.slug === slug);
    assert.ok(application, slug);

    for (const locale of locales) {
      const groups = resolveApplicationInlinePartGroups(application, locale);
      assert.ok(groups, `${slug}::${locale}`);

      for (const [groupId, expectedLabels] of Object.entries(
        expectedLabelsByGroupId,
      )) {
        assert.equal(
          groups.find((group) => String(group.id) === groupId)?.label,
          expectedLabels[locale],
          `${slug}::${groupId}::${locale}`,
        );
      }
    }
  }
});

test("preserves the Washing Machine canonical section-only 2 / 3 / 3 contract", () => {
  const washingMachine = applications.find(
    (application) => application.slug === "washing-machine-components",
  );
  assert.ok(washingMachine);

  const groups = resolveApplicationInlinePartGroups(washingMachine, "en");
  assert.deepEqual(groups?.map((group) => group.partIds.length), [2, 3, 3]);
  assert.deepEqual(
    groups?.map((group) => String(group.id)),
    expectedGroups["washing-machine-components"].map(([id]) => id),
  );
  assert.equal(applicationSystemSectionPresentations.length, 1);
});

test("fails closed for duplicate, orphan, unknown, and missing-locale presentation data", () => {
  const automotive = applications.find(
    (application) => application.slug === "automotive",
  );
  const automotivePresentation = applicationInlineGroupPresentations[0];
  assert.ok(automotive);

  const withDuplicate = {
    ...automotivePresentation,
    groups: automotivePresentation.groups.map((group, index) =>
      index === 1 && group.source === "reviewed-part-membership"
        ? { ...group, partIds: [...group.partIds, "fuel-pump-assembly"] }
        : group,
    ),
  };
  const withOrphan = {
    ...automotivePresentation,
    groups: automotivePresentation.groups.slice(0, -1),
  };
  const withUnknown = {
    ...automotivePresentation,
    groups: automotivePresentation.groups.map((group, index) =>
      index === 0 && group.source === "reviewed-part-membership"
        ? { ...group, partIds: ["unknown-part", ...group.partIds.slice(1)] }
        : group,
    ),
  };
  const withMissingLocale = {
    ...automotivePresentation,
    groups: automotivePresentation.groups.map((group, index) =>
      index === 0 && group.source === "reviewed-part-membership"
        ? { ...group, labels: { ...group.labels, fr: "" } }
        : group,
    ),
  };

  assert.equal(
    resolveApplicationInlinePartGroupsFromPresentation(
      automotive,
      "en",
      withDuplicate,
    ),
    undefined,
  );
  assert.equal(
    resolveApplicationInlinePartGroupsFromPresentation(
      automotive,
      "en",
      withOrphan,
    ),
    undefined,
  );
  assert.equal(
    resolveApplicationInlinePartGroupsFromPresentation(
      automotive,
      "en",
      withUnknown,
    ),
    undefined,
  );
  assert.equal(
    resolveApplicationInlinePartGroupsFromPresentation(
      automotive,
      "fr",
      withMissingLocale,
    ),
    undefined,
  );
  assert.equal(
    resolveApplicationInlinePartGroups(
      { ...automotive, slug: "unreviewed-ninth-application" },
      "en",
    ),
    undefined,
  );
});

test("contains no fabricated catch-all group and creates no route or SEO destination", () => {
  const serialized = JSON.stringify(applicationInlineGroupPresentations);
  assert.doesNotMatch(serialized, /other|miscellaneous|general|uncategorized/i);

  const groupingSource = readProjectFile(
    "src/data/applicationSystemPresentation.ts",
  );
  assert.doesNotMatch(
    groupingSource,
    /topicSlug|topicUrl|indexable|releaseState|hreflang|sitemap/i,
  );
});

test("preserves Component coverage and the Valve Flow Control preview release gates", () => {
  assert.equal(
    partClassifications.filter(
      (classification) => classification.classificationStatus === "mapped",
    ).length,
    36,
  );
  assert.equal(componentCandidates.length, 8);
  assert.equal(applicationComponentRelations.length, 15);
  assert.equal(
    applicationComponentRelations.reduce(
      (total, relation) =>
        total +
        (relation.relationType === "part-example" ? relation.partIds.length : 0),
      0,
    ),
    29,
  );
  assert.deepEqual(
    systemTopics.map((topic) => topic.editorialStatus),
    ["draft"],
  );
  assert.deepEqual(
    systemTopicReleases.map((release) =>
      release.localeReleases.map((localeRelease) => [
        localeRelease.status,
        localeRelease.indexable,
        localeRelease.includeInSitemap,
        localeRelease.includeInAlternates,
      ]),
    ),
    [[["preview", false, false, false]]],
  );
  assert.deepEqual(
    applicationSystemTopicPromotions.map((promotion) => promotion.status),
    ["preview"],
  );
});
