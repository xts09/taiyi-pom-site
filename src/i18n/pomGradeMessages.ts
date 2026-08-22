import { chinesePomGradeExpansionA } from "./messages/zh-CN-pom-grade-expansion-a.ts";
import { chinesePomGradeExpansionB } from "./messages/zh-CN-pom-grade-expansion-b.ts";
import { chinesePomGradeExpansionC } from "./messages/zh-CN-pom-grade-expansion-c.ts";
import { chinesePomGradeExpansionD } from "./messages/zh-CN-pom-grade-expansion-d.ts";
import { chinesePomGradeExpansionE } from "./messages/zh-CN-pom-grade-expansion-e.ts";
import { chinesePomGradeExpansionF } from "./messages/zh-CN-pom-grade-expansion-f.ts";
import type {
  ChineseOnlyProductGradeSlug,
  LocalizedGradeProfileMessages,
  ProductFunnelMessages,
} from "./productFunnelTypes.ts";

export const chinesePomGradeProfiles: Record<
  ChineseOnlyProductGradeSlug,
  LocalizedGradeProfileMessages
> = {
  ...chinesePomGradeExpansionA,
  ...chinesePomGradeExpansionB,
  ...chinesePomGradeExpansionC,
  ...chinesePomGradeExpansionD,
  ...chinesePomGradeExpansionE,
  ...chinesePomGradeExpansionF,
};

export const getChinesePomGradeCategoryLabel = (
  messages: ProductFunnelMessages,
  slug: ChineseOnlyProductGradeSlug,
) => chinesePomGradeProfiles[slug].categoryLabel ?? messages.common.category;
