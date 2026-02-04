'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Code2, Globe } from 'lucide-react';

const projects = [
  {
    title: "SkillMirror",
    size: "md:col-span-12 md:row-span-3",
    category: "AI Student Performance",
    image: "/project/skillmirror.jpeg", //
    github: "https://github.com/Jaanvichouhan34/SkillMirror",
    live: "#",
    tech: ["React", "Python", "Flask", "Machine Learning", "Tailwind CSS"],
    fullDescription: "SkillMirror is an AI-powered evaluation platform designed to provide diagnostic insights into student performance. It bridges the gap between perception and actual skill levels through automated technical assessment."
  },
  {
    title: "Sign Language Translator",
    size: "md:col-span-8 md:row-span-2",
    category: "Computer Vision",
    image: "/project/sign-translator.jpeg", //
    github: "https://github.com/Jaanvichouhan34/Sign-Language-Translator",
    live: "#",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    fullDescription: "A real-time hand-tracking system that translates sign language gestures into text and speech instantly, enabling seamless communication for the speech-impaired."
  },
  {
    title: "Jeenie OS Visualizer",
    size: "md:col-span-4 md:row-span-4",
    category: "3D Web Development",
    image: "/project/jeenie-os.jpeg", //
    github: "https://github.com/Jaanvichouhan34/jeenie-visualizer",
    live: "https://jeenie-visualizer-n81f.vercel.app/",
    tech: ["Three.js", "React Three Fiber", "Next.js", "Spline"],
    fullDescription: "An immersive 3D experience featuring a 'Scroll to Explode' character reveal. It showcases interactive armor systems and high-fidelity 3D modeling in the browser."
  },
  {
    title: "AuraCalc",
    size: "md:col-span-8 md:row-span-3",
    category: "Multi-Utility",
    image: "/project/auracalc.jpeg", //
    github: "https://github.com/Jaanvichouhan34/AuraCalc",
    live: "https://aura-calc.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    fullDescription: "A comprehensive metric suite computing 15+ metrics including Health, Finance, and Math data. It features a clean, tile-based UI for complex calculations."
  },
  {
    title: "Virtual AI Keyboard",
    size: "md:col-span-6 md:row-span-3",
    category: "HCI Innovation",
    image: "/project/virtual-keyboard.jpeg", //
    github: "https://github.com/Jaanvichouhan34/AI-Virtual-Keyboard",
    live: "#",
    tech: ["Python", "OpenCV", "MediaPipe", "Pynput"],
    fullDescription: "A gesture-based digital keyboard that allows users to type in the air using advanced AI hand-tracking, eliminating the need for physical hardware."
  },
  {
    title: "Smart Expense Tracker",
    size: "md:col-span-6 md:row-span-3",
    category: "FinTech AI",
    image: "/project/expense-tracker.jpeg", //
    github: "#", 
    live: "#",
    tech: ["Next.js", "Chart.js", "Node.js", "MongoDB"],
    fullDescription: "A financial dashboard using AI to track spending patterns, provide personalized saving analytics, and visualize budget health through interactive charts."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <section id="projects" className="py-40 bg-black">
      <div className="max-w-[1500px] mx-auto px-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl font-medium tracking-wide">
            Building the future, one project at a time
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 auto-rows-[200px]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className={`${project.size} group relative bg-[#050505] border border-white/5 rounded-[4.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-1000 shadow-2xl cursor-pointer`}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-95 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              </div>

              <div className="absolute inset-0 p-14 flex flex-col justify-end">
                <span className="text-xs uppercase tracking-[0.6em] text-blue-400 font-black mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-5xl font-black text-white tracking-tighter">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[3rem] border border-white/10 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-10 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="text-white" size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[400px] md:h-full min-h-[500px]">
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-12 md:p-16 flex flex-col">
                  <span className="text-sm uppercase tracking-widest text-blue-400 font-bold mb-4">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-5xl font-black text-white mb-6 tracking-tighter">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest opacity-50">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white text-xs font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-auto">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-white text-black text-center font-black uppercase tracking-widest rounded-2xl hover:bg-blue-400 transition-colors flex items-center justify-center gap-2">
                      <Github size={20} /> View Source
                    </a>
                    {selectedProject.live !== "#" && (
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-blue-500 text-white text-center font-black uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                        <Globe size={20} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}