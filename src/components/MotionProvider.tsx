"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

// LazyMotion carga solo las features de animación que usamos; reducedMotion="user" respeta prefers-reduced-motion.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
