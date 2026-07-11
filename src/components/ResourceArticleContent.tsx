import { ResourceArticleFeature } from "@/components/ResourceArticleFeature";
import { ResourceHero } from "@/components/ResourceHero";
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
      <ResourceHero
        context="Technical guide"
        title={title}
        description={intro}
        className="resource-article-hero"
      />

      {introFeatures.map((feature) => (
        <ResourceArticleFeature
          feature={feature}
          key={`${feature.type}-${feature.position}`}
        />
      ))}

      <article className="resource-article">
        {sections.map((section) => (
          <section
            id={toResourceSectionId(section.title)}
            key={section.title}
            className="resource-article-section"
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
