import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "@/app/(en)/components/ComponentSolutions.module.css";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  getLocalizedComponentDetail,
  getLocalizedComponentIndexMessages,
  getLocalizedComponentSolutions,
  isLocalizedComponentSlug,
} from "@/i18n/componentMessages";
import { getLocalizedHref } from "@/i18n/releaseManifest";

const componentDirectoryHero = {
  src: "/applications/parts/generated/components-directory-gears-cad-v2.webp",
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

type LocalizedComponentsPageProps = {
  localeSegment: LocalizedUrlSegment;
};

export function LocalizedComponentsPage({
  localeSegment,
}: LocalizedComponentsPageProps) {
  const messages = getLocalizedComponentIndexMessages(localeSegment);
  const componentSolutions = getLocalizedComponentSolutions(localeSegment);
  const localizedHref = (href: string) =>
    getLocalizedHref(href, localeSegment);

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.rail}>
          <PageHero
            variant="evidence"
            className={styles.hero}
            innerClassName={styles.heroInner}
            mediaClassName={styles.heroMedia}
            actionsClassName={styles.heroActions}
            eyebrow={messages.hero.eyebrow}
            title={messages.hero.title}
            description={messages.hero.description}
            media={
              <Image
                fill
                loading="eager"
                src={componentDirectoryHero.src}
                alt={messages.metadata.imageAlt}
                sizes="(min-width: 82rem) 82rem, 100vw"
                quality={85}
                className={styles.heroImage}
              />
            }
            actions={
              <>
                <Button
                  asChild
                  size="applicationHero"
                  variant="applicationHeroPrimary"
                >
                  <Link href="#component-families">
                    {messages.hero.directoryAction}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="applicationHero"
                  variant="inverse"
                >
                  <Link href={localizedHref("/applications")}>
                    {messages.hero.applicationsAction}
                  </Link>
                </Button>
              </>
            }
          />

          <section className={styles.section} id="component-families">
            <SectionIntro
              className={styles.directoryIntro}
              layout="stacked"
              eyebrow={messages.directory.eyebrow}
              title={messages.directory.title}
              description={messages.directory.description}
            />

            <div className={styles.directory}>
              {componentSolutions.map((solution, index) => {
                if (!isLocalizedComponentSlug(solution.slug)) {
                  return null;
                }

                const detail = getLocalizedComponentDetail(
                  solution.slug,
                  localeSegment,
                );
                const directoryImage = componentDirectoryImages[solution.slug];
                const imagePosition =
                  directoryImage?.position ??
                  detail.hero.imagePosition ??
                  "72% center";
                const mobileImagePosition =
                  directoryImage?.position ??
                  detail.hero.mobileImagePosition ??
                  imagePosition;

                return (
                  <Card key={solution.slug} asChild variant="interactive">
                    <Link
                      href={localizedHref(`/components/${solution.slug}`)}
                      className={styles.card}
                      aria-label={messages.directory.openAria.replace(
                        "{title}",
                        solution.title,
                      )}
                    >
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
                            directoryImage ? styles.directoryImage : undefined
                          }
                        />
                      </div>

                      <CardContent className={styles.cardContent}>
                        <span className={styles.cardMeta}>
                          {solution.category}
                        </span>
                        <h2>{solution.title}</h2>
                        <dl className={styles.cardFacts}>
                          <div>
                            <dt>{messages.directory.typicalPartsLabel}</dt>
                            <dd>
                              {solution.typicalParts.slice(0, 2).join(" · ")}
                            </dd>
                          </div>
                          <div>
                            <dt>{messages.directory.selectionFocusLabel}</dt>
                            <dd>
                              {solution.reviewAreas.slice(0, 2).join(" · ")}
                            </dd>
                          </div>
                        </dl>
                        <span className={styles.cardAction}>
                          {messages.directory.openAction}{" "}
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
