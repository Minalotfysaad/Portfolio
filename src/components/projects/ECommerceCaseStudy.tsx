"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Github,
  CreditCard,
  Zap,
  Filter,
  CheckCircle2,
  ShoppingCart,
  Package,
  Images,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn, getAssetPath } from "@/lib/utils";

interface ECommerceCaseStudyProps {
  project: ProjectItem;
  onOpenGalleryModal: () => void;
}

export const ECommerceCaseStudy: React.FC<ECommerceCaseStudyProps> = ({
  project,
  onOpenGalleryModal,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);

  const pipelineSteps = [
    {
      step: "01",
      title: "PRODUCT CATALOG",
      icon: Filter,
      description: "Specification Pattern dynamically evaluates filters, brands, types, sorting, and pagination via EF Core.",
      badge: "Specification Pattern",
    },
    {
      step: "02",
      title: "REDIS CACHE",
      icon: Zap,
      description: "High-frequency ephemeral cart reads and writes cached in Redis with automated Time-To-Live expiration.",
      badge: "In-Memory Store",
    },
    {
      step: "03",
      title: "BASKET",
      icon: ShoppingCart,
      description: "Client manipulates cart state with item quantities, recalculating prices against server database records.",
      badge: "State Validation",
    },
    {
      step: "04",
      title: "ORDER",
      icon: Package,
      description: "Transactional order creation via Unit of Work pattern capturing shipping address and line items atomically.",
      badge: "Unit of Work",
    },
    {
      step: "05",
      title: "STRIPE PAYMENT",
      icon: CreditCard,
      description: "Creates and verifies Stripe Payment Intents, guaranteeing secure card tokenization before order confirmation.",
      badge: "Stripe Gateway",
    },
  ];

  const highlights = [
    {
      title: "Specification Pattern Queries",
      desc: "Cleanly decouples query construction from repositories, building composable LINQ expressions for multi-criteria brand, category, search, and price sorting.",
    },
    {
      title: "Redis Ephemeral Cart Storage",
      desc: "Stores transient shopping basket sessions in Redis to eliminate relational database load for active and abandoned shopping carts.",
    },
    {
      title: "Stripe Payment Intent Workflow",
      desc: "Integrates Stripe Payment Intents and webhook listeners, tokenizing credit card processing before finalizing order creation.",
    },
    {
      title: "ASP.NET Identity & JWT Security",
      desc: "Manages user registration, login credentials, PBKDF2 password hashing, and JWT Bearer token authorization across user accounts.",
    },
    {
      title: "Order Processing & Delivery Methods",
      desc: "Converts cached basket items into immutable order records with delivery method selection, address validation, and state tracking.",
    },
    {
      title: "Clean Layered Architecture",
      desc: "Repository Pattern and Unit of Work orchestrating atomic SQL Server transactions with EF Core and AutoMapper DTO transformations.",
    },
  ];

  const currentScreenshot = project.screenshots[selectedScreenshotIndex] || project.screenshots[0];

  return (
    <article className="relative bg-[#111115] border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:border-cyan-500/40 hover:shadow-glow-cyan/20 transition-all duration-300 mb-8 group">
      {/* Header Bar (Always Visible) */}
      <div
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 space-y-3">
          {/* Top Identifier & Status Pill */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              CASE STUDY 02 • HIGH-THROUGHPUT API
            </span>
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider hidden sm:inline-block">
              E-COMMERCE BACKEND & PAYMENTS
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground font-sans tracking-tight group-hover:text-cyan-400 transition-colors">
              E-Commerce API
            </h3>
            <p className="font-mono text-xs sm:text-sm text-secondary mt-1">
              High-throughput RESTful backend with Redis Shopping Basket & Stripe Payment Gateway
            </p>
          </div>

          {/* Quick Key Technology Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {["ASP.NET Core", "Redis Cart", "Stripe API", "Specification Pattern", "SQL Server"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface/80 border border-border/80 text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              icon={<Github className="w-4 h-4" />}
              className="font-mono text-xs border-border/90 text-secondary hover:text-foreground"
            >
              GITHUB REPO →
            </Button>
          </a>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            icon={isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            iconPosition="right"
            className="font-mono text-xs font-bold"
          >
            {isExpanded ? "COLLAPSE DETAILS" : "EXPAND DETAILS"}
          </Button>
        </div>
      </div>

      {/* Expandable Content Body with Smooth Height Animation */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-border/80" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden space-y-12">
          {/* Primary Screenshot Showcase & Media Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Large Screenshot Showcase */}
            <div className="lg:col-span-8 rounded-2xl border border-border/90 bg-[#09090C] overflow-hidden shadow-2xl">
              <div className="px-4 py-2.5 bg-[#131317] border-b border-border/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-background/80 border border-border/60 text-[10px] font-mono text-muted">
                    <span className="text-cyan-400 font-bold">GET</span>
                    <span>/api/v1/products</span>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {currentScreenshot?.category || "E-Commerce System"}
                  </span>
                </div>
                <button
                  onClick={onOpenGalleryModal}
                  className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-foreground px-2.5 py-1 rounded bg-surface border border-border transition-colors"
                >
                  <Images className="w-3 h-3 text-cyan-400" />
                  <span>{project.screenshots.length} Screens</span>
                </button>
              </div>

              {/* Crossfading Screenshot Container */}
              <div className="relative aspect-[16/10] w-full bg-surface overflow-hidden">
                {project.screenshots.map((s, idx) => (
                  <div
                    key={s.src}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-300 ease-in-out",
                      selectedScreenshotIndex === idx ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={getAssetPath(s.src)}
                      alt={s.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Thumbnail Selector & Caption */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-surface/40 border border-border">
                <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                  ACTIVE SPECIFICATION:
                </span>
                <p className="text-xs text-secondary font-sans leading-relaxed">
                  {currentScreenshot?.caption}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {project.screenshots.map((s, idx) => (
                  <button
                    key={s.src}
                    onClick={() => setSelectedScreenshotIndex(idx)}
                    className={cn(
                      "relative aspect-[16/10] rounded-lg overflow-hidden border transition-all",
                      selectedScreenshotIndex === idx
                        ? "border-cyan-400 ring-2 ring-cyan-500/30 scale-105"
                        : "border-border/70 opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={getAssetPath(s.src)}
                      alt={s.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Linear Pipeline Flow */}
          <div className="pt-8 border-t border-border/80">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4" />
              <span>END-TO-END CHECKOUT & PERSISTENCE PIPELINE:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {pipelineSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-[#0E0E12] border border-border/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-cyan-400">
                          {step.step}
                        </span>
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                      <h4 className="font-mono text-xs font-bold text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-secondary font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-border/50 font-mono text-[9px] text-muted uppercase">
                      {step.badge}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Engineering Highlights Grid */}
          <div className="pt-8 border-t border-border/80">
            <span className="font-mono text-xs text-muted block mb-4 uppercase tracking-wider">
              CORE ENGINEERING HIGHLIGHTS:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-surface/30 border border-border/70"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
