'use client';

import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { features } from '@/lib/data';
import { staggerContainer, fadeUpVariants } from '@/lib/animations';

export const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-16 w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 lg:mb-20"
        >
          <motion.span 
            variants={fadeUpVariants} 
            custom={0} 
            className="text-caption text-steel-400 uppercase block mb-4 tracking-[0.2em]"
          >
            What It Does
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants} 
            custom={0.1} 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-tight tracking-tight break-words"
          >
            Peek, play, and discover.
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 w-full">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
