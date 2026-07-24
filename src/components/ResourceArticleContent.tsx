import { ResourceArticleFeature } from "@/components/ResourceArticleFeature";
import styles from "@/components/ResourceArticle.module.css";
import type {
  ResourceArticleFeature as ResourceArticleFeatureData,
  ResourceArticleSection,
} from "@/data/resources";
import { toResourceSectionId } from "@/lib/resource-page";

type ResourceArticleContentProps = {
  title: string;
  intro: string;
  sections: ResourceArticleSection[];
  features?: ResourceArticleFeatureData[];
};

export function ResourceArticleContent({
  title,
  intro,
  sections,
  features = [],
}: ResourceArticleContentProps) {
  const introFeatures = features.filter(
    (feature) => feature.position === "after-intro",
  );

  const sectionFeatures = (sectionTitle: string) =>
    features.filter(
      (feature) =>
        feature.position === "after-section" &&
        feature.sectionTitle === sectionTitle,
    );

  return (
    <>
      <header className="pb-1">
        <p className="text-sm font-semibold text-sky-700">Technical guide</p>
        <h1 className="mt-4 w-full font-[var(--font-display)] text-[2.1rem] leading-[1.04] font-bold tracking-[-0.035em] text-slate-950 sm:text-[clamp(2.65rem,3.4vw,3.25rem)]">
          {title}
        </h1>
        <p className="mt-6 max-w-none text-[1.03rem] leading-7 text-pretty text-slate-600 sm:text-[1.14rem] sm:leading-8">
          {intro}
        </p>
      </header>

      {introFeatures.map((feature) => (
        <ResourceArticleFeature
          feature={feature}
          key={`${feature.type}-${feature.position}`}
        />
      ))}

      <article className={styles.article}>
        {sections.map((section) => (
          <section
            id={toResourceSectionId(section.title)}
            key={section.title}
            className={styles.section}
          >
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.points ? (
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
            {sectionFeatures(section.title).map((feature) => (
              <ResourceArticleFeature
                feature={feature}
                key={`${feature.type}-${feature.position}-${section.title}`}
              />
            ))}
          </section>
        ))}
      </article>
    </>
  );
}
