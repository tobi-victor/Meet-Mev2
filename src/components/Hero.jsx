import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="min-h-[80vh] overflow-hidden bg-gradient-to-b from-white to-white px-6 py-24 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-10 text-center lg:text-left flex-1"
        >
          <div>
            <p className="inline-flex rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-xs uppercase tracking-[0.4em] text-slate-700 dark:border-slate-600 dark:bg-slate-900/70 dark:text-sky-300 font-semibold">
              Software Engineer • AI Engineer
            </p>
          </div>
          <h1 className="text-6xl font-black tracking-tight text-slate-950 sm:text-7xl lg:text-8xl dark:text-white leading-tight">
            Victor Adedeji
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl dark:text-slate-300">
            I design and ship AI-driven software, intelligent systems, and polished web products for startups and teams that need practical innovation.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-400 bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-600 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900/80 flex-1"
        >
          <img src="/images/new_1/profile-pic.jpeg" alt="Victor Adedeji" className="h-64 sm:h-80 lg:h-full w-full object-cover" />
        </motion.div>
      </div>
    </motion.section>
  );
}
