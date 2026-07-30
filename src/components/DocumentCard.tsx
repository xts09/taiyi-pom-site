import Link from "next/link"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"
import styles from "./DocumentCard.module.css"

type DocumentCardProps = Omit<ComponentPropsWithoutRef<"article">, "title"> & {
  actionLabel?: ReactNode
  actionClassName?: string
  bodyClassName?: string
  description?: ReactNode
  descriptionClassName?: string
  external?: boolean
  eyebrow: ReactNode
  eyebrowClassName?: string
  href: string
  linkTitle?: boolean
  meta?: ReactNode
  metaClassName?: string
  preview?: ReactNode
  previewAriaLabel?: string
  previewClassName?: string
  title: ReactNode
  titleClassName?: string
  titleLevel?: 2 | 3
  variant?: "certificate" | "technical-document" | "compact-link"
}

export function DocumentCard({
  actionClassName,
  actionLabel,
  bodyClassName,
  className,
  description,
  descriptionClassName,
  external = false,
  eyebrow,
  eyebrowClassName,
  href,
  linkTitle = false,
  meta,
  metaClassName,
  preview,
  previewAriaLabel,
  previewClassName,
  title,
  titleClassName,
  titleLevel = 3,
  variant = "technical-document",
  ...articleProps
}: DocumentCardProps) {
  const Heading = titleLevel === 2 ? "h2" : "h3"
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <article
      {...articleProps}
      data-slot="document-card"
      data-variant={variant}
      className={cn(styles.root, className)}
    >
      {preview ? (
        <Link
          href={href}
          aria-label={previewAriaLabel}
          className={cn(styles.preview, previewClassName)}
          {...linkProps}
        >
          {preview}
        </Link>
      ) : null}

      <div className={cn(styles.body, bodyClassName)}>
        <p className={cn(styles.eyebrow, eyebrowClassName)}>{eyebrow}</p>
        <Heading className={cn(styles.title, titleClassName)}>
          {linkTitle ? (
            <Link href={href} className={styles.titleLink} {...linkProps}>
              {title}
            </Link>
          ) : (
            title
          )}
        </Heading>
        {description ? (
          <p className={cn(styles.description, descriptionClassName)}>
            {description}
          </p>
        ) : null}
        {meta ? <div className={cn(styles.meta, metaClassName)}>{meta}</div> : null}
        {actionLabel ? (
          <Link
            href={href}
            className={cn(styles.action, actionClassName)}
            {...linkProps}
          >
            {actionLabel}
          </Link>
        ) : null}
      </div>
    </article>
  )
}

