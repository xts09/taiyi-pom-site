import Link from "next/link";
import { getWearTestEvidenceCopy, wearTestEvidence } from "@/data/wearTestEvidence";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import styles from "./WearTestEvidence.module.css";

type Props = {
  localeSegment?: LocalizedUrlSegment;
  className?: string;
};

function WearTestEntry({ localeSegment, className, id }: Props & { id?: string }) {
  const copy = getWearTestEvidenceCopy(localeSegment);
  if (!copy) return null;

  return (
    <section id={id} className={[styles.entry, className].filter(Boolean).join(" ")}>
      <p className={styles.kicker}>{copy.benchmarkKicker}</p>
      <h2>{copy.entryTitle}</h2>
      <p className={styles.description}>{copy.entryIntro}</p>
      <Link
        className={styles.link}
        href={getLocalizedHref(wearTestEvidence.benchmarkPath, localeSegment)}
      >
        {copy.entryAction} <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

export function WearTestGuideSection({ className, localeSegment }: Props) {
  return (
    <WearTestEntry
      id={wearTestEvidence.sectionId}
      className={className}
      localeSegment={localeSegment}
    />
  );
}

export function WearTestLandingSummary({ localeSegment }: Props) {
  return <WearTestEntry id="wear-benchmark-entry" localeSegment={localeSegment} />;
}
