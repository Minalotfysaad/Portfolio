import React from "react";
import { educationData } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Languages } from "./Languages";
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { cn } from "@/lib/utils";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative bg-[#09090B]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <ScrollReveal direction="up" distance={24} duration={500}>
          <SectionHeading
            badge="ACADEMIC & PROFESSIONAL BACKGROUND"
            title="EDUCATION & FORMATION"
            subtitle="Formal engineering education and intensive full-stack .NET professional development."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <ScrollReveal key={edu.degree} delay={idx * 100} distance={24} duration={550}>
              <div
                className={cn(
                  "p-6 sm:p-8 rounded-2xl bg-[#111114] border border-border hover:border-accent/40 hover:shadow-glow-card transition-all duration-300 flex flex-col justify-between shadow-xl h-full",
                  edu.isHighlighted && "border-accent/30 bg-gradient-to-b from-[#131318] to-[#101014]"
                )}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-accent-light shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-muted block uppercase tracking-wider">
                          {edu.period}
                        </span>
                        <h3 className="font-mono text-base sm:text-lg font-bold text-foreground">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>

                    {edu.badge && (
                      <span
                        className={cn(
                          "px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase shrink-0 border",
                          edu.isHighlighted
                            ? "bg-accent/15 text-accent-light border-accent/30"
                            : "bg-surface/80 text-secondary border-border/80"
                        )}
                      >
                        {edu.badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    {edu.field && (
                      <p className="font-mono text-sm text-accent-light font-medium">
                        {edu.field}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-secondary font-sans mt-0.5">
                      {edu.institution}
                      {edu.location && ` • ${edu.location}`}
                    </p>
                  </div>

                  {/* Concise Description */}
                  {edu.description && (
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans mb-4">
                      {edu.description}
                    </p>
                  )}

                  {/* Highlights list if present */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="space-y-2.5 mb-4">
                      {edu.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary leading-relaxed font-sans"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-light shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Languages Section */}
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" distance={20} delay={150} duration={500}>
            <Languages />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
