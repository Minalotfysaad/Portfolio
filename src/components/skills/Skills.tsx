"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackendStackFlow } from "./BackendStackFlow";
import { Server, Database, Layers, Shield, Sparkles, Wrench, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIconMap: Record<string, any> = {
  backend: Server,
  databases: Database,
  architecture: Layers,
  security: Shield,
  libraries: Sparkles,
  tools: Wrench,
};

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    description: string;
    category: string;
  } | null>(null);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#09090B]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="TECHNICAL ARSENAL"
          title="SKILLS & ARCHITECTURAL TOOLKIT"
          subtitle="A comprehensive overview of core technologies, database engines, security protocols, and engineering patterns."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = categoryIconMap[category.id] || Server;

            return (
              <div
                key={category.id}
                className="bg-[#111114] border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
              >
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

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkill?.name === skill.name;

                      return (
                        <button
                          key={skill.name}
                          onClick={() =>
                            setSelectedSkill(
                              isSelected
                                ? null
                                : {
                                    name: skill.name,
                                    description: skill.description,
                                    category: skill.category,
                                  }
                            )
                          }
                          className={cn(
                            "px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 border text-left flex items-center gap-1.5",
                            skill.highlight
                              ? "bg-surface text-foreground border-border hover:border-accent hover:text-accent-light"
                              : "bg-[#141417] text-secondary border-border/80 hover:text-foreground hover:border-border",
                            isSelected && "border-accent bg-accent/15 text-accent-light shadow-sm"
                          )}
                        >
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          )}
                          <span>{skill.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Micro Hint */}
                <div className="pt-3 border-t border-border/40 flex items-center gap-1.5 text-[10px] font-mono text-muted">
                  <Info className="w-3 h-3 text-muted" />
                  <span>Click any skill to view technical role</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Information Drawer (if clicked) */}
        {selectedSkill && (
          <div className="mt-8 p-5 sm:p-6 rounded-xl bg-accent/10 border border-accent/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-accent/20 text-accent-light border border-accent/40">
                  {selectedSkill.category}
                </span>
                <h4 className="font-mono text-sm sm:text-base font-bold text-foreground">
                  {selectedSkill.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className="self-start sm:self-center font-mono text-xs text-muted hover:text-foreground px-3 py-1 rounded bg-surface border border-border shrink-0"
            >
              Close Info
            </button>
          </div>
        )}

        {/* Layered Flow Diagram */}
        <BackendStackFlow />
      </div>
    </section>
  );
};
