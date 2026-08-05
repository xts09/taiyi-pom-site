import type { ComponentPropsWithoutRef, ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import styles from "./DirectoryRow.module.css"

type DirectoryRowProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "children"
> & {
  description?: ReactNode
  emphasized?: boolean
  eyebrow?: ReactNode
  label: ReactNode
  trailing?: ReactNode
  variant?: "compact" | "data" | "related"
}

export function DirectoryRow({
  className,
  description,
  emphasized = false,
  eyebrow,
  label,
  trailing,
  variant = "compact",
  ...linkProps
}: DirectoryRowProps) {
  return (
    <Link
      {...linkProps}
      data-emphasized={emphasized ? "true" : undefined}
      data-slot="directory-row"
      data-variant={variant}
      className={cn(styles.root, className)}
    >
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <strong className={styles.label}>{label}</strong>
      {description ? (
        <span className={styles.description}>{description}</span>
      ) : null}
      <span className={styles.trailing} aria-hidden={trailing ? undefined : true}>
        {trailing ?? <ArrowUpRight size={17} strokeWidth={1.8} />}
      </span>
    </Link>
  )
}
