"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      
      {/* 404 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-9xl font-bold text-primary"
      >
        404
      </motion.h1>

      {/* текст */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold mt-4"
      >
        Page not found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-2 max-w-md"
      >
        The page you are looking for doesn’t exist or has been moved.
      </motion.p>

      {/* кнопка */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300"
        >
          Go back home
        </Link>
      </motion.div>

      {/* декоративный элемент */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
        className="absolute w-[400px] h-[400px] bg-primary rounded-full blur-3xl -z-10"
      />
    </div>
  );
}