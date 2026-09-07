import Link from "next/link";
import { getCatalogProductsByCategory } from "@/data/catalog";
import { createContactHref } from "@/lib/contactContext";
import { ValueWithUnit } from "@/components/UnitText";
import styles from "./CarbonFiberPomComparison.module.css";

const comparisonProperties = [
  { label: "Melt flow rate", sourceLabel: "Melt Flow Rate (MFI)" },
  { label: "Flexural modulus", sourceLabel: "Flexural Modulus" },
] as const;

export function CarbonFiberPomComparison() {
  const grades = getCatalogProductsByCategory(
    "Carbon Fiber Reinforced POM Compound",
  );

  return (
    <section
      id="grade-data-basis"
      className={styles.section}
      aria-labelledby="grade-data-basis-title"
    >
      <div className={styles.intro}>
        <p className="section-kicker">Grade comparison</p>
        <h2 id="grade-data-basis-title">Compare flow and stiffness</h2>
        <p>
          Compare the listed flow and stiffness values with their test methods.
          Open a grade for more properties, or request its current TDS to confirm
          specimen preparation, conditioning and suitability for your part.
        </p>
      </div>
      <p className={styles.scrollHint}>Scroll across to view all comparison data.</p>
      <div
        className={styles.tableScroll}
        role="region"
        aria-label="Carbon fiber POM grade comparison"
        tabIndex={0}
      >
        <table className={styles.table}>
          <caption className="sr-only">
            Carbon fiber POM reference values, test methods and technical documents
          </caption>
          <thead>
            <tr>
              <th scope="col">Grade</th>
              {comparisonProperties.map((property) => (
                <th key={property.sourceLabel} scope="col">{property.label}</th>
              ))}
              <th scope="col">Technical documents</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.slug}>
                <th scope="row">
                  <Link href={`/products/${grade.slug}#typical-properties`}>
                    {grade.grade}
                  </Link>
                </th>
                {comparisonProperties.map(({ sourceLabel }) => {
                  const property = grade.properties.find(
                    (item) => item.label === sourceLabel,
                  );
                  return (
                    <td key={sourceLabel}>
                      {property ? (
                        <>
                          <strong><ValueWithUnit value={property.value} unit={property.unit} /></strong>
                          <span className={styles.detail}>{property.method}</span>
                        </>
                      ) : "Request grade data"}
                    </td>
                  );
                })}
                <td>
                  {grade.tds.status === "pdf" && grade.tds.pdfPath ? (
                    <>
                      <a href={grade.tds.pdfPath}>Open {grade.grade} TDS</a>
                      {grade.tds.revision ? <span className={styles.detail}>Revision {grade.tds.revision}</span> : null}
                      {grade.tds.updatedAt ? <span className={styles.detail}>Updated {grade.tds.updatedAt}</span> : null}
                    </>
                  ) : (
                    <>
                      <span className={styles.detail}>Web reference data</span>
                      <Link href={createContactHref({
                        grade: grade.grade,
                        material: grade.category,
                        intent: "tds",
                        source: "Carbon fiber POM comparison",
                      })} aria-label={`Request ${grade.grade} TDS`}>
                        Request TDS
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.note}>
        These are listed reference values for initial screening. Confirm the
        current technical documents and evaluate the molded part under its
        intended operating conditions before final selection.
      </p>
    </section>
  );
}
