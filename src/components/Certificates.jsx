import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  { title: 'Generative AI Apps with No-Code', issuer: 'Udemy', date: 'August 2025', image: '/certs/udemy-1.jpg' },
  { title: 'Master Generative AI & Tools', issuer: 'Udemy', date: 'August 2025', image: '/certs/udemy-2.jpg' },
  { title: 'Cloud Computing', issuer: 'NPTEL', date: 'April 2025', image: '/certs/nptel.jpg' },
  { title: 'The Bits and Bytes of Networking', issuer: 'Coursera', date: 'September 2024', image: '/certs/coursera.jpg' },
  { title: 'Computational Theory', issuer: 'Infosys', date: 'August 2025', image: '/certs/comp-theory.png' },
  { title: 'C Programming', issuer: 'Infosys', date: 'February 2024', image: '/certs/c-programming.png' },
  { title: 'Internet of Things', issuer: 'Infosys', date: 'March 2024', image: '/certs/iot.png' },
  { title: 'ChatGPT Made Easy', issuer: 'Udemy', date: 'August 2025', image: '/certs/chatgpt.png' },
  { title: 'Hardware and Operating Systems', issuer: 'IBM', date: 'September 2024', image: '/certs/hardware-os.png' }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedCert]);

  return (
    <>
      <section id="certificates" className="py-24 px-4 md:px-8 min-h-screen relative z-10 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 text-center md:text-left"
          >
            <span className="text-lvlBrand dark:text-lvlCyan font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Auxiliary Training</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Verified Certs.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl text-lg md:text-xl font-medium">
               Continuous industry learning and platform mastery to augment core system-building capabilities.
            </p>
          </motion.div>

          <p className="text-sm font-bold text-lvlBrand dark:text-lvlCyan mb-8 uppercase tracking-widest flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lvlBrand dark:bg-lvlCyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-lvlBrand dark:bg-lvlCyan"></span>
            </span>
            Click on any credential to expand
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedCert(cert)}
                className="glass-panel p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 flex flex-col justify-between cursor-pointer group shadow-xl hover:shadow-2xl border border-white/40 dark:border-slate-700/50 transition-all relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 text-9xl font-black text-slate-900/5 dark:text-white/5 group-hover:text-lvlBrand/10 dark:group-hover:text-lvlCyan/10 transition-colors pointer-events-none font-display">
                  {idx + 1}
                </div>
                
                <div className="mb-8 relative z-10">
                  <h3 className="text-xl md:text-2xl font-black font-display text-slate-900 dark:text-white leading-tight mb-2 group-hover:text-lvlBrand dark:group-hover:text-lvlCyan transition-colors">{cert.title}</h3>
                </div>
                
                <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-4 relative z-10">
                  <span className="font-bold text-lvlBrand dark:text-lvlCyan uppercase tracking-widest text-xs">{cert.issuer}</span>
                  <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px]">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Image Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
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
                  onClick={() => setSelectedCert(null)}
                  className="absolute -top-14 right-0 md:-right-8 text-white hover:text-lvlCyan text-4xl p-2 transition-colors z-[101] focus:outline-none"
                  aria-label="Close"
                >
                  &times;
                </button>
                
                <div className="w-full bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center min-h-[300px] border border-white/20">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = `https://via.placeholder.com/1200x800.png?text=Certificate+Not+Found`;
                    }}
                  />
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-wider">{selectedCert.title}</h3>
                  <p className="text-lvlCyan font-bold mt-2 uppercase tracking-widest text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
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

export default Certificates;
