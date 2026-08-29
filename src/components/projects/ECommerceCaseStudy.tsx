"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Github,
  ArrowUpRight,
  Database,
  Layers,
  CreditCard,
  Zap,
  Filter,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShoppingCart,
  Package,
  Images,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ECommerceCaseStudyProps {
  project: ProjectItem;
  onOpenGalleryModal: () => void;
}

export const ECommerceCaseStudy: React.FC<ECommerceCaseStudyProps> = ({
  project,
  onOpenGalleryModal,
}) => {
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
      title: "Specification Pattern",
      desc: "Cleanly decouples query construction from repository code, building composable LINQ expressions for filtering, sorting, and pagination.",
    },
    {
      title: "Redis Distributed Caching",
      desc: "Stores shopping basket sessions in Redis to eliminate unnecessary relational database I/O on abandoned or transient carts.",
    },
    {
      title: "Stripe Payment Integration",
      desc: "Handles end-to-end payment intent lifecycle, validating client payment tokens securely against Stripe API webhooks.",
    },
    {
      title: "JWT Authentication & Identity",
      desc: "Manages customer accounts and protects checkout, order history, and saved address endpoints with Bearer token validation.",
    },
    {
      title: "Filtering, Sorting & Pagination",
      desc: "Evaluates multi-criteria queries (by BrandId, TypeId, search keywords, PriceAsc/PriceDesc) with zero SQL injection risk.",
    },
    {
      title: "Clean Architecture & Unit of Work",
      desc: "Enforces strict domain boundaries, managing atomic order creation and inventory state consistency across tables.",
    },
  ];

  return (
    <article className="relative bg-[#111115] border border-border/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden mb-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 mb-8 border-b border-border/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            E-COMMERCE & DISTRIBUTED CACHING BACKEND
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground font-sans tracking-tight">
            E-COMMERCE API
          </h3>
          <p className="font-mono text-xs sm:text-sm text-secondary mt-1">
            High-throughput RESTful backend with Redis Shopping Basket, Specification Pattern & Stripe Integration
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="sm"
              icon={<Github className="w-4 h-4" />}
              className="font-mono text-xs font-bold"
            >
              GITHUB REPO →
            </Button>
          </a>
        </div>
      </div>

      {/* Primary Screenshot Presentation & Media Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
        {/* Large Screenshot Showcase */}
        <div className="lg:col-span-8 rounded-2xl border border-border/90 bg-[#09090C] overflow-hidden shadow-2xl">
          <div className="px-4 py-2.5 bg-[#131317] border-b border-border/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="font-mono text-xs text-muted ml-2">
                {project.screenshots[selectedScreenshotIndex]?.category || "E-Commerce System"}
              </span>
            </div>
            <button
              onClick={onOpenGalleryModal}
              className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-foreground px-2 py-0.5 rounded bg-surface border border-border transition-colors"
            >
              <Images className="w-3 h-3 text-cyan-400" />
              <span>{project.screenshots.length} Screens</span>
            </button>
          </div>

          <div className="relative aspect-[16/10] w-full bg-surface">
            <Image
              src={project.screenshots[selectedScreenshotIndex]?.src || "/images/projects/ecommerce/products.png"}
              alt={project.screenshots[selectedScreenshotIndex]?.alt || "E-Commerce API Screenshot"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Thumbnail Selector & Caption */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-xl bg-surface/40 border border-border">
            <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider block mb-1">
              ACTIVE SPECIFICATION:
            </span>
            <p className="text-xs text-secondary font-sans leading-relaxed">
              {project.screenshots[selectedScreenshotIndex]?.caption}
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
                  src={s.src}
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
      <div className="mb-12 pt-8 border-t border-border/80">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-6">
          <Zap className="w-4 h-4" />
          <span>END-TO-END CHECKOUT & PERSISTENCE PIPELINE:</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {pipelineSteps.map((step, idx) => {
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
    </article>
  );
};
