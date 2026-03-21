import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-primary border-t-2 border-tertiary text-center text-sm md:text-base relative z-10 flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto uppercase font-display font-bold tracking-widest text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} <span className="text-slate-900">Vinayak R Dinesh</span>.
      </p>
      <p className="mt-4 md:mt-0">
        System <span className="text-accentBrand">Online</span>.
      </p>
    </footer>
  );
};

export default Footer;
