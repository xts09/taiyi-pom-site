"use client";

import { Children, useSyncExternalStore, type ReactNode } from "react";
import { PaginationNav, type PaginationLocale } from "@/components/PaginationNav";
import { focusDirectoryResults } from "@/lib/focusDirectoryResults";

const pageChangeEvent = "grade-directory-pagechange";

function subscribeToPage(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(pageChangeEvent, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(pageChangeEvent, onChange);
  };
}

const getPageSnapshot = () => new URLSearchParams(window.location.search).get("page") ?? "1";
const getServerPageSnapshot = () => "1";

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
  const pageValue = useSyncExternalStore(subscribeToPage, getPageSnapshot, getServerPageSnapshot);
  const parsedPage = Number(pageValue);
  const page = /^[1-9]\d*$/.test(pageValue) && Number.isSafeInteger(parsedPage) ? parsedPage : 1;

  if (!enabled || totalPages <= 1) return <>{children}</>;

  const currentPage = Math.min(page, totalPages);
  const firstIndex = (currentPage - 1) * pageSize;

  const selectPage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === currentPage) return;
    const url = new URL(window.location.href);
    if (nextPage === 1) url.searchParams.delete("page");
    else url.searchParams.set("page", String(nextPage));
    url.hash = scrollTargetId;
    window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new Event(pageChangeEvent));
    requestAnimationFrame(() => {
      focusDirectoryResults(scrollTargetId);
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
