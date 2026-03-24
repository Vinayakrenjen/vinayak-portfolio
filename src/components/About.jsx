import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-8 min-h-[80vh] bg-primary dark:bg-darkPrimary transition-colors duration-300 flex flex-col justify-center relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8 w-full">
        
        {/* Profile Image Bento */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 bg-secondary dark:bg-darkSecondary border-2 border-tertiary dark:border-darkTertiary transition-colors duration-300 p-8 flex flex-col items-center justify-center relative shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] group"
        >
          <div className="w-full aspect-square bg-slate-100 dark:bg-darkPrimary border-2 border-tertiary dark:border-darkTertiary flex items-center justify-center overflow-hidden relative group-hover:border-accentBrand dark:group-hover:border-darkAccent transition-colors duration-300">
             <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay z-20 pointer-events-none"></div>
             <img src="/profile.jpeg" alt="Vinayak" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 z-10" />
          </div>
          <div className="mt-8 text-center uppercase font-display w-full">
            <h3 className="text-slate-900 dark:text-white font-black text-3xl tracking-wider transition-colors duration-300">Vinayak R</h3>
            <div className="h-0.5 w-full bg-slate-200 dark:bg-darkTertiary transition-colors duration-300 my-3" />
            <p className="text-accentBrand dark:text-darkAccent transition-colors duration-300 font-bold text-sm tracking-widest">LPU • B.Tech CSE</p>
          </div>
        </motion.div>

        {/* Biography Bento */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full md:w-3/5 bg-secondary dark:bg-darkSecondary border-2 border-tertiary dark:border-darkTertiary transition-colors duration-300 p-10 md:p-14 shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] flex flex-col justify-center relative overflow-hidden"
        >
          <span className="font-display font-black text-[12rem] text-slate-100 dark:text-darkTertiary absolute -right-10 -bottom-20 opacity-50 dark:opacity-30 leading-none pointer-events-none transition-colors duration-300">AB</span>
          
          <h2 className="text-5xl md:text-6xl font-black mb-10 font-display text-slate-900 dark:text-white uppercase tracking-tighter relative z-10 transition-colors duration-300">
            System.<span className="text-accentBrand dark:text-darkAccent transition-colors duration-300">Info</span>
          </h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-sans font-medium relative z-10 transition-colors duration-300">
            <p>
              I am a driven Computer Science and Engineering student at <span className="text-slate-900 dark:text-white transition-colors duration-300 font-bold">Lovely Professional University</span> (CGPA 8.58) with a strong foundation in algorithm design and data structures.
            </p>
            <p>
              My passion lies deeply rooted in <span className="text-accentCyan dark:text-darkCyan font-bold transition-colors duration-300">Artificial Intelligence</span> and <span className="text-accentBrand dark:text-darkPurple font-bold transition-colors duration-300">Machine Learning</span>. From developing highly accurate NLP models using PyTorch, to implementing advanced Named Entity Recognition systems, and leveraging LLMs like Google Gemini.
            </p>
            <p>
              Beyond coding, I am an adaptable problem solver, an enthusiastic team player, and have led community initiatives to bridge the digital divide for underprivileged students. I am currently open for full-time roles.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
