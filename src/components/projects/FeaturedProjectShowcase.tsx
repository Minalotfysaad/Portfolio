"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Github,
  ArrowUpRight,
  ShieldCheck,
  Database,
  Layers,
  CheckCircle2,
  Images,
  ExternalLink,
  Code2,
  Lock,
  Server,
  FileCode2,
  Cpu,
  Table,
  Workflow,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturedProjectShowcaseProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
  onOpenGallery: (project: ProjectItem) => void;
}

export const FeaturedProjectShowcase: React.FC<FeaturedProjectShowcaseProps> = ({
  project,
  onOpenCaseStudy,
  onOpenGallery,
}) => {
  const [activePreviewTab, setActivePreviewTab] = useState<"swagger" | "architecture" | "database" | "security">("swagger");
  const [selectedEndpointPath, setSelectedEndpointPath] = useState<string>("/api/leave-requests");

  const sampleEndpoints = [
    {
      method: "POST",
      path: "/api/auth/login",
      desc: "Authenticates credentials, issues JWT access token + rotating refresh token",
      auth: "Anonymous",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      request: `{\n  "email": "sarah.manager@company.com",\n  "password": "••••••••••••"\n}`,
      response: `{\n  "statusCode": 200,\n  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5c...",\n  "refreshToken": "d8f49e0b-7129-4a92...",\n  "expiresIn": 900,\n  "roles": ["Manager", "Employee"]\n}`,
    },
    {
      method: "GET",
      path: "/api/leave-requests",
      desc: "Retrieves paginated, filtered leave requests with role claims",
      auth: "Bearer JWT",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      request: `// Query Parameters:\n?pageNumber=1&pageSize=10&status=Pending&leaveTypeId=2`,
      response: `{\n  "pageNumber": 1,\n  "pageSize": 10,\n  "totalCount": 42,\n  "data": [\n    {\n      "id": "req-8921",\n      "employeeName": "Alex Morgan",\n      "leaveType": "Annual",\n      "startDate": "2026-09-10",\n      "endDate": "2026-09-15",\n      "daysRequested": 4,\n      "status": "Pending"\n    }\n  ]\n}`,
    },
    {
      method: "POST",
      path: "/api/leave-requests",
      desc: "Submits leave request & validates quota via FluentValidation",
      auth: "Bearer JWT (Employee)",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      request: `{\n  "leaveTypeId": 1,\n  "startDate": "2026-09-20",\n  "endDate": "2026-09-24",\n  "comments": "Family wedding attendance"\n}`,
      response: `{\n  "id": "req-9014",\n  "status": "PendingSupervisorApproval",\n  "allocatedBalanceRemaining": 14,\n  "createdAt": "2026-08-29T14:32:00Z"\n}`,
    },
    {
      method: "PUT",
      path: "/api/leave-requests/{id}/approve",
      desc: "Atomic Unit of Work approval & leave balance deduction",
      auth: "Bearer JWT (Manager/HR)",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      request: `{\n  "approvalComments": "Approved. Team cover confirmed.",\n  "decision": "Approved"\n}`,
      response: `{\n  "id": "req-8921",\n  "status": "Approved",\n  "processedBy": "sarah.manager",\n  "balanceDeducted": 4,\n  "newQuotaBalance": 12,\n  "auditLogId": "aud-4491"\n}`,
    },
  ];

  const currentEndpoint = sampleEndpoints.find((e) => e.path === selectedEndpointPath) || sampleEndpoints[1];

  return (
    <article className="relative bg-[#101014] border border-accent/40 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ring-1 ring-accent/20">
      {/* Top Banner Bar */}
      <div className="flex flex-wrap items-center justify-between px-6 sm:px-8 py-4 border-b border-border/80 bg-gradient-to-r from-[#14141A] via-[#121217] to-[#14141A]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent-light font-mono text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>FEATURED MASTERPIECE • {project.badge.split("•")[1] || "ASP.NET CORE 9"}</span>
          </div>
          <span className="font-mono text-xs text-muted hidden md:inline">
            Production-Grade HR & Approval Engine
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenGallery(project)}
            className="flex items-center gap-1.5 font-mono text-xs text-secondary hover:text-foreground px-3 py-1 rounded-lg bg-surface/70 border border-border hover:border-accent/40 transition-colors"
          >
            <Images className="w-3.5 h-3.5 text-accent-light" />
            <span>Gallery ({project.screenshots.length} Specs)</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Description & Highlights on Left, Interactive Product Workbench on Right */}
      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column (5 Cols): Project Overview & Architecture Value */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground font-sans tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-accent-light font-semibold mb-4">
              {project.subtitle}
            </p>
            <p className="text-sm sm:text-base text-secondary font-sans leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Architecture Metric Strip */}
          <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-surface/40 border border-border font-mono text-center">
            <div className="p-2">
              <span className="block text-base font-bold text-accent-light">4-Layer</span>
              <span className="text-[10px] text-muted uppercase">Clean Arch</span>
            </div>
            <div className="p-2 border-x border-border">
              <span className="block text-base font-bold text-emerald-400">JWT + Refresh</span>
              <span className="text-[10px] text-muted uppercase">Dual Token</span>
            </div>
            <div className="p-2">
              <span className="block text-base font-bold text-indigo-400">Unit of Work</span>
              <span className="text-[10px] text-muted uppercase">Transactions</span>
            </div>
          </div>

          {/* Architectural Highlights Checklist */}
          <div className="space-y-2.5">
            <span className="font-mono text-xs text-muted block uppercase tracking-wider">
              Engineered Architectural Features:
            </span>
            <div className="space-y-2 font-sans text-xs sm:text-sm text-secondary">
              {[
                "Strict layer isolation (Domain, Application, Infrastructure, Presentation Web API)",
                "Stateless JWT access tokens with rotating cryptographically random refresh tokens",
                "Unit of Work transaction coordination guaranteeing atomic balance deductions",
                "FluentValidation pipeline behavior rejecting invalid request DTOs automatically",
                "Global exception middleware returning standard RFC 7807 Problem Details JSON",
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="pt-2">
            <span className="font-mono text-xs text-muted block mb-2 uppercase tracking-wider">
              Core Tech Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                "ASP.NET Core 9",
                "C#",
                "Entity Framework Core",
                "SQL Server",
                "ASP.NET Identity",
                "JWT Auth",
                "Refresh Tokens",
                "Clean Architecture",
                "Repository Pattern",
                "Unit of Work",
                "FluentValidation",
                "AutoMapper",
                "Redis",
                "Docker",
                "Swagger / OpenAPI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#16161C] border border-border text-secondary hover:text-foreground hover:border-accent/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols): Real Product Chrome Interactive Showcase */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-[#09090C] border border-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Browser / Workbench Window Chrome Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[#131317]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-sm mx-3 px-3 py-1 rounded-lg bg-background border border-border flex items-center justify-center gap-1.5 font-mono text-[11px] text-muted truncate">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-secondary truncate">https://api.internal.hr/swagger/v1/swagger.json</span>
              </div>

              <div className="font-mono text-[10px] text-accent-light font-bold">
                API v1.0
              </div>
            </div>

            {/* Workbench Navigation Sub-Tabs */}
            <div className="flex items-center gap-1 px-4 py-2 border-b border-border bg-[#0E0E12] overflow-x-auto font-mono text-xs">
              {[
                { id: "swagger", label: "SWAGGER ENDPOINTS", icon: Server },
                { id: "architecture", label: "CLEAN ARCH FLOW", icon: Layers },
                { id: "database", label: "RELATIONAL SCHEMA", icon: Database },
                { id: "security", label: "TOKEN ROTATION", icon: ShieldCheck },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activePreviewTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActivePreviewTab(tab.id as any)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 text-xs",
                      isActive
                        ? "bg-surface text-accent-light font-bold border border-accent/40 shadow-sm"
                        : "text-secondary hover:text-foreground hover:bg-surface/50"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Interactive Swagger API Explorer */}
            {activePreviewTab === "swagger" && (
              <div className="p-5 space-y-4 font-mono text-xs animate-fadeIn">
                <div className="flex items-center justify-between text-muted text-[11px]">
                  <span>SELECT ENDPOINT TO TEST CONTRACT:</span>
                  <span className="text-accent-light">RFC 7807 Compliant</span>
                </div>

                {/* Endpoint selector list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sampleEndpoints.map((ep) => (
                    <button
                      key={ep.path}
                      onClick={() => setSelectedEndpointPath(ep.path)}
                      className={cn(
                        "p-2.5 rounded-xl border text-left transition-all flex items-center justify-between gap-2",
                        selectedEndpointPath === ep.path
                          ? "bg-surface border-accent shadow-sm"
                          : "bg-[#121216] border-border hover:border-border-light"
                      )}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={cn("px-1.5 py-0.5 rounded text-[10px] font-bold border", ep.color)}>
                          {ep.method}
                        </span>
                        <span className="text-foreground text-xs font-semibold truncate">
                          {ep.path}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Endpoint Contract Display */}
                <div className="p-4 rounded-xl bg-[#0B0B0E] border border-border/80 space-y-3">
                  <div className="flex items-center justify-between border-b border-border/50 pb-2">
                    <div className="flex items-center gap-2">
                      <span className={cn("px-2 py-0.5 rounded font-bold border text-xs", currentEndpoint.color)}>
                        {currentEndpoint.method}
                      </span>
                      <span className="text-foreground font-bold text-sm">
                        {currentEndpoint.path}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted bg-surface px-2 py-0.5 rounded border border-border">
                      {currentEndpoint.auth}
                    </span>
                  </div>

                  <p className="text-[11px] font-sans text-secondary">
                    {currentEndpoint.desc}
                  </p>

                  {/* Request / Response Split Pane */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <span className="text-[10px] text-muted uppercase block mb-1">
                        Request Body / Parameters:
                      </span>
                      <pre className="p-2.5 rounded-lg bg-surface/60 border border-border text-[11px] text-accent-light overflow-x-auto">
                        {currentEndpoint.request}
                      </pre>
                    </div>

                    <div>
                      <span className="text-[10px] text-emerald-400 uppercase block mb-1">
                        Response Payload (200 OK):
                      </span>
                      <pre className="p-2.5 rounded-lg bg-surface/60 border border-border text-[11px] text-foreground/90 overflow-x-auto">
                        {currentEndpoint.response}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Clean Architecture Layer Map */}
            {activePreviewTab === "architecture" && (
              <div className="p-5 space-y-3 font-mono text-xs animate-fadeIn">
                <div className="text-muted text-[11px] mb-2">
                  INWARD DEPENDENCY FLOW (Domain has 0 external dependencies):
                </div>

                <div className="space-y-2">
                  {[
                    {
                      layer: "01. PRESENTATION (Web API)",
                      tech: "Controllers • JWT Middleware • Exception Filter • Swagger",
                      role: "Exposes endpoints, deserializes HTTP requests, returns JSON Problem Details.",
                      color: "border-blue-500/40 text-blue-400 bg-blue-500/10",
                    },
                    {
                      layer: "02. APPLICATION LAYER",
                      tech: "Use Cases • FluentValidation • AutoMapper • DTOs",
                      role: "Orchestrates leave approval commands, validates input invariants, and maps contracts.",
                      color: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10",
                    },
                    {
                      layer: "03. DOMAIN CORE (Pure C#)",
                      tech: "Entities: LeaveRequest, LeaveAllocation, LeaveType",
                      role: "Core business rules, quota balances, date invariants without database coupling.",
                      color: "border-purple-500/40 text-purple-400 bg-purple-500/10",
                    },
                    {
                      layer: "04. INFRASTRUCTURE PERSISTENCE",
                      tech: "EF Core 9 • SQL Server • Unit of Work • Redis Cache",
                      role: "Implements Repository interfaces, manages DB contexts, executes atomic SaveChanges.",
                      color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
                    },
                  ].map((l, idx) => (
                    <div
                      key={l.layer}
                      className={cn("p-3 rounded-xl border bg-surface/50 space-y-1", l.color.split(" ")[0])}
                    >
                      <div className="flex items-center justify-between">
                        <span className={cn("font-bold text-xs", l.color.split(" ")[1])}>
                          {l.layer}
                        </span>
                        <span className="text-[10px] text-muted">Assembly: CleanArch.{l.layer.split(" ")[1]}</span>
                      </div>
                      <p className="text-[11px] text-foreground font-mono">{l.tech}</p>
                      <p className="text-[11px] font-sans text-secondary leading-snug">{l.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Relational Schema & ERD */}
            {activePreviewTab === "database" && (
              <div className="p-5 space-y-3 font-mono text-xs animate-fadeIn">
                <div className="text-muted text-[11px] mb-1">
                  NORMALIZED SQL SERVER SCHEMA & REPOSITORIES:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-surface/60 border border-border">
                    <div className="flex items-center justify-between border-b border-border pb-1.5 mb-2">
                      <span className="font-bold text-accent-light">LeaveRequests Table</span>
                      <span className="text-[10px] text-muted">Primary Entity</span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-secondary">
                      <li>• <strong className="text-foreground">Id</strong> (PK, Guid)</li>
                      <li>• <strong className="text-foreground">EmployeeId</strong> (FK → AspNetUsers)</li>
                      <li>• <strong className="text-foreground">LeaveTypeId</strong> (FK → LeaveTypes)</li>
                      <li>• <strong className="text-foreground">StartDate, EndDate</strong> (DateTime)</li>
                      <li>• <strong className="text-foreground">Status</strong> (Pending / Approved / Rejected)</li>
                      <li>• <strong className="text-foreground">ApprovedById</strong> (FK, Nullable)</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-surface/60 border border-border">
                    <div className="flex items-center justify-between border-b border-border pb-1.5 mb-2">
                      <span className="font-bold text-emerald-400">LeaveAllocations Table</span>
                      <span className="text-[10px] text-muted">Quota Ledger</span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-secondary">
                      <li>• <strong className="text-foreground">Id</strong> (PK, Guid)</li>
                      <li>• <strong className="text-foreground">EmployeeId</strong> (FK → AspNetUsers)</li>
                      <li>• <strong className="text-foreground">NumberOfDays</strong> (int, active quota)</li>
                      <li>• <strong className="text-foreground">PeriodYear</strong> (int, e.g. 2026)</li>
                      <li>• <strong className="text-foreground">RowVersion</strong> (Concurrency token)</li>
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface/40 border border-border text-[11px] text-secondary font-sans">
                  <strong>Transaction Guarantee:</strong> Approval commands invoke Unit of Work commit updating request status and deducting allocation balance within a single atomic SQL transaction.
                </div>
              </div>
            )}

            {/* Tab 4: Security & Token Rotation */}
            {activePreviewTab === "security" && (
              <div className="p-5 space-y-3 font-mono text-xs animate-fadeIn">
                <div className="text-muted text-[11px] mb-1">
                  ENTERPRISE JWT DUAL-TOKEN SECURITY PIPELINE:
                </div>

                <div className="p-4 rounded-xl bg-surface/60 border border-border space-y-3">
                  <div className="flex items-center gap-2 text-accent-light font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Stateless Access Token + Rotating Refresh Token</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-background border border-border">
                      <span className="text-accent-light font-bold block mb-1">JWT Access Token (15 Min)</span>
                      <p className="text-secondary font-sans leading-snug">
                        Signed with HMAC-SHA256 containing user ID, email, and role claims. Validated in memory without database queries.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-background border border-border">
                      <span className="text-emerald-400 font-bold block mb-1">Refresh Token (7 Days)</span>
                      <p className="text-secondary font-sans leading-snug">
                        Cryptographically secure token stored in SQL Server with revocation flags, rotation on every refresh, and expiry tracking.
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] font-sans text-muted border-t border-border/60 pt-2">
                    Enforces Role-Based Access Control: <code>[Authorize(Roles = "Manager,HRAdmin")]</code> on sensitive approval endpoints.
                  </div>
                </div>
              </div>
            )}

            {/* Product Frame Footer Bar */}
            <div className="px-5 py-3 border-t border-border bg-[#101014] flex items-center justify-between text-[11px] font-mono text-muted">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>CLEAN ARCHITECTURE 9.0 • 100% PASSING TESTS</span>
              </div>
              <span className="text-secondary hidden sm:inline">SWAGGER OPENAPI 3.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="px-6 sm:px-8 py-5 border-t border-border/80 bg-[#121217] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenCaseStudy(project)}
            icon={<ArrowUpRight className="w-4 h-4" />}
            iconPosition="right"
            className="font-mono text-xs font-bold uppercase tracking-wider"
          >
            VIEW FULL CASE STUDY
          </Button>

          <Button
            variant="secondary"
            size="md"
            onClick={() => onOpenGallery(project)}
            icon={<Images className="w-4 h-4" />}
            className="font-mono text-xs font-semibold"
          >
            VIEW SCREENSHOTS ({project.screenshots.length})
          </Button>
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="md"
            icon={<Github className="w-4 h-4" />}
            className="font-mono text-xs border-border/90 text-secondary hover:text-foreground"
          >
            EXPLORE REPOSITORY ON GITHUB →
          </Button>
        </a>
      </div>
    </article>
  );
};
