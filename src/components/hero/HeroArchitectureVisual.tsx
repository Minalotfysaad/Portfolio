"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Server, Database, Shield, Cpu, Layers, Radio, ArrowDown, Activity } from "lucide-react";

interface VisualLayer {
  id: string;
  name: string;
  sub: string;
  detail: string;
  icon: any;
  color: string;
  borderColor: string;
  bgGlow: string;
  tags: string[];
}

const layers: VisualLayer[] = [
  {
    id: "client",
    name: "CLIENT INGESTION",
    sub: "HTTP/REST • JSON • JWT Bearer",
    detail: "Stateless HTTPS requests carrying Authorization tokens & payload models.",
    icon: Radio,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgGlow: "rgba(6, 182, 212, 0.08)",
    tags: ["REST", "Bearer Token", "CORS"],
  },
  {
    id: "api",
    name: "ASP.NET CORE 9 / WEB API",
    sub: "Controllers • Middlewares • Swagger",
    detail: "Routing, model binding, centralized exception middleware, and JWT validation.",
    icon: Server,
    color: "text-blue-400",
    borderColor: "border-blue-500/40",
    bgGlow: "rgba(59, 130, 246, 0.12)",
    tags: ["Exception Middleware", "Routing", "Swagger"],
  },
  {
    id: "application",
    name: "APPLICATION LAYER",
    sub: "Use Cases • FluentValidation • AutoMapper",
    detail: "Orchestrates business workflows, DTO mappings, and request validation rules.",
    icon: Cpu,
    color: "text-indigo-400",
    borderColor: "border-indigo-500/30",
    bgGlow: "rgba(99, 102, 241, 0.08)",
    tags: ["FluentValidation", "AutoMapper", "DTOs"],
  },
  {
    id: "domain",
    name: "DOMAIN CORE",
    sub: "Entities • Value Objects • Repository Interfaces",
    detail: "Pure decoupled business entities and invariant rules without external dependencies.",
    icon: Layers,
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgGlow: "rgba(168, 85, 247, 0.08)",
    tags: ["Entities", "SOLID", "Interfaces"],
  },
  {
    id: "infrastructure",
    name: "INFRASTRUCTURE & PERSISTENCE",
    sub: "EF Core 9 • SQL Server • Redis Cache",
    detail: "Unit of Work atomic commits, non-tracking queries, and in-memory cache.",
    icon: Database,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/40",
    bgGlow: "rgba(16, 185, 129, 0.12)",
    tags: ["Unit of Work", "SQL Server", "Redis"],
  },
];

export const HeroArchitectureVisual: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-accent/15 via-indigo-600/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative bg-[#0E0E11] border border-border/80 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60 font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-secondary text-[11px]">backend_pipeline.arch</span>
          </div>
          <div className="flex items-center gap-1.5 text-accent-light">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span className="text-[10px] tracking-wider uppercase font-semibold">Clean Architecture</span>
          </div>
        </div>

        {/* Vertical Pipeline Nodes */}
        <div className="flex flex-col gap-2.5 relative">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const isHovered = activeLayer === layer.id;

            return (
              <React.Fragment key={layer.id}>
                {/* Node Card */}
                <div
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={cn(
                    "relative group cursor-pointer rounded-xl p-3 sm:p-3.5 border transition-all duration-200",
                    isHovered
                      ? `${layer.borderColor} bg-surface shadow-glow-card scale-[1.01]`
                      : "border-border/60 bg-[#121215]/80 hover:border-border-light hover:bg-[#16161A]"
                  )}
                  style={{
                    backgroundColor: isHovered ? layer.bgGlow : undefined,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border transition-colors shrink-0",
                          isHovered
                            ? `${layer.borderColor} bg-surface`
                            : "border-border/60 bg-surface/50"
                        )}
                      >
                        <Icon className={cn("w-4 h-4 sm:w-4.5 sm:h-4.5 transition-colors", layer.color)} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-mono text-xs sm:text-sm font-bold text-foreground tracking-tight">
                            {layer.name}
                          </h4>
                          {index === 1 && (
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold bg-accent/20 text-accent-light border border-accent/40">
                              CORE
                            </span>
                          )}
                        </div>
                        <p className="font-mono text-[10px] sm:text-[11px] text-muted group-hover:text-secondary transition-colors">
                          {layer.sub}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 shrink-0 mt-0.5">
                      {layer.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface/80 border border-border/60 text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded description on hover */}
                  {isHovered && (
                    <div className="mt-2.5 pt-2.5 border-t border-border/40 text-[11px] text-secondary font-sans leading-relaxed animate-fadeIn">
                      {layer.detail}
                    </div>
                  )}
                </div>

                {/* Animated Connecting Arrow */}
                {index < layers.length - 1 && (
                  <div className="flex items-center justify-center my-[-4px] z-10">
                    <div className="flex items-center gap-1 text-muted/60">
                      <span className="w-1 h-1 rounded-full bg-accent/60 animate-ping" />
                      <ArrowDown className="w-3.5 h-3.5 text-muted/80" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Footer Technical Metadata */}
        <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-muted">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>PIPELINE: ACTIVE</span>
          </div>
          <span className="text-secondary">SOLID • REPOSITORY • UNIT OF WORK</span>
        </div>
      </div>
    </div>
  );
};
