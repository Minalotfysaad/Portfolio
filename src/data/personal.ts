import { ContactInfo, EducationItem, LanguageItem, MetricItem, PillarItem } from "@/types";

export const personalInfo: ContactInfo = {
  name: "Mina Lotfy Saad",
  role: ".NET Backend Developer",
  location: "Alexandria, Egypt",
  email: "minalotfysaad@gmail.com",
  github: "https://github.com/Minalotfysaad",
  linkedin: "https://www.linkedin.com/in/minalotfysaad",
  availability: "Available for Full-Time Opportunities",
  relocation: "Willing to Relocate",
  cvUrl: "/Mina-Lotfy-Saad-CV.pdf",
};

export const heroData = {
  name: "MINA LOTFY SAAD",
  role: ".NET BACKEND DEVELOPER",
  tagline: "Building secure, scalable, and maintainable backend systems with C# and ASP.NET Core.",
  supportingText:
    "I design and engineer production-grade RESTful APIs with a strong focus on Clean Architecture, enterprise security, database query optimization, Redis caching, and resilient code patterns.",
  metadataChips: [
    "C# / .NET 9",
    "ASP.NET Core Web API",
    "Clean Architecture",
    "Entity Framework Core",
    "SQL Server & Redis",
    "JWT & ASP.NET Identity",
  ],
};

export const quickMetrics: MetricItem[] = [
  {
    value: "3+",
    label: "FEATURED BACKEND PROJECTS",
    sublabel: "HR Leave, E-Commerce, Competitions",
    highlight: true,
  },
  {
    value: "100%",
    label: "BACKEND .NET FOCUS",
    sublabel: "C#, ASP.NET Core 9, Web API, EF Core",
  },
  {
    value: "4",
    label: "ENGINEERING PILLARS",
    sublabel: "Clean Arch, Security, Speed, Quality",
  },
  {
    value: "REST",
    label: "API ARCHITECTURE",
    sublabel: "JWT Auth, Redis Caching, Validation",
  },
];

export const aboutNarrative = {
  heading: "Architecting Reliable & Maintainable Systems",
  paragraphs: [
    "I am a .NET Backend Developer based in Alexandria, Egypt, dedicated to building secure, scalable, and maintainable backend systems. My core engineering toolkit centers around C#, ASP.NET Core Web API, Entity Framework Core, and Microsoft SQL Server.",
    "I approach backend development with an architectural mindset. Rather than simply connecting endpoints to databases, I structure codebases using Clean Architecture and SOLID principles, ensuring loose coupling, high testability, and long-term maintainability. I have practical experience implementing robust authentication pipelines (JWT, Refresh Tokens, ASP.NET Identity), role-based access control, distributed caching with Redis, and automated input validation.",
    "Whether designing complex database schemas, optimizing LINQ queries, or documenting APIs through Swagger, I prioritize clarity, performance, and real-world business resilience.",
  ],
  careerStatement: "I am actively seeking full-time opportunities as a .NET Backend Developer and am fully prepared to relocate or work in high-performing engineering teams.",
};

export const engineeringPillars: PillarItem[] = [
  {
    number: "01",
    title: "CLEAN ARCHITECTURE",
    quote: "Keeping responsibilities separated so systems remain easier to maintain, test, and evolve.",
    description:
      "Strict layer separation isolating Domain entities, Application logic, Infrastructure persistence, and Presentation APIs. This prevents tight coupling and ensures business logic remains independent of external frameworks.",
    iconName: "Layers",
    keywords: ["Domain-Driven", "Repository Pattern", "Unit of Work", "Dependency Injection"],
  },
  {
    number: "02",
    title: "SECURITY FIRST",
    quote: "Designing APIs with authentication, authorization, and secure access control in mind.",
    description:
      "Implementing industry-standard JWT token authentication with rotating refresh tokens, ASP.NET Identity user stores, password hashing, and granular Role-Based Access Control (RBAC) across all sensitive API routes.",
    iconName: "ShieldCheck",
    keywords: ["JWT Auth", "Refresh Tokens", "ASP.NET Identity", "RBAC"],
  },
  {
    number: "03",
    title: "PERFORMANCE",
    quote: "Thinking about efficient database access, caching, filtering, pagination, and scalable API behavior.",
    description:
      "Optimizing database roundtrips with EF Core compiled queries, indexed SQL Server tables, asynchronous I/O execution, server-side pagination/filtering, and high-speed Redis distributed caching.",
    iconName: "Zap",
    keywords: ["Redis Caching", "EF Core Optimization", "Asynchronous I/O", "Pagination"],
  },
  {
    number: "04",
    title: "MAINTAINABILITY",
    quote: "Using clean code, SOLID principles, validation, reusable abstractions, and structured architecture.",
    description:
      "Writing readable, self-documenting code supported by FluentValidation rules, AutoMapper DTO mappings, centralized global exception handling, structured Serilog logging, and unit tests with xUnit & Moq.",
    iconName: "GitBranch",
    keywords: ["SOLID Principles", "FluentValidation", "AutoMapper", "xUnit & Moq"],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Web Development Diploma",
    field: ".NET Full Stack",
    institution: "Route IT Training Center",
    period: "2024 – 2025",
    highlights: [
      "Intensive backend engineering curriculum centered on C#, ASP.NET Core Web API, and Entity Framework Core.",
      "Comprehensive mastery of Clean Architecture, Repository & Unit of Work patterns, and Dependency Injection.",
      "Hands-on implementation of enterprise security with ASP.NET Identity, JWT Authentication, and Role-Based Authorization.",
      "Database design, normalization, query optimization in SQL Server, and caching with Redis.",
    ],
    isHighlighted: true,
  },
  {
    degree: "Bachelor of Engineering",
    field: "Faculty of Engineering",
    institution: "Alexandria University",
    location: "Alexandria, Egypt",
    period: "2018 – 2025",
    highlights: [
      "Rigorous engineering education emphasizing analytical problem solving, systems analysis, and mathematical logic.",
      "Strong foundation in structured algorithms, computational modeling, and engineering discipline.",
    ],
  },
];

export const languagesData: LanguageItem[] = [
  {
    language: "Arabic",
    proficiency: "Native",
    nativeName: "العربية",
    description: "Mother tongue with native fluency in professional and technical contexts.",
  },
  {
    language: "English",
    proficiency: "Professional Working Proficiency",
    description: "Fluent technical reading, writing, documentation, and international team communication.",
  },
  {
    language: "German",
    proficiency: "Intermediate (B1)",
    description: "Working conversational and written language comprehension.",
  },
];
