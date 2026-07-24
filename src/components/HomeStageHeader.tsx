import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HomeStageHeaderProps = {
  title: string;
  eyebrow?: string;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
};

export function HomeStageHeader({
  title,
  eyebrow,
  tone = "light",
  className,
  children,
}: HomeStageHeaderProps) {
  return (
    <header
      className={cn(
        "stage-heading",
        tone === "dark" && "stage-heading-on-dark",
        className,
      )}
    >
      <div className="stage-heading-main">
        {eyebrow ? <p className="stage-number">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {children ? <div className="stage-heading-copy">{children}</div> : null}
    </header>
  );
}
