import type { ReactNode } from "react";

type ResourceDocumentFrameProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

export function ResourceDocumentFrame({
  sidebar,
  children,
}: ResourceDocumentFrameProps) {
  return (
    <div className="mx-auto w-full lg:grid lg:w-[var(--site-rail-width)] lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14 lg:py-14 xl:grid-cols-[14rem_minmax(0,1fr)] xl:gap-20 2xl:gap-24">
      <div className="min-w-0">{sidebar}</div>
      <div className="min-w-0 bg-white px-5 py-10 sm:px-8 sm:py-12 lg:rounded-[1.25rem] lg:border lg:border-slate-200/80 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
        <div className="mx-auto w-full max-w-[52rem]">{children}</div>
      </div>
    </div>
  );
}
