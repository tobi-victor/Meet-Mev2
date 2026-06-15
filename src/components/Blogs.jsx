import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Beyond Engineering: Mindful Creativity in Tech',
    description: 'How creativity, rest, and curiosity shape modern product work beyond raw engineering output.',
    url: '#'
  },
  {
    title: 'Writing, Reading, and Building Better Systems',
    description: 'The best practices I use to learn faster and stay sharp while shipping real-world products.',
    url: '#'
  },
  {
    title: 'Leadership Without Title',
    description: 'Why influence, teamwork, and communication matter just as much as code in impactful teams.',
    url: '#'
  }
];

export default function Blogs() {
  return (
    <motion.section
      id="blogs"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 scroll-mt-28 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-sky-400">Blogs</p>
          <h2 className="mt-4 text-5xl font-black text-slate-950 dark:text-white">Thoughts beyond engineering</h2>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -8 }}
              className="group rounded-[2rem] border border-slate-200 bg-white/95 p-8 text-left shadow-glow transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/80"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-sky-400">Article</p>
              <h3 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">{post.title}</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-400">{post.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition group-hover:text-slate-700 dark:text-slate-100 dark:group-hover:text-white">
                Read more →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
