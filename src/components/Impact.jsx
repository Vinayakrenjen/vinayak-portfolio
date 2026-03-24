import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const hobbies = [
  { icon: '🏋️', title: 'Gym', desc: 'Discipline in the physical realm translates to discipline in code.' },
  { icon: '📚', title: 'Fantasy', desc: 'Immersing in expansive worlds fuels creative system thinking.' },
  { icon: '⚽', title: 'Football', desc: 'Working within a dynamic system to achieve a collective goal.' },
  { icon: '🎮', title: 'Gaming', desc: 'Strategic mastery and analytical problem-solving under pressure.' }
];

const Impact = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedImage]);

  return (
    <>
      <section id="impact" className="py-24 px-4 md:px-8 min-h-screen relative z-10 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20 text-center md:text-left"
          >
            <span className="text-lvlBrand dark:text-lvlCyan font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Beyond Code</span>
            <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              The Human Element.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl text-lg md:text-xl font-medium">
               A system is only as robust as its creator. These are the elements that keep me grounded, disciplined, and constantly evolving.
            </p>
          </motion.div>

          {/* Social Impact Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Press Bento */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               whileHover={{ y: -5 }}
               viewport={{ once: true }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col justify-between cursor-pointer group bg-white/60 dark:bg-slate-800/60 overflow-hidden relative"
               onClick={() => setSelectedImage('/newspaper-clipping.jpeg')}
            >
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <svg className="w-40 h-40 text-lvlPurple dark:text-lvlCyan" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-2 14H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
               </div>
               
               <div className="relative z-10 mb-8">
                 <h3 className="text-2xl md:text-3xl font-black font-display text-slate-900 dark:text-white uppercase leading-snug tracking-wide mb-4">COVID-19 Relief Initiative</h3>
                 <span className="px-3 py-1 bg-lvlPurple/10 text-lvlPurple dark:bg-lvlCyan/10 dark:text-lvlCyan rounded-md font-bold text-xs tracking-widest uppercase">July 2021</span>
               </div>
               
               <p className="text-slate-600 dark:text-slate-300 font-medium text-lg leading-relaxed mb-8 border-l-4 border-lvlBrand pl-4 relative z-10">
                 Successfully raised ₹4 Lakh to fund tablet devices for underprivileged students during the pandemic, ensuring access to online education.
               </p>
               
               <div className="w-full h-48 bg-slate-900 dark:bg-black rounded-xl overflow-hidden relative flex items-center justify-center mt-auto shadow-inner">
                  <img 
                    src="/newspaper-clipping.jpeg" 
                    alt="Press Clipping" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-black px-6 py-3 uppercase tracking-widest rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    View Press
                  </div>
               </div>
            </motion.div>

            {/* NGO Mentorship Bento */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               whileHover={{ y: -5 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
               className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col justify-start relative overflow-hidden bg-white/60 dark:bg-slate-800/60"
            >
               <div className="absolute -bottom-10 -right-10 opacity-10">
                 <svg className="w-56 h-56 text-lvlBrand dark:text-lvlPurple group-hover:rotate-12 transition-transform duration-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
               </div>
               
               <div className="relative z-10 mb-8">
                 <h3 className="text-3xl md:text-4xl font-black font-display text-slate-900 dark:text-white uppercase leading-tight tracking-wide mb-4">NGO Mentorship</h3>
                 <span className="px-3 py-1 bg-lvlBrand/10 text-lvlBrand dark:bg-lvlPurple/10 dark:text-lvlPurple rounded-md font-bold text-xs tracking-widest uppercase">July 2024</span>
               </div>
               
               <p className="text-slate-600 dark:text-slate-300 font-medium text-xl leading-relaxed relative z-10">
                 Partnered with an NGO to mentor and educate orphaned children. Focused on holistic development and academic guidance, resulting in significantly improved academic performance and confidence across the cohort.
               </p>
            </motion.div>
          </div>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {hobbies.map((hobby, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1), type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-panel p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 text-center flex flex-col items-center gap-4"
                >
                   <div className="text-4xl bg-white dark:bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                     {hobby.icon}
                   </div>
                   <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">{hobby.title}</h4>
                   <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{hobby.desc}</p>
                </motion.div>
             ))}
          </div>

        </div>
      </section>

      {/* Full-Screen Newspaper Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 md:-right-8 text-white hover:text-lvlCyan text-4xl p-2 transition-colors z-50 focus:outline-none"
              >
                &times;
              </button>
              
              <div className="w-full bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center min-h-[400px]">
                <img 
                  src={selectedImage} 
                  alt="Press Clipping"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://via.placeholder.com/1200x800.png?text=Image+not+found:+newspaper-clipping.jpeg`;
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Impact;
