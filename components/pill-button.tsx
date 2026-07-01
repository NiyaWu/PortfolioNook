import { Slot } from "@radix-ui/react-slot"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

// Shared pill button for primary CTAs across the site.
// variant "solid" = filled brand blue; "outline" = bordered.
// Pass asChild to render a Next <Link> (or any element) with the same styling.
const VARIANTS = {
  solid: "bg-[#0071e3] text-white shadow-sm hover:opacity-90 hover:shadow-md",
  outline: "border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5",
} as const

export function PillButton({
  className,
  variant = "solid",
  asChild = false,
  ...props
}: ComponentProps<"button"> & { asChild?: boolean; variant?: keyof typeof VARIANTS }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all md:px-6 md:py-3 md:text-base",
        VARIANTS[variant],
        className,
      )}
      {...props}
    />
  )
}
