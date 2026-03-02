"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GraceLogoProps = {
  compact?: boolean;
  theme?: "dark" | "light";
};

export function GraceLogo({
  compact = false,
  theme = "dark"
}: GraceLogoProps) {
  const [hasImage, setHasImage] = useState(false);
  const logoSrc = theme === "dark" ? "/grace-logo-white.png" : "/grace-logo.png";

  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setHasImage(true);
    probe.onerror = () => setHasImage(false);
    probe.src = logoSrc;
  }, [logoSrc]);

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-border/80 bg-white/10 shadow-panel backdrop-blur-xl">
        {hasImage ? (
          <Image
            src={logoSrc}
            alt="GRACE"
            fill
            className="object-contain p-1.5"
            sizes="44px"
          />
        ) : (
          <>
            <div className="absolute inset-1 rounded-[18px] bg-gradient-to-br from-primary via-primary2 to-secondary opacity-90" />
            <span className="relative text-lg font-semibold tracking-tight text-white">
              G
            </span>
          </>
        )}
      </div>
      {!compact && (
        <div className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-text/90">
            GRACE
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
            Mental Health
          </span>
        </div>
      )}
    </div>
  );
}
