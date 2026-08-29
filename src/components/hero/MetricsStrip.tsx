import React from "react";
import { quickMetrics } from "@/data/personal";
import { cn } from "@/lib/utils";

export const MetricsStrip: React.FC = () => {
  return (
    <section className="relative border-y border-border/70 bg-[#0C0C0E] py-8 z-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {quickMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={cn(
                "flex flex-col items-start p-3 sm:p-4 rounded-xl border border-transparent hover:border-border/60 hover:bg-surface/30 transition-all",
                idx !== 0 && "md:border-l md:border-border/60 md:pl-8 rounded-none"
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
              <span className="font-mono text-xs font-semibold text-foreground tracking-wider uppercase mb-0.5">
                {metric.label}
              </span>
              <span className="text-[11px] text-muted font-sans leading-tight">
                {metric.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
