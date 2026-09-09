import { gearEnduranceTest, getGearEnduranceEvidence } from "./gearEnduranceEvidence.ts";
import { glassFiberCaseStudies, getGlassFiberCasePath } from "./glassFiberCaseStudies.ts";

export const caseStudyPlacementIds = {
  "/products/categories/glass-fiber-reinforced-pom-compound": [
    "gf-case-01",
    "gf-case-03",
    "gf-case-10",
  ],
  "/applications/automotive": ["gf-case-01", "gf-case-02", "gf-case-04"],
  "/applications/motion-components": ["gf-case-02", "gf-case-05", "gf-case-09"],
  "/applications/water-control": ["gf-case-03", "gf-case-06", "gf-case-07"],
  "/applications/conveyor-automation": ["gf-case-10"],
  "/applications/outdoor-equipment": ["gf-case-08"],
  "/components/precision-plastic-gears": ["gf-case-02", "gf-case-05"],
  "/components/valve-spools-and-cartridges": ["gf-case-07"],
  "/components/conveyor-chain-components": ["gf-case-10"],
} as const satisfies Record<string, readonly string[]>;

// Add verified cases here to keep the overview, Resources preview and schema aligned.
export function getPublishedCaseStudies(localeSegment?: string) {
  const evidence = getGearEnduranceEvidence(localeSegment);
  if (!evidence) return [];
  return [{
    id: gearEnduranceTest.id,
    path: gearEnduranceTest.casePath,
    title: evidence.page.heading,
    label: evidence.page.label,
    description: evidence.introduction,
    grade: gearEnduranceTest.grade,
    outcome: evidence.page.scope,
  }, ...glassFiberCaseStudies.map((study) => {
    const copy = study.copy[localeSegment === "zh" ? "zh" : "en"];
    return {
      id: study.id, path: getGlassFiberCasePath(study), title: copy.title,
      label: `${copy.industry} · ${study.glassFiber}% GF POM`, description: copy.summary,
      grade: study.grade, outcome: copy.stage,
    };
  })];
}

type RelatedCaseStudyQuery = {
  grade?: string;
  limit?: number;
  localeSegment?: string;
  sourcePath?: string;
};

export function getRelatedCaseStudies({
  grade,
  limit = 3,
  localeSegment,
  sourcePath,
}: RelatedCaseStudyQuery) {
  const studies = getPublishedCaseStudies(localeSegment);
  const placementIds = sourcePath
    ? caseStudyPlacementIds[sourcePath as keyof typeof caseStudyPlacementIds]
    : undefined;

  const related = grade
    ? studies.filter((study) => study.grade === grade)
    : placementIds
      ? placementIds
          .map((id) => studies.find((study) => study.id === id))
          .filter((study): study is NonNullable<typeof study> => Boolean(study))
      : [];

  return related.slice(0, Math.max(0, limit));
}
