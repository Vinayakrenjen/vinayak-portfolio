import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'];
      let current = '';
      for (let s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = s;
            break;
          }
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = ['About', 'Skills', 'Projects', 'Certificates', 'Contact'];

  return (
    <div className="min-h-screen bg-primary font-sans text-slate-700 relative selection:bg-accentBrand selection:text-white">
      
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 z-50 bg-noise pointer-events-none" />

      {/* Thin top progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accentBrand origin-left z-[60]" style={{ scaleX }} />

      <header className="fixed w-full backdrop-blur-xl bg-primary/80 py-4 px-8 z-40 border-b border-tertiary flex justify-between items-center transition-all duration-300">
        <h1 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="text-2xl font-display font-black text-slate-900 cursor-pointer tracking-tighter hover:text-accentBrand transition-colors"
        >
          VINAYAK<span className="text-accentBrand">.</span>
        </h1>
        <nav className="hidden md:flex space-x-8 font-semibold text-sm tracking-wide uppercase">
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a 
                key={item} 
                href={`#${id}`} 
                className={`transition-colors relative py-1 ${isActive ? 'text-accentBrand' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {item}
                {isActive && (
                  <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accentBrand" />
                )}
              </a>
            );
          })}
        </nav>
      </header>

      <main>
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 mt-20"
          >
            <h2 className="text-6xl md:text-8xl font-black font-display text-slate-900 mb-6 tracking-tighter uppercase leading-none drop-shadow-sm">
              Vinayak<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBrand to-accentCyan">R Dinesh</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-accentBrand font-display font-bold mb-8 tracking-widest uppercase">Machine Learning & AI Engineer</h3>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
              Building intelligent applications. Leveraging Data Science, Machine Learning, and GenAI to solve high-impact real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#projects" className="px-10 py-5 bg-accentBrand text-white font-display font-black uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-[6px_6px_0px_#93C5FD]">
                View Projects
              </a>
              <a href="#contact" className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-300 font-display font-black uppercase tracking-wider hover:border-slate-900 transition-colors shadow-[6px_6px_0px_#E2E8F0]">
                Let's Connect
              </a>
            </div>
          </motion.div>

          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accentCyan/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accentPurple/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </section>

        <Marquee text="Machine Learning • AI • Data Science" reverse={false} colorClass="bg-accentBrand text-white border-accentBrand" />
        <About />
        
        <Marquee text="Python • Transformers • LLMs" reverse={true} colorClass="bg-white text-slate-900 border-tertiary" />
        <Skills />
        
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
