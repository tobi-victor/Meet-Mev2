import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-glow dark:border-slate-800 dark:bg-slate-900/90">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-sky-400">Contact</p>
          <h2 className="mt-4 text-5xl font-black text-slate-950 dark:text-white">Let’s build your next AI product.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
            Drop a message and I’ll help you turn your idea into a polished software experience.
          </p>
        </div>

        <form className="mt-12 grid gap-6">
          <input type="text" placeholder="Your Name" className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-slate-900 dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-100 dark:focus:border-sky-500" />
          <input type="email" placeholder="Your Email" className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-slate-900 dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-100 dark:focus:border-sky-500" />
          <textarea rows="6" placeholder="Tell me about your project" className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-slate-900 dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-100 dark:focus:border-sky-500" />
          <button type="submit" className="w-full rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
