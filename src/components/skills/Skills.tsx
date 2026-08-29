"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Server, Database, Layers, Shield, Sparkles, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categoryIconMap: Record<string, any> = {
  backend: Server,
  databases: Database,
  architecture: Layers,
  security: Shield,
  libraries: Sparkles,
  tools: Wrench,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#09090B]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <ScrollReveal direction="up" distance={24} duration={500}>
          <SectionHeading
            badge="TECHNICAL ARSENAL"
            title="SKILLS & ARCHITECTURAL TOOLKIT"
            subtitle="A comprehensive overview of core technologies, database engines, security protocols, and engineering patterns."
          />
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = categoryIconMap[category.id] || Server;

            return (
              <ScrollReveal key={category.id} delay={catIdx * 60} distance={24} duration={550}>
                <div className="bg-[#111114] border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-glow-card transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-accent-light">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                            CATEGORY 0{catIdx + 1}
                          </span>
                          <h3 className="font-mono text-sm font-bold text-foreground">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs font-mono text-secondary mb-5 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={cn(
                            "px-3 py-1.5 rounded-lg font-mono text-xs border flex items-center gap-1.5",
                            skill.highlight
                              ? "bg-surface text-foreground border-border"
                              : "bg-[#141417] text-secondary border-border/80"
                          )}
                        >
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};


