'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, Lightbulb } from 'lucide-react';

const experienceData = [
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Google Cloud Facilitator',
    organization: 'Google Cloud',
    period: '2025',
    description: 'Facilitated cloud computing workshops and helped students learn Google Cloud Platform technologies. Mentored peers in cloud architecture and deployment strategies, enabling them to build scalable cloud solutions.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    type: 'achievement',
    icon: Award,
    title: 'Cisco Ideathon Preparation',
    organization: 'Cisco Networking Academy',
    period: '2026',
    description: 'Intensive preparation for Cisco Ideathon, focusing on networking solutions and innovative technology implementations. Developed strong networking fundamentals through comprehensive CCNA curriculum study.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    type: 'project',
    icon: Lightbulb,
    title: 'Full-Stack Development Journey',
    organization: 'Self-Learning & Projects',
    period: '2022 - Present',
    description: 'Built multiple full-stack applications using MERN stack, transitioning from basic web development to complex projects like Jeenie OS. Continuously exploring modern web technologies, AI/ML integration, and creating user-centric solutions.',
    gradient: 'from-orange-500 to-red-500'
  }
];

function ExperienceCard({ item, index }: { item: typeof experienceData[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
      whileHover={{ scale: 1.02 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

      <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0`}>
            <item.icon className="w-7 h-7 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
              {item.title}
            </h3>
            <p className="text-blue-400 font-semibold">{item.organization}</p>
          </div>

          <span className="text-sm text-gray-500 font-medium whitespace-nowrap">{item.period}</span>
        </div>

        <p className="text-gray-400 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="experience" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">What I've worked on</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
