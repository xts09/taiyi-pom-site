import Image from "next/image";
import styles from "@/components/ResourceArticle.module.css";
import type { ResourceArticleFeature as ResourceArticleFeatureData } from "@/data/resources";

type ResourceArticleFeatureProps = {
  feature: ResourceArticleFeatureData;
};

export function ResourceArticleFeature({
  feature,
}: ResourceArticleFeatureProps) {
  if (feature.type === "media") {
    return (
      <figure className={styles.media}>
        <div className={styles.mediaImage}>
          <Image
            src={feature.src}
            alt={feature.alt}
            fill
            priority
            sizes="(max-width: 1024px) calc(100vw - 2.5rem), 70rem"
          />
        </div>
        <figcaption>
          <strong>{feature.title}</strong>
          <div className={styles.mediaCaptionBody}>
            <p>{feature.description}</p>
            <ul aria-label="Tribological system inputs">
              {feature.labels.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
        </figcaption>
      </figure>
    );
  }

  if (feature.type === "comparison") {
    return (
      <section className={styles.comparison} aria-label="Selection distinction">
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
    <section className={styles.matrix} aria-label={feature.title}>
      <h3>{feature.title}</h3>
      <div className={styles.matrixTable} role="table">
        <div className={`${styles.matrixRow} ${styles.matrixHead}`} role="row">
          {feature.columns.map((column) => (
            <span key={column} role="columnheader">
              {column}
            </span>
          ))}
        </div>
        {feature.rows.map((row) => (
          <div className={styles.matrixRow} key={row.join("-")} role="row">
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
