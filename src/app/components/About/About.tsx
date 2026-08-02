"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const details = [
  ["Location", "Poznań, Poland"],
  ["Focus", "React & Next.js"],
  ["Education", "IT student"],
  ["Languages", "EN · PL · RU"],
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "Figma",
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">About me</p>
          <h2 className="section-title">Code with clarity. Design with intent.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-9"
        >
          <p className="section-copy">
            I&apos;m a frontend developer who enjoys turning complex product
            requirements into clean, maintainable interfaces. During two
            internships I worked on dashboards, forms, data tables, and REST API
            integrations using React, Next.js, and TypeScript.
          </p>
          <p className="section-copy">
            I care about accessible interaction, structured code, responsive
            layouts, and the small details that make software feel dependable.
            I&apos;m currently expanding into backend development through
            production-minded full-stack projects.
          </p>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {details.map(([label, value]) => (
              <div key={label} className="bg-[#0c0c0c] p-4 sm:p-5">
                <dt className="text-xs text-gray-500">{label}</dt>
                <dd className="mt-1 text-sm font-semibold text-white">{value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <p className="mb-4 text-sm font-semibold text-gray-400">Core stack</p>
            <ul className="flex flex-wrap gap-2" aria-label="Core technology stack">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full bg-primary px-5 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Open résumé
            </a>
            <a
              href="https://github.com/luvtorn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="focus-ring rounded-full border border-white/15 p-3 text-gray-300 transition hover:border-primary hover:text-primary"
            >
              <FaGithub size={21} />
            </a>
            <a
              href="https://www.linkedin.com/in/mikolaj-germanenka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring rounded-full border border-white/15 p-3 text-gray-300 transition hover:border-primary hover:text-primary"
            >
              <FaLinkedin size={21} />
            </a>
            <a
              href="mailto:kolyangermanenko@gmail.com"
              aria-label="Email Mikołaj"
              className="focus-ring rounded-full border border-white/15 p-3 text-gray-300 transition hover:border-primary hover:text-primary"
            >
              <SiGmail size={21} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
