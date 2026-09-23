import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUp, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import { WearBenchmarkRecords } from "@/components/WearBenchmarkRecords";
import { WearEvidenceGallery } from "@/components/WearEvidenceGallery";
import { formatWearDuration, getWearTestEvidenceCopy, wearTestEvidence, type WearTestGroup, type WearTestRecord } from "@/data/wearTestEvidence";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import styles from "./WearBenchmarkPage.module.css";

const groups: WearTestGroup[] = ["high-load", "low-load"];
type Copy = NonNullable<ReturnType<typeof getWearTestEvidenceCopy>>;
type Props = { localeSegment?: LocalizedUrlSegment };

export function WearBenchmarkPage({ localeSegment }: Props) {
  const copy = getWearTestEvidenceCopy(localeSegment);
  if (!copy) return null;
  const locale = localeSegment === "zh" ? "zh" : "en";
  const href = (path: string) => getLocalizedHref(path, localeSegment);
  const contactHref = createContactHref({ material: "POM", source: wearTestEvidence.benchmarkPath }, href("/contact"));

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.rail}>
          <nav className={styles.breadcrumb} aria-label={locale === "zh" ? "面包屑导航" : "Breadcrumb"}>
            <Link href={href("/resources")}>{locale === "zh" ? "技术资料" : "Resources"}</Link>
            <span aria-hidden="true">/</span><span>{copy.navLabel}</span>
          </nav>
          <PageHero variant="evidence" className={styles.heroContent} title={copy.benchmarkTitle} titleClassName={styles.heroTitle} description={copy.benchmarkIntro} descriptionClassName={styles.heroIntro}
            actions={<nav className={styles.jumpLinks} aria-label={locale === "zh" ? "页面内容" : "On this page"}>
              <a href="#wear-benchmark-results">{copy.tableTitle}<ArrowDown size={16} aria-hidden="true" /></a>
              <a href="#wear-benchmark-details">{copy.detailTitle}<ArrowDown size={16} aria-hidden="true" /></a>
            </nav>} />
        </div>
      </header>
      <div className={styles.rail}>
        <section id="wear-benchmark-results" className={styles.results} aria-labelledby="wear-results-title">
          <SectionIntro title={copy.tableTitle} titleId="wear-results-title" description={copy.tableIntro} className={styles.sectionIntro} />
          {groups.map(group => (
            <section key={group} className={styles.group} aria-labelledby={`group-${group}`}>
              <div className={styles.groupHead}><h3 id={`group-${group}`}>{copy.groups[group].title}</h3><span>{copy.groups[group].summary}</span></div>
              <div className={styles.tableFrame}>
                <table className={styles.table}>
                  <caption className="sr-only">{copy.groups[group].title}</caption>
                  <colgroup><col className={styles.gradeCol} /><col className={styles.lossCol} /><col className={styles.durationCol} /><col className={styles.outcomeCol} /><col className={styles.actionCol} /></colgroup>
                  <thead><tr>
                    <th scope="col">{copy.grade}</th><th scope="col">{copy.loss} <span>(g)</span></th><th scope="col">{copy.duration}</th>
                    <th scope="col" className={styles.desktopCell}>{copy.outcome}</th><th scope="col" className={styles.desktopCell}><span className="sr-only">{copy.recordAction}</span></th>
                  </tr></thead>
                  <tbody>{wearTestEvidence.records.filter(record => record.group === group).map(record => (
                    <tr key={record.id}>
                      <th scope="row"><a className={styles.gradeAnchor} href={`#record-${record.id}`}>{record.grade}</a></th>
                      <td className={styles.resultCell}>{record.loss ?? "—"}</td>
                      <td>{formatWearDuration(record.durationSeconds, locale)}<span className={styles.mobileOutcome}>{record.outcome === "worn-through" ? copy.wornThrough : copy.completed}</span></td>
                      <td className={styles.desktopCell}>{record.outcome === "worn-through" ? copy.wornThrough : copy.completed}</td>
                      <td className={styles.desktopCell}><a className={styles.recordLink} href={`#record-${record.id}`}>{copy.recordAction}<ArrowDown size={14} aria-hidden="true" /></a></td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </section>
          ))}
        </section>
        <section id="wear-benchmark-details" className={styles.details} aria-labelledby="wear-details-title">
          <SectionIntro title={copy.detailTitle} titleId="wear-details-title" description={copy.detailIntro} className={styles.sectionIntro} />
          <nav className={styles.gradeNav} aria-label={locale === "zh" ? "按牌号查看试验" : "Test records by grade"}>
            {wearTestEvidence.records.map(record => <a key={record.id} href={`#record-${record.id}`}>{record.grade}</a>)}
          </nav>
          <WearBenchmarkRecords>
            {wearTestEvidence.records.map((record, index) => <RecordDetail key={record.id} record={record} initiallyOpen={index === 0} locale={locale} localeSegment={localeSegment} copy={copy} />)}
          </WearBenchmarkRecords>
        </section>
        <section className={styles.nextSteps} aria-labelledby="wear-next-title">
          <SectionIntro title={copy.relatedTitle} titleId="wear-next-title" description={copy.relatedIntro} className={styles.sectionIntro} />
          <div className={styles.nextActions}>
            <Button asChild variant="primary" size="form"><Link href={contactHref}>{copy.contactAction}<ArrowRight aria-hidden="true" /></Link></Button>
            <div className={styles.relatedLinks}>
              <Link href={href("/resources/wear-resistant-low-friction-pom-selection-guide")}>{copy.guideAction}<ArrowRight size={16} aria-hidden="true" /></Link>
              <Link href={href("/wear-resistant-low-friction-pom")}>{copy.landingAction}<ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function RecordDetail({ record, initiallyOpen, localeSegment, locale, copy }: {
  record: WearTestRecord; initiallyOpen: boolean; localeSegment?: LocalizedUrlSegment; locale: "en" | "zh"; copy: Copy;
}) {
  const facts: Array<[string, string]> = [
    [copy.date, record.date], [copy.load, `${record.load} N`], [copy.rpm, `${record.rpm} rpm`],
    [copy.duration, `${record.durationSeconds} s`], [copy.ambient, `${record.ambient} °C`],
    [copy.temperature, `${record.temperature} °C`], [copy.force, `${record.force} N`],
  ];
  if (record.before !== null && record.after !== null && record.loss !== null) {
    facts.push([copy.before, `${record.before} g`], [copy.after, `${record.after} g`], [copy.loss, `${record.loss} g`]);
  }
  if (record.specimen !== record.grade) facts.push([copy.reportSpecimen, record.specimen]);
  const contactHref = createContactHref({ grade: record.grade, material: "POM", intent: "grade-evaluation", source: `${wearTestEvidence.benchmarkPath}#record-${record.id}` }, getLocalizedHref("/contact", localeSegment));

  return (
    <details id={`record-${record.id}`} className={styles.record} open={initiallyOpen}>
      <summary className={styles.recordSummary}>
        <h3>{record.grade}</h3>
        <span className={styles.recordSummaryFacts}>{record.loss !== null ? `${record.loss} g · ` : ""}{formatWearDuration(record.durationSeconds, locale)}</span>
        <ChevronDown className={styles.disclosureIcon} size={20} aria-hidden="true" />
      </summary>
      <div className={styles.recordBody}>
        <dl className={styles.recordConditions}>
          <div><dt>{copy.load}</dt><dd>{record.load} N</dd></div>
          <div><dt>{copy.rpm}</dt><dd>{record.rpm} rpm</dd></div>
          <div><dt>{copy.outcome}</dt><dd>{record.outcome === "worn-through" ? copy.wornThrough : copy.completed}</dd></div>
          <div><dt>{copy.date}</dt><dd>{record.date}</dd></div>
        </dl>
        <WearEvidenceGallery grade={record.grade} curve={record.curve} photos={record.photos} locale={locale} />
        <details className={styles.parameters}>
          <summary>{copy.allData}<ChevronDown size={16} aria-hidden="true" /></summary>
          <dl className={styles.facts}>{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </details>
        <div className={styles.recordActions}>
          <Button asChild variant="primary" size="form"><Link href={contactHref}>{copy.inquiryAction} {record.grade}<ArrowRight aria-hidden="true" /></Link></Button>
          {record.productPath ? <Link className={styles.textLink} href={getLocalizedHref(record.productPath, localeSegment)}>{copy.productAction}<ArrowRight size={16} aria-hidden="true" /></Link> : null}
          <a className={styles.backLink} href="#wear-benchmark-results">{copy.backToResults}<ArrowUp size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </details>
  );
}
