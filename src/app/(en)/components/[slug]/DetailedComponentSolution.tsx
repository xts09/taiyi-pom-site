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
};

export function DetailedComponentSolution({
  detail,
  solution,
}: DetailedComponentSolutionProps) {
  const contactHref = createContactHref({
    application: solution.title,
    source: "Component solution",
  });
  const modifiedPomPath =
    solution.slug === "ic-handling-trays"
      ? "/modified-pom-compounds#electrical-control"
      : "/modified-pom-compounds#wear-impact-weathering";

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
              { label: "Applications", href: "/applications" },
              { label: "Component Solutions", href: "/components" },
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
                  <Link href={contactHref}>Discuss Your Application</Link>
                </Button>
                <Button asChild size="applicationHero" variant="applicationHeroSecondary">
                  <Link href={modifiedPomPath}>Review Relevant POM Families</Link>
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
            className={`${styles.gearSection} ${styles.failureSection}`}
            aria-labelledby="failure-review"
          >
            <div className={styles.failureHeader}>
              <div>
                <p className={styles.gearEyebrow}>Start with the problem</p>
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
                    <span className={styles.decisionLabel}>Observed problem</span>
                    <h3>{row.symptom}</h3>
                  </div>
                  <div>
                    <span className={styles.decisionLabel}>Check first</span>
                    <p>{row.review}</p>
                  </div>
                  <div>
                    <span className={styles.decisionLabel}>
                      Material response
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
                <p className={styles.gearEyebrow}>Candidate materials</p>
                <h2 id="material-directions">Compare the material response, not just the resin name.</h2>
              </div>
              <p>{detail.copy.materialSummary}</p>
            </div>

            <ol className={styles.materialDirectionList}>
              {detail.materialDirections.map((direction, index) => (
                <li key={direction.title}>
                  <span className={styles.materialDirectionIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{direction.title}</h3>
                    <p>{direction.summary}</p>
                  </div>
                  <div className={styles.materialDirectionCaution}>
                    <span>Project caution</span>
                    <p>{direction.caution}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className={styles.materialBoundary} aria-label="When POM may not fit">
              <div>
                <span>When POM may not fit</span>
                <p>{detail.materialNote}</p>
              </div>
              <Link href="/resources/material-selection-guide">
                Open the material selection guide
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
                <p className={styles.gearEyebrow}>Minimum project input</p>
                <h2 id="review-information">Send what you know. Mark what is still unknown.</h2>
              </div>
              <p>
                A drawing plus the operating conditions already available is enough
                to start. Mark unknown items as not yet confirmed and add them after
                the first response.
              </p>
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
                <p className={styles.gearEyebrow}>After contact</p>
                <h2 id="after-contact">Know what the first response should produce.</h2>
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
                <span>Expected output</span>
                <p>{detail.processOutcome}</p>
              </div>
              <Link href="/technical-data-sheets">
                Find Grade Data &amp; TDS
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
                <p className={styles.gearEyebrow}>Technical depth</p>
                <h2 id="technical-detail">Open the detail when the project needs it.</h2>
              </div>
              <p>
                Open the operating criteria, tooling requirements, molded-part tests,
                and full project checklist as needed.
              </p>
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
                <p className={styles.gearEyebrow}>Related guidance</p>
                <h3 id="related-reading">Open the next technical reference.</h3>
              </div>
              <div className={styles.gearRelatedLinks}>
                {detail.related.map((item) => (
                  <Link href={item.href} key={item.href}>
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
                <Link href={contactHref}>Discuss Your Application</Link>
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
