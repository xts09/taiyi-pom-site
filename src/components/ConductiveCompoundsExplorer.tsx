"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  conductiveCompounds,
  conductiveMatrices,
  conductiveSeries,
  type ConductiveRange,
  type ConductiveTechnology,
} from "@/data/conductiveCompounds";
import styles from "./ConductiveCompounds.module.css";

type TechnologyFilter = "all" | ConductiveTechnology;
type RangeFilter = "all" | ConductiveRange;

const technologyOptions: Array<{
  value: TechnologyFilter;
  label: string;
}> = [
  { value: "cnt", label: "CNT Antistatic" },
  { value: "cf", label: "Carbon Fiber Conductive" },
  { value: "all", label: "All Series" },
];

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

export function ConductiveCompoundsExplorer() {
  const [technology, setTechnology] =
    useState<TechnologyFilter>("cnt");
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

  const activeDescription =
    technology === "all"
      ? "Compare both modification systems, then narrow the list by polymer matrix and target range."
      : conductiveSeries[technology].description;

  const changeTechnology = (nextTechnology: TechnologyFilter) => {
    setTechnology(nextTechnology);

    if (
      range !== "all" &&
      !rangeOptionsByTechnology[nextTechnology].includes(range)
    ) {
      setRange("all");
    }
  };

  return (
    <section
      id="grade-explorer"
      className={styles.explorer}
      aria-labelledby="grade-explorer-title"
    >
      <div className={styles.rail}>
        <div className={styles.explorerHeading}>
          <div>
            <p className={styles.kicker}>Cross-Material Grade Directory</p>
            <h2 id="grade-explorer-title">Find a charge-control direction</h2>
          </div>
          <p>{activeDescription}</p>
        </div>

        <div className={styles.toolbar}>
          <div
            className={styles.segmentedControl}
            role="group"
            aria-label="Compound technology"
          >
            {technologyOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={technology === option.value}
                onClick={() => changeTechnology(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className={styles.filters}>
            <label>
              <span>Material matrix</span>
              <select
                value={matrix}
                onChange={(event) => setMatrix(event.target.value)}
              >
                <option value="all">All materials</option>
                {conductiveMatrices.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Target range</span>
              <select
                value={range}
                onChange={(event) =>
                  setRange(event.target.value as RangeFilter)
                }
              >
                <option value="all">All ranges</option>
                {rangeOptionsByTechnology[technology].map((item) => (
                  <option key={item} value={item}>
                    {rangeLabels[item]}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.searchField}>
              <span>Search grade or material</span>
              <span className={styles.searchInput}>
                <Search aria-hidden="true" size={17} strokeWidth={2} />
                <input
                  type="search"
                  value={query}
                  placeholder="e.g. POM or CNT-R35"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </span>
            </label>
          </div>
        </div>

        <div className={styles.resultsMeta} aria-live="polite">
          <strong>{filteredCompounds.length}</strong> matching grades
          <span>
            R35, R68, and R610 describe catalogue target bands. Confirm the
            test method, units, and molded-part result before approval.
          </span>
        </div>

        {filteredCompounds.length ? (
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Material</th>
                  <th>Technology</th>
                  <th>Target range</th>
                  <th>Next step</th>
                </tr>
              </thead>
              <tbody>
                {filteredCompounds.map((compound) => (
                  <tr key={`${compound.technology}-${compound.grade}`}>
                    <td data-label="Grade">
                      <strong>{compound.grade}</strong>
                    </td>
                    <td data-label="Material">{compound.matrix}</td>
                    <td data-label="Technology">
                      <span
                        className={
                          compound.technology === "cnt"
                            ? styles.cntBadge
                            : styles.cfBadge
                        }
                      >
                        {conductiveSeries[compound.technology].shortLabel}
                      </span>
                    </td>
                    <td data-label="Target range">
                      {compound.rangeLabel}
                    </td>
                    <td data-label="Next step">
                      <Link href="/contact">Request data</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.emptyState}>
            No grade matches these filters. Try another material or target
            range.
          </div>
        )}
      </div>
    </section>
  );
}
