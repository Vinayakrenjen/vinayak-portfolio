import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text, reverse = false, colorClass = "bg-accentBrand text-primary border-accentBrand" }) => {
  // Duplicate text massively to ensure seamless inf scrolling
  const fullText = Array(15).fill(text).join(" • ");
  
  return (
    <div className={`w-full overflow-hidden py-4 border-y-2 z-20 relative transform ${reverse ? 'rotate-1' : '-rotate-1'} scale-105 my-12 ${colorClass}`}>
      <motion.div 
        className="flex whitespace-nowrap font-display font-black text-3xl tracking-widest uppercase"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        <span className="mx-4">{fullText}</span>
        <span className="mx-4">{fullText}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
