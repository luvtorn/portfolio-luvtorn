"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const items = [
    { label: "About me", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const mobileClassName =
    "flex flex-row items-center fixed left-1/2 -translate-x-1/2 gap-3 text-sm bg-black/90 p-5 rounded-full z-30 w-full";
  const desktopClassName =
    "[writing-mode:vertical-rl] flex fixed right-15 top-1/2 -translate-y-1/2 gap-5";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const threshold = window.innerWidth < 768 ? 900 : 200;
    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={isMobile ? mobileClassName : desktopClassName}
      initial={{ opacity: 0, x: 100 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`text-lg lg:text-xl font-bold mb-4 transition-colors duration-300 w-full text-center
            ${
              activeSection === item.id
                ? "text-primary"
                : "text-gray-400 hover:text-white"
            }`}
        >
          {item.label}
        </a>
      ))}
    </motion.header>
  );
};

export default Header;
