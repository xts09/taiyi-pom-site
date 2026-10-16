import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionIntro } from "@/components/SectionIntro";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getRelatedCaseStudies } from "@/data/caseStudies";
import { gearLandingCopy } from "@/data/gearLandingCopy";
import { gearEnduranceTest } from "@/data/gearEnduranceEvidence";
import {
  getComponentMaterialDirectionRelations,
  resolveMaterialDirectionOwners,
} from "@/data/componentMaterialDirections";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import type {
  DetailedComponentSolutionProps,
  ComponentDetailUi,
} from "@/app/(en)/components/[slug]/DetailedComponentSolution";
import shared from "@/app/(en)/components/ComponentSolutions.module.css";
import styles from "./PrecisionGearLanding.module.css";

export function PrecisionGearLanding({
  detail,
  solution,
  localeSegment,
  ui,
  applicationReferences,
  materialOwnerLabels,
}: DetailedComponentSolutionProps & { ui: ComponentDetailUi }) {
  const copy = gearLandingCopy[localeSegment === "zh" ? "zh" : "en"];
  const href = (path: string) => getLocalizedHref(path, localeSegment);
  const contactHref = href(
    createContactHref({
      application: solution.title,
      material: "POM",
      source: ui.contactSource,
    }),
  );
  const relations = getComponentMaterialDirectionRelations(solution.slug);
  const relatedCases = getRelatedCaseStudies({
    sourcePath: "/components/" + solution.slug,
    localeSegment,
  });

  return (
    <main className={[shared.page, shared.detailPage].join(" ")}>
      <div className={shared.shell}>
        <div className={shared.rail}>
          <Breadcrumbs
            className={shared.breadcrumbs}
            items={[
              { label: ui.breadcrumbs.applications, href: href("/applications") },
              { label: ui.breadcrumbs.components, href: href("/components") },
              { label: solution.title },
            ]}
          />

          <section className={shared.gearHero} aria-labelledby="component-title">
            <div
              className={shared.gearHeroMedia}
              style={
                {
                  "--component-hero-image-position":
                    detail.hero.imagePosition ?? "72% center",
                  "--component-hero-image-position-mobile":
                    detail.hero.mobileImagePosition ?? "70% top",
                } as CSSProperties
              }
            >
              <Image
                alt={detail.hero.imageAlt}
                fill
                preload
                sizes="(max-width: 768px) 100vw, 92vw"
                src={detail.hero.image}
              />
            </div>
            <div className={shared.gearHeroShade} aria-hidden="true" />
            <div className={shared.gearHeroContent}>
              <p className={shared.gearEyebrow}>{detail.hero.eyebrow}</p>
              <h1 id="component-title">{detail.hero.title}</h1>
              <p className={shared.gearHeroSummary}>{copy.summary}</p>
              <div className={shared.gearHeroActions}>
                <Button asChild size="applicationHero" variant="applicationHeroPrimary">
                  <a href="#material-directions">{copy.secondary}</a>
                </Button>
                <Button asChild size="applicationHero" variant="applicationHeroSecondary">
                  <Link href={contactHref}>{ui.primaryAction}</Link>
                </Button>
              </div>
            </div>
          </section>

          <div className={styles.content}>
            <section className={[styles.section, styles.materialSection].join(" ")} aria-labelledby="material-directions">
              <SectionIntro className={styles.intro} titleId="material-directions" title={copy.materialsTitle} description={copy.materialsIntro} />
              <div className={styles.materialChoices}>
                <ul className={styles.materials}>
                  {detail.materialDirections.map((direction, index) => {
                    const relation = relations.find((item) => item.id === direction.id);
                    if (!relation) throw new Error("Missing material direction: " + direction.id);
                    const owners = resolveMaterialDirectionOwners(relation.target);
                    return (
                      <li id={direction.id} key={direction.id}>
                        <h3>{copy.directions[index].title}</h3>
                        <div className={styles.materialBody}>
                          <p className={styles.materialPurpose}>{copy.directions[index].purpose}</p>
                          <div className={styles.links}>
                            {owners.map((owner) => (
                              <Link
                                className={styles.link}
                                data-material-owner-type={owner.type}
                                href={href(owner.path)}
                                key={owner.id}
                              >
                                <span>{materialOwnerLabels?.[owner.id] ?? owner.label}</span>
                                <ArrowRight size={16} aria-hidden="true" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Accordion type="single" collapsible variant="technical-row">
                  <AccordionItem value="selection-checks">
                    <AccordionTrigger>{copy.compareDetails}</AccordionTrigger>
                    <AccordionContent forceMount className={styles.expanded}>
                      <p>{detail.hero.scope}</p>
                      {detail.materialDirections.map((direction, index) => (
                        <div key={direction.id}>
                          <h4>{direction.title}</h4>
                          <p><strong>{copy.validationLabel}: </strong>{copy.directions[index].check}</p>
                          <p>{direction.summary}</p>
                          <p>{direction.caution}</p>
                        </div>
                      ))}
                      <h4>{ui.pomBoundaryLabel}</h4>
                      <p>{detail.materialNote}</p>
                      <Link className={styles.link} href={href("/resources/material-selection-guide")}>
                        <span>{ui.materialGuideAction}</span>
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <section
              className={styles.section}
              aria-labelledby="related-cases-precision-plastic-gears"
              data-case-study-backlinks
            >
              <SectionIntro className={styles.intro} titleId="related-cases-precision-plastic-gears" title={copy.casesTitle} description={copy.casesIntro} />

              <Card asChild variant="evidence">
                <article className={styles.case} id={gearEnduranceTest.id} aria-labelledby="gear-case-title">
                  <div className={styles.caseStory}>
                    <h3 id="gear-case-title">{copy.caseTitle}</h3>
                    <p>{copy.caseProblem}</p>
                    <p>{copy.caseOutcome}</p>
                    <Link className={styles.link} href={href(gearEnduranceTest.casePath)}>
                      <span>{copy.caseAction}</span>
                      <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                  </div>
                  <div className={styles.caseTest}>
                    <h4>{copy.caseTestTitle}</h4>
                    <p className={styles.caseResult}>{copy.caseResult}</p>
                    <dl className={styles.testConditions}>
                      {copy.caseConditions.map((condition) => (
                        <div key={condition.label}>
                          <dt>{condition.label}</dt>
                          <dd>{condition.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className={styles.caseBoundary} id={gearEnduranceTest.interpretationId}>
                      {copy.caseBoundary}
                    </p>
                  </div>
                </article>
              </Card>

              <div className={styles.supportingCases}>
                {copy.relatedCases.map((reference) => {
                  const study = relatedCases.find((item) => item.id === reference.id);
                  if (!study) return null;
                  return (
                    <article key={study.id}>
                      <div className={styles.supportingHeading}>
                        <h3>
                          <Link className={styles.caseTitleLink} href={href(study.path + "#top")}>
                            <span>{study.title}</span>
                            <ArrowRight size={18} aria-hidden="true" />
                          </Link>
                        </h3>
                        <p className={styles.caseMeta}>{study.grade} · {study.label}</p>
                      </div>
                      <div className={styles.supportingSummary}>
                        <p>{reference.issue}</p>
                        <p>{reference.response}</p>
                        <p className={styles.caseStage}><span>{copy.caseStageLabel}: </span>{study.outcome}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
              <Link className={styles.allCases} href={href("/case-studies")}>
                <span>{copy.allCasesAction}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </section>

            <section className={[styles.section, styles.technicalSection].join(" ")} aria-labelledby="technical-detail">
              <SectionIntro className={styles.intro} titleId="technical-detail" title={copy.technicalTitle} description={copy.technicalIntro} />
              <Accordion type="single" collapsible variant="technical-row" className={styles.technicalTopics}>
                <AccordionItem value="failure-review" id="failure-review">
                  <AccordionTrigger>{copy.diagnosis}</AccordionTrigger>
                  <AccordionContent forceMount className={styles.expanded}>
                    {detail.decisionRows.map((row) => (
                      <div key={row.symptom}>
                        <h4>{row.symptom}</h4>
                        <p><strong>{ui.checkFirstLabel}: </strong>{row.review}</p>
                        <p><strong>{ui.materialResponseLabel}: </strong>{row.direction}</p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                {detail.technicalDetails
                  .filter((item) => item.value !== "project-checklist")
                  .map((item) => (
                    <AccordionItem value={item.value} id={item.value} key={item.value}>
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent forceMount className={styles.expanded}>
                        {item.groups.map((group) => (
                          <div key={group.title}>
                            <h4>{group.title}</h4>
                            <ul>{group.items.map((entry) => <li key={entry}>{entry}</li>)}</ul>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
              <div className={styles.reading}>
                <div>
                  <h3 id="related-reading">{copy.resources}</h3>
                  <ul>
                    {detail.related.map((item) => (
                      <li key={item.href}>
                        <Link className={styles.link} href={href(item.href)}>
                          <span>{item.label}</span><ArrowRight size={16} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <nav aria-labelledby="component-application-context">
                  <h3 id="component-application-context">{copy.applications}</h3>
                  <ul>
                    {applicationReferences.map((item) => (
                      <li key={item.href}>
                        <Link className={styles.link} href={href(item.href)}>
                          <span>{item.applicationTitle}</span><ArrowRight size={16} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </section>

            <section className={[styles.section, styles.inquiry].join(" ")} aria-labelledby="review-information">
              <ActionPanel
                variant="compact"
                title={copy.inquiryTitle}
                titleId="review-information"
                action={
                  <Button asChild size="applicationHero" variant="applicationHeroPrimary">
                    <Link href={contactHref}>{ui.primaryAction}</Link>
                  </Button>
                }
              >
                {copy.inquirySummary}
              </ActionPanel>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
