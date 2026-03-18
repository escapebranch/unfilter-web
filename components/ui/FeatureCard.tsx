'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUpVariants } from '@/lib/animations';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'steel' | 'cyan' | 'amber' | 'green';
  index: number;
}

export const FeatureCard = ({ icon: Icon, title, description, color, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colors: Record<string, string> = {
    steel: 'text-steel-400',
    cyan: 'text-cyan-muted',
    amber: 'text-amber-muted',
    green: 'text-emerald-400',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariants}
      custom={index * 0.15}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative p-8 lg:p-10 rounded-3xl bg-graphite-900/50 border border-graphite-800 hover:border-graphite-700 transition-all duration-500"
    >
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-steel-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative z-10">
        <motion.div
          className={`w-14 h-14 rounded-2xl bg-graphite-800 flex items-center justify-center mb-6 ${colors[color]}`}
          animate={{ rotate: isHovered ? 5 : 0, scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
        
        <h3 className="text-xl lg:text-2xl font-semibold text-graphite-50 mb-4 leading-tight">{title}</h3>
        <p className="text-base text-graphite-400 leading-relaxed">{description}</p>
      </div>

      <motion.div
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ArrowUpRight className="w-5 h-5 text-graphite-600" />
      </motion.div>
    </motion.div>
  );
};
