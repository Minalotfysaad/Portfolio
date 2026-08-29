import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "secondary" | "emerald" | "violet" | "cyan";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "sm",
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-surface text-secondary border-border hover:border-border-light",
    outline: "border-border text-muted hover:text-foreground hover:border-secondary",
    accent: "bg-accent/10 text-accent-light border-accent/30 hover:bg-accent/20",
    secondary: "bg-elevated text-foreground border-border",
    emerald: "bg-emerald-accent/10 text-emerald-accent border-emerald-accent/30",
    violet: "bg-violet-accent/10 text-violet-light border-violet-accent/30",
    cyan: "bg-cyan-accent/10 text-cyan-accent border-cyan-accent/30",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md font-mono border transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
