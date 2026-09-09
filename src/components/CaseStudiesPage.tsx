import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyFilters } from "@/components/CaseStudyFilters";
import { getPublishedCaseStudies } from "@/data/caseStudies";
import { caseApplicationCategories, caseStudyDiscovery } from "@/data/caseStudyDiscovery";
import { createContactHref } from "@/lib/contactContext";
import { getCaseStudyNavigation } from "@/data/caseStudyNavigation";
import { getLanguageAlternates, getLocalizedHref } from "@/i18n/releaseManifest";
import { createBreadcrumbJsonLd, createCollectionPageJsonLd, createPageMetadata } from "@/lib/seo";
import { serializeJsonLd } from "@/lib/jsonLd";
import styles from "./CaseStudiesPage.module.css";

export function createCaseStudiesMetadata(localeSegment?: "zh") {
  const copy = getCaseStudyNavigation(localeSegment)!;
  return createPageMetadata({
    title: `${copy.label} | Taiyi Polymer`,
    description: copy.description,
    path: getLocalizedHref(copy.href, localeSegment),
    openGraphLocale: localeSegment ? "zh_CN" : "en_US",
    languageAlternates: getLanguageAlternates(copy.href),
  });
}

export function CaseStudiesPage({ localeSegment }: { localeSegment?: "zh" }) {
  const copy = getCaseStudyNavigation(localeSegment)!;
  const cases = getPublishedCaseStudies(localeSegment);
  const href = (path: string) => getLocalizedHref(path, localeSegment);
  const language = localeSegment ?? "en";
  const categories = caseApplicationCategories.map((category) => ({ id: category.id, label: category[language] }));
  const schema = [
    createBreadcrumbJsonLd([
      { name: localeSegment ? "首页" : "Home", path: href("/") },
      { name: copy.resourcesLabel, path: href("/resources") },
      { name: copy.label, path: href(copy.href) },
    ]),
    createCollectionPageJsonLd({
      title: copy.label, description: copy.description, path: href(copy.href),
      inLanguage: localeSegment ? "zh-CN" : "en",
      items: cases.map((study) => ({ name: study.title, path: href(study.path) })),
    }),
  ];
  return <main className={styles.page} id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <div className={styles.rail}>
      <Breadcrumbs items={[
        { label: copy.resourcesLabel, href: href("/resources") },
        { label: copy.label },
      ]} />
      <header className={styles.header}>
        <h1>{copy.label}</h1>
        <p>{localeSegment ? "从你的终端产品出发，了解类似零件如何选材、试模和验证。" : "Find a similar component and explore its material choice, molding trials and validation."}</p>
      </header>
      <CaseStudyFilters chinese={localeSegment === "zh"} categories={categories} entries={cases.map((study) => {
        const discovery = caseStudyDiscovery[study.id];
        const category = categories.find((entry) => entry.id === discovery.category)!;
        const isGearCase = study.id === "etm-100p-gear-endurance";
        const title = isGearCase ? (localeSegment ? "按摩椅扶手齿轮" : "Massage chair armrest gear") : study.title;
        const gradeHref = isGearCase
          ? createContactHref({ grade: study.grade, intent: "grade-evaluation", source: "case-overview" }, href("/contact"))
          : href(`/products/${study.grade.toLowerCase()}-glass-fiber-pom`);
        return { id: study.id, category: discovery.category, content: <article className={styles.study}>
          <p className={styles.eyebrow}><span>{category.label}</span><span>{discovery.topic[language]}</span></p>
          <h2><Link href={href(`${study.path}#top`)}>{title}</Link></h2>
          <p className={styles.summary}>{discovery.summary[language]}</p>
          <p className={styles.stage}><span>{localeSegment ? "进展" : "Status"}</span>{isGearCase ? (localeSegment ? "量产与复购" : "Production and repeat orders") : study.outcome}</p>
          <div className={styles.actions}>
            <Link className={styles.grade} href={gradeHref} aria-label={isGearCase ? (localeSegment ? `咨询 ${study.grade}` : `Ask about ${study.grade}`) : (localeSegment ? `查看 ${study.grade} 数据` : `View ${study.grade} data`)}>
              <span>{isGearCase ? (localeSegment ? "牌号咨询" : "Grade inquiry") : (localeSegment ? "牌号数据" : "Grade data")}</span>{study.grade}
            </Link>
            <Link className={styles.action} href={href(`${study.path}#top`)}>{localeSegment ? "阅读案例" : "Read case"}<span aria-hidden="true">↗</span></Link>
          </div>
        </article> };
      })} />
    </div>
  </main>;
}
