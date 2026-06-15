import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950/80"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-slate-700 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">O.BigVee</h3>
          <p className="mt-2 max-w-xl text-sm text-slate-700 dark:text-slate-400">
            Building AI-first products and high-performance web experiences.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="https://github.com/obigvee" className="transition hover:text-slate-900 dark:hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/victor-adedeji" className="transition hover:text-slate-900 dark:hover:text-white">LinkedIn</a>
          <a href="https://medium.com/@victor-ade" className="transition hover:text-slate-900 dark:hover:text-white">Medium</a>
        </div>
      </div>
    </motion.footer>
  );
}
