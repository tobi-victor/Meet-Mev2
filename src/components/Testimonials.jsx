import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-sky-400">Testimonials</p>
        <h2 className="mt-4 text-5xl font-black text-slate-950 dark:text-white">What people say</h2>
        <motion.blockquote
          whileHover={{ scale: 1.01 }}
          className="mt-12 rounded-[2rem] border border-slate-200 bg-white/95 p-12 text-2xl italic leading-9 text-slate-900 shadow-glow dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
        >
          "Victor consistently delivers exceptional solutions and approaches every challenge with creativity, clarity, and technical excellence."
        </motion.blockquote>
      </div>
    </motion.section>
  );
}
