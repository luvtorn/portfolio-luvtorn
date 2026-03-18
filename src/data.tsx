import { FaGitAlt, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

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