import React from "react";
import { engineeringPillars } from "@/data/personal";
import { Layers, ShieldCheck, Zap, GitBranch } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap: Record<string, any> = {
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  GitBranch: GitBranch,
};

export const EngineeringPhilosophy: React.FC = () => {
  return (
    <div className="mt-20 pt-16 border-t border-border/70">
      <ScrollReveal direction="up" distance={20} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              HOW I BUILD
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-secondary font-mono max-w-lg">
            Practical engineering principles I apply when designing and building backend systems.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {engineeringPillars.map((pillar, idx) => {
          const Icon = iconMap[pillar.iconName] || Layers;

          return (
            <ScrollReveal key={pillar.number} delay={idx * 100} distance={24} duration={550}>
              <div className="group relative bg-[#111114] hover:bg-[#15151A] border border-border hover:border-accent/40 rounded-xl p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-glow-card flex flex-col justify-between h-full">
                <div>
                  {/* Header with Pillar number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-accent/60 group-hover:text-accent-light transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-surface border border-border group-hover:border-accent/40 flex items-center justify-center text-accent-light transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-foreground font-mono tracking-tight mb-2.5 group-hover:text-accent-light transition-colors">
                    {pillar.title}
                  </h4>

                  {/* Concise Explanation */}
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};
