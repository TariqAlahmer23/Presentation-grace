"use client";

import type { CSSProperties } from "react";
import { useMemo } from "react";

type Star = {
  left: string;
  top: string;
  size: string;
  opacity: number;
  delay: string;
  duration: string;
};

type ShootingStar = {
  left: string;
  top: string;
  delay: string;
  duration: string;
  length: string;
};

export function StarfieldBackground() {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 80 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${0.8 + Math.random() * 1.8}px`,
        opacity: 0.12 + Math.random() * 0.55,
        delay: `${Math.random() * 5.5}s`,
        duration: `${3.8 + Math.random() * 4.5}s`
      })),
    []
  );

  const shootingStars = useMemo<ShootingStar[]>(
    () =>
      Array.from({ length: 4 }, () => ({
        left: `${8 + Math.random() * 72}%`,
        top: `${6 + Math.random() * 44}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${6 + Math.random() * 6}s`,
        length: `${56 + Math.random() * 44}px`
      })),
    []
  );

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star, index) => (
        (() => {
          const style: CSSProperties & Record<"--star-base-opacity", number> = {
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
            "--star-base-opacity": star.opacity
          };

          return (
        <span
          key={`star-${index}`}
          className="starfield-star"
          style={style}
        />
          );
        })()
      ))}
      {shootingStars.map((star, index) => (
        <span
          key={`shooting-star-${index}`}
          className="shooting-star"
          style={{
            left: star.left,
            top: star.top,
            width: star.length,
            animationDelay: star.delay,
            animationDuration: star.duration
          }}
        />
      ))}
    </div>
  );
}
