"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Github,
  ArrowUpRight,
  ShieldCheck,
  Database,
  Layers,
  CheckCircle2,
  Code2,
  Lock,
  RefreshCw,
  Server,
  Zap,
  Terminal,
  Activity,
  FileCheck,
  Cpu,
  Boxes,
  Workflow,
  Search,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface EmployeeLeaveCaseStudyProps {
  project: ProjectItem;
  onOpenCaseStudyModal: () => void;
  onOpenGalleryModal: () => void;
}

export const EmployeeLeaveCaseStudy: React.FC<EmployeeLeaveCaseStudyProps> = ({
  project,
  onOpenCaseStudyModal,
  onOpenGalleryModal,
}) => {
  // Gallery tab selection
  const [activeGalleryTab, setActiveGalleryTab] = useState<number>(0);
  // Interactive Architecture node selection
  const [hoveredNode, setHoveredNode] = useState<string>("api");

  const galleryTopics = [
    { id: 0, num: "01", title: "Overview", tag: "System Scope & Flow", file: "/images/projects/employee-leave/01.png" },
    { id: 1, num: "02", title: "Authentication", tag: "JWT & Token Rotation", file: "/images/projects/employee-leave/02.png" },
    { id: 2, num: "03", title: "Leave Requests", tag: "Submissions & Balances", file: "/images/projects/employee-leave/03.png" },
    { id: 3, num: "04", title: "Approval Workflow", tag: "Manager / Admin State Machine", file: "/images/projects/employee-leave/04.png" },
    { id: 4, num: "05", title: "Employee Management", tag: "Departments & Quotas", file: "/images/projects/employee-leave/05.png" },
    { id: 5, num: "06", title: "Swagger / API Documentation", tag: "OpenAPI Specifications", file: "/images/projects/employee-leave/06.png" },
  ];

  const archNodes: Record<
    string,
    {
      name: string;
      category: "Core" | "Satellite";
      role: string;
      tech: string[];
      description: string;
      color: string;
    }
  > = {
    api: {
      name: "API (Presentation)",
      category: "Core",
      role: "HTTP Gateway, Routing & Exception Filters",
      tech: ["ASP.NET Core 9 Web API", "Controllers", "RFC 7807 Problem Details", "Swagger UI"],
      description:
        "Exposes RESTful HTTP endpoints, enforces CORS, inspects JWT Authorization headers, and maps uncaught exceptions to uniform HTTP error payloads.",
      color: "#3B82F6",
    },
    application: {
      name: "Application",
      category: "Core",
      role: "Business Use Cases & Request Orchestration",
      tech: ["Use Cases", "FluentValidation", "AutoMapper", "Service Interfaces"],
      description:
        "Orchestrates leave application business rules, validates incoming DTOs before execution, and transforms domain models into contract shapes.",
      color: "#6366F1",
    },
    domain: {
      name: "Domain",
      category: "Core",
      role: "Enterprise Business Entities & Invariants",
      tech: ["LeaveRequest", "LeaveAllocation", "LeaveType", "Business Rules", "Enums"],
      description:
        "Pure, framework-agnostic C# entities and invariants. Holds zero dependencies on databases, UI, or external vendor packages.",
      color: "#8B5CF6",
    },
    infrastructure: {
      name: "Infrastructure",
      category: "Core",
      role: "Persistence Implementation & External Services",
      tech: ["EF Core 9", "Repository Pattern", "Unit of Work", "Migrations"],
      description:
        "Implements repository interfaces, manages EF Core DbContext, executes LINQ queries, and ensures transactional atomicity across database mutations.",
      color: "#10B981",
    },
    sqlserver: {
      name: "SQL SERVER",
      category: "Core",
      role: "Normalized Relational Persistence",
      tech: ["Microsoft SQL Server", "Code-First Schema", "Foreign Key Constraints", "Indexes"],
      description:
        "Provides ACID transactional reliability, stores relational tables for requests, allocations, historical audit logs, and identity records.",
      color: "#F59E0B",
    },
    identity: {
      name: "Identity (Security)",
      category: "Satellite",
      role: "User Management & Role Claims",
      tech: ["ASP.NET Core Identity", "PBKDF2 Password Hashing", "Role Claims (HR/Manager/Employee)"],
      description:
        "Manages user accounts, enforces lockout policies, password security, and provides security stamps for authorization checks.",
      color: "#EC4899",
    },
    redis: {
      name: "Redis (Cache)",
      category: "Satellite",
      role: "Distributed In-Memory Cache",
      tech: ["Redis", "Distributed Caching", "Session & Refresh Token State"],
      description:
        "Caches frequent read-heavy leave type lookups and provides high-speed token revocation tracking to minimize SQL queries.",
      color: "#EF4444",
    },
    serilog: {
      name: "Serilog (Observability)",
      category: "Satellite",
      role: "Structured Logging & Tracing",
      tech: ["Serilog", "Structured JSON Sinks", "Correlation IDs", "Execution Timers"],
      description:
        "Captures structured JSON logs with contextual request IDs, execution durations, and error stack traces for enterprise observability.",
      color: "#14B8A6",
    },
  };

  const engineeringDecisions = [
    {
      title: "ARCHITECTURE",
      subtitle: "Clean Architecture & Dependency Inversion",
      icon: Layers,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
      content:
        "Clean Architecture separates the system into distinct responsibilities and keeps business logic independent from infrastructure concerns. Domain entities are isolated from EF Core and web frameworks, ensuring changes to database engines or presentation protocols never compromise core business invariants.",
    },
    {
      title: "SECURITY",
      subtitle: "JWT, ASP.NET Identity & Token Rotation",
      icon: ShieldCheck,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
      content:
        "JWT authentication, ASP.NET Identity, refresh tokens, and role-based authorization secure the application's different workflows. Access tokens expire in 15 minutes, while cryptographically secure refresh tokens rotate upon each renewal with database revocation tracking to safeguard against token replay attacks.",
    },
    {
      title: "DATA ACCESS",
      subtitle: "EF Core 9, Repository & Unit of Work",
      icon: Database,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
      content:
        "Entity Framework Core, Repository Pattern, and Unit of Work provide a structured data-access layer. Complex operations—such as approving a leave request, deducting allocated balance days, and writing an audit trail record—are committed in a single atomic database transaction.",
    },
    {
      title: "VALIDATION",
      subtitle: "FluentValidation Pipeline Invariants",
      icon: FileCheck,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
      content:
        "FluentValidation handles request validation before invalid data reaches business logic. Strongly-typed validation rules verify date range consistency (end date > start date), leave quota sufficiency, and valid reason payloads before controllers invoke application use cases.",
    },
    {
      title: "PERFORMANCE",
      subtitle: "Optimized LINQ, AsNoTracking & Redis",
      icon: Zap,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
      content:
        "Read-heavy operations leverage EF Core AsNoTracking queries to eliminate change tracker overhead. Indexed foreign keys on employee and department tables speed up relational joins, while Redis distributed caching handles frequently queried leave type configurations.",
    },
    {
      title: "OBSERVABILITY",
      subtitle: "Serilog & RFC 7807 Exception Pipeline",
      icon: Activity,
      color: "text-teal-400",
      bg: "bg-teal-500/10 border-teal-500/20",
      content:
        "Serilog and centralized exception handling provide structured application logging and consistent error handling. Unhandled exceptions are intercepted by custom middleware and transformed into uniform RFC 7807 Problem Details JSON with unique correlation IDs.",
    },
    {
      title: "TESTING",
      subtitle: "Automated Testing with xUnit & Moq",
      icon: CheckCircle2,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
      content:
        "xUnit and Moq support automated testing of backend behavior. Repository mocks isolate service use cases, validating business logic rules, quota calculation algorithms, and approval state transitions in automated test suites.",
    },
  ];

  return (
    <article className="relative bg-[#111115] border border-border/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden mb-20">
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-border/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/40 bg-accent/10 text-accent-light mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            FLAGSHIP ARCHITECTURAL CASE STUDY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground font-sans tracking-tight leading-tight">
            EMPLOYEE LEAVE MANAGEMENT SYSTEM
          </h2>
          <p className="font-mono text-sm sm:text-base text-accent-light font-semibold mt-2 tracking-wide uppercase">
            PRODUCTION-STYLE HR BACKEND • ASP.NET CORE 9 & CLEAN ARCHITECTURE
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={onOpenCaseStudyModal}
            icon={<ArrowUpRight className="w-4 h-4" />}
            iconPosition="right"
            className="font-mono text-xs font-bold"
          >
            VIEW FULL CASE STUDY
          </Button>

          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              icon={<Github className="w-4 h-4" />}
              className="font-mono text-xs border-border/90 text-secondary hover:text-foreground"
            >
              SOURCE CODE →
            </Button>
          </a>
        </div>
      </div>

      {/* Large Showcase & Dynamic Interactive Specification Canvas */}
      <div className="mb-14">
        {/* Gallery Tab Switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 border-b border-border/60 font-mono text-xs scrollbar-none">
          {galleryTopics.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveGalleryTab(tab.id)}
              className={cn(
                "px-3 py-2 rounded-lg transition-all shrink-0 flex items-center gap-2 border text-left",
                activeGalleryTab === tab.id
                  ? "bg-accent text-white border-accent font-bold shadow-sm"
                  : "bg-surface/50 text-secondary hover:text-foreground hover:bg-surface border-border/70"
              )}
            >
              <span className="text-[10px] opacity-75">{tab.num}</span>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Showcase Display Box */}
        <div className="rounded-2xl border border-border/90 bg-[#0A0A0D] overflow-hidden shadow-2xl">
          {/* Window Chrome Header */}
          <div className="px-4 py-3 bg-[#131317] border-b border-border/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="font-mono text-xs text-muted ml-2 hidden sm:inline">
                spec://employee-leave-backend.v1/
                <span className="text-accent-light">
                  {galleryTopics[activeGalleryTab].title.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </span>
            </div>
            <div className="font-mono text-[11px] text-muted">
              {galleryTopics[activeGalleryTab].tag}
            </div>
          </div>

          {/* Workbench Canvas */}
          <div className="p-6 sm:p-8 min-h-[380px] sm:min-h-[440px] flex flex-col justify-center">
            {/* 01 OVERVIEW */}
            {activeGalleryTab === 0 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-surface/50 border border-border">
                    <span className="font-mono text-xs font-bold text-accent-light block mb-1">
                      01. CORE SYSTEM MISSION
                    </span>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      Orchestrates employee leave lifecycles across departments with strict multi-tier approvals (Employee → Manager → HR).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface/50 border border-border">
                    <span className="font-mono text-xs font-bold text-emerald-400 block mb-1">
                      02. ZERO DATA CORRUPTION
                    </span>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      Unit of Work guarantees balance deductions and approval state transitions commit in a single atomic database transaction.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface/50 border border-border">
                    <span className="font-mono text-xs font-bold text-purple-400 block mb-1">
                      03. DUAL-TOKEN SECURITY
                    </span>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      Stateless 15-minute JWT access tokens paired with cryptographically secure rotating refresh tokens stored in SQL Server.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#121216] border border-border font-mono text-xs">
                  <div className="text-muted mb-2 uppercase tracking-wider text-[11px]">
                    SYSTEM LIFECYCLE TOPOLOGY:
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-foreground">
                    <span className="px-2.5 py-1 rounded bg-surface border border-border">
                      Leave Submission (Pending)
                    </span>
                    <span className="text-accent-light">→</span>
                    <span className="px-2.5 py-1 rounded bg-surface border border-border">
                      FluentValidation Invariants
                    </span>
                    <span className="text-accent-light">→</span>
                    <span className="px-2.5 py-1 rounded bg-surface border border-border">
                      Manager Approval / Rejection
                    </span>
                    <span className="text-accent-light">→</span>
                    <span className="px-2.5 py-1 rounded bg-surface border border-border">
                      Atomic Balance Deduction (Unit of Work)
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 02 AUTHENTICATION */}
            {activeGalleryTab === 1 && (
              <div className="space-y-6 animate-fadeIn font-mono">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl bg-surface/50 border border-border space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
                      <Lock className="w-4 h-4" />
                      <span>Dual-Token Flow Architecture</span>
                    </div>
                    <div className="space-y-2 text-xs text-secondary font-sans">
                      <p>
                        <strong>Access Token:</strong> Stateless JWT with HMAC-SHA256 signature containing user ID, email, and Role claims (15-minute lifetime).
                      </p>
                      <p>
                        <strong>Refresh Token:</strong> 64-byte cryptographically random string persisted in SQL Server with creation timestamp, expiry date, and revocation state.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#141419] border border-border/80 text-[11px]">
                    <div className="text-muted mb-2">// POST /api/auth/login Response Payload</div>
                    <pre className="text-emerald-400 leading-relaxed overflow-x-auto">
{`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "d8f3b29a-5e71-4a82-9f33-1c7b80a24...",
  "expiresAt": "2026-08-29T21:15:00Z",
  "roles": ["HRAdmin", "Manager"]
}`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* 03 LEAVE REQUESTS */}
            {activeGalleryTab === 2 && (
              <div className="space-y-6 animate-fadeIn font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-surface/50 border border-border">
                    <span className="text-muted text-[10px] block mb-1">LEAVE TYPE 01</span>
                    <div className="font-bold text-foreground">Annual Vacation</div>
                    <span className="text-accent-light text-[11px]">21 Days / Fiscal Year</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface/50 border border-border">
                    <span className="text-muted text-[10px] block mb-1">LEAVE TYPE 02</span>
                    <div className="font-bold text-foreground">Sick Leave</div>
                    <span className="text-emerald-400 text-[11px]">14 Days (Medical Verified)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface/50 border border-border">
                    <span className="text-muted text-[10px] block mb-1">LEAVE TYPE 03</span>
                    <div className="font-bold text-foreground">Casual / Emergency</div>
                    <span className="text-amber-400 text-[11px]">7 Days (Immediate Approval)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141419] border border-border text-[11px]">
                  <div className="text-muted mb-1">// POST /api/leave-requests</div>
                  <pre className="text-blue-400 leading-relaxed overflow-x-auto">
{`{
  "leaveTypeId": 1,
  "startDate": "2026-09-01",
  "endDate": "2026-09-05",
  "requestComments": "Annual summer vacation entitlement."
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* 04 APPROVAL WORKFLOW */}
            {activeGalleryTab === 3 && (
              <div className="space-y-6 animate-fadeIn font-mono">
                <div className="p-5 rounded-xl bg-surface/60 border border-border">
                  <div className="flex items-center gap-2 text-accent-light text-xs font-bold uppercase mb-3">
                    <Workflow className="w-4 h-4" />
                    <span>Multi-Tier State Machine</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-background/80 border border-border">
                      <span className="text-muted text-[10px] block">STATE 1</span>
                      <div className="text-amber-400 font-bold">SUBMITTED</div>
                      <span className="text-secondary text-[11px]">Awaiting Manager Review</span>
                    </div>
                    <div className="p-3 rounded-lg bg-background/80 border border-border">
                      <span className="text-muted text-[10px] block">STATE 2</span>
                      <div className="text-blue-400 font-bold">MANAGER_APPROVED</div>
                      <span className="text-secondary text-[11px]">Routed to HR Record</span>
                    </div>
                    <div className="p-3 rounded-lg bg-background/80 border border-border">
                      <span className="text-muted text-[10px] block">STATE 3</span>
                      <div className="text-emerald-400 font-bold">COMMITTED</div>
                      <span className="text-secondary text-[11px]">Quota Deducted in SQL</span>
                    </div>
                    <div className="p-3 rounded-lg bg-background/80 border border-border">
                      <span className="text-muted text-[10px] block">STATE 4</span>
                      <div className="text-red-400 font-bold">REJECTED</div>
                      <span className="text-secondary text-[11px]">Reason Logged in Audit</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 05 EMPLOYEE MANAGEMENT */}
            {activeGalleryTab === 4 && (
              <div className="space-y-4 animate-fadeIn font-mono text-xs">
                <div className="p-4 rounded-xl bg-surface/50 border border-border">
                  <div className="text-accent-light font-bold mb-2">
                    Department & Allocation Quota Model:
                  </div>
                  <p className="text-secondary font-sans text-xs sm:text-sm leading-relaxed">
                    Automated fiscal year initialization generates employee quota allocations (`LeaveAllocations` table) linked to their designated department hierarchy.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-[#141419] border border-border">
                    <span className="text-muted text-[10px]">Department</span>
                    <div className="font-bold text-foreground">Engineering</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#141419] border border-border">
                    <span className="text-muted text-[10px]">Fiscal Year</span>
                    <div className="font-bold text-foreground">2026-2027</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#141419] border border-border">
                    <span className="text-muted text-[10px]">Auto-Rollover</span>
                    <div className="font-bold text-emerald-400">Max 5 Days Carryover</div>
                  </div>
                </div>
              </div>
            )}

            {/* 06 SWAGGER / API DOCUMENTATION */}
            {activeGalleryTab === 5 && (
              <div className="space-y-3 animate-fadeIn font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/60">
                  <span className="text-accent-light font-bold">SWAGGER v1 OPENAPI SPECIFICATION</span>
                  <span className="text-muted text-[11px]">JWT Bearer Auth Configured</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-surface/60 border border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30 text-[10px]">POST</span>
                      <span className="text-foreground">/api/auth/login</span>
                    </div>
                    <span className="text-muted text-[11px]">User Authentication</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface/60 border border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 text-[10px]">GET</span>
                      <span className="text-foreground">/api/leave-requests</span>
                    </div>
                    <span className="text-muted text-[11px]">Paginated Requests [Authorize]</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface/60 border border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30 text-[10px]">PUT</span>
                      <span className="text-foreground">/api/leave-requests/&#123;id&#125;/approve</span>
                    </div>
                    <span className="text-muted text-[11px]">Approval Mutation [Roles=Manager,Admin]</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* INTERACTIVE ARCHITECTURE TOOLING */}
      <div className="mb-14 pt-10 border-t border-border/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/30 bg-accent/10 text-accent-light mb-2">
              <Boxes className="w-3.5 h-3.5" />
              <span>INTERACTIVE TOPOLOGY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-sans tracking-tight">
              SYSTEM ARCHITECTURE & SATELLITE NODES
            </h3>
          </div>
          <p className="font-mono text-xs text-muted max-w-md">
            Hover or click any architectural node to inspect its specific technical responsibilities and packages.
          </p>
        </div>

        {/* Interactive Node Grid */}
        <div className="space-y-4">
          {/* Core Pipeline Nodes */}
          <div>
            <span className="font-mono text-[11px] text-muted block mb-2 uppercase tracking-wider">
              CORE CLEAN ARCHITECTURE LAYERS:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {(["api", "application", "domain", "infrastructure", "sqlserver"] as const).map((nodeKey) => {
                const node = archNodes[nodeKey];
                const isSelected = hoveredNode === nodeKey;

                return (
                  <button
                    key={nodeKey}
                    onMouseEnter={() => setHoveredNode(nodeKey)}
                    onClick={() => setHoveredNode(nodeKey)}
                    className={cn(
                      "p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between",
                      isSelected
                        ? "bg-surface border-accent shadow-md scale-[1.02]"
                        : "bg-[#141418] border-border/70 hover:border-border-light hover:bg-[#18181E]"
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: `${node.color}20`,
                            color: node.color,
                          }}
                        >
                          LAYER
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        )}
                      </div>
                      <h4 className="font-mono text-xs sm:text-sm font-bold text-foreground leading-snug">
                        {node.name}
                      </h4>
                    </div>

                    <span className="font-mono text-[10px] text-muted block mt-2 truncate">
                      {node.role}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Supporting Satellite Nodes */}
          <div>
            <span className="font-mono text-[11px] text-muted block mb-2 uppercase tracking-wider">
              CROSS-CUTTING SATELLITES:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(["identity", "redis", "serilog"] as const).map((nodeKey) => {
                const node = archNodes[nodeKey];
                const isSelected = hoveredNode === nodeKey;

                return (
                  <button
                    key={nodeKey}
                    onMouseEnter={() => setHoveredNode(nodeKey)}
                    onClick={() => setHoveredNode(nodeKey)}
                    className={cn(
                      "p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between",
                      isSelected
                        ? "bg-surface border-accent shadow-md scale-[1.02]"
                        : "bg-[#141418] border-border/70 hover:border-border-light hover:bg-[#18181E]"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: node.color }}
                      />
                      <div>
                        <h4 className="font-mono text-xs font-bold text-foreground">
                          {node.name}
                        </h4>
                        <span className="font-mono text-[10px] text-muted">
                          {node.role}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Node Inspector Drawer */}
          {hoveredNode && archNodes[hoveredNode] && (
            <div className="p-5 rounded-xl bg-surface/70 border border-border flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fadeIn mt-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${archNodes[hoveredNode].color}25`,
                      color: archNodes[hoveredNode].color,
                    }}
                  >
                    {archNodes[hoveredNode].name}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    • {archNodes[hoveredNode].role}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                  {archNodes[hoveredNode].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 shrink-0">
                {archNodes[hoveredNode].tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 rounded bg-background border border-border text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* THE ENGINEERING APPROACH */}
      <div className="pt-10 border-t border-border/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/30 bg-accent/10 text-accent-light mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>DECISION MATRIX</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-sans tracking-tight">
              THE ENGINEERING APPROACH
            </h3>
          </div>
          <p className="font-mono text-xs text-muted max-w-md">
            Architectural decisions and software engineering patterns applied across this backend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {engineeringDecisions.map((dec) => {
            const Icon = dec.icon;

            return (
              <div
                key={dec.title}
                className="p-6 rounded-2xl bg-[#0E0E12] border border-border/80 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-accent-light tracking-wider">
                      {dec.title}
                    </span>
                    <div className={cn("p-2 rounded-lg border", dec.bg)}>
                      <Icon className={cn("w-4 h-4", dec.color)} />
                    </div>
                  </div>

                  <h4 className="font-mono text-sm font-bold text-foreground mb-2">
                    {dec.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    {dec.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
