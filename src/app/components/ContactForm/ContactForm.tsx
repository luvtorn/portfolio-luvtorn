"use client";

import React, { useState } from "react";
import { keyframes, motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mzdjyykk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, type: keyframes}}
      id="contact"
      className="max-w-2xl mx-auto p-16 md:p-16 bg-linear-to-br from-gray-900 to-black/90 rounded-3xl shadow-2xl flex flex-col gap-3"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-2">
        Contact Me
      </h2>
      <p className="text-gray-400 text-center mb-2">
        Have a project in mind? Drop me a message and let's talk!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-4 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none h-36"
          required
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-2xl shadow-lg hover:from-yellow-300 hover:to-yellow-500 transition-colors"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-center font-medium"
          >
            Message sent successfully!
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-center font-medium"
          >
            Something went wrong. Try again.
          </motion.p>
        )}
      </form>
    </motion.section>
  );
};

export default ContactForm;
