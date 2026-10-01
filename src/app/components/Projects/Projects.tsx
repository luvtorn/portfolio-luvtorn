"use client";

import { projects, type Project } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = Boolean(project.featured);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.18) }}
      className={`project-card group overflow-hidden rounded-[1.75rem] border bg-[#0d0d0d] ${
        featured
          ? "border-primary/30 lg:grid lg:min-h-[30rem] lg:grid-cols-2"
          : "flex flex-col border-white/10"
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured
            ? `aspect-video bg-[#f4f5ee] lg:aspect-auto ${index === 1 ? "lg:order-2" : ""}`
            : "aspect-video bg-[#151515]"
        }`}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.title} application`}
            fill
            sizes={
              featured
                ? "(max-width: 1023px) 100vw, 50vw"
                : "(max-width: 1023px) 100vw, 33vw"
            }
            className={`project-card-image object-center ${
              featured || project.imageFit === "contain"
                ? "object-contain p-3 sm:p-5"
                : "object-cover"
            }`}
          />
        )}
        {featured && (
          <span className="absolute top-4 left-4 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.12em] text-black uppercase shadow-sm backdrop-blur">
            Featured case study · 0{index + 1}
          </span>
        )}
      </div>

      <div className={`flex flex-col ${featured ? "p-6 sm:p-9 lg:p-11" : "flex-1 p-6 sm:p-7"}`}>
        <p className="eyebrow">{project.category}</p>
        <h3 className={`mt-3 font-bold tracking-tight text-white ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
          {project.title}
        </h3>
        <p className="mt-4 leading-7 text-gray-400">
          {featured ? project.longDescription : project.description}
        </p>

        {featured && (
          <ul className="mt-6 space-y-2.5 text-sm leading-6 text-gray-300">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tech.slice(0, featured ? 5 : 3).map((tech) => (
            <li key={tech} className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          {project.slug && (
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`Read the ${project.title} case study`}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
            >
              Read case study <FaArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
          {project.demo && (
            <a
              href={project.demo}
              aria-label={`Open the live ${project.title} project`}
              target="_blank"
              rel="noopener noreferrer"
              className={`focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-primary hover:text-primary ${featured ? "" : "bg-primary text-black hover:bg-yellow-300 hover:text-black"}`}
            >
              Live project <FaArrowUpRightFromSquare size={12} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              aria-label={`View ${project.title} source code`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-primary hover:text-primary"
            >
              <FaGithub size={15} /> Source code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Products, not just interfaces.</h2>
          <p className="section-copy mt-5">
            Two live full-stack products with the decisions behind them, followed
            by smaller frontend experiments. Explore the case studies to see how
            I approached the workflows, architecture, and quality.
          </p>
        </div>

        <div className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-18 mb-7 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-9">
          <div>
            <p className="eyebrow">More work</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Frontend experiments & this portfolio
            </h3>
          </div>
          <a
            href="https://github.com/luvtorn"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-8 hover:decoration-primary"
          >
            More on GitHub ↗
          </a>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
