import type { ComponentSolutionDetail } from "@/data/componentSolutionDetails";
import type { ComponentSolution } from "@/data/componentSolutions";
import { chineseBushingsAndSleevesDetail } from "@/i18n/messages/zh-CN-component-details-a";
import {
  chineseConveyorChainComponentsDetail,
  chineseValveSpoolsAndCartridgesDetail,
} from "@/i18n/messages/zh-CN-component-details-b";
import {
  chineseIcHandlingTraysDetail,
  chineseTextileGuideComponentsDetail,
} from "@/i18n/messages/zh-CN-component-details-c";
import {
  chineseComponentIndexMessages,
  chineseComponentSolutions,
  chinesePrecisionPlasticGearsDetail,
} from "@/i18n/messages/zh-CN-components";

export const localizedComponentSlugs = [
  "precision-plastic-gears",
  "bushings-and-sleeves",
  "conveyor-chain-components",
  "valve-spools-and-cartridges",
  "textile-guide-components",
  "ic-handling-trays",
] as const;

export type LocalizedComponentSlug =
  (typeof localizedComponentSlugs)[number];

const chineseDetails = {
  "precision-plastic-gears": chinesePrecisionPlasticGearsDetail,
  "bushings-and-sleeves": chineseBushingsAndSleevesDetail,
  "conveyor-chain-components": chineseConveyorChainComponentsDetail,
  "valve-spools-and-cartridges": chineseValveSpoolsAndCartridgesDetail,
  "textile-guide-components": chineseTextileGuideComponentsDetail,
  "ic-handling-trays": chineseIcHandlingTraysDetail,
} as const satisfies Record<LocalizedComponentSlug, ComponentSolutionDetail>;

export const isLocalizedComponentSlug = (
  value: string,
): value is LocalizedComponentSlug =>
  localizedComponentSlugs.includes(value as LocalizedComponentSlug);

export const getChineseComponentDetail = (
  slug: LocalizedComponentSlug,
): ComponentSolutionDetail => chineseDetails[slug];

export const getChineseComponentSolution = (
  slug: LocalizedComponentSlug,
): ComponentSolution => {
  const solution = chineseComponentSolutions.find(
    (candidate) => candidate.slug === slug,
  );

  if (!solution) {
    throw new Error(`Missing Chinese component solution: ${slug}`);
  }

  return solution;
};

export {
  chineseComponentIndexMessages,
  chineseComponentSolutions,
};
