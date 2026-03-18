"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black/90 text-white py-22 px-8 mt-20 rounded-t-3xl shadow-inner flex flex-col md:flex-row justify-between items-center gap-8"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center md:items-start gap-2"
      >
        <h2 className="text-2xl font-bold">Mikołaj Germanenka</h2>
        <p className="text-gray-400">Frontend Developer</p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center gap-2 text-gray-400"
      >
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 cursor-pointer">
          <FaEnvelope /> 
          <a href="mailto:kolyangermanenko@gmail.com" className="hover:text-yellow-400 transition-colors">
            kolyangermanenko@gmail.com
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 cursor-pointer">
          <FaMapMarkerAlt /> Poznań, Poland
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-6 items-center"
      >
        <motion.a
          href="https://github.com/luvtorn"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3, color: "#facc15" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mikolaj-germanenka"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3, color: "#facc15" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLinkedin size={24} />
        </motion.a>
      </motion.div>

      {/* Нижняя строка: авторские права */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full mt-6 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} Mikołaj Germanenka. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;