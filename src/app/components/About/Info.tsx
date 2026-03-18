import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  const info = [
    {
      title: "Location",
      text: "Poznań, Poland",
    },
    {
      title: "Education",
      text: "IT Student",
    },
    {
      title: "Currently Learning",
      text: "Next.js & Backend Dev",
    },
    {
      title: "Languages",
      text: "EN / PL / RU",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
      {info.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileHover={{ scale: 1.1, borderTop: "1px solid #ffda27" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center p-3"
        >
          <h3 className="text-gray-500 text-sm">{item.title}</h3>
          <p className="text-white font-medium">{item.text}</p>
        </motion.div>
      ))}{" "}
    </div>
  );
};

export default Info;
