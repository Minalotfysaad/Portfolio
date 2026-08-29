"use client";

import React from "react";
import { heroData, personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { HeroArchitectureVisual } from "./HeroArchitectureVisual";
import { ArrowRight, Download, Github, Linkedin, Mail, ShieldCheck, Database, Layers } from "lucide-react";

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-grid">
      {/* Radial lighting blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-accent/15 via-indigo-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Professional Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent-light text-xs font-mono tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{heroData.role}</span>
            </div>

            {/* Engineer Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground font-sans uppercase mb-4">
              MINA LOTFY SAAD
            </h1>

            {/* Core Value Proposition Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 font-sans tracking-tight mb-5 leading-snug">
              {heroData.tagline}
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-2xl mb-8 font-sans">
              {heroData.supportingText}
            </p>

            {/* Technical Chips / Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {heroData.metadataChips.map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface border border-border text-secondary hover:text-foreground hover:border-border-light transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a href="#projects" onClick={handleScrollToProjects}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  VIEW MY WORK
                </Button>
              </a>

              <a
                href={personalInfo.cvUrl}
                download="Mina-Lotfy-Saad-CV.pdf"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Download className="w-4 h-4" />}
                >
                  DOWNLOAD CV
                </Button>
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/60 text-xs font-mono text-secondary">
              <span className="text-muted">CONNECT:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-accent-light transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Backend Visualizer */}
          <div className="lg:col-span-5 w-full">
            <HeroArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
