import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PathIcon = ({ type }) => {
  switch(type) {
    case 'origin':
      return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>; // Spark
    case 'learning':
      return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>; // Code
    case 'skill':
      return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>; // Logic/Brain
    case 'system':
      return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>; // Data/Database
    case 'cloud':
      return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>; // Cloud
    case 'current':
      return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>; // Arrow
    default:
      return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;
  }
};

const journeyData = [
  { id: 1, type: 'origin', title: 'Origin', desc: "Started with curiosity\nExploring how systems work" },
  { id: 2, type: 'learning', title: 'Learning Phase', desc: "Built foundation in programming\nFocused on C++ and problem solving" },
  { id: 3, type: 'skill', title: 'Skill Building', desc: "Practiced DSA and logical thinking\nDeveloped structured problem-solving ability" },
  { id: 4, type: 'system', title: 'System Builder', desc: "Built real-world projects\nWorked on ML-based electricity prediction" },
  { id: 5, type: 'cloud', title: 'Optimization Mindset', desc: "Exploring cloud and system efficiency\nFocused on scalable solutions" },
  { id: 6, type: 'current', title: 'Current Stage', desc: "Striving for the best\nPreparing for impactful opportunities" }
];

const Journey = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Custom curved path SVG style horizontal wave layout
  return (
    <section id="journey" className="py-24 px-4 md:px-8 min-h-screen flex flex-col justify-center relative z-10 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 relative z-20"
        >
          <span className="text-lvlBrand dark:text-lvlCyan font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Level Progression</span>
          <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 dark:text-white tracking-tight mb-6">
            My Journey.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto italic tracking-wide">
            "Every system I build today is built on the steps I took yesterday."
          </p>
        </motion.div>

        {/* Timeline Container */}
        {/* Uses overflow-x-auto to allow scrolling on small screens while capturing all 6 items */}
        <div className="relative w-full overflow-x-auto pb-12 pt-8 hide-scrollbar cursor-grab active:cursor-grabbing">
          <div className="min-w-[1400px] xl:min-w-full relative h-[450px]">
             
             {/* The Flowing Line Background */}
             <div className="absolute top-[225px] left-8 right-8 h-[2px] bg-slate-200 dark:bg-slate-800 -translate-y-1/2"></div>
             
             {/* The Animated Glowing Line bounded to scroll progress */}
             <motion.div 
               className="absolute top-[225px] left-8 right-8 h-[3px] bg-gradient-to-r from-lvlBrand via-lvlPurple to-lvlCyan -translate-y-1/2 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.6)] z-0 origin-left"
               style={{ scaleX: scrollYProgress }}
             ></motion.div>

             <div className="grid grid-cols-6 h-full gap-4 relative z-10 w-full px-8">
               {journeyData.map((node, i) => (
                 <div key={node.id} className="relative w-full h-full flex flex-col justify-center">
                    
                    {/* Node Dot / Anchor */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, type: 'spring' }}
                      className="absolute top-[225px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-lvlBrand dark:border-lvlCyan z-20 shadow-[0_0_10px_rgba(14,165,233,0.3)] transition-all hover:scale-125 hover:shadow-[0_0_20px_rgba(14,165,233,0.8)] cursor-pointer"
                    />

                    {/* Connecting Vertical Stem */}
                    <motion.div 
                       initial={{ scaleY: 0 }}
                       whileInView={{ scaleY: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.15 + 0.1 }}
                      className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b ${i % 2 === 0 ? 'from-transparent to-lvlCyan/50 bottom-[225px] h-[30px]' : 'from-lvlCyan/50 to-transparent top-[225px] h-[30px]'} z-10 origin-${i % 2 === 0 ? 'bottom' : 'top'}`}
                    ></motion.div>

                    {/* Content Card (Alternating Layout) */}
                    <motion.div 
                      initial={{ opacity: 0, y: i % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05, y: i % 2 === 0 ? -5 : 5 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2, type: 'spring', stiffness: 300, damping: 20 }}
                      className={`glass-panel p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 shadow-xl border border-white/50 dark:border-slate-700/50 flex flex-col items-center text-center absolute left-1/2 -translate-x-1/2 w-[220px] ${i % 2 === 0 ? 'bottom-[255px]' : 'top-[255px]'}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-lvlBrand/10 dark:bg-lvlCyan/10 flex items-center justify-center text-lvlBrand dark:text-lvlCyan mb-4 shadow-inner">
                        <PathIcon type={node.type} />
                      </div>
                      <h3 className="font-display font-black text-lg text-slate-900 dark:text-white mb-2">{node.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm font-medium whitespace-pre-line leading-relaxed">
                        {node.desc}
                      </p>
                    </motion.div>
                 </div>
               ))}
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
