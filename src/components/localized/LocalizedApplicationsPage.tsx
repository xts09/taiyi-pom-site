import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { applications } from "@/data/applications";
import { componentSolutions } from "@/data/componentSolutions";
import type {
  ApplicationIndexMessages,
  LocalizedApplicationSlug,
} from "@/i18n/applicationTypes";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  getLocalizedHref,
  isEnglishFallbackHref,
} from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import { createBreadcrumbJsonLd, createCollectionPageJsonLd } from "@/lib/seo";
import componentStyles from "@/app/(en)/components/ComponentSolutions.module.css";

type LocalizedApplicationsPageProps = {
  inLanguage: string;
  localeSegment: LocalizedUrlSegment;
  messages: ApplicationIndexMessages;
  pagePath: string;
};

export function LocalizedApplicationsPage({
  inLanguage,
  localeSegment,
  messages,
  pagePath,
}: LocalizedApplicationsPageProps) {
  const contactHref = createContactHref(
    { source: messages.contactSource },
    getLocalizedHref("/contact", localeSegment),
  );
  const jsonLd = [
    createBreadcrumbJsonLd([
      {
        name: messages.breadcrumb.home,
        path: getLocalizedHref("/", localeSegment),
      },
      { name: messages.breadcrumb.applications, path: pagePath },
    ]),
    createCollectionPageJsonLd({
      title: messages.metadata.title,
      description: messages.metadata.description,
      path: pagePath,
      inLanguage,
      items: applications.map((application) => ({
        name: messages.cards[application.slug as LocalizedApplicationSlug]
          .title,
        path: getLocalizedHref(
          `/applications/${application.slug}`,
          localeSegment,
        ),
      })),
    }),
  ];

  return (
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <section className="application-index-shell mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="inner-hero application-index-hero reveal-up">
          <div className="application-index-hero-copy stagger-list">
            <p
              className="application-index-kicker"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              {messages.hero.eyebrow}
            </p>
            <h1
              className="text-4xl font-black tracking-tight text-white md:text-5xl"
              style={{ "--item-index": 1 } as CSSProperties}
            >
              {messages.hero.title}
            </h1>
            <p
              className="mt-5 max-w-3xl text-lg leading-8 text-slate-200"
              style={{ "--item-index": 2 } as CSSProperties}
            >
              {messages.hero.description}
            </p>

            <div
              className="application-index-actions stagger-list"
              style={{ "--item-index": 3 } as CSSProperties}
            >
              <Button
                asChild
                size="applicationHero"
                variant="applicationHeroPrimary"
                style={{ "--item-index": 0 } as CSSProperties}
              >
                <Link href={contactHref}>{messages.hero.primaryAction}</Link>
              </Button>
              <Button
                asChild
                size="applicationHero"
                variant="applicationHeroSecondary"
                style={{ "--item-index": 1 } as CSSProperties}
              >
                <Link
                  href={getLocalizedHref(
                    "/products/categories/pom",
                    localeSegment,
                  )}
                >
                  {messages.hero.secondaryAction}{" "}
                  {isEnglishFallbackHref(
                    "/products/categories/pom",
                    localeSegment,
                  ) ? (
                    <EnglishDestinationBadge
                      label={
                        messages.componentSolutions.englishDestinationLabel
                      }
                    />
                  ) : null}
                </Link>
              </Button>
            </div>
          </div>

          <aside
            className="application-index-hero-guide stagger-list"
            aria-label={messages.hero.guideAria}
          >
            <p className="application-index-guide-kicker">
              {messages.hero.guideKicker}
            </p>
            <div className="application-index-guide-links">
              <Link
                href="#industry-applications"
                className="application-index-guide-link"
                style={{ "--item-index": 0 } as CSSProperties}
              >
                <span className="application-index-guide-index">01</span>
                <span className="application-index-guide-copy">
                  <strong>{messages.hero.industryTitle}</strong>
                  <small>
                    {applications.length} {messages.hero.industryCountSuffix}
                  </small>
                </span>
                <span
                  className="application-index-guide-arrow"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>

              <Link
                href="#component-solutions-title"
                className="application-index-guide-link"
                style={{ "--item-index": 1 } as CSSProperties}
              >
                <span className="application-index-guide-index">02</span>
                <span className="application-index-guide-copy">
                  <strong>{messages.hero.componentTitle}</strong>
                  <small>
                    {componentSolutions.length}{" "}
                    {messages.hero.componentCountSuffix}
                  </small>
                </span>
                <span
                  className="application-index-guide-arrow"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </aside>
        </div>

        <section
          className="application-directory-section"
          id="industry-applications"
          aria-labelledby="industry-applications-title"
        >
          <header className="application-directory-head">
            <div>
              <p className="section-kicker">{messages.directory.eyebrow}</p>
              <h2 id="industry-applications-title">
                {messages.directory.title}
              </h2>
            </div>
            <p>{messages.directory.description}</p>
          </header>

          <div className="application-directory-grid stagger-list">
            {applications.map((application, index) => {
              const card =
                messages.cards[application.slug as LocalizedApplicationSlug];

              return (
                <Card key={application.slug} asChild variant="interactive">
                  <Link
                    href={getLocalizedHref(
                      `/applications/${application.slug}`,
                      localeSegment,
                    )}
                    className="application-directory-card"
                    aria-label={`${messages.directory.viewAction}：${card.title}`}
                    style={{ "--item-index": index } as CSSProperties}
                  >
                    {application.heroImage ? (
                      <div className="application-directory-media">
                        <Image
                          src={application.heroImage.src}
                          alt={card.imageAlt}
                          fill
                          sizes="(min-width: 80rem) 23vw, (min-width: 48rem) 46vw, 100vw"
                        />
                        <span className="application-directory-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ) : null}

                    <CardContent className="application-directory-body">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                      <span className="application-directory-action">
                        {messages.directory.viewAction}
                        <span
                          className="application-directory-arrow"
                          aria-hidden="true"
                        >
                          &rarr;
                        </span>
                      </span>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </section>

        <section
          className={`${componentStyles.applicationEntry} reveal-up`}
          aria-labelledby="component-solutions-title"
        >
          <div className={componentStyles.applicationEntryHeader}>
            <div>
              <p className="section-kicker mb-3">
                {messages.componentSolutions.eyebrow}
              </p>
              <h2 id="component-solutions-title">
                {messages.componentSolutions.title}
              </h2>
            </div>
            <p>{messages.componentSolutions.description}</p>
          </div>

          <div className={componentStyles.applicationEntryGrid}>
            {componentSolutions.map((solution, index) => {
              const sourceHref = `/components/${solution.slug}`;
              const href = getLocalizedHref(sourceHref, localeSegment);
              const showEnglishBadge = isEnglishFallbackHref(
                sourceHref,
                localeSegment,
              );

              return (
                <Link
                  key={solution.slug}
                  href={href}
                  className={componentStyles.applicationEntryLink}
                >
                  <span className={componentStyles.applicationEntryIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={componentStyles.applicationEntryTitle}>
                    {messages.componentSolutions.labels[solution.slug]}
                    {showEnglishBadge ? (
                      <EnglishDestinationBadge
                        label={
                          messages.componentSolutions.englishDestinationLabel
                        }
                      />
                    ) : null}
                  </span>
                  <span
                    className={componentStyles.applicationEntryArrow}
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              );
            })}
          </div>

          <div className={componentStyles.applicationEntryFooter}>
            <Button asChild variant="secondary" size="form">
              <Link href={getLocalizedHref("/components", localeSegment)}>
                {messages.componentSolutions.allAction}{" "}
                {isEnglishFallbackHref("/components", localeSegment) ? (
                  <EnglishDestinationBadge
                    label={messages.componentSolutions.englishDestinationLabel}
                  />
                ) : null}
              </Link>
            </Button>
          </div>
        </section>

        <section
          className="application-basis-strip stagger-list reveal-up reveal-delay-1"
          aria-labelledby="grade-shortlist-title"
        >
          <div
            className="stagger-list"
            style={{ "--item-index": 0 } as CSSProperties}
          >
            <p
              className="section-kicker mb-3"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              {messages.selection.eyebrow}
            </p>
            <h2
              id="grade-shortlist-title"
              style={{ "--item-index": 1 } as CSSProperties}
            >
              {messages.selection.title}
            </h2>
            <p style={{ "--item-index": 2 } as CSSProperties}>
              {messages.selection.description}
            </p>
          </div>

          <ol
            className="basis-rail stagger-list"
            style={{ "--item-index": 1 } as CSSProperties}
          >
            {messages.selection.items.map((item, index) => (
              <li key={item} style={{ "--item-index": index } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <ActionPanel
          footerAdjacent
          variant="recommendation"
          title={messages.inquiry.title}
          className="application-cta cta-ribbon mt-10"
          eyebrow={messages.inquiry.eyebrow}
          eyebrowClassName="section-kicker mb-3"
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href={contactHref}>{messages.inquiry.action}</Link>
            </Button>
          }
        >
          <p>{messages.inquiry.description}</p>
        </ActionPanel>
      </section>
    </main>
  );
}
