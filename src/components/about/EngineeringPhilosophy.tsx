import React from "react";
import { engineeringPillars } from "@/data/personal";
import { Layers, ShieldCheck, Zap, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  GitBranch: GitBranch,
};

export const EngineeringPhilosophy: React.FC = () => {
  return (
    <div className="mt-20 pt-16 border-t border-border/70">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/30 bg-accent/10 text-accent-light mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            ENGINEERING PRINCIPLES
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            HOW I BUILD
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-secondary font-mono max-w-md">
          Core engineering standards applied across every API, database model, and backend service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {engineeringPillars.map((pillar) => {
          const Icon = iconMap[pillar.iconName] || Layers;

          return (
            <div
              key={pillar.number}
              className="group relative bg-[#111114] hover:bg-[#15151A] border border-border hover:border-accent/40 rounded-xl p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-glow-card flex flex-col justify-between"
            >
              <div>
                {/* Header with Pillar number and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-black text-accent/60 group-hover:text-accent-light transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface border border-border group-hover:border-accent/40 flex items-center justify-center text-accent-light transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-foreground font-mono tracking-tight mb-2 group-hover:text-accent-light transition-colors">
                  {pillar.title}
                </h4>

                {/* Quote */}
                <p className="text-xs sm:text-sm font-mono italic text-secondary/90 mb-3 border-l-2 border-accent/40 pl-3">
                  &ldquo;{pillar.quote}&rdquo;
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Keywords Tag Strip */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                {pillar.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface/70 border border-border/70 text-muted group-hover:text-secondary group-hover:border-border transition-colors"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
