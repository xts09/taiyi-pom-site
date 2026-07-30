import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import styles from "./button.module.css"

const buttonVariants = cva(
  `${styles.root} inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      variant: {
        default:
          "bg-[var(--taiyi-blue)] text-white hover:brightness-[0.96]",
        primary:
          "rounded-[var(--ds-button-radius)] bg-[var(--ds-button-primary-bg)] text-[var(--ds-button-primary-fg)] hover:-translate-y-px hover:bg-[var(--ds-button-primary-bg-hover)] active:translate-y-0",
        inverse:
          "rounded-[var(--ds-button-radius)] bg-[var(--ds-button-inverse-bg)] font-[var(--ds-button-font-weight)] text-[var(--ds-button-inverse-fg)] shadow-[var(--ds-button-inverse-shadow)] hover:-translate-y-px hover:bg-[var(--ds-button-inverse-bg-hover)] hover:shadow-[var(--ds-button-inverse-shadow-hover)] active:translate-y-0 active:scale-[0.98]",
        destructive:
          "bg-[#b42318] text-white hover:bg-[#912018] focus-visible:ring-[#b42318]/25",
        outline:
          "border border-[var(--taiyi-line)] bg-transparent text-inherit hover:bg-white/10",
        secondary:
          "rounded-[var(--ds-button-radius)] border border-[var(--ds-button-secondary-border)] bg-[var(--ds-button-secondary-bg)] font-[var(--ds-button-secondary-font-weight)] text-[var(--ds-button-secondary-fg)] hover:-translate-y-px hover:border-[var(--ds-button-secondary-border-hover)] hover:bg-[var(--ds-button-secondary-bg)] hover:text-[var(--ds-button-secondary-fg-hover)] active:translate-y-0 active:scale-[0.98]",
        productHeroPrimary:
          "border border-[var(--ds-button-product-hero-primary-border)] bg-[var(--ds-button-product-hero-primary-bg)] px-[var(--ds-button-product-hero-primary-padding-inline)] leading-none text-[var(--ds-button-product-hero-primary-fg)] hover:bg-[var(--ds-button-product-hero-primary-bg-hover)]",
        productHeroSecondary:
          "border border-[var(--ds-button-product-hero-secondary-border)] bg-[var(--ds-button-product-hero-secondary-bg)] px-[var(--ds-button-product-hero-secondary-padding-inline)] leading-[1.25] text-[var(--ds-button-product-hero-secondary-fg)] hover:bg-[var(--ds-button-product-hero-secondary-bg-hover)] hover:text-[var(--ds-button-product-hero-secondary-fg-hover)]",
        productDetailPrimary:
          "border border-[var(--ds-button-product-detail-primary-border)] bg-[var(--ds-button-product-detail-primary-bg)] text-[var(--ds-button-product-detail-primary-fg)] hover:bg-[var(--ds-button-product-detail-primary-bg-hover)]",
        productDetailSecondary:
          "border border-l-0 border-[var(--ds-button-product-detail-secondary-border)] bg-[var(--ds-button-product-detail-secondary-bg)] text-[var(--ds-button-product-detail-secondary-fg)] hover:bg-[var(--ds-button-product-detail-secondary-bg-hover)]",
        applicationHeroPrimary:
          "border border-[var(--ds-button-application-hero-primary-border)] bg-[var(--ds-button-application-hero-primary-bg)] text-[var(--ds-button-application-hero-primary-fg)] hover:bg-[var(--ds-button-application-hero-primary-bg-hover)]",
        applicationHeroSecondary:
          "border border-[var(--ds-button-application-hero-secondary-border)] bg-[var(--ds-button-application-hero-secondary-bg)] text-[var(--ds-button-application-hero-secondary-fg)] hover:bg-[var(--ds-button-application-hero-secondary-bg-hover)] hover:text-[var(--ds-button-application-hero-secondary-fg-hover)]",
        resourceArticleInverse:
          "rounded-[var(--ds-button-resource-article-radius)] bg-[var(--ds-button-resource-article-bg)] text-[var(--ds-button-resource-article-fg)] shadow-none hover:bg-[var(--ds-button-resource-article-bg-hover)] hover:shadow-none active:scale-100",
        resourceIndexPrimary:
          "border border-[var(--ds-button-resource-index-primary-border)] bg-[var(--ds-button-resource-index-primary-bg)] text-[var(--ds-button-resource-index-primary-fg)] hover:border-[var(--ds-button-resource-index-primary-border-hover)] hover:bg-[var(--ds-button-resource-index-primary-bg-hover)] focus-visible:border-[var(--ds-button-resource-index-primary-border-hover)] focus-visible:bg-[var(--ds-button-resource-index-primary-bg-hover)]",
        resourceIndexSecondary:
          "border border-[var(--ds-button-resource-index-secondary-border)] bg-[var(--ds-button-resource-index-secondary-bg)] text-[var(--ds-button-resource-index-secondary-fg)] hover:border-[var(--ds-button-resource-index-secondary-border-hover)] hover:bg-[var(--ds-button-resource-index-secondary-bg-hover)] focus-visible:border-[var(--ds-button-resource-index-secondary-border-hover)] focus-visible:bg-[var(--ds-button-resource-index-secondary-bg-hover)]",
        ghost: "text-inherit hover:bg-[#e8eef5] hover:text-[var(--taiyi-ink)]",
        link: "text-[var(--taiyi-blue)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        form: "min-h-[var(--ds-button-height)] rounded-[var(--ds-button-radius)] px-[var(--ds-button-padding-inline)] text-[length:var(--ds-button-font-size)] font-[var(--ds-button-font-weight)]",
        productHero:
          "h-auto min-h-[var(--ds-button-product-hero-height)] rounded-none py-0 text-[length:var(--ds-button-product-hero-font-size)] font-[var(--ds-button-product-hero-font-weight)]",
        productDetailHero:
          "h-auto min-h-[var(--ds-button-product-detail-height)] whitespace-normal rounded-[var(--ds-button-product-detail-radius)] px-[var(--ds-button-product-detail-padding-inline)] py-[var(--ds-button-product-detail-padding-block)] text-[length:var(--ds-button-product-detail-font-size)] leading-[1.5] font-[var(--ds-button-product-detail-font-weight)]",
        applicationHero:
          "h-auto min-h-[var(--ds-button-application-hero-height)] whitespace-normal rounded-none px-[var(--ds-button-application-hero-padding-inline)] py-[var(--ds-button-application-hero-padding-block)] text-[length:var(--ds-button-application-hero-font-size)] leading-[1.15] font-[var(--ds-button-application-hero-font-weight)]",
        resourceArticleAction:
          "h-auto min-h-[var(--ds-button-resource-article-height)] w-full whitespace-normal px-[var(--ds-button-resource-article-padding-inline)] py-[var(--ds-button-resource-article-padding-block)] text-[length:var(--ds-button-resource-article-font-size)] leading-5 font-[var(--ds-button-resource-article-font-weight)] sm:w-fit",
        resourceIndexAction:
          "h-auto min-h-[var(--ds-button-resource-index-height)] whitespace-normal rounded-[var(--ds-button-resource-index-radius)] px-[var(--ds-button-resource-index-padding-inline)] py-[var(--ds-button-resource-index-padding-block)] [font-family:var(--ds-font-display)] text-[length:var(--ds-button-resource-index-font-size)] leading-[1.2] font-[var(--ds-button-resource-index-font-weight)] transition-[background,border-color,color] duration-150",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    compoundVariants: [
      {
        variant: "productHeroPrimary",
        size: "productHero",
        className: "leading-none",
      },
      {
        variant: "productHeroSecondary",
        size: "productHero",
        className: "leading-[1.25]",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
