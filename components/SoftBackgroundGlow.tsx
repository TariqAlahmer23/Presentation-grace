"use client";

import { motion, useReducedMotion } from "framer-motion";

type SoftBackgroundGlowProps = {
  index: number;
};

export function SoftBackgroundGlow({ index }: SoftBackgroundGlowProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1].map((item) => (
        <motion.div
          key={`${index}-${item}`}
          className="absolute rounded-full bg-primary/10 blur-3xl"
          style={{
            width: item === 0 ? 260 : 220,
            height: item === 0 ? 260 : 220,
            top: item === 0 ? "14%" : "62%",
            left: item === 0 ? "10%" : "66%"
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, item === 0 ? 10 : -8, 0],
                  y: [0, item === 0 ? -8 : 10, 0],
                  opacity: [0.18, 0.28, 0.18]
                }
          }
          transition={{
            duration: 18 + item * 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
