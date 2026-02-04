'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ];

  const currentTheme = themes.find((t) => t.value === theme);
  const CurrentIcon = currentTheme?.icon || Moon;

  const cycleTheme = () => {
    const themeValues = ['light', 'dark', 'system'];
    const currentIndex = themeValues.indexOf(theme || 'dark');
    const nextIndex = (currentIndex + 1) % themeValues.length;
    setTheme(themeValues[nextIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      <motion.button
        onClick={cycleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-2.5 rounded-lg bg-gray-900/50 backdrop-blur-xl border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300"
        title={`Theme: ${currentTheme?.label}`}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          key={theme}
        >
          <CurrentIcon className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full right-0 mt-2 hidden group-hover:flex flex-col gap-1 py-2 px-2 rounded-lg bg-gray-900/95 backdrop-blur-xl border border-gray-700 shadow-lg shadow-black/50 z-50"
      >
        {themes.map((t) => {
          const Icon = t.icon;
          const isActive = theme === t.value;

          return (
            <motion.button
              key={t.value}
              onClick={() => setTheme(t.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                isActive
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{t.label}</span>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
