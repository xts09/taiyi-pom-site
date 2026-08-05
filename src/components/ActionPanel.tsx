import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"
import styles from "./ActionPanel.module.css"

type ActionPanelProps = Omit<
  ComponentPropsWithoutRef<"section">,
  "children" | "title"
> & {
  action: ReactNode
  actionClassName?: string
  aside?: ReactNode
  asideClassName?: string
  bodyClassName?: string
  children: ReactNode
  copyClassName?: string
  eyebrow?: ReactNode
  eyebrowClassName?: string
  footerAdjacent?: boolean
  layout?: "split" | "distributed"
  title: ReactNode
  titleClassName?: string
  titleId?: string
  variant?: "light" | "evidence" | "compact" | "recommendation"
}

export function ActionPanel({
  action,
  actionClassName,
  aside,
  asideClassName,
  bodyClassName,
  children,
  className,
  copyClassName,
  eyebrow,
  eyebrowClassName,
  footerAdjacent = false,
  layout = "split",
  title,
  titleClassName,
  titleId,
  variant = "light",
  ...sectionProps
}: ActionPanelProps) {
  return (
    <section
      {...sectionProps}
      data-footer-adjacent={footerAdjacent ? "true" : undefined}
      data-layout={layout}
      data-slot="action-panel"
      data-variant={variant}
      className={cn(styles.root, "stagger-list", className)}
    >
      <div
        className={cn(styles.copy, "stagger-list", copyClassName)}
        data-slot="action-panel-copy"
      >
        {eyebrow ? (
          <p
            className={cn(styles.eyebrow, eyebrowClassName)}
            data-slot="action-panel-eyebrow"
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={titleId}
          className={cn(styles.title, titleClassName)}
          data-slot="action-panel-title"
        >
          {title}
        </h2>
        <div
          className={cn(styles.body, bodyClassName)}
          data-slot="action-panel-body"
        >
          {typeof children === "string" ? <p>{children}</p> : children}
        </div>
      </div>

      {aside ? (
        <div
          className={cn(styles.aside, asideClassName)}
          data-slot="action-panel-aside"
        >
          {aside}
        </div>
      ) : null}

      <div
        className={cn(styles.action, actionClassName)}
        data-slot="action-panel-action"
      >
        {action}
      </div>
    </section>
  )
}
