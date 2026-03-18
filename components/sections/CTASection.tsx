'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

export const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] as const }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <div className="relative p-12 lg:p-20 rounded-[2.5rem] bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-steel-500/10 rounded-full blur-[120px] -translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 lg:mb-8 leading-tight tracking-tight">
              Make your phone feel <span className="text-steel-400">transparent</span> again.
            </h2>
            <p className="text-lg lg:text-xl text-graphite-400 mb-12 lg:mb-14 max-w-2xl mx-auto leading-relaxed">
              Inspect what your apps are really made of. Download Unfilter and see the stack behind every icon.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <MagneticButton variant="primary" className="text-base">
                <Download className="w-5 h-5" />
                Get Unfilter
              </MagneticButton>
              <MagneticButton variant="secondary" className="text-base">
                <ExternalLink className="w-5 h-5" />
                Latest Release
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
