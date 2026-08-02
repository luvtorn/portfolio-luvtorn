"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, 1500);
    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      role="dialog"
      aria-label="Portfolio introduction"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="eyebrow"
        >
          Frontend developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45 }}
          className="mt-3 text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl"
        >
          Mikołaj Germanenka<span className="text-primary">.</span>
        </motion.h1>
      </div>
      <button
        type="button"
        onClick={onFinish}
        className="focus-ring absolute right-5 bottom-5 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-primary hover:text-primary"
      >
        Skip
      </button>
    </motion.div>
  );
}
