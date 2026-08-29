"use client";

import React, { useState } from "react";
import Image from "next/image";
import { aboutNarrative, personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EngineeringPhilosophy } from "./EngineeringPhilosophy";
import { MapPin, CheckCircle2, ShieldCheck, Database, Code2, Server, Cpu, Layers } from "lucide-react";

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#09090B]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="ABOUT ME"
          title="BACKEND ARCHITECTURE & RESILIENT SYSTEMS"
          subtitle="Engineering robust, maintainable, and high-performance server-side architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Technical HUD Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-sm">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent/20 to-indigo-600/10 rounded-3xl blur-xl opacity-60 pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative bg-[#111114] border border-border/80 rounded-2xl p-3.5 shadow-2xl overflow-hidden">
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-border/60 font-mono text-[10px] text-muted">
                  <span className="text-secondary font-bold">ID: MINA LOTFY SAAD</span>
                  <span className="text-accent-light">.NET CORE 9</span>
                </div>

                {/* Photo Frame */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-surface border border-border/80 flex items-center justify-center group">
                  {!imageError ? (
                    <Image
                      src="/images/profile.jpg"
                      alt="Mina Lotfy Saad — .NET Backend Developer"
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    /* High-tech Professional Fallback Frame */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#15151A] to-[#0D0D10]">
                      <div className="w-20 h-20 rounded-2xl bg-surface border border-accent/40 flex items-center justify-center text-accent-light shadow-glow-accent mb-4">
                        <Server className="w-10 h-10" />
                      </div>
                      <h4 className="font-mono text-sm font-bold text-foreground">
                        MINA LOTFY SAAD
                      </h4>
                      <p className="font-mono text-xs text-accent-light mt-1">
                        .NET Backend Developer
                      </p>
                      <div className="mt-4 pt-3 border-t border-border/60 w-full text-[11px] font-mono text-muted">
                        Asset: /public/images/profile.jpg
                      </div>
                    </div>
                  )}

                  {/* Corner Accent HUD Overlays */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-background/80 backdrop-blur-md border border-border text-[9px] font-mono text-secondary">
                    ROLE: BACKEND DEV
                  </div>
                </div>

                {/* Location & Status Footnote */}
                <div className="mt-3 px-1 py-1 flex items-center justify-between font-mono text-xs text-secondary border-t border-border/50">
                  <div className="flex items-center gap-1.5 text-accent-light">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-medium text-[11px] tracking-wide uppercase">
                      Alexandria, Egypt
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    OPEN TO RELOCATE
                  </span>
                </div>
              </div>

              {/* Core Strengths Quick Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 font-mono text-xs w-full">
                <div className="p-2.5 rounded-xl bg-surface/50 border border-border flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-foreground text-[11px]">JWT & RBAC Auth</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface/50 border border-border flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-foreground text-[11px]">EF Core & SQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5 text-secondary font-sans text-sm sm:text-base leading-relaxed">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight font-sans">
                {aboutNarrative.heading}
              </h3>

              {aboutNarrative.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="p-4 sm:p-5 rounded-xl bg-accent/5 border border-accent/20 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-mono text-foreground leading-relaxed">
                    {aboutNarrative.careerStatement}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Skills Summary Chips */}
            <div className="mt-8 pt-6 border-t border-border/60">
              <span className="font-mono text-xs text-muted block mb-3 uppercase tracking-wider">
                Key Competencies:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Clean Architecture",
                  "ASP.NET Core Web API",
                  "C#",
                  "Entity Framework Core",
                  "SQL Server",
                  "Redis Caching",
                  "JWT Authentication",
                  "Role-Based Authorization",
                  "Repository Pattern",
                  "Unit of Work",
                  "FluentValidation",
                  "Swagger / OpenAPI",
                ].map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-surface border border-border text-secondary hover:text-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy: How I Build */}
        <EngineeringPhilosophy />
      </div>
    </section>
  );
};
