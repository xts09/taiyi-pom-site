import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"
import styles from "./PageHero.module.css"

type PageHeroProps = Omit<ComponentPropsWithoutRef<"section">, "title"> & {
  actions?: ReactNode
  actionsClassName?: string
  copyClassName?: string
  description: ReactNode
  descriptionClassName?: string
  eyebrow?: ReactNode
  eyebrowClassName?: string
  innerClassName?: string
  media?: ReactNode
  mediaClassName?: string
  title: ReactNode
  titleClassName?: string
  variant?: "editorial" | "image" | "evidence"
}

export function PageHero({
  actions,
  actionsClassName,
  className,
  copyClassName,
  description,
  descriptionClassName,
  eyebrow,
  eyebrowClassName,
  innerClassName,
  media,
  mediaClassName,
  title,
  titleClassName,
  variant = "editorial",
  ...sectionProps
}: PageHeroProps) {
  return (
    <section
      {...sectionProps}
      data-slot="page-hero"
      data-variant={variant}
      className={cn(styles.root, className)}
    >
      {media ? (
        <figure
          data-slot="page-hero-media"
          className={cn(styles.media, mediaClassName)}
        >
          {media}
        </figure>
      ) : null}

      <div
        data-slot="page-hero-inner"
        className={cn(styles.inner, innerClassName)}
      >
        <div
          data-slot="page-hero-copy"
          className={cn(styles.copy, copyClassName)}
        >
          {eyebrow ? (
            <p className={cn(styles.eyebrow, eyebrowClassName)}>{eyebrow}</p>
          ) : null}
          <h1 className={cn(styles.title, titleClassName)}>{title}</h1>
          <p className={cn(styles.description, descriptionClassName)}>
            {description}
          </p>
          {actions ? (
            <div className={cn(styles.actions, actionsClassName)}>{actions}</div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
