"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import {
  Github,
  ArrowUpRight,
  ShieldCheck,
  Database,
  Layers,
  CheckCircle2,
  Images,
  ExternalLink,
  Code,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
  onOpenGallery: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  onOpenGallery,
}) => {
  const isFeatured = project.isFeatured;

  return (
    <div
      className={cn(
        "group relative bg-[#111114] border border-border hover:border-accent/40 rounded-2xl transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between",
        isFeatured && "border-accent/30 bg-gradient-to-b from-[#131318] to-[#101014] ring-1 ring-accent/20"
      )}
    >
      {/* Top Banner Ribbon */}
      <div className="flex items-center justify-between px-6 py-3.5 border-b border-border/80 bg-[#141419]">
        <div className="flex items-center gap-2">
          {isFeatured && <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
          <span
            className={cn(
              "font-mono text-xs font-semibold tracking-wider uppercase",
              isFeatured ? "text-accent-light" : "text-muted"
            )}
          >
            {project.badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenGallery(project)}
            className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-foreground px-2 py-0.5 rounded bg-surface/60 border border-border transition-colors"
            title="View screenshots"
          >
            <Images className="w-3 h-3" />
            <span>{project.screenshots.length} Screens</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8 space-y-6 flex-1">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-sans tracking-tight mb-2 group-hover:text-accent-light transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs sm:text-sm text-accent-light mb-4">
            {project.subtitle}
          </p>
          <p className="text-sm sm:text-base text-secondary font-sans leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Interactive Architecture Flow Preview */}
        <div className="pt-2">
          <ArchitectureDiagram
            nodes={project.architectureNodes}
            title={isFeatured ? "CLEAN ARCHITECTURE FLOW" : "SYSTEM PIPELINE FLOW"}
          />
        </div>

        {/* Feature Highlights Grid */}
        <div>
          <span className="font-mono text-xs text-muted block mb-3 uppercase tracking-wider">
            Key Architecture & Engineering Highlights:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.slice(0, isFeatured ? 6 : 4).map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-lg bg-surface/40 border border-border/70 text-xs text-secondary"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-light shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Badges */}
        <div className="pt-2">
          <span className="font-mono text-xs text-muted block mb-2.5 uppercase tracking-wider">
            Technologies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, isFeatured ? 12 : 9).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#16161B] border border-border text-secondary group-hover:border-border-light transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isFeatured ? 12 : 9) && (
              <span className="font-mono text-[11px] px-2 py-1 rounded bg-surface text-muted border border-border">
                +{project.technologies.length - (isFeatured ? 12 : 9)} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="px-6 py-5 border-t border-border/80 bg-[#121216] flex flex-wrap items-center justify-between gap-4">
        <Button
          variant="primary"
          size="sm"
          onClick={() => onOpenCaseStudy(project)}
          icon={<ArrowUpRight className="w-4 h-4" />}
          iconPosition="right"
          className="font-mono text-xs font-semibold"
        >
          VIEW CASE STUDY
        </Button>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              icon={<Github className="w-3.5 h-3.5" />}
              className="font-mono text-xs border-border/90 text-secondary hover:text-foreground"
            >
              VIEW ON GITHUB →
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
