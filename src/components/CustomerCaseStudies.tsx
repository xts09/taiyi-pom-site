import Link from "next/link";
import { DirectoryRow } from "@/components/DirectoryRow";
import { Button } from "@/components/ui/button";
import { caseStudyCollectionId, getCaseStudyNavigation } from "@/data/caseStudyNavigation";
import { gearEnduranceTest, getGearEnduranceEvidence } from "@/data/gearEnduranceEvidence";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";

type Props = { localeSegment?: LocalizedUrlSegment };

export function CustomerCaseStudiesAction({ localeSegment }: Props) {
  const navigation = getCaseStudyNavigation(localeSegment);
  if (!navigation) return null;
  return (
    <Button asChild size="resourceIndexAction" variant="resourceIndexSecondary">
      <Link href={getLocalizedHref(navigation.href, localeSegment)}>{navigation.label}</Link>
    </Button>
  );
}

export function CustomerCaseStudies({ localeSegment }: Props) {
  const navigation = getCaseStudyNavigation(localeSegment);
  const evidence = getGearEnduranceEvidence(localeSegment);
  if (!navigation || !evidence) return null;
  return (
    <section
      id={caseStudyCollectionId}
      className="resource-index-directory-group"
      aria-labelledby={`${caseStudyCollectionId}-title`}
      style={{ scrollMarginTop: "calc(var(--site-header-height) + var(--ds-space-6))" }}
    >
      <header className="resource-index-directory-group-head">
        <div>
          <h3 id={`${caseStudyCollectionId}-title`}>{navigation.label}</h3>
          <p>{navigation.description}</p>
        </div>
      </header>
      <ul className="resource-index-directory-list">
        <li>
          <DirectoryRow
            href={getLocalizedHref(`${gearEnduranceTest.casePath}#top`, localeSegment)}
            eyebrow={evidence.page.label}
            label={evidence.page.heading}
            description={evidence.introduction}
            variant="compact"
          />
        </li>
      </ul>
    </section>
  );
}
