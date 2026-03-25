'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { trustCards } from '@/lib/data';

export const TrustSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.23, 1, 0.32, 1] as const }}
              viewport={{ once: true }}
              className="relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-graphite-900 to-graphite-950 border border-graphite-800 overflow-hidden group"
            >
              {/* Large Background Stat */}
              <div className="absolute top-4 right-4 sm:top-0 sm:right-0 p-0 sm:p-8 lg:p-10 pointer-events-none">
                <span className="text-[4.5rem] sm:text-[6rem] lg:text-[8rem] font-bold text-graphite-800/50 leading-none select-none">
                  {card.stat}
                </span>
              </div>
              
              <div className="relative z-10 pr-16 sm:pr-0">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-graphite-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <card.icon className="w-8 h-8 text-steel-400" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-semibold text-graphite-50 mb-4 leading-tight">{card.title}</h3>
                <p className="text-base lg:text-lg text-graphite-400 max-w-md mb-10 leading-relaxed">{card.description}</p>
                
                {/* Stat Display */}
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl lg:text-6xl font-semibold text-graphite-100">{card.stat}</span>
                  <span className="text-caption text-graphite-500 uppercase tracking-wider">{card.statLabel}</span>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-steel-500/5 via-transparent to-cyan-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
