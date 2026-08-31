"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { MetricsStrip } from "@/components/hero/MetricsStrip";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";
import { TerminalModal } from "@/components/terminal/TerminalModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/30 selection:text-foreground overflow-x-hidden w-full max-w-full">
      {/* Top Fixed Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Factual Metrics Strip */}
      <MetricsStrip />

      {/* About & "How I Build" Engineering Philosophy */}
      <About />

      {/* Professional Experience (Vetanoia Solutions) */}
      <Experience />

      {/* Skills Matrix & Backend Stack Flow */}
      <Skills />

      {/* Selected Work Case Studies */}
      <Projects />

      {/* Education & Languages */}
      <Education />

      {/* Contact & Availability */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive Developer Terminal Easter Egg */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </main>
  );
}

