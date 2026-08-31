import React from "react";
import { quickMetrics } from "@/data/personal";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const MetricsStrip: React.FC = () => {
  return (
    <section className="relative border-y border-border/80 bg-[#0C0C0F] py-6 sm:py-7 z-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-4">
          {quickMetrics.map((metric, idx) => (
            <ScrollReveal key={metric.label} delay={idx * 80} distance={16} duration={500}>
              <div
                className={cn(
                  "flex flex-col items-start p-2 sm:p-3 rounded-xl transition-all min-w-0 overflow-hidden",
                  idx !== 0 && "md:border-l md:border-border/60 md:pl-6"
                )}
              >
                <div className="flex items-baseline gap-1.5 mb-1 max-w-full">
                  <span
                    className={cn(
                      "font-extrabold font-mono tracking-tight break-words",
                      metric.value.length > 12
                        ? "text-sm sm:text-lg md:text-base lg:text-xl xl:text-2xl"
                        : metric.value.length > 6
                        ? "text-lg sm:text-2xl lg:text-3xl"
                        : "text-2xl sm:text-3xl",
                      metric.highlight ? "text-accent-light" : "text-foreground"
                    )}
                  >
                    {metric.value}
                  </span>
                </div>
                <span className="font-mono text-[11px] sm:text-xs font-bold text-foreground tracking-wider uppercase mb-1 leading-tight break-words">
                  {metric.label}
                </span>
                <span className="text-[10px] sm:text-[11px] text-secondary font-sans leading-tight">
                  {metric.sublabel}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
