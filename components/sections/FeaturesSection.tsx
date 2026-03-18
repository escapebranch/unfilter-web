'use client';

import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { features } from '@/lib/data';
import { staggerContainer, fadeUpVariants } from '@/lib/animations';

export const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
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
            Capabilities
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants} 
            custom={0.1} 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold max-w-4xl leading-tight tracking-tight"
          >
            Technical intelligence for the curious.
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
