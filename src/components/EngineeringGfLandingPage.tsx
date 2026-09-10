import Link from "next/link";
import Image from "next/image";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  EngineeringGfGradeComparison,
  type EngineeringGfComparisonGrade,
} from "@/components/EngineeringGfGradeComparison";
import { DirectoryRow } from "@/components/DirectoryRow";
import { GlassFiberGradeHeading } from "@/components/GlassFiberGradeCards";
import { PageHero } from "@/components/PageHero";
import { MediaFigure } from "@/components/MediaFigure";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { SecondarySectionNav } from "@/components/SecondarySectionNav";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import {
  getEngineeringGfGrades,
  getEngineeringGfLandingPageData,
  type EngineeringGfPolymer,
} from "@/data/engineeringGfLandingPages";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  formatEngineeringGfMessage,
  getEngineeringGfLandingMessages,
} from "@/i18n/engineeringGfLandingMessages";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
} from "@/lib/seo";
import styles from "./EngineeringGfLandingPage.module.css";

type EngineeringGfLandingPageProps = {
  polymer: EngineeringGfPolymer;
  localeSegment?: LocalizedUrlSegment;
  inLanguage?: string;
};

export function EngineeringGfLandingPage({
  polymer,
  localeSegment,
  inLanguage = "en",
}: EngineeringGfLandingPageProps) {
  const { page, ui } = getEngineeringGfLandingMessages(
    polymer,
    localeSegment,
  );
  const localizedPath = (path: string) =>
    getLocalizedHref(path, localeSegment);
  const otherPolymer = polymer === "PA6" ? "PA66" : "PA6";
  const grades = getEngineeringGfGrades(polymer);
  const comparisonGrades = grades.map((grade): EngineeringGfComparisonGrade => ({
    grade: grade.grade,
    slug: grade.slug,
    href: localizedPath(`/products/${grade.slug}`),
    filler: grade.filler,
    density: grade.density,
    flammability: grade.flammability,
    tensile: grade.tensile,
    flexuralStrength: grade.flexuralStrength,
    flexuralModulus: grade.flexuralModulus,
    impact: grade.impact,
    hdt: grade.hdt,
    waterAbsorption: grade.waterAbsorption,

    tdsHref: createContactHref(
      {
        material: page.contactMaterial,
        grade: grade.grade,
        intent: "tds",
        source: `${page.polymer} glass-fiber comparison`,
      },
      localizedPath("/contact"),
    ),
  }));
  const contactHref = createContactHref(
    {
      material: page.contactMaterial,
      source: `${page.polymer} glass-fiber landing`,
    },
    localizedPath("/contact"),
  );
  const technicalDataHref = localizedPath("/technical-data-sheets");
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: ui.homeBreadcrumb, path: localizedPath("/") },
      { name: ui.productsBreadcrumb, path: localizedPath("/products") },
      { name: page.parentLabel, path: localizedPath(page.parentPath) },
      { name: page.title, path: localizedPath(page.path) },
    ]),
    createCollectionPageJsonLd({
      title: page.metaTitle,
      description: page.metaDescription,
      path: localizedPath(page.path),
      inLanguage,
      items: grades.map((grade) => ({
        name: `${grade.grade} ${grade.family} GF${grade.filler}`,
        path: localizedPath(`/products/${grade.slug}`),
      })),
    }),
  ];

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <ProductPageMotion>
        <div className={styles.heroBand}>
          <div className={styles.heroBreadcrumb}>
            <Breadcrumbs
              className={styles.breadcrumb}
              items={[
                { href: localizedPath("/products"), label: ui.productsBreadcrumb },
                { href: localizedPath(page.parentPath), label: page.parentLabel },
                { label: page.title },
              ]}
            />
          </div>
          <PageHero
            className={styles.hero}
            innerClassName={styles.heroInner}
            copyClassName={styles.heroCopy}
            mediaClassName={styles.heroMedia}
            actionsClassName={styles.heroActions}
            eyebrow={page.heroEyebrow}
            title={page.title}
            description={page.heroDescription}
            variant="evidence"
            media={
              <Image
                src="/factory-extrusion.png"
                alt={ui.heroImageAlt}
                fill
                sizes="100vw"
                loading="eager"
                fetchPriority="high"
              />
            }
            actions={
              <>
                <Button
                  asChild
                  size="productHero"
                  variant="productHeroPrimary"
                >
                  <Link href={contactHref}>{ui.discussApplicationAction}</Link>
                </Button>
                <Button
                  asChild
                  size="productHero"
                  variant="productHeroSecondary"
                >
                  <Link href={technicalDataHref}>{ui.technicalDataAction}</Link>
                </Button>
              </>
            }
          />
        </div>

        <SecondarySectionNav
          actions={[
            { href: contactHref, label: ui.discussApplicationAction },
            { href: technicalDataHref, label: ui.technicalDataAction },
          ]}
          ariaLabel={formatEngineeringGfMessage(ui.navigationAriaTemplate, {
            polymer: page.polymer,
          })}
          subtitle={page.navSubtitle}
          tabs={[
            { href: "#grade-comparison", label: ui.compareTab },
            { href: "#engineering-tradeoffs", label: ui.tradeoffsTab },
            { href: "#applications", label: ui.applicationsTab },
            { href: "#validation", label: ui.validationTab },
          ]}
          title={formatEngineeringGfMessage(ui.navTitleTemplate, {
            polymer: page.polymer,
          })}
          variant="product"
        />

        <section
          id="grade-comparison"
          tabIndex={-1}
          className={`${styles.sectionBand} ${styles.comparisonBand}`}
        >
          <div className={styles.sectionRail}>
            <GlassFiberGradeHeading
              eyebrow={ui.gradeDirectoryEyebrow}
              title={formatEngineeringGfMessage(ui.gradeTitleTemplate, {
                polymer: page.polymer,
              })}
              description={page.comparisonIntro}
              count={formatEngineeringGfMessage(ui.listedGradesTemplate, {
                count: grades.length,
              })}
            />

            <EngineeringGfGradeComparison
              grades={comparisonGrades}
              polymer={page.polymer}
              ui={ui.comparison}
            />

            <p id="gf-comparison-methods" className={styles.methodNote}>
              {ui.comparisonMethods}
            </p>
          </div>
        </section>

        <section
          id="engineering-tradeoffs"
          className={styles.tradeoffSection}
        >
          <div className={styles.tradeoffCanvas}>
            <SectionIntro
              className={styles.tradeoffIntro}
              eyebrow={ui.tradeoffsEyebrow}
              title={ui.tradeoffsTitle}
              description={formatEngineeringGfMessage(
                ui.tradeoffsDescriptionTemplate,
                { polymer: page.polymer },
              )}
              layout="stacked"
            />

            <div className={styles.tradeoffGrid}>
              <section>
                <h3>{page.tradeoffs.improvementTitle}</h3>
                <p>{page.tradeoffs.improvementIntro}</p>
                <ul>
                  {page.tradeoffs.improvements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>{page.tradeoffs.reviewTitle}</h3>
                <p>{page.tradeoffs.reviewIntro}</p>
                <ul>
                  {page.tradeoffs.reviewPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
            <nav className={styles.guideLinks} aria-label={ui.guideLinksAria}>
              <Link href={localizedPath(getEngineeringGfLandingPageData(otherPolymer).path)}>
                {formatEngineeringGfMessage(ui.compareOtherTemplate, {
                  otherPolymer,
                })}
              </Link>
              <Link href={localizedPath("/resources/pa6-vs-pa66-reinforced-parts")}>
                {ui.pa6Pa66Guide}
              </Link>
              <Link href={localizedPath("/resources/glass-fiber-reinforced-pa6-pa66-selection-guide")}>
                {ui.reinforcementGuide}
              </Link>
            </nav>
          </div>
        </section>

        <section id="applications" className={styles.section}>
          <SectionIntro
            className={styles.sectionIntro}
            eyebrow={ui.applicationsEyebrow}
            title={ui.applicationsTitle}
            description={page.applicationsIntro}
            layout="stacked"
          />

          <div className={styles.applicationList}>
            {page.applications.map((application) => (
              <DirectoryRow
                key={application.href}
                href={localizedPath(application.href)}
                eyebrow={application.eyebrow}
                label={application.label}
                description={application.description}
                variant="data"
              />
            ))}
          </div>
        </section>

        <section
          id="validation"
          className={`${styles.sectionBand} ${styles.validationBand}`}
        >
          <div className={styles.sectionRail}>
            <SectionIntro
              className={styles.validationIntro}
              eyebrow={ui.validationEyebrow}
              title={ui.validationTitle}
              description={page.validationIntro}
              layout="stacked"
            />

            <div className={styles.validationGrid}>
              <ol className={styles.validationList}>
                {page.validationSteps.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </li>
                ))}
              </ol>

              <MediaFigure
                className={styles.validationFigure}
                variant="captioned"
                caption={ui.validationCaption}
                media={
                  <Image
                    src="/factory-tensile-test-specimen.jpg"
                    alt={ui.validationImageAlt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 64px), 30vw"
                  />
                }
              />
            </div>
          </div>
        </section>

        <section className={styles.actionRail}>
          <ActionPanel
            footerAdjacent
            variant="recommendation"
            eyebrow={ui.inquiryEyebrow}
            title={formatEngineeringGfMessage(ui.inquiryTitleTemplate, {
              polymer: page.polymer,
            })}
            aside={
              <div className={styles.inquirySteps}>
                {ui.inquirySteps.map((item, index) => (
                  <p key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </p>
                ))}
              </div>
            }
            action={
              <Button asChild variant="inverse">
                <Link href={contactHref}>{ui.discussApplicationAction}</Link>
              </Button>
            }
          >
            {ui.inquiryBody}
          </ActionPanel>
        </section>
      </ProductPageMotion>
    </main>
  );
}
