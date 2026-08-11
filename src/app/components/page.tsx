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
const componentDirectoryHero = {
  src: "/applications/parts/generated/components-directory-gears-cad-v2.webp",
  alt: "CAD visualization of a wiper motor gear assembly",
};

const componentDirectoryImages: Record<
  string,
  { src: string; position: string; scale?: string; hoverScale?: string }
> = {
  "precision-plastic-gears": {
    src: "/applications/parts/generated/components-directory-gears-cad-transparent-v1.webp",
    position: "center",
  },
  "bushings-and-sleeves": {
    src: "/applications/parts/generated/components-directory-bushings-cad-transparent-v1.webp",
    position: "center",
    scale: "1.08",
    hoverScale: "1.095",
  },
  "conveyor-chain-components": {
    src: "/applications/parts/generated/components-directory-conveyor-chain-cad-transparent-v1.webp",
    position: "center",
  },
  "valve-spools-and-cartridges": {
    src: "/applications/parts/generated/components-directory-valve-cartridges-cad-transparent-v1.webp",
    position: "center",
  },
  "textile-guide-components": {
    src: "/applications/parts/generated/components-directory-textile-guide-cad-transparent-v1.webp",
    position: "center",
  },
  "ic-handling-trays": {
    src: "/applications/parts/generated/components-directory-ic-jedec-tray-cad-transparent-v1.webp",
    position: "center",
  },
};

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
            description="Compare six component paths by part function, operating conditions, failure modes, molding constraints, and validation needs."
            media={
              <Image
                fill
                loading="eager"
                src={componentDirectoryHero.src}
                alt={componentDirectoryHero.alt}
                sizes="(min-width: 82rem) 82rem, 100vw"
                quality={85}
                className={styles.heroImage}
              />
            }
            actions={
              <>
                <Button asChild size="applicationHero" variant="applicationHeroPrimary">
                  <Link href="#component-families">Browse Component Families</Link>
                </Button>
                <Button asChild size="applicationHero" variant="inverse">
                  <Link href="/applications">Browse Industries</Link>
                </Button>
              </>
            }
          />

          <section className={styles.section} id="component-families">
            <SectionIntro
              className={styles.directoryIntro}
              layout="stacked"
              eyebrow="Component Directory"
              title="Choose the family closest to your part"
              description="Review typical parts and engineering priorities, then open the path closest to your component."
            />

            <div className={styles.directory}>
              {componentSolutions.map((solution, index) => {
                const detail: ComponentSolutionDetail | undefined =
                  getComponentSolutionDetailBySlug(solution.slug);
                const directoryImage = componentDirectoryImages[solution.slug];
                const imagePosition =
                  directoryImage?.position ?? detail?.hero.imagePosition ?? "72% center";
                const mobileImagePosition =
                  directoryImage?.position ??
                  detail?.hero.mobileImagePosition ??
                  imagePosition;

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
                              "--component-directory-image-scale":
                                directoryImage?.scale ?? "1",
                              "--component-directory-image-scale-hover":
                                directoryImage?.hoverScale ?? "1.015",
                            } as CSSProperties
                          }
                        >
                          <Image
                            fill
                            loading={index === 0 ? "eager" : "lazy"}
                            src={directoryImage?.src ?? detail.hero.image}
                            alt=""
                            sizes="(min-width: 64.0625rem) 18vw, (min-width: 48rem) 42vw, 100vw"
                            quality={85}
                            className={
                              directoryImage
                                ? styles.directoryImage
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
