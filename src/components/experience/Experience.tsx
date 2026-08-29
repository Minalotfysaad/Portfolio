"use client";

import React from "react";
import { professionalExperience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, Calendar, MapPin, Code2, Database, Shield, Layers, Users, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIconMap: Record<string, any> = {
  "API DEVELOPMENT": Code2,
  "DATABASES & DATA ACCESS": Database,
  "SECURITY & ACCESS CONTROL": Shield,
  "ARCHITECTURE & DESIGN": Layers,
  "COLLABORATION & CI/CD": Users,
  "DOCUMENTATION & TESTING": FileText,
};

export const Experience: React.FC = () => {
  const exp = professionalExperience[0]; // Vetanoia Solutions

  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#0C0C0E]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="EXPERIENCE"
          title="PROFESSIONAL BACKGROUND"
          subtitle="Professional experience building production-style backend systems and RESTful APIs."
        />

        {/* Main Experience Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="relative bg-[#111114] border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header / Company & Role Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-border gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent-light font-mono text-xs mb-3">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{exp.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-sans tracking-tight">
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
            </div>

            {/* Responsibilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exp.categories.map((category) => {
                const Icon = categoryIconMap[category.title] || Code2;

                return (
                  <div
                    key={category.title}
                    className="p-5 sm:p-6 rounded-xl bg-surface/50 border border-border/80 hover:border-accent/30 hover:bg-surface transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-mono text-xs sm:text-sm font-bold text-foreground tracking-tight">
                            {category.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-xs font-mono text-muted mb-4">
                        {category.description}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-6">
                        {category.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/80 shrink-0 mt-2" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                      {category.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-background border border-border text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
