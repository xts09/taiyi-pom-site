"use client";

import { useState, type ReactNode } from "react";
import styles from "./CaseStudiesPage.module.css";

type Props = {
  categories: { id: string; label: string }[];
  entries: { id: string; category: string; content: ReactNode }[];
  chinese: boolean;
};

export function CaseStudyFilters({ categories, entries, chinese }: Props) {
  const [active, setActive] = useState("all");
  const choices = [{ id: "all", label: chinese ? "全部案例" : "All cases" }, ...categories];
  const count = (id: string) => id === "all" ? entries.length : entries.filter((entry) => entry.category === id).length;
  const activeLabel = choices.find((choice) => choice.id === active)!.label;
  return <section aria-label={chinese ? "按终端应用浏览案例" : "Browse cases by application"}>
    <div className={styles.filters}>
      <div className={styles.filterButtons} role="group" aria-label={chinese ? "终端应用" : "Application"}>
        {choices.map((choice) => <button key={choice.id} type="button" aria-pressed={active === choice.id} aria-controls="case-results" onClick={() => setActive(choice.id)}>
          {choice.label}<span>{count(choice.id)}</span>
        </button>)}
      </div>
      <label className={styles.mobileFilter}>
        <span>{chinese ? "终端应用" : "Application"}</span>
        <select value={active} onChange={(event) => setActive(event.target.value)} aria-controls="case-results">
          {choices.map((choice) => <option key={choice.id} value={choice.id}>{choice.label} ({count(choice.id)})</option>)}
        </select>
      </label>
      <p className={styles.resultCount} role="status" aria-live="polite" aria-atomic="true">
        {chinese ? `${activeLabel} · ${count(active)} 个案例` : `${activeLabel} · ${count(active)} ${count(active) === 1 ? "case" : "cases"}`}
      </p>
    </div>
    <ul className={styles.list} id="case-results">
      {entries.map((entry) => <li key={entry.id} hidden={active !== "all" && entry.category !== active}>{entry.content}</li>)}
    </ul>
  </section>;
}
