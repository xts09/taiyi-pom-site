import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  createContactHref,
  type ContactIntent,
} from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import { ActionPanel } from "@/components/ActionPanel";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { MetricGroup } from "@/components/MetricGroup";
import { Button } from "@/components/ui/button";
import type { PomLandingPageData } from "@/data/pomLandingPages";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  getLocalizedHref,
  isEnglishFallbackHref,
} from "@/i18n/releaseManifest";
import { createBreadcrumbJsonLd, siteUrl } from "@/lib/seo";

const landingMaterialBySlug: Partial<Record<PomLandingPageData["slug"], string>> = {
  "conductive-antistatic-pom": "Conductive / Antistatic POM",
  "modified-pom-compounds": "Modified POM Compounds",
  "wear-resistant-low-friction-pom": "Wear-Resistant & Low-Friction POM",
};

const landingIntentBySlug: Partial<
  Record<PomLandingPageData["slug"], ContactIntent>
> = {
  "conductive-antistatic-pom": "grade-evaluation",
  "modified-pom-compounds": "grade-evaluation",
};

export type PomLandingPageUi = {
  homeBreadcrumb: string;
  openFamilyAction: string;
  gradeEvidenceKicker: string;
  gradeFamilyLabel: string;
  modificationDirectionLabel: string;
  electricalDirectionLabel: string;
  materialSelectionSummaryAria: string;
  defaultSecondaryAction: string;
  comparisonKicker: string;
  comparisonTitle: string;
  referenceGradeLabel: string;
  materialTypeLabel: string;
  comparisonBasisLabel: string;
  taiyiPathLabel: string;
  openMaterialPathAction: string;
  comparisonNote: string;
  inquiryKicker: string;
  inquiryTitle: string;
  relatedKicker: string;
  relatedTitle: string;
  faqTitle: string;
  finalTitle: string;
  finalEyebrow: string;
  finalDescription: string;
  englishDestinationLabel: string;
};

const englishUi: PomLandingPageUi = {
  homeBreadcrumb: "Home",
  openFamilyAction: "Open family",
  gradeEvidenceKicker: "Grade Evidence",
  gradeFamilyLabel: "Grade / family",
  modificationDirectionLabel: "Modification direction",
  electricalDirectionLabel: "Published electrical direction",
  materialSelectionSummaryAria: "Material selection summary",
  defaultSecondaryAction: "Find Technical Data",
  comparisonKicker: "Grade Comparison",
  comparisonTitle: "Preliminary Comparison Table",
  referenceGradeLabel: "Reference grade",
  materialTypeLabel: "Material type",
  comparisonBasisLabel: "Comparison basis",
  taiyiPathLabel: "Taiyi path",
  openMaterialPathAction: "Open material path",
  comparisonNote:
    "Cross-reference information is provided for preliminary material selection only. Final suitability should be confirmed through testing under the customer's actual processing and application conditions.",
  inquiryKicker: "Inquiry Inputs",
  inquiryTitle: "Send These Details",
  relatedKicker: "Related Paths",
  relatedTitle: "Continue Material Selection",
  faqTitle: "Frequently Asked Questions",
  finalTitle: "Need Help Shortlisting a Grade?",
  finalEyebrow: "Grade Selection",
  finalDescription:
    "Share the current material, application, target properties, mold stage, document requirements, and estimated volume. Taiyi Polymer can shortlist relevant grades and confirm the next sample or TDS step.",
  englishDestinationLabel: "English content",
};

type PomLandingPageProps = {
  page: PomLandingPageData;
  localeSegment?: LocalizedUrlSegment;
  ui?: PomLandingPageUi;
};

export function PomLandingPage({
  page,
  localeSegment,
  ui = englishUi,
}: PomLandingPageProps) {
  const localizedHref = (href: string) =>
    href.startsWith("#") ? href : getLocalizedHref(href, localeSegment);
  const englishDestinationBadge = (href: string) =>
    isEnglishFallbackHref(href, localeSegment) ? (
      <EnglishDestinationBadge label={ui.englishDestinationLabel} />
    ) : null;
  const pagePath = localizedHref(`/${page.slug}`);
  const hasImageHero = Boolean(page.heroImage);
  const heroClassName = [
    "pom-landing-hero",
    hasImageHero ? "pom-landing-hero-image" : "pom-landing-hero-plain",
    `pom-landing-hero-${page.slug}`,
  ].join(" ");
  const contactHref = createContactHref(
    {
      intent: landingIntentBySlug[page.slug],
      material: landingMaterialBySlug[page.slug],
      source: page.title,
    },
    localizedHref("/contact"),
  );
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: ui.homeBreadcrumb, path: localizedHref("/") },
      { name: page.title, path: pagePath },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.metaDescription,
      url: `${siteUrl}${pagePath}`,
    },
  ];

  const catalogEvidenceSection = page.catalogEvidence ? (
    <section
      id={
        page.catalogEvidence.position === "afterHero"
          ? "part-requirement-map"
          : undefined
      }
      className={[
        "pom-landing-evidence",
        page.catalogEvidence.variant === "directory"
          ? "pom-landing-evidence-directory"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="pom-landing-section-head">
        {page.catalogEvidence.kicker ? (
          <p className="section-kicker">{page.catalogEvidence.kicker}</p>
        ) : null}
        <h2>{page.catalogEvidence.title}</h2>
        <p>{page.catalogEvidence.note}</p>
      </div>

      {page.catalogEvidence.groups ? (
        <div className="pom-landing-path-groups">
          {page.catalogEvidence.groups.map((group) => {
            const groupItems = page.catalogEvidence?.items.filter((item) =>
              group.itemLabels.includes(item.label),
            );

            return (
              <section
                key={group.id}
                id={group.id}
                className="pom-landing-path-group"
              >
                <div className="pom-landing-path-group-intro">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <div
                  className="pom-landing-path-links"
                  data-count={groupItems?.length ?? 1}
                >
                  {groupItems?.map((item) => (
                    <Link
                      key={item.label}
                      href={localizedHref(item.href ?? "#")}
                      className="pom-landing-path-link"
                      aria-label={`${item.label}: ${item.detail}`}
                    >
                      <span>
                        <strong>
                          <span className="pom-landing-path-label-full">
                            {item.label}
                          </span>
                          {item.mobileLabel ? (
                            <span className="pom-landing-path-label-mobile">
                              {item.mobileLabel}
                            </span>
                          ) : null}
                          {item.href ? englishDestinationBadge(item.href) : null}
                        </strong>
                        <span className="pom-landing-path-detail">
                          {item.detail}
                        </span>
                      </span>
                      <ArrowUpRight aria-hidden="true" size={18} />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="pom-landing-evidence-list">
          {page.catalogEvidence.items.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={localizedHref(item.href)}
                className="pom-landing-evidence-link"
              >
                <div>
                  <h3>
                    {item.label}
                    {englishDestinationBadge(item.href)}
                  </h3>
                  <p>{item.detail}</p>
                </div>
                <span className="pom-landing-evidence-action">
                  {ui.openFamilyAction}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </span>
              </Link>
            ) : (
              <article key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ),
          )}
        </div>
      )}
    </section>
  ) : null;

  return (
    <main
      className={`pom-landing-page pom-landing-page-${page.slug}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />

      <section className="pom-landing-shell">
        <div className={heroClassName}>
          {page.heroImage ? (
            <div className="pom-landing-hero-visual">
              <Image
                src={page.heroImage.src}
                alt={page.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="pom-landing-hero-media"
              />
              <div className="pom-landing-hero-scrim" />
            </div>
          ) : null}

          <div className="pom-landing-hero-copy">
            {page.eyebrow ? (
              <p className="pom-landing-eyebrow">{page.eyebrow}</p>
            ) : null}
            <h1>{page.title}</h1>
            <p>{page.intro}</p>

            <div className="pom-landing-actions">
              <Button asChild variant="primary" size="form">
                <Link
                  href={
                    page.primaryActionHref
                      ? localizedHref(page.primaryActionHref)
                      : contactHref
                  }
                  className="pom-landing-action"
                >
                  {page.primaryActionLabel}
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="form"
                className="pom-landing-secondary-action"
              >
                <Link
                  href={localizedHref(
                    page.secondaryActionHref ?? "/technical-data-sheets",
                  )}
                >
                  {page.secondaryActionLabel ?? ui.defaultSecondaryAction}
                  {englishDestinationBadge(
                    page.secondaryActionHref ?? "/technical-data-sheets",
                  )}
                </Link>
              </Button>
            </div>

            {page.heroProof ? (
              <p className="pom-landing-proof-strip">{page.heroProof}</p>
            ) : null}
          </div>
        </div>

        {page.catalogEvidence?.position === "afterHero"
          ? catalogEvidenceSection
          : null}

        {page.gradeEvidence ? (
          <section className="pom-landing-grade-evidence">
            <div className="pom-landing-section-head">
              <p className="section-kicker">{ui.gradeEvidenceKicker}</p>
              <h2>{page.gradeEvidence.title}</h2>
            </div>
            <div className="pom-landing-grade-evidence-list">
              {page.gradeEvidence.items.map((item) => (
                <article key={item.grade}>
                  <div>
                    <span>{ui.gradeFamilyLabel}</span>
                    <strong>{item.grade}</strong>
                  </div>
                  <div>
                    <span>{ui.modificationDirectionLabel}</span>
                    <p>{item.modification}</p>
                  </div>
                  <div>
                    <span>{ui.electricalDirectionLabel}</span>
                    <p>{item.electricalDirection}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {page.metrics ? (
          <MetricGroup
            className="pom-landing-metrics"
            aria-label={ui.materialSelectionSummaryAria}
            items={page.metrics}
            variant="rail"
          />
        ) : null}

        {page.sections.length ? (
          <section
            className={[
              "pom-landing-section-grid",
              page.sectionsVariant === "steps"
                ? "pom-landing-section-grid-steps"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {page.sections.map((section) => (
              <article key={section.title} className="pom-landing-panel">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.points.length ? (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </section>
        ) : null}

        {page.catalogEvidence?.position !== "afterHero"
          ? catalogEvidenceSection
          : null}

        {page.crossReferenceRows ? (
          <section className="pom-landing-cross-reference">
            <div className="pom-landing-section-head">
              <p className="section-kicker">{ui.comparisonKicker}</p>
              <h2>{ui.comparisonTitle}</h2>
            </div>
            <div className="pom-landing-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>{ui.referenceGradeLabel}</th>
                    <th>{ui.materialTypeLabel}</th>
                    <th>{ui.comparisonBasisLabel}</th>
                    <th>{ui.taiyiPathLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.crossReferenceRows.map((row) => (
                    <tr key={row.reference}>
                      <td>{row.reference}</td>
                      <td>{row.materialType}</td>
                      <td>{row.reviewDirection}</td>
                      <td>
                        <Link href={localizedHref(row.taiyiPath)}>
                          {ui.openMaterialPathAction}
                          {englishDestinationBadge(row.taiyiPath)}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pom-landing-note">
              {ui.comparisonNote}
            </p>
          </section>
        ) : null}

        {page.showReviewSection !== false ? (
          <section className="pom-landing-review-grid">
          <div className="pom-landing-panel">
            <p className="section-kicker">{ui.inquiryKicker}</p>
            <h2>{ui.inquiryTitle}</h2>
            <ul>
              {page.reviewInputs.map((input) => (
                <li key={input}>{input}</li>
              ))}
            </ul>
          </div>

          <div className="pom-landing-panel">
            <p className="section-kicker">{ui.relatedKicker}</p>
            <h2>{ui.relatedTitle}</h2>
            <div className="pom-landing-related-list">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(link.href)}
                >
                  <strong>
                    {link.label}
                    {englishDestinationBadge(link.href)}
                  </strong>
                  <span>{link.description}</span>
                </Link>
              ))}
            </div>
          </div>
          </section>
        ) : null}

        <section className="pom-landing-faq" aria-labelledby="pom-landing-faq-title">
          <div className="pom-landing-section-head">
            <h2 id="pom-landing-faq-title">{ui.faqTitle}</h2>
          </div>
          <dl>
            {page.faqs.map((item) => (
              <div key={item.question}>
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <ActionPanel
          footerAdjacent
          variant="recommendation"
          title={ui.finalTitle}
          className="selection-support-band resource-cta pom-landing-cta"
          eyebrow={ui.finalEyebrow}
          eyebrowClassName="section-kicker mb-3"
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href={contactHref}>{page.primaryActionLabel}</Link>
            </Button>
          }
        >
          <p>{ui.finalDescription}</p>
        </ActionPanel>
      </section>
    </main>
  );
}
