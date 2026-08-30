"use client";

import React, { useState } from "react";
import Image from "next/image";
import { aboutNarrative } from "@/data/personal";
import { EngineeringPhilosophy } from "./EngineeringPhilosophy";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, CheckCircle2, Server } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#09090B]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Technical HUD Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <ScrollReveal direction="up" distance={30} duration={600} className="w-full">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                {/* Subtle back ambient glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-accent/20 to-indigo-600/10 rounded-3xl blur-xl opacity-60 pointer-events-none" />

                {/* Portrait Container */}
                <div className="relative bg-[#111114] border border-border/80 rounded-2xl p-3.5 shadow-2xl overflow-hidden">
                  {/* HUD Top Bar */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-border/60 font-mono text-[10px] text-muted">
                    <span className="text-secondary font-bold">ID: MINA LOTFY SAAD</span>
                  </div>

                  {/* Photo Frame */}
                  <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-surface border border-border/80 flex items-center justify-center group">
                    {!imageError ? (
                      <Image
                        src={getAssetPath("/images/profile.jpg")}
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
                      </div>
                    )}
                  </div>

                  {/* Location Footnote */}
                  <div className="mt-3 px-1 py-1 flex items-center justify-between font-mono text-xs text-secondary border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-accent-light">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="font-medium text-[11px] tracking-wide uppercase">
                        Alexandria, Egypt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center my-auto">
            <ScrollReveal direction="up" distance={30} delay={100} duration={600}>
              <div className="space-y-5 text-secondary font-sans text-sm sm:text-base leading-relaxed">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
                  ABOUT ME
                </h2>

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
            </ScrollReveal>
          </div>
        </div>

        {/* Engineering Philosophy: How I Build */}
        <EngineeringPhilosophy />
      </div>
    </section>
  );
};
