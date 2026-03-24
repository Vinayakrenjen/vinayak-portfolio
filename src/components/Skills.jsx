import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C++', 'C', 'JavaScript']
  },
  {
    title: 'Frameworks & Libs',
    skills: ['TensorFlow', 'Scikit-learn', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Docker', 'Git/GitHub', 'MySQL', 'Blue Prism', 'N8N', 'Anaconda']
  },
  {
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Resilience', 'Adaptability', 'Communication', 'Team Player']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-8 min-h-[80vh] bg-primary dark:bg-darkPrimary transition-colors duration-300 flex flex-col justify-center relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-tertiary dark:border-darkTertiary transition-colors duration-300"
        >
          <h2 className="text-6xl md:text-8xl font-black font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-tighter leading-none">
            Tech<br/><span className="text-accentBrand dark:text-darkAccent transition-colors duration-300">Stack</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-500 transition-colors duration-300 text-xl font-display uppercase tracking-widest max-w-sm text-right hidden md:block">
            01 / Tools of the trade optimized for performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 25, delay: idx * 0.1 }}
              className="bg-secondary dark:bg-darkSecondary transition-colors duration-300 border-2 border-tertiary dark:border-darkTertiary p-8 cursor-default group hover:border-accentBrand dark:hover:border-darkAccent shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] hover:shadow-[12px_12px_0px_#4F46E5] dark:hover:shadow-[12px_12px_0px_#EAB308]"
            >
              <h3 className="text-2xl font-black font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-wider mb-6 pb-4 border-b-2 border-tertiary dark:border-darkTertiary">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-slate-600 dark:text-slate-400 transition-colors duration-300 font-display font-semibold uppercase tracking-wider text-sm flex items-center before:content-[''] before:w-2 before:h-2 before:bg-tertiary dark:before:bg-darkTertiary before:mr-3 before:inline-block hover:text-slate-900 dark:hover:text-white hover:before:bg-accentBrand dark:hover:before:bg-darkAccent cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DSA Achievement Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.5 }}
          className="mt-10 bg-accentBrand dark:bg-darkAccent text-white dark:text-darkPrimary border-2 border-accentBrand dark:border-darkAccent p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 shadow-[8px_8px_0px_#93C5FD] dark:shadow-[8px_8px_0px_#EAB308] cursor-default"
        >
           <span className="text-4xl md:text-5xl">🏆</span>
           <div className="text-center md:text-left">
              <h4 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wider">Algorithmic Problem Solving</h4>
              <p className="font-display font-bold tracking-widest uppercase mt-2 opacity-90 text-sm md:text-base">Successfully solved 200+ DSA problems across various coding platforms.</p>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
