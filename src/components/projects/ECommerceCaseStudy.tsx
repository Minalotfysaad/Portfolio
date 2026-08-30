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
  Database,
  Maximize2,
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

  const keyFeatures = [
    "Product catalog with search, filtering, sorting, and pagination",
    "Redis-backed shopping basket",
    "Order creation and delivery methods",
    "Stripe payment integration",
    "JWT authentication and ASP.NET Identity",
    "Specification Pattern for dynamic product queries",
    "Repository & Unit of Work patterns",
    "Clean Architecture",
  ];

  const pipelineSteps = [
    {
      step: "01",
      title: "PRODUCT CATALOG",
      icon: Filter,
      description: "Dynamic product filtering, sorting, searching, and pagination using the Specification Pattern with EF Core.",
      badge: "Specification Pattern",
    },
    {
      step: "02",
      title: "REDIS SHOPPING BASKET",
      icon: Zap,
      description: "Shopping basket state stored in Redis with expiration to efficiently handle active and abandoned carts.",
      badge: "Redis Store",
    },
    {
      step: "03",
      title: "ORDER",
      icon: ShoppingCart,
      description: "Basket items are validated against current product data and converted into persistent order records with shipping and delivery information.",
      badge: "Order Processing",
    },
    {
      step: "04",
      title: "STRIPE PAYMENT",
      icon: CreditCard,
      description: "Stripe Payment Intents are used to process payments securely before completing the order workflow.",
      badge: "Stripe Payment",
    },
    {
      step: "05",
      title: "PERSISTENCE",
      icon: Database,
      description: "Orders and related data are persisted to SQL Server using EF Core and the Unit of Work pattern.",
      badge: "EF Core & UoW",
    },
  ];

  const highlights = [
    {
      title: "Specification Pattern",
      desc: "Builds composable product queries for filtering by brand, type, search terms, price, sorting, and pagination without coupling query logic to repositories.",
    },
    {
      title: "Redis Shopping Basket",
      desc: "Uses Redis for transient basket storage, reducing unnecessary database operations for frequently accessed cart data.",
    },
    {
      title: "Stripe Payment Integration",
      desc: "Integrates Stripe Payment Intents into the checkout workflow to handle payment processing before order completion.",
    },
    {
      title: "Authentication & Authorization",
      desc: "Uses ASP.NET Identity and JWT Bearer authentication to manage user accounts and secure protected API endpoints.",
    },
    {
      title: "Order Processing",
      desc: "Converts basket contents into persistent orders while capturing shipping information, delivery methods, order items, and pricing.",
    },
    {
      title: "Clean Architecture",
      desc: "Separates API, application, domain, and infrastructure responsibilities while using Repository and Unit of Work patterns for data access.",
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
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              02 — PROJECT
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground font-sans tracking-tight group-hover:text-cyan-400 transition-colors">
              E-Commerce API
            </h3>
            <p className="font-mono text-xs sm:text-sm text-secondary mt-1 max-w-4xl leading-relaxed">
              A RESTful e-commerce backend built with ASP.NET Core, supporting product catalog management, shopping baskets, orders, payments, authentication, and efficient data access.
            </p>
          </div>

          {/* Quick Key Technology Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {["C#", "ASP.NET Core", "EF Core", "SQL Server", "Redis", "Stripe"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-surface/90 border border-border/80 text-secondary font-medium"
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
              View on GitHub →
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
                  <span className="font-mono text-xs text-muted">
                    {currentScreenshot?.category || "E-Commerce System"}
                  </span>
                </div>
              </div>

              {/* Crossfading Screenshot Container (Clickable to open gallery) */}
              <div
                onClick={onOpenGalleryModal}
                className="relative aspect-[16/10] w-full bg-surface overflow-hidden cursor-pointer group/screen"
                role="button"
                tabIndex={0}
                aria-label="Click to view full screenshot gallery"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpenGalleryModal();
                  }
                }}
              >
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-200 z-20 flex items-center justify-center pointer-events-none">
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-white font-mono text-xs shadow-xl backdrop-blur-sm transform translate-y-1 group-hover/screen:translate-y-0 transition-transform duration-200">
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Click to enlarge</span>
                  </span>
                </div>

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
                    type="button"
                    onClick={() => setSelectedScreenshotIndex(idx)}
                    className={cn(
                      "relative aspect-[16/10] rounded-lg overflow-hidden border transition-all duration-200 ease-out select-none",
                      "hover:scale-[1.03] active:scale-90 active:duration-75",
                      selectedScreenshotIndex === idx
                        ? "border-cyan-400 ring-2 ring-cyan-500/30 scale-105 shadow-md shadow-cyan-500/20"
                        : "border-border/70 opacity-60 hover:opacity-100 hover:border-cyan-400/40"
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

          {/* Key Features */}
          <div className="pt-8 border-t border-border/80">
            <span className="font-mono text-xs text-cyan-400 block mb-4 uppercase tracking-wider font-semibold">
              KEY FEATURES:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="p-3.5 rounded-xl bg-surface/30 border border-border/70 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-foreground/90 leading-relaxed font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* End-To-End Checkout Pipeline */}
          <div className="pt-8 border-t border-border/80">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4" />
              <span>END-TO-END CHECKOUT PIPELINE:</span>
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

          {/* Technical Highlights */}
          <div className="pt-8 border-t border-border/80">
            <span className="font-mono text-xs text-muted block mb-4 uppercase tracking-wider">
              TECHNICAL HIGHLIGHTS:
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

          {/* Architecture & Technology Stack */}
          <div className="pt-8 border-t border-border/80 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#0E0E12] border border-border/80">
              <div className="flex items-center gap-2 font-mono text-xs text-foreground">
                <span className="font-bold text-cyan-400">ARCHITECTURE:</span>
                <span className="text-secondary font-semibold">
                  Clean Architecture · Specification Pattern · Repository Pattern · Unit of Work
                </span>
              </div>
            </div>

            {/* Complete Technology Stack */}
            <div className="p-4 rounded-xl bg-surface/20 border border-border/60">
              <span className="font-mono text-[11px] text-muted uppercase tracking-wider block mb-2.5">
                TECHNOLOGY STACK:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "C#",
                  "ASP.NET Core",
                  "Entity Framework Core",
                  "SQL Server",
                  "Redis",
                  "ASP.NET Identity",
                  "JWT",
                  "Stripe",
                  "AutoMapper",
                  "Swagger",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#141418] border border-border/80 text-foreground/90 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
