"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import About from "./components/About/About";
import Intro from "./components/addons/Intro";
import ContactForm from "./components/ContactForm/ContactForm";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";

const IcosahedronScene = dynamic(
  () => import("./components/UI/IcosahedronScene"),
  { ssr: false },
);

const INTRO_KEY = "portfolio-intro-seen";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [introReady, setIntroReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const hasSeenIntro = sessionStorage.getItem(INTRO_KEY) === "true";
      setShowIntro(!reduceMotion && !hasSeenIntro);
      setIntroReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const finishIntro = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, "true");
    setShowIntro(false);
    window.requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus();
    });
  }, []);

  return (
    <div className="site-shell">
      {introReady && showIntro && <Intro onFinish={finishIntro} />}
      <Header />

      <div className="hero-decoration hero-decoration-left" aria-hidden="true">
        <IcosahedronScene />
      </div>
      <div className="hero-decoration hero-decoration-right" aria-hidden="true">
        <IcosahedronScene />
      </div>

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
