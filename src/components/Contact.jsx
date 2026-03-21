import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 min-h-[80vh] bg-primary flex flex-col justify-center relative z-10 border-t-2 border-tertiary">

      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accentBrand font-display font-bold uppercase tracking-widest mb-6">04 / Let's work together</p>
          <h2 className="text-6xl md:text-9xl font-black font-display text-slate-900 uppercase tracking-tighter leading-none mb-12">
            Say<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBrand to-accentPurple">Hello.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto font-medium">
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
          <a href="mailto:vinayakrenjen@gmail.com" className="px-10 py-6 bg-accentBrand text-white font-display font-black uppercase tracking-widest text-lg md:text-xl border-2 border-accentBrand hover:bg-transparent hover:text-accentBrand transition-all shadow-[8px_8px_0px_#E2E8F0] hover:shadow-[4px_4px_0px_#4F46E5] hover:translate-y-1 hover:translate-x-1">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/vinayak077/" target="_blank" rel="noopener noreferrer" className="px-10 py-6 bg-secondary text-slate-900 font-display font-black uppercase tracking-widest text-lg md:text-xl border-2 border-tertiary hover:border-slate-400 hover:text-slate-900 transition-all shadow-[8px_8px_0px_#E2E8F0] hover:shadow-[4px_4px_0px_#94A3B8] hover:translate-y-1 hover:translate-x-1">
            LinkedIn
          </a>
          <a href="https://github.com/Vinayakrenjen" target="_blank" rel="noopener noreferrer" className="px-10 py-6 bg-secondary text-slate-900 font-display font-black uppercase tracking-widest text-lg md:text-xl border-2 border-tertiary hover:border-slate-800 hover:text-slate-900 transition-all shadow-[8px_8px_0px_#E2E8F0] hover:shadow-[4px_4px_0px_#1E293B] hover:translate-y-1 hover:translate-x-1">
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
          <a href="#" className="inline-block text-slate-500 hover:text-slate-900 font-display uppercase tracking-widest text-sm font-bold underline decoration-2 underline-offset-8 transition-colors">
            Download Full Resume PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
