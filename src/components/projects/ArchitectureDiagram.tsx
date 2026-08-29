"use client";

import React, { useState } from "react";
import { ArchitectureNode } from "@/types";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowDown, Info } from "lucide-react";

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  title?: string;
  className?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes,
  title = "SYSTEM ARCHITECTURE & DATA FLOW",
  className,
}) => {
  const [activeNode, setActiveNode] = useState<ArchitectureNode | null>(nodes[1] || nodes[0]);

  return (
    <div className={cn("bg-[#0E0E12] border border-border/80 rounded-xl p-5 sm:p-6", className)}>
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h4 className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
            {title}
          </h4>
        </div>
        <span className="font-mono text-[10px] text-muted hidden sm:inline">
          INTERACTIVE NODE TOPOLOGY
        </span>
      </div>

      {/* Horizontal Flow on Large screens / Responsive grid on Mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-5">
        {nodes.map((node, index) => {
          const isSelected = activeNode?.id === node.id;

          return (
            <div
              key={node.id}
              onClick={() => setActiveNode(node)}
              className={cn(
                "cursor-pointer rounded-lg p-2.5 sm:p-3 border transition-all duration-200 text-left flex flex-col justify-between",
                isSelected
                  ? "bg-surface border-accent shadow-sm scale-[1.02]"
                  : "bg-[#141418] border-border/60 hover:border-border-light hover:bg-[#18181F]"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="font-mono text-[9px] sm:text-[10px] font-bold px-1.5 py-0.2 rounded"
                    style={{
                      backgroundColor: `${node.color || "#3B82F6"}20`,
                      color: node.color || "#3B82F6",
                    }}
                  >
                    0{index + 1}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  )}
                </div>

                <h5 className="font-mono text-[11px] sm:text-xs font-bold text-foreground leading-tight mb-0.5 truncate">
                  {node.name}
                </h5>
                <span className="font-mono text-[9px] sm:text-[10px] text-muted block truncate">
                  {node.role}
                </span>
              </div>

              <div className="mt-2 pt-1.5 border-t border-border/40 flex flex-wrap gap-1">
                {node.tech.slice(0, 1).map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono text-secondary truncate max-w-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      {activeNode && (
        <div className="p-4 rounded-lg bg-surface/80 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-mono text-xs font-bold"
                style={{ color: activeNode.color || "#3B82F6" }}
              >
                {activeNode.name}
              </span>
              <span className="text-border">•</span>
              <span className="font-mono text-xs text-muted">
                {activeNode.role}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
              {activeNode.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            {activeNode.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] px-2 py-0.5 rounded bg-background border border-border text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
