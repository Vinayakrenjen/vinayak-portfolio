import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Problem Solving',
    icon: '🧠',
    skills: ['Data Structures & Algorithms', 'C++', 'Java', 'Logical Reasoning', 'Optimization']
  },
  {
    title: 'Development',
    icon: '💻',
    skills: ['Python', 'JavaScript', 'HTML/CSS', 'Git/GitHub', 'Streamlit']
  },
  {
    title: 'ML / Data Science',
    icon: '🤖',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NLP & LLMs']
  },
  {
    title: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: ['Docker', 'MySQL', 'N8N', 'Blue Prism', 'API Integrations']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 min-h-screen flex flex-col justify-center relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="text-lvlBrand dark:text-lvlCyan font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Level 2</span>
          <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Abilities.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col h-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/40 dark:border-slate-700/50 shadow-xl"
            >
              <div className="text-4xl mb-6 bg-white dark:bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white tracking-wide mb-6">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4 mt-auto">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-lvlBrand dark:group-hover:bg-lvlCyan transition-colors duration-300" />
                    <span className="text-slate-600 dark:text-slate-300 font-medium text-sm uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
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
