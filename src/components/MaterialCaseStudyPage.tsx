import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyRelatedLinks } from "@/components/CaseStudyRelatedLinks";
import { Button } from "@/components/ui/button";
import { getGlassFiberCasePath, type GlassFiberCaseStudy } from "@/data/glassFiberCaseStudies";
import { getLanguageAlternates, getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { createBreadcrumbJsonLd, createPageMetadata, createWebPageJsonLd } from "@/lib/seo";
import { serializeJsonLd } from "@/lib/jsonLd";
import shared from "@/app/(en)/components/ComponentSolutions.module.css";
import styles from "./GearEnduranceCasePage.module.css";

type Props = { study: GlassFiberCaseStudy; localeSegment?: "zh" };

export function createMaterialCaseMetadata({ study, localeSegment }: Props) {
  const copy = study.copy[localeSegment ?? "en"];
  return createPageMetadata({
    title: `${copy.title} | ${study.grade} | Taiyi Polymer`, description: copy.summary,
    path: getLocalizedHref(getGlassFiberCasePath(study), localeSegment),
    openGraphLocale: localeSegment ? "zh_CN" : "en_US",
    languageAlternates: getLanguageAlternates(getGlassFiberCasePath(study)),
  });
}

export function MaterialCaseStudyPage({ study, localeSegment }: Props) {
  const zh = localeSegment === "zh";
  const copy = study.copy[localeSegment ?? "en"];
  const href = (path: string) => getLocalizedHref(path, localeSegment);
  const path = href(getGlassFiberCasePath(study));
  const collection = zh ? "客户案例" : "Customer Case Studies";
  const resources = zh ? "资料" : "Resources";
  const sections = [
    { id: "customer", title: zh ? "客户与零件" : "Customer and component", paragraphs: [copy.customer] },
    { id: "challenge", title: zh ? "遇到的问题" : "The challenge", paragraphs: [copy.challenge] },
    { id: "solution", title: zh ? "材料选择与试模" : "Material choice and molding trials", paragraphs: copy.solution },
    { id: "feedback", title: zh ? "客户反馈与项目进展" : "Customer feedback and project status", paragraphs: [copy.result] },
  ];
  const schema = [
    createWebPageJsonLd({ title: copy.title, description: copy.summary, path }),
    createBreadcrumbJsonLd([
      { name: zh ? "首页" : "Home", path: href("/") },
      { name: resources, path: href("/resources") },
      { name: collection, path: href("/case-studies") },
      { name: copy.title, path },
    ]),
  ];
  const contact = createContactHref({ intent: "grade-evaluation", grade: study.grade, application: copy.title, source: study.slug }, href("/contact"));
  return <main className={shared.page} id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <div className={shared.shell}><div className={shared.rail}>
      <Breadcrumbs className={shared.breadcrumbs} items={[
        { label: resources, href: href("/resources") },
        { label: collection, href: href("/case-studies") },
        { label: copy.title },
      ]} />
      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{copy.industry} · {study.grade} · {study.glassFiber}% GF POM</p>
          <h1>{copy.title}</h1>
          <p className={styles.lead}>{copy.summary}</p>
          <p><strong>{zh ? "项目进展：" : "Project status: "}</strong>{copy.stage}</p>
        </header>
        {sections.map((section) => <section key={section.id} className={styles.section} aria-labelledby={section.id}>
          <h2 id={section.id}>{section.title}</h2>
          <div>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>)}
        <CaseStudyRelatedLinks caseId={study.id} grade={study.grade} gradePath={`/products/${study.grade.toLowerCase()}-glass-fiber-pom`} localeSegment={localeSegment} />
        <footer className={styles.footer} data-footer-adjacent="true">
          <h2>{zh ? "讨论类似零件的材料选择" : "Discuss material selection for a similar component"}</h2>
          <div className={styles.actions}>
            <Button asChild size="form"><Link href={contact}>{zh ? "讨论你的应用" : "Discuss your application"}</Link></Button>
            <Link className={styles.link} href={href("/case-studies")}>{zh ? "全部客户案例" : "All customer cases"}</Link>
          </div>
        </footer>
      </article>
    </div></div>
  </main>;
}
