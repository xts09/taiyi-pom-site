import { getLocalizedLocale } from "@/i18n/config";

export const showcaseSections = [
  { id: "foundations", label: "基础规范" },
  { id: "actions", label: "按钮" },
  { id: "fields", label: "表单" },
  { id: "disclosures", label: "折叠" },
  { id: "surfaces", label: "卡片" },
  { id: "evidence", label: "图片与证据" },
  { id: "composition", label: "标题与组合" },
  { id: "grade-directory", label: "牌号目录" },
  { id: "home-patterns", label: "首页组合" },
] as const;

export const homePreviewSections = [
  { id: "home-collaboration-title", label: "项目支持" },
  { id: "entry-points", label: "材料目录" },
  { id: "home-components-title", label: "零部件入口" },
  { id: "home-applications-title", label: "行业入口" },
  { id: "factory-snapshot", label: "制造与实验室" },
  { id: "material-review", label: "询盘入口" },
] as const;

export const previewLanguages = [
  { value: "zh", label: "简体中文" },
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Français" },
  { value: "pt-br", label: "Português" },
] as const;

export type PreviewLanguage = (typeof previewLanguages)[number]["value"];

export function resolvePreviewConfig(requested: unknown) {
  const option = previewLanguages.find(({ value }) => value === (requested ?? "zh"));
  if (!option) return undefined;
  const locale = getLocalizedLocale(option.value);
  return {
    ...option,
    locale: locale?.locale ?? "en" as const,
    htmlLang: locale?.htmlLang ?? "en",
    localeSegment: locale?.urlSegment,
  };
}

export type PreviewConfig = NonNullable<ReturnType<typeof resolvePreviewConfig>>;
