import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-[#050608] font-semibold tracking-wider shadow-[0_2px_16px_rgba(0,242,254,0.2)] hover:shadow-[0_2px_24px_rgba(0,242,254,0.35)] hover:bg-[#22f4ff]",
        secondary:
          "bg-surface-elevated text-foreground border border-white/10 hover:border-white/20 hover:bg-surface-elevated/80",
        outline:
          "border border-white/15 bg-transparent text-foreground/90 hover:text-foreground hover:bg-white/[0.04] hover:border-white/30",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]",
        link:
          "text-primary underline-offset-4 hover:underline",
        glass:
          "bg-surface-elevated/80 backdrop-blur-md border border-white/10 text-foreground hover:border-white/25",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-full",
        sm: "h-9 px-4 rounded-full text-xs",
        lg: "h-12 px-7 rounded-full text-sm",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
