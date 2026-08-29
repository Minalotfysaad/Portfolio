import React from "react";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CareerStatusBadge } from "./CareerStatusBadge";
import { ContactForm } from "./ContactForm";
import { Button } from "@/components/ui/Button";
import { Mail, Linkedin, Github, Download, ArrowUpRight, MapPin } from "lucide-react";
import { getBasePath } from "@/lib/utils";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#0C0C0E]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <ScrollReveal direction="up" distance={24} duration={500}>
          <SectionHeading
            badge="GET IN TOUCH"
            title="LET'S BUILD SOMETHING."
            subtitle="I'm currently open to full-time opportunities as a .NET Backend Developer."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Links & Status */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" distance={28} duration={600}>
              <CareerStatusBadge />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={28} delay={100} duration={600}>
              <div className="p-6 rounded-2xl bg-[#111114] border border-border space-y-4 shadow-xl">
                <span className="font-mono text-xs text-muted uppercase tracking-wider block">
                  DIRECT CONTACT CHANNELS
                </span>

                {/* Email CTA */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3.5 rounded-xl bg-surface/60 border border-border hover:border-accent flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-muted block uppercase">
                        Email Address
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:text-accent-light transition-colors">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent-light transition-colors" />
                </a>

                {/* LinkedIn CTA */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-surface/60 border border-border hover:border-[#0A66C2]/60 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-muted block uppercase">
                        LinkedIn
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:text-[#0A66C2] transition-colors">
                        Mina Lotfy Saad
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#0A66C2] transition-colors" />
                </a>

                {/* GitHub CTA */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-surface/60 border border-border hover:border-foreground/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-foreground">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-muted block uppercase">
                        GitHub
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:text-accent-light transition-colors">
                        @Minalotfysaad
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
                </a>

                {/* CV Download CTA */}
                <a
                  href={`${getBasePath()}${personalInfo.cvUrl}`}
                  download="Mina-Lotfy-Saad-CV.pdf"
                  className="block pt-2"
                >
                  <Button
                    variant="outline"
                    size="md"
                    icon={<Download className="w-4 h-4" />}
                    className="w-full font-mono text-xs border-accent/40 text-accent-light hover:bg-accent/10"
                  >
                    DOWNLOAD CV (PDF)
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" distance={28} delay={150} duration={600}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
