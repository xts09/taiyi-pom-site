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
    <div className="resource-article-layout">
      <div className="resource-article-rail">{sidebar}</div>
      <div className="resource-article-main">
        <div className="resource-article-reading-column">{children}</div>
      </div>
    </div>
  );
}
