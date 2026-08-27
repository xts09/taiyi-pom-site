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
import { createContactHref } from "@/lib/contactContext";
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
    label: "Core material line",
    title: "Modified POM",
    description:
      "Modified POM for molded components that require wear resistance, low friction, reinforcement, conductivity or other functional properties.",
    href: "/products/categories/pom",
  },
  {
    index: "02",
    label: "Complementary materials",
    title: "Modified engineering plastics",
    description:
      "Selected PA6, PA66 and PPA compounds for parts that need a different balance of heat resistance, stiffness and toughness.",
    href: "/products#product-families",
  },
] as const;

const peopleRoles = [
  "Technical coordination",
  "Laboratory testing",
  "Production coordination",
  "Quality documentation",
] as const;

const inquirySituations = [
  "Material and grade questions",
  "Samples and technical documents",
  "Production and supply",
  "Supplier qualification",
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
            <h1 id="about-title">Modified POM Compound Manufacturer</h1>
            <p className={styles.heroSummary}>
              Taiyi Polymer is the international materials brand of Jiangsu Taiyi Nano Technology Co., Ltd. Since 2003, our Yancheng site has developed and manufactured modified POM alongside selected PA6, PA66 and PPA compounds. Material testing, repeat production and batch documentation are coordinated within the same manufacturing operation.
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
            <SectionHeading eyebrow="Who we are" id="who-we-are-title" title="Modified engineering plastics, made in Yancheng." />
            <div className={styles.prose}>
              <p>The company began manufacturing in Yancheng, Jiangsu, in 2003. Production, laboratory testing and batch documentation are coordinated by teams at the same site.</p>
            </div>
          </div>
          <figure className={styles.identityMedia}>
            <Image src={publicPath(storyImage.src)} alt={storyImage.alt} fill sizes="(min-width: 1024px) 48vw, 100vw" className={styles.coverImage} />
            <figcaption>{storyImage.label}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.focus} aria-labelledby="focus-title">
        <div className="site-container">
          <SectionHeading eyebrow="Material focus" id="focus-title" title="Modified POM at the core of a focused material range." description="We concentrate on modified POM, supported by selected PA6, PA66 and PPA compounds for higher heat, stiffness and toughness requirements. Our range stays focused on performance that matters in industrial components." />
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
            <SectionHeading eyebrow="Manufacturing" id="manufacturing-title" title="Production capacity for trials and repeat orders." description="Our Yancheng site handles compounding, material testing and batch documentation." />
            <Link href={createContactHref({ intent: "quote-supply", source: "about" })}>Discuss production and supply <span aria-hidden="true">→</span></Link>
          </div>
          <MetricGroup variant="rail" tone="light" className={styles.metricRail} items={figures} renderValue={(figure) => <ValueText value={String(figure.value)} />} />
          <figure className={styles.manufacturingMedia}>
            <Image src={publicPath(manufacturingImage.src)} alt={manufacturingImage.alt} fill sizes="(min-width: 1024px) 92rem, 100vw" className={styles.coverImage} />
            <figcaption><span>{manufacturingImage.label}</span><span>Yancheng production site</span></figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.people} aria-labelledby="people-title">
        <div className={`site-container ${styles.peopleGrid}`}>
          {peopleImage ? <figure className={styles.peopleMedia}><Image src={publicPath(peopleImage.src)} alt={peopleImage.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className={styles.coverImage} /></figure> : null}
          <div className={styles.peopleCopy}>
            <SectionHeading eyebrow="Engineering support" id="people-title" title="Integrated laboratory, production and quality." description="The Yancheng team coordinates material testing, production planning and quality documentation for customer projects." />
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
            <SectionHeading eyebrow="Quality and compliance" id="overview-credentials-title" title="Documents for project review and supplier qualification." description="Company qualifications, management-system certificates and material documents are available to support project and supplier review." />
            <div className={styles.documentTags} aria-label="Available material documents">{availableDocuments.map((document) => <span key={document}>{document}</span>)}</div>
          </div>
          <div className={styles.credentialGrid}>
            {qualifications.map((qualification, index) => <article key={qualification.title}><span>0{index + 1}</span><p>{qualification.category}</p><h3>{qualification.title}</h3></article>)}
            <article className={styles.systemsCard}>
              <span>04</span><p>Management systems</p><h3>Certified management systems</h3>
              <ul>{certifications.map((certificate) => <li key={certificate.standard}><a href={publicPath(certificate.documentHref)} target="_blank" rel="noreferrer">{certificate.standard} <span aria-hidden="true">↗</span></a></li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.global} aria-labelledby="global-title">
        <div className={`site-container ${styles.globalGrid}`}>
          <SectionHeading eyebrow="Global cooperation" id="global-title" title="International support for material projects." description="Our current projects and market partnerships span the regions listed here." />
          <dl className={styles.routeList}>{exportRoutes.map((route, index) => <div key={route.id}><dt><span>0{index + 1}</span>{route.region}</dt><dd>{route.coverage}</dd></div>)}</dl>
        </div>
      </section>

      <section
        className={styles.finalCta}
        aria-labelledby="about-cta-title"
        data-footer-adjacent="true"
      >
        <div className={`site-container ${styles.finalCtaGrid}`}>
          <div><p className={styles.eyebrow}>Talk to Taiyi Polymer</p><h2 id="about-cta-title">What support does your project need?</h2><p>Tell us what you need, and we&apos;ll connect you with the appropriate team.</p></div>
          <ul>{inquirySituations.map((situation) => <li key={situation}>{situation}</li>)}</ul>
          <div className={styles.finalCtaActions}>
            <Button asChild variant="inverse" size="form"><Link href={createContactHref({ source: "about" })}>Discuss Your Application</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
