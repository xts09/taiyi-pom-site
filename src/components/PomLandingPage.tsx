import Image from "next/image";
import Link from "next/link";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import { ActionPanel } from "@/components/ActionPanel";
import { MetricGroup } from "@/components/MetricGroup";
import { Button } from "@/components/ui/button";
import type { PomLandingPageData } from "@/data/pomLandingPages";
import { createBreadcrumbJsonLd, siteUrl } from "@/lib/seo";

const landingMaterialBySlug: Partial<Record<PomLandingPageData["slug"], string>> = {
  "conductive-antistatic-pom": "Conductive / Antistatic POM",
  "modified-pom-compounds": "Modified POM Compounds",
  "wear-resistant-low-friction-pom": "Wear-Resistant & Low-Friction POM",
};

export function PomLandingPage({ page }: { page: PomLandingPageData }) {
  const hasImageHero = Boolean(page.heroImage);
  const heroClassName = hasImageHero
    ? "pom-landing-hero pom-landing-hero-image"
    : "pom-landing-hero pom-landing-hero-plain";
  const contactHref = createContactHref({
    material: landingMaterialBySlug[page.slug],
    source: page.title,
  });
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: page.title, path: `/${page.slug}` },
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
      url: `${siteUrl}/${page.slug}`,
    },
  ];

  return (
    <main className="pom-landing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />

      <section className="pom-landing-shell">
        <div className={heroClassName}>
          {page.heroImage ? (
            <>
              <Image
                src={page.heroImage.src}
                alt={page.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="pom-landing-hero-media"
              />
              <div className="pom-landing-hero-scrim" />
            </>
          ) : null}

          <div className="pom-landing-hero-copy">
            <p className="pom-landing-eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>

            <div className="pom-landing-actions">
              <Button asChild variant="primary" size="form">
                <Link href={contactHref} className="pom-landing-action">
                  {page.primaryActionLabel}
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="form"
                className="pom-landing-secondary-action"
              >
                <Link href="/technical-data-sheets">Find Technical Data</Link>
              </Button>
            </div>
          </div>
        </div>

        <MetricGroup
          className="pom-landing-metrics"
          aria-label="Material review summary"
          items={page.metrics}
          variant="rail"
        />

        <section className="pom-landing-section-grid">
          {page.sections.map((section) => (
            <article key={section.title} className="pom-landing-panel">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {page.catalogEvidence ? (
          <section className="pom-landing-evidence">
            <div className="pom-landing-section-head">
              <p className="section-kicker">Catalogue Evidence</p>
              <h2>{page.catalogEvidence.title}</h2>
              <p>{page.catalogEvidence.note}</p>
            </div>
            <div className="pom-landing-evidence-list">
              {page.catalogEvidence.items.map((item) => (
                <article key={item.label}>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {page.crossReferenceRows ? (
          <section className="pom-landing-cross-reference">
            <div className="pom-landing-section-head">
              <p className="section-kicker">Cross-Reference Review</p>
              <h2>Preliminary Grade Review Table</h2>
            </div>
            <div className="pom-landing-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Reference grade</th>
                    <th>Material type</th>
                    <th>Review direction</th>
                    <th>Taiyi path</th>
                  </tr>
                </thead>
                <tbody>
                  {page.crossReferenceRows.map((row) => (
                    <tr key={row.reference}>
                      <td>{row.reference}</td>
                      <td>{row.materialType}</td>
                      <td>{row.reviewDirection}</td>
                      <td>
                        <Link href={row.taiyiPath}>
                          Review path
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pom-landing-note">
              Cross-reference information is provided for preliminary material
              selection only. Final suitability should be confirmed through
              testing under the customer&apos;s actual processing and application
              conditions.
            </p>
          </section>
        ) : null}

        <section className="pom-landing-review-grid">
          <div className="pom-landing-panel">
            <p className="section-kicker">Inquiry Inputs</p>
            <h2>Send These Details</h2>
            <ul>
              {page.reviewInputs.map((input) => (
                <li key={input}>{input}</li>
              ))}
            </ul>
          </div>

          <div className="pom-landing-panel">
            <p className="section-kicker">Related Paths</p>
            <h2>Continue Material Review</h2>
            <div className="pom-landing-related-list">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                >
                  <strong>{link.label}</strong>
                  <span>{link.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pom-landing-faq" aria-labelledby="pom-landing-faq-title">
          <div className="pom-landing-section-head">
            <h2 id="pom-landing-faq-title">Frequently Asked Questions</h2>
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
          title="Need Help Shortlisting a Grade?"
          className="selection-support-band resource-cta pom-landing-cta"
          eyebrow="Material Review"
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
          <p>
            Share the current material, application, target properties, mold
            stage, document requirements, and estimated volume. Taiyi Polymer
            can shortlist relevant grades and confirm the next sample or TDS
            step.
          </p>
        </ActionPanel>
      </section>
    </main>
  );
}
