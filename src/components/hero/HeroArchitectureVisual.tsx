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
  latency: string;
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
    name: "CLIENT GATEWAY",
    sub: "HTTPS • JSON • Bearer Token",
    layer: "Ingestion Layer",
    icon: Radio,
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.08)",
    borderColor: "border-cyan-500/40",
    latency: "2ms",
    details: {
      role: "Client Ingestion & Protocol Negotiation",
      tech: ["HTTP/2", "TLS 1.3", "JWT Bearer Header"],
      operations: [
        "Transmits JSON payload with Authorization header",
        "Enforces strict CORS origins & headers",
        "Rate limiting & request header parsing",
      ],
    },
  },
  {
    id: "webapi",
    number: "02",
    name: "ASP.NET CORE 9 WEB API",
    sub: "Controllers • Auth Filter • Exception Handler",
    layer: "Presentation Layer",
    icon: Server,
    color: "#3B82F6",
    bgColor: "rgba(59, 130, 246, 0.12)",
    borderColor: "border-blue-500/40",
    latency: "4ms",
    details: {
      role: "Route Dispatching & Pipeline Middlewares",
      tech: ["ASP.NET Core 9", "JWT Middleware", "RFC 7807 Problem Details"],
      operations: [
        "Validates cryptographic HMAC-SHA256 signature",
        "Binds model & claims (UserId, Role, DepartmentId)",
        "Catches unhandled errors via centralized middleware",
      ],
    },
  },
  {
    id: "application",
    number: "03",
    name: "APPLICATION USE CASE",
    sub: "Commands • FluentValidation • AutoMapper",
    layer: "Application Layer",
    icon: Cpu,
    color: "#6366F1",
    bgColor: "rgba(99, 102, 241, 0.08)",
    borderColor: "border-indigo-500/40",
    latency: "5ms",
    details: {
      role: "Business Workflow Orchestration",
      tech: ["FluentValidation", "AutoMapper", "DTO Pipeline"],
      operations: [
        "Executes FluentValidation rules before execution",
        "Transforms incoming DTO to Domain Entity",
        "Coordinates repository unit-of-work transactions",
      ],
    },
  },
  {
    id: "domain",
    number: "04",
    name: "DOMAIN CORE",
    sub: "Entities • Invariants • Contracts",
    layer: "Domain Core",
    icon: Layers,
    color: "#A855F7",
    bgColor: "rgba(168, 85, 247, 0.08)",
    borderColor: "border-purple-500/40",
    latency: "1ms",
    details: {
      role: "Enterprise Business Invariants",
      tech: ["Pure C#", "Domain Entities", "Business Exceptions"],
      operations: [
        "Enforces leave quota checks & date range validity",
        "Calculates business days excluding holidays",
        "100% decoupled from database & web frameworks",
      ],
    },
  },
  {
    id: "infrastructure",
    number: "05",
    name: "INFRASTRUCTURE & PERSISTENCE",
    sub: "EF Core 9 • SQL Server • Redis Cache",
    layer: "Infrastructure Layer",
    icon: Database,
    color: "#10B981",
    bgColor: "rgba(16, 185, 129, 0.12)",
    borderColor: "border-emerald-500/40",
    latency: "6ms",
    details: {
      role: "Data Persistence & Transaction Integrity",
      tech: ["EF Core 9", "SQL Server", "Redis", "Unit of Work"],
      operations: [
        "Executes Unit of Work atomic SaveChangesAsync()",
        "Utilizes AsNoTracking on read-only queries",
        "Invalidates distributed Redis session cache",
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
      <div className="relative bg-[#0D0D11] border border-border rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Console Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/70 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-secondary text-[11px] font-semibold">
              arch_pipeline.telemetry
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

            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              CLEAN ARCH
            </span>
          </div>
        </div>

        {/* Vertical Pipeline Steps */}
        <div className="space-y-2 relative">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStepId === step.id;
            const isTraced = activeStepIndex === idx;

            return (
              <React.Fragment key={step.id}>
                <div
                  onClick={() => setSelectedStepId(step.id)}
                  className={cn(
                    "group relative cursor-pointer rounded-xl p-3 sm:p-3.5 border transition-all duration-200",
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

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-[10px] text-muted px-1.5 py-0.5 rounded bg-background/60 border border-border/50">
                        {step.latency}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      )}
                    </div>
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
        <div className="mt-4 pt-3.5 border-t border-border/60 bg-[#0F0F14] rounded-xl p-3.5 border border-border/50 animate-fadeIn">
          {selectedStep ? (
            <>
              <div className="flex items-center justify-between mb-2">
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
                  Execution: {selectedStep.latency}
                </span>
              </div>

              <p className="text-xs text-secondary font-sans mb-2.5 leading-relaxed">
                {selectedStep.details.role}
              </p>

              <div className="space-y-1 mb-3">
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
            </>
          ) : (
            <div className="py-2 text-center font-mono text-xs text-muted flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Select any layer or click RUN TRACE to inspect pipeline operations</span>
            </div>
          )}
        </div>

        {/* Pipeline Telemetry Footer */}
        <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-muted pt-2 border-t border-border/40">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>TOTAL LATENCY: ~18ms</span>
          </div>
          <span className="text-secondary">SOLID • REPO • UNIT OF WORK</span>
        </div>
      </div>
    </div>
  );
};
