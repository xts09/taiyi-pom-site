import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ApplicationItem } from "@/data/applications";
import type { ApplicationInlinePartGroup } from "@/data/applicationSystemPresentation";
import { automotivePartMaterials, automotiveSelectionLabels, automotiveWindowCases } from "@/data/automotiveSelection";
import { automotivePageDesign } from "@/data/automotivePageDesign";
import { AutomotiveHashNavigator, AutomotivePartTabs } from "./AutomotivePartTabs";
import { Button } from "./ui/button";
import { getGlassFiberCaseStudy, getGlassFiberCasePath } from "@/data/glassFiberCaseStudies";
import type { LocalizedUrlSegment, MessageLocale } from "@/i18n/config";
import { getLocalizedHref, isEnglishFallbackHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { publicPath } from "@/lib/paths";
import styles from "./AutomotiveSystemGroup.module.css";

type Props = {
  application: ApplicationItem;
  group: ApplicationInlinePartGroup;
  inLanguage: MessageLocale;
  localeSegment?: LocalizedUrlSegment;
};

// Underline only the label: flex gaps and the separate icon must stay undecorated.
function AutomotiveTextLink({ href, children, badge }: { href: string; children: ReactNode; badge?: string }) {
  return <Link className={styles.textLink} href={href}>
    <span className={styles.linkLabel}>{children}</span>
    {badge ? <small className={styles.linkBadge}>{badge}</small> : null}
    <svg className={styles.linkArrow} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </Link>;
}

export function AutomotiveSystemGroups({ groups, ...props }: Omit<Props, "group"> & { groups: readonly ApplicationInlinePartGroup[] }) {
  return <AutomotiveHashNavigator>
    <div className={styles.groups} id="application-part-examples">
      {groups.map(group => <AutomotiveSystemGroup {...props} group={group} key={group.id} />)}
    </div>
  </AutomotiveHashNavigator>;
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
  return <section className={styles.nextSteps} id="material-evaluation">
    <div className={styles.nextGrid}><div><p className={styles.eyebrow}>{evaluation.eyebrow}</p><h2>{automotivePageDesign[inLanguage].nextTitle}</h2><p className={styles.nextDescription}>{evaluation.description}</p><Button asChild variant="primary" size="lg"><Link href={contactHref}>{evaluation.action}<span aria-hidden="true">↗</span></Link></Button></div>
      <div className={styles.resources}>{links.map(link => <AutomotiveTextLink key={link.href} href={getLocalizedHref(link.href, localeSegment)} badge={isEnglishFallbackHref(link.href, localeSegment) ? ui.english : undefined}>{link.label}</AutomotiveTextLink>)}</div>
    </div>
    {qualityEvidence ? <div className={styles.quality}><strong>{qualityEvidence.standard}</strong><div><p>{qualityEvidence.system}</p><p>{qualityEvidence.scope}</p></div><AutomotiveTextLink href={qualityEvidence.href}>{qualityEvidence.action}</AutomotiveTextLink></div> : null}
  </section>;
}

export function AutomotiveSystemGroup({ application, group, inLanguage, localeSegment }: Props) {
  const ui = automotiveSelectionLabels[inLanguage];
  const design = automotivePageDesign[inLanguage];
  const windowSystem = group.id === "automotive-visibility-window";
  const parts = group.partIds.flatMap(id => application.parts.filter(part => part.id === id));
  const familyLabel = (index: number) => application.materialDirections[index].shortLabel
    ?? application.materialDirections[index].label.split("—")[0].trim();
  const textLink = (href: string, label: string) => <AutomotiveTextLink href={getLocalizedHref(href, localeSegment)} badge={isEnglishFallbackHref(href, localeSegment) ? ui.english : undefined}>{label}</AutomotiveTextLink>;

  const renderPart = (part: ApplicationItem["parts"][number]) => {
    const candidates = automotivePartMaterials[part.id] ?? [];
    const moving = ["window-regulator", "wiper-motor-gear", "seat-guide-ring", "gear-shift-seat", "ev-brake-component"].includes(part.id);
    const guide = moving ? "/resources/wear-resistant-low-friction-pom-selection-guide" : "/resources/alternative-pom-grade-validation";
    // The current seat-guide asset contains an unrelated handle; omit it here
    // until a verified photo of the named part is available.
    const image = part.id === "seat-guide-ring" ? undefined : part.image;
    return <article className={styles.part} key={part.id} id={`automotive-part-${part.id}`}>
      {image ? <figure className={styles.figure}>
        <div className={styles.image}><Image src={publicPath(image.src)} alt={image.alt} fill sizes="(min-width: 1280px) 310px, (min-width: 768px) 40vw, 90vw" className="object-contain" /></div>
        <figcaption>{moving ? ui.moving : candidates.length === 0 ? ui.fuel : `${ui.image} · ${part.label}`}</figcaption>
      </figure> : null}
      <div className={styles.body}>
        <h4>{part.label}</h4>
        <p>{part.description}</p>
        <div className={styles.candidates}>
          <span>{ui.candidate}</span>
          {candidates.length ? <ul>{candidates.map(index => {
            const direction = application.materialDirections[index];
            return direction.href ? <li key={index}>{textLink(direction.href, familyLabel(index))}</li> : null;
          })}</ul> : <p>{ui.specific}</p>}
        </div>
        <div className={styles.actions}>
          {textLink(guide, ui.guide)}
          <AutomotiveTextLink href={createContactHref({ application: part.label, source: `/applications/automotive#${part.id}`, ...(candidates.length ? { material: "POM" } : {}) }, getLocalizedHref("/contact", localeSegment))}>{ui.inquiry}</AutomotiveTextLink>
        </div>
      </div>
    </article>;
  };

  const renderFeaturedPart = (part: ApplicationItem["parts"][number], index: number) => {
    const study = getGlassFiberCaseStudy(automotiveWindowCases[index])!;
    const nativeCopy = inLanguage === "en" || inLanguage === "zh-CN";
    const copy = study.copy[inLanguage === "zh-CN" ? "zh" : "en"];
    const casePath = getGlassFiberCasePath(study);
    const gradePath = `/products/${study.grade.toLowerCase()}-glass-fiber-pom`;
    const guide = "/resources/wear-resistant-low-friction-pom-selection-guide";
    return <article className={styles.featuredPart} id={`automotive-part-${part.id}`}>
      <div className={styles.partLayout}>
        <figure className={styles.featureFigure}>
          <div><h3>{design.partTitles[index]}</h3><p>{design.motionLabels[index]}</p></div>
          {part.image ? <div className={styles.featureImage}><Image src={publicPath(part.image.src)} alt={part.image.alt} fill sizes="(min-width: 1280px) 520px, (min-width: 768px) 40vw, 90vw" className="object-contain" /></div> : null}
          <figcaption>{design.figureCaption}</figcaption>
        </figure>
        <div className={styles.selectionReading}>
          <section className={styles.selectionRow}>
            <p className={styles.eyebrow}>{design.motionLabels[index]}</p><h4>{design.motionTitles[index]}</h4><p>{part.description}</p>
            <ul className={styles.materialLinks}>{automotivePartMaterials[part.id].map(materialIndex => {
              const direction = application.materialDirections[materialIndex];
              return direction.href ? <li key={materialIndex}>{textLink(direction.href, familyLabel(materialIndex))}</li> : null;
            })}</ul>
          </section>
          <section className={styles.caseRow} aria-label={`${index === 0 ? ui.plate : ui.housing} · ${ui.feedback}`}>
            <div className={styles.caseMeta}><p className={styles.eyebrow}>{index === 0 ? ui.plate : ui.housing} · {ui.feedback}</p><span className={styles.caseGrade}>{study.grade}</span></div>
            <h4>{design.caseTitles[index]}</h4>
            {!nativeCopy ? <p className={styles.language}>{ui.english}</p> : null}
            <p lang={nativeCopy ? undefined : "en"}>{copy.summary}</p>
            <p className={styles.stage}><span>{ui.stage}</span><span lang={nativeCopy ? undefined : "en"}>{copy.stage}</span></p>
            <div className={styles.actions}>{textLink(casePath, ui.caseLink)}{textLink(gradePath, ui.grade)}</div>
          </section>
        </div>
      </div>
      <div className={styles.partFooter}>{textLink(guide, ui.guide)}<Button asChild variant="primary" size="lg"><Link href={createContactHref({ application: part.label, material: "POM", source: `/applications/automotive#${part.id}` }, getLocalizedHref("/contact", localeSegment))}>{ui.inquiry}<span aria-hidden="true">↗</span></Link></Button></div>
    </article>;
  };

  const content = <div className={styles.content}>
    {parts.length > 1 ? <AutomotivePartTabs
      label={group.label}
      items={parts.map((part, index) => ({
        id: part.id,
        title: windowSystem && index < automotiveWindowCases.length
          ? design.partTitles[index]
          : part.label,
        content: windowSystem && index < automotiveWindowCases.length
          ? renderFeaturedPart(part, index)
          : <div className={styles.parts}>{renderPart(part)}</div>,
      }))}
    /> : <div className={styles.parts}>{parts.map(renderPart)}</div>}
  </div>;

  return <details
    className={styles.system}
    name="automotive-systems"
    open={windowSystem}
    suppressHydrationWarning
  >
    <summary className={styles.systemSummary}>
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>{design.selection}</p>
          <h2>{group.label}</h2>
        </div>
        <p>{windowSystem ? design.intro : parts.map(part => part.label).join(" · ")}</p>
      </div>
      <span className={styles.systemIndicator} aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="none" focusable="false">
          <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </summary>
    <div className={styles.systemBody}>{content}</div>
  </details>;
}
