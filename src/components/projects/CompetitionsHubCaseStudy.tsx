"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Github,
  ArrowUpRight,
  Database,
  Trophy,
  Users,
  CheckCircle2,
  Workflow,
  Sparkles,
  Award,
  Calendar,
  FileQuestion,
  GraduationCap,
  Images,
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
      title: "Role-Based Multi-Persona Workflows",
      desc: "Distinct authorization policies separating Administrator event setup, Judge evaluation portals, and Contestant answer submissions.",
    },
    {
      title: "Manual Grading & Evaluation Rubrics",
      desc: "Judge scoring interfaces recording structured point deductions, written critiques, and rubrics per question criteria.",
    },
    {
      title: "Automatic Scoring Computation",
      desc: "Domain calculation algorithms computing weighted question scores, penalty adjustments, and total contestant tallies.",
    },
    {
      title: "Dynamic Leaderboard Generation",
      desc: "Optimized LINQ aggregation queries generating real-time rank tables with multi-tier tie-breaking resolution.",
    },
    {
      title: "Result Publishing & Audit Trail",
      desc: "Lifecycle stage controls locking submissions, finalizing judging rounds, and publishing immutable result records.",
    },
    {
      title: "Normalized Relational Data Architecture",
      desc: "3NF SQL Server schema linking competitions, stages, questions, answers, and scores via clean EF Core mappings.",
    },
  ];

  return (
    <article className="relative bg-[#111115] border border-border/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden mb-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 mb-8 border-b border-border/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-purple-500/30 bg-purple-500/10 text-purple-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            COMPETITION LIFECYCLE & EVALUATION PLATFORM
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground font-sans tracking-tight">
            COMPETITIONSHUB API
          </h3>
          <p className="font-mono text-xs sm:text-sm text-secondary mt-1">
            Multi-Tier Competition Management, Manual/Automated Grading Engine & Dynamic Leaderboards
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="sm"
              icon={<Github className="w-4 h-4" />}
              className="font-mono text-xs font-bold"
            >
              GITHUB REPO →
            </Button>
          </a>
        </div>
      </div>

      {/* Primary Screenshot Showcase & Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
        {/* Large Screenshot Box */}
        <div className="lg:col-span-8 rounded-2xl border border-border/90 bg-[#09090C] overflow-hidden shadow-2xl">
          <div className="px-4 py-2.5 bg-[#131317] border-b border-border/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="font-mono text-xs text-muted ml-2">
                {project.screenshots[selectedScreenshotIndex]?.category || "Competition Platform"}
              </span>
            </div>
            <button
              onClick={onOpenGalleryModal}
              className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-foreground px-2 py-0.5 rounded bg-surface border border-border transition-colors"
            >
              <Images className="w-3 h-3 text-purple-400" />
              <span>{project.screenshots.length} Screens</span>
            </button>
          </div>

          <div className="relative aspect-[16/10] w-full bg-surface">
            <Image
              src={project.screenshots[selectedScreenshotIndex]?.src || "/images/projects/competitionshub/competitions.png"}
              alt={project.screenshots[selectedScreenshotIndex]?.alt || "CompetitionsHub Screenshot"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Captions & Selector */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-xl bg-surface/40 border border-border">
            <span className="font-mono text-[10px] text-purple-400 font-bold uppercase tracking-wider block mb-1">
              ACTIVE WORKFLOW SPECIFICATION:
            </span>
            <p className="text-xs text-secondary font-sans leading-relaxed">
              {project.screenshots[selectedScreenshotIndex]?.caption}
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
      <div className="mb-12 pt-8 border-t border-border/80">
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
    </article>
  );
};
