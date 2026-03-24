import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800 bg-lvlPrimary/50 dark:bg-darkLvlPrimary/50 backdrop-blur-md relative z-10 mt-auto">
      <p className="text-slate-500 font-medium text-sm font-display tracking-widest uppercase">
        © {new Date().getFullYear()} Vinayak R. Dinesh • System Engineered
      </p>
    </footer>
  );
};

export default Footer;
