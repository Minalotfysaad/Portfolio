"use client";

import React from "react";
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
  return (
    <article
      className="group relative bg-[#111115] border border-border hover:border-accent/40 rounded-2xl transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
    >
      {/* Top Banner Ribbon */}
      <div className="flex items-center justify-between px-6 py-3.5 border-b border-border/80 bg-[#141419]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-secondary">
            {project.badge}
          </span>
        </div>

        <button
          onClick={() => onOpenGallery(project)}
          className="flex items-center gap-1.5 font-mono text-[11px] text-muted hover:text-foreground px-2.5 py-1 rounded bg-surface/60 border border-border transition-colors"
          title="View project screenshot gallery"
        >
          <Images className="w-3.5 h-3.5 text-accent-light" />
          <span>{project.screenshots.length} Screens</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-7 space-y-5 flex-1">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans tracking-tight mb-1.5 group-hover:text-accent-light transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-accent-light font-medium mb-3">
            {project.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Interactive Architecture Flow Preview */}
        <div className="pt-1">
          <ArchitectureDiagram
            nodes={project.architectureNodes}
            title="SYSTEM TOPOLOGY FLOW"
          />
        </div>

        {/* Feature Highlights */}
        <div>
          <span className="font-mono text-[11px] text-muted block mb-2.5 uppercase tracking-wider">
            Key Architectural Highlights:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.slice(0, 4).map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2 rounded-lg bg-surface/40 border border-border/70 text-xs text-secondary"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-light shrink-0 mt-0.5" />
                <span className="leading-snug text-[11px] sm:text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Badges */}
        <div className="pt-1">
          <span className="font-mono text-[11px] text-muted block mb-2 uppercase tracking-wider">
            Technologies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 8).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#16161B] border border-border text-secondary group-hover:border-border-light transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 8 && (
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface text-muted border border-border">
                +{project.technologies.length - 8} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="px-6 py-4 border-t border-border/80 bg-[#121216] flex flex-wrap items-center justify-between gap-3">
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
    </article>
  );
};
