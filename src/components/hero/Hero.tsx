"use client";

import React from "react";
import { heroData, personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { HeroArchitectureVisual } from "./HeroArchitectureVisual";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { getBasePath } from "@/lib/utils";

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      const style = window.getComputedStyle(target);
      const paddingTop = parseFloat(style.paddingTop) || 0;
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + (paddingTop * 0.5) - topOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-36 overflow-hidden bg-grid">
      {/* Subtle architectural ambient gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-br from-accent/15 via-indigo-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:pt-10">
            {/* 1. Name */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground font-sans uppercase mb-2 sm:mb-3 leading-tight break-words">
              {heroData.name}
            </h1>

            {/* 2. Professional Title - strongest visual text after name */}
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-mono tracking-tight text-accent-light mb-4 sm:mb-5 break-words">
              {heroData.role}
            </h2>

            {/* 3. Main Description / Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-secondary leading-relaxed max-w-2xl mb-4 font-sans">
              I build secure, scalable, and maintainable REST APIs using{" "}
              <span className="text-foreground font-semibold">C#</span>,{" "}
              <span className="text-foreground font-semibold">ASP.NET Core</span>,{" "}
              <span className="text-foreground font-semibold">Entity Framework Core</span>, and{" "}
              <span className="text-foreground font-semibold">SQL Server</span>.
            </p>

            {/* 4. Supporting Positioning */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-medium font-sans mb-8 shadow-sm max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="leading-snug">{heroData.availabilityStatus}</span>
            </div>

            {/* 5. Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              <a href="#projects" onClick={handleScrollToProjects} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full sm:w-auto font-mono text-xs tracking-wider uppercase font-bold justify-center"
                >
                  View My Projects
                </Button>
              </a>

              <a
                href={`${getBasePath()}${personalInfo.cvUrl}`}
                download="Mina-Lotfy-Saad-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Download className="w-4 h-4" />}
                  className="w-full sm:w-auto font-mono text-xs tracking-wider uppercase font-semibold justify-center"
                >
                  Download CV
                </Button>
              </a>
            </div>

            {/* 6. Recruiter Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 border-t border-border/70 text-xs font-mono text-secondary max-w-full">
              <span className="text-muted tracking-wider">CONNECT:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span>GitHub</span>
              </a>
              <span className="text-border hidden sm:inline">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 shrink-0" />
                <span>LinkedIn</span>
              </a>
              <span className="text-border hidden sm:inline">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-accent-light transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Backend Visualizer */}
          <div className="hidden lg:block lg:col-span-5 w-full">
            <HeroArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
