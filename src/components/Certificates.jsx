import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  { title: 'Generative AI Apps with No-Code', issuer: 'Udemy', date: 'August 2025' },
  { title: 'Master Generative AI & Tools', issuer: 'Udemy', date: 'August 2025' },
  { title: 'Cloud Computing', issuer: 'NPTEL', date: 'April 2025' },
  { title: 'The Bits and Bytes of Networking', issuer: 'Coursera', date: 'September 2024' }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-8 min-h-[60vh] bg-secondary border-y-2 border-tertiary relative z-10 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row items-end justify-between border-b-2 border-tertiary pb-6 gap-6"
        >
          <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 uppercase tracking-tighter">
            Verified<br/><span className="text-accentBrand">Certs</span>
          </h2>
          <p className="text-slate-500 font-display font-bold uppercase tracking-widest text-right max-w-xs">
            Continuous industry learning and platform mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-tertiary shadow-[8px_8px_0px_#E2E8F0]">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-primary p-8 md:p-10 border-b-2 ${idx % 2 === 0 ? 'md:border-r-2' : ''} border-tertiary last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 hover:bg-secondary transition-colors group flex flex-col justify-between`}
            >
              <div className="mb-12">
                <span className="text-tertiary font-display font-black text-6xl opacity-80 group-hover:text-accentBrand transition-colors">0{idx + 1}</span>
                <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-wide mt-4 leading-snug">{cert.title}</h3>
              </div>
              <div className="flex justify-between items-center border-t-2 border-tertiary pt-6">
                <span className="font-display font-bold text-slate-500 uppercase tracking-widest text-sm">{cert.issuer}</span>
                <span className="font-display font-bold text-accentBrand uppercase tracking-widest text-sm">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
