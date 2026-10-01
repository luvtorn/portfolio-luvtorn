"use client";

import { motion } from "framer-motion";

export default function CaseStudySystem({ layers }: { layers: string[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {layers.map((layer, index) => (
        <motion.li
          key={layer}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.07 }}
          className="system-layer relative min-h-40 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-primary/50"
        >
          <span className="font-mono text-xs font-semibold tracking-widest text-primary">
            0{index + 1} / PART
          </span>
          <p className="mt-7 max-w-48 text-lg font-semibold leading-snug text-white">
            {layer}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
