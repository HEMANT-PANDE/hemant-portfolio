import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variantClasses = {
    default: "border-transparent bg-violet-50 text-violet-600 border border-violet-100",
    secondary: "border-transparent bg-zinc-100 text-zinc-600 border border-zinc-200/40",
    outline: "text-zinc-500 border border-zinc-200",
    success: "border-transparent bg-emerald-50 text-emerald-600 border border-emerald-100"
  }
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors duration-200 select-none",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
