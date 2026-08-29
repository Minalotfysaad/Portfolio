import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      isLoading = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-accent text-white hover:bg-accent-hover shadow-glow-accent hover:shadow-glow-accent/80 border border-blue-400/30",
      secondary:
        "bg-surface text-foreground hover:bg-surface-light border border-border hover:border-border-light shadow-sm",
      outline:
        "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent-light hover:bg-accent/5",
      ghost:
        "bg-transparent text-secondary hover:text-foreground hover:bg-surface border border-transparent",
      link:
        "bg-transparent text-accent-light hover:text-accent underline-offset-4 hover:underline p-0 h-auto border-0",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-lg gap-2",
      lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-medium",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variantStyles[variant],
          variant !== "link" && sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
