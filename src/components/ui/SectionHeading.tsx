import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "space-y-3 mb-12 sm:mb-16",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/30 bg-accent/10 text-accent-light",
          align === "center" && "mx-auto"
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        {badge}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-secondary leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
