import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-600/10 border border-violet-500/20",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-zinc-200 bg-transparent hover:bg-zinc-50 hover:text-zinc-900 text-zinc-700",
  secondary: "bg-zinc-100 text-zinc-800 hover:bg-zinc-200/80 border border-zinc-200/50",
  ghost: "hover:bg-zinc-100 hover:text-zinc-900 text-zinc-500",
  link: "text-violet-600 underline-offset-4 hover:underline",
}

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const sizeClasses = {
    default: "h-10 px-4 py-2 text-sm rounded-xl",
    sm: "h-9 px-3 text-xs rounded-lg",
    lg: "h-11 px-8 text-sm rounded-xl",
    icon: "h-10 w-10 rounded-xl",
  }
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95 duration-200",
        buttonVariants[variant],
        sizeClasses[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
