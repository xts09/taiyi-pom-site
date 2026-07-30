import type {
  ComponentPropsWithoutRef,
  Key,
  ReactNode,
} from "react"

import { cn } from "@/lib/utils"
import styles from "./MetricGroup.module.css"

export type MetricGroupItem = {
  key?: Key
  label: ReactNode
  note?: ReactNode
  value: ReactNode
}

type MetricGroupProps = Omit<ComponentPropsWithoutRef<"dl">, "children"> & {
  featuredClassName?: string
  featuredItem?: MetricGroupItem
  itemClassName?: string
  items: MetricGroupItem[]
  itemsClassName?: string
  renderValue?: (item: MetricGroupItem) => ReactNode
  tone?: "light" | "dark"
  variant?: "rail" | "grid" | "inline"
}

function metricKey(item: MetricGroupItem, index: number) {
  if (item.key !== undefined) return item.key
  if (typeof item.label === "string" || typeof item.label === "number") {
    return item.label
  }
  return index
}

export function MetricGroup({
  className,
  featuredClassName,
  featuredItem,
  itemClassName,
  items,
  itemsClassName,
  renderValue = (item) => item.value,
  tone = "light",
  variant = "grid",
  ...dlProps
}: MetricGroupProps) {
  const renderItem = (
    item: MetricGroupItem,
    index: number,
    featured = false,
  ) => (
    <div
      key={metricKey(item, index)}
      data-featured={featured || undefined}
      data-slot="metric-item"
      className={cn(
        styles.item,
        featured && styles.featured,
        featured ? featuredClassName : itemClassName,
      )}
    >
      <dt className={styles.label}>{item.label}</dt>
      <dd className={styles.value}>{renderValue(item)}</dd>
      {item.note ? <span className={styles.note}>{item.note}</span> : null}
    </div>
  )

  return (
    <dl
      {...dlProps}
      data-slot="metric-group"
      data-tone={tone}
      data-variant={variant}
      className={cn(styles.root, className)}
    >
      {featuredItem ? renderItem(featuredItem, -1, true) : null}
      <div className={cn(styles.items, itemsClassName)}>
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </dl>
  )
}

