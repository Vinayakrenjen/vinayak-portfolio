import React from 'react';
import { motion } from 'framer-motion';

const narrativeSteps = [
  {
    title: "1. The Spark of Curiosity",
    text: "My journey began with a persistent question: how do digital systems operate at their core? That curiosity quickly evolved into a rigorous structural pursuit of Computer Science and Engineering at Lovely Professional University, building a rock-solid foundation in algorithms.",
    color: "border-lvlBrand text-lvlBrand dark:border-lvlCyan dark:text-lvlCyan"
  },
  {
    title: "2. Decoding Machine Learning",
    text: "Abstract code turned into intelligent systems. I immersed myself in PyTorch, TensorFlow, and Transformers. During extensive training, I mastered the mathematical depths of neural architectures and learned how to train models to understand human language.",
    color: "border-lvlPurple text-lvlPurple dark:border-lvlPurple dark:text-lvlPurple"
  },
  {
    title: "3. Architecting Systems",
    text: "Theory demands practice. I transitioned from learning to building—engineering a production-grade NER system for unstructured land records and creating scalable cloud platforms using Google Gemini and LangChain to solve real-world inefficiencies.",
    color: "border-lvlCyan text-lvlCyan dark:border-lvlBrand dark:text-lvlBrand"
  },
  {
    title: "4. The Ongoing Quest",
    text: "Driven by discipline and analytical precision, I am constantly leveling up. Beyond simply writing lines of code, my mission is to architect intelligent, data-driven systems that deliver undeniable impact and scale elegantly.",
    color: "border-slate-800 text-slate-800 dark:border-white dark:text-white"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 min-h-screen flex flex-col justify-center relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="text-lvlBrand dark:text-lvlCyan font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Level 1</span>
          <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Origin Story.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Glass Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 lg:sticky lg:top-32 glass-panel p-3 rounded-3xl relative group flex flex-col shadow-2xl"
          >
             <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
               <img src="/profile.jpeg" alt="Vinayak R Dinesh" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute bottom-6 left-6 z-20">
                 <h3 className="text-white font-display font-bold text-2xl tracking-wide">Vinayak R</h3>
                 <p className="text-lvlCyan font-medium text-sm tracking-widest uppercase mt-1">LPU • B.Tech CSE</p>
               </div>
             </div>
          </motion.div>

          {/* Narrative Timeline Container */}
          <motion.div className="w-full lg:w-2/3 space-y-12 relative py-4">
             {/* Subtle vertical connection line */}
             <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-lvlBrand via-lvlPurple to-transparent dark:from-lvlCyan dark:via-lvlPurple opacity-30 hidden md:block"></div>

             {narrativeSteps.map((step, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                 className="relative pl-0 md:pl-16 group"
               >
                 {/* Node dot */}
                 <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-lvlPrimary dark:bg-darkLvlPrimary border-2 border-slate-300 dark:border-slate-700 group-hover:border-lvlBrand dark:group-hover:border-lvlCyan hidden md:flex items-center justify-center transform -translate-x-1/2 transition-colors duration-300 z-10">
                   <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-lvlBrand dark:group-hover:bg-lvlCyan transition-colors duration-300" />
                 </div>
                 
                 <h3 className={`text-xl md:text-2xl font-bold font-display mb-3 ${step.color} transition-colors duration-300 tracking-wide`}>
                   {step.title}
                 </h3>
                 <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-lg">
                   {step.text}
                 </p>
               </motion.div>
             ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
