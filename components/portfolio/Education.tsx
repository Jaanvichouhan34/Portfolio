'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Medi-Caps University, Indore',
    period: '2022 - Present',
    details: '3rd Year | CGPA: 8.6',
    description: 'Building expertise in full-stack development, AI/ML, and networking through coursework and practical projects.',
  },
  {
    title: 'Class XII (CBSE)',
    organization: 'Kendriya Vidyalaya, Mhow',
    period: '2022',
    details: 'PCM + Informatics Practices | 79%',
    description: 'Strong foundation in programming and computational thinking with focus on software development.',
  },
  {
    title: 'Class X (CBSE)',
    organization: 'Kendriya Vidyalaya, Mhow',
    period: '2020',
    details: '72%',
    description: 'Discovered passion for technology and problem-solving.',
  },
];

function EducationItem({ item, index }: { item: typeof educationData[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition-colors duration-300">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              <span className="text-sm text-gray-500 font-medium">{item.period}</span>
            </div>

            <p className="text-green-400 font-medium mb-1">{item.organization}</p>
            <p className="text-gray-300 font-semibold mb-2">{item.details}</p>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-900 border-4 border-green-500 hidden md:block" />
    </motion.div>
  );
}

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="education" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg">My academic journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-emerald-500 to-green-500 hidden md:block" />

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} md:w-[calc(50%-1.5rem)]`}
              >
                <EducationItem item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
