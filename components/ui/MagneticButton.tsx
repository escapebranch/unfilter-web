'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const MagneticButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  onClick 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const baseStyles = "relative overflow-hidden px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5";
  const variantStyles = {
    primary: "bg-graphite-50 text-graphite-950 hover:bg-white shadow-lg hover:shadow-xl",
    secondary: "bg-transparent border border-graphite-700 text-graphite-50 hover:border-graphite-500 hover:bg-graphite-900/50",
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
};
