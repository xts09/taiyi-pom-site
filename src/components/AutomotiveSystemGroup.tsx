import Link from "next/link";
import type { ReactNode } from "react";
import { automotiveSelectionLabels, automotiveWindowCases } from "@/data/automotiveSelection";
import { automotivePageDesign } from "@/data/automotivePageDesign";
import { Button } from "./ui/button";
import { getGlassFiberCaseStudy, getGlassFiberCasePath } from "@/data/glassFiberCaseStudies";
import type { LocalizedUrlSegment, MessageLocale } from "@/i18n/config";
import { getLocalizedHref, isEnglishFallbackHref } from "@/i18n/releaseManifest";
import styles from "./AutomotiveSystemGroup.module.css";
import { getCaseStudyNavigation } from "@/data/caseStudyNavigation";
import { getRelatedCaseStudies } from "@/data/caseStudies";

// Underline only the label: flex gaps and the separate icon must stay undecorated.
function AutomotiveTextLink({ href, children, badge }: { href: string; children: ReactNode; badge?: string }) {
  return <Link className={styles.textLink} href={href}>
    <span className={styles.linkLabel}>{children}</span>
    {badge ? <small className={styles.linkBadge}>{badge}</small> : null}
    <svg className={styles.linkArrow} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </Link>;
}

export function AutomotiveNextSteps({ inLanguage, localeSegment, contactHref, technicalLabel, evaluation, qualityEvidence }: {
  inLanguage: MessageLocale; localeSegment?: LocalizedUrlSegment; contactHref: string; technicalLabel: string;
  evaluation: { eyebrow: string; title: string; description: string; action: string };
  qualityEvidence?: { standard: string; system: string; scope: string; href: string; action: string };
}) {
  const ui = automotiveSelectionLabels[inLanguage];
  const links = [
    { href: "/technical-data-sheets", label: technicalLabel },
    { href: "/resources/wear-resistant-low-friction-pom-selection-guide", label: ui.guide },
    { href: "/resources/alternative-pom-grade-validation", label: automotivePageDesign[inLanguage].validationGuide },
  ];
  const caseNavigation = getCaseStudyNavigation(localeSegment);
  const relatedCases = getRelatedCaseStudies({ sourcePath: "/applications/automotive", localeSegment });
  return <section className={styles.nextSteps} id="material-evaluation">
    <div className={styles.nextGrid}><div><p className={styles.eyebrow}>{evaluation.eyebrow}</p><h2>{automotivePageDesign[inLanguage].nextTitle}</h2><p className={styles.nextDescription}>{evaluation.description}</p><Button asChild variant="primary" size="lg"><Link href={contactHref}>{evaluation.action}<span aria-hidden="true">↗</span></Link></Button></div>
      <div className={styles.resources}>{links.map(link => <AutomotiveTextLink key={link.href} href={getLocalizedHref(link.href, localeSegment)} badge={isEnglishFallbackHref(link.href, localeSegment) ? ui.english : undefined}>{link.label}</AutomotiveTextLink>)}</div>
    </div>
    {caseNavigation && relatedCases.length ? <div className={styles.caseLinks} data-automotive-case-links>
      <h3>{caseNavigation.label}</h3>
      <ul>{relatedCases.map(study => <li key={study.id}>
        <AutomotiveTextLink href={getLocalizedHref(study.path, localeSegment)}>{study.grade} · {study.title}</AutomotiveTextLink>
        <span>{study.outcome}</span>
      </li>)}</ul>
    </div> : null}
    {qualityEvidence ? <div className={styles.quality}><strong>{qualityEvidence.standard}</strong><div><p>{qualityEvidence.system}</p><p>{qualityEvidence.scope}</p></div><AutomotiveTextLink href={qualityEvidence.href}>{qualityEvidence.action}</AutomotiveTextLink></div> : null}
  </section>;
}

export function AutomotivePartEvidence({ caseIndex, inLanguage, localeSegment }: {
  caseIndex: 0 | 1;
  inLanguage: MessageLocale;
  localeSegment?: LocalizedUrlSegment;
}) {
  const ui = automotiveSelectionLabels[inLanguage];
  const design = automotivePageDesign[inLanguage];
  const study = getGlassFiberCaseStudy(automotiveWindowCases[caseIndex])!;
  const nativeCopy = inLanguage === "en" || inLanguage === "zh-CN";
  const copy = study.copy[inLanguage === "zh-CN" ? "zh" : "en"];
  const links = [
    { href: getGlassFiberCasePath(study), label: ui.caseLink },
    { href: `/products/${study.grade.toLowerCase()}-glass-fiber-pom`, label: ui.grade },
  ];

  return <section className={styles.partEvidence} data-automotive-case={study.id}>
    <div>
      <h3>{caseIndex === 0 ? ui.plate : ui.housing} · {study.grade}</h3>
      <p>{ui.scope}</p>
    </div>
    <div className={styles.caseRow}>
      <h4>{design.caseTitles[caseIndex]}</h4>
      {!nativeCopy ? <p className={styles.language}>{ui.english}</p> : null}
      <p lang={nativeCopy ? undefined : "en"}>{copy.summary}</p>
      <p className={styles.stage}><span>{ui.stage}</span><span lang={nativeCopy ? undefined : "en"}>{copy.stage}</span></p>
      <div className={styles.actions}>{links.map(link => <AutomotiveTextLink
        key={link.href} href={getLocalizedHref(link.href, localeSegment)}
        badge={isEnglishFallbackHref(link.href, localeSegment) ? ui.english : undefined}
      >{link.label}</AutomotiveTextLink>)}</div>
    </div>
  </section>;
}
