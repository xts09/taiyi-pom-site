import type { MessageLocale } from "../i18n/config";
import { electronicsPageDesign } from "./electronicsPageDesign";
import { conveyorPageDesign, motionPageDesign } from "./industrialApplicationPageDesign";
import { washingMachinePageDesign } from "./washingMachinePageDesign";
import { textilePageDesign } from "./textileApplicationPageDesign";
import { outdoorPageDesign } from "./outdoorApplicationPageDesign";
import { waterControlPageDesign } from "./waterControlApplicationPageDesign";

export type ApplicationPartGroupCopy = {
  title: string;
  compactTitle: string;
  scope: string;
  intro: string;
};

export type ApplicationPartGroupsCopy = {
  sectionTitle: string;
  tabsLabel: string;
  partsLabel: string;
  imageLabel: string;
  materialsAction: string;
  groups: Record<string, ApplicationPartGroupCopy>;
};

type ApplicationPartGroupPresentation = {
  copy: Record<MessageLocale, ApplicationPartGroupsCopy & { driveMaterialTitle: string }>;
  idPrefix: string;
  defaultGroupId: string;
  materialPathsByGroup: Record<string, readonly string[]>;
  materialSourceIndicesByGroup?: Record<string, readonly number[]>;
};

const wearPOM = "/products/categories/wear-resistant-low-friction-pom-compound";
const reinforcedPOM = "/products/categories/glass-fiber-reinforced-pom-compound";

export const applicationPartGroupPresentations: Partial<Record<string, ApplicationPartGroupPresentation>> = {
  electronics: {
    copy: electronicsPageDesign,
    idPrefix: "electronics",
    defaultGroupId: "electronics-drive-motion",
    materialPathsByGroup: {
      "electronics-interconnects": [],
      "electronics-drive-motion": [wearPOM],
      "electronics-esd-handling": [
        "/products/categories/conductive-antistatic-pom-compound",
        "/products/categories/carbon-fiber-reinforced-pom-compound",
      ],
    },
  },
  "washing-machine-components": {
    copy: washingMachinePageDesign,
    idPrefix: "washing-machine",
    defaultGroupId: "washing-machine-drum-drive",
    materialPathsByGroup: {
      "washing-machine-fill-and-distribution": ["/products/categories/base-pom-resin"],
      "washing-machine-drum-drive": [wearPOM, reinforcedPOM],
      "washing-machine-drainage": [wearPOM, reinforcedPOM],
    },
  },
  "motion-components": {
    copy: motionPageDesign,
    idPrefix: "motion",
    defaultGroupId: "motion-transmission-actuation",
    materialPathsByGroup: {
      "motion-transmission-actuation": ["/wear-resistant-low-friction-pom", wearPOM],
      "motion-rotary-support": ["/wear-resistant-low-friction-pom", wearPOM],
      "motion-linear-guidance": ["/wear-resistant-low-friction-pom", wearPOM],
    },
  },
  "conveyor-automation": {
    copy: conveyorPageDesign,
    idPrefix: "conveyor",
    defaultGroupId: "conveyor-surface-chain-path",
    materialPathsByGroup: {
      "conveyor-surface-chain-path": [wearPOM, "/products/categories/conductive-antistatic-pom-compound", "/contact"],
      "conveyor-rolling-support": [wearPOM, "/contact"],
    },
  },
  "textile-machinery": {
    copy: textilePageDesign,
    idPrefix: "textile",
    defaultGroupId: "textile-yarn-path-guidance",
    materialPathsByGroup: {
      "textile-yarn-path-guidance": [wearPOM],
      "textile-shedding-heddle-motion": [wearPOM, reinforcedPOM],
      "textile-linear-guidance": [wearPOM],
      "textile-package-spindle-support": [wearPOM, reinforcedPOM],
    },
    materialSourceIndicesByGroup: {
      "textile-yarn-path-guidance": [0, 1],
      "textile-shedding-heddle-motion": [0, 2],
      "textile-linear-guidance": [0, 1],
      "textile-package-spindle-support": [0, 2],
    },
  },
  "outdoor-equipment": {
    copy: outdoorPageDesign,
    idPrefix: "outdoor",
    defaultGroupId: "outdoor-irrigation",
    materialPathsByGroup: {
      "outdoor-irrigation": ["/products/categories/uv-resistant-pom-compound", wearPOM],
      "outdoor-cutting-line-feed": ["/products/categories/high-impact-pom-compound", wearPOM],
      "outdoor-drive-starting": ["/products/categories/high-impact-pom-compound", wearPOM],
      "outdoor-housing-retention": ["/products/categories/high-impact-pom-compound", "/products/categories/uv-resistant-pom-compound"],
    },
    materialSourceIndicesByGroup: {
      "outdoor-irrigation": [1, 2],
      "outdoor-cutting-line-feed": [0, 2],
      "outdoor-drive-starting": [0, 2],
      "outdoor-housing-retention": [0, 1],
    },
  },
  "water-control": {
    copy: waterControlPageDesign,
    idPrefix: "water",
    defaultGroupId: "water-valve-internals-actuation",
    materialPathsByGroup: {
      "water-valve-internals-actuation": [wearPOM],
      "water-rolling-guidance": [wearPOM],
      "water-valve-housing": [reinforcedPOM],
      "water-pumping": [reinforcedPOM],
    },
    materialSourceIndicesByGroup: {
      "water-valve-internals-actuation": [0, 1],
      "water-rolling-guidance": [0, 1],
      "water-valve-housing": [2],
      "water-pumping": [2],
    },
  },
};
