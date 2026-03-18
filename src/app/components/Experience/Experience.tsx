"use client";

import { experiences } from "@/data";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="relative py-24 px-6 flex flex-col items-center"
      id="experience"
    >
      <h2 className="text-4xl font-semibold text-white mb-4">Experience</h2>

      <div className="w-24 h-[2px] bg-gradient-to-r from-primary to-secondary mb-16" />

      <div className="relative max-w-4xl w-full">
        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-12 group hover:scale-105 transition-all duration-500"
            >
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <FaBriefcase size={14} />
              </div>

              <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-md overflow-hidden">
                <span className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-500 transition-all duration-700"></span>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>

                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>

                <p className="text-primary font-medium mb-4">{exp.company}</p>

                <div className="flex gap-4 mb-4 text-xl text-gray-300">
                  {exp.tech.map((icon, i) => (
                    <span key={i} className="hover:text-primary transition">
                      {icon}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
