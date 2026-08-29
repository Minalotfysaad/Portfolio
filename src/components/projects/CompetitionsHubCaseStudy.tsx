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
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    <article className="relative bg-[#111115] border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:border-purple-500/40 hover:shadow-glow-purple/20 transition-all duration-300 mb-8 group">
      {/* Header Bar (Always Visible) */}
      <div
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 space-y-3">
          {/* Top Identifier & Status Pill */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              CASE STUDY 03 • WORKFLOW PLATFORM
            </span>
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider hidden sm:inline-block">
              COMPETITION ENGINE & LEADERBOARDS
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground font-sans tracking-tight group-hover:text-purple-400 transition-colors">
              CompetitionsHub API
            </h3>
            <p className="font-mono text-xs sm:text-sm text-secondary mt-1">
              Multi-Tier Competition Management, Manual/Automated Grading Engine & Dynamic Leaderboards
            </p>
          </div>

          {/* Quick Key Technology Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {["ASP.NET Core", "Clean Architecture", "Grading Engine", "RBAC Policies", "SQL Server"].map((tech) => (
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
                  <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-background/80 border border-border/60 text-[10px] font-mono text-muted">
                    <span className="text-purple-400 font-bold">GET</span>
                    <span>/api/v1/competitions</span>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {currentScreenshot?.category || "Competition Platform"}
                  </span>
                </div>
                <button
                  onClick={onOpenGalleryModal}
                  className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-foreground px-2.5 py-1 rounded bg-surface border border-border transition-colors"
                >
                  <Images className="w-3 h-3 text-purple-400" />
                  <span>{project.screenshots.length} Screens</span>
                </button>
              </div>

              {/* Crossfading Screenshot Container */}
              <div className="relative aspect-[16/10] w-full bg-surface overflow-hidden">
                {project.screenshots.map((s, idx) => (
                  <div
                    key={s.src}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-300 ease-in-out",
                      selectedScreenshotIndex === idx ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={s.src}
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
                    onClick={() => setSelectedScreenshotIndex(idx)}
                    className={cn(
                      "relative aspect-[16/10] rounded-lg overflow-hidden border transition-all",
                      selectedScreenshotIndex === idx
                        ? "border-purple-400 ring-2 ring-purple-500/30 scale-105"
                        : "border-border/70 opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={s.src}
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
              BUSINESS WORKFLOW & EVALUATION HIGHLIGHTS:
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
        </div>
      </div>
    </article>
  );
};
