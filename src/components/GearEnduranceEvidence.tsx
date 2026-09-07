import Link from "next/link";
import { gearEnduranceTest, getGearEnduranceEvidence } from "@/data/gearEnduranceEvidence";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import styles from "./GearEnduranceEvidence.module.css";

export function GearEnduranceInterpretation({ className, localeSegment }: { className?: string; localeSegment?: LocalizedUrlSegment }) {
  const copy = getGearEnduranceEvidence(localeSegment)?.interpretation;
  if (!copy) return null;
  return (
    <section id={gearEnduranceTest.interpretationId} className={className} aria-labelledby={`${gearEnduranceTest.interpretationId}-title`}>
      <h2 id={`${gearEnduranceTest.interpretationId}-title`}>{copy.title}</h2>
      {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <p><Link className={styles.articleLink} href={getLocalizedHref(gearEnduranceTest.casePath, localeSegment)}>{copy.caseAction}</Link></p>
    </section>
  );
}
