"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { ProjectGalleryModal } from "./ProjectGalleryModal";

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);
  const [selectedGalleryProject, setSelectedGalleryProject] = useState<ProjectItem | null>(null);

  const featuredProject = projectsData.find((p) => p.isFeatured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#0C0C0E]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="SELECTED WORK"
          title="PRODUCTION-STYLE BACKEND SYSTEMS"
          subtitle="Backend systems built around real business workflows, Clean Architecture, enterprise security, and transactional database integrity."
        />

        {/* Featured Project Showcase */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-accent-light uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>FEATURED SHOWCASE CENTERPIECE</span>
          </div>

          <ProjectCard
            project={featuredProject}
            onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
            onOpenGallery={(proj) => setSelectedGalleryProject(proj)}
          />
        </div>

        {/* Secondary Projects Grid */}
        <div className="space-y-4">
          <div className="font-mono text-xs text-muted uppercase tracking-wider mb-4">
            ADDITIONAL BACKEND SYSTEMS & APIS:
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
                onOpenGallery={(proj) => setSelectedGalleryProject(proj)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Gallery Lightbox Modal */}
      {selectedGalleryProject && (
        <ProjectGalleryModal
          isOpen={Boolean(selectedGalleryProject)}
          onClose={() => setSelectedGalleryProject(null)}
          title={selectedGalleryProject.title}
          screenshots={selectedGalleryProject.screenshots}
        />
      )}
    </section>
  );
};
