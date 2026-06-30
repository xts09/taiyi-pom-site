import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Boxes, Factory, FileCheck } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";
import { ValueText } from "@/components/UnitText";
import type {
  CompanyCapability,
  CompanyFigure,
  FactoryImage,
  FactoryProofRow,
} from "@/data/company";
import { publicPath } from "@/lib/paths";

type AboutHeroProps = {
  heroImage: FactoryImage;
  intro: string;
  title: string;
};

type AboutSnapshotProps = {
  capabilities: CompanyCapability[];
  figures: CompanyFigure[];
};

type FactoryProofRowsProps = {
  rows: FactoryProofRow[];
};

type CredentialSupportProps = {
  availableDocuments: string[];
  certifications: string[];
  honors: string[];
};

const capabilityIcons = [Boxes, Factory, FileCheck];

export function AboutHero({ heroImage, intro, title }: AboutHeroProps) {
  return (
    <div className="inner-hero about-hero reveal-up mb-8">
      <div className="about-hero-copy">
        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
          {intro}
        </p>
      </div>

      <figure className="about-hero-media">
        <Image
          src={publicPath(heroImage.src)}
          alt={heroImage.alt}
          fill
          priority
          sizes="(min-width: 1024px) 34vw, 100vw"
          className="object-cover"
        />
        <figcaption>{heroImage.label}</figcaption>
      </figure>
    </div>
  );
}

export function AboutSnapshot({ capabilities, figures }: AboutSnapshotProps) {
  return (
    <section className="about-snapshot reveal-up reveal-delay-1 mb-10">
      <dl className="company-figure-ribbon stagger-list">
        {figures.map((item, index) => (
          <div
            key={item.label}
            className="company-figure-item"
            style={{ "--item-index": index } as CSSProperties}
          >
            <dt>{item.label}</dt>
            <dd>
              <ValueText value={item.value} />
            </dd>
            <span>{item.note}</span>
          </div>
        ))}
      </dl>

      <div className="capability-line-list stagger-list">
        {capabilities.map((item, index) => {
          const Icon = capabilityIcons[index] ?? Boxes;

          return (
            <section
              key={item.title}
              className="capability-line about-capability-line"
              style={{ "--item-index": index } as CSSProperties}
            >
              <span className="about-capability-icon" aria-hidden="true">
                <Icon />
              </span>

              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export function FactoryProofRows({ rows }: FactoryProofRowsProps) {
  return (
    <section className="factory-proof-rows mt-10">
      {rows.map((row, index) => (
        <AnimatedContent
          key={row.title}
          className={`factory-proof-row factory-proof-row-${row.imageSide} reveal-up`}
          distance={34}
          duration={0.72}
          ease="power3.out"
          threshold={0.16}
          delay={index * 0.08}
        >
          <figure className="factory-proof-media">
            <Image
              src={publicPath(row.imageSrc)}
              alt={row.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <figcaption>{row.imageLabel}</figcaption>
          </figure>

          <div className="factory-proof-copy">
            <p className="factory-proof-eyebrow">{row.eyebrow}</p>
            <h2>{row.title}</h2>
            <p>{row.description}</p>
            <ul>
              {row.points.map((point) => (
                <li key={point}>
                  <span className="signal-dot" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedContent>
      ))}
    </section>
  );
}

export function CredentialSupport({
  availableDocuments,
  certifications,
  honors,
}: CredentialSupportProps) {
  return (
    <section className="credential-band about-credential-band reveal-up reveal-delay-1 mt-10">
      <h2 className="text-2xl font-black tracking-tight text-slate-950">
        How We Support Material Evaluation
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ChipGroup items={certifications} title="Certifications" />
        <ChipGroup items={availableDocuments} title="Available Documents" />
      </div>

      <div className="mt-8 border-t border-slate-200/80 pt-6">
        <h3 className="mb-3 font-semibold text-slate-950">Honors</h3>
        <ul className="grid gap-3 text-sm text-slate-700 md:grid-cols-3">
          {honors.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Link href="/contact" className="cta-primary px-6 py-3 text-sm">
          Discuss Your Application
        </Link>
      </div>
    </section>
  );
}

function ChipGroup({ items, title }: { items: string[]; title: string }) {
  return (
    <div>
      <h3 className="mb-3 font-semibold text-slate-950">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="document-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
