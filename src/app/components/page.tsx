import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serializeJsonLd } from "@/lib/jsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getComponentSolutionDetailBySlug,
  type ComponentSolutionDetail,
} from "@/data/componentSolutionDetails";
import { componentSolutions } from "@/data/componentSolutions";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";
import styles from "./ComponentSolutions.module.css";

const componentSolutionsTitle =
  "Component Solutions for Modified POM Parts | Taiyi Polymer";
const componentSolutionsDescription =
  "Browse component-led review paths for gears, bushings, conveyor parts, valve internals, textile guides, and IC handling trays.";
const featuredComponent = getComponentSolutionDetailBySlug(
  "precision-plastic-gears",
);

export const metadata: Metadata = createPageMetadata({
  title: componentSolutionsTitle,
  description: componentSolutionsDescription,
  path: "/components",
});

const componentSolutionsJsonLd = [
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Applications", path: "/applications" },
    { name: "Component Solutions", path: "/components" },
  ]),
  createCollectionPageJsonLd({
    title: componentSolutionsTitle,
    description: componentSolutionsDescription,
    path: "/components",
    items: componentSolutions.map((solution) => ({
      name: solution.title,
      path: `/components/${solution.slug}`,
    })),
  }),
];

export default function ComponentSolutionsPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(componentSolutionsJsonLd),
        }}
      />
      <div className={styles.shell}>
        <div className={styles.rail}>
          <PageHero
            variant="evidence"
            className={styles.hero}
            innerClassName={styles.heroInner}
            mediaClassName={styles.heroMedia}
            actionsClassName={styles.heroActions}
            eyebrow="Component Solutions"
            title="Start with the molded component"
            description="Explore six component-led review paths that connect part function, operating conditions, failure modes, molding constraints, and validation needs to practical material directions."
            media={
              featuredComponent ? (
                <Image
                  fill
                  loading="eager"
                  src={featuredComponent.hero.image}
                  alt={featuredComponent.hero.imageAlt}
                  sizes="(min-width: 82rem) 82rem, 100vw"
                  className={styles.heroImage}
                />
              ) : undefined
            }
            actions={
              <>
                <Button asChild size="applicationHero" variant="applicationHeroPrimary">
                  <Link href="#component-families">Browse Component Families</Link>
                </Button>
                <Button asChild size="applicationHero" variant="applicationHeroSecondary">
                  <Link href="/applications">Browse Industries</Link>
                </Button>
              </>
            }
          />

          <section className={styles.section} id="component-families">
            <SectionIntro
              className={styles.directoryIntro}
              layout="split"
              eyebrow="Component Directory"
              title="Choose the family closest to your part"
              description="Each engineering page organizes recurring failure modes, candidate material directions, minimum project inputs, molding considerations, and component-level validation steps."
            />

            <div className={styles.directory}>
              {componentSolutions.map((solution, index) => {
                const detail: ComponentSolutionDetail | undefined =
                  getComponentSolutionDetailBySlug(solution.slug);
                const imagePosition = detail?.hero.imagePosition ?? "72% center";
                const mobileImagePosition =
                  detail?.hero.mobileImagePosition ?? imagePosition;

                return (
                  <Card key={solution.slug} asChild variant="interactive">
                    <Link
                      href={`/components/${solution.slug}`}
                      className={styles.card}
                      aria-label={`Open the ${solution.title} material review`}
                    >
                      {detail ? (
                        <div
                          className={styles.cardMedia}
                          style={
                            {
                              "--component-card-image-position": imagePosition,
                              "--component-card-image-position-mobile":
                                mobileImagePosition,
                            } as CSSProperties
                          }
                        >
                          <Image
                            fill
                            loading={index === 0 ? "eager" : "lazy"}
                            src={detail.hero.image}
                            alt=""
                            sizes="(min-width: 1024px) 19rem, (min-width: 768px) 36vw, 100vw"
                            className={
                              solution.slug === "ic-handling-trays"
                                ? styles.cardImageContain
                                : undefined
                            }
                          />
                        </div>
                      ) : null}

                      <CardContent className={styles.cardContent}>
                        <span className={styles.cardMeta}>
                          {solution.category}
                        </span>
                        <h2>{solution.title}</h2>
                        <dl className={styles.cardFacts}>
                          <div>
                            <dt>Typical parts</dt>
                            <dd>{solution.typicalParts.slice(0, 2).join(" · ")}</dd>
                          </div>
                          <div>
                            <dt>Review focus</dt>
                            <dd>{solution.reviewAreas.slice(0, 2).join(" · ")}</dd>
                          </div>
                        </dl>
                        <span className={styles.cardAction}>
                          Review component requirements{" "}
                          <ArrowRight aria-hidden="true" size={17} />
                        </span>
                      </CardContent>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
