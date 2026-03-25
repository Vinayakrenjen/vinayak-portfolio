import React from 'react';
import { motion } from 'framer-motion';

const Training = () => {
  return (
    <section id="training" className="py-24 px-4 md:px-8 min-h-[60vh] flex flex-col justify-center relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="text-lvlBrand dark:text-lvlCyan font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Level 3</span>
          <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Training Grounds.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* DSA Stats Container */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             whileHover={{ y: -5, scale: 1.02 }}
             viewport={{ once: true }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <svg className="w-32 h-32 text-lvlBrand dark:text-lvlCyan" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-10-5v2.5l10 5 10-5v-2.5l-10 5zm0 5.5l-10-5v2.5l10 5 10-5v-2.5l-10 5z"/></svg>
            </div>

            <div className="relative z-10 mb-10">
               <h3 className="text-3xl font-black font-display text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Algorithmic Mastery</h3>
               <p className="text-slate-500 font-medium">Daily commitment to computational thinking.</p>
            </div>

            <div className="relative z-10 text-center md:text-left">
               <div className="flex items-baseline gap-2 mb-4 justify-center md:justify-start">
                 <span className="text-7xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-lvlBrand to-lvlPurple dark:from-lvlCyan dark:to-lvlBrand leading-none">200+</span>
                 <span className="text-xl font-bold font-display text-slate-600 dark:text-slate-300 uppercase tracking-widest">Solved</span>
               </div>
               <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed font-sans mt-6">
                 Rigorous training traversing array manipulation, dynamic programming, tree traversals, and complex graph algorithms across multiple competitive platforms. Constant evolution translates to highly optimized production-grade systems.
               </p>
            </div>
          </motion.div>

          {/* Core Frameworks / Consistency Stats */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             whileHover={{ y: -5, scale: 1.02 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
             className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col justify-center gap-8 relative overflow-hidden"
          >
             <div>
               <h4 className="font-display font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm mb-4">Core Competency Weights</h4>
               
               {/* Progress Bars */}
               <div className="space-y-6">
                 <div>
                   <div className="flex justify-between font-medium text-xs uppercase tracking-widest mb-2 text-slate-600 dark:text-slate-400">
                     <span>Data Structures (C++ / Python)</span>
                     <span>90%</span>
                   </div>
                   <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} className="bg-gradient-to-r from-lvlBrand to-lvlCyan h-full rounded-full" />
                   </div>
                 </div>
                 
                 <div>
                   <div className="flex justify-between font-medium text-xs uppercase tracking-widest mb-2 text-slate-600 dark:text-slate-400">
                     <span>Machine Learning (PyTorch)</span>
                     <span>85%</span>
                   </div>
                   <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.7 }} className="bg-gradient-to-r from-lvlPurple to-lvlBrand h-full rounded-full" />
                   </div>
                 </div>

                 <div>
                   <div className="flex justify-between font-medium text-xs uppercase tracking-widest mb-2 text-slate-600 dark:text-slate-400">
                     <span>System Integration (Cloud / DevOps)</span>
                     <span>80%</span>
                   </div>
                   <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.9 }} className="bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-white h-full rounded-full" />
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Training;
