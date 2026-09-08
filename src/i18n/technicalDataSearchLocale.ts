import type { LocalizedUrlSegment } from "./config";
import type { TechnicalDataSearchAlias } from "../lib/technicalDataQueryVocabulary";
import {
  getZhTechnicalDataCategoryLabel,
  zhTechnicalDataSearchMessages,
  zhTechnicalDataSearchVocabulary,
} from "./technicalDataSearchMessages";
import { deTechnicalSearch } from "./messages/de-technical-search";
import { frTechnicalSearch } from "./messages/fr-technical-search";
import { ptBRTechnicalSearch } from "./messages/pt-BR-technical-search";

type Translated<T> = T extends string ? string
  : T extends (...args: infer A) => infer R ? (...args: A) => R
  : { [K in keyof T]: Translated<T[K]> };

export type TechnicalSearchLocale = {
  copy: Translated<typeof zhTechnicalDataSearchMessages>;
  vocabulary: readonly TechnicalDataSearchAlias[];
  categories: Record<string, string>;
  resourcesBreadcrumb: string;
  resourceLabels: Record<string, string>;
  gradeDescription: (category: string) => string;
  engineeringDescription: (category: string) => string;
  conductiveDescription: (series: string, range: string) => string;
  series: { cnt: string; cf: string };
  suggestedReview: string;
  requestPrompt: string;
  requestAction: string;
};

const zh: TechnicalSearchLocale = {
  copy: zhTechnicalDataSearchMessages,
  vocabulary: zhTechnicalDataSearchVocabulary,
  categories: {},
  resourcesBreadcrumb: "资源中心",
  resourceLabels: { faq: "常见问题", "application-notes": "应用说明", "processing-guide": "加工指南", default: "技术指南" },
  gradeDescription: (category) => `${category}牌号数据，用于初步材料筛选与项目验证。`,
  engineeringDescription: (category) => `${category}牌号数据，用于材料初筛与项目验证。`,
  conductiveDescription: (series, range) => `${series} 目录方向，目标区间 ${range}。选材时需确认测试方法、单位和制件实测结果。`,
  series: { cnt: "CNT Antistatic", cf: "Carbon Fiber Conductive" },
  suggestedReview: "需对照现行牌号数据、项目要求和制件验证",
  requestPrompt: "需要当前项目对应的技术资料？",
  requestAction: "申请技术资料并说明应用条件",
};

const languages: Record<LocalizedUrlSegment, TechnicalSearchLocale> = {
  zh,
  de: deTechnicalSearch,
  fr: frTechnicalSearch,
  "pt-br": ptBRTechnicalSearch,
};

export function getTechnicalSearchLocale(locale: LocalizedUrlSegment) {
  const data = languages[locale];
  return {
    ...data,
    categoryLabel: locale === "zh"
      ? getZhTechnicalDataCategoryLabel
      : (category: string) => data.categories[category] ?? category,
  };
}
