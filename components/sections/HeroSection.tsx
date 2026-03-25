'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Github, ChevronDown } from 'lucide-react';
import { GithubStarChip } from '@/components/ui/GithubStarChip';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { StatPill } from '@/components/ui/StatPill';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 pt-20 pb-16 sm:pb-20 lg:pb-32 w-full max-w-full">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div 
          style={shouldReduceMotion ? {} : { y: heroY, opacity: heroOpacity }}
        >
          {/* Android Chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }}
            className="mb-6 lg:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/10 backdrop-blur-sm">
              <Image
                src="/white-unfilter-nobg.png"
                alt="Unfilter logo"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
              <span className="text-sm font-medium text-graphite-200 tracking-wide">For Android</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] as const }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold max-w-4xl lg:max-w-5xl xl:max-w-6xl mb-6 lg:mb-8 leading-[0.9] tracking-tight break-words font-sans"
          >
            Unfilter.
            <br />
            <span className="text-[0.7em] text-graphite-400 font-normal">Peel back the icon.</span>
            <br />
            <span className="text-[0.7em] text-graphite-400 font-normal">See the stack.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] as const }}
            className="text-base lg:text-lg text-graphite-400 max-w-lg lg:max-w-xl mb-10 lg:mb-14 leading-relaxed"
          >
            Unfilter uncovers what installed apps are built with, layered with task-manager signal, 
            memory/storage insight, and privacy-first local scanning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
            className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 lg:mb-16 xl:mb-24"
          >
            <MagneticButton variant="primary">
              <Image
                src="/google-play-store-icon.svg"
                alt="Play Store"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              Download on Play Store
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              onClick={() => window.open('https://github.com/escapebranch/unfilter', '_blank')}
            >
              <Github className="w-4 h-4" />
              View Source
              <span className="ml-3 -mr-1 hidden sm:inline-block">
                <GithubStarChip />
              </span>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 max-w-3xl lg:max-w-4xl w-full"
          >
            {stats.map((stat, i) => (
              <StatPill key={stat.label} {...stat} delay={0.8 + i * 0.1} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <PhoneMockup targetRef={containerRef} src="/images/home-black.jpg" />

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
    </section>
  );
};
