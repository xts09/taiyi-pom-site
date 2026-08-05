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
    <div className="stagger-list mx-auto w-full lg:grid lg:w-[var(--site-rail-width)] lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14 lg:py-14 xl:grid-cols-[14rem_minmax(0,1fr)] xl:gap-20 2xl:gap-24">
      <div className="min-w-0">{sidebar}</div>
      <div className="resource-article-surface min-w-0 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
        <div className="mx-auto w-full max-w-[var(--ds-resource-article-canvas-measure)]">
          {children}
        </div>
      </div>
    </div>
  );
}
