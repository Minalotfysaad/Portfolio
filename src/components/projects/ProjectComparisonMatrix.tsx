"use client";

import React from "react";
import { Check, Minus, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface MatrixRow {
  name: string;
  category?: string;
  leaveMgmt: { supported: boolean; detail: string };
  ecommerce: { supported: boolean; detail: string };
  competitions: { supported: boolean; detail: string };
}

export const ProjectComparisonMatrix: React.FC = () => {
  const matrixData: MatrixRow[] = [
    {
      name: "ASP.NET Core",
      leaveMgmt: { supported: true, detail: "v9.0 Web API" },
      ecommerce: { supported: true, detail: "Core Web API" },
      competitions: { supported: true, detail: "Core Web API" },
    },
    {
      name: "SQL Server",
      leaveMgmt: { supported: true, detail: "EF Core 9 Code-First" },
      ecommerce: { supported: true, detail: "EF Core Relational" },
      competitions: { supported: true, detail: "EF Core 3NF Schema" },
    },
    {
      name: "JWT Authentication",
      leaveMgmt: { supported: true, detail: "JWT + Rotating Refresh Tokens" },
      ecommerce: { supported: true, detail: "JWT Bearer Tokens" },
      competitions: { supported: true, detail: "JWT Bearer Tokens" },
    },
    {
      name: "ASP.NET Identity",
      leaveMgmt: { supported: true, detail: "Custom Roles & Claims" },
      ecommerce: { supported: true, detail: "Customer Profiles & Auth" },
      competitions: { supported: true, detail: "Multi-Role Policies" },
    },
    {
      name: "Clean Architecture",
      leaveMgmt: { supported: true, detail: "Domain/App/Infra/API" },
      ecommerce: { supported: true, detail: "Layered Core/Infra/API" },
      competitions: { supported: true, detail: "Domain/Infra/API" },
    },
    {
      name: "Repository Pattern",
      leaveMgmt: { supported: true, detail: "Generic + Specific Repos" },
      ecommerce: { supported: true, detail: "Generic Repositories" },
      competitions: { supported: true, detail: "Workflow Repositories" },
    },
    {
      name: "Unit of Work",
      leaveMgmt: { supported: true, detail: "Atomic Transactions" },
      ecommerce: { supported: true, detail: "Order Transactions" },
      competitions: { supported: true, detail: "Evaluation Commits" },
    },
    {
      name: "Redis Caching",
      leaveMgmt: { supported: true, detail: "Distributed Cache & State" },
      ecommerce: { supported: true, detail: "Basket Cache with TTL" },
      competitions: { supported: false, detail: "Not Utilized" },
    },
    {
      name: "Validation",
      leaveMgmt: { supported: true, detail: "FluentValidation Pipeline" },
      ecommerce: { supported: true, detail: "DTO & Data Annotations" },
      competitions: { supported: true, detail: "FluentValidation Invariants" },
    },
    {
      name: "Swagger / OpenAPI",
      leaveMgmt: { supported: true, detail: "OpenAPI + JWT Headers" },
      ecommerce: { supported: true, detail: "OpenAPI UI & Contracts" },
      competitions: { supported: true, detail: "OpenAPI Specifications" },
    },
    {
      name: "Testing",
      leaveMgmt: { supported: true, detail: "xUnit + Moq Unit Tests" },
      ecommerce: { supported: true, detail: "Postman API Collections" },
      competitions: { supported: true, detail: "Postman Flow Tests" },
    },
  ];

  return (
    <div className="mt-16 pt-12 border-t border-border/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-border bg-surface text-secondary mb-2">
            <Layers className="w-3.5 h-3.5 text-accent-light" />
            <span>CROSS-PROJECT VERIFICATION</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-sans tracking-tight">
            TECHNICAL CAPABILITIES MATRIX
          </h3>
        </div>
        <p className="font-mono text-xs text-muted max-w-md">
          A side-by-side comparison of architecture patterns, databases, security, and tooling across all three backend systems.
        </p>
      </div>

      {/* Responsive Matrix Table */}
      <div className="rounded-2xl border border-border/90 bg-[#0E0E12] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-[#131317] font-mono text-xs text-muted">
                <th className="py-4 px-5 font-semibold text-foreground">Technology / Pattern</th>
                <th className="py-4 px-5 font-semibold text-accent-light">
                  Employee Leave Management
                  <span className="block text-[10px] text-muted font-normal mt-0.5">Flagship System</span>
                </th>
                <th className="py-4 px-5 font-semibold text-cyan-400">
                  E-Commerce API
                  <span className="block text-[10px] text-muted font-normal mt-0.5">Catalog & Redis</span>
                </th>
                <th className="py-4 px-5 font-semibold text-purple-400">
                  CompetitionsHub
                  <span className="block text-[10px] text-muted font-normal mt-0.5">Workflow & Grading</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 font-sans text-xs">
              {matrixData.map((row) => (
                <tr key={row.name} className="hover:bg-surface/40 transition-colors">
                  {/* Technology Name */}
                  <td className="py-3.5 px-5 font-mono text-xs font-bold text-foreground">
                    {row.name}
                  </td>

                  {/* Employee Leave Management Column */}
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 text-accent-light flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="font-mono text-[11px] text-secondary">
                        {row.leaveMgmt.detail}
                      </span>
                    </div>
                  </td>

                  {/* E-Commerce API Column */}
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="font-mono text-[11px] text-secondary">
                        {row.ecommerce.detail}
                      </span>
                    </div>
                  </td>

                  {/* CompetitionsHub Column */}
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      {row.competitions.supported ? (
                        <>
                          <span className="w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </span>
                          <span className="font-mono text-[11px] text-secondary">
                            {row.competitions.detail}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="w-5 h-5 rounded-full bg-surface border border-border text-muted flex items-center justify-center shrink-0">
                            <Minus className="w-3 h-3" />
                          </span>
                          <span className="font-mono text-[11px] text-muted">
                            {row.competitions.detail}
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
