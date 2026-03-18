'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScreenshotShowcaseProps {
  item: {
    num: string;
    title: string;
    caption: string;
    dark: string;
    light: string;
  };
  index: number;
}

export const ScreenshotShowcase = ({ item, index }: ScreenshotShowcaseProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center"
    >
      {/* Text Content */}
      <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <motion.div style={{ y }} className="space-y-3 lg:space-y-4">
          <span className="text-caption text-steel-400 tracking-[0.2em] uppercase">{item.num}</span>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-graphite-50 leading-tight tracking-tight">{item.title}</h3>
          <p className="text-base lg:text-lg text-graphite-400 max-w-md leading-relaxed">{item.caption}</p>
        </motion.div>
      </div>

      {/* Screenshot Frames */}
      <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] as const }}
        >
          <div className="relative grid grid-cols-2 gap-3 lg:gap-4">
            {/* Dark Mode Frame */}
            <div className="relative aspect-[9/19] rounded-2xl lg:rounded-3xl overflow-hidden border border-graphite-800 shadow-xl lg:shadow-2xl bg-graphite-900">
              <Image
                src={item.dark}
                alt={`${item.title} dark mode`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 22vw"
              />
              <div className="absolute top-2 lg:top-3 left-2 lg:left-3 px-2 py-1 lg:px-3 lg:py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                <span className="text-xs font-medium text-graphite-200 tracking-wide">Dark</span>
              </div>
            </div>

            {/* Light Mode Frame */}
            <div className="relative aspect-[9/19] rounded-2xl lg:rounded-3xl overflow-hidden border border-graphite-800 shadow-xl lg:shadow-2xl bg-white">
              <Image
                src={item.light}
                alt={`${item.title} light mode`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 22vw"
              />
              <div className="absolute top-2 lg:top-3 left-2 lg:left-3 px-2 py-1 lg:px-3 lg:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-graphite-200/50">
                <span className="text-xs font-medium text-graphite-800 tracking-wide">Light</span>
              </div>
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute -inset-4 lg:-inset-6 bg-gradient-to-r from-steel-500/10 via-transparent to-cyan-muted/10 rounded-[2rem] lg:rounded-[3rem] blur-2xl lg:blur-3xl -z-10 opacity-60" />
        </motion.div>
      </div>
    </motion.div>
  );
};
