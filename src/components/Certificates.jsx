import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  { title: 'Generative AI Apps with No-Code', issuer: 'Udemy', date: 'August 2025', image: '/certs/udemy-placeholder.png' },
  { title: 'Master Generative AI & Tools', issuer: 'Udemy', date: 'August 2025', image: '/certs/udemy-placeholder-2.png' },
  { title: 'Cloud Computing', issuer: 'NPTEL', date: 'April 2025', image: '/certs/nptel-placeholder.png' },
  { title: 'The Bits and Bytes of Networking', issuer: 'Coursera', date: 'September 2024', image: '/certs/coursera-placeholder.png' }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Lock body scroll when modal active
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCert]);

  return (
    <>
      <section id="certificates" className="py-24 px-8 min-h-[60vh] bg-secondary dark:bg-darkSecondary transition-colors duration-300 border-y-2 border-tertiary dark:border-darkTertiary relative z-10 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row items-end justify-between border-b-2 border-tertiary dark:border-darkTertiary transition-colors duration-300 pb-6 gap-6"
          >
            <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-tighter">
              Verified<br/><span className="text-accentBrand dark:text-darkAccent transition-colors duration-300">Certs</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 transition-colors duration-300 font-display font-bold uppercase tracking-widest text-right max-w-xs">
              Continuous industry learning and platform mastery.
            </p>
          </motion.div>

          {/* Added a prompt instructing clicking */}
          <p className="text-sm font-bold text-accentBrand dark:text-darkAccent transition-colors duration-300 mb-4 uppercase tracking-widest animate-pulse">
            ► Click on any certificate to view image
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-tertiary dark:border-darkTertiary transition-colors duration-300 shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E]">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className={`bg-primary dark:bg-darkPrimary p-8 md:p-10 border-b-2 ${idx % 2 === 0 ? 'md:border-r-2' : ''} border-tertiary dark:border-darkTertiary last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 hover:bg-secondary dark:hover:bg-darkSecondary transition-colors duration-300 group flex flex-col justify-between cursor-pointer`}
              >
                <div className="mb-12">
                  <span className="text-tertiary dark:text-darkTertiary transition-colors duration-300 font-display font-black text-6xl opacity-80 group-hover:text-accentBrand dark:group-hover:text-darkAccent">0{idx + 1}</span>
                  <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-wide mt-4 leading-snug">{cert.title}</h3>
                </div>
                <div className="flex justify-between items-center border-t-2 border-tertiary dark:border-darkTertiary transition-colors duration-300 pt-6">
                  <span className="font-display font-bold text-slate-500 dark:text-slate-400 transition-colors duration-300 uppercase tracking-widest text-sm">{cert.issuer}</span>
                  <span className="font-display font-bold text-accentBrand dark:text-darkAccent transition-colors duration-300 uppercase tracking-widest text-sm">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
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
                onClick={() => setSelectedCert(null)}
                className="absolute -top-14 right-0 md:-right-8 text-white hover:text-accentBrand dark:hover:text-darkAccent text-4xl p-2 transition-colors z-50 focus:outline-none"
                aria-label="Close"
              >
                &times;
              </button>
              
              <div className="w-full bg-secondary dark:bg-darkPrimary border-4 border-white dark:border-darkTertiary shadow-2xl overflow-hidden rounded-sm flex items-center justify-center min-h-[300px]">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[85vh] object-contain"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://via.placeholder.com/1200x800.png?text=Please+upload+${selectedCert.title.replace(/ /g, '+')}+to+public%2Fcerts%2F`;
                  }}
                />
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-wider">{selectedCert.title}</h3>
                <p className="text-accentBrand dark:text-darkAccent font-bold mt-2 uppercase tracking-widest">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;
