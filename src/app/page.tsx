"use client";
export const dynamic = "force-dynamic"; 

import IcosahedronScene from "./components/UI/IcosahedronScene";
import Hero from "./components/Hero";
import Logos from "./components/addons/Logos";
import { motion } from "framer-motion";
import About from "./components/About/About";
import BackToTop from "./components/addons/BackToTop";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Intro from "./components/addons/Intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative">
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <div className="relative flex flex-col w-full min-h-screen items-center justify-start bg-black overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 50 }}
              transition={{ duration: 3 }}
              className="absolute -top-40 -left-40 w-[500px] h-[500px] opacity-70 pointer-events-none z-0"
            >
              <IcosahedronScene />
            </motion.div>
            <div className="absolute -top-60 -right-100 w-[1000px] h-[1000px] opacity-70 pointer-events-none z-0 hidden lg:block">
              <IcosahedronScene />
            </div>
            <Hero />
            <BackToTop />
            <Logos />

            <hr />

            <About />

            <hr />

            <Experience />

            <br />

            <ContactForm />

            <Footer />
          </motion.div>
        </div>
      )}
    </div>
  );
}
