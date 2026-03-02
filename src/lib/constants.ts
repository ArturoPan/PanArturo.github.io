export const SITE = {
  name: "AP",
  fullName: "Arturo Pan",
  title: "Software Development Engineer",
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
  // Languages
  {
    name: "Java",
    category: "Language",
    experience: [
      {
        where: "Capital One — Card Transactions (GraphQL API)",
        description:
          "Built GraphQL resolvers on the Pending and Posted Transactions Spring Boot microservices as part of the unified federated API, deployed via phased rollout to downstream mobile and web clients.",
      },
      {
        where: "Capital One — Card Transactions (Shared Library)",
        description:
          "Owned a shared Java enrichment library standardizing transaction logic across 8 Spring Boot services, eliminating 12,000+ lines of duplicated code — a 70% reduction.",
      },
    ],
  },
  {
    name: "Python",
    category: "Language",
    experience: [
      {
        where: "Capital One — Card Transactions (Schema Analyzer)",
        description:
          "Built a schema dependency analyzer using Python and Tree-sitter to detect GraphQL field usage across 150+ Java/TypeScript/Go repos, cutting dependency analysis from 6 weeks to 2 weeks.",
      },
      {
        where: "Capital One — Card Transactions (Tooling)",
        description:
          "Used Python daily for internal tooling, automation scripts, and developer productivity work throughout the role.",
      },
      {
        where: "Capital One — Enterprise Data",
        description:
          "Used PySpark for large-scale data processing jobs on EMR and Databricks, alongside the primary Scala pipeline for record validation, transformation, and Delta Lake writes.",
      },
    ],
  },
  {
    name: "TypeScript",
    category: "Language",
    experience: [
      {
        where: "Capital One — Card Transactions",
        description:
          "Built the developer portal frontend and GraphQL tooling in TypeScript/React, enabling 60+ teams to adopt the unified API and reducing onboarding time by 2–4 weeks per team.",
      },
      {
        where: "Capital One — Intern",
        description:
          "Built an internal analytics dashboard using TypeScript with GitHub and Jenkins APIs, surfacing build insights for engineering leadership.",
      },
      {
        where: "Personal Projects",
        description:
          "Used across full-stack projects including this portfolio — preferred for type safety and developer experience over plain JavaScript.",
      },
    ],
  },
  {
    name: "JavaScript",
    category: "Language",
    experience: [
      {
        where: "FillStorShip",
        description:
          "Built the full warehouse management system frontend in React/JavaScript before adopting TypeScript.",
      },
      {
        where: "Cal Poly Pomona",
        description:
          "Developed a real-time shuttle tracking web app in JavaScript/AngularJS serving 20,000+ students.",
      },
    ],
  },
  {
    name: "Scala",
    category: "Language",
    experience: [
      {
        where: "Capital One — Enterprise Data (Orchestration Service)",
        description:
          "Primary language for an event orchestration service processing hundreds of millions of records into Delta Lake, running on EMR and Databricks at enterprise scale.",
      },
      {
        where: "Capital One — Enterprise Data (Validation & Quarantine)",
        description:
          "Implemented validation, quarantine, and lifecycle logic in Scala — failed records were isolated with DynamoDB state tracking and could be restored or deleted via lifecycle operations.",
      },
    ],
  },
  // Backend
  {
    name: "Spring Boot",
    category: "Backend",
    experience: [
      {
        where: "Capital One — Card Transactions (Microservices)",
        description:
          "Built and maintained Spring Boot microservices for high-throughput credit card transaction processing, working with dependency injection, REST controllers, and service layers.",
      },
      {
        where: "Capital One — Card Transactions (GraphQL API)",
        description:
          "Shipped a federated GraphQL API with 10+ resolvers built on top of the Pending and Posted Transaction Spring Boot services, integrated with the unified developer portal.",
      },
    ],
  },
  {
    name: "GraphQL",
    category: "Backend",
    experience: [
      {
        where: "Capital One — Card Transactions (Federated API)",
        description:
          "Designed and shipped a federated GraphQL API with 10+ resolvers unifying Posted and Pending Transaction microservices, deployed via phased rollout to downstream clients.",
      },
      {
        where: "Capital One — Card Transactions (Developer Portal)",
        description:
          "Built schema validation tooling and GraphQL test clients for the developer portal, enabling 60+ teams to adopt the API with reduced onboarding friction.",
      },
    ],
  },
  {
    name: "Node.js",
    category: "Backend",
    experience: [
      {
        where: "FillStorShip",
        description:
          "Built the backend for a warehouse management system serving 1,000+ customers — REST APIs, middleware, and MongoDB integration using Node.js and Express.",
      },
    ],
  },
  {
    name: "REST APIs",
    category: "Backend",
    experience: [
      {
        where: "Capital One — Card Transactions",
        description:
          "Led E2E testing for a transactions pipeline covering 20+ API endpoints using Gatling, K6, WireMock, and JUnit in CI/CD.",
      },
      {
        where: "Capital One — Intern",
        description:
          "Consumed GitHub and Jenkins REST APIs to build an analytics dashboard surfacing build metrics for engineering leadership.",
      },
    ],
  },
  {
    name: "Apache Spark",
    category: "Backend",
    experience: [
      {
        where: "Capital One — Enterprise Data (Processing)",
        description:
          "Ran Spark jobs on EMR and Databricks to process and validate hundreds of millions of records into Delta Lake as part of the event orchestration pipeline.",
      },
      {
        where: "Capital One — Enterprise Data (On-Call)",
        description:
          "Debugged failed EMR Spark jobs during monthly on-call rotations, restoring quarantined data and resolving production incidents.",
      },
    ],
  },
  {
    name: "SQL",
    category: "Backend",
    experience: [
      {
        where: "Capital One — Card Transactions",
        description:
          "Worked with SQL as part of GraphQL API development and API migration work — querying transaction data, validating data correctness across services, and supporting schema and data model changes during migrations.",
      },
      {
        where: "Capital One — Enterprise Data",
        description:
          "Integrated AWS Glue Catalog to auto-register table schemas and partitions, enabling analysts to run SQL queries via Athena (AWS's serverless SQL query engine over S3) — reducing query latency from hours to minutes.",
      },
      {
        where: "FillStorShip & Internships",
        description:
          "Used relational databases to support backend services and reporting in internship projects.",
      },
    ],
  },
  // Frontend
  {
    name: "React",
    category: "Frontend",
    experience: [
      {
        where: "Capital One — Card Transactions",
        description:
          "Built the developer portal UI in React/TypeScript — schema validation tools, GraphQL test clients, and usage dashboards used by 60+ internal teams.",
      },
      {
        where: "FillStorShip",
        description:
          "Built the full-stack warehouse management frontend in React with real-time inventory tracking and integrated hardware scanner support.",
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
          "Used for this portfolio site — App Router, server components, Framer Motion animations, and Vercel deployment.",
      },
    ],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    experience: [
      {
        where: "Personal Projects",
        description:
          "Primary styling system for this portfolio. Used utility-first classes with a custom design system (dark surface palette, accent color, responsive layouts).",
      },
    ],
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    experience: [
      {
        where: "Cal Poly Pomona & Internships",
        description:
          "Foundation for all web projects — from the shuttle tracking app at Cal Poly to internship dashboards.",
      },
    ],
  },
  // Tools
  {
    name: "AWS",
    category: "Tools",
    experience: [
      {
        where: "Capital One — Card Transactions",
        description:
          "Daily work across the AWS ecosystem — deployed and operated microservices on EC2, ECS, and EKS; used S3, IAM, CloudWatch, and other core services as part of standard backend infrastructure.",
      },
      {
        where: "Capital One — Enterprise Data (Data Lake)",
        description:
          "Used AWS Glue Catalog to auto-register table schemas and partitions, S3 as the data lake storage layer, and EMR to run Spark jobs — enabling Athena queries that reduced analyst latency from hours to minutes.",
      },
      {
        where: "Capital One — Enterprise Data (Infrastructure)",
        description:
          "Used DynamoDB for pipeline state management, and operated within the broader AWS ecosystem including IAM, CloudWatch, and core cloud services.",
      },
    ],
  },
  {
    name: "DynamoDB",
    category: "Tools",
    experience: [
      {
        where: "Capital One — Enterprise Data",
        description:
          "Used DynamoDB to manage state for the event orchestration service, tracking record lifecycle through validation, quarantine, and ingestion stages.",
      },
      {
        where: "Capital One — Intern",
        description:
          "Used DynamoDB as the storage backend for the analytics dashboard, persisting build metric data pulled from GitHub and Jenkins APIs.",
      },
    ],
  },
  {
    name: "MongoDB",
    category: "Tools",
    experience: [
      {
        where: "FillStorShip",
        description:
          "Used MongoDB as the primary database for a warehouse management system serving 1,000+ customers — real-time inventory data, order records, and scanner events.",
      },
    ],
  },
  {
    name: "Databricks",
    category: "Tools",
    experience: [
      {
        where: "Capital One — Enterprise Data",
        description:
          "Ran Spark jobs on Databricks alongside EMR for large-scale record processing and Delta Lake writes in the event orchestration pipeline.",
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
          "Used daily across every role — branching strategies, pull requests, code reviews, and merge conflict resolution in large multi-team codebases.",
      },
    ],
  },
  {
    name: "Docker",
    category: "Tools",
    experience: [
      {
        where: "Capital One",
        description:
          "Built and containerized backend applications using Docker across multiple teams. Used Docker as part of the standard development and CI/CD workflow for Spring Boot microservices.",
      },
    ],
  },
  {
    name: "Kubernetes",
    category: "Tools",
    experience: [
      {
        where: "Capital One",
        description:
          "Built and deployed applications on Kubernetes (EKS) as part of the AWS-based infrastructure at Capital One. Worked with deployments, services, and cluster resources for backend microservice workloads.",
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
  link?: string;
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
      "Built backend systems, APIs, and developer tooling for credit card transaction processing at scale.",
    bullets: [
      "Built unified GraphQL API shipping 10+ federated resolvers integrating Posted and Pending Transactions Spring Boot microservices, deployed via phased rollout.",
      "Owned shared Java library standardizing transaction enrichment logic across 8 Spring Boot services, eliminating 12,000+ lines of duplicated code (70% reduction).",
      "Launched developer portal enabling 60+ teams to adopt the unified API through schema validation, GraphQL test clients, and usage dashboards built with TypeScript/React — reducing adoption time by 2–4 weeks per team.",
      "Built schema dependency analyzer reducing dependency analysis from 6 weeks to 2 weeks by automating field usage detection across 150+ Java/TypeScript/Go repos using Python and Tree-sitter.",
      "Led E2E testing for transactions pipeline covering 20+ API endpoints using Gatling/K6, WireMock, and JUnit in CI/CD.",
    ],
    tech: ["Java", "Spring Boot", "GraphQL", "APIs", "TypeScript", "React", "Python", "Tree-sitter", "Gatling", "K6", "WireMock", "JUnit"],
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
      "Worked on a Scala event orchestration service processing records to Delta Lake, building validation, ingestion, and data reliability tooling.",
    bullets: [
      "Implemented validation and quarantine logic in Scala event orchestration service processing records to Delta Lake, with DynamoDB state management and EMR/Databricks Spark execution.",
      "Integrated AWS Glue Catalog API into ingestion pipeline to auto-register table schemas and partitions, reducing analyst query latency from hours to minutes via Athena.",
      "Resolved production incidents during monthly on-call rotations by debugging failed EMR Spark jobs and restoring quarantined data.",
    ],
    tech: ["Scala", "Spark", "Delta Lake", "DynamoDB", "AWS Glue", "Athena", "EMR", "Databricks", "S3"],
    deepDive: true,
    slides: [
      {
        title: "Event Orchestration Pipeline",
        description:
          "End-to-end view of the Scala orchestration service — how records flow from source systems through validation, quarantine, and into Delta Lake via EMR/Databricks Spark jobs.",
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
    link: "https://cpp.service-now.com/broncoshuttle",
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
    link: "https://www.fillstorship.com/",
  },
];

export const CODE_CARD = {
  filename: "developer.js",
  lines: [
    { type: "comment", content: "// Software Engineer" },
    { type: "declaration", content: "const ", keyword: "developer", rest: " = {" },
    { type: "property", key: "name", value: "'Arturo Pan'" },
    { type: "property", key: "skills", value: "['Java', 'Python', 'TypeScript']" },
{ type: "property", key: "style", value: "'Backend-first, full-stack capable'" },
    { type: "property", key: "learning", value: "'Always'" },
    { type: "closing", content: "};" },
  ],
};
