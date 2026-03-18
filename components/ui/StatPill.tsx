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
    className="flex flex-col items-center justify-center px-6 py-5 glass rounded-2xl min-h-[100px]"
  >
    <span className="text-2xl md:text-3xl font-semibold text-graphite-50 mb-1">{value}</span>
    <span className="text-caption text-graphite-400 uppercase text-center">{label}</span>
  </motion.div>
);
