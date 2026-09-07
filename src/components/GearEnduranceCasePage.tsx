import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { gearEnduranceTest, getGearEnduranceEvidence } from "@/data/gearEnduranceEvidence";
import { getLanguageAlternates, getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { createBreadcrumbJsonLd, createPageMetadata, createWebPageJsonLd } from "@/lib/seo";
import { serializeJsonLd } from "@/lib/jsonLd";
import shared from "@/app/(en)/components/ComponentSolutions.module.css";
import styles from "./GearEnduranceCasePage.module.css";

export function createGearCaseMetadata(localeSegment?: "zh") {
  const copy = getGearEnduranceEvidence(localeSegment)!;
  return createPageMetadata({
    title: copy.page.title,
    description: copy.page.description,
    path: getLocalizedHref(gearEnduranceTest.casePath, localeSegment),
    openGraphLocale: localeSegment === "zh" ? "zh_CN" : "en_US",
    languageAlternates: getLanguageAlternates(gearEnduranceTest.casePath),
  });
}

export function GearEnduranceCasePage({ localeSegment }: { localeSegment?: "zh" }) {
  const copy = getGearEnduranceEvidence(localeSegment)!;
  const href = (path: string) => getLocalizedHref(path, localeSegment);
  const path = href(gearEnduranceTest.casePath);
  const contactHref = href(createContactHref({ grade: gearEnduranceTest.grade, material: "POM", application: copy.application, intent: "grade-evaluation", source: "Gear endurance case" }));
  const schema = [
    createWebPageJsonLd({ title: copy.page.heading, description: copy.page.description, path }),
    createBreadcrumbJsonLd([
      { name: localeSegment ? "首页" : "Home", path: href("/") },
      { name: copy.page.back, path: href(gearEnduranceTest.componentPath) },
      { name: copy.page.heading, path },
    ]),
  ];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <main className={shared.page}><div className={shared.shell}><div className={shared.rail}>
      <Breadcrumbs className={shared.breadcrumbs} items={[
        { label: copy.page.back, href: href(gearEnduranceTest.componentPath) },
        { label: localeSegment ? "齿轮试验案例" : "Gear endurance case" },
      ]} />
      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{copy.page.label}</p>
          <h1>{copy.page.heading}</h1>
          <p className={styles.lead}>{copy.introduction}</p>
        </header>
        <section className={styles.section} aria-labelledby="project-challenge">
          <h2 id="project-challenge">{copy.story.challengeTitle}</h2>
          <div><p>{copy.story.challenge}</p></div>
        </section>
        <section className={styles.conditions} aria-labelledby="test-conditions">
          <h2 id="test-conditions">{copy.page.conditions}</h2>
          <p className={styles.validation}>{copy.story.validation}</p>
          <dl className={styles.facts}>{copy.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </section>
        <section className={styles.section} aria-labelledby="test-result">
          <h2 id="test-result">{copy.page.result}</h2>
          <div><p>{copy.procedure}</p><p>{copy.observations}</p><p>{copy.scope}</p></div>
        </section>
        <section className={styles.section} aria-labelledby="project-review">
          <h2 id="project-review">{copy.page.scope}</h2>
          <div><p>{copy.story.takeaway}</p><Link className={styles.link} href={href(`${gearEnduranceTest.guidePath}#${gearEnduranceTest.interpretationId}`)}>{copy.guideAction}</Link></div>
        </section>
        <footer className={styles.footer}>
          <h2>{copy.page.contactTitle}</h2>
          <div className={styles.actions}>
            <Button asChild size="form"><Link href={contactHref}>{copy.action}</Link></Button>
            <Link className={styles.link} href={href(gearEnduranceTest.componentPath)}>{copy.page.back}</Link>
          </div>
        </footer>
      </article>
    </div></div></main>
  </>;
}
