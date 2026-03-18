"use client";

import React from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import Button from "../UI/button";
import { AnimatePresence, motion } from "framer-motion";

const Logos = () => {
  const items = [
    { icon: <FaHtml5 color="white" size={50} />, text: "HTML5" },
    {
      icon: <RiTailwindCssFill color="white" size={50} />,
      text: "TailwindCSS",
    },
    { icon: <RiNextjsFill color="white" size={50} />, text: "Next.js" },
    { icon: <SiTypescript color="white" size={50} />, text: "TypeScript" },
    { icon: <IoLogoFigma color="white" size={50} />, text: "Figma" },
    { icon: <FaGitAlt color="white" size={50} />, text: "Git" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="flex gap-10 flex-col items-center justify-center h-fit w-full p-10">
      <Button
        variant="primary"
        className="font-medium uppercase text-2xl px-10 py-4 hover:px-11.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        Tech stack
      </Button>

      <ul className="grid grid-cols-3 gap-20 sm:grid-cols-6 justify-center items-center ">
        <AnimatePresence>
          {isOpen &&
            items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center text-white w-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence mode="wait">
                  {hoveredIndex === index ? (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0, y: -5, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="font-semibold text-lg"
                    >
                      {item.text}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="icon"
                      initial={{ opacity: 0, y: 5, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.8 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{
                        type: "keyframes",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {item.icon}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Logos;
