import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    school: 'University of Lagos',
    degree: 'BSc Computer Science',
    year: '2015 - 2019',
    details: 'Studied software engineering principles, algorithms, and machine learning foundations.'
  },
  {
    school: 'Udacity',
    degree: 'AI Programming with Python',
    year: '2021',
    details: 'Completed hands-on coursework focused on Python, NumPy, pandas, and model deployment.'
  }
];

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 scroll-mt-28 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-sky-400">Education</p>
          <h2 className="mt-4 text-5xl font-black text-slate-950 dark:text-white">Academic & training</h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {education.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-glow dark:border-slate-800 dark:bg-slate-900/80"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-sky-400">{item.year}</p>
              <h3 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">{item.degree}</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{item.school}</p>
              <p className="mt-5 text-slate-600 dark:text-slate-400">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
