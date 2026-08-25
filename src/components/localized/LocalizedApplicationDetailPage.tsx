import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { ApplicationAnimeMotion } from "@/components/ApplicationAnimeMotion";
import { ApplicationExpandableGrid } from "@/components/ApplicationExpandableGrid";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { MediaFigure } from "@/components/MediaFigure";
import { SecondarySectionNav } from "@/components/SecondarySectionNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { resolveApplicationComponentOwnerReferences } from "@/data/applicationComponentRelations";
import { resolveApplicationSystemTopicReferences } from "@/data/systemTopicReleases";
import { resolveApplicationInlinePartGroups } from "@/data/applicationSystemPresentation";
import type {
  ApplicationEngineeringGroup,
  ApplicationImage,
  ApplicationItem,
} from "@/data/applications";
import type {
  ApplicationDetailUiMessages,
  ApplicationIndexComponentSlug,
  ApplicationIndexMessages,
  LocalizedApplicationQualityEvidenceMessages,
} from "@/i18n/applicationTypes";
import type { LocalizedUrlSegment, MessageLocale } from "@/i18n/config";
import {
  getLocalizedHref,
  isEnglishFallbackHref,
} from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import { publicPath } from "@/lib/paths";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";

type ApplicationVisualAssets = {
  scene: string;
  components: string;
  cad: string;
  material: string;
  productMaterial?: string;
};

type ApplicationVisualConfig = {
  assets: ApplicationVisualAssets;
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
};

type ApplicationUseCardData = {
  key: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  index: number;
  partId: string;
  title: string;
};

type ApplicationRelatedSolutionItem = {
  key: string;
  href: string;
  title: string;
  partsLabel: string;
  partLabels: readonly string[];
  actionLabel: string;
  componentOwner?: string;
  destinationBadgeLabel?: string;
};

type LocalizedApplicationDetailPageProps = {
  application: ApplicationItem;
  componentMessages: ApplicationIndexMessages["componentSolutions"];
  inLanguage: MessageLocale;
  localeSegment?: LocalizedUrlSegment;
  messages: ApplicationDetailUiMessages;
  pagePath: string;
  qualityEvidence?: LocalizedApplicationQualityEvidenceMessages;
  selectionItems: readonly string[];
  showSelectionInputs?: boolean;
};

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
  naturalMacro: "/generated/pom-natural-pellets-macro-texture.webp",
  white: "/generated/pom-white-pellets-dish-square.webp",
  black: "/generated/pom-black-pellets-card-crop.webp",
  uvBlack: "/generated/pom-uv-black-pellets-dish-square.webp",
} as const;

const applicationVisualConfigs: Partial<
  Record<string, ApplicationVisualConfig>
> = {
  automotive: {
    assets: automotiveVisualAssets,
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

const reviewedApplicationDensitySlugs = new Set<string>([
  "automotive",
  "electronics",
  "conveyor-automation",
  "motion-components",
  "water-control",
  "washing-machine-components",
  "outdoor-equipment",
  "textile-machinery",
]);

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
    ...(heroImageSize ? { "--application-hero-size": heroImageSize } : {}),
    ...(cadImageSrc
      ? { "--application-cad-image": `url(${publicPath(cadImageSrc)})` }
      : {}),
  }) as CSSProperties;

const getMaterialCardImage = (card: MaterialDirectionCardData): string => {
  const text = `${card.directionName} ${card.condition}`.toLowerCase();

  if (/uv|紫外|户外|光照/.test(text)) {
    return materialCardImages.uvBlack;
  }

  if (/carbon|conductive|antistatic|esd|碳纤维|导电|抗静电/.test(text)) {
    return materialCardImages.black;
  }

  if (/base|natural|standard|基础|本色|标准/.test(text)) {
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
): ApplicationEngineeringGroup[] => application.engineeringFit ?? [];

const getPerformanceItems = (
  engineeringGroups: readonly ApplicationEngineeringGroup[],
) => engineeringGroups[1]?.items ?? [];

const getApplicationVisualContext = (application: ApplicationItem) => {
  const visualConfig = applicationVisualConfigs[application.slug];
  const visualAssets = application.heroImage
    ? (visualConfig?.assets ?? commonApplicationVisualAssets)
    : undefined;

  return { visualAssets };
};

const getMaterialDirectionCards = (
  application: ApplicationItem,
): MaterialDirectionCardData[] =>
  application.materialDirections.map((direction, index) => ({
    key: direction.label,
    condition: direction.keyUse,
    directionName:
      direction.shortLabel ?? direction.label.split("—")[0]?.trim(),
    href: direction.href,
    image: getCyclicItem(application.images, index),
  }));

const getApplicationUseCards = (
  application: ApplicationItem,
): ApplicationUseCardData[] =>
  application.parts.map((part, index) => ({
    key: part.id,
    description: part.description,
    image: part.image,
    index,
    partId: part.id,
    title: part.label,
  }));

function ApplicationUseCard({
  cardLabel,
  description,
  headingLevel = 3,
  image,
  index,
  title,
}: ApplicationUseCardData & {
  cardLabel?: string;
  headingLevel?: 3 | 4;
}) {
  const Heading = headingLevel === 4 ? "h4" : "h3";

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
            {cardLabel ? <span>{cardLabel}</span> : null}
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <Heading>{title}</Heading>
          <p>{description}</p>
        </CardContent>
      </article>
    </Card>
  );
}

function ProductInfoCard({
  card,
  englishDestinationLabel,
  image,
  localeSegment,
  messages,
  materialImageSrc,
  showKeyUseLabel = true,
}: {
  card: MaterialDirectionCardData;
  englishDestinationLabel: string;
  image?: ApplicationImage;
  localeSegment?: LocalizedUrlSegment;
  messages: ApplicationDetailUiMessages["materials"];
  materialImageSrc?: string;
  showKeyUseLabel?: boolean;
}) {
  const mediaSrc = materialImageSrc ?? image?.src;
  const mediaAlt = materialImageSrc
    ? `${card.directionName}${messages.imageAltSuffix}`
    : image?.alt;
  const href = card.href
    ? getLocalizedHref(card.href, localeSegment)
    : undefined;
  const showEnglishBadge = card.href
    ? isEnglishFallbackHref(card.href, localeSegment)
    : false;

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
        <h3>
          {card.directionName}{" "}
          {showEnglishBadge ? (
            <EnglishDestinationBadge label={englishDestinationLabel} />
          ) : null}
        </h3>
        {showKeyUseLabel ? <small>{messages.keyUseLabel}</small> : null}
        <p>{card.condition}</p>
      </div>
    </>
  );

  return (
    <article className="application-product-card" data-application-motion-item>
      {href ? <Link href={href}>{productContent}</Link> : productContent}
    </article>
  );
}

function ApplicationRelatedSolutions({
  ariaLabel,
  eyebrow,
  items,
  title,
}: {
  ariaLabel: string;
  eyebrow?: string;
  items: readonly ApplicationRelatedSolutionItem[];
  title: string;
}) {
  return (
    <aside
      className="application-component-guides"
      aria-labelledby={`${items[0]?.key ?? "related"}-heading`}
    >
      <div className="application-component-guides-intro">
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <h3 id={`${items[0]?.key ?? "related"}-heading`}>{title}</h3>
      </div>
      <nav className="application-component-owner-list" aria-label={ariaLabel}>
        {items.map((item) => (
          <Link
            className="application-component-owner-link"
            data-component-owner={item.componentOwner}
            href={item.href}
            key={item.key}
          >
            <strong className="application-component-owner-title">
              {item.title}
            </strong>
            <div className="application-component-owner-parts">
              <span>{item.partsLabel}</span>
              <ul>
                {item.partLabels.map((partLabel, partIndex) => (
                  <li key={`${item.key}-${partIndex}`}>{partLabel}</li>
                ))}
              </ul>
            </div>
            <span className="application-component-owner-action">
              {item.actionLabel}
              {item.destinationBadgeLabel ? (
                <EnglishDestinationBadge label={item.destinationBadgeLabel} />
              ) : null}
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export function LocalizedApplicationDetailPage({
  application,
  componentMessages,
  inLanguage,
  localeSegment,
  messages,
  pagePath,
  qualityEvidence,
  selectionItems,
  showSelectionInputs = false,
}: LocalizedApplicationDetailPageProps) {
  const engineeringGroups = getEngineeringGroups(application);
  const partFitItems = getPerformanceItems(engineeringGroups);
  const { visualAssets } = getApplicationVisualContext(application);
  const detailHeroImage = application.detailHeroImage ?? application.heroImage;
  const materialDirectionCards = getMaterialDirectionCards(application);
  const applicationUseCards = getApplicationUseCards(application);
  const applicationUseCardByPartId = new Map(
    applicationUseCards.map((card) => [card.partId, card]),
  );
  const applicationInlinePartGroups = resolveApplicationInlinePartGroups(
    application,
    inLanguage,
  );
  const groupedPartOrder = new Map(
    (applicationInlinePartGroups?.flatMap((group) => group.partIds) ?? []).map(
      (partId, index) => [partId, index],
    ),
  );
  const componentOwners =
    resolveApplicationComponentOwnerReferences(application);
  const systemTopicReferences = resolveApplicationSystemTopicReferences(
    application,
    inLanguage,
  );
  const usesReviewedApplicationDensity = reviewedApplicationDensitySlugs.has(
    application.slug,
  );
  const componentSolutionItems: ApplicationRelatedSolutionItem[] =
    componentOwners.map((owner) => {
      const componentSlug =
        owner.componentSlug as ApplicationIndexComponentSlug;
      const componentHref = getLocalizedHref(owner.href, localeSegment);

      return {
        key: `component-${componentSlug}`,
        href: componentHref,
        title: componentMessages.labels[componentSlug],
        partsLabel: componentMessages.relevantPartsLabel,
        partLabels: owner.partExamples.map((part) => part.label),
        actionLabel: componentMessages.viewAction,
        componentOwner: componentSlug,
        destinationBadgeLabel: isEnglishFallbackHref(
          owner.href,
          localeSegment,
        )
          ? componentMessages.englishDestinationLabel
          : undefined,
      };
    });
  const systemTopicItems: ApplicationRelatedSolutionItem[] =
    systemTopicReferences.map((reference) => ({
      key: `system-${reference.systemId}`,
      href: reference.href,
      title: reference.title,
      partsLabel: "Representative parts",
      partLabels: reference.partExamples.map((part) => part.label),
      actionLabel:
        reference.releaseStatus === "preview"
          ? "Review system topic preview"
          : "View system topic",
    }));
  const contactHref = createContactHref(
    {
      application: application.title,
      source: messages.contactSource,
    },
    getLocalizedHref("/contact", localeSegment),
  );
  const technicalDataHref = getLocalizedHref(
    "/technical-data-sheets",
    localeSegment,
  );
  const sectionTabs = [
    { href: "#application-scene", label: messages.navigation.scene },
    { href: "#material-match", label: messages.navigation.parts },
    { href: "#review-checklist", label: messages.navigation.materials },
    { href: "#material-evaluation", label: messages.navigation.evaluation },
  ];
  const sceneKeywords: SceneKeyword[] = selectionItems.map((item, index) => ({
    title:
      messages.scene.reviewTitles[index] ?? messages.scene.reviewPointFallback,
    value: item,
  }));
  const jsonLd = [
    createBreadcrumbJsonLd([
      {
        name: messages.breadcrumb.home,
        path: getLocalizedHref("/", localeSegment),
      },
      {
        name: messages.breadcrumb.applications,
        path: getLocalizedHref("/applications", localeSegment),
      },
      { name: application.title, path: pagePath },
    ]),
    createWebPageJsonLd({
      title: application.title,
      description: application.description,
      path: pagePath,
      image: application.heroImage?.src,
      inLanguage,
    }),
  ];

  return (
    <main className="application-detail-page min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
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
            <p className="application-hero-kicker">{messages.hero.eyebrow}</p>
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
                <Link href={contactHref}>{messages.hero.primaryAction}</Link>
              </Button>
              <Button
                asChild
                size="applicationHero"
                variant="applicationHeroSecondary"
              >
                <Link href={technicalDataHref}>
                  {messages.hero.secondaryAction}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {application.heroImage ? (
          <SecondarySectionNav
            actions={[
              { href: contactHref, label: messages.hero.primaryAction },
              {
                href: technicalDataHref,
                label: messages.hero.secondaryAction,
              },
            ]}
            ariaLabel={messages.navigation.ariaLabel}
            mobileMenuLabel={messages.navigation.mobileMenuLabel}
            subtitle={application.description}
            tabs={sectionTabs}
            tabsAriaLabel={messages.navigation.tabsAriaLabel}
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
            <div className="application-scene-visual">
              <Image
                src={publicPath(visualAssets.scene)}
                alt={`${application.title}${messages.scene.imageAltSuffix}`}
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
                {!usesReviewedApplicationDensity ? (
                  <p className="section-kicker mb-3">
                    {messages.scene.eyebrow}
                  </p>
                ) : null}
                <h2>{messages.scene.title}</h2>
                <p>{messages.scene.visualDescription}</p>
              </div>
            </div>
          ) : (
            <>
              <div className="application-scene-copy">
                {!usesReviewedApplicationDensity ? (
                  <p className="section-kicker mb-3">
                    {messages.scene.eyebrow}
                  </p>
                ) : null}
                <h2>{messages.scene.title}</h2>
                <p>{messages.scene.basicDescription}</p>

                <ul
                  className="application-scene-keywords"
                  aria-label={messages.scene.keywordsAria}
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
                aria-label={messages.scene.galleryAria}
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

          {visualAssets && showSelectionInputs ? (
            <ul
              className="application-condition-strip"
              aria-label={messages.scene.keywordsAria}
            >
              {sceneKeywords.map((item) => (
                <li key={item.title} data-application-motion-item>
                  <strong>{item.title}</strong>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          ) : null}
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
              <p className="section-kicker">{messages.parts.eyebrow}</p>
              <h2>
                {application.title}
                {inLanguage.startsWith("zh") ? "" : " — "}
                {messages.parts.titleSuffix}
              </h2>
            </div>
            {!usesReviewedApplicationDensity ? (
              <p>{messages.parts.description}</p>
            ) : null}
          </div>

          {applicationInlinePartGroups ? (
            <div
              className="application-system-groups"
              id="application-part-examples"
            >
              {applicationInlinePartGroups.map((group) => (
                <section
                  aria-labelledby={`application-system-${group.id}`}
                  className="application-system-group"
                  key={group.id}
                >
                  <h3
                    className="application-system-group-title"
                    id={`application-system-${group.id}`}
                  >
                    {group.label}
                  </h3>
                  <div className="application-use-grid application-system-part-grid">
                    {group.partIds.flatMap((partId) => {
                      const card = applicationUseCardByPartId.get(partId);

                      return card
                        ? [
                            <ApplicationUseCard
                              key={card.key}
                              cardLabel={
                                usesReviewedApplicationDensity
                                  ? undefined
                                  : messages.parts.cardLabel
                              }
                              description={card.description}
                              headingLevel={4}
                              image={card.image}
                              index={groupedPartOrder.get(partId) ?? card.index}
                              partId={card.partId}
                              title={card.title}
                            />,
                          ]
                        : [];
                    })}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <ApplicationExpandableGrid
              className="application-use-grid"
              id="application-part-examples"
              initialVisibleCount={4}
              showMoreLabel={`${messages.parts.showMorePrefix} ${Math.max(
                applicationUseCards.length - 4,
                0,
              )} ${messages.parts.showMoreSuffix}`}
            >
              {applicationUseCards.map((card) => (
                <ApplicationUseCard
                  key={card.key}
                  cardLabel={
                    usesReviewedApplicationDensity
                      ? undefined
                      : messages.parts.cardLabel
                  }
                  description={card.description}
                  image={card.image}
                  index={card.index}
                  partId={card.partId}
                  title={card.title}
                />
              ))}
            </ApplicationExpandableGrid>
          )}

          {componentSolutionItems.length > 0 ? (
            <ApplicationRelatedSolutions
              ariaLabel={componentMessages.relatedTitle}
              eyebrow={
                usesReviewedApplicationDensity
                  ? undefined
                  : messages.parts.componentEyebrow
              }
              items={componentSolutionItems}
              title={componentMessages.relatedTitle}
            />
          ) : null}

          {systemTopicItems.length > 0 ? (
            <ApplicationRelatedSolutions
              ariaLabel="Related application system topic"
              eyebrow={
                usesReviewedApplicationDensity
                  ? undefined
                  : "Application system topic"
              }
              items={systemTopicItems}
              title="Related application system topic"
            />
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
            <p className="section-kicker mb-3">{messages.materials.eyebrow}</p>
            <h2>{messages.materials.title}</h2>
            <p>{messages.materials.description}</p>
          </div>

          <ApplicationExpandableGrid
            className="application-notes-grid"
            id="application-material-directions"
            initialVisibleCount={3}
            showMoreLabel={`${messages.materials.showMorePrefix} ${Math.max(
              materialDirectionCards.length - 3,
              0,
            )} ${messages.materials.showMoreSuffix}`}
          >
            {materialDirectionCards.map((card, index) => (
              <ProductInfoCard
                key={card.key}
                card={card}
                englishDestinationLabel={
                  componentMessages.englishDestinationLabel
                }
                image={getCyclicItem(application.images, index)}
                localeSegment={localeSegment}
                materialImageSrc={getMaterialCardImage(card)}
                messages={messages.materials}
                showKeyUseLabel={!usesReviewedApplicationDensity}
              />
            ))}
          </ApplicationExpandableGrid>
        </section>

        <ActionPanel
          footerAdjacent
          id="material-evaluation"
          variant="recommendation"
          title={messages.evaluation.title}
          className={
            visualAssets
              ? "application-review-cta application-brief-cta"
              : "application-review-cta"
          }
          eyebrow={messages.evaluation.eyebrow}
          eyebrowClassName="section-kicker mb-3"
          aside={
            qualityEvidence ? (
              <div className="space-y-2 text-sm leading-6 text-slate-200">
                <strong className="block text-base text-white">
                  {qualityEvidence.standard}
                </strong>
                <span className="block font-semibold text-slate-100">
                  {qualityEvidence.system}
                </span>
                <span className="block text-slate-300">
                  {qualityEvidence.scope}
                </span>
                <Link
                  className="inline-flex font-semibold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
                  href={qualityEvidence.href}
                >
                  {qualityEvidence.action}
                </Link>
              </div>
            ) : undefined
          }
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href={contactHref}>{messages.evaluation.action}</Link>
            </Button>
          }
          data-application-motion
        >
          <p>{messages.evaluation.description}</p>
        </ActionPanel>
      </section>
    </main>
  );
}
