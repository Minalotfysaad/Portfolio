import { ExperienceItem } from "@/types";

export const professionalExperience: ExperienceItem[] = [
  {
    role: ".NET Backend Developer",
    company: "Vetanoia Solutions",
    location: "Alexandria, Egypt",
    period: "November 2025 – June 2026",
    summary:
      "Worked as a .NET Backend Developer, building and maintaining backend applications and RESTful APIs while working with databases, authentication, validation, testing, and modern software development practices.",
    contributions: [
      {
        category: "API Development",
        text: "Developed and maintained **RESTful APIs using C# and ASP.NET Core**, implementing controllers, DTOs, business logic, and HTTP endpoints.",
        iconName: "Code2",
      },
      {
        category: "Data Access",
        text: "Worked with **Entity Framework Core and SQL Server** for data modeling, database operations, querying, and persistence.",
        iconName: "Database",
      },
      {
        category: "Authentication & Authorization",
        text: "Implemented **JWT-based authentication, role-based authorization, and ASP.NET Identity** to secure APIs and manage access to protected resources.",
        iconName: "ShieldCheck",
      },
      {
        category: "Validation & Error Handling",
        text: "Implemented request validation and structured error handling to improve API reliability and provide consistent responses.",
        iconName: "CheckCircle2",
      },
      {
        category: "Testing & Code Quality",
        text: "Developed and maintained **unit tests using xUnit and Moq**, while following clean coding practices and maintainable backend design principles.",
        iconName: "TestTube2",
      },
      {
        category: "Development Workflow",
        text: "Used **Git and GitHub** for version control and collaboration, and worked with **Swagger and Postman** for API documentation and testing.",
        iconName: "GitBranch",
      },
    ],
    tech: [
      "C#",
      "ASP.NET Core",
      "Web API",
      "EF Core",
      "SQL Server",
      "JWT",
      "ASP.NET Identity",
      "xUnit",
      "Moq",
      "Git",
      "Swagger",
    ],
  },
];
