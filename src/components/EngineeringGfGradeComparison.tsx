import Link from "next/link";
import styles from "./EngineeringGfLandingPage.module.css";

export type EngineeringGfComparisonGrade = {
  grade: string;
  slug: string;
  filler: string;
  tensile: string;
  flexuralStrength: string;
  flexuralModulus: string;
  impact: string;
  hdt: string;
  waterAbsorption: string;
  tdsHref: string;
};

const formatValue = (value: string, unit: string) =>
  value ? `${value} ${unit}` : "Not published";

export function EngineeringGfGradeComparison({
  grades,
}: {
  grades: readonly EngineeringGfComparisonGrade[];
}) {
  return (
    <div>
      <p className={styles.tableHint}>Scroll sideways to compare all properties →</p>
      <div
        className={styles.tableScroller}
        tabIndex={0}
        role="region"
        aria-label="Glass-fiber grade comparison"
      >
        <table className={styles.comparisonTable} aria-describedby="gf-comparison-methods">
          <caption className={styles.srOnly}>
            Grades ordered by glass-fiber content
          </caption>
          <thead>
            <tr>
              <th scope="col">Grade / TDS</th>
              <th scope="col">Glass fiber</th>
              <th scope="col">Tensile stress</th>
              <th scope="col">Flexural strength</th>
              <th scope="col">Flexural modulus</th>
              <th scope="col">Notched impact</th>
              <th scope="col">HDT 1.8 MPa</th>
              <th scope="col">Water absorption</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.slug}>
                <th scope="row">
                  <div className={styles.gradeLinks}>
                    <Link href={`/products/${grade.slug}`}>{grade.grade}</Link>
                    <Link
                      className={styles.tdsLink}
                      href={grade.tdsHref}
                      aria-label={`Request Full TDS for ${grade.grade}`}
                    >
                      TDS
                    </Link>
                  </div>
                </th>
                <td>{grade.filler}%</td>
                <td>{formatValue(grade.tensile, "MPa")}</td>
                <td>{formatValue(grade.flexuralStrength, "MPa")}</td>
                <td>{formatValue(grade.flexuralModulus, "MPa")}</td>
                <td>{formatValue(grade.impact, "kJ/m²")}</td>
                <td>{formatValue(grade.hdt, "°C")}</td>
                <td>{formatValue(grade.waterAbsorption, "%")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
