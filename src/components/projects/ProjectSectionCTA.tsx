"use client";

import React from "react";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { Github, Mail, ArrowRight, Server, Terminal } from "lucide-react";

export const ProjectSectionCTA: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
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
    <div className="mt-16 relative rounded-2xl bg-gradient-to-b from-[#14141A] to-[#0E0E12] border border-border/90 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
      {/* Background ambient accents */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/30 bg-accent/10 text-accent-light">
          <Server className="w-3.5 h-3.5" />
          <span>PRODUCTION-READY .NET BACKEND ENGINEERING</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-sans tracking-tight">
          Interested in how I build backend systems?
        </h3>

        <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
          I am actively seeking backend engineering roles where I can contribute to high-performance C# / .NET Core architectures, robust relational database designs, and resilient API ecosystems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="md"
              icon={<Github className="w-4 h-4" />}
              className="font-mono text-xs border-border/90 text-foreground hover:bg-surface"
            >
              VIEW GITHUB
            </Button>
          </a>

          <a
            href="#contact"
            onClick={handleScrollToContact}
          >
            <Button
              variant="primary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
              iconPosition="right"
              className="font-mono text-xs font-bold"
            >
              GET IN TOUCH
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
