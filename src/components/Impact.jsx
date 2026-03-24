import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Impact = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock body scroll when modal active
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <>
      <section id="impact" className="py-24 px-8 min-h-[70vh] bg-primary dark:bg-darkPrimary transition-colors duration-300 relative z-10 border-t-2 border-tertiary dark:border-darkTertiary">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col items-start border-b-2 border-tertiary dark:border-darkTertiary pb-8"
          >
            <h2 className="text-6xl md:text-8xl font-black font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-tighter leading-none mb-4">
              Extra<br/><span className="text-accentCyan dark:text-darkCyan transition-colors duration-300">Curriculars.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 transition-colors duration-300 text-xl font-display uppercase tracking-widest max-w-xl">
              Leadership, mentorship, and community impact beyond the code.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Newspaper Cutout Bento */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               whileHover={{ y: -5, scale: 1.01 }}
               viewport={{ once: true }}
               transition={{ type: "spring", stiffness: 400, damping: 25 }}
               className="bg-secondary dark:bg-darkSecondary transition-colors duration-300 border-2 border-tertiary dark:border-darkTertiary p-8 md:p-10 shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] group flex flex-col justify-between cursor-pointer hover:border-accentCyan dark:hover:border-darkCyan relative overflow-hidden"
               onClick={() => setSelectedImage('/newspaper-clipping.jpg')}
            >
               <div className="absolute -right-10 -bottom-10 opacity-5 dark:opacity-10 text-[10rem] font-display font-black text-slate-900 dark:text-white pointer-events-none rotate-12 transition-colors">PRESS</div>
               
               <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 relative z-10">
                 <h3 className="text-3xl font-black font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase leading-snug tracking-wide">COVID-19 Relief Initiative</h3>
                 <span className="px-4 py-2 bg-transparent text-slate-700 dark:text-slate-300 transition-colors duration-300 font-display font-bold text-xs tracking-widest uppercase border-2 border-accentCyan dark:border-darkCyan whitespace-nowrap">
                   July 2021
                 </span>
               </div>
               
               <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300 font-medium text-lg leading-relaxed mb-10 relative z-10">
                 Led a critical community initiative that successfully raised ₹4 Lakh to fund tablet devices for underprivileged students during the pandemic, enabling continued access to online education.
               </p>
               
               <div className="w-full h-48 md:h-64 bg-slate-200 dark:bg-darkPrimary transition-colors duration-300 border-2 border-tertiary dark:border-darkTertiary overflow-hidden relative flex items-center justify-center mt-auto">
                  <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay z-20 pointer-events-none"></div>
                  <img 
                    src="/newspaper-clipping.jpg" 
                    alt="Newspaper Feature" 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 z-10 scale-105 group-hover:scale-100" 
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "https://via.placeholder.com/800x400.png?text=Save+your+photo+as+newspaper-clipping.jpg+in+Public+folder"; 
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accentCyan text-white text-sm font-black px-6 py-3 uppercase tracking-widest opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-30 shadow-xl border border-white/20">
                    Click to Enlarge
                  </div>
               </div>
            </motion.div>

            {/* NGO Mentorship Bento */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               whileHover={{ y: -5, scale: 1.01 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 25 }}
               className="bg-secondary dark:bg-darkSecondary transition-colors duration-300 border-2 border-tertiary dark:border-darkTertiary p-8 md:p-10 shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] flex flex-col justify-start relative overflow-hidden group hover:border-accentBrand dark:hover:border-darkAccent"
            >
               <div className="absolute -left-10 -top-10 opacity-5 dark:opacity-10 text-[10rem] font-display font-black text-slate-900 dark:text-white pointer-events-none -rotate-12 transition-colors">NGO</div>
               
               <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 relative z-10">
                 <h3 className="text-3xl md:text-4xl font-black font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase leading-tight tracking-wide">NGO Mentorship Program</h3>
                 <span className="px-4 py-2 bg-transparent text-slate-700 dark:text-slate-300 transition-colors duration-300 font-display font-bold text-xs tracking-widest uppercase border-2 border-accentBrand dark:border-darkAccent whitespace-nowrap">
                   July 2024
                 </span>
               </div>
               
               <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300 font-medium text-xl leading-relaxed relative z-10">
                 Partnered with a local NGO to actively mentor and educate orphaned children. Focused on holistic development and academic guidance, resulting in significantly improved academic performance and confidence across the cohort.
               </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Full-Screen Image Modal for Newspaper */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-900/90 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
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
                className="absolute -top-14 right-0 md:-right-8 text-white hover:text-accentCyan dark:hover:text-darkCyan text-4xl p-2 transition-colors z-50 focus:outline-none"
                aria-label="Close"
              >
                &times;
              </button>
              
              <div className="w-full bg-secondary dark:bg-darkPrimary border-4 border-white dark:border-darkTertiary shadow-2xl overflow-hidden rounded-sm flex items-center justify-center min-h-[400px]">
                <img 
                  src={selectedImage} 
                  alt="Press Clipping"
                  className="w-full h-auto max-h-[85vh] object-contain"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://via.placeholder.com/1200x800.png?text=Image+not+found:+newspaper-clipping.jpg+(Check+Public+Folder)`;
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Impact;
