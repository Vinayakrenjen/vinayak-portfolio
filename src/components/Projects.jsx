import React from 'react';
import { motion } from 'framer-motion';

const projectsList = [
  {
    mission: 'Mission 01: NER Data Extraction',
    objective: 'Build a production-grade Named Entity Recognition system mapping unstructured land records into structured data.',
    approach: 'Trained a PyTorch BiLSTM-CRF model. Engineered a robust data generation pipeline using Combinatorial Grammars to synthesize 15,000+ training samples. Leveraged GloVe embeddings for targeted semantic learning.',
    outcome: 'Successfully resolved complex linguistic edge cases, including passive voice ambiguity and date/cost confusion, with extremely high precision.',
    tech: ['Python', 'PyTorch', 'GloVe', 'Streamlit'],
    github: 'https://github.com/Vinayakrenjen/LandRecord_NER',
    live: '#',
  },
  {
    mission: 'Mission 02: RealityLens AI',
    objective: 'Create a custom real-time Vision AI application for ultra-fast live video processing and conversational analysis.',
    approach: 'Integrated Google Gemini multimodal capabilities with local hardware GPU acceleration targeting the NVIDIA RTX 4050.',
    outcome: 'Enabled high-performance, real-time conversational analysis over direct video feeds with zero-latency querying.',
    tech: ['Google Gemini', 'Python', 'Computer Vision'],
    github: 'https://github.com/Vinayakrenjen/RealityLens',
    live: '#',
  },
  {
    mission: 'Mission 03: Difficulty Clustering',
    objective: 'Design an unsupervised difficulty estimation model to automatically stratify raw assessment items without labeled data.',
    approach: 'Engineered a hybrid feature extraction pipeline synthesizing Flesch-Kincaid readability metrics with Sentence Transformers embeddings. Clustered via Gaussian Mixture Models (GMM).',
    outcome: 'Devised a continuous 0-10 difficulty scoring algorithm validated against the massive 97k+ RACE dataset with exceptional alignment.',
    tech: ['Hugging Face', 'Scikit-learn', 'NLP', 'GMM'],
    github: 'https://github.com/Vinayakrenjen/question-difficulty-scoring',
    live: '#',
  },
  {
    mission: 'Mission 04: Cloud FinOps Agent',
    objective: 'Construct an AI-driven cloud financial operations platform enabling dynamic cost-reduction strategies across AWS, Azure, and GCP.',
    approach: 'Integrated a highly context-aware Pandas data processing pipeline with LLMs for intelligent log interpretation and real-time conversation state tracking.',
    outcome: 'Streamlined the identification of idle resources, drastically improving multi-cloud infrastructure efficiency through interactive data-driven insights.',
    tech: ['Streamlit', 'Gemini API', 'Pandas'],
    github: 'https://github.com/Vinayakrenjen/Opticloud',
    live: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 min-h-screen relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="text-lvlBrand dark:text-lvlCyan font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Level 3</span>
          <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Missions.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }}
              className="glass-panel p-8 md:p-10 rounded-2xl flex flex-col h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 shadow-2xl group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-lvlBrand/0 to-lvlPurple/0 group-hover:from-lvlBrand/5 group-hover:to-lvlPurple/5 dark:group-hover:from-lvlCyan/5 dark:group-hover:to-lvlPurple/10 transition-colors duration-500 pointer-events-none" />

              <div className="flex justify-between items-center mb-8 relative z-10 border-b border-slate-200 dark:border-slate-700 pb-6">
                <span className="font-display font-black text-2xl md:text-3xl text-lvlBrand dark:text-lvlCyan drop-shadow-sm">
                  {project.mission}
                </span>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-lvlBrand dark:hover:text-lvlCyan transition-colors shadow-sm hover:shadow-md">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                  </a>
                </div>
              </div>
              
              <div className="space-y-6 flex-grow relative z-10 text-sm md:text-base leading-relaxed">
                <div>
                  <h4 className="font-display font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-xs mb-2">Objective</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{project.objective}</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-xs mb-2">Approach</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{project.approach}</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-xs mb-2">Outcome</h4>
                  <p className="text-lvlBrand dark:text-lvlCyan font-medium">{project.outcome}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 relative z-10">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-lvlPrimary dark:bg-darkLvlPrimary text-slate-700 dark:text-slate-300 font-sans font-semibold text-xs border border-slate-200 dark:border-slate-700 rounded-md">
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
