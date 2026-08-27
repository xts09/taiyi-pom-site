import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { serializeJsonLd } from "@/lib/jsonLd";
import { createContactHref } from "@/lib/contactContext";
import { ActionPanel } from "@/components/ActionPanel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { applications, selectionBasis } from "@/data/applications";
import { componentSolutions } from "@/data/componentSolutions";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";
import { getLanguageAlternates } from "@/i18n/releaseManifest";
import componentStyles from "@/app/(en)/components/ComponentSolutions.module.css";

const applicationsTitle = "Engineering Plastic Applications | Taiyi Polymer";
const applicationsDescription =
  "Explore application areas for modified POM and selected engineering plastic compounds, including automotive, electronics, automation, motion components, water control, washing machines, outdoor equipment, and textile machinery.";

export const metadata: Metadata = createPageMetadata({
  title: applicationsTitle,
  description: applicationsDescription,
  path: "/applications",
  image: "/applications/parts/washing-machine-components-hero.png",
  imageAlt: "Taiyi Polymer application engineering for washing machine components",
  languageAlternates: getLanguageAlternates("/applications"),
});

const applicationsJsonLd = [
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Applications", path: "/applications" },
  ]),
  createCollectionPageJsonLd({
    title: applicationsTitle,
    description: applicationsDescription,
    path: "/applications",
    items: applications.map((application) => ({
      name: application.title,
      path: `/applications/${application.slug}`,
    })),
  }),
];

const applicationDirectoryContactHref = createContactHref({
  source: "Application directory",
});

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(applicationsJsonLd),
        }}
      />
      <section className="application-index-shell mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="inner-hero application-index-hero reveal-up">
          <div className="application-index-hero-copy stagger-list">
            <p
              className="application-index-kicker"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              Application Engineering
            </p>
            <h1
              className="text-4xl font-black tracking-tight text-white md:text-5xl"
              style={{ "--item-index": 1 } as CSSProperties}
            >
              Application Engineering for Molded Parts
            </h1>

            <p
              className="mt-5 max-w-3xl text-lg leading-8 text-slate-200"
              style={{ "--item-index": 2 } as CSSProperties}
            >
              Start with the molded part, not a generic material name. Motion,
              load, environment, dimensions, tooling stage and document needs
              determine which modified POM candidates deserve comparison.
              PA6, PA66 and PPA are considered separately when the required
              property balance falls outside the practical POM range.
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
                <Link href={applicationDirectoryContactHref}>
                  Discuss Your Application
                </Link>
              </Button>
              <Button
                asChild
                size="applicationHero"
                variant="applicationHeroSecondary"
                style={{ "--item-index": 1 } as CSSProperties}
              >
                <Link href="/products/categories/pom">
                  Browse POM Compounds
                </Link>
              </Button>
            </div>
          </div>

          <aside
            className="application-index-hero-guide stagger-list"
            aria-label="Application browsing paths"
          >
            <p className="application-index-guide-kicker">Find a starting point</p>
            <div className="application-index-guide-links">
              <Link
                href="#industry-applications"
                className="application-index-guide-link"
                style={{ "--item-index": 0 } as CSSProperties}
              >
                <span className="application-index-guide-index">01</span>
                <span className="application-index-guide-copy">
                  <strong>Browse by industry</strong>
                  <small>{applications.length} operating contexts</small>
                </span>
                <span className="application-index-guide-arrow" aria-hidden="true">
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
                  <strong>Browse by component</strong>
                  <small>{componentSolutions.length} molded-part families</small>
                </span>
                <span className="application-index-guide-arrow" aria-hidden="true">
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
              <p className="section-kicker">Browse by Industry</p>
              <h2 id="industry-applications-title">Application areas</h2>
            </div>
            <p>
              Choose the operating context closest to your part. Each route
              connects typical components and working conditions to the
              material properties that matter most.
            </p>
          </header>

          <div className="application-directory-grid stagger-list">
            {applications.map((application, index) => {
              const cardTitle = application.shortTitle ?? application.title;

              return (
                <Card key={application.slug} asChild variant="interactive">
                  <Link
                    href={`/applications/${application.slug}`}
                    className="application-directory-card"
                    aria-label={`View ${cardTitle} application details`}
                    style={{ "--item-index": index } as CSSProperties}
                  >
                    {application.heroImage ? (
                      <div className="application-directory-media">
                        <Image
                          src={application.heroImage.src}
                          alt={application.heroImage.alt}
                          fill
                          sizes="(min-width: 80rem) 23vw, (min-width: 48rem) 46vw, 100vw"
                        />
                        <span className="application-directory-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ) : null}

                    <CardContent className="application-directory-body">
                      <h3>{cardTitle}</h3>
                      <p>{application.description}</p>
                      <span className="application-directory-action">
                        View application
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
              <p className="section-kicker mb-3">Browse by Component</p>
              <h2 id="component-solutions-title">Component solution paths</h2>
            </div>
            <p>
              Choose the molded-part family closest to your design to compare
              its operating inputs, failure modes and validation needs.
            </p>
          </div>

          <div className={componentStyles.applicationEntryGrid}>
            {componentSolutions.map((solution, index) => (
              <Link
                key={solution.slug}
                href={`/components/${solution.slug}`}
                className={componentStyles.applicationEntryLink}
              >
                <span className={componentStyles.applicationEntryIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={componentStyles.applicationEntryTitle}>
                  {solution.title}
                </span>
                <span
                  className={componentStyles.applicationEntryArrow}
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className={componentStyles.applicationEntryFooter}>
            <Button asChild variant="secondary" size="form">
              <Link href="/components">View All Component Solutions</Link>
            </Button>
          </div>
        </section>

        <section
          className="application-basis-strip stagger-list reveal-up reveal-delay-1"
          aria-labelledby="grade-shortlist-title"
        >
          <div className="stagger-list" style={{ "--item-index": 0 } as CSSProperties}>
            <p
              className="section-kicker mb-3"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              Selection Basis
            </p>
            <h2
              id="grade-shortlist-title"
              style={{ "--item-index": 1 } as CSSProperties}
            >
              How We Build a Grade Shortlist
            </h2>
            <p style={{ "--item-index": 2 } as CSSProperties}>
              We start from the molded part, tooling plan, multi-cavity
              consistency, shrinkage target, working condition, and performance
              target before building a practical grade shortlist.
            </p>
          </div>

          <ol
            className="basis-rail stagger-list"
            style={{ "--item-index": 1 } as CSSProperties}
          >
            {selectionBasis.map((item, index) => (
              <li
                key={item}
                style={{ "--item-index": index } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <ActionPanel
          footerAdjacent
          variant="recommendation"
          title="Need Help Shortlisting a Grade?"
          className="application-cta cta-ribbon mt-10"
          eyebrow="Inquiry Preparation"
          eyebrowClassName="section-kicker mb-3"
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href={applicationDirectoryContactHref}>
                Discuss Your Application
              </Link>
            </Button>
          }
        >
          <p>
            Share the application, mold stage, cavity count, shrinkage or
            warpage concern, current material reference, color, document
            requirements, and estimated volume. We will use those inputs to
            prepare a modified-material shortlist and confirm the next document
            or sample step.
          </p>
        </ActionPanel>
      </section>
    </main>
  );
}
