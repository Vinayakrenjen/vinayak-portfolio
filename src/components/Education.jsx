import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    role: 'B.Tech in Computer Science and Engineering',
    company: 'Lovely Professional University',
    duration: 'Aug 2023 - Present',
    description: 'Currently pursuing my undergraduate degree with a CGPA of 8.58. Building a strong foundation in algorithms, data structures, and core software engineering principles.',
    color: 'border-accentBrand dark:border-darkAccent',
    titleColor: 'text-accentBrand dark:text-darkAccent'
  },
  {
    role: 'Training in Machine Learning',
    company: 'Lovely Professional University',
    duration: 'June 2025 - July 2025',
    description: 'Mastered foundational ML and deep learning methodologies. Acquired operational knowledge of modern GenAI ecosystems and implemented end-to-end workflows using PyTorch and LangChain.',
    color: 'border-accentCyan dark:border-darkCyan',
    titleColor: 'text-accentCyan dark:text-darkCyan'
  },
  {
    role: 'Intermediate Education',
    company: 'Pallikoodam School, Kerala',
    duration: 'June 2020 - March 2022',
    description: 'Completed higher secondary education with a strong academic tracking record, achieving a score of 95%.',
    color: 'border-accentPurple dark:border-darkPurple',
    titleColor: 'text-accentPurple dark:text-darkPurple'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-8 min-h-[70vh] bg-primary dark:bg-darkPrimary transition-colors duration-300 relative z-10">
      <div className="max-w-4xl mx-auto border-t-2 border-l-2 border-r-2 border-tertiary dark:border-darkTertiary transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 border-b-2 border-tertiary dark:border-darkTertiary bg-secondary dark:bg-darkSecondary transition-colors duration-300"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-2 font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-tighter">
            Academic
          </h2>
          <h2 className="text-5xl md:text-7xl font-black font-display text-tertiary dark:text-darkTertiary transition-colors duration-300 uppercase tracking-tighter leading-none">
            Background.
          </h2>
        </motion.div>

        <div>
          {educationData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`p-10 md:p-14 border-b-2 border-tertiary dark:border-darkTertiary bg-primary dark:bg-darkPrimary hover:bg-secondary dark:hover:bg-darkSecondary transition-colors relative group`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                <h3 className="text-3xl md:text-4xl font-display font-black text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-wide leading-tight max-w-xl">{exp.role}</h3>
                <span className={`px-4 py-2 bg-transparent text-slate-700 dark:text-slate-300 transition-colors duration-300 font-display font-bold text-sm tracking-widest uppercase border-2 ${exp.color} whitespace-nowrap`}>
                  {exp.duration}
                </span>
              </div>
              <h4 className={`${exp.titleColor} font-display font-bold uppercase tracking-widest text-lg mb-6 transition-colors duration-300`}>{exp.company}</h4>
              <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300 font-medium text-lg leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
