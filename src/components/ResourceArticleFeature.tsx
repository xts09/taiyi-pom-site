import Image from "next/image";
import type { ResourceArticleFeature as ResourceArticleFeatureData } from "@/data/resources";

type ResourceArticleFeatureProps = {
  feature: ResourceArticleFeatureData;
};

export function ResourceArticleFeature({
  feature,
}: ResourceArticleFeatureProps) {
  if (feature.type === "media") {
    return (
      <figure className="resource-article-media">
        <Image
          src={feature.src}
          alt={feature.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 76rem"
        />
        <figcaption>
          <strong>{feature.title}</strong>
          <p>{feature.description}</p>
          <ul aria-label="Tribological system inputs">
            {feature.labels.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </figcaption>
      </figure>
    );
  }

  if (feature.type === "comparison") {
    return (
      <section className="resource-article-comparison" aria-label="Selection distinction">
        <div>
          <strong>{feature.items[0]?.title}</strong>
          <p>{feature.items[0]?.description}</p>
        </div>
        <div>
          <strong>{feature.items[1]?.title}</strong>
          <p>{feature.items[1]?.description}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="resource-article-matrix" aria-label={feature.title}>
      <h3>{feature.title}</h3>
      <div className="resource-article-matrix-table" role="table">
        <div className="resource-article-matrix-row resource-article-matrix-head" role="row">
          {feature.columns.map((column) => (
            <span key={column} role="columnheader">
              {column}
            </span>
          ))}
        </div>
        {feature.rows.map((row) => (
          <div className="resource-article-matrix-row" key={row.join("-")} role="row">
            {row.map((value, index) => (
              <span key={value} role="cell" data-label={feature.columns[index]}>
                {value}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
