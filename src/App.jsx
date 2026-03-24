import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import Cursor from './components/Cursor';
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (saved === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

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
    <div className="min-h-screen bg-primary dark:bg-darkPrimary font-sans text-slate-700 dark:text-slate-300 relative selection:bg-accentBrand dark:selection:bg-darkAccent selection:text-white dark:selection:text-darkPrimary transition-colors duration-300 overflow-x-hidden">
      
      <Cursor />

      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 z-50 bg-noise pointer-events-none" />

      {/* Thin top progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accentBrand dark:bg-darkAccent origin-left z-[60]" style={{ scaleX }} />

      <header className="fixed w-full backdrop-blur-xl bg-primary/80 dark:bg-darkPrimary/80 py-4 px-8 z-40 border-b border-tertiary dark:border-darkTertiary flex justify-between items-center transition-all duration-300">
        <h1 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="text-2xl font-display font-black text-slate-900 dark:text-white cursor-pointer tracking-tighter hover:text-accentBrand dark:hover:text-darkAccent transition-colors"
        >
          VINAYAK<span className="text-accentBrand dark:text-darkAccent">.</span>
        </h1>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex space-x-8 font-semibold text-sm tracking-wide uppercase">
            {navLinks.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a 
                  key={item} 
                  href={`#${id}`} 
                  className={`transition-colors relative py-1 ${isActive ? 'text-accentBrand dark:text-darkAccent' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
                >
                  {item}
                  {isActive && (
                    <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accentBrand dark:bg-darkAccent" />
                  )}
                </a>
              );
            })}
          </nav>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border-2 border-tertiary dark:border-darkTertiary bg-secondary dark:bg-darkSecondary text-slate-600 dark:text-slate-300 hover:border-accentBrand dark:hover:border-darkAccent hover:text-accentBrand dark:hover:text-darkAccent transition-all shadow-[4px_4px_0px_#E2E8F0] dark:shadow-[4px_4px_0px_#1E1E1E] active:translate-y-1 active:translate-x-1 active:shadow-none"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative">
          
          <motion.div className="z-10 mt-16 md:mt-24 relative pb-20 md:pb-32">
            <h2 className="text-6xl md:text-8xl font-black font-display text-slate-900 dark:text-white mb-6 tracking-tighter uppercase leading-none drop-shadow-sm transition-colors cursor-default">
              {"VINAYAK".split("").map((char, index) => (
                <motion.span 
                  key={`v-${index}`} 
                  initial={{ opacity: 0, y: 50 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                  className="inline-block hover:text-accentBrand dark:hover:text-darkAccent transition-colors duration-200"
                >
                  {char}
                </motion.span>
              ))}
              <br/>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }} 
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} 
                transition={{ delay: 0.8, duration: 0.6 }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accentBrand to-accentCyan dark:from-slate-300 dark:to-slate-100"
              >
                R DINESH
              </motion.span>
            </h2>
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-accentBrand dark:text-darkAccent font-display font-bold mb-8 tracking-widest uppercase transition-colors"
            >
              Machine Learning & AI Engineer
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium transition-colors"
            >
              Building intelligent applications. Leveraging Data Science, Machine Learning, and GenAI to solve high-impact real-world problems.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a href="#projects" className="px-10 py-5 bg-accentBrand dark:bg-darkAccent text-white dark:text-darkPrimary font-display font-black uppercase tracking-wider hover:bg-slate-900 dark:hover:bg-white transition-all shadow-[6px_6px_0px_#93C5FD] dark:shadow-none hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                View Projects
              </a>
              <a href="#contact" className="px-10 py-5 bg-white dark:bg-transparent text-slate-900 dark:text-white border-2 border-slate-300 dark:border-darkTertiary font-display font-black uppercase tracking-wider hover:border-slate-900 dark:hover:border-slate-400 transition-all shadow-[6px_6px_0px_#E2E8F0] dark:shadow-none hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 hidden sm:flex"
          >
            <span className="text-[10px] font-display font-bold tracking-widest uppercase mb-2 text-slate-400">Scroll</span>
            <div className="w-px h-10 bg-slate-300 dark:bg-slate-700 overflow-hidden relative">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-accentBrand dark:bg-darkAccent absolute top-0" 
              />
            </div>
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accentCyan/10 dark:bg-darkCyan/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors" 
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, -3, 3, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accentPurple/10 dark:bg-darkPurple/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors" 
          />
        </section>

        <Marquee text="Machine Learning • AI • Data Science" reverse={false} colorClass="bg-accentBrand dark:bg-darkAccent text-white dark:text-darkPrimary border-accentBrand dark:border-darkAccent" />
        <About />
        
        <Marquee text="Python • Transformers • LLMs" reverse={true} colorClass="bg-white dark:bg-darkSecondary text-slate-900 dark:text-slate-300 border-tertiary dark:border-darkTertiary" />
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
