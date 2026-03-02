"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { BackgroundFX } from "@/components/BackgroundFX";
import { SoftBackgroundGlow } from "@/components/SoftBackgroundGlow";

type SectionProps = {
  id: string;
  index: number;
  badge: string;
  title: string;
  description: string;
  children: ReactNode;
  sectionRef?: (node: HTMLElement | null) => void;
};

export function Section({
  id,
  index,
  badge,
  title,
  description,
  children,
  sectionRef
}: SectionProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative flex min-h-[100svh] snap-start items-center overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-10"
    >
      <BackgroundFX index={index} />
      <SoftBackgroundGlow index={index} />
      <motion.div
        className="relative mx-auto grid w-full max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center"
        initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-2xl">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-5 inline-flex items-center rounded-full border border-border/70 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary"
          >
            {badge}
          </motion.div>
          <motion.h2
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="text-balance text-4xl font-semibold tracking-[-0.04em] text-[color:var(--heading)] sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.14 }}
            className="mt-6 max-w-xl text-base leading-8 text-[color:var(--muted-body)] sm:text-lg"
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="relative"
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
