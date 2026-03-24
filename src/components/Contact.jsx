import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 min-h-[80vh] bg-primary dark:bg-darkPrimary transition-colors duration-300 flex flex-col justify-center relative z-10 border-t-2 border-tertiary dark:border-darkTertiary">

      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accentBrand dark:text-darkAccent transition-colors duration-300 font-display font-bold uppercase tracking-widest mb-6">04 / Let's work together</p>
          <h2 className="text-6xl md:text-9xl font-black font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-tighter leading-none mb-12">
            Say<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBrand to-accentPurple dark:from-darkAccent dark:to-darkPurple">Hello.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 transition-colors duration-300 mb-16 max-w-2xl mx-auto font-medium">
            Currently looking for new opportunities in Machine Learning and Software Engineering. My inbox is always open.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-6 md:gap-8"
        >
          <a href="mailto:vinayakrenjen@gmail.com" className="px-10 py-6 bg-accentBrand dark:bg-darkAccent text-white dark:text-darkPrimary transition-colors duration-300 font-display font-black uppercase tracking-widest text-lg md:text-xl border-2 border-accentBrand dark:border-darkAccent hover:bg-transparent dark:hover:bg-transparent hover:text-accentBrand dark:hover:text-darkAccent shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] hover:shadow-[4px_4px_0px_#4F46E5] dark:hover:shadow-[4px_4px_0px_#EAB308] hover:translate-y-1 hover:translate-x-1">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/vinayak077/" target="_blank" rel="noopener noreferrer" className="px-10 py-6 bg-secondary dark:bg-darkSecondary text-slate-900 dark:text-white transition-colors duration-300 font-display font-black uppercase tracking-widest text-lg md:text-xl border-2 border-tertiary dark:border-darkTertiary hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] hover:shadow-[4px_4px_0px_#94A3B8] dark:hover:shadow-[4px_4px_0px_#64748B] hover:translate-y-1 hover:translate-x-1">
            LinkedIn
          </a>
          <a href="https://github.com/Vinayakrenjen" target="_blank" rel="noopener noreferrer" className="px-10 py-6 bg-secondary dark:bg-darkSecondary text-slate-900 dark:text-white transition-colors duration-300 font-display font-black uppercase tracking-widest text-lg md:text-xl border-2 border-tertiary dark:border-darkTertiary hover:border-slate-800 dark:hover:border-slate-300 hover:text-slate-900 dark:hover:text-white shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] hover:shadow-[4px_4px_0px_#1E293B] dark:hover:shadow-[4px_4px_0px_#CBD5E1] hover:translate-y-1 hover:translate-x-1">
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <a href="#" className="inline-block text-slate-500 dark:text-slate-400 transition-colors duration-300 hover:text-slate-900 dark:hover:text-white font-display uppercase tracking-widest text-sm font-bold underline decoration-2 underline-offset-8">
            Download Full Resume PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
