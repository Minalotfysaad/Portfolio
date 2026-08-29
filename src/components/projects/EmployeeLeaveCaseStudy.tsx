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
      title: "AUTH & ROLE SECURITY",
      icon: Lock,
      description: "JWT access tokens, Refresh Tokens, and ASP.NET Identity securing Employee, Manager, and HR endpoints.",
      badge: "JWT & Identity (Day 2)",
    },
    {
      step: "02",
      title: "VALIDATION & DTO MAPPING",
      icon: FileCheck,
      description: "FluentValidation pipeline enforcing leave invariants & AutoMapper DTO-to-entity mappings.",
      badge: "FluentValidation (Day 3)",
    },
    {
      step: "03",
      title: "DATA ACCESS & QUERIES",
      icon: Database,
      description: "Repository & Unit of Work patterns with Entity Framework Core and Specification Pattern.",
      badge: "Repo & Unit of Work (Day 3)",
    },
    {
      step: "04",
      title: "APPROVAL & DEDUCTION",
      icon: Workflow,
      description: "Manager & HR multi-step approval workflow with atomic leave balance quota deductions.",
      badge: "Approval Engine (Day 4-5)",
    },
    {
      step: "05",
      title: "REDIS & LOGGING",
      icon: Zap,
      description: "Response caching with Redis, automated cache invalidation, Serilog structured logging & Swagger UI.",
      badge: "Redis & Serilog (Day 7)",
    },
  ];

  const highlights = [
    {
      title: "Production HR Management Backend",
      desc: "Designed and developed a production-style HR management backend supporting leave requests, department management, and role-based workflows.",
    },
    {
      title: "JWT, Refresh Tokens & ASP.NET Identity",
      desc: "Implemented JWT authentication, Refresh Tokens, and ASP.NET Identity to secure Employee, Manager, and HR endpoints.",
    },
    {
      title: "Repository & Unit of Work Patterns",
      desc: "Built Repository and Unit of Work patterns with Entity Framework Core to create a maintainable and testable data access layer.",
    },
    {
      title: "FluentValidation & AutoMapper",
      desc: "Enforced request validation using FluentValidation and integrated AutoMapper to simplify DTO-to-entity mapping.",
    },
    {
      title: "RESTful APIs & Serilog Observability",
      desc: "Developed RESTful APIs supporting pagination, filtering, search, centralized exception handling, structured logging with Serilog, and Swagger documentation.",
    },
    {
      title: "Clean Architecture & Layer Isolation",
      desc: "Architected solution into isolated Domain, Application, Infrastructure, and Presentation layers with strict Dependency Injection.",
    },
  ];

  const currentScreenshot = project.screenshots[selectedScreenshotIndex] || project.screenshots[0];

  return (
    <article className="relative bg-[#111115] border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:border-accent/40 hover:shadow-glow-card transition-all duration-300 mb-8 group">
      {/* Header Bar (Always Visible) */}
      <div
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 space-y-3">
          {/* Top Identifier & Status Pill */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent-light font-mono text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              CASE STUDY 01 • HR SYSTEM
            </span>
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider hidden sm:inline-block">
              ENTERPRISE BACKEND ARCHITECTURE
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground font-sans tracking-tight group-hover:text-accent-light transition-colors">
              Employee Leave Management System
            </h3>
            <p className="font-mono text-xs sm:text-sm text-secondary mt-1">
              Production-Style HR Management Backend
            </p>
          </div>

          {/* Quick Key Technology Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {["C# / .NET 9", "EF Core 9", "SQL Server", "JWT & Identity", "Redis"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface/80 border border-border/80 text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
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
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-background/80 border border-border/60 text-[10px] font-mono text-muted">
                    <span className="text-emerald-400 font-bold">GET</span>
                    <span>/api/v1/leave-requests</span>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {currentScreenshot?.category || "HR System Architecture"}
                  </span>
                </div>
                <button
                  onClick={onOpenGalleryModal}
                  className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-foreground px-2.5 py-1 rounded bg-surface border border-border transition-colors"
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

          {/* 10-Day Implementation Roadmap Grid */}
          <div className="pt-8 border-t border-border/80">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-light uppercase tracking-wider">
                <Workflow className="w-4 h-4" />
                <span>10-DAY ENGINEERING IMPLEMENTATION ROADMAP:</span>
              </div>
              <span className="font-mono text-[10px] text-muted uppercase">
                7 ARCHITECTURAL PHASES COMPLETED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  day: "DAY 1",
                  title: "Clean Architecture & Domain",
                  isDone: true,
                  items: [
                    "Clean Architecture Solution Structure",
                    "Domain Entities & Relationships",
                    "DbContext, SQL Server & EF Core",
                    "ASP.NET Identity & Initial Migration",
                  ],
                },
                {
                  day: "DAY 2",
                  title: "Authentication & JWT Security",
                  isDone: true,
                  items: [
                    "JWT Config & Token Generation Service",
                    "Register & Login REST Endpoints",
                    "Seed Roles & Users (Employee, Manager, HR)",
                    "JWT Middleware & Swagger Authorization",
                  ],
                },
                {
                  day: "DAY 3",
                  title: "Employee Module & Patterns",
                  isDone: true,
                  items: [
                    "DTOs, AutoMapper & FluentValidation",
                    "Generic Repository & Unit of Work",
                    "Specification Pattern for Queries",
                    "Global Exception Handling Middleware",
                  ],
                },
                {
                  day: "DAY 4",
                  title: "Leave Requests & Validation",
                  isDone: true,
                  items: [
                    "Leave Request Lifecycle & Endpoints",
                    "Employee Leave Balance Validation",
                    "Overlapping Leave Date Check",
                    "Role-Based Access Control Policies",
                  ],
                },
                {
                  day: "DAY 5",
                  title: "Multi-Step Approval Engine",
                  isDone: true,
                  items: [
                    "Multi-tier Approval (Manager & HR)",
                    "Atomic Leave Quota Balance Deduction",
                    "Business Invariants & Transaction Commit",
                    "Exception Handling & Security Review",
                  ],
                },
                {
                  day: "DAY 6",
                  title: "Holidays, Leave Types & Depts",
                  isDone: true,
                  items: [
                    "Holiday & Leave Type Management",
                    "Department Allocations & Rules",
                    "Input Validation & Authorization",
                    "API Refinements & Caching Prep",
                  ],
                },
                {
                  day: "DAY 7",
                  title: "Redis, Serilog & Performance",
                  isDone: true,
                  items: [
                    "Redis Integration & Response Caching",
                    "Automated Cache Invalidation",
                    "Serilog Structured Request Logging",
                    "Performance Review & Clean Code",
                  ],
                },
                {
                  day: "DAYS 8–10",
                  title: "Testing & DevOps Pipeline",
                  isDone: false,
                  items: [
                    "xUnit & Moq Unit Test Strategy",
                    "Docker & Docker Compose Containerization",
                    "GitHub Actions CI/CD Build & Test Pipeline",
                    "OpenAPI Polish & Production Configuration",
                  ],
                },
              ].map((stage) => (
                <div
                  key={stage.day}
                  className={cn(
                    "p-4 rounded-xl border flex flex-col justify-between transition-all",
                    stage.isDone
                      ? "bg-[#111116] border-border hover:border-accent/40"
                      : "bg-[#0E0E12]/60 border-border/50 opacity-80"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 font-mono text-xs">
                      <span
                        className={cn(
                          "font-bold",
                          stage.isDone ? "text-accent-light" : "text-secondary"
                        )}
                      >
                        {stage.day}
                      </span>
                      {stage.isDone ? (
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          COMPLETED
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-surface text-muted border border-border">
                          PLANNED
                        </span>
                      )}
                    </div>
                    <h4 className="font-mono text-xs font-bold text-foreground mb-3">
                      {stage.title}
                    </h4>

                    <ul className="space-y-1.5 font-sans text-[11px] text-secondary">
                      {stage.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-1.5">
                          <span className="text-muted shrink-0">•</span>
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
