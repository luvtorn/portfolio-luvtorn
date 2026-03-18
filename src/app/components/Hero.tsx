import Image from "next/image";
import IcosahedronScene from "./UI/IcosahedronScene";
import Button from "./UI/button";
import { FaReact } from "react-icons/fa";
import Logos from "./addons/Logos";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="flex items-center justify-center max-h-11/12 py-12 px-10 lg:mt-20 z-10"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 50 }}
      transition={{ duration: 2 }}
      id="home"
    >
      <div className="flex flex-col sm:flex-row gap-12 items-center z-10">
        <Image
          src="/image.png"
          width={300}
          height={300}
          alt="Me"
          priority
          className="border border-primary rounded-xl shadow-xl w-[300px] h-[400px]"
        />

        <div>
          <h1 className="text-4xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hello, I&apos;m Mikolaj
          </h1>
          <h2 className="text-gray-400">Frontend Developer</h2>

          <p className="text-gray-500 max-w-sm mt-2">
            I create fast, modern and responsive web interfaces using React,
            Next.js and modern frontend technologies.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <Button className="hover:px-6.5">View Projects</Button>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg transition-all border border-secondary text-white hover:bg-secondary hover:text-white hover:px-6"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
