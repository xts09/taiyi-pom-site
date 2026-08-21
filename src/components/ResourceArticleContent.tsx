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
  articleKicker?: string;
  featureAriaLabels?: {
    mediaLabels: string;
    comparison: string;
  };
};

export function ResourceArticleContent({
  title,
  intro,
  sections,
  features = [],
  articleKicker = "Technical guide",
  featureAriaLabels,
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
      <header className="stagger-list pb-1">
        <p className="resource-article-kicker">{articleKicker}</p>
        <h1 className="resource-article-title mt-4 w-full">
          {title}
        </h1>
        <p className="resource-article-intro mt-6 text-pretty">
          {intro}
        </p>
      </header>

      {introFeatures.map((feature) => (
        <ResourceArticleFeature
          feature={feature}
          ariaLabels={featureAriaLabels}
          key={`${feature.type}-${feature.position}`}
        />
      ))}

      <article className={`${styles.article} stagger-list`}>
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
                ariaLabels={featureAriaLabels}
                key={`${feature.type}-${feature.position}-${section.title}`}
              />
            ))}
          </section>
        ))}
      </article>
    </>
  );
}
