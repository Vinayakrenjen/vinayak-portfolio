import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    role: 'B.Tech in Computer Science and Engineering',
    company: 'Lovely Professional University',
    duration: 'Aug 2023 - Present',
    description: 'Currently pursuing my undergraduate degree with a CGPA of 8.58. Building a strong foundation in algorithms, data structures, and core software engineering principles.',
    color: 'from-lvlBrand to-lvlCyan',
    icon: '🎓'
  },
  {
    role: 'Training in Machine Learning',
    company: 'Lovely Professional University',
    duration: 'June 2025 - July 2025',
    description: 'Mastered foundational ML and deep learning methodologies. Acquired operational knowledge of modern GenAI ecosystems and implemented end-to-end workflows using PyTorch and LangChain.',
    color: 'from-lvlPurple to-lvlBrand',
    icon: '🧠'
  },
  {
    role: 'Intermediate Education',
    company: 'Pallikoodam School, Kerala',
    duration: 'June 2020 - March 2022',
    description: 'Completed higher secondary education with a strong academic tracking record, achieving a score of 95%.',
    color: 'from-slate-400 to-slate-600',
    icon: '🏫'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 md:px-8 min-h-screen relative z-10 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <span className="text-lvlBrand dark:text-lvlCyan font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Level 5</span>
          <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Milestones.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-lvlBrand via-lvlPurple to-transparent dark:from-lvlCyan dark:opacity-30 rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-4 top-0 lg:top-2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-800 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center z-10 transform -translate-x-1/2">
                   <div className={`w-full h-full rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-xs md:text-sm shadow-inner`}>
                      {exp.icon}
                   </div>
                </div>

                <div className="glass-panel p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 hover:-translate-y-1 transition-transform duration-300 shadow-xl group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black font-display text-slate-900 dark:text-white tracking-wide">{exp.role}</h3>
                      <h4 className="text-lg font-bold text-lvlBrand dark:text-lvlCyan mt-1">{exp.company}</h4>
                    </div>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-xs font-bold font-display uppercase tracking-widest self-start whitespace-nowrap hidden md:block">
                      {exp.duration}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-xs font-bold font-display uppercase tracking-widest self-start whitespace-nowrap block md:hidden mb-4 w-max">
                    {exp.duration}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
