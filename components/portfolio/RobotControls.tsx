'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, User, GraduationCap, MapPin, Download, Github, Linkedin } from 'lucide-react';

export function RobotControls() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed bottom-10 left-10 flex flex-col gap-6 z-50">
      
      {/* 1. PROFILE DISCOVERY BUTTON */}
      <div className="relative">
        <motion.button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/30"
        >
          {isProfileOpen ? <X className="text-white w-6 h-6" /> : <User className="text-white w-6 h-6" />}
          
          {/* Tooltip Label */}
          <span className="absolute left-20 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest whitespace-nowrap">
            Meet Jaanvi
          </span>
        </motion.button>

        {/* PROFILE CARD MODAL */}
        <AnimatePresence>
          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              className="absolute bottom-20 left-0 w-[320px] bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl"
            >
              {/* Profile Image from your public folder */}
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Image 
                  src="/jaanvi-photo.jpg" 
                  alt="Jaanvi Chouhan" 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">Jaanvi Chouhan</h3>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">3rd Year B.Tech Student</p>
              </div>

              {/* Education and Location Details */}
              <div className="space-y-3 text-gray-400 text-xs border-t border-white/5 pt-5 mb-6">
                <div className="flex items-center gap-3">
                  <GraduationCap size={14} className="text-blue-500" /> 
                  <span>Medi-Caps University, CSE</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-blue-500" /> 
                  <span>Indore, India</span>
                </div>
              </div>

              {/* Social Quick Links */}
              <div className="flex justify-center gap-4 border-t border-white/5 pt-5">
                <a href="https://github.com/Jaanvichouhan34" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                   <Github size={16} className="text-white" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                   <Linkedin size={16} className="text-white" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. DIRECT RESUME DOWNLOAD BUTTON */}
      <div className="relative">
        <a 
          href="/resume.pdf" 
          download="Jaanvi_Chouhan_Resume.pdf"
          className="no-underline"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.4)] border border-purple-400/30"
          >
            <Download className="text-white w-6 h-6" />
            
            {/* Tooltip Label */}
            <span className="absolute left-20 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest whitespace-nowrap">
              Download CV
            </span>
          </motion.button>
        </a>
      </div>

    </div>
  );
}