import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
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
