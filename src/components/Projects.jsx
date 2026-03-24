import React from 'react';
import { motion } from 'framer-motion';

const projectsList = [
  {
    title: 'Advanced Land Record NER System',
    description: 'A production-grade Named Entity Recognition system for unstructured land records using PyTorch and BiLSTM-CRF. Synthesized 15,000+ training samples using Combinatorial Grammars.',
    tech: ['Python', 'PyTorch', 'GloVe', 'Streamlit'],
    github: '#',
    live: '#',
  },
  {
    title: 'RealityLens AI System',
    description: 'Custom real-time Vision AI application enabling live video processing and conversational analysis using Google Gemini and local GPU acceleration via NVIDIA RTX 4050.',
    tech: ['Google Gemini', 'Python', 'Computer Vision'],
    github: '#',
    live: '#',
  },
  {
    title: 'Question Difficulty Clustering',
    description: 'An unsupervised difficulty estimation model using Sentence Transformers and Gaussian Mixture Models (GMM) to automatically stratify assessment items without labeled data.',
    tech: ['Hugging Face', 'Scikit-learn', 'NLP'],
    github: '#',
    live: '#',
  },
  {
    title: 'Cloud Cost Optimization Chatbot',
    description: 'AI-driven cloud financial operations platform analyzing real-time conversational data and multi-cloud environments (AWS, Azure, GCP) for actionable cost-reduction strategies.',
    tech: ['Streamlit', 'Gemini API', 'Pandas'],
    github: '#',
    live: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-8 min-h-screen bg-primary dark:bg-darkPrimary transition-colors duration-300 relative z-10 border-t-2 border-tertiary dark:border-darkTertiary mt-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-6xl md:text-8xl font-black font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-tighter leading-none">
              Selected
            </h2>
            <div className="h-2 flex-grow bg-accentBrand dark:bg-darkAccent transition-colors duration-300 hidden md:block"></div>
          </div>
          <h2 className="text-6xl md:text-8xl font-black font-display text-tertiary dark:text-darkTertiary transition-colors duration-300 uppercase tracking-tighter leading-none">
            Projects.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-secondary dark:bg-darkSecondary transition-colors duration-300 border-2 border-tertiary dark:border-darkTertiary p-8 md:p-12 shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#1E1E1E] group flex flex-col h-full cursor-pointer hover:border-accentBrand dark:hover:border-darkAccent"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-display font-black text-4xl text-tertiary dark:text-darkTertiary transition-colors duration-300 group-hover:text-accentBrand dark:group-hover:text-darkAccent">
                  0{idx + 1}
                </span>
                <div className="flex gap-4">
                  <a href={project.github} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-display uppercase text-sm tracking-widest font-bold underline decoration-2 underline-offset-8">Code</a>
                  <a href={project.live} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-display uppercase text-sm tracking-widest font-bold underline decoration-2 underline-offset-8">Live</a>
                </div>
              </div>
              
              <h3 className="text-3xl font-black font-display text-slate-900 dark:text-white transition-colors duration-300 uppercase tracking-wide mb-6">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300 font-medium text-lg mb-10 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t-2 border-tertiary dark:border-darkTertiary transition-colors duration-300">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-primary dark:bg-darkPrimary transition-colors duration-300 text-slate-700 dark:text-slate-300 font-display font-bold uppercase tracking-widest text-xs border border-tertiary dark:border-darkTertiary">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
