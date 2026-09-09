import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { Button } from "@/components/ui/button";
import { gearLandingCopy } from "@/data/gearLandingCopy";
import { gearEnduranceTest } from "@/data/gearEnduranceEvidence";
import { getComponentMaterialDirectionRelations, resolveMaterialDirectionOwners } from "@/data/componentMaterialDirections";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import type { DetailedComponentSolutionProps, ComponentDetailUi } from "@/app/(en)/components/[slug]/DetailedComponentSolution";
import shared from "@/app/(en)/components/ComponentSolutions.module.css";
import styles from "./PrecisionGearLanding.module.css";

function DisclosureSummary({ children }: { children: ReactNode }) {
  return <summary><span>{children}</span><span className={styles.disclosureIcon} aria-hidden="true" /></summary>;
}

export function PrecisionGearLanding({ detail, solution, localeSegment, ui, applicationReferences, materialOwnerLabels }: DetailedComponentSolutionProps & { ui: ComponentDetailUi }) {
  const copy = gearLandingCopy[localeSegment === "zh" ? "zh" : "en"];
  const href = (path: string) => getLocalizedHref(path, localeSegment);
  const contactHref = href(createContactHref({ application: solution.title, material: "POM", source: ui.contactSource }));
  const relations = getComponentMaterialDirectionRelations(solution.slug);
  const projectChecklist = detail.technicalDetails.find((item) => item.value === "project-checklist");
  return (
    <main className={`${shared.page} ${shared.detailPage}`}>
      <div className={shared.shell}><div className={shared.rail}>
        <Breadcrumbs className={shared.breadcrumbs} items={[
          { label: ui.breadcrumbs.applications, href: href("/applications") },
          { label: ui.breadcrumbs.components, href: href("/components") },
          { label: solution.title },
        ]} />
        <section className={shared.gearHero} aria-labelledby="component-title">
          <div className={shared.gearHeroMedia} style={{ "--component-hero-image-position": detail.hero.imagePosition ?? "72% center", "--component-hero-image-position-mobile": detail.hero.mobileImagePosition ?? "70% top" } as CSSProperties}>
            <Image alt={detail.hero.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 92vw" src={detail.hero.image} />
          </div>
          <div className={shared.gearHeroShade} aria-hidden="true" />
          <div className={shared.gearHeroContent}>
            <p className={shared.gearEyebrow}>{detail.hero.eyebrow}</p>
            <h1 id="component-title">{detail.hero.title}</h1>
            <p className={shared.gearHeroSummary}>{copy.summary}</p>
            <div className={shared.gearHeroActions}>
              <Button asChild size="applicationHero" variant="applicationHeroPrimary"><Link href={contactHref}>{ui.primaryAction}</Link></Button>
              <Button asChild size="applicationHero" variant="applicationHeroSecondary"><a href="#material-directions">{copy.secondary}</a></Button>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="material-directions">
          <div className={styles.intro}><h2 id="material-directions">{copy.materialsTitle}</h2><p>{copy.materialsIntro}</p></div>
          <ul className={styles.materials}>
            {detail.materialDirections.map((direction, index) => {
              const relation = relations.find((item) => item.id === direction.id);
              if (!relation) throw new Error(`Missing material direction: ${direction.id}`);
              const owners = resolveMaterialDirectionOwners(relation.target);
              return <li key={direction.id}>
                <h3>{copy.directions[index].title}</h3>
                <dl className={styles.materialFacts}>
                  <div><dt>{copy.suitabilityLabel}</dt><dd>{copy.directions[index].purpose}</dd></div>
                  <div><dt>{copy.validationLabel}</dt><dd>{copy.directions[index].check}</dd></div>
                </dl>
                <div className={styles.links}>{owners.map((owner) => <Link className={styles.link} data-material-owner-type={owner.type} href={href(owner.path)} key={owner.id}>{materialOwnerLabels?.[owner.id] ?? owner.label}<ArrowRight size={16} aria-hidden="true" /></Link>)}</div>
              </li>;
            })}
          </ul>
          <details className={styles.disclosure}><DisclosureSummary>{copy.compareDetails}</DisclosureSummary><div className={styles.expanded}>
            <p>{detail.hero.scope}</p>
            {detail.materialDirections.map((direction) => <div key={direction.id}><h3>{direction.title}</h3><p>{direction.summary}</p><p>{direction.caution}</p></div>)}
            <h3>{ui.pomBoundaryLabel}</h3><p>{detail.materialNote}</p>
            <Link className={styles.link} href={href("/resources/material-selection-guide")}>{ui.materialGuideAction}</Link>
          </div></details>
        </section>

        <section className={styles.section} id={gearEnduranceTest.id} aria-labelledby="gear-case-title">
          <div className={styles.case}>
            <div className={styles.caseHeading}>
              <p className={styles.eyebrow}>{copy.caseLabel}</p><h2 id="gear-case-title">{copy.caseTitle}</h2>
            </div>
            <p>{copy.caseSummary}</p>
            <Link className={styles.link} href={href(gearEnduranceTest.casePath)}>{copy.caseAction}<ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="review-information">
          <div className={styles.inquiry}>
            <h2 id="review-information">{copy.inquiryTitle}</h2>
            <div>
              <p>{copy.inquirySummary}</p>
              <Button asChild size="applicationHero" variant="applicationHeroPrimary"><Link href={contactHref}>{ui.primaryAction}</Link></Button>
            </div>
          </div>
          <details className={styles.disclosure}><DisclosureSummary>{copy.checklist}</DisclosureSummary><div className={styles.expanded}>
            {(projectChecklist?.groups ?? detail.inquiryGroups).map((group) => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
            <h3>{ui.expectedOutputLabel}</h3><p>{detail.processOutcome}</p><p>{detail.copy.processBoundary}</p>
          </div></details>
        </section>

        <RelatedCaseStudies sourcePath={`/components/${solution.slug}`} localeSegment={localeSegment} />

        <section className={styles.section} aria-labelledby="technical-detail">
          <div className={styles.intro}><h2 id="technical-detail">{copy.technicalTitle}</h2><p>{copy.technicalIntro}</p></div>
          <details className={styles.disclosure} id="failure-review"><DisclosureSummary>{copy.diagnosis}</DisclosureSummary><div className={styles.expanded}>
            {detail.decisionRows.map((row) => <div key={row.symptom}><h3>{row.symptom}</h3><p><strong>{ui.checkFirstLabel}: </strong>{row.review}</p><p><strong>{ui.materialResponseLabel}: </strong>{row.direction}</p></div>)}
          </div></details>
          {detail.technicalDetails.filter((item) => item.value !== "project-checklist").map((item) => <details className={styles.disclosure} key={item.value}><DisclosureSummary>{item.title}</DisclosureSummary><div className={styles.expanded}>
            {item.groups.map((group) => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map((entry) => <li key={entry}>{entry}</li>)}</ul></div>)}
          </div></details>)}
          <div className={styles.reading}>
            <div><h3 id="related-reading">{copy.resources}</h3><ul>{detail.related.map((item) => <li key={item.href}><Link className={styles.link} href={href(item.href)}>{item.label}</Link></li>)}</ul></div>
            <nav aria-labelledby="component-application-context"><h3 id="component-application-context">{copy.applications}</h3><ul>{applicationReferences.map((item) => <li key={item.href}><Link className={styles.link} href={href(item.href)}>{item.applicationTitle}</Link></li>)}</ul></nav>
          </div>
        </section>
      </div></div>
    </main>
  );
}
