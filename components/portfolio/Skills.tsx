'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Globe, Palette, Network } from 'lucide-react';

const skillCategories = [
  {
    title: 'MERN Stack',
    icon: Database,
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Next.js', 'TypeScript'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['HTML/CSS', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Redux', 'React Query'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Design & Tools',
    icon: Palette,
    skills: ['Figma', 'UI/UX Design', 'Git', 'GitHub', 'VS Code', 'Postman'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Python & Networking',
    icon: Network,
    skills: ['Python', 'Flask', 'FastAPI', 'CCNA', 'Network Security', 'Cloud Computing'],
    gradient: 'from-orange-500 to-red-500'
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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
    <section ref={ref} id="skills" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="relative group/skill"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-full blur-md opacity-0 group-hover/skill:opacity-60 transition-opacity duration-300`} />
                      <div className="relative px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 text-gray-300 text-sm font-medium hover:border-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
