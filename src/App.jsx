import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-slate-900 dark:selection:bg-sky-500 selection:text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <Testimonials />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
