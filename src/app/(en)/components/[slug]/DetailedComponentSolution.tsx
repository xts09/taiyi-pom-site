import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { ComponentSolution } from "@/data/componentSolutions";
import type { ComponentSolutionDetail } from "@/data/componentSolutionDetails";
import type { ComponentApplicationReference } from "@/data/applicationComponentRelations";
import {
  getComponentMaterialDirectionRelations,
  resolveMaterialDirectionOwners,
  type ComponentMaterialDirectionRelation,
} from "@/data/componentMaterialDirections";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import styles from "../ComponentSolutions.module.css";

const designContract = `<!--
THESIS: Component-specific diagnosis leads the material conversation; this family refuses a generic resin landing page.
OWN-WORLD: Inherited Taiyi industrial navy, technical paper, cobalt actions, real part or engineering-context imagery, and scan-first indexed rows.
STORY: Recognize the part and failure, compare candidate materials, send the minimum project input, then validate on molded components and the complete system.
FIRST VIEWPORT: Desktop shows the part, outcome, project inputs, and inquiry action together; mobile keeps the part, outcome, and actions immediately legible with the project-input rail following intact.
FORM: Direct extension of the approved diagnostic brief; structure chosen over cards or a generic brochure sequence; concept seed not applicable.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

type DetailedComponentSolutionProps = {
  detail: ComponentSolutionDetail;
  solution: ComponentSolution;
  localeSegment?: LocalizedUrlSegment;
  ui?: ComponentDetailUi;
  applicationReferences: readonly ComponentApplicationReference[];
  materialOwnerLabels?: Readonly<Record<string, string>>;
};

export type ComponentDetailUi = {
  breadcrumbs: {
    applications: string;
    components: string;
  };
  primaryAction: string;
  familyAction: string;
  problemEyebrow: string;
  observedProblemLabel: string;
  checkFirstLabel: string;
  materialResponseLabel: string;
  materialsEyebrow: string;
  materialsTitle: string;
  cautionLabel: string;
  pomBoundaryLabel: string;
  materialGuideAction: string;
  inquiryEyebrow: string;
  inquiryTitle: string;
  inquiryDescription: string;
  processEyebrow: string;
  processTitle: string;
  expectedOutputLabel: string;
  gradeDataAction: string;
  technicalEyebrow: string;
  technicalTitle: string;
  technicalDescription: string;
  relatedEyebrow: string;
  relatedTitle: string;
  applicationContextTitle: string;
  applicationContextDescription: string;
  partExampleLabel: string;
  finalAction: string;
  contactSource: string;
};

const englishUi: ComponentDetailUi = {
  breadcrumbs: {
    applications: "Applications",
    components: "Component Solutions",
  },
  primaryAction: "Discuss Your Application",
  familyAction: "Review Relevant POM Families",
  problemEyebrow: "Start with the problem",
  observedProblemLabel: "Observed problem",
  checkFirstLabel: "Check first",
  materialResponseLabel: "Material response",
  materialsEyebrow: "Candidate materials",
  materialsTitle: "Compare the material response, not just the resin name.",
  cautionLabel: "Project caution",
  pomBoundaryLabel: "When POM may not fit",
  materialGuideAction: "Open the material selection guide",
  inquiryEyebrow: "Minimum project input",
  inquiryTitle: "Send what you know. Mark what is still unknown.",
  inquiryDescription:
    "A drawing plus the operating conditions already available is enough to start. Mark unknown items as not yet confirmed and add them after the first response.",
  processEyebrow: "After contact",
  processTitle: "Know what the first response should produce.",
  expectedOutputLabel: "Expected output",
  gradeDataAction: "Find Grade Data & TDS",
  technicalEyebrow: "Technical depth",
  technicalTitle: "Open the detail when the project needs it.",
  technicalDescription:
    "Open the operating criteria, tooling requirements, molded-part tests, and full project checklist as needed.",
  relatedEyebrow: "Related guidance",
  relatedTitle: "Open the next technical reference.",
  applicationContextTitle: "Where this component appears",
  applicationContextDescription:
    "Open the relevant application path to review operating conditions, selection priorities, and candidate material directions in context.",
  partExampleLabel: "Part example",
  finalAction: "Discuss Your Application",
  contactSource: "Component solution",
};

export function DetailedComponentSolution({
  detail,
  solution,
  localeSegment,
  ui = englishUi,
  applicationReferences,
  materialOwnerLabels,
}: DetailedComponentSolutionProps) {
  const localizedHref = (href: string) =>
    getLocalizedHref(href, localeSegment);
  const contactHref = localizedHref(createContactHref({
    application: solution.title,
    source: ui.contactSource,
  }));
  const modifiedPomPath = localizedHref(
    solution.slug === "ic-handling-trays"
      ? "/modified-pom-compounds#electrical-control"
      : "/modified-pom-compounds#wear-impact-weathering",
  );
  const materialDirectionRelationById = new Map<
    string,
    ComponentMaterialDirectionRelation
  >(
    getComponentMaterialDirectionRelations(solution.slug).map((relation) => [
      relation.id,
      relation,
    ]),
  );
  const materialDirectionRows = detail.materialDirections.map((direction) => {
    const relation = materialDirectionRelationById.get(direction.id);

    if (!relation) {
      throw new Error(`Missing material-direction target: ${direction.id}`);
    }

    const owners = resolveMaterialDirectionOwners(relation.target).map(
      (owner) => ({
        ...owner,
        label: materialOwnerLabels?.[owner.id] ?? owner.label,
      }),
    );

    if (owners.length === 0) {
      throw new Error(`Unresolved material-direction target: ${direction.id}`);
    }

    return { direction, owners };
  });

  return (
    <main className={`${styles.page} ${styles.detailPage}`}>
      <span
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: designContract }}
        hidden
      />
      <div className={styles.shell}>
        <div className={styles.rail}>
          <Breadcrumbs
            className={styles.breadcrumbs}
            items={[
              {
                label: ui.breadcrumbs.applications,
                href: localizedHref("/applications"),
              },
              {
                label: ui.breadcrumbs.components,
                href: localizedHref("/components"),
              },
              { label: solution.title },
            ]}
          />

          <section className={styles.gearHero} aria-labelledby="component-title">
            <div
              className={styles.gearHeroMedia}
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
                priority
                sizes="(max-width: 768px) 100vw, 92vw"
                src={detail.hero.image}
              />
            </div>
            <div className={styles.gearHeroShade} aria-hidden="true" />

            <div className={styles.gearHeroContent}>
              <p className={styles.gearEyebrow}>{detail.hero.eyebrow}</p>
              <h1 id="component-title">{detail.hero.title}</h1>
              <p className={styles.gearHeroSummary}>{detail.hero.summary}</p>
              <p className={styles.gearHeroScope}>{detail.hero.scope}</p>
              <div className={styles.gearHeroActions}>
                <Button asChild size="applicationHero" variant="applicationHeroPrimary">
                  <Link href={contactHref}>{ui.primaryAction}</Link>
                </Button>
                <Button asChild size="applicationHero" variant="applicationHeroSecondary">
                  <Link href={modifiedPomPath}>{ui.familyAction}</Link>
                </Button>
              </div>
            </div>

            <dl
              className={styles.gearHeroBrief}
              aria-label={detail.copy.reviewInputsLabel}
            >
              {detail.hero.reviewInputs.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            className={`${styles.gearSection} ${styles.applicationContextSection}`}
            aria-labelledby="component-application-context"
          >
            <div className={styles.applicationContextIntro}>
              <h2 id="component-application-context">
                {ui.applicationContextTitle}
              </h2>
              <p>{ui.applicationContextDescription}</p>
            </div>
            <nav
              className={styles.applicationContextLinks}
              aria-label={ui.applicationContextTitle}
            >
              {applicationReferences.map((reference) => (
                <Link
                  href={localizedHref(reference.href)}
                  key={reference.applicationSlug}
                >
                  <span>
                    <strong>{reference.applicationTitle}</strong>
                    {reference.partExamples.map((part) => (
                      <small key={part.id}>
                        {ui.partExampleLabel}: {part.label}
                      </small>
                    ))}
                  </span>
                  <ArrowRight aria-hidden="true" size={19} />
                </Link>
              ))}
            </nav>
          </section>

          <section
            className={`${styles.gearSection} ${styles.failureSection}`}
            aria-labelledby="failure-review"
          >
            <div className={styles.failureHeader}>
              <div>
                <p className={styles.gearEyebrow}>{ui.problemEyebrow}</p>
                <h2 id="failure-review">{detail.copy.problemTitle}</h2>
              </div>
              <p>{detail.copy.problemSummary}</p>
            </div>

            <div className={styles.decisionList}>
              {detail.decisionRows.map((row, index) => (
                <article key={row.symptom}>
                  <span className={styles.decisionIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className={styles.decisionLabel}>
                      {ui.observedProblemLabel}
                    </span>
                    <h3>{row.symptom}</h3>
                  </div>
                  <div>
                    <span className={styles.decisionLabel}>
                      {ui.checkFirstLabel}
                    </span>
                    <p>{row.review}</p>
                  </div>
                  <div>
                    <span className={styles.decisionLabel}>
                      {ui.materialResponseLabel}
                    </span>
                    <p>{row.direction}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.gearSection} aria-labelledby="material-directions">
            <div className={styles.gearSectionIntro}>
              <div>
                <p className={styles.gearEyebrow}>{ui.materialsEyebrow}</p>
                <h2 id="material-directions">{ui.materialsTitle}</h2>
              </div>
              <p>{detail.copy.materialSummary}</p>
            </div>

            <ol className={styles.materialDirectionList}>
              {materialDirectionRows.map(({ direction, owners }, index) => (
                <li key={direction.id}>
                  <span className={styles.materialDirectionIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{direction.title}</h3>
                    <p>{direction.summary}</p>
                    <ul className={styles.materialDirectionOwners}>
                      {owners.map((owner) => (
                        <li key={owner.id}>
                          <Link
                            data-material-owner-type={owner.type}
                            href={localizedHref(owner.path)}
                          >
                            <span>{owner.label}</span>
                            <ArrowRight aria-hidden="true" size={15} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.materialDirectionCaution}>
                    <span>{ui.cautionLabel}</span>
                    <p>{direction.caution}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside
              className={styles.materialBoundary}
              aria-label={ui.pomBoundaryLabel}
            >
              <div>
                <span>{ui.pomBoundaryLabel}</span>
                <p>{detail.materialNote}</p>
              </div>
              <Link href={localizedHref("/resources/material-selection-guide")}>
                {ui.materialGuideAction}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </aside>
          </section>

          <section
            className={`${styles.gearSection} ${styles.inquirySection}`}
            aria-labelledby="review-information"
          >
            <div className={styles.gearSectionHeading}>
              <div>
                <p className={styles.gearEyebrow}>{ui.inquiryEyebrow}</p>
                <h2 id="review-information">{ui.inquiryTitle}</h2>
              </div>
              <p>{ui.inquiryDescription}</p>
            </div>

            <div className={styles.inquiryGrid}>
              {detail.inquiryGroups.map((group, index) => (
                <article key={group.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            className={`${styles.gearSection} ${styles.processSection}`}
            aria-labelledby="after-contact"
          >
            <div className={styles.gearSectionIntro}>
              <div>
                <p className={styles.gearEyebrow}>{ui.processEyebrow}</p>
                <h2 id="after-contact">{ui.processTitle}</h2>
              </div>
              <p>{detail.copy.processSummary}</p>
            </div>

            <ol className={styles.processSteps}>
              {detail.processSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>

            <div className={styles.processOutcome}>
              <div>
                <span>{ui.expectedOutputLabel}</span>
                <p>{detail.processOutcome}</p>
              </div>
              <Link href={localizedHref("/technical-data-sheets")}>
                {ui.gradeDataAction}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </section>

          <section
            className={`${styles.gearSection} ${styles.technicalSection}`}
            aria-labelledby="technical-detail"
          >
            <div className={styles.gearSectionHeading}>
              <div>
                <p className={styles.gearEyebrow}>{ui.technicalEyebrow}</p>
                <h2 id="technical-detail">{ui.technicalTitle}</h2>
              </div>
              <p>{ui.technicalDescription}</p>
            </div>

            <Accordion className={styles.technicalAccordion} type="multiple">
              {detail.technicalDetails.map((item, index) => (
                <AccordionItem
                  className={styles.technicalItem}
                  key={item.value}
                  value={item.value}
                >
                  <AccordionTrigger className={styles.technicalTrigger}>
                    <span className={styles.technicalIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.technicalTriggerCopy}>
                      <strong>{item.title}</strong>
                      <small>{item.summary}</small>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className={styles.technicalContent}>
                    <div className={styles.technicalGroups}>
                      {item.groups.map((group) => (
                        <section key={group.title}>
                          <h3>{group.title}</h3>
                          <ul>
                            {group.items.map((detailItem) => (
                              <li key={detailItem}>{detailItem}</li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className={styles.relatedCompact} aria-labelledby="related-reading">
              <div className={styles.relatedCompactHeader}>
                <p className={styles.gearEyebrow}>{ui.relatedEyebrow}</p>
                <h3 id="related-reading">{ui.relatedTitle}</h3>
              </div>
              <div className={styles.gearRelatedLinks}>
                {detail.related.map((item) => (
                  <Link href={localizedHref(item.href)} key={item.href}>
                    <span>
                      <strong>{item.label}</strong>
                      <small>{item.description}</small>
                    </span>
                    <ArrowRight aria-hidden="true" size={19} />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <ActionPanel
            className={styles.gearActionPanel}
            eyebrow={detail.finalCta.eyebrow}
            footerAdjacent
            title={detail.finalCta.title}
            variant="evidence"
            action={
              <Button asChild size="form" variant="inverse">
                <Link href={contactHref}>{ui.finalAction}</Link>
              </Button>
            }
          >
            {detail.finalCta.body}
          </ActionPanel>
        </div>
      </div>
    </main>
  );
}
