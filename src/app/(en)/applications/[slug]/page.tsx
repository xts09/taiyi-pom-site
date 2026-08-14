import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { serializeJsonLd } from "@/lib/jsonLd";
import { createContactHref } from "@/lib/contactContext";
import { getApplicationComponentLinks } from "@/data/applicationComponentLinks";
import {
  applications,
  getApplicationBySlug,
  selectionBasis,
  type ApplicationEngineeringGroup,
  type ApplicationImage,
  type ApplicationItem,
} from "@/data/applications";
import { ActionPanel } from "@/components/ActionPanel";
import { ApplicationAnimeMotion } from "@/components/ApplicationAnimeMotion";
import { MediaFigure } from "@/components/MediaFigure";
import { SecondarySectionNav } from "@/components/SecondarySectionNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { publicPath } from "@/lib/paths";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

type ApplicationDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ApplicationVisualAssets = {
  scene: string;
  components: string;
  cad: string;
  material: string;
  productMaterial?: string;
};

type ApplicationVisualConfig = {
  assets: ApplicationVisualAssets;
  primaryDirectionIndex?: number;
  reviewFocus?: readonly string[];
};

type SceneKeyword = {
  title: string;
  value: string;
};

type MaterialDirectionCardData = {
  key: string;
  condition: string;
  directionName: string;
  href?: string;
  image?: ApplicationImage;
  isPrimaryDirection: boolean;
  part: string;
  reviewFocus?: string;
};

type ApplicationUseCardData = {
  key: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  index: number;
  title: string;
};

const applicationSectionTabs = [
  { href: "#application-scene", label: "Parts & Conditions" },
  { href: "#material-match", label: "Typical Parts" },
  { href: "#review-checklist", label: "Candidate Materials" },
  { href: "#material-evaluation", label: "Material Evaluation" },
];

const reviewCardTitles = [
  "Mold Stage",
  "Flow Consistency",
  "Dimensional Target",
  "Movement & Documents",
];

const automotiveVisualAssets: ApplicationVisualAssets = {
  scene: "/generated/applications/automotive/automotive-application-scene.webp",
  components:
    "/generated/applications/automotive/automotive-components-background-unified.png",
  cad: "/generated/applications/automotive/automotive-cad-layout-overlay.webp",
  material: "/generated/applications/automotive/pom-material-macro.webp",
  productMaterial:
    "/generated/applications/common/application-product-pellets-strip.png",
};

const commonApplicationVisualAssets: ApplicationVisualAssets = {
  scene: "/generated/applications/common/automation-scene.webp",
  components: "/generated/applications/common/pom-parts-transparent.webp",
  cad: "/generated/applications/common/cad-overlay-transparent.webp",
  material: "/generated/applications/common/pom-pellets-macro.webp",
  productMaterial:
    "/generated/applications/common/application-product-pellets-strip.png",
};

const createApplicationVisualAssets = (
  scene: string,
): ApplicationVisualAssets => ({
  ...commonApplicationVisualAssets,
  scene,
});

const materialCardImages = {
  natural: "/generated/pom-natural-pellets-dish-square.webp",
  naturalWide: "/generated/pom-natural-pellets-hero-wide.webp",
  naturalMacro: "/generated/pom-natural-pellets-macro-texture.webp",
  wearNatural: "/generated/pom-wear-natural-pellets-dish-square.webp",
  wearNaturalMacro: "/generated/pom-wear-natural-pellets-macro-texture.webp",
  glassFiber: "/generated/pom-glass-fiber-pellets-dish-square.webp",
  black: "/generated/pom-black-pellets-card-crop.webp",
  uvBlack: "/generated/pom-uv-black-pellets-dish-square.webp",
  white: "/generated/pom-white-pellets-dish-square.webp",
} as const;

const automotiveReviewFocus = [
  "Impact response | tolerance control",
  "Wear path | friction stability",
  "Mold shrinkage | fit consistency",
  "Warpage control | tooling validation",
];

const electronicsReviewFocus = [
  "Resistance target | test method",
  "Stiffness | grounding path",
  "Part geometry | processing",
];

const applicationVisualConfigs: Partial<
  Record<string, ApplicationVisualConfig>
> = {
  automotive: {
    assets: automotiveVisualAssets,
    primaryDirectionIndex: 0,
    reviewFocus: automotiveReviewFocus,
  },
  electronics: {
    assets: createApplicationVisualAssets(
      "/applications/parts/electronic-electrical-components-wide.webp",
    ),
    primaryDirectionIndex: 0,
    reviewFocus: electronicsReviewFocus,
  },
  "conveyor-automation": {
    assets: createApplicationVisualAssets(
      "/applications/parts/conveyor-chain-plates-wide.webp",
    ),
  },
  "motion-components": {
    assets: createApplicationVisualAssets(
      "/generated/applications/motion-components/precision-molded-motion-components.png",
    ),
  },
  "water-control": {
    assets: createApplicationVisualAssets(
      "/applications/parts/bathroom-parts-2.jpg",
    ),
  },
  "washing-machine-components": {
    assets: createApplicationVisualAssets(
      "/applications/parts/washing-machine-components-hero.png",
    ),
  },
  "outdoor-equipment": {
    assets: createApplicationVisualAssets(
      "/applications/parts/agricultural-sprinkler-head.jpg",
    ),
  },
  "textile-machinery": {
    assets: createApplicationVisualAssets(
      "/applications/parts/textile-parts.jpg",
    ),
  },
};

const directionLabelQualifierPattern =
  /^(.*?)(\s+(?:for|where|based on)\s+.+)$/i;
const performanceGroupTitlePattern = /performance|material review|fit/i;
const sceneKeywords: SceneKeyword[] = selectionBasis.map((item, index) => ({
  title: reviewCardTitles[index] ?? "Review Point",
  value: item,
}));

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const getCyclicItem = <T,>(items: readonly T[] | undefined, index: number) =>
  items?.length ? items[index % items.length] : undefined;

const getApplicationHeroStyle = (
  heroImageSrc: string,
  cadImageSrc?: string,
  heroImageSize?: string,
): CSSProperties =>
  ({
    "--application-hero-image": `url(${publicPath(heroImageSrc)})`,
    ...(heroImageSize
      ? {
          "--application-hero-size": heroImageSize,
        }
      : {}),
    ...(cadImageSrc
      ? {
          "--application-cad-image": `url(${publicPath(cadImageSrc)})`,
        }
      : {}),
  }) as CSSProperties;

const getMaterialCardImage = (card: MaterialDirectionCardData): string => {
  const text = `${card.directionName} ${card.condition}`.toLowerCase();

  if (/uv|light-exposed|outdoor/.test(text)) {
    return materialCardImages.uvBlack;
  }

  if (/carbon|conductive|antistatic|esd/.test(text)) {
    return materialCardImages.black;
  }

  if (
    /wear|low-friction|friction|sliding|lubricat|high-impact|impact/.test(text)
  ) {
    return materialCardImages.white;
  }

  if (/glass|fiber|reinforced/.test(text)) {
    return materialCardImages.white;
  }

  if (/base|natural|standard/.test(text)) {
    return materialCardImages.naturalMacro;
  }

  return materialCardImages.white;
};

const getApplicationHeroClassName = (application: ApplicationItem) =>
  cx(
    "inner-hero",
    "application-hero",
    application.heroImage && "application-hero-with-image",
    `application-hero-${application.slug}`,
    "mb-8",
  );

const getEngineeringGroups = (
  application: ApplicationItem,
): ApplicationEngineeringGroup[] =>
  application.engineeringFit ?? [
    {
      title: "Typical Parts",
      items: application.images.map((image) => image.label),
    },
    {
      title: "Material Review Focus",
      items: selectionBasis,
    },
    {
      title: "Candidate Material Families",
      items: application.materialDirections.map((direction) => direction.label),
    },
  ];

const getPerformanceItems = (
  engineeringGroups: readonly ApplicationEngineeringGroup[],
) =>
  (
    engineeringGroups.find((group) =>
      performanceGroupTitlePattern.test(group.title),
    ) ?? engineeringGroups[1]
  )?.items ?? [];

const getApplicationVisualContext = (application: ApplicationItem) => {
  const visualConfig = applicationVisualConfigs[application.slug];
  const visualAssets = application.heroImage
    ? (visualConfig?.assets ?? commonApplicationVisualAssets)
    : undefined;

  return {
    visualAssets,
    visualConfig,
  };
};

const splitDirectionLabel = (label: string) => {
  const match = label.match(directionLabelQualifierPattern);

  return {
    name: match?.[1] ?? label,
    note: match?.[2]?.trim() ?? "",
  };
};

const getMaterialDirectionCards = (
  application: ApplicationItem,
  visualConfig?: ApplicationVisualConfig,
): MaterialDirectionCardData[] =>
  application.materialDirections.map((direction, index) => {
    const directionLabel = splitDirectionLabel(direction.label);

    return {
      key: direction.label,
      condition: direction.keyUse,
      directionName: directionLabel.name,
      href: direction.href,
      image: getCyclicItem(application.images, index),
      isPrimaryDirection: visualConfig?.primaryDirectionIndex === index,
      part:
        getCyclicItem(application.images, index)?.label ?? application.title,
      reviewFocus: getCyclicItem(visualConfig?.reviewFocus, index),
    };
  });

const getApplicationUseCards = (
  application: ApplicationItem,
): ApplicationUseCardData[] =>
  application.parts.map((part, index) => ({
      key: `${part.label}-${index}`,
      description: part.description,
      image: part.image,
      index,
      title: part.label,
    }));

function ApplicationUseCard({
  description,
  image,
  index,
  title,
}: ApplicationUseCardData) {
  return (
    <Card asChild variant="standard">
      <article
        className={cx(
          "application-use-card",
          !image && "application-use-card-without-image",
        )}
        data-application-motion-item
      >
        {image ? (
          <MediaFigure
            variant="landscape"
            fit="contain"
            className="application-use-card-media"
            media={
              <Image
              src={publicPath(image.src)}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 310px, (min-width: 768px) 42vw, 92vw"
              className="object-contain"
              />
            }
          />
        ) : null}

        <CardContent className="application-use-card-body">
          <div className="application-use-card-meta">
            <span>Typical part</span>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </CardContent>
      </article>
    </Card>
  );
}

function ProductInfoCard({
  card,
  image,
  materialImageSrc,
}: {
  card: MaterialDirectionCardData;
  image?: ApplicationImage;
  materialImageSrc?: string;
}) {
  const mediaSrc = materialImageSrc ?? image?.src;
  const mediaAlt = materialImageSrc
    ? `${card.directionName} material pellets`
    : image?.alt;

  const productContent = (
    <>
      {mediaSrc ? (
        <div
          className={cx(
            "application-product-card-media",
            materialImageSrc && "application-product-card-media-material",
          )}
        >
          <Image
            src={publicPath(mediaSrc)}
            alt={mediaAlt ?? card.directionName}
            fill
            sizes="(min-width: 1280px) 360px, (min-width: 768px) 42vw, 92vw"
            className={materialImageSrc ? "object-cover" : "object-contain"}
          />
        </div>
      ) : null}
      <div className="application-product-card-body">
        <h3>{card.directionName}</h3>
        <small>Key use</small>
        <p>{card.condition}</p>
      </div>
    </>
  );

  return (
    <article className="application-product-card" data-application-motion-item>
      {card.href ? (
        <Link href={card.href}>{productContent}</Link>
      ) : (
        productContent
      )}
    </article>
  );
}

export function generateStaticParams() {
  return applications.map((application) => ({
    slug: application.slug,
  }));
}

export async function generateMetadata({
  params,
}: ApplicationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const application = getApplicationBySlug(slug);

  if (!application) {
    return {
      title: "Page Not Found | Taiyi Polymer",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const titleSubject =
    application.slug === "washing-machine-components"
      ? "Washing Machine"
      : application.title;

  return createPageMetadata({
    title: `${titleSubject} Engineering Plastics | Taiyi Polymer`,
    description: `${application.description} Review candidate material directions, typical parts, and application selection factors.`,
    path: `/applications/${application.slug}`,
    image: application.heroImage?.src,
    imageAlt: application.heroImage?.alt,
  });
}

export default async function ApplicationDetailPage({
  params,
}: ApplicationDetailPageProps) {
  const { slug } = await params;
  const application = getApplicationBySlug(slug);

  if (!application) {
    notFound();
  }

  if (slug !== application.slug) {
    permanentRedirect(`/applications/${application.slug}`);
  }

  const engineeringGroups = getEngineeringGroups(application);
  const partFitItems = getPerformanceItems(engineeringGroups);
  const { visualAssets, visualConfig } =
    getApplicationVisualContext(application);
  const detailHeroImage = application.detailHeroImage ?? application.heroImage;
  const materialDirectionCards = getMaterialDirectionCards(
    application,
    visualConfig,
  );
  const applicationUseCards = getApplicationUseCards(application);
  const componentGuides = getApplicationComponentLinks(application.slug);
  const featuredApplicationUseCards = applicationUseCards.slice(0, 4);
  const remainingApplicationUseCards = applicationUseCards.slice(4);
  const featuredMaterialDirectionCards = materialDirectionCards.slice(0, 3);
  const remainingMaterialDirectionCards = materialDirectionCards.slice(3);
  const pagePath = `/applications/${application.slug}`;
  const contactHref = createContactHref({
    application: application.title,
    source: "Application detail",
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Applications", path: "/applications" },
    { name: application.title, path: pagePath },
  ]);
  const webPageJsonLd = createWebPageJsonLd({
    title: application.title,
    description: application.description,
    path: pagePath,
    image: application.heroImage?.src,
  });

  return (
    <main className="application-detail-page min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([breadcrumbJsonLd, webPageJsonLd]),
        }}
      />
      <ApplicationAnimeMotion />
      <section
        className={`application-detail-shell application-detail-${application.slug} mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8`}
      >
        <div
          className={getApplicationHeroClassName(application)}
          style={
            detailHeroImage
              ? getApplicationHeroStyle(
                  detailHeroImage.src,
                  visualAssets?.cad,
                  application.detailHeroImage ? "contain" : undefined,
                )
              : undefined
          }
        >
          <div className="application-hero-card">
            <p className="application-hero-kicker">Application & Part Review</p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              {application.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              {application.description}
            </p>

            <div className="application-hero-cta">
              <Button
                asChild
                size="applicationHero"
                variant="applicationHeroPrimary"
              >
                <Link href={contactHref}>Discuss Your Application</Link>
              </Button>
              <Button
                asChild
                size="applicationHero"
                variant="applicationHeroSecondary"
              >
                <Link href="/technical-data-sheets">Find Grade Data & TDS</Link>
              </Button>
            </div>
          </div>
        </div>

        {application.heroImage ? (
          <SecondarySectionNav
            actions={[
              { href: contactHref, label: "Discuss Your Application" },
              {
                href: "/technical-data-sheets",
                label: "Find Grade Data & TDS",
              },
            ]}
            ariaLabel="Application sections"
            subtitle={application.description}
            tabs={applicationSectionTabs}
            title={application.title}
            variant="application"
          />
        ) : null}

        <section
          id="application-scene"
          className={
            visualAssets
              ? "application-scene application-scene-solution"
              : "application-scene"
          }
          data-application-motion
        >
          {visualAssets ? (
            <>
              <div className="application-scene-visual">
                <Image
                  src={publicPath(visualAssets.scene)}
                  alt={`${application.title} application scene for engineering plastic material review`}
                  fill
                  sizes="100vw"
                  priority
                  className={cx(
                    "object-cover",
                    application.slug === "motion-components" &&
                      "application-scene-image-motion-components",
                  )}
                />

                <div className="application-scene-copy application-scene-copy-overlay">
                  <p className="section-kicker mb-3">Parts & Conditions</p>
                  <h2>Start with the part and working condition.</h2>
                  <p>
                    The material choice should follow the actual mechanism,
                    movement, assembly fit, and dimensional target before a
                    grade is screened.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="application-scene-copy">
                <p className="section-kicker mb-3">Parts & Conditions</p>
                <h2>Start with the part and working condition.</h2>
                <p>
                  Start with the part function, working condition, dimensional
                  target, and document needs before moving into a modified POM
                  grade direction.
                </p>

                <ul
                  className="application-scene-keywords"
                  aria-label="Engineering keywords"
                >
                  {sceneKeywords.map((item) => (
                    <li key={item.title} data-application-motion-item>
                      <strong>{item.title}</strong>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="application-scene-gallery"
                aria-label="Typical parts"
              >
                {application.images.map((image, index) => (
                  <figure
                    key={image.src}
                    className={
                      index === 0
                        ? "application-scene-frame application-scene-frame-main"
                        : "application-scene-frame"
                    }
                    data-application-motion-item
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={publicPath(image.src)}
                        alt={image.alt}
                        fill
                        sizes={
                          index === 0
                            ? "(min-width: 1024px) 560px, 92vw"
                            : "(min-width: 1024px) 260px, 44vw"
                        }
                        className="object-contain"
                      />
                    </div>
                    <figcaption>
                      <strong>{image.label}</strong>
                      {partFitItems[index] ? (
                        <span>{partFitItems[index]}</span>
                      ) : null}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}
        </section>

        <section
          id="material-match"
          className={
            visualAssets
              ? "application-match-board application-match-solution"
              : "application-match-board"
          }
          data-application-motion
        >
          <div className="application-use-head">
            <div>
              <p className="section-kicker">Typical Parts</p>
              <h2>
                Representative parts for {application.title.toLowerCase()}.
              </h2>
            </div>
            <p>
              Use the part geometry, load, movement, and environment as the
              starting point. Final material selection remains grade- and
              project-specific.
            </p>
          </div>

          <div className="application-use-grid application-use-grid-desktop">
            {applicationUseCards.map((card) => (
              <ApplicationUseCard
                key={card.key}
                image={card.image}
                index={card.index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          <div className="application-use-mobile-content">
            <div className="application-use-grid">
              {featuredApplicationUseCards.map((card) => (
                <ApplicationUseCard
                  key={card.key}
                  image={card.image}
                  index={card.index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>

            {remainingApplicationUseCards.length > 0 ? (
              <details className="application-mobile-disclosure">
                <summary>
                  Show {remainingApplicationUseCards.length} more parts
                </summary>
                <div className="application-mobile-disclosure-grid application-use-grid">
                  {remainingApplicationUseCards.map((card) => (
                    <ApplicationUseCard
                      key={card.key}
                      image={card.image}
                      index={card.index}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </div>
              </details>
            ) : null}
          </div>

          {componentGuides.length > 0 ? (
            <aside
              className="application-component-guides"
              aria-labelledby="application-component-guides-heading"
            >
              <div className="application-component-guides-intro">
                <p className="section-kicker">Component Guides</p>
                <h3 id="application-component-guides-heading">
                  Dedicated reviews available for these parts.
                </h3>
              </div>
              <div className="application-component-guide-links">
                {componentGuides.map((guide) => (
                  <Link
                    className="application-component-guide-link"
                    href={guide.href}
                    key={guide.href}
                  >
                    <span className="application-component-guide-part">
                      {guide.partLabel}
                    </span>
                    <strong>{guide.label}</strong>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </aside>
          ) : null}
        </section>

        <section
          id="review-checklist"
          className={
            visualAssets
              ? "application-notes application-notes-material"
              : "application-notes"
          }
          data-application-motion
        >
          <div className="application-notes-head">
            <p className="section-kicker mb-3">Candidate Materials</p>
            <h2>Material options for the parts above.</h2>
            <p>
              Review the candidate POM material directions commonly screened
              against the part function and working conditions above.
            </p>
          </div>

          <div className="application-notes-grid application-notes-grid-desktop">
            {materialDirectionCards.map((card, index) => (
              <ProductInfoCard
                key={card.key}
                card={card}
                image={getCyclicItem(application.images, index)}
                materialImageSrc={getMaterialCardImage(card)}
              />
            ))}
          </div>

          <div className="application-notes-mobile-content">
            <div className="application-notes-grid">
              {featuredMaterialDirectionCards.map((card, index) => (
                <ProductInfoCard
                  key={card.key}
                  card={card}
                  image={getCyclicItem(application.images, index)}
                  materialImageSrc={getMaterialCardImage(card)}
                />
              ))}
            </div>

            {remainingMaterialDirectionCards.length > 0 ? (
              <details className="application-mobile-disclosure">
                <summary>
                  Show {remainingMaterialDirectionCards.length} more material
                  options
                </summary>
                <div className="application-mobile-disclosure-grid application-notes-grid">
                  {remainingMaterialDirectionCards.map((card, index) => {
                    const materialIndex =
                      index + featuredMaterialDirectionCards.length;

                    return (
                      <ProductInfoCard
                        key={card.key}
                        card={card}
                        image={getCyclicItem(application.images, materialIndex)}
                        materialImageSrc={getMaterialCardImage(card)}
                      />
                    );
                  })}
                </div>
              </details>
            ) : null}
          </div>
        </section>

        <ActionPanel
          footerAdjacent
          id="material-evaluation"
          variant="recommendation"
          title="Ready to shortlist a grade?"
          className={
            visualAssets
              ? "application-review-cta application-brief-cta"
              : "application-review-cta"
          }
          eyebrow="Material Evaluation"
          eyebrowClassName="section-kicker mb-3"
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href={contactHref}>Discuss Your Application</Link>
            </Button>
          }
          data-application-motion
        >
          <p>
            Share the part, condition, and target. We will help screen the
            candidate material direction for project-specific review.
          </p>
        </ActionPanel>
      </section>
    </main>
  );
}
