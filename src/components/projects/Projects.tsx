"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmployeeLeaveCaseStudy } from "./EmployeeLeaveCaseStudy";
import { ECommerceCaseStudy } from "./ECommerceCaseStudy";
import { CompetitionsHubCaseStudy } from "./CompetitionsHubCaseStudy";
import { ProjectSectionCTA } from "./ProjectSectionCTA";
import { ProjectGalleryModal } from "./ProjectGalleryModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Projects: React.FC = () => {
  const [selectedGalleryProject, setSelectedGalleryProject] = useState<ProjectItem | null>(null);

  const leaveProject = projectsData.find((p) => p.id === "employee-leave-management") || projectsData[0];
  const ecommerceProject = projectsData.find((p) => p.id === "ecommerce-api") || projectsData[1];
  const competitionsProject = projectsData.find((p) => p.id === "competitionshub-api") || projectsData[2];

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#09090C]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="PRODUCTION CASE STUDIES"
          title="BACKEND SYSTEMS & ARCHITECTURAL CASE STUDIES"
          subtitle="Real-world backend architectures engineered around complex business lifecycles, Clean Architecture, transactional data access, and enterprise security."
        />

        {/* 1. FLAGSHIP CASE STUDY: EMPLOYEE LEAVE MANAGEMENT SYSTEM */}
        <ScrollReveal direction="up" distance={35} duration={700}>
          <EmployeeLeaveCaseStudy
            project={leaveProject}
            onOpenGalleryModal={() => setSelectedGalleryProject(leaveProject)}
          />
        </ScrollReveal>

        {/* 2. E-COMMERCE API CASE STUDY */}
        <ScrollReveal direction="up" distance={35} duration={700}>
          <ECommerceCaseStudy
            project={ecommerceProject}
            onOpenGalleryModal={() => setSelectedGalleryProject(ecommerceProject)}
          />
        </ScrollReveal>

        {/* 3. COMPETITIONSHUB API CASE STUDY */}
        <ScrollReveal direction="up" distance={35} duration={700}>
          <CompetitionsHubCaseStudy
            project={competitionsProject}
            onOpenGalleryModal={() => setSelectedGalleryProject(competitionsProject)}
          />
        </ScrollReveal>

        {/* 4. FINAL PROJECT SECTION CTA */}
        <ScrollReveal direction="up" distance={25} duration={600}>
          <ProjectSectionCTA />
        </ScrollReveal>
      </div>

      {/* Media & Screenshot Lightbox Modal */}
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

