"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Info from "./Info";
import ContactIcons from "./ContactIcons";
import ResumeImage from "./ResumeImage";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      className="flex flex-col items-center py-20 px-6 text-center"
      ref={ref}
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl flex flex-col items-center text-center"
      >
        <h1 className="text-4xl font-semibold text-white">About Me</h1>

        <div className="w-24 h-[2px] bg-gradient-to-r from-primary to-secondary mt-4" />

        <ResumeImage />
        

        <p className="mt-6 max-w-3xl text-gray-300 text-lg">
          Me frontend developer who enjoys turning ideas into
          clean and modern websites. I work with React, Next.js,
          TypeScript and TailwindCSS, building fast and responsive interfaces. I
          like when things are simple, well-structured and smooth — both in code
          and in design. Small details matter to me, because they often make the
          biggest difference. Still learning, still building… and occasionally
          refactoring something that already worked perfectly yesterday.
        </p>

        <Info />

        <ContactIcons />
      </motion.div>
    </section>
  );
};

export default About;
