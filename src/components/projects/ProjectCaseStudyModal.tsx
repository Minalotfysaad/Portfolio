"use client";

import React, { useState, useEffect } from "react";
import { ProjectItem } from "@/types";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ProjectGalleryModal } from "./ProjectGalleryModal";
import { Button } from "@/components/ui/Button";
import {
  X,
  Github,
  ExternalLink,
  ShieldCheck,
  Database,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  Terminal,
  Images,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "decisions" | "endpoints" | "security">("overview");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedScreenshotIdx, setSelectedScreenshotIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape" && !galleryOpen) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, galleryOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
        <div className="relative w-full max-w-5xl bg-[#0E0E12] border border-border rounded-2xl overflow-hidden shadow-2xl my-auto max-h-[92vh] flex flex-col">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-[#121216] shrink-0">
            <div className="flex items-center gap-3">
              <div className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-accent/15 text-accent-light border border-accent/30 uppercase">
                {project.badge}
              </div>
              <h3 className="font-mono text-sm sm:text-base font-bold text-foreground truncate max-w-md">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  icon={<Github className="w-3.5 h-3.5" />}
                  className="font-mono text-xs hidden sm:flex"
                >
                  GitHub
                </Button>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-secondary hover:text-white hover:bg-surface border border-transparent hover:border-border transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-2 px-6 py-2.5 border-b border-border/80 bg-[#101014] overflow-x-auto shrink-0 font-mono text-xs">
            {[
              { id: "overview", label: "OVERVIEW & PROBLEM" },
              { id: "architecture", label: "ARCHITECTURE & DATA" },
              { id: "decisions", label: "ENGINEERING DECISIONS" },
              { id: "endpoints", label: "API CONTRACTS" },
              { id: "security", label: "SECURITY & QUALITY" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "px-3 py-1.5 rounded-md transition-all shrink-0",
                  activeTab === tab.id
                    ? "bg-accent text-white font-semibold shadow-sm"
                    : "text-secondary hover:text-foreground hover:bg-surface"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Modal Body Content (Scrollable) */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* TAB: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Title & Tagline */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-sans tracking-tight mb-2">
                    {project.title}
                  </h2>
                  <p className="font-mono text-sm text-accent-light mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-secondary font-sans leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Problem vs Approach Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 sm:p-6 rounded-xl bg-surface/40 border border-red-500/20">
                    <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider block mb-2">
                      01. THE PROBLEM
                    </span>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-xl bg-surface/40 border border-accent/20">
                    <span className="font-mono text-xs text-accent-light font-bold uppercase tracking-wider block mb-2">
                      02. THE ARCHITECTURAL APPROACH
                    </span>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </div>

                {/* Key Features List */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-muted uppercase tracking-wider mb-4">
                    KEY SYSTEM FEATURES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-surface/50 border border-border/80 text-xs sm:text-sm text-secondary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshot Gallery Trigger */}
                <div className="p-5 rounded-xl bg-[#131317] border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent-light">
                      <Images className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold text-foreground">
                        Project Media & Screenshot Gallery
                      </h4>
                      <p className="font-mono text-xs text-muted">
                        {project.screenshots.length} visual asset specifications available
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedScreenshotIdx(0);
                      setGalleryOpen(true);
                    }}
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    className="font-mono text-xs"
                  >
                    VIEW GALLERY
                  </Button>
                </div>
              </div>
            )}

            {/* TAB: ARCHITECTURE */}
            {activeTab === "architecture" && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-mono text-base font-bold text-foreground mb-2">
                    Clean Architecture & Component Isolation
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary font-sans">
                    Explore the inward dependency flow and transactional persistence layer.
                  </p>
                </div>

                <ArchitectureDiagram nodes={project.architectureNodes} />

                {/* Data Persistence Model */}
                <div className="p-6 rounded-xl bg-surface/50 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Database className="w-5 h-5 text-accent-light" />
                    <h4 className="font-mono text-sm font-bold text-foreground">
                      {project.dataAccessModel.title}
                    </h4>
                  </div>
                  <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-secondary">
                    {project.dataAccessModel.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB: ENGINEERING DECISIONS */}
            {activeTab === "decisions" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-base font-bold text-foreground mb-1">
                    Key Architectural & Engineering Decisions
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary font-sans">
                    Rationale, problem contexts, and outcomes behind system design choices.
                  </p>
                </div>

                <div className="space-y-4">
                  {project.engineeringDecisions.map((dec, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-xl bg-surface/60 border border-border hover:border-accent/40 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-accent-light bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                          DECISION 0{idx + 1}
                        </span>
                        <h4 className="font-mono text-sm sm:text-base font-bold text-foreground">
                          {dec.title}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm font-sans pt-2">
                        <div className="p-3 rounded-lg bg-background/60 border border-border">
                          <span className="font-mono text-[10px] uppercase font-bold text-red-400 block mb-1">
                            Problem Context
                          </span>
                          <p className="text-secondary">{dec.problem}</p>
                        </div>

                        <div className="p-3 rounded-lg bg-background/60 border border-border">
                          <span className="font-mono text-[10px] uppercase font-bold text-accent-light block mb-1">
                            Chosen Decision
                          </span>
                          <p className="text-secondary">{dec.decision}</p>
                        </div>

                        <div className="p-3 rounded-lg bg-background/60 border border-border">
                          <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 block mb-1">
                            Engineering Outcome
                          </span>
                          <p className="text-secondary">{dec.outcome}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: ENDPOINTS */}
            {activeTab === "endpoints" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-base font-bold text-foreground mb-1">
                    RESTful API Contracts & Endpoints
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary font-sans">
                    Key routes supporting the core workflows with status codes and authorization.
                  </p>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {project.endpoints.map((ep, idx) => {
                    const methodColor = {
                      GET: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
                      POST: "text-blue-400 bg-blue-500/10 border-blue-500/30",
                      PUT: "text-amber-400 bg-amber-500/10 border-amber-500/30",
                      DELETE: "text-red-400 bg-red-500/10 border-red-500/30",
                      PATCH: "text-purple-400 bg-purple-500/10 border-purple-500/30",
                    }[ep.method];

                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-surface/50 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "px-2 py-0.5 rounded font-bold border",
                              methodColor
                            )}
                          >
                            {ep.method}
                          </span>
                          <span className="text-foreground font-semibold">
                            {ep.path}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-secondary">
                          <span className="text-[11px] font-sans text-muted">
                            {ep.description}
                          </span>
                          {ep.authRequired && (
                            <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent-light text-[10px] shrink-0">
                              {ep.role || "JWT Required"}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB: SECURITY */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Security Architecture */}
                  <div className="p-6 rounded-xl bg-surface/50 border border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-mono text-sm font-bold text-foreground">
                        {project.securityModel.title}
                      </h4>
                    </div>
                    <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-secondary">
                      {project.securityModel.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Validation & Quality */}
                  <div className="p-6 rounded-xl bg-surface/50 border border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent-light" />
                      <h4 className="font-mono text-sm font-bold text-foreground">
                        {project.validationAndTesting.title}
                      </h4>
                    </div>
                    <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-secondary">
                      {project.validationAndTesting.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="pt-4">
                  <span className="font-mono text-xs text-muted block mb-3 uppercase tracking-wider">
                    Full Technology Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-surface border border-border text-secondary font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="p-5 border-t border-border bg-[#111115] flex items-center justify-between gap-4 shrink-0">
            <div className="font-mono text-xs text-muted hidden sm:block">
              Repository: {project.githubUrl.split("/").pop()}
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
                className="font-mono text-xs"
              >
                CLOSE CASE STUDY
              </Button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="sm"
                  icon={<Github className="w-3.5 h-3.5" />}
                  className="font-mono text-xs"
                >
                  VIEW ON GITHUB →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox */}
      <ProjectGalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        title={project.title}
        screenshots={project.screenshots}
        initialIndex={selectedScreenshotIdx}
      />
    </>
  );
};
