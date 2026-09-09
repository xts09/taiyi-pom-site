import Link from "next/link";
import { GlassFiberGradeCards } from "@/components/GlassFiberGradeCards";
import {
  formatEngineeringGfMessage,
  type EngineeringGfComparisonUi,
} from "@/i18n/engineeringGfLandingMessages";
import styles from "./EngineeringGfLandingPage.module.css";

export type EngineeringGfComparisonGrade = {
  grade: string;
  slug: string;
  href: string;
  filler: string;
  density: string;
  flammability: string;
  tensile: string;
  flexuralStrength: string;
  flexuralModulus: string;
  impact: string;
  hdt: string;
  waterAbsorption: string;
  tdsHref: string;
};

const formatValue = (
  value: string,
  unit: string,
  notPublishedLabel: string,
) => (value ? `${value} ${unit}` : notPublishedLabel);

export function EngineeringGfGradeComparison({
  grades,
  polymer,
  ui,
}: {
  grades: readonly EngineeringGfComparisonGrade[];
  polymer: string;
  ui: EngineeringGfComparisonUi;
}) {
  return (
    <div>
      <GlassFiberGradeCards actionLabel={ui.actionLabel} grades={grades.map(grade => ({
        grade: grade.grade,
        href: grade.href,
        eyebrow: `${polymer} · ${ui.glassFiberLabel} ${grade.filler}%`,
        metrics: [
          { label: ui.densityLabel, value: grade.density || ui.notPublishedLabel },
          { label: ui.tensileStressLabel, value: formatValue(grade.tensile, "MPa", ui.notPublishedLabel) },
          { label: ui.hdtLabel, value: formatValue(grade.hdt, "°C", ui.notPublishedLabel) },
          { label: ui.flammabilityLabel, value: grade.flammability || ui.notPublishedLabel },
        ],
      }))} />
      <details className={styles.fullComparison}>
        <summary>{ui.disclosureLabel}</summary>
      <p className={styles.tableHint}>{ui.scrollHint}</p>
      <div
        className={styles.tableScroller}
        tabIndex={0}
        role="region"
        aria-label={ui.regionAria}
      >
        <table className={styles.comparisonTable} aria-describedby="gf-comparison-methods">
          <caption className={styles.srOnly}>
            {ui.caption}
          </caption>
          <thead>
            <tr>
              <th scope="col">{ui.gradeTdsLabel}</th>
              <th scope="col">{ui.glassFiberLabel}</th>
              <th scope="col">{ui.tensileStressLabel}</th>
              <th scope="col">{ui.flexuralStrengthLabel}</th>
              <th scope="col">{ui.flexuralModulusLabel}</th>
              <th scope="col">{ui.notchedImpactLabel}</th>
              <th scope="col">{ui.hdtLabel}</th>
              <th scope="col">{ui.waterAbsorptionLabel}</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.slug}>
                <th scope="row">
                  <div className={styles.gradeLinks}>
                    <Link href={grade.href}>{grade.grade}</Link>
                    <Link
                      className={styles.tdsLink}
                      href={grade.tdsHref}
                      aria-label={formatEngineeringGfMessage(
                        ui.requestTdsAriaTemplate,
                        { grade: grade.grade },
                      )}
                    >
                      TDS
                    </Link>
                  </div>
                </th>
                <td>{grade.filler}%</td>
                <td>{formatValue(grade.tensile, "MPa", ui.notPublishedLabel)}</td>
                <td>{formatValue(grade.flexuralStrength, "MPa", ui.notPublishedLabel)}</td>
                <td>{formatValue(grade.flexuralModulus, "MPa", ui.notPublishedLabel)}</td>
                <td>{formatValue(grade.impact, "kJ/m²", ui.notPublishedLabel)}</td>
                <td>{formatValue(grade.hdt, "°C", ui.notPublishedLabel)}</td>
                <td>{formatValue(grade.waterAbsorption, "%", ui.notPublishedLabel)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </details>
    </div>
  );
}
