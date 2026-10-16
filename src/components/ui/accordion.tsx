"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import styles from "./accordion.module.css";

function Accordion({
  className,
  variant = "plain",
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & {
  variant?: "plain" | "technical-row";
}) {
  return <AccordionPrimitive.Root data-slot="accordion" data-variant={variant} className={cn(styles.root, className)} {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(styles.item, "border-b border-[var(--ds-border-subtle)] last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  indicator,
  onClick,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  indicator?: React.ReactNode;
}) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className={styles.header}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          styles.trigger,
          "flex flex-1 items-center justify-between gap-4 rounded-[var(--ds-radius-tight)] py-4 text-left text-sm font-medium outline-none disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        onClick={(event) => {
          onClick?.(event);
          const trigger = event.currentTarget;
          if (event.defaultPrevented || trigger.dataset.state !== "closed") return;

          // Closing a preceding long panel can move this row above the viewport.
          requestAnimationFrame(() => requestAnimationFrame(() => {
            if (!trigger.isConnected || trigger.dataset.state !== "open") return;
            const bounds = trigger.getBoundingClientRect();
            const inset = Number.parseFloat(getComputedStyle(trigger).scrollMarginTop) || 0;
            if (bounds.top < inset || bounds.bottom > window.innerHeight) {
              trigger.scrollIntoView({ block: "nearest", behavior: "instant" });
            }
          }));
        }}
        {...props}
      >
        <span data-slot="accordion-label" className={styles.label}>{children}</span>
        <span data-slot="accordion-indicator" className={styles.indicator} aria-hidden="true">
          {indicator ?? <ChevronDownIcon className={styles.icon} />}
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  forceMount,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      data-force-mounted={forceMount ? "" : undefined}
      className={cn(styles.content, "overflow-hidden text-sm")}
      forceMount={forceMount}
      {...props}
    >
      <div data-slot="accordion-body" className={cn(styles.body, "pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
