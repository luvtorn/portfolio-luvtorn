"use client";

import { experiences } from "@/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Learning by shipping.</h2>
          <p className="section-copy mt-5">
            Commercial internship experience collaborating with development
            teams and delivering API-driven interfaces.
          </p>
        </div>

        <div className="relative space-y-5 before:absolute before:top-5 before:bottom-5 before:left-3 before:w-px before:bg-white/10">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="relative pl-10"
            >
              <span className="absolute top-7 left-1.5 h-3 w-3 rounded-full border-2 border-black bg-primary" />
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-1 font-semibold text-primary">
                      {experience.company}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-gray-500">
                    {experience.period}
                  </p>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-gray-400">
                  {experience.tasks.map((task) => (
                    <li key={task} className="flex gap-2">
                      <span className="text-primary">—</span> {task}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
