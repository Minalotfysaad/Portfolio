"use client";

import React, { useState } from "react";
import { professionalExperience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Briefcase,
  Calendar,
  MapPin,
  Code2,
  Database,
  ShieldCheck,
  CheckCircle2,
  TestTube2,
  GitBranch,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap: Record<string, any> = {
  Code2,
  Database,
  ShieldCheck,
  CheckCircle2,
  TestTube2,
  GitBranch,
};

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export const Experience: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const exp = professionalExperience[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#0C0C0E]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <ScrollReveal direction="up" distance={24} duration={500}>
          <SectionHeading
            badge="EXPERIENCE"
            title="PROFESSIONAL EXPERIENCE"
            subtitle="Hands-on backend development in a collaborative engineering environment."
          />
        </ScrollReveal>

        {/* Main Experience Timeline / Card Container */}
        <div className="relative max-w-5xl mx-auto">
          <ScrollReveal direction="up" distance={30} duration={600}>
            <div className="relative bg-[#111114] border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:border-accent/40 hover:shadow-glow-card transition-all duration-300 group overflow-hidden">
              {/* Ambient subtle glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              {/* Header / Company & Role Info (Clickable) */}
              <div
                onClick={() => setIsExpanded((prev) => !prev)}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/70 cursor-pointer group/header select-none"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent-light font-mono text-xs mb-3">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.role}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-sans tracking-tight group-hover/header:text-accent-light transition-colors">
                    {exp.company}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 font-mono text-xs text-secondary">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-muted" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="text-border">•</span>
                    <div className="flex items-center gap-1.5 text-accent-light font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded((prev) => !prev);
                    }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all border",
                      isExpanded
                        ? "bg-accent/15 border-accent text-accent-light"
                        : "bg-surface hover:bg-surface-light border-border text-foreground hover:border-accent/40"
                    )}
                  >
                    <span>{isExpanded ? "HIDE CONTRIBUTIONS" : "VIEW CONTRIBUTIONS"}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isExpanded && "rotate-180 text-accent-light"
                      )}
                    />
                  </button>
                </div>
              </div>

              {/* Short Introduction Summary (Also Clickable) */}
              <div
                onClick={() => setIsExpanded((prev) => !prev)}
                className="py-5 cursor-pointer select-none"
              >
                <p className="text-sm sm:text-base text-secondary font-sans leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              {/* Expandable Section: Key Contributions & Tech Tags */}
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100 pt-6 border-t border-border/70"
                    : "grid-rows-[0fr] opacity-0 pt-0 border-t-0"
                )}
              >
                <div className="overflow-hidden min-h-0">
                  {/* Key Contributions - 6 structured points */}
                  <div>
                    <h4 className="font-mono text-xs font-bold text-accent-light uppercase tracking-wider mb-5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Key Contributions & Engineering Practices
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      {exp.contributions.map((item, idx) => {
                        const Icon = (item.iconName && iconMap[item.iconName]) || Code2;

                        return (
                          <div
                            key={idx}
                            className="p-4 sm:p-5 rounded-xl bg-surface/40 border border-border/70 hover:border-accent/30 hover:bg-surface/70 transition-all flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center gap-2.5 mb-2">
                                <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light shrink-0">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <h5 className="font-mono text-xs sm:text-sm font-bold text-foreground tracking-tight">
                                  {item.category}
                                </h5>
                              </div>
                              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                                {renderFormattedText(item.text)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Compact Technology Tags */}
                  <div className="pt-6 mt-6 border-t border-border/70 flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="font-mono text-xs text-muted font-bold uppercase tracking-wider shrink-0">
                      Technologies Used:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-surface border border-border text-foreground hover:border-accent/40 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
