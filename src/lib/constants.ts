export const SITE = {
  name: "AP",
  fullName: "Arturo Pan",
  title: "Software Engineer",
  description:
    "Engineering backend systems that power real-world products at scale.",
  email: "artpanloo@gmail.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/PanArturo", icon: "Github" as const },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/apanloo/",
    icon: "Linkedin" as const,
  },
  { label: "Email", href: "mailto:artpanloo@gmail.com", icon: "Mail" as const },
];

export type SkillCategory = "Language" | "Backend" | "Frontend" | "Tools";

export type Skill = {
  name: string;
  category: SkillCategory;
  experience: { where: string; description: string }[];
};

export const SKILLS: Skill[] = [
  {
    name: "Java",
    category: "Language",
    experience: [
      {
        where: "Capital One",
        description:
          "Primary language for building credit card transaction processing services. Used extensively with Spring Boot to build scalable, production-grade backend systems.",
      },
    ],
  },
  {
    name: "Python",
    category: "Language",
    experience: [
      {
        where: "Internship & Personal Projects",
        description:
          "Used for scripting, data processing pipelines, and building backend services. Also used for automation tooling during internship work.",
      },
    ],
  },
  {
    name: "TypeScript",
    category: "Language",
    experience: [
      {
        where: "Internship & Personal Projects",
        description:
          "Used across full-stack projects including this portfolio. Preferred over plain JavaScript for the type safety and better developer experience.",
      },
    ],
  },
  {
    name: "JavaScript",
    category: "Language",
    experience: [
      {
        where: "Internship & Personal Projects",
        description:
          "Foundation for all web development work. Used in early internship projects before transitioning to TypeScript.",
      },
    ],
  },
  {
    name: "Spring Boot",
    category: "Backend",
    experience: [
      {
        where: "Capital One",
        description:
          "Built and maintained microservices using Spring Boot for high-throughput transaction processing. Worked with dependency injection, REST controllers, and service layers.",
      },
    ],
  },
  {
    name: "Node.js",
    category: "Backend",
    experience: [
      {
        where: "Internship",
        description:
          "Built RESTful APIs and backend services during full-stack internship. Used with Express to handle routing, middleware, and database interactions.",
      },
    ],
  },
  {
    name: "REST APIs",
    category: "Backend",
    experience: [
      {
        where: "Capital One & Internships",
        description:
          "Designed and consumed REST APIs across multiple roles. At Capital One, worked on internal APIs handling transaction data at scale.",
      },
    ],
  },
  {
    name: "SQL",
    category: "Backend",
    experience: [
      {
        where: "Capital One & Internships",
        description:
          "Wrote complex queries for data retrieval and analysis. Used relational databases to support backend services and internal reporting.",
      },
    ],
  },
  {
    name: "React",
    category: "Frontend",
    experience: [
      {
        where: "Internship & Personal Projects",
        description:
          "Built dynamic UIs during internship and personal projects including this portfolio. Comfortable with hooks, component patterns, and state management.",
      },
    ],
  },
  {
    name: "Next.js",
    category: "Frontend",
    experience: [
      {
        where: "Personal Projects",
        description:
          "Used for this portfolio. Leverages the App Router, server components, and Vercel deployment for a fast, modern web experience.",
      },
    ],
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    experience: [
      {
        where: "Internship & Personal Projects",
        description:
          "Core foundation for all web work. Used Tailwind CSS extensively for styling, including this portfolio.",
      },
    ],
  },
  {
    name: "AWS",
    category: "Tools",
    experience: [
      {
        where: "Capital One",
        description:
          "Worked with AWS services as part of the cloud infrastructure at Capital One. Exposure to services supporting backend deployments and data pipelines.",
      },
    ],
  },
  {
    name: "Docker",
    category: "Tools",
    experience: [
      {
        where: "Internship",
        description:
          "Used Docker to containerize services during internship, enabling consistent development and deployment environments.",
      },
    ],
  },
  {
    name: "Git",
    category: "Tools",
    experience: [
      {
        where: "Capital One & All Roles",
        description:
          "Used daily across every role for version control. Comfortable with branching strategies, pull requests, code reviews, and resolving merge conflicts.",
      },
    ],
  },
  {
    name: "PostgreSQL",
    category: "Tools",
    experience: [
      {
        where: "Internship",
        description:
          "Used PostgreSQL as the primary database during internship projects. Wrote migrations, queries, and worked with ORM tooling.",
      },
    ],
  },
];

export type DeepDiveSlide = {
  title: string;
  description: string;
  diagramSrc?: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  latest?: boolean;
  description: string;
  bullets: string[];
  tech: string[];
  deepDive?: boolean;
  slides?: DeepDiveSlide[];
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer — Card Transactions",
    company: "Capital One",
    location: "San Francisco, CA",
    period: "Aug. 2023 – Apr. 2025",
    latest: true,
    description:
      "Built backend systems and developer tooling for credit card transaction processing at scale, serving 17M+ daily requests across mobile and web teams.",
    bullets: [
      "Built unified GraphQL API shipping 10+ federated resolvers integrating Posted and Pending Transactions Spring Boot microservices, serving 17M+ daily requests via phased rollout.",
      "Owned shared Java library standardizing transaction enrichment logic across 8 Spring Boot services, eliminating 12,000+ lines of duplicated code (70% reduction).",
      "Launched developer portal enabling 60+ teams to adopt the unified API through schema validation, GraphQL test clients, and usage dashboards built with TypeScript/React — reducing adoption time by 2–4 weeks per team.",
      "Built schema dependency analyzer reducing dependency analysis from 6 weeks to 2 weeks by automating field usage detection across 150+ Java/TypeScript/Go repos using Python and Tree-sitter.",
      "Led E2E testing for transactions pipeline covering 20+ API endpoints using Gatling/K6, WireMock, and JUnit in CI/CD.",
    ],
    tech: ["Java", "Spring Boot", "GraphQL", "TypeScript", "React", "Python", "Tree-sitter", "Gatling", "K6", "WireMock", "JUnit"],
    deepDive: true,
    slides: [
      {
        title: "System Overview",
        description:
          "High-level view of the Card Transactions platform — how Posted and Pending Transaction microservices feed into the unified GraphQL API, and how downstream mobile/web clients consume it.",
      },
      {
        title: "GraphQL Federation",
        description:
          "How the 10+ federated resolvers are structured across subgraphs, how the gateway stitches them together, and how the phased rollout was managed to avoid breaking existing consumers.",
      },
      {
        title: "Shared Java Library",
        description:
          "Architecture of the shared enrichment library — how it standardized transaction logic across 8 Spring Boot services (Account, Fraud, Payment, Rewards) and eliminated 12,000+ lines of duplicated code.",
      },
      {
        title: "Schema Dependency Analyzer",
        description:
          "How the Python/Tree-sitter tool parses 150+ repos to detect field usage, build a dependency graph, and surface impact analysis for the data modeling team.",
      },
    ],
  },
  {
    role: "Software Engineer — Enterprise Data",
    company: "Capital One",
    location: "San Francisco, CA",
    period: "Aug. 2022 – Aug. 2023",
    description:
      "Worked on a Scala event orchestration service processing 100B+ daily records to Delta Lake, building validation, ingestion, and data reliability tooling.",
    bullets: [
      "Implemented validation and quarantine logic in Scala event orchestration service processing 100B+ daily records to Delta Lake, with DynamoDB state management and EMR/Databricks Spark execution.",
      "Integrated AWS Glue Catalog API into ingestion pipeline to auto-register table schemas and partitions, reducing analyst query latency from hours to minutes via Athena.",
      "Resolved production incidents during monthly on-call rotations by debugging failed EMR Spark jobs and restoring quarantined data.",
    ],
    tech: ["Scala", "Spark", "Delta Lake", "DynamoDB", "AWS Glue", "Athena", "EMR", "Databricks", "S3"],
    deepDive: true,
    slides: [
      {
        title: "Event Orchestration Pipeline",
        description:
          "End-to-end view of the Scala orchestration service — how 100B+ daily records flow from source systems through validation, quarantine, and into Delta Lake via EMR/Databricks Spark jobs.",
      },
      {
        title: "Validation & Quarantine Logic",
        description:
          "How records are validated on ingestion, how failed records are quarantined with DynamoDB state tracking, and how lifecycle operations (load, delete, restore) are handled.",
      },
      {
        title: "AWS Glue & Athena Integration",
        description:
          "How the Glue Catalog API was integrated to auto-register table schemas and partitions, enabling analysts to query via Athena without manual schema registration — reducing query latency from hours to minutes.",
      },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Capital One",
    location: "San Francisco, CA",
    period: "Jun. 2021 – Aug. 2021",
    description:
      "Built an internal analytics dashboard surfacing engineering insights for build optimization across the enterprise.",
    bullets: [
      "Built TypeScript and React analytics dashboard using GitHub and Jenkins APIs with DynamoDB, providing engineering leadership insights that enabled enterprise-wide build optimization rules.",
    ],
    tech: ["TypeScript", "React", "DynamoDB", "GitHub API", "Jenkins"],
  },
  {
    role: "Student Developer",
    company: "Cal Poly Pomona",
    location: "Pomona, CA",
    period: "Apr. 2020 – Jun. 2021",
    description:
      "Contributed to a real-time shuttle tracking web app serving 20,000+ students.",
    bullets: [
      "Contributed to a JavaScript and AngularJS web application integrating a third-party GPS API to provide 20,000+ students with real-time university shuttle tracking.",
    ],
    tech: ["JavaScript", "AngularJS", "GPS API"],
  },
  {
    role: "Software Engineer Intern",
    company: "FillStorShip",
    location: "La Verne, CA",
    period: "May 2020 – Aug. 2020",
    description:
      "Built a full-stack warehouse management system as part of a 3-person team serving 1,000+ customers.",
    bullets: [
      "Built a React, Node.js, and MongoDB warehouse management system serving 1,000+ customers with real-time inventory tracking and integrated hardware scanners.",
    ],
    tech: ["React", "Node.js", "MongoDB"],
  },
];

export const CODE_CARD = {
  filename: "developer.js",
  lines: [
    { type: "comment", content: "// Software Engineer" },
    { type: "declaration", content: "const ", keyword: "developer", rest: " = {" },
    { type: "property", key: "name", value: "'Arturo Pan'" },
    { type: "property", key: "skills", value: "['Java', 'Python', 'TypeScript']" },
    { type: "property", key: "focuses", value: "['Backend', 'Distributed Systems']" },
    { type: "property", key: "style", value: "'Backend-first, full-stack capable'" },
    { type: "property", key: "learning", value: "'Always'" },
    { type: "closing", content: "};" },
  ],
};
