import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const ContactIcons = () => {
  return (
    <div className="flex gap-4 mt-12 flex-wrap justify-center">
      <a
        href="https://github.com/luvtorn"
        className="px-6 py-3 hover:opacity-90 hover:scale-120 transition"
      >
        <FaGithub color="#ffda27" size={40} />
      </a>

      <a
        href="mailto:kolyangermanenko@gmail.com"
        className="px-6 py-3 hover:opacity-90 hover:scale-120 transition"
      >
        <SiGmail color="#ffda27" size={40} />
      </a>

      <a
        href="https://www.fiverr.com/s/gDVoGyW"
        className="px-6 py-3 hover:opacity-90 hover:scale-120 transition"
      >
        <TbBrandFiverr color="#ffda27" size={40} />
      </a>

      <a
        href="https://www.linkedin.com/in/mikolaj-germanenka"
        className="px-6 py-3 hover:opacity-90 hover:scale-120 transition"
      >
        <FaLinkedin color="#ffda27" size={40} />
      </a>
    </div>
  );
};

export default ContactIcons;
