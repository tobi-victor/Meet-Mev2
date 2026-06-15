import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Python',
  'Machine Learning',
  'Computer Vision',
  'LLMs',
  'Docker',
  'AWS'
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-sky-400">Expertise</p>
          <h2 className="mt-4 text-5xl font-black text-slate-950 dark:text-white">What I work with</h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(skill => (
            <motion.div
              key={skill}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 text-center shadow-glow dark:border-slate-800 dark:bg-slate-900/80"
            >
              <p className="text-lg font-semibold text-slate-950 dark:text-white">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
