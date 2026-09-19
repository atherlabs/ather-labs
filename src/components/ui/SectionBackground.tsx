'use client';

import React from 'react';

export interface SectionBackgroundProps {
  videoSrc?: string;
  poster?: string;
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
}

export default function SectionBackground({
  videoSrc = '/backgrounds/section-bg.mp4',
  poster,
  className = '',
  children,
  overlay = true,
}: SectionBackgroundProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Mobile Static CSS Gradient Fallback */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-br from-[#050507] via-[#0B0B10] to-[#1A1A22]" />

      {/* Desktop Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Subtle Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}

      {/* Content slot */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export { SectionBackground };
