export type Project = {
  title: string;
  slug?: string;
  description: string;
  longDescription: string;
  image?: string;
  imageFit?: "contain";
  tech: string[];
  highlights: string[];
  engineering?: string[];
  category: string;
  featured?: boolean;
  github?: string;
  demo?: string;
  caseStudy?: {
    role: string;
    status: string;
    challenge: string;
    approach: string;
    system: string[];
    decisions: { title: string; detail: string }[];
    quality: string[];
    outcome: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  tech: string[];
  tasks: string[];
};

export const experiences: Experience[] = [
  {
    company: "Forte Group",
    role: "Frontend Developer Intern",
    period: "Apr 2024 — Feb 2025",
    tech: ["React", "TypeScript", "Git"],
    tasks: [
      "Developed internal dashboard interfaces with React and TypeScript.",
      "Implemented forms, REST API integrations, and dynamic data views.",
      "Tested endpoints with Postman and collaborated through Jira and Git.",
    ],
  },
  {
    company: "Sysmo.pl — IT Solutions",
    role: "Frontend Developer Intern",
    period: "May 2025 — Jul 2025",
    tech: ["Next.js", "TypeScript", "GitLab"],
    tasks: [
      "Built user and company management panels with Next.js and TypeScript.",
      "Implemented accessible forms, data tables, and API-driven workflows.",
      "Worked with REST APIs in a team environment using GitLab and Jira.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Job Tracker",
    slug: "job-tracker",
    category: "Featured full-stack project",
    featured: true,
    description:
      "A full-stack platform for managing job applications and recruitment progress.",
    longDescription:
      "A production-minded workspace that brings vacancies, candidates, interviews, documents, reminders, and recruitment analytics into one secure application.",
    image: "/projects/jobtracker-home.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TanStack Query"],
    highlights: [
      "Track vacancies, candidates, and recruitment progress.",
      "Schedule and reschedule candidate interviews.",
      "Manage documents, notes, contacts, and reminders.",
      "Explore hiring funnels and job-search statistics.",
    ],
    engineering: [
      "Rotating JWT refresh tokens in HttpOnly cookies",
      "Server-Sent Events and Cloudinary uploads",
      "Internationalization and strict TypeScript",
      "Security, architecture, service, and localization tests",
    ],
    github: "https://github.com/luvtorn/Job-Tracker",
    demo: "https://job-tracker-phi-swart.vercel.app/",
    caseStudy: {
      role: "Personal product · full-stack implementation",
      status: "Live application",
      challenge:
        "Applications, candidate details, interviews, and documents can quickly become scattered across tabs and tools. The goal was to bring those related workflows into one place without losing clarity or control over sensitive data.",
      approach:
        "I organized the product around vacancies and their recruitment progress, then connected scheduling, documents, reminders, and analytics to that central workflow. The interface is designed to make the next action visible, not just display stored records.",
      system: [
        "Next.js interface with TanStack Query",
        "Route Handlers and authenticated sessions",
        "Prisma with PostgreSQL / Neon",
        "SSE updates and Cloudinary documents",
      ],
      decisions: [
        {
          title: "Protect account sessions",
          detail:
            "JWT authentication uses rotating refresh tokens and HttpOnly cookies. This separates short-lived access from longer sessions while keeping refresh credentials out of client-side JavaScript.",
        },
        {
          title: "Keep changing workflows in sync",
          detail:
            "Server-Sent Events support live updates where the recruitment state can change, while TanStack Query manages client-side server state and refetching.",
        },
        {
          title: "Treat quality as architecture",
          detail:
            "Strict TypeScript and automated service, security-regression, architecture-boundary, and localization checks help keep a growing feature set maintainable.",
        },
      ],
      quality: [
        "Unit and service tests, with a repository integration-test foundation",
        "Security-regression and architecture-boundary tests",
        "Localization-completeness checks and read-only browser smoke tests",
      ],
      outcome:
        "A deployed end-to-end workspace covering the journey from a vacancy through interviews, documents, and reporting. The project demonstrates product design, frontend implementation, backend boundaries, and testing in one application.",
    },
  },
  {
    title: "Cookly",
    slug: "cookly",
    category: "Full-stack recipe platform",
    featured: true,
    description:
      "A multilingual platform for discovering and publishing recipes.",
    longDescription:
      "A social cooking platform with recipe discovery, creator profiles, and tools for publishing and curating recipes across English, Polish, and Russian.",
    image: "/projects/cookly.webp",
    imageFit: "contain",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Search and filter a browsable recipe catalog.",
      "Create, edit, and publish recipes with a personal profile.",
      "Switch between English, Polish, and Russian interfaces.",
      "Review and curate recipes in a protected editorial studio.",
    ],
    engineering: [
      "Recipe ownership and role-based access checks",
      "Cloudinary image uploads and responsive image presentation",
      "Vitest, Playwright, and GitHub Actions quality gates",
    ],
    github: "https://github.com/luvtorn/Cookly",
    demo: "https://cookly-proj.vercel.app/en",
    caseStudy: {
      role: "Personal product · full-stack implementation",
      status: "Live, evolving product",
      challenge:
        "Recipe discovery and publishing involve different needs: visitors want to find useful ideas quickly, while creators need a clear way to manage their own content. Editorial review adds another set of permissions and workflows.",
      approach:
        "Cookly brings a searchable recipe catalog, creator profiles, recipe publishing, and a protected editorial studio into one multilingual experience. The public catalog remains useful even before a visitor creates an account.",
      system: [
        "Localized Next.js recipe interface",
        "Creator and editorial workflows",
        "Prisma with PostgreSQL ownership rules",
        "Cloudinary recipe imagery",
      ],
      decisions: [
        {
          title: "Separate visitors, creators, and editors",
          detail:
            "Public discovery stays open, while recipe changes and editorial actions are protected by ownership and role-based access checks.",
        },
        {
          title: "Make content discoverable",
          detail:
            "Search and filtering make the catalog useful as it grows. Responsive imagery keeps recipe browsing readable across screen sizes.",
        },
        {
          title: "Build for three languages",
          detail:
            "The interface supports English, Polish, and Russian, so navigation and publishing flows must remain coherent across locales.",
        },
      ],
      quality: [
        "Vitest checks for application behavior",
        "Playwright browser coverage for key flows",
        "GitHub Actions quality gates",
      ],
      outcome:
        "A live recipe platform with public discovery and protected publishing workflows. It shows how I structure a product for different user roles while keeping the interface approachable and the codebase testable.",
    },
  },
  {
    title: "Games Collection",
    category: "Frontend application",
    description:
      "A collection of interactive mini-games including Wordle, Hangman, and Battleship.",
    longDescription:
      "A responsive React application focused on reusable game logic, state management, and approachable interactions across devices.",
    image: "/projects/games.webp",
    tech: ["React", "MobX", "Tailwind CSS"],
    highlights: [
      "Multiple games in one consistent interface.",
      "Reusable state and responsive interaction patterns.",
    ],
    demo: "https://luvtorn.github.io/games-collection",
  },
  {
    title: "Bookstore",
    category: "Next.js application",
    description:
      "An online bookstore experience with product discovery and cart workflows.",
    longDescription:
      "A typed Next.js storefront that combines filtering, product management, and a practical shopping-cart experience.",
    image: "/projects/bookstore.webp",
    tech: ["Next.js", "TypeScript", "REST API"],
    highlights: [
      "Product filtering and browsing.",
      "Cart and product-management workflows.",
    ],
  },
  {
    title: "Portfolio",
    category: "Personal website",
    description:
      "A responsive portfolio focused on accessible motion and clear project storytelling.",
    longDescription:
      "The site you are viewing: designed and built to present selected work, experience, and technical strengths with a fast, accessible interface.",
    image: "/projects/portfolio.webp",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    highlights: [
      "Responsive layout and accessible interactions.",
      "Optimized media, metadata, and motion preferences.",
    ],
    demo: "https://portfolio-luvtorn.vercel.app/",
    github: "https://github.com/luvtorn/portfolio-luvtorn",
  },
];
