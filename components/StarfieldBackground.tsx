"use client";

import type { CSSProperties } from "react";

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

function createGenerator(seed: number) {
  let value = seed >>> 0;

  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function createStars(): Star[] {
  const next = createGenerator(20260302);

  return Array.from({ length: 80 }, () => ({
    left: `${(next() * 100).toFixed(4)}%`,
    top: `${(next() * 100).toFixed(4)}%`,
    size: `${(0.8 + next() * 1.8).toFixed(4)}px`,
    opacity: Number((0.12 + next() * 0.55).toFixed(6)),
    delay: `${(next() * 5.5).toFixed(4)}s`,
    duration: `${(3.8 + next() * 4.5).toFixed(4)}s`
  }));
}

function createShootingStars(): ShootingStar[] {
  const next = createGenerator(31415926);

  return Array.from({ length: 4 }, () => ({
    left: `${(8 + next() * 72).toFixed(4)}%`,
    top: `${(6 + next() * 44).toFixed(4)}%`,
    delay: `${(next() * 8).toFixed(4)}s`,
    duration: `${(6 + next() * 6).toFixed(4)}s`,
    length: `${(56 + next() * 44).toFixed(4)}px`
  }));
}

const STARS = createStars();
const SHOOTING_STARS = createShootingStars();

export function StarfieldBackground() {
  return (
    <div className="starfield" aria-hidden="true">
      {STARS.map((star, index) => {
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
      })}
      {SHOOTING_STARS.map((star, index) => (
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
