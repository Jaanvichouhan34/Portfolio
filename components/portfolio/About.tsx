'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Brain } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={ref} id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg">Crafting digital experiences with code and creativity</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Academic Journey</h3>
                <p className="text-gray-400 leading-relaxed">
                  Currently pursuing B.Tech in Computer Science & Engineering at Medicaps University.
                  My academic journey has been a blend of theoretical foundations and hands-on practical experience,
                  constantly pushing boundaries to learn and grow.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Development Path</h3>
                <p className="text-gray-400 leading-relaxed">
                  Started my journey with Web Development, mastering the MERN stack and modern frontend frameworks.
                  Building responsive, performant applications that solve real-world problems and deliver exceptional user experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="md:col-span-2 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Evolution to AI/ML</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Expanding my horizons into the fascinating world of Artificial Intelligence and Machine Learning.
                  Combining my web development expertise with AI technologies to create intelligent, data-driven applications
                  that push the boundaries of what's possible.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning', 'NLP'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
