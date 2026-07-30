import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"
import styles from "./SectionIntro.module.css"

type SectionIntroProps = Omit<ComponentPropsWithoutRef<"div">, "title"> & {
  description: ReactNode
  descriptionClassName?: string
  eyebrow?: ReactNode
  eyebrowClassName?: string
  headingLevel?: 2 | 3
  layout?: "stacked" | "split"
  scale?: "section" | "display"
  title: ReactNode
  titleClassName?: string
  titleId?: string
  variant?: "light" | "dark"
}

export function SectionIntro({
  className,
  description,
  descriptionClassName,
  eyebrow,
  eyebrowClassName,
  headingLevel = 2,
  layout = "stacked",
  scale = "section",
  title,
  titleClassName,
  titleId,
  variant = "light",
  ...divProps
}: SectionIntroProps) {
  const Heading = headingLevel === 3 ? "h3" : "h2"

  return (
    <div
      {...divProps}
      data-slot="section-intro"
      data-layout={layout}
      data-scale={scale}
      data-variant={variant}
      className={cn(styles.root, className)}
    >
      {eyebrow ? (
        <p className={cn(styles.eyebrow, eyebrowClassName)}>{eyebrow}</p>
      ) : null}
      <Heading id={titleId} className={cn(styles.title, titleClassName)}>
        {title}
      </Heading>
      <p className={cn(styles.description, descriptionClassName)}>
        {description}
      </p>
    </div>
  )
}
