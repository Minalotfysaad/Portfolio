"use client";

import React from "react";
import { personalInfo } from "@/data/personal";
import { Github, Linkedin, Mail, Terminal, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenTerminal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-[#09090B] py-12 text-secondary">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Brand & Stack */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-sans font-bold text-foreground text-sm tracking-tight">
                MINA LOTFY SAAD
              </span>
              <span className="text-border">•</span>
              <span className="font-mono text-xs text-accent-light">
                .NET BACKEND DEVELOPER
              </span>
            </div>
            <p className="font-mono text-[11px] text-muted">
              C# • ASP.NET CORE 9 • SQL SERVER • REST APIS • CLEAN ARCHITECTURE
            </p>
          </div>

          {/* Social Links & Terminal Trigger */}
          <div className="flex items-center gap-4 text-xs font-mono">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-accent text-secondary hover:text-accent-light transition-all"
                title="Open Interactive CLI Terminal"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>CLI Easter Egg</span>
              </button>
            )}

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface border border-border hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface border border-border hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-surface border border-border hover:text-accent-light transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-muted">
          <p>© 2026 Mina Lotfy Saad. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
