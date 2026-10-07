"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { GlassFiberGradeCards } from "@/components/GlassFiberGradeCards";
import { Select } from "@/components/ui/select";
import type { EngineeringGfComparisonUi } from "@/i18n/engineeringGfLandingMessages";
import styles from "./EngineeringGfLandingPage.module.css";

export type EngineeringGfComparisonGrade = {
  grade: string;
  slug: string;
  href: string;
  englishFallback: boolean;
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
  const filterId = useId();
  const [glassFiberContent, setGlassFiberContent] = useState("");
  const glassFiberContents = [...new Set(grades.map((grade) => grade.filler))]
    .filter(Boolean)
    .sort((a, b) => Number(a) - Number(b));
  const visibleGrades = grades.filter(
    (grade) => !glassFiberContent || grade.filler === glassFiberContent,
  );

  return (
    <div>
      <div className={styles.gradeFilter}>
        <label htmlFor={filterId}>{ui.glassFiberLabel}</label>
        <Select
          id={filterId}
          className={styles.gradeFilterSelect}
          value={glassFiberContent}
          onChange={(event) => setGlassFiberContent(event.target.value)}
        >
          <option value="">{ui.allGlassFiberLabel}</option>
          {glassFiberContents.map((content) => (
            <option key={content} value={content}>{content}%</option>
          ))}
        </Select>
      </div>
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
            {visibleGrades.map((grade) => (
              <tr key={grade.slug}>
                <th scope="row">
                  <div className={styles.gradeLinks}>
                    <Link href={grade.href} hrefLang={grade.englishFallback ? "en" : undefined}>
                      {grade.grade}
                      {grade.englishFallback ? (
                        <EnglishDestinationBadge label={ui.englishDestinationLabel} />
                      ) : null}
                    </Link>
                    <Link
                      className={styles.tdsLink}
                      href={grade.tdsHref}
                      aria-label={ui.requestTdsAriaTemplate.replace("{grade}", grade.grade)}
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
      <GlassFiberGradeCards compact actionLabel={ui.actionLabel} grades={visibleGrades.map(grade => ({
        grade: grade.grade,
        href: grade.href,
        hrefLang: grade.englishFallback ? "en" : undefined,
        eyebrow: `${polymer} · ${ui.glassFiberLabel} ${grade.filler}%${grade.englishFallback ? ` · ${ui.englishDestinationLabel}` : ""}`,
        metrics: [
          { label: ui.densityLabel, value: grade.density || ui.notPublishedLabel },
          { label: ui.tensileStressLabel, value: formatValue(grade.tensile, "MPa", ui.notPublishedLabel) },
          { label: ui.hdtLabel, value: formatValue(grade.hdt, "°C", ui.notPublishedLabel) },
          { label: ui.flammabilityLabel, value: grade.flammability || ui.notPublishedLabel },
        ],
      }))} />
    </div>
  );
}
