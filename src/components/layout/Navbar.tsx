"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Download, Menu, X, Terminal, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenTerminal?: () => void;
}

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const viewportThreshold = 220; // Target distance from top of viewport

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportThreshold) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-[#09090B]/85 backdrop-blur-md border-b border-border/80 shadow-md py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-foreground hover:text-white transition-colors"
          aria-label="Mina Lotfy Saad Home"
        >
          <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent group-hover:shadow-glow-accent/40 transition-all">
            <span className="font-mono font-bold text-accent-light text-sm">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-foreground group-hover:text-accent-light transition-colors">
              MINA LOTFY SAAD
            </span>
            <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
              .NET Backend Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs tracking-wider">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "px-3 py-1.5 rounded-md transition-all duration-200 relative",
                  isActive
                    ? "text-accent-light font-semibold bg-accent/10"
                    : "text-secondary hover:text-foreground hover:bg-surface/50"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="hidden sm:flex items-center gap-2">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              title="Open Developer Terminal (Easter Egg)"
              className="p-2 rounded-lg text-secondary hover:text-accent-light hover:bg-surface border border-transparent hover:border-border transition-all"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 rounded-lg text-secondary hover:text-foreground hover:bg-surface border border-transparent hover:border-border transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 rounded-lg text-secondary hover:text-[#0A66C2] hover:bg-surface border border-transparent hover:border-border transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.cvUrl}
            download="Mina-Lotfy-Saad-CV.pdf"
            className="ml-1"
          >
            <Button
              variant="outline"
              size="sm"
              icon={<Download className="w-3.5 h-3.5" />}
              className="font-mono text-xs border-accent/40 text-accent-light hover:bg-accent/10"
            >
              CV
            </Button>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-1">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg text-secondary hover:text-accent-light"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-secondary hover:text-foreground hover:bg-surface focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#09090B]/95 backdrop-blur-xl border-b border-border px-4 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-2 font-mono text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between",
                    isActive
                      ? "text-accent-light bg-accent/10 font-semibold"
                      : "text-secondary hover:text-foreground hover:bg-surface"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-border text-secondary hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-border text-secondary hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a
              href={personalInfo.cvUrl}
              download="Mina-Lotfy-Saad-CV.pdf"
            >
              <Button
                variant="primary"
                size="sm"
                icon={<Download className="w-3.5 h-3.5" />}
                className="font-mono text-xs"
              >
                DOWNLOAD CV
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
