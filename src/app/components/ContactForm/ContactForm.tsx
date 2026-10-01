"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mzdjyykk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Form submission failed");
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const updateField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(255,218,39,0.1),transparent_35%),#0d0d0d] p-6 sm:p-10 lg:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Let&apos;s work together</p>
              <h2 className="section-title">Have a project or opportunity in mind?</h2>
              <p className="section-copy mt-5">
                I&apos;m open to frontend roles and thoughtful product
                collaborations. Send a message and I&apos;ll get back to you.
              </p>
              <a
                href="mailto:kolyangermanenko@gmail.com"
                className="focus-ring mt-7 inline-block text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-8"
              >
                kolyangermanenko@gmail.com
              </a>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-gray-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="focus-ring w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-gray-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={updateField}
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="focus-ring w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-gray-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={updateField}
                  required
                  minLength={10}
                  placeholder="Tell me a little about your project or role…"
                  className="focus-ring min-h-36 w-full resize-y rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                {status !== "sending" && <FaArrowRight size={13} />}
              </button>
              <div aria-live="polite" className="min-h-6 text-center text-sm">
                {status === "success" && (
                  <p className="text-emerald-400">
                    Thanks—your message was sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400">
                    The message could not be sent. Please try again or email me directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
