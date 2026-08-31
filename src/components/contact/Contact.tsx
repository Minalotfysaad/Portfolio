import React from "react";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CareerStatusBadge } from "./CareerStatusBadge";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#0C0C0E] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-full h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        <ScrollReveal direction="up" distance={24} duration={500}>
          <SectionHeading
            title="LET'S CONNECT"
            subtitle="Interested in working together or discussing a .NET opportunity? Feel free to reach out."
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-6">
          <ScrollReveal direction="up" distance={28} delay={100} duration={600}>
            <div className="rounded-2xl bg-[#111114] border border-border shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              {/* Inner ambient accent glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              {/* Status Badge */}
              <div className="relative">
                <CareerStatusBadge />
              </div>

              {/* Contact Channels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-4 rounded-xl bg-surface/60 border border-border hover:border-accent flex flex-col justify-between group transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent-light transition-colors" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-muted block uppercase tracking-wider">
                      Email
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:text-accent-light transition-colors truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-surface/60 border border-border hover:border-[#0A66C2]/60 flex flex-col justify-between group transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2] group-hover:scale-105 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#0A66C2] transition-colors" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-muted block uppercase tracking-wider">
                      LinkedIn
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:text-[#0A66C2] transition-colors block">
                      LinkedIn profile
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-surface/60 border border-border hover:border-foreground/40 flex flex-col justify-between group transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-muted block uppercase tracking-wider">
                      GitHub
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:text-accent-light transition-colors block">
                      GitHub profile
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
