'use client';

import React from 'react';

export interface AuroraBackgroundProps {
  videoSrc?: string;
  poster?: string;
  className?: string;
  children?: React.ReactNode;
  showAuroraGlow?: boolean;
}

export default function AuroraBackground({
  videoSrc = '/backgrounds/aurora-bg.mp4',
  poster,
  className = '',
  children,
  showAuroraGlow = true,
}: AuroraBackgroundProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#050507] ${className}`}>
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

      {/* Aurora Ambient Glow Effects */}
      {showAuroraGlow && (
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-ather-cyan/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-ather-purple/20 rounded-full blur-[100px]" />
        </div>
      )}

      {/* Content slot */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export { AuroraBackground };
