import { ExperienceItem } from "@/types";

export const professionalExperience: ExperienceItem[] = [
  {
    role: ".NET Backend Developer",
    company: "Vetanoia Solutions",
    location: "Alexandria, Egypt",
    period: "November 2025 — June 2026",
    description:
      "Engineered and enhanced backend micro-features and RESTful API endpoints, focusing on Clean Architecture, security, database query performance, and reliable team collaboration.",
    categories: [
      {
        title: "API DEVELOPMENT",
        description: "Built scalable HTTP RESTful endpoints and integrated business use cases.",
        bullets: [
          "Developed and enhanced RESTful API endpoints using ASP.NET Core Web API to support critical business workflows and client-facing features.",
          "Designed clean Request and Response Data Transfer Objects (DTOs) with robust input validation to prevent invalid state persistence.",
          "Configured centralized exception handling middlewares to return consistent, standardized JSON error envelopes across all endpoints.",
        ],
        tech: ["ASP.NET Core Web API", "C#", "REST APIs", "DTOs"],
      },
      {
        title: "DATABASES & DATA ACCESS",
        description: "Optimized relational persistence and query execution.",
        bullets: [
          "Designed and optimized relational database schemas and queries using Entity Framework Core and Microsoft SQL Server.",
          "Applied LINQ query optimization techniques and non-tracking queries (`AsNoTracking`) to minimize database memory footprint.",
          "Maintained and executed Code-First migrations with robust table relationships, foreign key constraints, and indexing.",
        ],
        tech: ["Entity Framework Core", "SQL Server", "LINQ", "Migrations"],
      },
      {
        title: "SECURITY & ACCESS CONTROL",
        description: "Enforced enterprise authentication and granular authorization.",
        bullets: [
          "Implemented JWT (JSON Web Token) authentication mechanisms and configured ASP.NET Identity user management.",
          "Secured sensitive API routes by enforcing Role-Based Access Control (RBAC), ensuring strict permission boundaries between user roles.",
          "Implemented secure token validation parameters and claims-based authorization policies.",
        ],
        tech: ["JWT Authentication", "ASP.NET Identity", "RBAC", "Security Policies"],
      },
      {
        title: "ARCHITECTURE & DESIGN",
        description: "Applied modular software design and decoupling patterns.",
        bullets: [
          "Contributed to backend development adhering strictly to Clean Architecture layers and SOLID design principles.",
          "Utilized the Repository and Unit of Work patterns to decouple database persistence details from core business logic.",
          "Configured ASP.NET Core built-in Dependency Injection container to manage service lifecycles cleanly.",
        ],
        tech: ["Clean Architecture", "SOLID Principles", "Repository Pattern", "Dependency Injection"],
      },
      {
        title: "COLLABORATION & CI/CD",
        description: "Collaborated in structured engineering workflows.",
        bullets: [
          "Collaborated closely with senior developers, conducting code reviews and feature branching using Git and GitHub.",
          "Maintained clean commit histories, resolved merge conflicts, and adhered to team coding guidelines.",
        ],
        tech: ["Git", "GitHub", "Code Reviews", "Branching Strategies"],
      },
      {
        title: "DOCUMENTATION & TESTING",
        description: "Standardized API specifications and endpoint validation.",
        bullets: [
          "Documented and tested RESTful APIs using Swagger / OpenAPI for seamless integration with frontend developers and stakeholders.",
          "Performed automated and manual endpoint verification using Postman collections and environment variables.",
        ],
        tech: ["Swagger / OpenAPI", "Postman", "API Documentation"],
      },
    ],
  },
];
