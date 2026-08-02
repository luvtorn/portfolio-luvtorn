"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const items = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55%", threshold: [0.1, 0.35, 0.6] },
    );

    document
      .querySelectorAll<HTMLElement>("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between">
        <a
          href="#home"
          className="focus-ring text-sm font-bold tracking-[0.16em] text-white uppercase"
          aria-label="Go to home"
        >
          MG<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`focus-ring text-sm font-semibold transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full border border-primary/50 px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-black"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          className="focus-ring rounded-lg p-2 text-white md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black"
          >
            <div className="container-shell flex flex-col py-3">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`focus-ring border-b border-white/5 py-4 text-base font-semibold ${
                    activeSection === item.id ? "text-primary" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring py-4 font-semibold text-primary"
              >
                Open résumé ↗
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
