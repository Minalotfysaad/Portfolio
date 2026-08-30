import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "BACKEND",
    skills: [
      { name: "C#" },
      { name: ".NET 9" },
      { name: "ASP.NET Core" },
      { name: "ASP.NET Core Web API" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "data",
    title: "DATA & PERSISTENCE",
    skills: [
      { name: "SQL Server" },
      { name: "Entity Framework Core" },
      { name: "LINQ" },
      { name: "Redis" },
    ],
  },
  {
    id: "architecture",
    title: "ARCHITECTURE & DESIGN",
    skills: [
      { name: "Clean Architecture" },
      { name: "SOLID" },
      { name: "Design Patterns" },
      { name: "Dependency Injection" },
    ],
  },
  {
    id: "security",
    title: "SECURITY & VALIDATION",
    skills: [
      { name: "ASP.NET Identity" },
      { name: "JWT Authentication" },
      { name: "Role-Based Authorization" },
      { name: "FluentValidation" },
    ],
  },
  {
    id: "testing",
    title: "TESTING & QUALITY",
    skills: [
      { name: "xUnit" },
      { name: "Moq" },
      { name: "Unit Testing" },
      { name: "Global Exception Handling" },
      { name: "Logging" },
    ],
  },
  {
    id: "tools",
    title: "TOOLS & WORKFLOW",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Swagger / OpenAPI" },
      { name: "Postman" },
      { name: "GitHub Actions" },
    ],
  },
];

export const stackLayers = [
  {
    id: "client",
    title: "CLIENT LAYER",
    subtitle: "Frontend Apps / SPA / Postman / Mobile",
    description: "Sends authenticated HTTP requests with JWT Bearer tokens and JSON payloads.",
    tech: ["HTTP / HTTPS", "JSON", "REST Standards"],
    color: "#06B6D4",
  },
  {
    id: "api",
    title: "PRESENTATION / API LAYER",
    subtitle: "ASP.NET Core Web API Controllers & Middlewares",
    description: "Handles routing, JWT auth filters, model binding, centralized exception middleware, and Swagger docs.",
    tech: ["ASP.NET Core 9", "Swagger", "Global Exception Handler", "JWT Middleware"],
    color: "#3B82F6",
  },
  {
    id: "application",
    title: "APPLICATION LAYER",
    subtitle: "Business Logic Orchestration & DTOs",
    description: "Coordinates use cases, applies FluentValidation rules, and transforms entities using AutoMapper.",
    tech: ["Services", "DTOs", "FluentValidation", "AutoMapper"],
    color: "#6366F1",
  },
  {
    id: "domain",
    title: "DOMAIN LAYER",
    subtitle: "Entities, Enums, Interfaces & Core Rules",
    description: "The pure core of the system. Completely decoupled from external frameworks and persistence details.",
    tech: ["Domain Entities", "Repository Interfaces", "Custom Exceptions", "Value Objects"],
    color: "#8B5CF6",
  },
  {
    id: "infrastructure",
    title: "INFRASTRUCTURE LAYER",
    subtitle: "EF Core, SQL Server, Redis, Stripe & External Services",
    description: "Implements repository interfaces, manages DB contexts, executes migrations, and integrates external SDKs.",
    tech: ["EF Core", "SQL Server", "Redis Cache", "ASP.NET Identity", "Stripe API"],
    color: "#10B981",
  },
];
