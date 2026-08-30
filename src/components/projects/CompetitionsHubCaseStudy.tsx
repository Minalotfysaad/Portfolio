"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Github,
  CheckCircle2,
  Workflow,
  Images,
  Calendar,
  FileQuestion,
  Users,
  GraduationCap,
  Sparkles,
  Trophy,
  Award,
  ChevronDown,
  ChevronUp,
  Maximize2,
} from "lucide-react";
import { cn, getAssetPath } from "@/lib/utils";

interface CompetitionsHubCaseStudyProps {
  project: ProjectItem;
  onOpenGalleryModal: () => void;
}

export const CompetitionsHubCaseStudy: React.FC<CompetitionsHubCaseStudyProps> = ({
  project,
  onOpenGalleryModal,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);

  const workflowSteps = [
    { num: "01", name: "COMPETITION", role: "Admin sets event dates, rules & tracks", icon: Calendar },
    { num: "02", name: "QUESTIONS", role: "Question bank with weighted scores & time limits", icon: FileQuestion },
    { num: "03", name: "CONTESTANTS", role: "Participant registration & stage eligibility", icon: Users },
    { num: "04", name: "JUDGING", role: "Submissions routed to assigned judges for evaluation", icon: GraduationCap },
    { num: "05", name: "SCORING", role: "Automated aggregation + manual grading rubric", icon: Sparkles },
    { num: "06", name: "LEADERBOARD", role: "Rankings computed with tie-breaking logic", icon: Trophy },
    { num: "07", name: "RESULTS", role: "Standing verification & final score publishing", icon: Award },
  ];

  const workflowHighlights = [
    {
      title: "5 Question Builder Types",
      desc: "Supports Multiple Choice, Short Answer, Paragraph, Linear Scale, and Multiple Choice Grid questions with weighted marks and validation.",
    },
    {
      title: "Automated & Manual Grading Engine",
      desc: "Instant score calculation for objective questions combined with an administrative review portal for grading paragraph essay submissions.",
    },
    {
      title: "Contestant Submission Integrity",
      desc: "Enforces submission rules preventing duplicate entries, post-submission answer modification, and access outside competition date windows.",
    },
    {
      title: "Multi-Day Event Scheduling",
      desc: "Organizes competitions across multiple competition days with automated active status evaluation based on real-time schedule dates.",
    },
    {
      title: "Role-Based Access Control",
      desc: "JWT-based ASP.NET Identity authentication enforcing strict authorization boundaries for Administrators, Judges, and Contestants.",
    },
    {
      title: "Dynamic Leaderboards & Results",
      desc: "Optimized LINQ aggregation queries generating real-time leaderboard standings, score percentages, and verified contestant result records.",
    },
  ];

  const currentScreenshot = project.screenshots[selectedScreenshotIndex] || project.screenshots[0];

  return (
    <article
      className={cn(
        "relative rounded-xl sm:rounded-2xl border transition-all duration-300 mb-6 group/tile overflow-hidden",
        "bg-gradient-to-b from-[#131317] to-[#0D0D11]",
        isExpanded
          ? "border-purple-500/50 shadow-glow-purple/20"
          : "border-border/80 hover:border-purple-500/40 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5"
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              03 — PROJECT
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans tracking-tight group-hover/tile:text-purple-400 transition-colors">
              CompetitionsHub
            </h3>
            <p className="font-sans text-xs sm:text-sm text-secondary/90 mt-1 max-w-3xl leading-relaxed">
              A backend platform for managing competitions, participants, submissions, judging, scoring, and leaderboards.
            </p>
          </div>

          {/* Quick Key Technology Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            {["C#", "ASP.NET Core", "EF Core", "SQL Server", "ASP.NET Identity", "JWT"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-muted hover:border-purple-400/40 hover:text-foreground transition-colors"
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
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-xs font-medium border border-border/80 bg-surface/60 text-secondary hover:text-foreground hover:border-purple-400/50 hover:bg-surface transition-all duration-200"
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
                ? "bg-purple-500/15 border-purple-500 text-purple-400"
                : "bg-surface/60 border-border/80 text-secondary hover:text-foreground hover:border-purple-400/40"
            )}
          >
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                isExpanded && "rotate-180 text-purple-400"
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
          {/* Primary Screenshot Showcase & Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Large Screenshot Box */}
            <div className="lg:col-span-8 rounded-2xl border border-border/90 bg-[#09090C] overflow-hidden shadow-2xl">
              <div className="px-4 py-2.5 bg-[#131317] border-b border-border/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {currentScreenshot?.category || "Competition Platform"}
                  </span>
                </div>
              </div>

              {/* Crossfading Screenshot Container (Clickable to open gallery) */}
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
                    <Maximize2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>Click to enlarge</span>
                  </span>
                </div>

                {project.screenshots.map((s, idx) => (
                  <div
                    key={s.src}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-300 ease-in-out",
                      selectedScreenshotIndex === idx ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={getAssetPath(s.src)}
                      alt={s.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Captions & Selector */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-surface/40 border border-border">
                <span className="font-mono text-[10px] text-purple-400 font-bold uppercase tracking-wider block mb-1">
                  ACTIVE WORKFLOW SPECIFICATION:
                </span>
                <p className="text-xs text-secondary font-sans leading-relaxed">
                  {currentScreenshot?.caption}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {project.screenshots.map((s, idx) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setSelectedScreenshotIndex(idx)}
                    className={cn(
                      "relative aspect-[16/10] rounded-lg overflow-hidden border transition-all duration-200 ease-out select-none",
                      "hover:scale-[1.03] active:scale-90 active:duration-75",
                      selectedScreenshotIndex === idx
                        ? "border-purple-400 ring-2 ring-purple-500/30 scale-105 shadow-md shadow-purple-500/20"
                        : "border-border/70 opacity-60 hover:opacity-100 hover:border-purple-400/40"
                    )}
                  >
                    <Image
                      src={getAssetPath(s.src)}
                      alt={s.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 7-Step Competition Lifecycle Workflow Visual */}
          <div className="pt-8 border-t border-border/80">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 uppercase tracking-wider mb-6">
              <Workflow className="w-4 h-4" />
              <span>7-STAGE COMPETITION & EVALUATION LIFECYCLE:</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
              {workflowSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.num}
                    className="p-3.5 rounded-xl bg-[#0E0E12] border border-border/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] font-bold text-purple-400 px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                          {step.num}
                        </span>
                        <Icon className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <h4 className="font-mono text-xs font-bold text-foreground mb-1 truncate">
                        {step.name}
                      </h4>
                      <p className="text-[10px] text-secondary font-sans leading-snug">
                        {step.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Workflow Engineering Highlights Grid */}
          <div className="pt-8 border-t border-border/80">
            <span className="font-mono text-xs text-muted block mb-4 uppercase tracking-wider">
              KEY CAPABILITIES & IMPLEMENTATION:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {workflowHighlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-surface/30 border border-border/70"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
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
                <span className="font-bold text-purple-400">ARCHITECTURE:</span>
                <span className="text-secondary font-semibold">Clean Architecture separating scoring rules, evaluation workflows, and persistence</span>
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
                  "ASP.NET Core",
                  "EF Core",
                  "SQL Server",
                  "ASP.NET Identity",
                  "JWT",
                  "FluentValidation",
                  "AutoMapper",
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
