'use client';

import { Navigation } from '@/components/portfolio/Navigation';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects'; // Default import (no curly braces)
import { Education } from '@/components/portfolio/Education';
import { Experience } from '@/components/portfolio/Timeline';
import { Footer } from '@/components/portfolio/Footer';
import { MagneticCursor } from '@/components/portfolio/MagneticCursor';
import { RobotControls } from '@/components/portfolio/RobotControls'; // ADDED THIS

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Noise Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />

      <MagneticCursor />
      <Navigation />
      
      {/* Floating Interactive Controls (Profile & Resume) */}
      <RobotControls /> 

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}