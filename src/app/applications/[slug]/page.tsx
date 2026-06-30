import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  applications,
  getApplicationBySlug,
  selectionBasis,
  type ApplicationEngineeringGroup,
  type ApplicationImage,
  type ApplicationItem,
} from "@/data/applications";
import { ApplicationAnimeMotion } from "@/components/ApplicationAnimeMotion";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { SecondarySectionNav } from "@/components/SecondarySectionNav";
import { publicPath } from "@/lib/paths";
import { createPageMetadata } from "@/lib/seo";

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
  directionNote?: string;
  href?: string;
  image?: ApplicationImage;
  isPrimaryDirection: boolean;
  part: string;
  reviewFocus?: string;
};

type ApplicationUseCardData = {
  key: string;
  description: string;
  image?: ApplicationImage;
  title: string;
};

const applicationSectionTabs = [
  { href: "#application-scene", label: "Overview" },
  { href: "#material-match", label: "Key Applications" },
  { href: "#review-checklist", label: "Key Products" },
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

const applicationUseFallbackTitles: Record<string, readonly string[]> = {
  automotive: ["Interior Mechanisms"],
};

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
  },
  "conveyor-automation": {
    assets: createApplicationVisualAssets(
      "/applications/parts/conveyor-chain-plates-wide.webp",
    ),
  },
  "motion-components": {
    assets: createApplicationVisualAssets(
      "/applications/parts/gears-moving-mechanical-parts-wide.webp",
    ),
  },
  "water-control": {
    assets: createApplicationVisualAssets(
      "/applications/parts/bathroom-parts-2.jpg",
    ),
  },
  "industrial-machinery": {
    assets: createApplicationVisualAssets(
      "/applications/parts/automotive-controlbox-components.jpg",
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
): CSSProperties =>
  ({
    "--application-hero-image": `url(${publicPath(heroImageSrc)})`,
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
      title: "Taiyi Material Direction",
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
  partFitItems: readonly string[],
  visualConfig?: ApplicationVisualConfig,
): MaterialDirectionCardData[] =>
  application.materialDirections.map((direction, index) => {
    const directionLabel = splitDirectionLabel(direction.label);

    return {
      key: direction.label,
      condition:
        partFitItems[index] ??
        getCyclicItem(selectionBasis, index) ??
        "Material review focus",
      directionName: directionLabel.name,
      directionNote: directionLabel.note,
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
  engineeringGroups: readonly ApplicationEngineeringGroup[],
): ApplicationUseCardData[] => {
  const typicalParts = engineeringGroups[0]?.items ?? [];
  const performanceNeeds = getPerformanceItems(engineeringGroups);
  const fallbackItems = typicalParts.length > 0 ? typicalParts : selectionBasis;
  const cardCount = Math.max(application.images.length, 4);
  const fallbackTitles = applicationUseFallbackTitles[application.slug] ?? [];

  return Array.from({ length: cardCount }, (_, index) => {
    const fallbackImage =
      index >= application.images.length && application.heroImage
        ? {
            src: application.heroImage.src,
            alt: application.heroImage.alt,
            label:
              fallbackTitles[index - application.images.length] ??
              application.title,
          }
        : undefined;
    const image = application.images[index] ?? fallbackImage;

    return {
      key: `${image?.label ?? application.title}-${index}`,
      description:
        getCyclicItem(performanceNeeds, index) ??
        getCyclicItem(fallbackItems, index) ??
        application.description,
      image,
      title:
        image?.label ??
        fallbackTitles[index - application.images.length] ??
        getCyclicItem(typicalParts, index) ??
        application.title,
    };
  });
};

function ApplicationUseCard({
  description,
  image,
  title,
}: ApplicationUseCardData) {
  return (
    <article className="application-use-card">
      {image ? (
        <div className="application-use-card-media">
          <Image
            src={publicPath(image.src)}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 310px, (min-width: 768px) 42vw, 92vw"
            unoptimized
            className="object-contain"
          />
        </div>
      ) : null}

      <div className="application-use-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#review-checklist">
          Discover More
          <span aria-hidden="true" className="application-use-card-arrow">
            →
          </span>
        </a>
      </div>
    </article>
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
            unoptimized
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
    <article className="application-product-card">
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
      title: "Page Not Found | Taiyi Nano",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    title: `${application.title} | Taiyi Nano`,
    description: `${application.description} Review relevant modified POM material directions, typical parts, and application selection factors.`,
    path: `/applications/${application.slug}`,
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

  const engineeringGroups = getEngineeringGroups(application);
  const partFitItems = getPerformanceItems(engineeringGroups);
  const { visualAssets, visualConfig } =
    getApplicationVisualContext(application);
  const materialDirectionCards = getMaterialDirectionCards(
    application,
    partFitItems,
    visualConfig,
  );
  const applicationUseCards = getApplicationUseCards(
    application,
    engineeringGroups,
  );

  return (
    <main className="application-detail-page min-h-screen text-slate-900">
      <ApplicationAnimeMotion />
      <section
        className={`application-detail-shell application-detail-${application.slug} mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8`}
      >
        <div
          className={getApplicationHeroClassName(application)}
          style={
            application.heroImage
              ? getApplicationHeroStyle(
                  application.heroImage.src,
                  visualAssets?.cad,
                )
              : undefined
          }
        >
          <div className="application-hero-card">
            <p className="application-hero-kicker">Application Area</p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              {application.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              {application.description}
            </p>

            <div
              className="application-hero-data"
              aria-label="Application material review inputs"
            >
              <div className="application-hero-summary">
                <strong>Review Inputs</strong>
                <p>
                  Part geometry, movement, assembly fit, dimensional target, and
                  document needs.
                </p>
              </div>

              <div className="application-hero-directions">
                <strong>Material Directions</strong>
                <span>
                  {application.materialDirections
                    .slice(0, 3)
                    .map((direction) => (
                      <Link
                        key={direction.label}
                        href={direction.href ?? "/contact"}
                      >
                        {direction.shortLabel ?? direction.label}
                      </Link>
                    ))}
                </span>
              </div>
            </div>

            <div className="application-hero-cta">
              <Link href="/contact">Discuss Requirement</Link>
              <Link href="/technical-data-sheets">
                Find a Technical Data Sheet (TDS)
              </Link>
            </div>
          </div>
        </div>

        {application.heroImage ? (
          <SecondarySectionNav
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
                  unoptimized
                  className="object-cover"
                />

                <div className="application-scene-copy application-scene-copy-overlay">
                  <p className="section-kicker mb-3">Overview</p>
                  <h2>Material Fit Review</h2>
                  <p>
                    Start from the actual mechanism: movement, assembly fit, and
                    dimensional targets should define the material direction
                    before a grade is screened.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="application-scene-copy">
                <p className="section-kicker mb-3">Overview</p>
                <h2>Material Fit Review</h2>
                <p>
                  Start with part geometry, motion, dimensional target, and
                  document needs before moving into a modified POM grade
                  direction.
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
                        unoptimized
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
          <div className="application-use-grid">
            {applicationUseCards.map((card) => (
              <ApplicationUseCard
                key={card.key}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
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
            <p className="section-kicker mb-3">Key Products</p>
            <h2>Material directions for {application.title}.</h2>
            <p>
              Review the modified POM directions commonly screened against the
              application needs above.
            </p>
          </div>

          <div className="application-notes-grid">
            {materialDirectionCards.map((card, index) => (
              <ProductInfoCard
                key={card.key}
                card={card}
                image={getCyclicItem(application.images, index)}
                materialImageSrc={getMaterialCardImage(card)}
              />
            ))}
          </div>
        </section>

        <MaterialRecommendationCta
          id="material-evaluation"
          kicker="Material Evaluation"
          title="Ready to narrow the material direction?"
          className={
            visualAssets
              ? "application-review-cta application-brief-cta"
              : "application-review-cta"
          }
          actionLabel={`Discuss ${application.title} Requirement`}
          actionClassName="shrink-0 px-7"
          data-application-motion
        >
          <p>
            Share the part, condition, and target. We will help screen the
            suitable modified POM direction.
          </p>
        </MaterialRecommendationCta>
      </section>
    </main>
  );
}
