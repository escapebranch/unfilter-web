'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Play, Github, ChevronDown } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { StatPill } from '@/components/ui/StatPill';
import { stats } from '@/lib/data';
import { useRef } from 'react';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-16 pt-20 pb-32">
      <motion.div 
        className="max-w-7xl mx-auto w-full"
        style={shouldReduceMotion ? {} : { y: heroY, opacity: heroOpacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }}
          className="mb-6 lg:mb-8"
        >
          <span className="text-caption text-steel-400 uppercase tracking-[0.2em]">Unfilter for Android</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] as const }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold max-w-6xl mb-6 lg:mb-8 leading-[0.95] tracking-tight"
        >
          Peel back the icon.
          <br />
          <span className="text-graphite-500">See the stack.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] as const }}
          className="text-lg sm:text-xl lg:text-2xl text-graphite-400 max-w-3xl mb-10 lg:mb-14 leading-relaxed"
        >
          Unfilter uncovers what installed apps are built with, layered with task-manager signal, 
          memory/storage insight, and privacy-first local scanning. Know your phone&apos;s software DNA.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
          className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-24"
        >
          <MagneticButton variant="primary">
            <Play className="w-4 h-4" fill="currentColor" />
            Download on Play Store
          </MagneticButton>
          <MagneticButton variant="secondary">
            <Github className="w-4 h-4" />
            View Source
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-4xl"
        >
          {stats.map((stat, i) => (
            <StatPill key={stat.label} {...stat} delay={0.8 + i * 0.1} />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-graphite-600"
        >
          <span className="text-caption uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] as const }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[75%] hidden xl:block pointer-events-none"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/unfilter-banner.png"
            alt="Unfilter App Interface"
            fill
            className="object-contain object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/80 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
