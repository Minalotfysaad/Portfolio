import React from "react";
import { quickMetrics } from "@/data/personal";
import { cn } from "@/lib/utils";

export const MetricsStrip: React.FC = () => {
  return (
    <section className="relative border-y border-border/80 bg-[#0C0C0F] py-7 z-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {quickMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={cn(
                "flex flex-col items-start p-2 sm:p-3 rounded-xl transition-all",
                idx !== 0 && "md:border-l md:border-border/60 md:pl-6"
              )}
            >
              <div className="flex items-baseline gap-1.5 mb-1">
                <span
                  className={cn(
                    "text-2xl sm:text-3xl font-extrabold font-mono tracking-tight",
                    metric.highlight ? "text-accent-light" : "text-foreground"
                  )}
                >
                  {metric.value}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-foreground tracking-wider uppercase mb-1">
                {metric.label}
              </span>
              <span className="text-[11px] text-secondary font-sans leading-tight">
                {metric.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
