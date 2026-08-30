"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Github,
  CheckCircle2,
  Lock,
  Workflow,
  FileCheck,
  Zap,
  Images,
  Code2,
  ChevronDown,
  ChevronUp,
  Database,
  Maximize2,
} from "lucide-react";
import { cn, getAssetPath } from "@/lib/utils";

interface EmployeeLeaveCaseStudyProps {
  project: ProjectItem;
  onOpenGalleryModal: () => void;
}

export const EmployeeLeaveCaseStudy: React.FC<EmployeeLeaveCaseStudyProps> = ({
  project,
  onOpenGalleryModal,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const pipelineSteps = [
    {
      step: "01",
      title: "AUTH & ROLE SECURITY",
      icon: Lock,
      description: "JWT access tokens, Refresh Tokens, and ASP.NET Identity securing Employee, Manager, and HR endpoints.",
      badge: "JWT & Identity",
    },
    {
      step: "02",
      title: "VALIDATION & MAPPING",
      icon: FileCheck,
      description: "FluentValidation enforcing leave invariants and AutoMapper simplifying DTO-to-entity transformations.",
      badge: "FluentValidation",
    },
    {
      step: "03",
      title: "DATA ACCESS LAYER",
      icon: Database,
      description: "Generic Repository and Unit of Work patterns with EF Core for atomic, testable data operations.",
      badge: "Repository & UoW",
    },
    {
      step: "04",
      title: "APPROVAL ENGINE",
      icon: Workflow,
      description: "Manager and HR multi-step approval workflow with atomic leave balance quota deductions.",
      badge: "Multi-Tier Approval",
    },
    {
      step: "05",
      title: "CACHING & OBSERVABILITY",
      icon: Zap,
      description: "Redis response caching with automated invalidation and Serilog structured request logging.",
      badge: "Redis & Serilog",
    },
  ];

  const highlights = [
    {
      title: "Clean Architecture",
      desc: "Isolated Domain, Application, Infrastructure, and Presentation layers with strict inward-pointing dependencies and Dependency Injection.",
    },
    {
      title: "Enterprise Security Pipeline",
      desc: "JWT authentication with rotating Refresh Tokens and ASP.NET Identity securing three role-based access tiers: Employee, Manager, and HR.",
    },
    {
      title: "Testable Data Access",
      desc: "Repository and Unit of Work patterns with Entity Framework Core ensuring atomic transactions and mockable persistence contracts.",
    },
    {
      title: "Input Validation & DTO Mapping",
      desc: "Strongly-typed FluentValidation rules enforcing business invariants, paired with AutoMapper for clean DTO-to-entity transformations.",
    },
    {
      title: "RESTful API Design",
      desc: "Pagination, filtering, search, centralized exception handling, and interactive Swagger documentation across all endpoints.",
    },
    {
      title: "Performance & Observability",
      desc: "Redis distributed caching with automated invalidation and Serilog structured logging for production-grade monitoring.",
    },
  ];

  const currentScreenshot = project.screenshots[selectedScreenshotIndex] || project.screenshots[0];

  return (
    <article
      className={cn(
        "relative rounded-xl sm:rounded-2xl border transition-all duration-300 mb-6 group/tile overflow-hidden",
        "bg-gradient-to-b from-[#131317] to-[#0D0D11]",
        isExpanded
          ? "border-accent/50 shadow-glow-card"
          : "border-border/80 hover:border-accent/40 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5"
      )}
    >
      {/* Header Bar (Always Visible / Clickable) */}
      <div
        className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 space-y-2.5 min-w-0">
          {/* Top Identifier & Status Pill */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent-light font-mono text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              01 — FEATURED PROJECT
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans tracking-tight group-hover/tile:text-accent-light transition-colors">
              Employee Leave Management System
            </h3>
            <p className="font-sans text-xs sm:text-sm text-secondary/90 mt-1 max-w-3xl leading-relaxed">
              A production-style employee leave management API with authentication, role-based approval workflows, validation, and clean backend architecture.
            </p>
          </div>

          {/* Quick Key Technology Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            {["C#", ".NET 9", "ASP.NET Core Web API", "EF Core", "SQL Server", "Redis"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-muted hover:border-accent/40 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-xs font-medium border border-border/80 bg-surface/60 text-secondary hover:text-foreground hover:border-accent/50 hover:bg-surface transition-all duration-200"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View on GitHub →</span>
          </a>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
            className={cn(
              "w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300",
              isExpanded
                ? "bg-accent/15 border-accent text-accent-light"
                : "bg-surface/60 border-border/80 text-secondary hover:text-foreground hover:border-accent/40"
            )}
          >
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                isExpanded && "rotate-180 text-accent-light"
              )}
            />
          </button>
        </div>
      </div>

      {/* Expandable Content Body with Smooth Height Animation */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr] opacity-100 px-5 sm:px-6 pb-6 pt-6 border-t border-border/80" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden space-y-12">
          {/* Primary Screenshot Showcase & Media Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Large Screenshot Box / High-Tech Placeholder Frame */}
            <div className="lg:col-span-8 rounded-2xl border border-border/90 bg-[#09090C] overflow-hidden shadow-2xl">
              <div className="px-4 py-2.5 bg-[#131317] border-b border-border/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {currentScreenshot?.category || "HR System Architecture"}
                  </span>
                </div>
              </div>

              {/* Crossfading Screenshot Container (Clickable to open full gallery) */}
              <div
                onClick={onOpenGalleryModal}
                className="relative aspect-[16/10] w-full bg-surface overflow-hidden cursor-pointer group/screen"
                role="button"
                tabIndex={0}
                aria-label="Click to view full screenshot gallery"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpenGalleryModal();
                  }
                }}
              >
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-200 z-20 flex items-center justify-center pointer-events-none">
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-white font-mono text-xs shadow-xl backdrop-blur-sm transform translate-y-1 group-hover/screen:translate-y-0 transition-transform duration-200">
                    <Maximize2 className="w-3.5 h-3.5 text-accent-light" />
                    <span>Click to enlarge</span>
                  </span>
                </div>

                {project.screenshots.map((s, idx) => {
                  const isErr = imageErrorMap[s.src];

                  return (
                    <div
                      key={s.src}
                      className={cn(
                        "absolute inset-0 transition-opacity duration-300 ease-in-out flex items-center justify-center",
                        selectedScreenshotIndex === idx ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                      )}
                    >
                      {!isErr ? (
                        <Image
                          src={getAssetPath(s.src)}
                          alt={s.alt}
                          fill
                          className="object-cover"
                          onError={() =>
                            setImageErrorMap((prev) => ({
                              ...prev,
                              [s.src]: true,
                            }))
                          }
                        />
                      ) : (
                        <div className="w-full h-full p-6 sm:p-8 bg-gradient-to-br from-[#121217] via-[#0E0E12] to-[#0A0A0D] flex flex-col items-center justify-center text-center font-mono">
                          <div className="w-14 h-14 rounded-2xl bg-surface border border-accent/30 flex items-center justify-center text-accent-light mb-3 shadow-glow-accent">
                            <Code2 className="w-7 h-7" />
                          </div>
                          <span className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider bg-accent/15 border border-accent/30 text-accent-light mb-2">
                            SCREENSHOT ASSET SPECIFICATION
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-foreground mb-1 font-sans">
                            {s.alt}
                          </h4>
                          <p className="text-xs text-muted max-w-md font-sans mb-3">
                            {s.caption}
                          </p>
                          <div className="text-[10px] text-secondary bg-surface/80 border border-border px-3 py-1 rounded-md">
                            Asset path: {s.src}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Thumbnail Selector & Caption */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-surface/40 border border-border">
                <span className="font-mono text-[10px] text-accent-light font-bold uppercase tracking-wider block mb-1">
                  ACTIVE SPECIFICATION:
                </span>
                <p className="text-xs text-secondary font-sans leading-relaxed">
                  {currentScreenshot.caption}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {project.screenshots.map((s, idx) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setSelectedScreenshotIndex(idx)}
                    className={cn(
                      "relative aspect-[16/10] rounded-lg overflow-hidden border transition-all duration-200 ease-out flex items-center justify-center bg-[#15151A] select-none",
                      "hover:scale-[1.03] active:scale-90 active:duration-75",
                      selectedScreenshotIndex === idx
                        ? "border-accent ring-2 ring-accent/40 scale-105 shadow-md shadow-accent/20"
                        : "border-border/70 opacity-60 hover:opacity-100 hover:border-accent/40"
                    )}
                  >
                    <span className="font-mono text-[10px] font-bold text-secondary transition-transform duration-150">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Linear Pipeline Flow */}
          <div className="pt-8 border-t border-border/80">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-light uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4" />
              <span>END-TO-END HR LEAVE TRANSACTION PIPELINE:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {pipelineSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-[#0E0E12] border border-border/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-accent-light">
                          {step.step}
                        </span>
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                      <h4 className="font-mono text-xs font-bold text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-secondary font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-border/50 font-mono text-[9px] text-muted uppercase">
                      {step.badge}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Engineering Highlights Grid */}
          <div className="pt-8 border-t border-border/80">
            <span className="font-mono text-xs text-muted block mb-4 uppercase tracking-wider">
              KEY CAPABILITIES & IMPLEMENTATION:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-surface/30 border border-border/70"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-light shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Complete Stack */}
          <div className="pt-8 border-t border-border/80 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#0E0E12] border border-border/80">
              <div className="flex items-center gap-2 font-mono text-xs text-foreground">
                <span className="font-bold text-accent-light">ARCHITECTURE:</span>
                <span className="text-secondary font-semibold">Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted flex-wrap">
                <span className="px-2.5 py-1 rounded bg-surface border border-border/80 text-foreground font-medium">API</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-surface border border-border/80 text-foreground font-medium">Application</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-surface border border-border/80 text-foreground font-medium">Domain</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-surface border border-border/80 text-foreground font-medium">Infrastructure</span>
              </div>
            </div>

            {/* Complete Technology Stack */}
            <div className="p-4 rounded-xl bg-surface/20 border border-border/60">
              <span className="font-mono text-[11px] text-muted uppercase tracking-wider block mb-2.5">
                TECHNOLOGY STACK:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "C#",
                  ".NET 9",
                  "ASP.NET Core Web API",
                  "EF Core",
                  "SQL Server",
                  "Redis",
                  "ASP.NET Identity",
                  "JWT",
                  "FluentValidation",
                  "Serilog",
                  "xUnit",
                  "Moq",
                  "Swagger",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#141418] border border-border/80 text-foreground/90 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};
