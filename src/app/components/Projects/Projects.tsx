"use client";

import { projects } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Projects built around real workflows.</h2>
          <p className="section-copy mt-5">
            A selection of frontend and full-stack work, from focused interactive
            experiences to a secure recruitment management platform.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: Math.min(index * 0.05, 0.15) }}
              className={`group flex flex-col overflow-hidden rounded-[1.75rem] border bg-[#0d0d0d] ${
                project.featured
                  ? "border-primary/35 lg:col-span-2 lg:grid lg:grid-cols-[0.9fr_1.1fr]"
                  : "border-white/10"
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  project.featured
                    ? "aspect-video bg-[#f6f6f8] lg:aspect-auto lg:min-h-full"
                    : "min-h-60 bg-[radial-gradient(circle_at_20%_20%,rgba(255,218,39,0.18),transparent_35%),linear-gradient(135deg,#181818,#090909)]"
                }`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes={
                      project.featured
                        ? "(max-width: 1023px) 100vw, 45vw"
                        : "(max-width: 1023px) 100vw, 50vw"
                    }
                    className={`transition duration-500 group-hover:scale-[1.01] ${
                      project.featured
                        ? "object-contain object-center p-3 sm:p-4"
                        : "object-cover"
                    }`}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <span className="eyebrow">Preview coming soon</span>
                    <div>
                      <p className="text-sm text-gray-500">01 / Featured</p>
                      <p className="mt-2 text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
                        Job
                        <br />
                        Tracker<span className="text-primary">.</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="eyebrow">{project.category}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  {project.longDescription}
                </p>

                <ul className="mt-6 grid gap-3 text-sm text-gray-300 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {project.engineering && (
                  <details className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                    <summary className="focus-ring cursor-pointer text-sm font-semibold text-gray-200">
                      Engineering highlights
                    </summary>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-400">
                      {project.engineering.map((item) => (
                        <li key={item}>— {item}</li>
                      ))}
                    </ul>
                  </details>
                )}

                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
                    >
                      Live project <FaArrowUpRightFromSquare size={12} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
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
          ))}
        </div>
      </div>
    </section>
  );
}
