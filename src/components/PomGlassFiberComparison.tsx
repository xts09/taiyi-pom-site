import { catalogProducts, type CatalogProperty } from "@/data/catalog";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import {
  getPomGlassFiberComparison,
  pomGlassFiberMetrics,
} from "@/lib/pomGlassFiberComparison";

import { ValueWithUnit } from "@/components/UnitText";
import { GlassFiberGradeCards, GlassFiberGradeHeading } from "@/components/GlassFiberGradeCards";
import styles from "./PomGlassFiberComparison.module.css";

const messages = {
  en: {
    eyebrow: "Grade directory",
    title: "Glass-fiber POM grades",
    intro:
      "Review glass-fiber content and key properties, then open a grade for full technical data and TDS support.",
    count: "listed grades",
    fiber: "Glass fiber",
    webData: "Grade data",
    missing: "Not published",
    note: "Typical reference values for initial screening. Higher glass-fiber content does not by itself establish suitability. Confirm test conditions and molded-part performance for your project.",
    basis: "Test basis",
    contentBasis:
      "Glass-fiber content is the stated formulation content; the POM catalog does not publish a test method for it.",
    conditions:
      "The catalog does not state impact test temperature or specimen conditioning. Processing values are published reference settings, not a validated molding window for your tool.",
    internal: "Internal Method",
  },
  zh: {
    eyebrow: "牌号目录",
    title: "玻纤 POM 牌号",
    intro:
      "先查看玻纤含量与关键性能，再进入牌号详情查看完整技术数据或申请 TDS。",
    count: "个牌号",
    fiber: "玻纤含量",
    webData: "牌号数据",
    missing: "未公布",
    note: "以上为初步选型参考值。玻纤含量更高并不代表更适合；请结合项目确认测试条件与成型零件性能。",
    basis: "测试依据",
    contentBasis:
      "玻纤含量为目录标注的配方含量；POM 目录未提供该含量的测试方法。",
    conditions:
      "目录未注明冲击测试温度与试样调湿状态。加工数值为已发布的参考设定，不代表已经验证的模具加工窗口。",
    internal: "内部方法",
  },
};

export function PomGlassFiberComparison({
  locale = "en",
}: {
  locale?: "en" | "zh";
}) {
  const copy = messages[locale];
  const grades = getPomGlassFiberComparison(catalogProducts);
  const localHref = (href: string) =>
    getLocalizedHref(href, locale === "zh" ? "zh" : undefined);
  const methodName = (method: string) =>
    locale === "zh"
      ? method.replaceAll("Internal Method", copy.internal)
      : method;
  const renderValue = (property?: CatalogProperty) =>
    property ? (
      <ValueWithUnit value={property.value} unit={property.unit} />
    ) : (
      <span className={styles.missing}>{copy.missing}</span>
    );

  return (
    <section
      id="pom-grades"
      className={styles.section}
      aria-labelledby="gf-comparison-title"
    >
      <GlassFiberGradeHeading eyebrow={copy.eyebrow} title={copy.title}
        titleId="gf-comparison-title" description={copy.intro} count={`${grades.length} ${copy.count}`} />
      <GlassFiberGradeCards actionLabel={copy.webData} grades={grades.map(grade => ({
        grade: grade.grade,
        href: localHref(`/products/${grade.slug}`),
        eyebrow: `POM · ${copy.fiber} ${grade.glassFiberContent}%`,
        metrics: [
          { label: copy.fiber, value: `${grade.glassFiberContent}%` },
          ...pomGlassFiberMetrics.map(metric => ({ label: metric[locale], value: renderValue(grade.properties.find(property => property.label === metric.source)) })),
        ],
      }))} />
      <p id="gf-comparison-note" className={styles.note}>
        {copy.note}
      </p>
      <details className={styles.disclosure}>
        <summary>{copy.basis}</summary>
        <div className={styles.basis}>
          <p>{copy.contentBasis}</p>
          <dl>
            {pomGlassFiberMetrics.map((metric) => (
              <div key={metric.source}>
                <dt>{metric[locale]}</dt>
                <dd>
                  {[
                    ...new Set(
                      grades.flatMap((grade) =>
                        grade.properties
                          .filter(
                            (property) => property.label === metric.source,
                          )
                          .map((property) => methodName(property.method)),
                      ),
                    ),
                  ].join(" / ")}
                </dd>
              </div>
            ))}
          </dl>
          <p>{copy.conditions}</p>
        </div>
      </details>
    </section>
  );
}
