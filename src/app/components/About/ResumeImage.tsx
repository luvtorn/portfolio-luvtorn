"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ResumeImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mt-8 relative w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute -top-12 -right-16 flex flex-col items-center pointer-events-none z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      >
        {/* Текст */}
        <span className="text-white text-sm font-medium mb-1 tracking-wide">
          hover me
        </span>

        {/* Рисованная стрелка */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          className="text-white rotate-90"
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path
                d="M0,0 L6,3 L0,6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          <motion.path
            d="M10 30 Q50 0 80 60"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </svg>
      </motion.div>
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          filter: isHovered ? "blur(2px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/pc1.png" width={250} height={250} alt="pc" />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={
          isHovered
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 20, scale: 0.9 }
        }
        transition={{ type: "keyframes", stiffness: 300, damping: 20 }}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          bg-primary text-black font-semibold text-sm py-2 px-4 rounded-lg
          cursor-pointer hover:scale-105 hover:bg-[#ddbd1d]`}
        onClick={() => window.open("/resume.pdf", "_blank")}
      >
        Download resume
      </motion.button>
    </div>
  );
};

export default ResumeImage;
