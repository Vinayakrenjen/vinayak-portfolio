import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 min-h-[80vh] flex flex-col justify-center relative z-10">
      <div className="max-w-4xl mx-auto w-full glass-panel p-8 md:p-16 rounded-3xl bg-white/70 dark:bg-slate-800/70 border-t border-white/60 dark:border-slate-700/60 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-lvlBrand/10 dark:bg-lvlCyan/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lvlPurple/10 dark:bg-lvlPurple/10 blur-[80px] rounded-full pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-10"
        >
          <span className="text-lvlBrand dark:text-lvlCyan font-bold tracking-[0.2em] uppercase text-sm mb-4 block inline-block bg-lvlBrand/10 dark:bg-lvlCyan/10 px-4 py-1 rounded-full">Final Level</span>
          <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 dark:text-white tracking-tight mb-6">
            Initiate Contact.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Ready to architect something massive? Let's connect and build the next generation of intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <motion.a 
            href="mailto:vinayakrenjen@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center justify-center gap-4 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-lvlBrand dark:hover:border-lvlCyan hover:shadow-lg transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-lvlBrand/10 dark:bg-lvlCyan/10 flex items-center justify-center group-hover:bg-lvlBrand dark:group-hover:bg-lvlCyan transition-colors">
              <svg className="w-8 h-8 text-lvlBrand dark:text-lvlCyan group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <span className="font-display font-bold text-slate-800 dark:text-white text-lg">Email Me</span>
            <span className="text-slate-500 text-sm">vinayakrenjen@gmail.com</span>
          </motion.a>

          <motion.a 
            href="https://linkedin.com/in/vinayak077/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center justify-center gap-4 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-[#0A66C2] dark:hover:border-[#0A66C2] hover:shadow-lg transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2] transition-colors">
              <svg className="w-8 h-8 text-[#0A66C2] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <span className="font-display font-bold text-slate-800 dark:text-white text-lg">LinkedIn</span>
            <span className="text-slate-500 text-sm">Professional Network</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
