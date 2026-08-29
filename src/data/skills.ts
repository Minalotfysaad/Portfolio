import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & Frameworks",
    description: "Core server-side development technologies and API architectures.",
    skills: [
      {
        name: "C#",
        category: "Backend",
        description: "Modern, object-oriented language for robust enterprise backend applications and business domains.",
        highlight: true,
      },
      {
        name: "ASP.NET Core Web API",
        category: "Backend",
        description: "High-performance framework for building RESTful web services, middlewares, and filters.",
        highlight: true,
      },
      {
        name: ".NET",
        category: "Backend",
        description: "Cross-platform runtime powering high-throughput cloud and server applications.",
        highlight: true,
      },
      {
        name: "REST APIs",
        category: "Backend",
        description: "Standards-compliant HTTP API design with status codes, content negotiation, pagination, and HATEOAS/DTO modeling.",
        highlight: true,
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Access",
    description: "Relational persistence, query optimization, and distributed caching.",
    skills: [
      {
        name: "SQL Server",
        category: "Databases",
        description: "Relational database management, schema design, constraints, indexing, and transactional integrity.",
        highlight: true,
      },
      {
        name: "Entity Framework Core",
        category: "Databases",
        description: "Modern ORM for C# with code-first migrations, fluent API configurations, and relationship mapping.",
        highlight: true,
      },
      {
        name: "LINQ",
        category: "Databases",
        description: "Type-safe query syntax for expressive in-memory operations and translated SQL database queries.",
      },
      {
        name: "Redis",
        category: "Databases",
        description: "In-memory key-value data store used for high-performance response caching and distributed session state.",
        highlight: true,
      },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Design Patterns",
    description: "Structural patterns ensuring testability, decoupling, and maintainability.",
    skills: [
      {
        name: "Clean Architecture",
        category: "Architecture",
        description: "Layered architecture isolating Domain models and business rules from infrastructure and UI frameworks.",
        highlight: true,
      },
      {
        name: "SOLID Principles",
        category: "Architecture",
        description: "Foundational software design principles producing modular, extensible, and refactorable code.",
        highlight: true,
      },
      {
        name: "Repository Pattern",
        category: "Architecture",
        description: "Abstraction layer over data access concealing ORM implementation details behind clean interfaces.",
      },
      {
        name: "Unit of Work",
        category: "Architecture",
        description: "Coordinates transactional operations across multiple repositories into a single atomic commit.",
      },
      {
        name: "Specification Pattern",
        category: "Architecture",
        description: "Encapsulates query logic, filtering, sorting, and includes into reusable domain specification objects.",
      },
      {
        name: "Dependency Injection",
        category: "Architecture",
        description: "Inversion of control technique for registering services, managing lifecycles (Scoped/Transient/Singleton), and mocking.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Authentication",
    description: "Identity management, token security, and access control policies.",
    skills: [
      {
        name: "ASP.NET Identity",
        category: "Security",
        description: "Comprehensive membership system managing user accounts, password hashing, roles, and claims.",
        highlight: true,
      },
      {
        name: "JWT Authentication",
        category: "Security",
        description: "Stateless JSON Web Token authentication with cryptographic signature validation and payload claims.",
        highlight: true,
      },
      {
        name: "Role-Based Authorization",
        category: "Security",
        description: "Granular access control policies enforcing role permissions (Admin, Manager, User) across API endpoints.",
        highlight: true,
      },
    ],
  },
  {
    id: "libraries",
    title: "Libraries & Ecosystem",
    description: "Key .NET packages for validation, mapping, and logging.",
    skills: [
      {
        name: "AutoMapper",
        category: "Libraries",
        description: "Convention-based object-to-object mapping between Domain entities and API Data Transfer Objects (DTOs).",
      },
      {
        name: "FluentValidation",
        category: "Libraries",
        description: "Strongly-typed validation library keeping validation rules separate from business logic.",
      },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & Testing",
    description: "Tooling, containerization, automated testing, and CI/CD pipelines.",
    skills: [
      {
        name: "Git",
        category: "Tools",
        description: "Distributed version control system for branch management, commits, and collaborative workflows.",
      },
      {
        name: "GitHub",
        category: "Tools",
        description: "Remote code hosting, pull request reviews, issue tracking, and automated CI/CD workflows.",
      },
      {
        name: "Visual Studio",
        category: "Tools",
        description: "Primary enterprise IDE with profiling, debugging, database tools, and test runner integration.",
      },
      {
        name: "Postman",
        category: "Tools",
        description: "API testing, automated collection runners, environment variables, and endpoint verification.",
      },
      {
        name: "Docker",
        category: "Tools",
        description: "Containerization of ASP.NET Core applications and database services for reproducible environments.",
      },
      {
        name: "GitHub Actions",
        category: "Tools",
        description: "Continuous integration pipelines for automated building, linting, and running unit test suites.",
      },
      {
        name: "Swagger / OpenAPI",
        category: "Tools",
        description: "Interactive API documentation, request schema definitions, and client generation.",
      },
      {
        name: "xUnit",
        category: "Tools",
        description: "Modern .NET unit testing framework for writing isolated and parameterized test cases.",
      },
      {
        name: "Moq",
        category: "Tools",
        description: "Mocking library for isolating dependencies and verifying interface contracts in unit tests.",
      },
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
