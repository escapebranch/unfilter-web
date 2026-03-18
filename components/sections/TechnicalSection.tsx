'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { technicalPoints } from '@/lib/data';
import { staggerContainer, fadeUpVariants } from '@/lib/animations';

export const TechnicalSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeUpVariants} 
              custom={0} 
              className="text-caption text-steel-400 uppercase block mb-4 tracking-[0.2em]"
            >
              Technical Stack
            </motion.span>
            <motion.h2 
              variants={fadeUpVariants} 
              custom={0.1} 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-10 lg:mb-12 leading-tight tracking-tight"
            >
              How it works
            </motion.h2>
            
            <div className="space-y-8">
              {technicalPoints.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUpVariants}
                  custom={0.2 + i * 0.1}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-graphite-900 border border-graphite-800 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-steel-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-graphite-100 mb-2 leading-snug">{item.title}</h4>
                    <p className="text-base text-graphite-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative rounded-3xl overflow-hidden border border-graphite-800 bg-graphite-900/50 shadow-2xl">
              <Image
                src="/images/how-to-install.png"
                alt="Installation Guide"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -inset-6 bg-gradient-to-r from-steel-500/5 to-cyan-muted/5 rounded-[3rem] blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
