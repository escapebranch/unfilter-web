'use client';

import { motion } from 'framer-motion';

interface StatPillProps {
  value: string;
  label: string;
  delay: number;
}

export const StatPill = ({ value, label, delay }: StatPillProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] as const }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 glass rounded-xl sm:rounded-2xl min-h-[80px] sm:min-h-[90px] lg:min-h-[100px] w-full max-w-full"
  >
    <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-graphite-50 mb-1 text-center break-words">{value}</span>
    <span className="text-caption text-graphite-400 uppercase text-center break-words">{label}</span>
  </motion.div>
);
