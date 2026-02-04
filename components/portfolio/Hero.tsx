'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import dynamic from 'next/dynamic';

// FIXED: Dynamic import with SSR disabled to prevent the 'S' error
const JeenieRobot = dynamic(
  () => import('./JeenieRobot').then((mod) => mod.JeenieRobot),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-gray-900/20 rounded-2xl border border-gray-800 animate-pulse">
        <p className="text-gray-500 text-sm">Initializing Sylvie Protocol...</p>
      </div>
    )
  }
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-2 relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Jaanvi Chouhan
              </span>
              <motion.div
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            3rd Year B.Tech CSE Student & Full-Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            {/* Aspect ratio container for the 3D Model */}
            <div className="w-full max-w-4xl mx-auto aspect-video">
              <JeenieRobot />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 relative group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 font-medium hover:border-blue-500/50 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  );
}