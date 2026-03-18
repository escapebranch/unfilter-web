'use client';

import { motion } from 'framer-motion';
import { ScreenshotShowcase } from '@/components/ui/ScreenshotShowcase';
import { screenshots } from '@/lib/data';
import { staggerContainer, fadeUpVariants } from '@/lib/animations';

export const InterfaceSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24 lg:mb-32"
        >
          <motion.span 
            variants={fadeUpVariants} 
            custom={0} 
            className="text-caption text-steel-400 uppercase block mb-4 tracking-[0.2em]"
          >
            Interface
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants} 
            custom={0.1} 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold max-w-4xl leading-tight tracking-tight"
          >
            Designed for clarity, built for depth.
          </motion.h2>
        </motion.div>

        <div className="space-y-32 lg:space-y-40">
          {screenshots.map((item, i) => (
            <ScreenshotShowcase key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
