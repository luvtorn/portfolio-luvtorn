"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import Intro from "./addons/Intro";

const IcosahedronScene = dynamic(() => import("./UI/IcosahedronScene"), {
  ssr: false,
});

const INTRO_KEY = "portfolio-intro-seen";

export default function HomeEffects() {
  const [showIntro, setShowIntro] = useState(false);
  const [introReady, setIntroReady] = useState(false);
  const [decorEnabled, setDecorEnabled] = useState(false);

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

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setDecorEnabled(desktop.matches && !reduced.matches);
    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  const finishIntro = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, "true");
    setShowIntro(false);
    window.requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus();
    });
  }, []);

  return (
    <>
      {introReady && showIntro && <Intro onFinish={finishIntro} />}
      {decorEnabled && (
        <div className="hero-decoration" aria-hidden="true">
          <IcosahedronScene />
        </div>
      )}
    </>
  );
}
