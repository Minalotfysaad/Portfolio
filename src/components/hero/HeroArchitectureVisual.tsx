"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Server,
  Database,
  Cpu,
  Layers,
  Radio,
  ArrowDown,
  CheckCircle2,
  Play,
  RotateCw,
} from "lucide-react";

interface PipelineStep {
  id: string;
  number: string;
  name: string;
  sub: string;
  layer: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  details: {
    role: string;
    tech: string[];
    operations: string[];
  };
}

const pipelineSteps: PipelineStep[] = [
  {
    id: "client",
    number: "01",
    name: "CLIENT REQUEST",
    sub: "HTTPS • JSON • Request Context",
    layer: "Ingestion Stage",
    icon: Radio,
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.08)",
    borderColor: "border-cyan-500/40",
    details: {
      role: "Client Ingestion & Protocol Negotiation",
      tech: ["HTTP/2", "TLS", "REST Protocol"],
      operations: [
        "Transmits structured JSON requests securely",
        "Enforces strict CORS policy & request headers",
        "Parses routing context for pipeline dispatching",
      ],
    },
  },
  {
    id: "webapi",
    number: "02",
    name: "ASP.NET CORE WEB API",
    sub: "Controllers • Middlewares • Routing",
    layer: "Presentation Stage",
    icon: Server,
    color: "#3B82F6",
    bgColor: "rgba(59, 130, 246, 0.12)",
    borderColor: "border-blue-500/40",
    details: {
      role: "Route Dispatching & Pipeline Middlewares",
      tech: ["ASP.NET Core", "Middleware Pipeline", "Model Binding"],
      operations: [
        "Dispatches requests to strongly-typed endpoints",
        "Binds model attributes and request context",
        "Catches unhandled errors via centralized middleware",
      ],
    },
  },
  {
    id: "application",
    number: "03",
    name: "APPLICATION SERVICES",
    sub: "Workflows • Validation • DTOs",
    layer: "Application Stage",
    icon: Cpu,
    color: "#6366F1",
    bgColor: "rgba(99, 102, 241, 0.08)",
    borderColor: "border-indigo-500/40",
    details: {
      role: "Business Workflow Orchestration",
      tech: ["Application Logic", "DTO Mapping", "Validation Pipeline"],
      operations: [
        "Executes input validation and business rules",
        "Transforms request DTOs into domain structures",
        "Coordinates data operations and business results",
      ],
    },
  },
  {
    id: "domain",
    number: "04",
    name: "DOMAIN CORE",
    sub: "Entities • Business Rules • Invariants",
    layer: "Domain Stage",
    icon: Layers,
    color: "#A855F7",
    bgColor: "rgba(168, 85, 247, 0.08)",
    borderColor: "border-purple-500/40",
    details: {
      role: "Enterprise Business Invariants",
      tech: ["Pure C#", "Domain Entities", "Business Rules"],
      operations: [
        "Enforces core domain rules and data integrity",
        "Calculates business computations and state changes",
        "Remains fully decoupled from database & web frameworks",
      ],
    },
  },
  {
    id: "infrastructure",
    number: "05",
    name: "DATA ACCESS & PERSISTENCE",
    sub: "EF Core • SQL Server Database",
    layer: "Persistence Stage",
    icon: Database,
    color: "#10B981",
    bgColor: "rgba(16, 185, 129, 0.12)",
    borderColor: "border-emerald-500/40",
    details: {
      role: "Data Persistence & Transaction Integrity",
      tech: ["EF Core", "SQL Server", "Relational Database"],
      operations: [
        "Executes atomic asynchronous database operations",
        "Executes optimized queries against SQL Server",
        "Maintains transactional data consistency and integrity",
      ],
    },
  },
];

export const HeroArchitectureVisual: React.FC = () => {
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const selectedStep = selectedStepId ? pipelineSteps.find((s) => s.id === selectedStepId) : null;

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let current = 0;

    const interval = setInterval(() => {
      if (current < pipelineSteps.length) {
        setActiveStepIndex(current);
        setSelectedStepId(pipelineSteps[current].id);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setActiveStepIndex(null);
          setSelectedStepId(null);
          setIsSimulating(false);
        }, 400);
      }
    }, 400);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient lighting */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-accent/15 via-indigo-600/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Console Box */}
      <div className="relative bg-[#0D0D11] border border-border rounded-2xl p-4 sm:p-5 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Console Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/70 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-secondary text-[11px] font-semibold">
              backend_pipeline.flow
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className={cn(
                "flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold transition-all border",
                isSimulating
                  ? "bg-accent/20 border-accent text-accent-light"
                  : "bg-surface hover:bg-surface-light border-border text-secondary hover:text-foreground"
              )}
              title="Simulate HTTP Request Execution"
            >
              {isSimulating ? (
                <>
                  <RotateCw className="w-3 h-3 animate-spin text-accent-light" />
                  <span>TRACING...</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-accent-light" />
                  <span>RUN TRACE</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Vertical Pipeline Steps */}
        <div className="space-y-1.5 relative">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStepId === step.id;
            const isTraced = activeStepIndex === idx;

            return (
              <React.Fragment key={step.id}>
                <div
                  onClick={() =>
                    setSelectedStepId((prev) => (prev === step.id ? null : step.id))
                  }
                  className={cn(
                    "group relative cursor-pointer rounded-xl p-2.5 sm:p-3 border transition-all duration-200",
                    isTraced
                      ? "border-accent bg-accent/20 shadow-glow-accent scale-[1.015]"
                      : isSelected
                      ? `${step.borderColor} bg-surface shadow-sm`
                      : "border-border/60 bg-[#121216]/80 hover:border-border-light hover:bg-[#15151A]"
                  )}
                  style={{
                    backgroundColor: isSelected && !isTraced ? step.bgColor : undefined,
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs border shrink-0 transition-colors"
                        style={{
                          borderColor: `${step.color}50`,
                          backgroundColor: `${step.color}15`,
                          color: step.color,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-muted font-bold">
                            {step.number}
                          </span>
                          <h4 className="font-mono text-xs sm:text-sm font-bold text-foreground tracking-tight group-hover:text-accent-light transition-colors">
                            {step.name}
                          </h4>
                        </div>
                        <p className="font-mono text-[10px] text-muted">
                          {step.sub}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="flex items-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Animated Arrow between nodes */}
                {idx < pipelineSteps.length - 1 && (
                  <div className="flex items-center justify-center -my-1 z-10">
                    <ArrowDown className="w-3.5 h-3.5 text-muted/40" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Layer Inspector Details Drawer */}
        <div className="mt-3 border-t border-border/60 bg-[#0F0F14] rounded-xl border border-border/50 overflow-hidden transition-all duration-300 ease-out">
          {/* Default Unselected State: Explore prompt */}
          <div
            className={cn(
              "transition-all duration-200 overflow-hidden",
              selectedStep
                ? "max-h-0 opacity-0 py-0 pointer-events-none"
                : "max-h-12 opacity-100 py-2 px-3"
            )}
          >
            <div className="text-center font-mono text-xs text-muted flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Explore the request pipeline</span>
            </div>
          </div>

          {/* Expanded Selected State: Stage Details with smooth expand animation */}
          <div
            className={cn(
              "grid transition-all duration-300 ease-out",
              selectedStep
                ? "grid-rows-[1fr] opacity-100 p-3"
                : "grid-rows-[0fr] opacity-0 p-0"
            )}
          >
            <div className="overflow-hidden min-h-0">
              {selectedStep && (
                <div className="animate-fadeIn">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: selectedStep.color }}
                      />
                      <span className="font-mono text-xs font-bold text-foreground">
                        {selectedStep.layer} Inspector
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-muted">
                      Stage {selectedStep.number} of 05
                    </span>
                  </div>

                  <p className="text-xs text-secondary font-sans mb-2 leading-relaxed">
                    {selectedStep.details.role}
                  </p>

                  <div className="space-y-1 mb-2.5">
                    {selectedStep.details.operations.map((op, oIdx) => (
                      <div
                        key={oIdx}
                        className="flex items-start gap-1.5 text-[11px] text-secondary font-sans"
                      >
                        <CheckCircle2 className="w-3 h-3 text-accent-light shrink-0 mt-0.5" />
                        <span className="leading-tight">{op}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/40">
                    {selectedStep.details.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-border text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pipeline Telemetry Footer */}
        <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-muted pt-2 border-t border-border/40">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>REQUEST PIPELINE</span>
          </div>
          <span className="text-secondary">C# · ASP.NET Core · EF Core · SQL Server</span>
        </div>
      </div>
    </div>
  );
};
