import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaLaptopCode } from 'react-icons/fa';

const educationData = [
  {
    role: 'B.Tech in Computer Science and Engineering',
    company: 'Lovely Professional University',
    duration: 'Aug 2023 - Present',
    description: 'Currently pursuing my undergraduate degree with a CGPA of 8.58. Building a strong foundation in algorithms, data structures, and core software engineering principles.',
    icon: <FaGraduationCap className="text-accentBlue text-lg" />,
    color: 'border-accentBlue',
    shadow: 'shadow-accentBlue/20',
    titleColor: 'text-accentBlue'
  },
  {
    role: 'Machine Learning Made Easy: From Basics to Application',
    company: 'Lovely Professional University (Training)',
    duration: 'June 2025 - July 2025',
    description: 'Mastered foundational ML and Deep Learning (CNNs, RNNs, Transformers). Acquired deep operational knowledge of GenAI ecosystems (GPT, Claude, Gemini) and implemented end-to-end workflows using PyTorch, LangChain, and RAG architectures.',
    icon: <FaLaptopCode className="text-accentPurple text-lg" />,
    color: 'border-accentPurple',
    shadow: 'shadow-accentPurple/20',
    titleColor: 'text-accentPurple'
  }
];

const certifications = [
  { title: 'Build Generative AI apps with No-Code tools', issuer: 'Udemy', date: 'August 2025' },
  { title: 'Master Generative AI & Generative AI tools', issuer: 'Udemy', date: 'August 2025' },
  { title: 'Cloud Computing', issuer: 'NPTEL', date: 'April 2025' },
  { title: 'The Bits and Bytes of Computer Networking', issuer: 'Coursera', date: 'September 2024' }
];

const Experience = () => {
  return (
    <section id="education" className="py-24 px-8 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Education & Training Timeline */}
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-gray-900">
              Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentPurple">Training</span>
            </h2>
          </motion.div>

          <div className="relative border-l-2 border-accentBlue/20 ml-3 md:ml-6">
            {educationData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="mb-12 ml-8 md:ml-12 relative"
              >
                <span className={`absolute -left-[45px] md:-left-[61px] top-1 h-12 w-12 rounded-full bg-white border-4 ${exp.color} flex items-center justify-center shadow-lg ${exp.shadow}`}>
                  {exp.icon}
                </span>
                
                <div className="bg-secondary p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <span className="px-4 py-1.5 bg-white text-gray-600 font-semibold text-sm rounded-full shadow-sm border border-gray-200 inline-flex w-fit whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className={`${exp.titleColor} font-semibold text-lg mb-4`}>{exp.company}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Sidebar */}
        <div className="lg:w-1/3 mt-8 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-32"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FaCertificate className="text-accentCyan" /> Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="group border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <h4 className="font-semibold text-gray-800 group-hover:text-accentBlue transition-colors mb-1">{cert.title}</h4>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="bg-secondary px-2 py-1 rounded-md font-medium text-gray-600">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
