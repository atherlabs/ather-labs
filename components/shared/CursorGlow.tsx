'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => window.innerWidth > 768;

    if (!checkMobile()) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 100}px, ${currentY - 100}px)`;
      }

      animFrameId = requestAnimationFrame(updatePosition);
    };

    animFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none blur-3xl opacity-15 z-[9999] bg-[radial-gradient(circle_at_center,#00E5FF_0%,transparent_70%)] hidden md:block"
      style={{
        willChange: 'transform',
      }}
    />
  );
}
