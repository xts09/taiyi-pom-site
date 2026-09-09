import Link from "next/link";
import Image from "next/image";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EngineeringGfAnchorLink } from "@/components/EngineeringGfAnchorLink";
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
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
} from "@/lib/seo";
import styles from "./EngineeringGfLandingPage.module.css";

type EngineeringGfLandingPageProps = {
  polymer: EngineeringGfPolymer;
};

export function EngineeringGfLandingPage({
  polymer,
}: EngineeringGfLandingPageProps) {
  const page = getEngineeringGfLandingPageData(polymer);
  const grades = getEngineeringGfGrades(polymer);
  const comparisonGrades = grades.map((grade): EngineeringGfComparisonGrade => ({
    grade: grade.grade,
    slug: grade.slug,
    filler: grade.filler,
    density: grade.density,
    flammability: grade.flammability,
    tensile: grade.tensile,
    flexuralStrength: grade.flexuralStrength,
    flexuralModulus: grade.flexuralModulus,
    impact: grade.impact,
    hdt: grade.hdt,
    waterAbsorption: grade.waterAbsorption,

    tdsHref: createContactHref({
      material: page.contactMaterial,
      grade: grade.grade,
      intent: "tds",
      source: `${page.polymer} glass-fiber comparison`,
    }),
  }));
  const contactHref = createContactHref({
    material: page.contactMaterial,
    source: `${page.polymer} glass-fiber landing`,
  });
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: page.parentLabel, path: page.parentPath },
      { name: page.title, path: page.path },
    ]),
    createCollectionPageJsonLd({
      title: page.metaTitle,
      description: page.metaDescription,
      path: page.path,
      inLanguage: "en",
      items: grades.map((grade) => ({
        name: `${grade.grade} ${grade.family} GF${grade.filler}`,
        path: `/products/${grade.slug}`,
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
                { href: "/products", label: "Products" },
                { href: page.parentPath, label: page.parentLabel },
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
                alt="Taiyi Polymer twin-screw extrusion production line"
                fill
                sizes="100vw"
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
                  <EngineeringGfAnchorLink href="#grade-comparison">
                    Compare Grades
                  </EngineeringGfAnchorLink>
                </Button>
                <Button
                  asChild
                  size="productHero"
                  variant="productHeroSecondary"
                >
                  <Link href={contactHref}>Discuss Your Application</Link>
                </Button>
              </>
            }
          />
        </div>

        <SecondarySectionNav
          actions={[
            { href: "#grade-comparison", label: "Compare Grades" },
            { href: contactHref, label: "Discuss Your Application" },
          ]}
          ariaLabel={`${page.polymer} glass-fiber page navigation`}
          subtitle={page.navSubtitle}
          tabs={[
            { href: "#grade-comparison", label: "Compare" },
            { href: "#engineering-tradeoffs", label: "Trade-offs" },
            { href: "#applications", label: "Applications" },
            { href: "#validation", label: "Validation" },
          ]}
          title={`${page.polymer} GF Compounds`}
          variant="product"
        />

        <section
          id="grade-comparison"
          tabIndex={-1}
          className={`${styles.sectionBand} ${styles.comparisonBand}`}
        >
          <div className={styles.sectionRail}>
            <GlassFiberGradeHeading
              eyebrow="Grade directory"
              title={`${page.polymer} glass-fiber grades`}
              description={page.comparisonIntro}
              count={`${grades.length} listed grades`}
            />

            <EngineeringGfGradeComparison grades={comparisonGrades} polymer={page.polymer} />

            <p id="gf-comparison-methods" className={styles.methodNote}>
              Comparison basis: GF content ISO 1172; tensile stress ISO 527;
              flexural properties ISO 178; notched Charpy impact at 23 °C ISO
              179/1eA; HDT at 1.8 MPa ISO 75; water absorption at 23 °C and 50%
              RH ISO 62. These are typical web reference values. The catalog
              does not specify the dry or conditioned state of the mechanical
              data; confirm it in the grade-specific TDS before final selection.
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
              eyebrow="Engineering Trade-offs"
              title="Reinforcement changes more than stiffness"
              description={`Use GF content to narrow the ${page.polymer} range, then evaluate the complete molded system. Higher listed reinforcement does not automatically produce the better part.`}
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
            <nav className={styles.guideLinks} aria-label="PA material selection guides">
              <Link href={getEngineeringGfLandingPageData(polymer === "PA6" ? "PA66" : "PA6").path}>
                Compare {polymer === "PA6" ? "PA66" : "PA6"} GF grades →
              </Link>
              <Link href="/resources/pa6-vs-pa66-reinforced-parts">
                PA6 or PA66? Selection guide →
              </Link>
              <Link href="/resources/glass-fiber-reinforced-pa6-pa66-selection-guide">
                Glass-fiber reinforcement guide →
              </Link>
            </nav>
          </div>
        </section>

        <section id="applications" className={styles.section}>
          <SectionIntro
            className={styles.sectionIntro}
            eyebrow="Application Context"
            title="Connect the grade to the part architecture"
            description={page.applicationsIntro}
            layout="stacked"
          />

          <div className={styles.applicationList}>
            {page.applications.map((application) => (
              <DirectoryRow
                key={application.href}
                href={application.href}
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
              eyebrow="Before Final Selection"
              title="Validate moisture, molding and the actual part"
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
                caption="In-house tensile-test specimen setup. Confirm the grade-specific test basis and moisture state before final selection."
                media={
                  <Image
                    src="/factory-tensile-test-specimen.jpg"
                    alt="Taiyi Polymer tensile-test specimen clamped in laboratory testing equipment"
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
            eyebrow="Project Inquiry"
            title={`Move from ${page.polymer} GF screening to a molding decision`}
            aside={
              <div className={styles.inquirySteps}>
                {[
                  "Part & operating conditions",
                  "Grade data & documents",
                  "Molded-part validation",
                ].map((item, index) => (
                  <p key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </p>
                ))}
              </div>
            }
            action={
              <Button asChild variant="inverse">
                <Link href={contactHref}>Discuss Your Application</Link>
              </Button>
            }
          >
            Share the part, current material, load, temperature, moisture state,
            mold stage, target properties and document requirements. Taiyi
            Polymer can help narrow the listed grades for project evaluation.
          </ActionPanel>
        </section>
      </ProductPageMotion>
    </main>
  );
}
