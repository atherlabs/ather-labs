'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import GifStrip from '@/components/ui/GifStrip';
import Services from '@/components/sections/Services';
import PricingPreview from '@/components/sections/PricingPreview';
import WebsiteDev from '@/components/sections/WebsiteDev';
import AppDev from '@/components/sections/AppDev';
import Work from '@/components/sections/Work';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative bg-ather-black text-white overflow-x-hidden">
      {/* Background CSS Grid Pattern Accent */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Background Animated Orbs */}
      <motion.div
        className="fixed top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-ather-cyan/10 blur-[120px] pointer-events-none -z-10"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fixed bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-ather-purple/10 blur-[120px] pointer-events-none -z-10"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Navbar />
      <Hero />
      <GifStrip />
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />
      <Services />
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />
      <PricingPreview />
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />
      <WebsiteDev />
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />
      <AppDev />
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />
      <Work />
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />
      <About />
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />
      <Contact />
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />
      <Footer />
    </main>
  );
}


