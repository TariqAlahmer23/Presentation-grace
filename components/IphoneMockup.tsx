"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type IphoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  featured?: boolean;
  index: number;
  animateOnce?: boolean;
};

export function IphoneMockup({
  src,
  alt,
  priority = false,
  featured = false,
  index,
  animateOnce = false
}: IphoneMockupProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 36, rotateY: -8 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: animateOnce, amount: animateOnce ? 0.3 : 0.35 }}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -3 - (index % 2), 0]
            }
      }
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
        y: {
          duration: 4.8 + index * 0.45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2
        }
      }}
      style={{ transformPerspective: 1400 }}
      className={`iphone-stage ${featured ? "md:scale-100 md:opacity-100" : "md:scale-[0.92] md:opacity-60"} w-full max-w-[17rem] shrink-0`}
    >
      <div className="iphone-shell relative mx-auto aspect-[390/844] w-full overflow-hidden">
        <div className="iphone-edge" />
        <div className="iphone-screen">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 260px"
          />
        </div>
        <div className="iphone-notch" />
        <div className="iphone-gloss" />
      </div>
    </motion.div>
  );
}
