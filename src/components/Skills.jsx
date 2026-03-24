import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'HTML/CSS']
  },
  {
    title: 'Machine Learning',
    skills: ['PyTorch', 'Transformers', 'Scikit-learn', 'NLP (NER)', 'Models']
  },
  {
    title: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA']
  },
  {
    title: 'Tools & APIs',
    skills: ['Streamlit', 'MySQL', 'Git/GitHub', 'Google Gemini API']
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
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-secondary dark:bg-darkSecondary transition-colors duration-300 border-2 border-tertiary dark:border-darkTertiary p-8 shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] hover:shadow-[8px_8px_0px_#4F46E5] dark:hover:shadow-[8px_8px_0px_#EAB308] hover:-translate-y-1 hover:-translate-x-1"
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
      </div>
    </section>
  );
};

export default Skills;
