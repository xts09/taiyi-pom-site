import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "./field-control.module.css"

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      className={cn(styles.control, className)}
      {...props}
    />
  )
}

export { Input }
