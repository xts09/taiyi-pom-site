import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "./field-control.module.css"

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      data-slot="select"
      className={cn(styles.control, styles.select, className)}
      {...props}
    />
  )
}

export { Select }
