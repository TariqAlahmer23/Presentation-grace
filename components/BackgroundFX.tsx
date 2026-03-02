"use client";

import { motion, useReducedMotion } from "framer-motion";

type BackgroundFXProps = {
  index: number;
};

const blobSets = [
  ["bg-primary/28", "bg-primary2/20", "bg-white/10"],
  ["bg-primary2/24", "bg-primary/24", "bg-cyan-300/10"],
  ["bg-emerald-300/18", "bg-primary2/18", "bg-primary/28"]
];

export function BackgroundFX({ index }: BackgroundFXProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const palette = blobSets[index % blobSets.length];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid bg-[size:44px_44px] opacity-[0.03]" />
      <div className="light-radial-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(64,96,240,0.1),transparent_32%)]" />
      {[0, 1, 2].map((item) => (
        <motion.div
          key={`${index}-${item}`}
          className={`absolute rounded-full blur-3xl ${palette[item]}`}
          style={{
            width: item === 0 ? 320 : item === 1 ? 440 : 280,
            height: item === 0 ? 320 : item === 1 ? 440 : 280,
            top: item === 0 ? "8%" : item === 1 ? "48%" : "62%",
            left: item === 0 ? "70%" : item === 1 ? "-5%" : "48%"
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, item % 2 === 0 ? -28 : 28, 0],
                  y: [0, item === 1 ? -24 : 20, 0],
                  scale: [1, 1.06, 1]
                }
          }
          transition={{
            duration: 14 + item * 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_center,rgba(16,176,160,0.1),transparent_68%)]" />
      <div className="grain absolute inset-0 opacity-[0.14]" />
    </div>
  );
}
