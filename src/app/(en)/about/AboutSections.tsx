import Image from "next/image";
import Link from "next/link";
import { MetricGroup } from "@/components/MetricGroup";
import { ValueText } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import type {
  Certification,
  CompanyFigure,
  CompanyQualification,
  FactoryImage,
} from "@/data/company";
import type { ExportRoute } from "@/data/exportRoutes";
import { publicPath } from "@/lib/paths";
import styles from "./AboutPage.module.css";

type AboutPageContentProps = {
  availableDocuments: ReadonlyArray<string>;
  certifications: ReadonlyArray<Certification>;
  exportRoutes: ReadonlyArray<ExportRoute>;
  figures: CompanyFigure[];
  heroImage: FactoryImage;
  laboratoryImage: FactoryImage;
  manufacturingImage: FactoryImage;
  peopleImage?: FactoryImage;
  qualifications: ReadonlyArray<CompanyQualification>;
  storyImage: FactoryImage;
};

const focusAreas = [
  {
    index: "01",
    label: "Core material family",
    title: "Modified POM",
    description:
      "Wear-resistant, low-friction, reinforced, conductive and other functional POM compounds for molded components.",
    href: "/products/categories/pom",
  },
  {
    index: "02",
    label: "Selected supporting families",
    title: "Engineering compounds",
    description:
      "Selected PA6, PA66 and PPA compounds when the part requires a different balance of temperature, stiffness or toughness.",
    href: "/products#product-families",
  },
  {
    index: "03",
    label: "Before a material is specified",
    title: "Material evaluation",
    description:
      "Grade shortlisting starts with part function, operating conditions, processing constraints and the evidence available for review.",
    href: "/resources/material-selection",
  },
  {
    index: "04",
    label: "After a grade is confirmed",
    title: "Production and repeat supply",
    description:
      "Trial compounding, in-house testing, batch documentation and repeat industrial production are coordinated at the Yancheng site.",
    href: "#manufacturing",
  },
] as const;

const workflow = [
  ["01", "Understand the part", "We begin with function, load, environment, processing method and the current material concern."],
  ["02", "Shortlist materials", "Candidate grades are narrowed by material family, modification type and the properties that matter to the application."],
  ["03", "Validate the candidate", "Samples, test conditions and available documents are aligned before a material is approved for the part."],
  ["04", "Support repeat supply", "Once confirmed, production and batch documentation are coordinated for repeat industrial orders."],
] as const;

const peopleRoles = [
  "Technical communication",
  "Laboratory review",
  "Production coordination",
  "Quality documentation",
] as const;

const inquirySituations = [
  "Supplier qualification",
  "Alternative grade evaluation",
  "New component development",
  "Sample or TDS request",
] as const;

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
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

export function AboutPageContent({
  availableDocuments,
  certifications,
  exportRoutes,
  figures,
  heroImage,
  laboratoryImage,
  manufacturingImage,
  peopleImage,
  qualifications,
  storyImage,
}: AboutPageContentProps) {
  return (
    <>
      <section className={styles.hero} aria-labelledby="about-title">
        <Image src={publicPath(heroImage.src)} alt={heroImage.alt} fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`site-container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>About Taiyi Polymer</p>
            <h1 id="about-title">An engineering materials manufacturer built around the part.</h1>
            <p>
              Taiyi Polymer is the international-facing brand of Jiangsu Taiyi Nano Technology Co., Ltd., a manufacturer in Yancheng, Jiangsu, China. Manufacturing since 2003, we focus on modified POM, with selected PA6, PA66 and PPA compounds for projects that require another material family.
            </p>
            <div className={styles.heroActions}>
              <Button asChild variant="inverse" size="form"><Link href="/products">Explore Our Materials</Link></Button>
              <Button asChild variant="secondary" size="form" className={styles.heroSecondaryAction}><Link href="#manufacturing">View Manufacturing</Link></Button>
            </div>
          </div>
          <p className={styles.heroCaption}>{heroImage.label} · Yancheng</p>
        </div>
      </section>

      <section className={styles.identity} aria-labelledby="who-we-are-title">
        <div className={`site-container ${styles.identityGrid}`}>
          <div className={styles.identityCopy}>
            <SectionHeading eyebrow="Who we are" id="who-we-are-title" title="One manufacturer. A clear public brand." />
            <div className={styles.prose}>
              <p>Taiyi Polymer is how international customers meet our material portfolio and engineering support. Jiangsu Taiyi Nano Technology Co., Ltd. is the legal entity operating the manufacturing site.</p>
              <p>Our role is practical: understand what a molded part must do, identify a credible material direction, support evaluation and coordinate repeat supply after the grade is confirmed.</p>
            </div>
          </div>
          <figure className={styles.identityMedia}>
            <Image src={publicPath(storyImage.src)} alt={storyImage.alt} fill sizes="(min-width: 1024px) 48vw, 100vw" className={styles.coverImage} />
            <figcaption>{storyImage.label}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.story} aria-labelledby="story-title">
        <div className={`site-container ${styles.storyGrid}`}>
          <SectionHeading eyebrow="Our story" id="story-title" title="Built for industrial material work, not a broad catalogue." description="The verified timeline is intentionally concise: a manufacturing beginning, and the focused material business operating today." />
          <ol className={styles.timeline}>
            <li><span>2003</span><div><h3>Manufacturing begins</h3><p>Jiangsu Taiyi begins manufacturing operations in Yancheng, Jiangsu.</p></div></li>
            <li><span>Today</span><div><h3>Modified POM remains the core</h3><p>Taiyi Polymer presents the company&apos;s modified POM focus and selected engineering compounds to international projects.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={styles.focus} aria-labelledby="focus-title">
        <div className="site-container">
          <SectionHeading eyebrow="What we focus on" id="focus-title" title="A narrower material focus, connected to the full decision." />
          <div className={styles.focusList}>
            {focusAreas.map((area) => (
              <Link key={area.index} href={area.href} className={styles.focusRow}>
                <span className={styles.focusIndex}>{area.index}</span><span className={styles.focusLabel}>{area.label}</span><strong>{area.title}</strong><span className={styles.focusDescription}>{area.description}</span><span className={styles.rowArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="manufacturing" className={styles.manufacturing} aria-labelledby="manufacturing-title">
        <div className="site-container">
          <div className={styles.manufacturingIntro}>
            <SectionHeading eyebrow="Manufacturing proof" id="manufacturing-title" title="The scale behind trial batches and repeat orders." description="Compounding, material testing and batch documentation are coordinated at the Yancheng facility." />
            <Link href="/contact?source=about&intent=manufacturing-review">Discuss production requirements <span aria-hidden="true">→</span></Link>
          </div>
          <MetricGroup variant="rail" tone="light" className={styles.metricRail} items={figures} renderValue={(figure) => <ValueText value={String(figure.value)} />} />
          <figure className={styles.manufacturingMedia}>
            <Image src={publicPath(manufacturingImage.src)} alt={manufacturingImage.alt} fill sizes="(min-width: 1024px) 92rem, 100vw" className={styles.coverImage} />
            <figcaption><span>{manufacturingImage.label}</span><span>Yancheng manufacturing facility</span></figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.workflow} aria-labelledby="workflow-title">
        <div className={`site-container ${styles.workflowGrid}`}>
          <SectionHeading eyebrow="How we work" id="workflow-title" title="From part requirement to repeat supply." description="The process stays anchored to the application and the evidence needed to approve a material." />
          <ol className={styles.workflowList}>
            {workflow.map(([index, title, description]) => <li key={index}><span>{index}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className={styles.people} aria-labelledby="people-title">
        <div className={`site-container ${styles.peopleGrid}`}>
          {peopleImage ? <figure className={styles.peopleMedia}><Image src={publicPath(peopleImage.src)} alt={peopleImage.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className={styles.coverImage} /></figure> : null}
          <div className={styles.peopleCopy}>
            <SectionHeading eyebrow="People behind the material" id="people-title" title="Engineering communication stays connected to production." description="A material decision moves through technical communication, laboratory review, production coordination and quality documentation—not an isolated sales form." />
            <ul>{peopleRoles.map((role) => <li key={role}>{role}</li>)}</ul>
          </div>
          <figure className={styles.labMedia}>
            <Image src={publicPath(laboratoryImage.src)} alt={laboratoryImage.alt} fill sizes="(min-width: 1024px) 38vw, 100vw" className={styles.coverImage} />
            <figcaption>{laboratoryImage.label}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.credentials} aria-labelledby="overview-credentials-title">
        <div className="site-container">
          <div className={styles.credentialsIntro}>
            <SectionHeading eyebrow="Quality and compliance" id="overview-credentials-title" title="Supplier qualification evidence, kept concise." description="Company recognition, management-system certificates and material documents are available for project and supplier review." />
            <div className={styles.documentTags} aria-label="Available material documents">{availableDocuments.map((document) => <span key={document}>{document}</span>)}</div>
          </div>
          <div className={styles.credentialGrid}>
            {qualifications.map((qualification, index) => <article key={qualification.title}><span>0{index + 1}</span><p>{qualification.category}</p><h3>{qualification.title}</h3></article>)}
            <article className={styles.systemsCard}>
              <span>04</span><p>Management systems</p><h3>Certified operating systems</h3>
              <ul>{certifications.map((certificate) => <li key={certificate.standard}><a href={publicPath(certificate.documentHref)} target="_blank" rel="noreferrer">{certificate.standard} <span aria-hidden="true">↗</span></a></li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.global} aria-labelledby="global-title">
        <div className={`site-container ${styles.globalGrid}`}>
          <SectionHeading eyebrow="Global cooperation" id="global-title" title="Material support for international projects." description="Current export routes connect the Yancheng operation with customers and projects across the regions listed here." />
          <dl className={styles.routeList}>{exportRoutes.map((route, index) => <div key={route.id}><dt><span>0{index + 1}</span>{route.region}</dt><dd>{route.coverage}</dd></div>)}</dl>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="about-cta-title">
        <div className={`site-container ${styles.finalCtaGrid}`}>
          <div><p className={styles.eyebrow}>Start a technical conversation</p><h2 id="about-cta-title">Talk to Taiyi Polymer.</h2><p>Share the part, operating conditions, target properties or current grade. We&apos;ll help identify the next practical step.</p></div>
          <ul>{inquirySituations.map((situation) => <li key={situation}>{situation}</li>)}</ul>
          <div className={styles.finalCtaActions}>
            <Button asChild variant="inverse" size="form"><Link href="/contact?source=about&intent=material-requirement">Discuss a Material Requirement</Link></Button>
            <Button asChild variant="secondary" size="form"><Link href="/contact">Contact Sales</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
