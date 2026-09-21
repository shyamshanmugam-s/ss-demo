import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow",
        secondary:
          "border-white/10 bg-surface-elevated text-foreground/90",
        outline:
          "border-white/15 text-foreground/80",
        cyan:
          "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan shadow-[0_0_12px_rgba(0,242,254,0.15)]",
        violet:
          "border-accent-violet/30 bg-accent-violet/10 text-[#d8b4fe] shadow-[0_0_12px_rgba(121,40,202,0.15)]",
        status:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 gap-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
