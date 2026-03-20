"use client";

import Image from 'next/image';
import { RefObject } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface PhoneMockupProps {
  targetRef: RefObject<HTMLElement | null>;
  src: string;
  mobile?: boolean;
  mobileSide?: 'left' | 'right';
}

export const PhoneMockup = ({
  targetRef,
  src,
  mobile = false,
  mobileSide = 'right',
}: PhoneMockupProps) => {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = shouldReduceMotion
    ? 0
    : mobile
      ? useTransform(scrollYProgress, [0, 1], [0, 24])
      : useTransform(scrollYProgress, [0, 0.45, 1], [0, 40, 120]);
  const opacity = shouldReduceMotion
    ? 1
    : mobile
      ? 1
      : useTransform(scrollYProgress, [0, 0.45, 0.8, 1], [1, 1, 0.25, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      className={
        mobile
          ? "pointer-events-none relative block lg:hidden w-28 sm:w-32"
          : "pointer-events-none hidden lg:block absolute right-8 top-20 lg:top-24 w-44 lg:w-56 2xl:w-72"
      }
    >
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30, scale: 0.96, rotate: mobile ? (mobileSide === 'left' ? 16 : -16) : -14 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1, rotate: mobile ? (mobileSide === 'left' ? 16 : -16) : -14 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={
          mobile
            ? mobileSide === 'left'
              ? "relative rotate-[16deg]"
              : "relative rotate-[-16deg]"
            : "relative rotate-[-14deg]"
        }
      >
        <div className="relative aspect-[9/19] rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-graphite-900">
          <Image src={src} alt="Phone mockup" fill className="object-cover" sizes={mobile ? "38vw" : "20vw"} />
        </div>

        {/* Outline accent */}
        <div
          className={
            mobile
              ? mobileSide === 'left'
                ? "absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl border-2 border-white/6 -z-10 rotate-[16deg]"
                : "absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-white/6 -z-10 rotate-[-16deg]"
              : "absolute inset-0 translate-x-6 translate-y-6 rounded-3xl border-2 border-white/6 -z-10 rotate-[-14deg]"
          }
        />

        {/* Glow */}
        <div className="absolute -inset-6 bg-gradient-to-r from-steel-500/8 via-transparent to-cyan-muted/8 rounded-4xl blur-3xl -z-20" />
      </motion.div>
    </motion.div>
  );
};
