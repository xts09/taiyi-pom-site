import Link from "next/link";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import type { PomLandingPageData } from "@/data/pomLandingPages";
import { createBreadcrumbJsonLd, siteUrl } from "@/lib/seo";

export function PomLandingPage({ page }: { page: PomLandingPageData }) {
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
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[0.8rem] border border-slate-200 bg-white/95 p-6 shadow-[0_1.25rem_2.6rem_rgba(15,23,42,0.08)] sm:p-8">
          <p className="section-kicker mb-3">{page.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-slate-950 md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            {page.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="cta-primary px-6 py-3 text-sm">
              {page.primaryActionLabel}
            </Link>
            <Link
              href="/technical-data-sheets"
              className="cta-secondary px-6 py-3 text-sm"
            >
              Find Technical Data
            </Link>
          </div>
        </div>

        <section
          className="mt-8 grid gap-4 md:grid-cols-4"
          aria-label="Material review summary"
        >
          {page.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[0.8rem] border border-blue-100 bg-white/90 p-5 shadow-[0_1rem_2rem_rgba(15,23,42,0.05)]"
            >
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                {metric.label}
              </p>
              <strong className="mt-2 block text-lg text-slate-950">
                {metric.value}
              </strong>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          {page.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[0.8rem] border border-blue-100 bg-white/95 p-6 shadow-[0_1.25rem_2.4rem_rgba(15,23,42,0.06)]"
            >
              <h2 className="text-2xl font-black text-slate-950">
                {section.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{section.body}</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {page.catalogEvidence ? (
          <section className="mt-10 rounded-[0.8rem] border border-blue-100 bg-white/95 p-6 shadow-[0_1.25rem_2.4rem_rgba(15,23,42,0.06)]">
            <p className="section-kicker mb-3">Catalogue Evidence</p>
            <h2 className="text-2xl font-black text-slate-950">
              {page.catalogEvidence.title}
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              {page.catalogEvidence.note}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {page.catalogEvidence.items.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[0.6rem] border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="font-extrabold text-slate-950">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {page.crossReferenceRows ? (
          <section className="mt-10 rounded-[0.8rem] border border-slate-200 bg-white/95 p-6 shadow-[0_1.25rem_2.4rem_rgba(15,23,42,0.06)]">
            <p className="section-kicker mb-3">Cross-Reference Review</p>
            <h2 className="text-2xl font-black text-slate-950">
              Preliminary Grade Review Table
            </h2>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[48rem] w-full text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-5 py-3">Reference grade</th>
                    <th className="px-5 py-3">Material type</th>
                    <th className="px-5 py-3">Review direction</th>
                    <th className="px-5 py-3">Taiyi path</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {page.crossReferenceRows.map((row) => (
                    <tr key={row.reference}>
                      <td className="px-5 py-3 font-bold text-slate-950">
                        {row.reference}
                      </td>
                      <td className="px-5 py-3 text-slate-700">
                        {row.materialType}
                      </td>
                      <td className="px-5 py-3 text-slate-700">
                        {row.reviewDirection}
                      </td>
                      <td className="px-5 py-3">
                        <Link
                          href={row.taiyiPath}
                          className="font-extrabold text-blue-700 hover:text-blue-800"
                        >
                          Review path
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Cross-reference information is provided for preliminary material
              selection only. Final suitability should be confirmed through
              testing under the customer&apos;s actual processing and application
              conditions.
            </p>
          </section>
        ) : null}

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[0.8rem] border border-blue-100 bg-white/95 p-6">
            <p className="section-kicker mb-3">Inquiry Inputs</p>
            <h2 className="text-2xl font-black text-slate-950">
              Send These Details
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              {page.reviewInputs.map((input) => (
                <li key={input} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>{input}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[0.8rem] border border-blue-100 bg-white/95 p-6">
            <p className="section-kicker mb-3">Related Paths</p>
            <h2 className="text-2xl font-black text-slate-950">
              Continue Material Review
            </h2>
            <div className="mt-5 grid gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[0.6rem] border border-slate-200 p-4 hover:border-blue-300 hover:bg-blue-50/50"
                >
                  <strong className="block text-slate-950">{link.label}</strong>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    {link.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <MaterialRecommendationCta
          kicker="Material Review"
          title="Need a practical material direction?"
          className="selection-support-band resource-cta mt-12"
          actionLabel={page.primaryActionLabel}
        >
          <p>
            Share the current material, application, target properties, mold
            stage, document requirements, and estimated volume. Taiyi can review
            a suitable material direction for sample or TDS discussion.
          </p>
        </MaterialRecommendationCta>
      </section>
    </main>
  );
}
