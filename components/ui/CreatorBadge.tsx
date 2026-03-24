'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Github, ArrowUpRight } from 'lucide-react';

export const CreatorBadge = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isHovered) {
        setIsHovered(false);
      }
    };
    
    // Add event listener with passive option for better performance on mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHovered]);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 1 }}
    >
      <motion.div
        layout
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        className="flex items-center p-1.5 rounded-full bg-graphite-900/80 backdrop-blur-xl border border-graphite-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden group/badge transition-colors duration-300 hover:bg-graphite-900/95 hover:border-graphite-700/80 cursor-pointer"
        style={{ borderRadius: 9999 }}
        animate={{ gap: isHovered ? 8 : 0 }}
      >
        <motion.div
          layout
          initial={false}
          animate={{ 
            width: isHovered ? "auto" : 0, 
            opacity: isHovered ? 1 : 0,
            filter: isHovered ? "blur(0px)" : "blur(4px)" 
          }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="overflow-hidden flex items-center"
        >
          <div className="flex items-center pl-4 pr-3 gap-4 whitespace-nowrap w-max">
            <div className="flex flex-col items-start pr-3 border-r border-graphite-800" onClick={(e) => e.stopPropagation()}>
              <span className="text-[10px] uppercase tracking-widest text-graphite-500 font-semibold mb-0.5">
                Creator
              </span>
              <a 
                href="https://github.com/r4khul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-graphite-200 hover:text-white transition-colors group/link"
                draggable={false}
              >
                <div className="flex items-center gap-1.5 mr-0.5">
                  <Github className="w-3.5 h-3.5 text-graphite-400 group-hover/link:text-white transition-colors" />
                  r4khul
                </div>
                <ArrowUpRight className="w-3 h-3 text-graphite-500 group-hover/link:text-graphite-300 transition-colors" />
              </a>
            </div>
            
            <a 
              href="https://github.com/sponsors/r4khul" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group relative flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 hover:from-pink-500/20 hover:to-rose-500/20 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              draggable={false}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-rose-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <Heart className="w-4 h-4 text-pink-400 fill-pink-500/20 group-hover:fill-pink-400 group-hover:scale-110 transition-all duration-300" />
              <span className="text-sm font-medium text-pink-100 tracking-wide md:mr-0">Sponsor</span>
              <Sparkles className="hidden md:block w-3.5 h-3.5 text-rose-300 ml-0.5 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          layout
          className="relative flex items-center justify-center w-11 h-11 rounded-full bg-graphite-800 shrink-0 overflow-visible z-10"
        >
          <img 
            src="https://github.com/r4khul.png" 
            alt="r4khul profile" 
            className="w-full h-full rounded-full object-cover group-hover/badge:scale-105 group-hover/badge:ring-2 group-hover/badge:ring-pink-500/50 transition-all duration-500 ease-out" 
            draggable={false}
          />
          <AnimatePresence>
            {!isHovered && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
                transition={{ type: 'spring', delay: 1.5, duration: 0.5 }}
                className="absolute -bottom-1 -right-1 w-5 h-5 bg-graphite-900 rounded-full flex items-center justify-center border border-graphite-800 shadow-md"
              >
                <Heart className="w-2.5 h-2.5 text-pink-500 fill-pink-500" />
              </motion.div>
            )}
           </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
