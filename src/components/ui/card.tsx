import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "min-w-0 [--card-content-padding:var(--ds-panel-padding)]",
  {
    variants: {
      variant: {
        legacy:
          "flex flex-col gap-6 rounded-lg border border-[var(--taiyi-line)] bg-[var(--background)] py-6 text-[var(--foreground)] shadow-sm",
        standard:
          "rounded-[var(--ds-panel-radius)] border border-[var(--ds-panel-border)] bg-[var(--ds-panel-bg)] text-[var(--ds-panel-fg)] shadow-none",
        soft:
          "rounded-[var(--ds-panel-radius)] border-0 bg-[var(--ds-panel-bg-soft)] text-[var(--ds-panel-fg)] shadow-none",
        evidence:
          "rounded-[var(--ds-evidence-radius)] border-0 bg-[var(--ds-evidence-bg)] [background:var(--ds-evidence-surface)] text-[var(--ds-evidence-fg)] shadow-[var(--ds-evidence-shadow)]",
        interactive:
          "overflow-hidden rounded-[var(--ds-panel-radius)] border border-[var(--ds-panel-border)] bg-[var(--ds-panel-bg)] text-[var(--ds-panel-fg)] shadow-none outline-none transition-[border-color,box-shadow,transform] duration-[var(--ds-duration-short)] hover:-translate-y-px hover:border-[var(--ds-panel-border-hover)] hover:shadow-[var(--ds-panel-interactive-shadow-hover)] focus-visible:border-[var(--ds-panel-border-hover)] focus-visible:ring-[3px] focus-visible:ring-[var(--ds-input-focus-halo)]",
      },
    },
    defaultVariants: {
      variant: "legacy",
    },
  },
)

function Card({
  className,
  variant = "legacy",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="card"
      data-variant={variant}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-[var(--card-content-padding)]", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
}
