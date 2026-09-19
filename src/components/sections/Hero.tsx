'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroScene from '@/components/3d/HeroScene';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const blobY = useTransform(scrollY, [0, 600], [0, 80]);
  const sceneY = useTransform(scrollY, [0, 600], [0, 50]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center py-20 md:py-32 px-6 md:px-16 pt-24 overflow-hidden grid-bg">
      {/* 3D Background Canvas with parallax drift */}
      <motion.div style={{ y: sceneY }} className="absolute inset-0 pointer-events-none -z-10">
        <HeroScene />
      </motion.div>

      {/* Animated Gradient Blobs with slower parallax */}
      <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-ather-cyan/20 rounded-full blur-3xl opacity-20 pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-ather-purple/20 rounded-full blur-3xl opacity-20 pointer-events-none"
        />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto flex flex-col items-center space-y-8 z-10 w-full"
      >
        {/* Availability Pill Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ather-cyan border border-ather-cyan/30 rounded-full px-4 py-1.5 backdrop-blur-md bg-ather-cyan/10 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-ather-cyan animate-pulse shadow-[0_0_8px_#00E5FF]" />
            Available for new projects
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white"
        >
          We Build{' '}
          <span className="bg-gradient-to-r from-ather-cyan via-blue-400 to-ather-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            AI Apps
          </span>
          <br />
          &amp; World-Class{' '}
          <span className="bg-gradient-to-r from-ather-purple via-pink-500 to-ather-cyan bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            Websites
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="font-body text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed px-2"
        >
          Ather Labs is a development studio crafting futuristic digital products for ambitious brands.
        </motion.p>

        {/* Buttons Side-by-Side on Desktop, Stacked on Mobile */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#00E5FF] text-black font-mono text-xs uppercase tracking-widest rounded-full px-8 py-4 transition-colors duration-300 hover:bg-white text-center"
          >
            Start a Project
          </a>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-white border border-white/40 font-mono text-xs uppercase tracking-widest rounded-full px-8 py-4 transition-colors duration-300 hover:bg-white hover:text-black text-center"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
