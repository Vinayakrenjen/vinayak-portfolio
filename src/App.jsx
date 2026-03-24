import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import Cursor from './components/Cursor';
import NetworkBackground from './components/NetworkBackground';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impact from './components/Impact';
import Training from './components/Training';

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
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certificates', 'impact', 'contact'];
      let current = '';
      for (let s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
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

  const navLinks = [
    { id: 'about', label: 'Lvl 1: Origin' },
    { id: 'skills', label: 'Lvl 2: Abilities' },
    { id: 'projects', label: 'Lvl 3: Missions' },
    { id: 'education', label: 'Lvl 4: Training' },
    { id: 'impact', label: 'Beyond Code' },
  ];

  return (
    <div className="min-h-screen bg-lvlPrimary dark:bg-darkLvlPrimary font-sans text-slate-700 dark:text-slate-300 relative selection:bg-lvlBrand dark:selection:bg-lvlCyan selection:text-white dark:selection:text-darkLvlPrimary transition-colors duration-500 overflow-x-hidden">
      
      <Cursor />
      
      {/* Animated Neural Network Background */}
      <NetworkBackground />
      
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 z-[1] bg-noise pointer-events-none" />

      {/* Thin top progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-lvlBrand via-lvlPurple to-lvlCyan origin-left z-[60]" style={{ scaleX }} />

      {/* Navigation */}
      <header className="fixed top-0 w-full glass-panel !border-t-0 !border-x-0 !rounded-none py-4 px-6 md:px-12 z-50 flex justify-between items-center transition-all duration-500">
        <h1 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="text-xl md:text-2xl font-display font-black text-slate-900 dark:text-white cursor-pointer tracking-tighter hover:text-lvlBrand dark:hover:text-lvlCyan transition-colors"
        >
          SYS<span className="text-lvlBrand dark:text-lvlCyan">.</span>BUILDER
        </h1>
        
        <div className="flex items-center gap-8">
          <nav className="hidden xl:flex space-x-6 font-semibold text-xs tracking-wider uppercase">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className={`transition-colors relative py-2 px-1 ${isActive ? 'text-lvlBrand dark:text-lvlCyan' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-lvlBrand dark:bg-lvlCyan" />
                  )}
                </a>
              );
            })}
          </nav>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:border-lvlBrand dark:hover:border-lvlCyan hover:text-lvlBrand dark:hover:text-lvlCyan transition-all shadow-sm active:scale-95 z-50 backdrop-blur-md"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
          
          {/* Glowing Neural Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-lvlBrand/20 to-lvlPurple/20 dark:from-lvlCyan/10 dark:to-lvlPurple/10 blur-[90px] md:blur-[120px] rounded-full z-0 pointer-events-none transition-colors duration-1000 animate-pulse"></div>

          <motion.div className="z-10 mt-16 md:mt-20 relative flex flex-col items-center max-w-5xl mx-auto w-full pb-24 md:pb-32">
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="px-5 py-2 border border-lvlBrand/30 dark:border-lvlCyan/30 rounded-full bg-white/40 dark:bg-slate-800/40 text-lvlBrand dark:text-lvlCyan font-bold tracking-widest uppercase text-xs mb-8 md:mb-12 shadow-[0_0_20px_rgba(59,130,246,0.15)] dark:shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-xl"
            >
              Current Level: System Builder
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[2.5rem] leading-[1.1] md:text-7xl lg:text-8xl font-black font-display text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight drop-shadow-sm transition-colors cursor-default"
            >
              Hi, I'm Vinayak.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lvlBrand via-lvlPurple to-lvlCyan block mt-2 md:mt-4">
                I build systems with <br className="hidden md:block"/> discipline & precision.
              </span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="h-8 md:h-10 mb-12 flex justify-center w-full"
            >
              <motion.p 
                className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-medium font-mono border-r-2 border-slate-400 pr-1 inline-block"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                &gt; Striving for the best_
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto"
            >
              <a href="#projects" className="px-8 py-4 glass-panel bg-gradient-to-r from-lvlBrand to-lvlPurple hover:from-lvlPurple hover:to-lvlCyan text-white font-display font-medium rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                View Missions (Projects)
              </a>
              <a href="#contact" className="px-8 py-4 glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-display font-medium rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-1 transform group flex items-center justify-center gap-2">
                Let's Connect <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Scrolling Mouse Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex pointer-events-none scale-90 md:scale-100"
          >
            <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full" 
              />
            </div>
            <span className="text-[10px] font-semibold tracking-widest uppercase mt-3 text-slate-400">Scroll</span>
          </motion.div>
        </section>

        {/* Dynamic Sections */}
        <About />
        <Skills />
        <Projects />
        <Training />
        <Education />
        <Certificates />
        <Impact />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
