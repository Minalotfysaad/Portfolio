"use client";

import React, { useState } from "react";
import { stackLayers } from "@/data/skills";
import { cn } from "@/lib/utils";
import { ArrowDown, Check, Layers, Sparkles } from "lucide-react";

export const BackendStackFlow: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string | null>("application");

  return (
    <div className="mt-20 pt-16 border-t border-border/70">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/30 bg-accent/10 text-accent-light mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            LAYERED INTEGRATION
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            THE .NET BACKEND STACK FLOW
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-secondary font-mono max-w-md">
          How technology components interact seamlessly through Clean Architecture layers.
        </p>
      </div>

      {/* Interactive Stack Flow Container */}
      <div className="bg-[#111114] border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="space-y-4">
          {stackLayers.map((layer, index) => {
            const isSelected = activeLayerId === layer.id;

            return (
              <React.Fragment key={layer.id}>
                <div
                  onClick={() => setActiveLayerId(isSelected ? null : layer.id)}
                  className={cn(
                    "cursor-pointer rounded-xl p-4 sm:p-5 border transition-all duration-200",
                    isSelected
                      ? "bg-surface border-accent shadow-glow-card"
                      : "bg-[#151519] border-border hover:border-border-light hover:bg-[#18181D]"
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs border"
                        style={{
                          borderColor: `${layer.color}40`,
                          backgroundColor: `${layer.color}15`,
                          color: layer.color,
                        }}
                      >
                        0{index + 1}
                      </div>

                      <div>
                        <h4 className="font-mono text-xs sm:text-sm font-bold text-foreground tracking-tight">
                          {layer.title}
                        </h4>
                        <p className="font-mono text-[11px] text-muted">
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {layer.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] sm:text-xs px-2 py-0.5 rounded bg-background/80 border border-border text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-border/60 text-xs sm:text-sm text-secondary font-sans leading-relaxed animate-fadeIn">
                      {layer.description}
                    </div>
                  )}
                </div>

                {index < stackLayers.length - 1 && (
                  <div className="flex justify-center -my-2 z-10">
                    <div className="flex items-center gap-1 text-muted/60">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
