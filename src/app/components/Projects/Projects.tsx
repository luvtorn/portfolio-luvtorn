"use client";

import { projects } from "@/data";
import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
  const [active, setActive] = useState(false);

  return (
    <section id="projects" className=" bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          My Projects
        </motion.h2>

        {/* Слайдер */}
        <Swiper
          spaceBetween={30}
          loop
          slidesPerView={1.2}
          className="shadow-2xl rounded-2xl w-screen md:w-screen lg:w-11/12 mx-auto"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                onClick={() => setActive((prev) => !prev)}
                className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-lg cursor-pointer aspect-video"
              >
                {/* Картинка */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                  animate={{ opacity: active ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/80 flex flex-col justify-between p-10 rounded-2xl"
                >
                  <div>
                    <h3 className="text-md font-bold">{project.title}</h3>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="bg-primary text-black px-4 py-2 rounded-lg text-sm hover:bg-yellow-400 transition"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
