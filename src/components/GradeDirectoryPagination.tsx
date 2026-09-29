"use client";

import { Children, useState, type ReactNode } from "react";
import { PaginationNav, type PaginationLocale } from "@/components/PaginationNav";

export function GradeDirectoryPagination({
  children,
  enabled = true,
  locale = "en",
  pageSize = 10,
  scrollTargetId = "pom-grades",
}: {
  children: ReactNode;
  enabled?: boolean;
  locale?: PaginationLocale;
  pageSize?: number;
  scrollTargetId?: string;
}) {
  const rows = Children.toArray(children);
  const totalPages = Math.ceil(rows.length / pageSize);
  const [page, setPage] = useState(1);

  if (!enabled || totalPages <= 1) return <>{children}</>;

  const currentPage = Math.min(page, totalPages);
  const firstIndex = (currentPage - 1) * pageSize;

  const selectPage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === currentPage) return;
    setPage(nextPage);
    requestAnimationFrame(() => {
      document.getElementById(scrollTargetId)?.scrollIntoView({ block: "start" });
    });
  };

  return (
    <>
      {rows.slice(firstIndex, firstIndex + pageSize)}
      <PaginationNav
        page={currentPage}
        totalPages={totalPages}
        first={firstIndex + 1}
        last={Math.min(firstIndex + pageSize, rows.length)}
        total={rows.length}
        kind="grades"
        locale={locale}
        onPageChange={selectPage}
      />
    </>
  );
}
