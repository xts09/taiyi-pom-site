import Link from "next/link";
import { DirectoryRow } from "@/components/DirectoryRow";
import { Button } from "@/components/ui/button";
import { caseStudyCollectionId, getCaseStudyNavigation } from "@/data/caseStudyNavigation";
import { getPublishedCaseStudies } from "@/data/caseStudies";
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
  const cases = getPublishedCaseStudies(localeSegment);
  if (!navigation || !cases.length) return null;
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
        <Link href={getLocalizedHref(navigation.href, localeSegment)}>
          {localeSegment === "zh" ? "查看全部案例" : "View all cases"}
        </Link>
      </header>
      <ul className="resource-index-directory-list">
        {cases.slice(0, 3).map((study) => <li key={study.id}>
          <DirectoryRow
            href={getLocalizedHref(`${study.path}#top`, localeSegment)}
            eyebrow={study.label}
            label={study.title}
            description={study.description}
            variant="compact"
          />
        </li>)}
      </ul>
    </section>
  );
}
