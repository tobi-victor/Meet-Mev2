import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">About Me</p>
          <h2 className="mt-4 text-5xl font-black text-slate-950 dark:text-white">Who I am</h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-xl">
            I build business-focused AI experiences, digital products, and modern software with a strong emphasis on quality, performance, and scale.
            I specialize in building practical AI systems, computer vision pipelines, and production-ready web applications that solve real-world problems.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-glow dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'AI systems', value: 'Strategic, scalable' },
                { label: 'ML models', value: 'Designed to perform' },
                { label: 'Product design', value: 'User-first experiences' },
                { label: 'Deployment', value: 'Cloud-ready solutions' }
              ].map(item => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-50 shadow-glow dark:border-slate-800 dark:bg-slate-900/80">
            <img src="/images/bigvee009_new.jpg" alt="Victor working" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
