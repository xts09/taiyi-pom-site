import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type {
  ApplicationItem,
  ApplicationPart,
} from "@/data/applications";
import type { SystemTopicLocaleRelease } from "@/data/systemTopicReleases";
import type { SystemTopic } from "@/data/systemTopics";
import { publicPath } from "@/lib/paths";

import styles from "./SystemTopicPage.module.css";

type RepresentativePart = {
  context: SystemTopic["representativePartContexts"][number];
  part: ApplicationPart;
};

type MaterialDirection = {
  category: {
    label: string;
    path: string;
  };
  direction: SystemTopic["materialDirections"][number];
};

type ValveFlowControlTopicPageProps = {
  application: ApplicationItem;
  localeRelease: SystemTopicLocaleRelease;
  materialDirections: readonly MaterialDirection[];
  representativeParts: readonly RepresentativePart[];
  topic: SystemTopic;
};

const topicHeroImage =
  "/applications/parts/water-control-detail-cad-hero.webp";

const componentPath = {
  eyebrow: "Component-level depth",
  title: "Valve Spools & Cartridges",
  description:
    "Use the Component guide for local spool and cartridge geometry, clearance, stick-slip, scoring, and tribology.",
  href: "/components/valve-spools-and-cartridges",
} as const;

export function ValveFlowControlTopicPage({
  application,
  localeRelease,
  materialDirections,
  representativeParts,
  topic,
}: ValveFlowControlTopicPageProps) {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.rail}>
          <Breadcrumbs
            className={styles.breadcrumbs}
            items={[
              { label: "Applications", href: "/applications" },
              {
                label: application.title,
                href: `/applications/${application.slug}`,
              },
              { label: topic.workingTitle },
            ]}
          />

          <PageHero
            className={styles.hero}
            copyClassName={styles.heroCopy}
            description={topic.overview}
            eyebrow={`${localeRelease.status} · ${application.title} engineering topic`}
            innerClassName={styles.heroInner}
            media={
              <Image
                alt="Cutaway CAD view of an assembled valve flow-control mechanism"
                className={styles.heroImage}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 92vw"
                src={publicPath(topicHeroImage)}
              />
            }
            mediaClassName={styles.heroMedia}
            title="Material Selection for Valve Flow-Control Systems"
            variant="image"
            actions={
              <>
                <Button
                  asChild
                  size="applicationHero"
                  variant="applicationHeroPrimary"
                >
                  <Link href="#requirement-allocation">
                    Review requirement allocation
                  </Link>
                </Button>
              </>
            }
          />

          <section
            aria-labelledby="system-boundary-title"
            className={styles.section}
          >
            <SectionIntro
              description={topic.scopeBoundary}
              eyebrow="System boundary"
              layout="split"
              title="Define the interacting valve architecture"
              titleId="system-boundary-title"
            />

            <div className={styles.boundaryGrid}>
              {topic.systemBoundaryRoles.map((role, index) => (
                <Card key={role.id} variant="standard">
                  <CardContent className={styles.boundaryCard}>
                    <span className={styles.cardIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{role.title}</h3>
                    <p>{role.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="representative-parts-title"
            className={styles.section}
          >
            <SectionIntro
              description="These roles show how moving, actuation, and structural interfaces combine in the finished valve."
              eyebrow="Representative interfaces"
              layout="split"
              title="Use representative Parts to expose the interfaces"
              titleId="representative-parts-title"
            />

            <div className={styles.partGrid}>
              {representativeParts.map(({ context, part }) => (
                <Card className={styles.partCard} key={part.id} variant="standard">
                  <div className={styles.partMedia}>
                    {part.image ? (
                      <Image
                        alt={part.image.alt}
                        fill
                        sizes="(max-width: 767px) 88vw, (max-width: 1199px) 42vw, 28vw"
                        src={publicPath(part.image.src)}
                      />
                    ) : null}
                  </div>
                  <CardContent className={styles.partContent}>
                    <p className={styles.partRole}>{context.role}</p>
                    <h3>{part.label}</h3>
                    <p>{context.systemContribution}</p>
                    <dl>
                      <div>
                        <dt>Interface focus</dt>
                        <dd>{context.interfaceFocus}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link
              className={`${styles.relatedLink} ${styles.componentPath}`}
              href={componentPath.href}
            >
              <span className={styles.componentPathCopy}>
                <span className={styles.relatedEyebrow}>
                  {componentPath.eyebrow}
                </span>
                <strong>{componentPath.title}</strong>
                <span>{componentPath.description}</span>
              </span>
              <span className={styles.relatedAction}>
                Open component guide
                <ArrowRight aria-hidden="true" size={18} />
              </span>
            </Link>
          </section>

          <section
            aria-labelledby="allocation-title"
            className={`${styles.section} ${styles.allocationSection}`}
            id="requirement-allocation"
          >
            <SectionIntro
              description="Each row connects one system condition to requirements, material screening, and validation."
              eyebrow="Requirement allocation"
              layout="split"
              title="Allocate each duty across interacting Parts"
              titleId="allocation-title"
              variant="dark"
            />

            <ol className={styles.allocationList}>
              {topic.requirementAllocations.map((allocation, index) => (
                <li className={styles.allocationRow} key={allocation.id}>
                  <div className={styles.allocationLead}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{allocation.condition}</h3>
                    <ul aria-label="Affected system roles">
                      {allocation.affectedRoles.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.allocationDetail}>
                    <div>
                      <p className={styles.detailLabel}>Allocate</p>
                      <p>{allocation.requirement}</p>
                    </div>
                    <div>
                      <p className={styles.detailLabel}>Material decision</p>
                      <p>{allocation.materialDecision}</p>
                    </div>
                    <div>
                      <p className={styles.detailLabel}>Validate</p>
                      <p>{allocation.validationFocus}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            aria-labelledby="selection-path-title"
            className={styles.section}
            id="selection-path"
          >
            <SectionIntro
              description="Screen families against the allocated duty, then approve only with finished-system evidence."
              eyebrow="Material direction"
              layout="split"
              title="Match material direction to the limiting requirement"
              titleId="selection-path-title"
            />

            <div className={styles.materialGrid}>
              {materialDirections.map(({ category, direction }) => (
                <Card key={category.path} variant="soft">
                  <CardContent className={styles.materialCard}>
                    <p className={styles.materialLabel}>Screening direction</p>
                    <h3>{category.label}</h3>
                    <p>{direction.screeningRole}</p>
                    <div className={styles.caution}>
                      <strong>Review boundary</strong>
                      <p>{direction.caution}</p>
                    </div>
                    <Link className={styles.inlineLink} href={category.path}>
                      Explore the material family
                      <ArrowRight aria-hidden="true" size={17} />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className={styles.selectionActions}>
              <Button asChild size="form" variant="primary">
                <Link href="/technical-data-sheets">Find Grade Data &amp; TDS</Link>
              </Button>
            </div>

            <div className={styles.validationIntro}>
              <div>
                <p className={styles.materialLabel}>Validation sequence</p>
                <h3>Validate the finished valve</h3>
              </div>
              <p>
                A family direction becomes a project decision only after
                production-intent evidence.
              </p>
            </div>

            <ol className={styles.validationGrid}>
              {topic.validationConsiderations.map((item, index) => (
                <li key={item.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                </li>
              ))}
            </ol>
          </section>

          <ActionPanel
            className={styles.actionPanel}
            eyebrow="Project review"
            title="Review the complete valve system"
            variant="recommendation"
            action={
              <Button asChild size="form" variant="primary">
                <Link href="/contact">Discuss Your Application</Link>
              </Button>
            }
          >
            Share the medium, pressure and temperature profile, movement, seals,
            mating materials, critical dimensions, process constraints, current
            grade, failure mode, and required documents. Taiyi Polymer can
            structure the material shortlist and finished-system validation plan.
          </ActionPanel>
        </div>
      </div>
    </main>
  );
}
