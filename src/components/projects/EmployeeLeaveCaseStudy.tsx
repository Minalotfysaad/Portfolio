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
  Calendar,
  ChevronDown,
  ChevronUp,
  Database,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
      title: "LEAVE SUBMISSION",
      icon: Calendar,
      description: "Employee submits leave request payload with date range, leave type (Casual, Sick, Annual), and reason.",
      badge: "REST Endpoint",
    },
    {
      step: "02",
      title: "INVARIANT CHECK",
      icon: FileCheck,
      description: "FluentValidation pipeline verifies date ordering, quota availability, and department policies.",
      badge: "FluentValidation",
    },
    {
      step: "03",
      title: "APPROVAL CHAIN",
      icon: Workflow,
      description: "Manager / HR Admin evaluates pending requests using role-based claims policies.",
      badge: "RBAC & Claims",
    },
    {
      step: "04",
      title: "ATOMIC DEDUCTION",
      icon: Database,
      description: "Unit of Work pattern executes atomic SQL transaction deducting quota and writing audit log.",
      badge: "Unit of Work",
    },
    {
      step: "05",
      title: "TOKEN SECURITY",
      icon: Lock,
      description: "15-minute JWT access tokens paired with cryptographically secure rotating refresh tokens.",
      badge: "JWT & Identity",
    },
  ];

  const highlights = [
    {
      title: "Clean Architecture Isolation",
      desc: "Strictly separates Domain entities, Application use cases, and Infrastructure persistence into independent assemblies.",
    },
    {
      title: "Dual-Token Security System",
      desc: "Stateless short-lived JWT access tokens paired with rotating refresh tokens persisted in SQL Server with revocation tracking.",
    },
    {
      title: "Repository & Unit of Work",
      desc: "Encapsulates database operations into atomic commits, preventing leave quota discrepancies under concurrent approvals.",
    },
    {
      title: "FluentValidation Invariants",
      desc: "Executes strongly-typed business validation rules before controller execution, returning uniform RFC 7807 error shapes.",
    },
    {
      title: "Serilog Observability",
      desc: "Captures structured contextual JSON logs with execution correlation IDs, timers, and exception stack traces.",
    },
    {
      title: "xUnit & Moq Test Suites",
      desc: "Automated unit testing suites isolating repository interfaces to verify leave quota calculation algorithms.",
    },
  ];

  const currentScreenshot = project.screenshots[selectedScreenshotIndex] || project.screenshots[0];

  return (
    <article className="relative bg-[#111115] border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:border-accent/40 hover:shadow-glow-card transition-all duration-300 mb-8 group">
      {/* Header Bar (Always Visible) */}
      <div
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground font-sans tracking-tight group-hover:text-accent-light transition-colors">
            Employee Leave Management System
          </h3>
          <p className="font-mono text-xs sm:text-sm text-secondary mt-1">
            Production-Style HR Management Backend • ASP.NET Core 9 & Clean Architecture
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              icon={<Github className="w-4 h-4" />}
              className="font-mono text-xs border-border/90 text-secondary hover:text-foreground"
            >
              GITHUB REPO →
            </Button>
          </a>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            icon={isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            iconPosition="right"
            className="font-mono text-xs font-bold"
          >
            {isExpanded ? "COLLAPSE DETAILS" : "EXPAND DETAILS"}
          </Button>
        </div>
      </div>

      {/* Expandable Content Body with Smooth Height Animation */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-border/80" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden space-y-12">
          {/* Primary Screenshot Showcase & Media Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Large Screenshot Box / High-Tech Placeholder Frame */}
            <div className="lg:col-span-8 rounded-2xl border border-border/90 bg-[#09090C] overflow-hidden shadow-2xl">
              <div className="px-4 py-2.5 bg-[#131317] border-b border-border/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="font-mono text-xs text-muted ml-2">
                    {currentScreenshot?.category || "HR System Architecture"}
                  </span>
                </div>
                <button
                  onClick={onOpenGalleryModal}
                  className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-foreground px-2 py-0.5 rounded bg-surface border border-border transition-colors"
                >
                  <Images className="w-3 h-3 text-accent-light" />
                  <span>{project.screenshots.length} Screens</span>
                </button>
              </div>

              {/* Crossfading Screenshot Container */}
              <div className="relative aspect-[16/10] w-full bg-surface overflow-hidden">
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
                          src={s.src}
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
                    onClick={() => setSelectedScreenshotIndex(idx)}
                    className={cn(
                      "relative aspect-[16/10] rounded-lg overflow-hidden border transition-all flex items-center justify-center bg-[#15151A]",
                      selectedScreenshotIndex === idx
                        ? "border-accent ring-2 ring-accent/30 scale-105"
                        : "border-border/70 opacity-60 hover:opacity-100"
                    )}
                  >
                    <span className="font-mono text-[10px] font-bold text-secondary">
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
              CORE ENGINEERING HIGHLIGHTS:
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
        </div>
      </div>
    </article>
  );
};
