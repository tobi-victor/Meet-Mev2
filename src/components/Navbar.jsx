import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = saved || (prefersDark ? 'dark' : 'light');
      setTheme(initial);
      if (initial === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    if (next === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id || 'home');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    );

    const sections = Array.from(document.querySelectorAll('section[id]'));
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl shadow-glow ${theme === 'dark' ? 'border-slate-800/20 bg-slate-950/95' : 'border-slate-200 bg-white/95'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Victor Adedeji
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(link => {
            const base = theme === 'dark'
              ? (active === link.id ? 'text-white font-semibold' : 'text-slate-300 hover:text-white')
              : (active === link.id ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900');
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition px-1 ${base}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden ${theme === 'dark' ? 'border-slate-700 bg-slate-900 text-white hover:bg-slate-800' : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-100'}`}
          >
            <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`rounded-lg px-3 py-2 text-sm inline-flex ${theme === 'dark' ? 'bg-slate-800/60 text-slate-200 hover:bg-slate-700' : 'bg-white/60 text-slate-900 hover:bg-slate-100 border border-slate-200'}`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`md:hidden border-t ${theme === 'dark' ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200 bg-white/95'}`}>
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map(link => {
              const base = theme === 'dark'
                ? (active === link.id ? 'text-white font-semibold' : 'text-slate-300 hover:text-white')
                : (active === link.id ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900');
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base transition ${base}`}
                >
                  {link.label}
                </a>
              );
            })}
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className={`rounded-2xl border px-4 py-3 text-base transition ${theme === 'dark' ? 'border-slate-700 bg-slate-900 text-white hover:bg-slate-800' : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-100'}`}
            >
              {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
