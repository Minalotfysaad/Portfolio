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
    <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/30 selection:text-foreground">
      {/* Top Fixed Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Factual Metrics Strip */}
      <ScrollReveal direction="up" distance={20} duration={500}>
        <MetricsStrip />
      </ScrollReveal>

      {/* About & "How I Build" Engineering Philosophy */}
      <ScrollReveal direction="up" distance={30} duration={600}>
        <About />
      </ScrollReveal>

      {/* Professional Experience (Vetanoia Solutions) */}
      <ScrollReveal direction="up" distance={30} duration={600}>
        <Experience />
      </ScrollReveal>

      {/* Skills Matrix & Backend Stack Flow */}
      <ScrollReveal direction="up" distance={30} duration={600}>
        <Skills />
      </ScrollReveal>

      {/* Selected Work Case Studies */}
      <ScrollReveal direction="up" distance={30} duration={650}>
        <Projects />
      </ScrollReveal>

      {/* Education & Languages */}
      <ScrollReveal direction="up" distance={30} duration={600}>
        <Education />
      </ScrollReveal>

      {/* Contact & Availability */}
      <ScrollReveal direction="up" distance={30} duration={600}>
        <Contact />
      </ScrollReveal>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive Developer Terminal Easter Egg */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </main>
  );
}

