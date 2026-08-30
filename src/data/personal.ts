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
  name: "Mina Lotfy Saad",
  role: ".NET Backend Developer",
  tagline:
    "I build secure, scalable, and maintainable REST APIs using C#, ASP.NET Core, Entity Framework Core, and SQL Server.",
  availabilityStatus: "Open to Junior .NET Backend Developer opportunities",
};

export const quickMetrics: MetricItem[] = [
  {
    value: "3+",
    label: "BACKEND PROJECTS",
    sublabel: "Leave Management · E-Commerce · Competitions",
    highlight: true,
  },
  {
    value: ".NET 9",
    label: "MODERN .NET STACK",
    sublabel: "C# · ASP.NET Core · EF Core",
  },
  {
    value: "SQL + REDIS",
    label: "DATA & CACHING",
    sublabel: "SQL Server · Redis · LINQ",
  },
  {
    value: "CLEAN ARCHITECTURE",
    label: "ENGINEERING PRACTICES",
    sublabel: "SOLID · JWT · Validation · Testing",
  },
];

export const aboutNarrative = {
  heading: "",
  paragraphs: [
    "I'm Mina Lotfy Saad, a .NET Backend Developer focused on building reliable and maintainable web APIs and backend systems.",
    "I transitioned into software development after starting my academic path in Civil Engineering, then pursued a Full-Stack Web Development diploma and focused my career on backend engineering with .NET.",
    "During my internship at Vetanoia Solutions, I gained hands-on experience developing backend applications and working within professional development workflows. I enjoy solving business problems through clean, practical code and continuously improving how I design and build software.",
  ],
  careerStatement: "I am actively seeking full-time opportunities as a .NET Backend Developer and am fully prepared to relocate or work in high-performing engineering teams.",
};

export const engineeringPillars: PillarItem[] = [
  {
    number: "01",
    title: "CLEAN ARCHITECTURE",
    description:
      "Separate responsibilities so backend systems remain easier to understand, test, and maintain as they grow.",
    iconName: "Layers",
  },
  {
    number: "02",
    title: "SECURITY BY DESIGN",
    description:
      "Build authentication, authorization, validation, and secure data handling into the application from the start rather than treating security as an afterthought.",
    iconName: "ShieldCheck",
  },
  {
    number: "03",
    title: "PERFORMANCE & EFFICIENCY",
    description:
      "Design APIs and data access with efficient queries, appropriate caching, pagination, and resource-conscious implementation in mind.",
    iconName: "Zap",
  },
  {
    number: "04",
    title: "TESTABILITY & QUALITY",
    description:
      "Write clear, maintainable code that can be validated through automated testing, consistent validation, logging, and reliable development practices.",
    iconName: "GitBranch",
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
