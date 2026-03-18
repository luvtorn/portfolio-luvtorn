"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Intro = ({ onFinish }: { onFinish: () => void }) => {
  const slides = ["Mikołaj Germanenka", "Frontend Developer"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current < slides.length) {
      const timer = setTimeout(() => setCurrent((prev) => prev + 1), 2100);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => onFinish(), 600);
      return () => clearTimeout(finishTimer);
    }
  }, [current, onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      <AnimatePresence mode="wait">
        {current < slides.length && (
          <motion.h1
            key={current}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.7 }}
            className="text-white text-3xl md:text-6xl font-bold tracking-wide select-none"
          >
            {slides[current]}
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Intro;