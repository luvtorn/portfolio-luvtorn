"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="container-shell section-shell flex min-h-[min(54rem,100svh)] items-center pt-30"
    >
      <div className="relative z-10 grid w-full items-center gap-12 md:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to frontend opportunities
          </div>
          <p className="eyebrow">Mikołaj Germanenka · Poznań, Poland</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(3rem,9vw,6.7rem)] leading-[0.92] font-bold tracking-[-0.065em] text-white">
            I build useful products,
            <span className="block text-primary">end to end.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            I&apos;m a frontend developer who turns complex workflows into clear,
            accessible interfaces. My work includes two live full-stack products,
            Job Tracker and Cookly, alongside commercial experience building
            internal tools.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-black transition hover:bg-yellow-300"
            >
              Explore case studies <FaArrowRight size={13} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-bold text-white transition hover:border-primary hover:text-primary"
            >
              <FaDownload size={13} /> Download résumé
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center rounded-full px-6 py-3.5 font-bold text-gray-300 transition hover:text-white"
            >
              Contact me
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs font-semibold tracking-wide text-gray-400 sm:text-sm">
            <span>2 live full-stack products</span>
            <span>2 frontend internships</span>
            <span>React · Next.js · TypeScript</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="relative mx-auto w-full max-w-sm md:max-w-md"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2">
            <Image
              src="/image.webp"
              width={900}
              height={1100}
              alt="Portrait of Mikołaj Germanenka"
              priority
              sizes="(max-width: 767px) 85vw, (max-width: 1023px) 40vw, 420px"
              className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#121212]/95 px-4 py-3 shadow-2xl backdrop-blur">
            <p className="text-xs text-gray-400">Experience</p>
            <p className="mt-1 font-bold text-white">2 frontend internships</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
