"use client";

import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./HomeSections.module.css";

export type HomeMaterialColumn = {
  id: "pom" | "polyamide" | "functional";
  title: string;
  summary: string;
  items: ReadonlyArray<{ title: string; href: string; count?: number }>;
  note?: string;
  action: string;
  href: string;
};

function MaterialLinks({ column }: { column: HomeMaterialColumn }) {
  return (
    <div className={styles.materialBody}>
      <ul className={styles.materialList}>
        {column.items.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>
              <span>{item.title}</span>
              {item.count === undefined ? (
                <ArrowRight aria-hidden="true" size={16} />
              ) : (
                <span className={styles.materialCount}>{item.count}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      {column.note ? <p className={styles.materialNote}>{column.note}</p> : null}
      <Link className={styles.materialAction} href={column.href}>
        {column.action}
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </div>
  );
}

export function HomeMaterialCatalogue({
  columns,
}: {
  columns: readonly HomeMaterialColumn[];
}) {
  return (
    <>
      <div className={styles.catalogueDesktop}>
        {columns.map((column) => (
          <article key={column.id} className={styles.material} data-material={column.id}>
            <h3 className={styles.materialTitle}>{column.title}</h3>
            <p className={styles.materialSummary}>{column.summary}</p>
            <MaterialLinks column={column} />
          </article>
        ))}
      </div>
      <Accordion
        className={styles.catalogueMobile}
        type="single"
        collapsible
        defaultValue="pom"
      >
        {columns.map((column) => (
          <AccordionItem
            key={column.id}
            value={column.id}
            className={styles.material}
            data-material={column.id}
          >
            <AccordionTrigger
              className={styles.materialTrigger}
              indicator={<Plus size={22} />}
            >
              <span className={styles.materialTitle}>{column.title}</span>
              <span className={styles.materialSummary}>{column.summary}</span>
            </AccordionTrigger>
            <AccordionContent className={styles.materialContent}>
              <MaterialLinks column={column} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
