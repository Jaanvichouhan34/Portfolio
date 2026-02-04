'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
// Change this line (approx line 15)
const audio = new Audio('/bg-music.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.muted = true;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.muted = false;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.log('Audio playback failed:', error);
      });
      setIsPlaying(true);
    }
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="relative group"
    >
      {isPlaying && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.4, 0.1], scale: [1, 1.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-blue-500"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.2, 0], scale: [1, 1.6] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-blue-500"
          />
        </>
      )}

      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative p-2.5 rounded-lg transition-all duration-300 border ${
          isPlaying
            ? 'bg-green-500/20 border-green-500/50 text-green-400 shadow-lg shadow-green-500/20'
            : 'bg-gray-900/50 border-gray-700 text-gray-400 hover:text-white hover:border-gray-600'
        } backdrop-blur-xl`}
        title={isPlaying ? 'Music: On' : 'Music: Off'}
      >
        <motion.div
          animate={isPlaying ? {
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          } : {}}
          transition={isPlaying ? { duration: 0.8, repeat: Infinity } : {}}
        >
          <Music className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute top-full right-0 mt-2 hidden group-hover:block px-3 py-2 rounded-lg bg-gray-900/95 backdrop-blur-xl border border-gray-700 text-sm text-gray-300 whitespace-nowrap shadow-lg shadow-black/50 z-50"
      >
        {isPlaying ? 'Music: On' : 'Music: Off'}
      </motion.div>
    </motion.div>
  );
}
