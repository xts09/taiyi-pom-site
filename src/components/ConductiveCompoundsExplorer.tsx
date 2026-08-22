"use client";

import Link from "next/link";
import { createContactHref } from "@/lib/contactContext";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import {
  conductiveCompounds,
  conductiveMatrices,
  conductiveSeries,
  type ConductiveCompound,
  type ConductiveRange,
  type ConductiveTechnology,
} from "@/data/conductiveCompounds";
import styles from "./ConductiveCompounds.module.css";

type TechnologyFilter = "all" | ConductiveTechnology;
type RangeFilter = "all" | ConductiveRange;

type ConductiveCompoundsExplorerProps = {
  defaultTechnology?: TechnologyFilter;
  groupByMatrix?: boolean;
  localeSegment?: LocalizedUrlSegment;
  messages?: ConductiveCompoundsExplorerMessages;
};

export type ConductiveCompoundsExplorerMessages = {
  technologyLabels: Record<TechnologyFilter, string>;
  allDescription: string;
  seriesDescriptions: Record<ConductiveTechnology, string>;
  grade: string;
  material: string;
  technology: string;
  targetRange: string;
  nextStep: string;
  requestData: string;
  kicker: string;
  title: string;
  technologyAria: string;
  materialMatrix: string;
  allMaterials: string;
  allRanges: string;
  searchLabel: string;
  searchPlaceholder: string;
  matchingGrades: string;
  rangeNote: string;
  matrixGroupLabel: string;
  matrixGroupTitle: string;
  listedGrades: string;
  empty: string;
};

const matrixGroupPriority = [
  "POM",
  "PA6",
  "PA66",
  "PPA",
  "PPS",
  "ABS",
  "PC",
  "PC/ABS",
  "PBT",
  "TPU",
] as const;

const technologyOptions: TechnologyFilter[] = ["cnt", "cf", "all"];

export const defaultConductiveCompoundsExplorerMessages: ConductiveCompoundsExplorerMessages = {
  technologyLabels: {
    cnt: "CNT Antistatic",
    cf: "Carbon Fiber Conductive",
    all: "All Series",
  },
  allDescription:
    "Compare both modification systems, then narrow the list by polymer matrix and target range.",
  seriesDescriptions: {
    cnt: conductiveSeries.cnt.description,
    cf: conductiveSeries.cf.description,
  },
  grade: "Grade",
  material: "Material",
  technology: "Technology",
  targetRange: "Target range",
  nextStep: "Next step",
  requestData: "Request data",
  kicker: "Cross-Material Grade Directory",
  title: "Find a charge-control direction",
  technologyAria: "Compound technology",
  materialMatrix: "Material matrix",
  allMaterials: "All materials",
  allRanges: "All ranges",
  searchLabel: "Search grade or material",
  searchPlaceholder: "e.g. POM or CNT-R35",
  matchingGrades: "matching grades",
  rangeNote:
    "R35, R68, and R610 describe catalogue target bands. Confirm the test method, units, and molded-part result before approval.",
  matrixGroupLabel: "Material Matrix",
  matrixGroupTitle: "Conductive & Antistatic",
  listedGrades: "listed grades",
  empty: "No grade matches these filters. Try another material or target range.",
};

const rangeLabels: Record<ConductiveRange, string> = {
  r35: "10³–10⁵",
  r68: "10⁶–10⁸",
  r610: "10⁶–10¹⁰",
};

const rangeOptionsByTechnology: Record<
  TechnologyFilter,
  ConductiveRange[]
> = {
  cnt: ["r35", "r610"],
  cf: ["r35", "r68"],
  all: ["r35", "r68", "r610"],
};

export function ConductiveCompoundsExplorer({
  defaultTechnology = "cnt",
  groupByMatrix = false,
  localeSegment,
  messages = defaultConductiveCompoundsExplorerMessages,
}: ConductiveCompoundsExplorerProps) {
  const [technology, setTechnology] =
    useState<TechnologyFilter>(defaultTechnology);
  const [matrix, setMatrix] = useState("all");
  const [range, setRange] = useState<RangeFilter>("all");
  const [query, setQuery] = useState("");

  const filteredCompounds = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return conductiveCompounds.filter((compound) => {
      const matchesTechnology =
        technology === "all" || compound.technology === technology;
      const matchesMatrix = matrix === "all" || compound.matrix === matrix;
      const matchesRange = range === "all" || compound.range === range;
      const matchesQuery =
        !normalizedQuery ||
        compound.grade.toLowerCase().includes(normalizedQuery) ||
        compound.matrix.toLowerCase().includes(normalizedQuery);

      return (
        matchesTechnology && matchesMatrix && matchesRange && matchesQuery
      );
    });
  }, [matrix, query, range, technology]);

  const groupedCompounds = useMemo(() => {
    const groups = new Map<string, ConductiveCompound[]>();

    filteredCompounds.forEach((compound) => {
      const group = groups.get(compound.matrix) ?? [];
      group.push(compound);
      groups.set(compound.matrix, group);
    });

    return Array.from(groups, ([matrixName, compounds]) => ({
      matrix: matrixName,
      compounds,
    })).sort((left, right) => {
      const leftIndex = matrixGroupPriority.indexOf(
        left.matrix as (typeof matrixGroupPriority)[number],
      );
      const rightIndex = matrixGroupPriority.indexOf(
        right.matrix as (typeof matrixGroupPriority)[number],
      );
      const leftRank = leftIndex === -1 ? matrixGroupPriority.length : leftIndex;
      const rightRank =
        rightIndex === -1 ? matrixGroupPriority.length : rightIndex;

      return leftRank - rightRank || left.matrix.localeCompare(right.matrix);
    });
  }, [filteredCompounds]);

  const activeDescription =
    technology === "all"
      ? messages.allDescription
      : messages.seriesDescriptions[technology];

  const changeTechnology = (nextTechnology: TechnologyFilter) => {
    setTechnology(nextTechnology);

    if (
      range !== "all" &&
      !rangeOptionsByTechnology[nextTechnology].includes(range)
    ) {
      setRange("all");
    }
  };

  const renderRows = (compounds: ConductiveCompound[]) =>
    compounds.map((compound) => (
      <tr key={`${compound.technology}-${compound.grade}`}>
        <td data-label={messages.grade}>
          <strong>{compound.grade}</strong>
        </td>
        <td data-label={messages.material}>{compound.matrix}</td>
        <td data-label={messages.technology}>
          <span
            className={
              compound.technology === "cnt" ? styles.cntBadge : styles.cfBadge
            }
          >
            {conductiveSeries[compound.technology].shortLabel}
          </span>
        </td>
        <td data-label={messages.targetRange}>{compound.rangeLabel}</td>
        <td data-label={messages.nextStep}>
          <Link
            href={getLocalizedHref(
              createContactHref({
                grade: compound.grade,
                material: localeSegment
                  ? `${compound.matrix} 导电／抗静电改性材料`
                  : `${compound.matrix} conductive / antistatic compound`,
                source: localeSegment
                  ? "中文跨材料导电牌号目录"
                  : "Conductive grade directory",
              }),
              localeSegment,
            )}
          >
            {messages.requestData}
          </Link>
        </td>
      </tr>
    ));

  const renderTable = (compounds: ConductiveCompound[]) => (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            <th>{messages.grade}</th>
            <th>{messages.material}</th>
            <th>{messages.technology}</th>
            <th>{messages.targetRange}</th>
            <th>{messages.nextStep}</th>
          </tr>
        </thead>
        <tbody>{renderRows(compounds)}</tbody>
      </table>
    </div>
  );

  return (
    <section
      id="grade-explorer"
      className={styles.explorer}
      aria-labelledby="grade-explorer-title"
    >
      <div className={styles.rail}>
        <div className={styles.explorerHeading}>
          <div>
            <p className={styles.kicker}>{messages.kicker}</p>
            <h2 id="grade-explorer-title">{messages.title}</h2>
          </div>
          <p>{activeDescription}</p>
        </div>

        <div className={styles.toolbar}>
          <div
            className={styles.segmentedControl}
            role="group"
            aria-label={messages.technologyAria}
          >
            {technologyOptions.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={technology === option}
                onClick={() => changeTechnology(option)}
              >
                {messages.technologyLabels[option]}
              </button>
            ))}
          </div>

          <div className={styles.filters}>
            <label>
              <span>{messages.materialMatrix}</span>
              <Select
                value={matrix}
                onChange={(event) => setMatrix(event.target.value)}
                className={`${styles.filterControl} ${styles.filterSelect}`}
              >
                <option value="all">{messages.allMaterials}</option>
                {conductiveMatrices.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </label>

            <label>
              <span>{messages.targetRange}</span>
              <Select
                value={range}
                onChange={(event) =>
                  setRange(event.target.value as RangeFilter)
                }
                className={`${styles.filterControl} ${styles.filterSelect}`}
              >
                <option value="all">{messages.allRanges}</option>
                {rangeOptionsByTechnology[technology].map((item) => (
                  <option key={item} value={item}>
                    {rangeLabels[item]}
                  </option>
                ))}
              </Select>
            </label>

            <label className={styles.searchField}>
              <span>{messages.searchLabel}</span>
              <span className={styles.searchInput}>
                <Search aria-hidden="true" size={17} strokeWidth={2} />
                <Input
                  type="search"
                  value={query}
                  placeholder={messages.searchPlaceholder}
                  onChange={(event) => setQuery(event.target.value)}
                  className={`${styles.filterControl} ${styles.searchControl}`}
                />
              </span>
            </label>
          </div>
        </div>

        <div className={styles.resultsMeta} aria-live="polite">
          <strong>{filteredCompounds.length}</strong> {messages.matchingGrades}
          <span>{messages.rangeNote}</span>
        </div>

        {filteredCompounds.length ? (
          groupByMatrix ? (
            <div className={styles.matrixGroups}>
              {groupedCompounds.map((group) => (
                <section
                  key={group.matrix}
                  className={styles.matrixGroup}
                  aria-label={`${group.matrix} ${messages.matrixGroupTitle}`}
                >
                  <div className={styles.matrixGroupHeader}>
                    <div>
                      <p>{messages.matrixGroupLabel}</p>
                      <h3>{messages.matrixGroupTitle} {group.matrix}</h3>
                    </div>
                    <span>{group.compounds.length} {messages.listedGrades}</span>
                  </div>
                  {renderTable(group.compounds)}
                </section>
              ))}
            </div>
          ) : (
            renderTable(filteredCompounds)
          )
        ) : (
          <div className={styles.emptyState}>{messages.empty}</div>
        )}
      </div>
    </section>
  );
}
