import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
  {
    title: 'SLAM',
    subtitle: '2-D landmark detection tracking with SLAM',
    image: '/images/SLAM.png',
    repo: 'https://github.com/OBigVee/Landmark-Detection-Tracking-SLAM-',
    detail: 'Real-time landmark detection and mapping to support navigation and tracking for robotics applications.',
    tech: ['Python', 'OpenCV', 'React', 'SLAM']
  },
  {
    title: 'AI Caption Generator',
    subtitle: 'Automatic image caption generator',
    image: '/images/cat.jpg',
    repo: 'https://github.com/OBigVee/Images-Captions-Generator',
    detail: 'Generates descriptive captions for images using computer vision and natural language synthesis.',
    tech: ['TensorFlow', 'Python', 'React', 'NLP']
  },
  {
    title: 'Credit Worthiness',
    subtitle: 'Financial scoring using ML',
    image: '/images/ML.jpeg',
    repo: 'https://github.com/OBigVee/-Microsoft-Professional-Program-for-Data-Science.capstone-project',
    detail: 'Predicts borrower risk through structured model training and explainable feature analysis.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'Data Science']
  },
  {
    title: 'Face Detection',
    subtitle: 'Facial keypoint extraction for face technology',
    image: '/images/face_.jpg',
    repo: 'https://github.com/OBigVee/Facial-Keypoints-Detection',
    detail: 'Detects face landmarks and keypoints for augmented reality, identification, and interaction systems.',
    tech: ['OpenCV', 'Python', 'Dlib', 'Computer Vision']
  },
  {
    title: 'Staff Promotion',
    subtitle: 'Employee promotion prediction tool',
    image: '/images/staff.png',
    repo: 'https://github.com/OBigVee/Staff-Promotion-Algorithim',
    detail: 'Predicts promotion readiness using employee performance indicators and organizational data.',
    tech: ['Python', 'Machine Learning', 'Pandas', 'Analytics']
  },
  {
    title: 'NYSC CDS',
    subtitle: 'Community development service platform',
    image: '/images/new_2/vik_4.jpeg',
    repo: 'https://github.com/OBigVee/NYSC-CDS',
    detail: 'Connects volunteers and community service groups with project tracking and resource coordination.',
    tech: ['React', 'Node.js', 'MongoDB', 'UI/UX']
  },
  {
    title: 'AI IoT Smart Glass',
    subtitle: 'Wearable AI assistant for visually impaired users',
    image: '/images/iot-glassWare_.jpg',
    repo: 'https://github.com/omosteven/iot-smart-glasses',
    detail: 'Wearable platform that provides visual context and navigation assistance through AI vision.',
    tech: ['Embedded Systems', 'AI', 'React', 'IoT']
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Projects</p>
          <h2 className="mt-4 text-5xl font-black text-slate-950 dark:text-white">Featured work</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(project => (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-0 text-left shadow-glow transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 lg:text-sm text-[10px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{project.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl dark:bg-slate-950 dark:text-slate-100"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Project detail</p>
                  <h3 className="mt-4 text-4xl font-black text-slate-950 dark:text-white">{selectedProject.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Close
                </button>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{selectedProject.detail}</p>
                  <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/80">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Technologies</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {selectedProject.tech.map(tech => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Repository</p>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">Explore the full codebase and implementation details.</p>
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-100"
                  >
                    View GitHub repo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
