"use client";

import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  findGradeCrossReference,
  gradeCrossReferences,
  type GradeCrossReferenceRecord,
} from "@/data/gradeCrossReferences";
import { createContactHref } from "@/lib/contactContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import styles from "./page.module.css";

const STORAGE_KEY = "taiyi-selection-workspace:v1";
const STORAGE_VERSION = 1;
const MAX_SHORTLIST_SIZE = 4;
const INITIAL_QUERY = "M90-44";
const EXAMPLE_QUERIES = ["M90-44", "GH-25", "S9364", "AF-9"] as const;

export type WorkspaceFactKey =
  | "density"
  | "mfi"
  | "shrinkage"
  | "tensileStrength"
  | "elongation"
  | "flexuralModulus"
  | "charpy"
  | "hdt"
  | "volumeResistivity"
  | "surfaceResistivity";

export type WorkspaceFact = {
  method?: string;
  value: string;
};

export type WorkspaceCandidate = {
  description: string;
  documentState: string;
  documents: readonly string[];
  evidenceState: string;
  facts: Record<WorkspaceFactKey, WorkspaceFact | null>;
  family: string;
  grade: string;
  slug: string;
};

type StatusTone = "neutral" | "success" | "error";

const COMPARISON_ROWS = [
  ["Material family", "family"],
  ["Taiyi catalog position", "position"],
  ["Density", "density"],
  ["Melt flow rate", "mfi"],
  ["MFI test condition", "mfiMethod"],
  ["Molding shrinkage", "shrinkage"],
  ["Tensile strength", "tensileStrength"],
  ["Tensile strain at break", "elongation"],
  ["Flexural modulus", "flexuralModulus"],
  ["Charpy notched impact", "charpy"],
  ["HDT at 1.8 MPa", "hdt"],
  ["Volume resistivity", "volumeResistivity"],
  ["Surface resistivity", "surfaceResistivity"],
  ["Evidence state", "evidence"],
] as const;

type ComparisonKey = (typeof COMPARISON_ROWS)[number][1];

function getComparisonValue(
  candidate: WorkspaceCandidate,
  key: ComparisonKey,
) {
  if (key === "family") return candidate.family;
  if (key === "position") return candidate.description;
  if (key === "mfiMethod") {
    return candidate.facts.mfi?.method ?? "Not listed";
  }
  if (key === "evidence") return candidate.evidenceState;

  return candidate.facts[key]?.value ?? "Not listed";
}

function CandidateResult({
  atLimit,
  candidate,
  onAdd,
  record,
  selected,
}: {
  atLimit: boolean;
  candidate: WorkspaceCandidate;
  onAdd: (grade: string) => void;
  record: GradeCrossReferenceRecord;
  selected: boolean;
}) {
  const catalogFacts = [
    ["Melt flow rate", candidate.facts.mfi?.value ?? "Not listed"],
    ["MFI condition", candidate.facts.mfi?.method ?? "Not listed"],
    ["Molding shrinkage", candidate.facts.shrinkage?.value ?? "Not listed"],
    ["Data format", candidate.documentState],
  ] as const;

  return (
    <section className={styles.candidateBlock}>
      <div className={styles.candidateSummary}>
        <div className={styles.candidateIdentity}>
          <p className={styles.metaLabel}>PLATFORM candidate</p>
          <h3>{candidate.grade}</h3>
          <p className={styles.candidateFamily}>{candidate.family}</p>
        </div>

        <p className={styles.candidatePosition}>{candidate.description}</p>

        <div className={styles.candidateActions}>
          <Button
            type="button"
            variant={selected ? "secondary" : "primary"}
            size="form"
            disabled={selected || atLimit}
            onClick={() => onAdd(candidate.grade)}
          >
            {selected
              ? "Added to shortlist"
              : atLimit
                ? "List is full"
                : "Add to shortlist"}
          </Button>
          <Button asChild variant="link" size="sm">
            <Link href={`/products/${candidate.slug}`}>
              View current grade data
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>

      <div
        className={styles.relationshipLanguage}
        aria-label="Relationship language"
      >
        <span>Candidate alternative</span>
        <span>Similar performance category</span>
        <span>For technical evaluation</span>
      </div>

      <p className={styles.screeningDirection}>
        <strong>Screening direction:</strong> {record.publicPosition}
      </p>

      <div className={styles.evidenceGrid}>
        <div>
          <h3>Why it enters the shortlist</h3>
          <ul>
            {record.matchBasis.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Check before qualification</h3>
          <ul>
            {record.requiredChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <dl className={styles.catalogFacts}>
        {catalogFacts.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <p className={styles.documentLine}>
        Catalog-listed support types: {candidate.documents.join(", ")}.
        Confirm current grade- and color-specific availability before
        evaluation. No third-party values are included here.
      </p>
    </section>
  );
}

export function GradeCrossReferenceWorkspace({
  candidates,
}: {
  candidates: readonly WorkspaceCandidate[];
}) {
  const candidateMap = useMemo(
    () => new Map(candidates.map((candidate) => [candidate.grade, candidate])),
    [candidates],
  );
  const [query, setQuery] = useState(INITIAL_QUERY);
  const [submittedQuery, setSubmittedQuery] = useState(INITIAL_QUERY);
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [status, setStatus] = useState({
    message: "Showing the curated M90-44 screening seed.",
    tone: "neutral" as StatusTone,
  });
  const [application, setApplication] = useState("");
  const [requirement, setRequirement] = useState("");
  const [handoffPrepared, setHandoffPrepared] = useState(false);

  const match = findGradeCrossReference(submittedQuery);
  const matchedCandidates = match
    ? match.record.candidateGrades.flatMap((grade) => {
        const candidate = candidateMap.get(grade);
        return candidate ? [candidate] : [];
      })
    : [];
  const shortlistedCandidates = shortlist.flatMap((grade) => {
    const candidate = candidateMap.get(grade);
    return candidate ? [candidate] : [];
  });
  const referenceLabel =
    match?.record.reference.displayName || submittedQuery.trim() || "Not specified";
  const manualReviewHref = createContactHref({
    grade: submittedQuery.trim(),
    intent: "grade-evaluation",
    material: "POM",
    source: "POM grade cross-reference workspace",
  });
  const handoffHref = createContactHref({
    application,
    candidates: shortlist.join(", "),
    intent: "grade-evaluation",
    material: "POM",
    reference: referenceLabel,
    requirement,
    source: "POM grade cross-reference workspace",
  });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const rawValue = window.localStorage.getItem(STORAGE_KEY);
        if (!rawValue) return;

        const parsed = JSON.parse(rawValue) as {
          grades?: unknown;
          version?: unknown;
        };
        if (
          parsed.version === STORAGE_VERSION &&
          Array.isArray(parsed.grades)
        ) {
          const savedGrades = parsed.grades
            .filter(
              (grade): grade is string =>
                typeof grade === "string" && candidateMap.has(grade),
            )
            .slice(0, MAX_SHORTLIST_SIZE);
          setShortlist(Array.from(new Set(savedGrades)));
        }
      } catch {
        setStatus({
          message: "The saved shortlist could not be read in this browser.",
          tone: "error",
        });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [candidateMap]);

  const persistShortlist = (grades: readonly string[]) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: STORAGE_VERSION, grades }),
      );
      return true;
    } catch {
      setStatus({
        message: "This browser could not save the shortlist locally.",
        tone: "error",
      });
      return false;
    }
  };

  const runSearch = (nextQuery: string) => {
    const normalizedQuery = nextQuery.trim();
    const nextMatch = findGradeCrossReference(normalizedQuery);

    setQuery(nextQuery);
    setSubmittedQuery(normalizedQuery);
    setHandoffPrepared(false);
    setStatus(
      nextMatch
        ? {
            message: `Recognized ${nextMatch.record.reference.displayName}. ${nextMatch.record.candidateGrades.length} curated PLATFORM candidate${nextMatch.record.candidateGrades.length === 1 ? "" : "s"} available.`,
            tone: "success",
          }
        : {
            message: normalizedQuery
              ? `No curated relationship was found for ${normalizedQuery}.`
              : "Enter a supplier grade or reference code.",
            tone: normalizedQuery ? "error" : "neutral",
          },
    );
  };

  const addCandidate = (grade: string) => {
    if (shortlist.includes(grade)) return;
    if (shortlist.length >= MAX_SHORTLIST_SIZE) {
      setStatus({
        message: "The project shortlist is limited to four grades.",
        tone: "error",
      });
      return;
    }

    const nextShortlist = [...shortlist, grade];
    setShortlist(nextShortlist);
    setHandoffPrepared(false);
    if (!persistShortlist(nextShortlist)) return;
    setStatus({
      message: `${grade} was added to the project shortlist.`,
      tone: "success",
    });
  };

  const removeCandidate = (grade: string) => {
    const nextShortlist = shortlist.filter((item) => item !== grade);
    setShortlist(nextShortlist);
    setHandoffPrepared(false);
    if (!persistShortlist(nextShortlist)) return;
    setStatus({
      message: `${grade} was removed from the project shortlist.`,
      tone: "neutral",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  };

  const clearShortlist = () => {
    setShortlist([]);
    setHandoffPrepared(false);
    if (!persistShortlist([])) return;
    setStatus({
      message: "The project shortlist was cleared.",
      tone: "neutral",
    });
  };

  const prepareHandoff = () => {
    if (shortlist.length === 0) {
      setStatus({
        message: "Add at least one candidate before preparing an inquiry.",
        tone: "error",
      });
      return;
    }

    setHandoffPrepared(true);
    setStatus({
      message: "The technical review context is ready for Contact.",
      tone: "success",
    });
  };

  return (
    <div className={styles.interactiveStack}>
      <Card asChild variant="evidence">
        <section
          className={styles.searchPanel}
          aria-labelledby="reference-search-title"
        >
          <div className={styles.searchMain}>
            <h2 id="reference-search-title">
              Search a current reference grade.
            </h2>
            <form
              className={styles.searchForm}
              onSubmit={(event) => {
                event.preventDefault();
                runSearch(query);
              }}
            >
              <label htmlFor="reference-grade-query">Reference grade</label>
              <div className={styles.searchControl}>
                <Input
                  id="reference-grade-query"
                  name="grade"
                  type="search"
                  value={query}
                  placeholder="Try M90-44, GH-25 or S9364"
                  autoComplete="off"
                  spellCheck={false}
                  aria-describedby="reference-search-help"
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Button type="submit" variant="inverse" size="form">
                  <Search aria-hidden="true" />
                  Find candidates
                </Button>
              </div>
            </form>
            <p id="reference-search-help" className={styles.searchHelp}>
              Supplier names, brand names and common grade aliases are
              recognized when a curated relationship exists.
            </p>
            <div className={styles.searchExamples} aria-label="Example searches">
              {EXAMPLE_QUERIES.map((example) => (
                <Button
                  key={example}
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    runSearch(example);
                    scrollToSection("selection-workspace");
                  }}
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>

          <div className={styles.searchScope}>
            <strong>{gradeCrossReferences.length} curated references</strong>
            <p>
              {candidates.length} Taiyi catalog candidates, each shown only as
              a technical screening direction.
            </p>
          </div>
        </section>
      </Card>

      <p
        className={styles.statusLine}
        data-tone={status.tone}
        role="status"
        aria-live="polite"
      >
        {status.message}
      </p>

      <div className={styles.workspaceGrid} id="selection-workspace">
        <Card variant="standard" className={styles.resultPanel}>
          <CardContent className={styles.resultContent}>
            {match ? (
              <>
                <div className={styles.resultHeader}>
                  <div>
                    <p className={styles.metaLabel}>Recognized reference</p>
                    <h2>{match.record.reference.displayName}</h2>
                    <ul className={styles.resultMeta} aria-label="Match status">
                      <li>{match.record.materialFamily} material family</li>
                      <li>Curated screening seed</li>
                      <li>Reviewed {match.record.source.reviewedAt}</li>
                    </ul>
                  </div>
                  <p className={styles.reviewStatus}>
                    Reference-grade values remain outside this result until a
                    current source TDS is reviewed under matching conditions.
                  </p>
                </div>

                {matchedCandidates.length > 0 ? (
                  matchedCandidates.map((candidate) => (
                    <CandidateResult
                      key={candidate.grade}
                      candidate={candidate}
                      record={match.record}
                      selected={shortlist.includes(candidate.grade)}
                      atLimit={
                        shortlist.length >= MAX_SHORTLIST_SIZE &&
                        !shortlist.includes(candidate.grade)
                      }
                      onAdd={addCandidate}
                    />
                  ))
                ) : (
                  <p className={styles.emptyText}>
                    The mapped Taiyi grade is not available in the current
                    catalog. Send the reference for manual review.
                  </p>
                )}
              </>
            ) : (
              <div className={styles.emptyResult}>
                <p className={styles.metaLabel}>No curated relationship found</p>
                <h2>
                  We do not have a checked result for “
                  {submittedQuery || "this query"}”.
                </h2>
                <p>
                  Keep the supplier name and full grade code in the request.
                  Taiyi can check the source TDS, material family, modification,
                  test conditions and application before suggesting candidates.
                </p>
                <Button asChild variant="secondary" size="form">
                  <Link href={manualReviewHref}>Request a manual grade review</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card asChild variant="soft">
          <aside className={styles.shortlistPanel} aria-labelledby="shortlist-title">
            <div className={styles.shortlistHeader}>
              <h2 id="shortlist-title">Project shortlist</h2>
              <span>{shortlist.length} / {MAX_SHORTLIST_SIZE}</span>
            </div>

            <div className={styles.shortlistItems}>
              {shortlistedCandidates.length > 0 ? (
                shortlistedCandidates.map((candidate) => (
                  <div className={styles.shortlistRow} key={candidate.grade}>
                    <div>
                      <strong>{candidate.grade}</strong>
                      <span>{candidate.family}</span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Remove ${candidate.grade}`}
                      onClick={() => removeCandidate(candidate.grade)}
                    >
                      <X aria-hidden="true" />
                    </Button>
                  </div>
                ))
              ) : (
                <p className={styles.emptyText}>
                  Add candidates from curated search results. This list stays
                  only in this browser.
                </p>
              )}
            </div>

            <div className={styles.shortlistActions}>
              <Button
                type="button"
                variant="primary"
                size="form"
                disabled={shortlist.length < 2}
                onClick={() => scrollToSection("grade-comparison")}
              >
                Compare selected grades
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="form"
                disabled={shortlist.length < 1}
                onClick={() => scrollToSection("technical-review-handoff")}
              >
                Prepare technical review
              </Button>
              {shortlist.length > 0 ? (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={clearShortlist}
                >
                  Clear shortlist
                </Button>
              ) : null}
            </div>

            <p className={styles.storageNote}>
              Saved locally in this browser. No account is required.
            </p>
          </aside>
        </Card>
      </div>

      {shortlistedCandidates.length >= 2 ? (
        <Card asChild variant="standard">
          <section
            className={styles.comparisonPanel}
            id="grade-comparison"
            aria-labelledby="grade-comparison-title"
          >
            <div className={styles.sectionHeader}>
              <h2 id="grade-comparison-title">
                Compare what the current catalog can support.
              </h2>
              <p>
                Reference-grade values are intentionally excluded until both
                source documents and matching test conditions are reviewed.
              </p>
            </div>
            <p className={styles.comparisonHint}>
              Swipe horizontally to compare every selected grade.
            </p>
            <div
              className={styles.comparisonScroll}
              tabIndex={0}
              aria-label="Scrollable Taiyi grade comparison"
            >
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th scope="col">Property</th>
                    {shortlistedCandidates.map((candidate) => (
                      <th scope="col" key={candidate.grade}>
                        {candidate.grade}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map(([label, key]) => (
                    <tr key={key}>
                      <th scope="row">{label}</th>
                      {shortlistedCandidates.map((candidate) => (
                        <td key={candidate.grade}>
                          {getComparisonValue(candidate, key)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Card>
      ) : null}

      <Card asChild variant="evidence">
        <section
          className={styles.handoffPanel}
          id="technical-review-handoff"
          aria-labelledby="technical-review-title"
        >
          <div className={styles.sectionHeaderDark}>
            <h2 id="technical-review-title">
              Carry the shortlist into technical review.
            </h2>
            <p>
              Keep the reference, selected candidates, part context and
              validation priority together when you contact Taiyi.
            </p>
          </div>

          <div className={styles.handoffBody}>
            <div className={styles.handoffFields}>
              <div className={styles.fieldGroup}>
                <label htmlFor="workspace-application">Part or application</label>
                <Input
                  id="workspace-application"
                  value={application}
                  maxLength={120}
                  placeholder="Example: precision gear"
                  onChange={(event) => {
                    setApplication(event.target.value);
                    setHandoffPrepared(false);
                  }}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="workspace-requirement">
                  Priority requirement
                </label>
                <Textarea
                  id="workspace-requirement"
                  value={requirement}
                  maxLength={160}
                  placeholder="Example: stable dimensions, low friction, existing tool"
                  onChange={(event) => {
                    setRequirement(event.target.value);
                    setHandoffPrepared(false);
                  }}
                />
              </div>
              <Button
                type="button"
                variant="inverse"
                size="form"
                disabled={shortlist.length === 0}
                onClick={prepareHandoff}
              >
                Prepare inquiry context
              </Button>
            </div>

            <div className={styles.handoffPreview} aria-live="polite">
              <h3>
                {shortlist.length > 0
                  ? "Current review context"
                  : "What will be carried forward"}
              </h3>
              {shortlist.length > 0 ? (
                <dl>
                  <dt>Reference</dt>
                  <dd>{referenceLabel}</dd>
                  <dt>Candidates</dt>
                  <dd>{shortlist.join(", ")}</dd>
                  <dt>Application</dt>
                  <dd>{application.trim() || "To be confirmed"}</dd>
                  <dt>Priority</dt>
                  <dd>{requirement.trim() || "To be confirmed"}</dd>
                </dl>
              ) : (
                <p>
                  Add at least one candidate to prepare a structured technical
                  review request.
                </p>
              )}

              {handoffPrepared ? (
                <Button asChild variant="inverse" size="form">
                  <Link href={handoffHref}>
                    Open Contact with this context
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              ) : shortlist.length > 0 ? (
                <p className={styles.previewNote}>
                  Add any known application details, then prepare the context.
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </Card>

      <p className={styles.boundaryNote}>
        Candidate relationships remain preliminary until current source TDS
        revisions, matching test conditions, molded-part trials and customer
        approval are complete.
      </p>
    </div>
  );
}
