import { FaGitAlt, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const experiences = [
  {
    company: "Forte Group",
    role: "Frontend Developer Intern",
    period: "April 2024 – February 2025",
    tech: [<FaReact />, <SiTypescript />, <FaGitAlt />],
    tasks: [
      "Assisted in developing internal dashboards using React and TypeScript",
      "Implemented forms, API integrations, and dynamic data presentation",
      "Worked with REST APIs and tested endpoints using Postman",
      "Used Git for version control and Jira for task management",
    ],
  },
  {
    company: "Sysmo.pl - IT Solutions",
    role: "Frontend Developer Intern",
    period: "May 2025 – July 2025",
    tech: [<SiNextdotjs />, <SiTypescript />, <FaGitAlt />],
    tasks: [
      "Developed user and company management panels using Next.js and TypeScript",
      "Implemented forms, data tables, and API requests",
      "Worked with REST APIs and GitLab repositories",
      "Collaborated with the development team using Jira",
    ],
  },
] as const;

export const projects: Project[] = [
  {
    title: "Games Collection",
    description:
      "A collection of mini-games like Wordle, Hangman, Battleship built with React.",
    image: "/projects/games.png",
    tech: ["React", "MobX", "Tailwind"],
    github: "https://github.com/luvtorn",
    demo: "https://luvtorn.github.io/games-collection",
  },
  {
    title: "Bookstore",
    description: "Online bookstore with cart, filters and product management.",
    image: "/projects/bookstore.png",
    tech: ["Next.js", "TypeScript", "API"],
    github: "https://github.com/luvtorn",
  },
  {
    title: "Portfolio",
    description:
      "A portfolio website showcasing React, Next.js, and creative web projects.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    demo: "https://portfolio-luvtorn.vercel.app/",
    github: "https://github.com/luvtorn/portfolio-luvtorn",
  },
] as const;
