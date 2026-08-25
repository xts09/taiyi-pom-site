import Image from "next/image";
import Link from "next/link";
import styles from "@/app/(en)/about/AboutPage.module.css";
import { MetricGroup } from "@/components/MetricGroup";
import { ValueText } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import { availableDocuments, certifications } from "@/data/company";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import {
  chineseAboutMessages,
  chineseCompanyFigures,
  chineseCompanyQualifications,
  chineseExportRoutes,
  chineseFactoryImages,
} from "@/i18n/messages/zh-CN-about";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { publicPath } from "@/lib/paths";

type LocalizedAboutPageProps = {
  localeSegment: LocalizedUrlSegment;
};

function keepChineseTechnicalTermsTogether(text: string) {
  return text.split(/(改性|质量)/g).map((part, index) =>
    part === "改性" || part === "质量" ? (
      <span className={styles.unbrokenPhrase} key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id}>{keepChineseTechnicalTermsTogether(title)}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

export function LocalizedAboutPage({
  localeSegment,
}: LocalizedAboutPageProps) {
  const localizedContent = translateExpandedContent(
    {
      messages: chineseAboutMessages,
      companyFigures: chineseCompanyFigures,
      companyQualifications: chineseCompanyQualifications,
      exportRoutes: chineseExportRoutes,
      factoryImages: chineseFactoryImages,
    },
    localeSegment,
  );
  const {
    messages,
    companyFigures,
    companyQualifications,
    exportRoutes,
    factoryImages,
  } = localizedContent;
  const imageFor = (
    placement: "hero" | "story" | "gallery" | "testing",
  ) => factoryImages.find((image) => image.placement === placement);
  const heroImage = imageFor("hero") ?? factoryImages[0];
  const storyImage = imageFor("story") ?? heroImage;
  const manufacturingImage = imageFor("gallery") ?? storyImage;
  const laboratoryImage = imageFor("testing") ?? manufacturingImage;
  const localizedHref = (href: string) =>
    href.startsWith("#") ? href : getLocalizedHref(href, localeSegment);

  return (
    <>
      <section className={styles.hero} aria-labelledby="about-title">
        <Image
          src={publicPath(heroImage.src)}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`site-container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>{messages.hero.eyebrow}</p>
            <h1 id="about-title">
              {keepChineseTechnicalTermsTogether(messages.hero.title)}
            </h1>
            <p className={styles.heroSummary}>{messages.hero.summary}</p>
            <div className={styles.heroActions}>
              <Button asChild variant="inverse" size="form">
                <Link href={localizedHref("/products")}>
                  {messages.hero.materialsAction}
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="form"
                className={styles.heroSecondaryAction}
              >
                <Link href="#manufacturing">
                  {messages.hero.manufacturingAction}
                </Link>
              </Button>
            </div>
          </div>
          <p className={styles.heroCaption}>
            {heroImage.label} · {messages.hero.location}
          </p>
        </div>
      </section>

      <section className={styles.identity} aria-labelledby="who-we-are-title">
        <div className={`site-container ${styles.identityGrid}`}>
          <div className={styles.identityCopy}>
            <SectionHeading
              eyebrow={messages.identity.eyebrow}
              id="who-we-are-title"
              title={messages.identity.title}
            />
            <div className={styles.prose}>
              <p>{messages.identity.body}</p>
            </div>
          </div>
          <figure className={styles.identityMedia}>
            <Image
              src={publicPath(storyImage.src)}
              alt={storyImage.alt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className={styles.coverImage}
            />
            <figcaption>{storyImage.label}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.focus} aria-labelledby="focus-title">
        <div className="site-container">
          <SectionHeading
            eyebrow={messages.focus.eyebrow}
            id="focus-title"
            title={messages.focus.title}
          />
          <div className={styles.focusList}>
            {messages.focus.areas.slice(0, 2).map((area) => (
              <Link
                key={area.index}
                href={localizedHref(area.href)}
                className={styles.focusRow}
              >
                <span className={styles.focusIndex}>{area.index}</span>
                <span className={styles.focusLabel}>{area.label}</span>
                <strong>{area.title}</strong>
                <span className={styles.focusDescription}>
                  {area.description}
                </span>
                <span className={styles.rowArrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="manufacturing"
        className={styles.manufacturing}
        aria-labelledby="manufacturing-title"
      >
        <div className="site-container">
          <div className={styles.manufacturingIntro}>
            <SectionHeading
              eyebrow={messages.manufacturing.eyebrow}
              id="manufacturing-title"
              title={messages.manufacturing.title}
              description={messages.manufacturing.description}
            />
            <Link
              href={localizedHref(
                createContactHref({
                  intent: "quote-supply",
                  source: "about",
                }),
              )}
            >
              {messages.manufacturing.action}{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <MetricGroup
            variant="rail"
            tone="light"
            className={styles.metricRail}
            items={companyFigures}
            renderValue={(figure) => (
              <ValueText value={String(figure.value)} />
            )}
          />
          <figure className={styles.manufacturingMedia}>
            <Image
              src={publicPath(manufacturingImage.src)}
              alt={manufacturingImage.alt}
              fill
              sizes="(min-width: 1024px) 92rem, 100vw"
              className={styles.coverImage}
            />
            <figcaption>
              <span>{manufacturingImage.label}</span>
              <span>{messages.manufacturing.facilityLabel}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.people} aria-labelledby="people-title">
        <div className={`site-container ${styles.peopleGrid}`}>
          <div className={styles.peopleCopy}>
            <SectionHeading
              eyebrow={messages.people.eyebrow}
              id="people-title"
              title={messages.people.title}
              description={messages.people.description}
            />
            <ul>
              {messages.people.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <figure className={styles.labMedia}>
            <Image
              src={publicPath(laboratoryImage.src)}
              alt={laboratoryImage.alt}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className={styles.coverImage}
            />
            <figcaption>{laboratoryImage.label}</figcaption>
          </figure>
        </div>
      </section>

      <section
        className={styles.credentials}
        aria-labelledby="overview-credentials-title"
      >
        <div className="site-container">
          <div className={styles.credentialsIntro}>
            <SectionHeading
              eyebrow={messages.credentials.eyebrow}
              id="overview-credentials-title"
              title={messages.credentials.title}
              description={messages.credentials.description}
            />
            <div
              className={styles.documentTags}
              aria-label={messages.credentials.documentsAria}
            >
              {availableDocuments.map((document) => (
                <span key={document}>{document}</span>
              ))}
            </div>
          </div>
          <div className={styles.credentialGrid}>
            {companyQualifications.map((qualification, index) => (
              <article key={qualification.title}>
                <span>0{index + 1}</span>
                <p>{qualification.category}</p>
                <h3>{qualification.title}</h3>
              </article>
            ))}
            <article className={styles.systemsCard}>
              <span>04</span>
              <p>{messages.credentials.systemsCategory}</p>
              <h3>{messages.credentials.systemsTitle}</h3>
              <ul>
                {certifications.map((certificate) => (
                  <li key={certificate.standard}>
                    <a
                      href={publicPath(certificate.documentHref)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {certificate.standard}{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.global} aria-labelledby="global-title">
        <div className={`site-container ${styles.globalGrid}`}>
          <SectionHeading
            eyebrow={messages.global.eyebrow}
            id="global-title"
            title={messages.global.title}
            description={messages.global.description}
          />
          <dl className={styles.routeList}>
            {exportRoutes.map((route, index) => (
              <div key={route.id}>
                <dt>
                  <span>0{index + 1}</span>
                  {route.region}
                </dt>
                <dd>{route.coverage}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className={styles.finalCta}
        aria-labelledby="about-cta-title"
        data-footer-adjacent="true"
      >
        <div className={`site-container ${styles.finalCtaGrid}`}>
          <div>
            <p className={styles.eyebrow}>{messages.finalCta.eyebrow}</p>
            <h2 id="about-cta-title">
              {keepChineseTechnicalTermsTogether(messages.finalCta.title)}
            </h2>
            <p>{messages.finalCta.body}</p>
          </div>
          <ul>
            {messages.finalCta.situations.map((situation) => (
              <li key={situation}>{situation}</li>
            ))}
          </ul>
          <div className={styles.finalCtaActions}>
            <Button asChild variant="inverse" size="form">
              <Link
                href={localizedHref(
                  createContactHref({ source: "about" }),
                )}
              >
                {messages.finalCta.primaryAction}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
