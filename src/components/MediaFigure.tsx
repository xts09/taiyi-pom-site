import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"
import styles from "./MediaFigure.module.css"

type MediaFigureProps = Omit<ComponentPropsWithoutRef<"figure">, "children"> & {
  caption?: ReactNode
  captionClassName?: string
  fit?: "cover" | "contain"
  media: ReactNode
  mediaClassName?: string
  variant?: "landscape" | "portrait-document" | "edge-to-edge" | "captioned"
}

export function MediaFigure({
  caption,
  captionClassName,
  className,
  fit = "cover",
  media,
  mediaClassName,
  variant = "landscape",
  ...figureProps
}: MediaFigureProps) {
  return (
    <figure
      {...figureProps}
      data-fit={fit}
      data-slot="media-figure"
      data-variant={variant}
      className={cn(styles.root, className)}
    >
      <div className={cn(styles.media, mediaClassName)}>{media}</div>
      {caption ? (
        <figcaption className={cn(styles.caption, captionClassName)}>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

