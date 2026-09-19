'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <nav className="w-full h-20 flex items-center justify-between pl-4 pr-4 sm:pr-6 lg:pr-8">
        {/* Left: Image Logo */}
        <a href='/' className='flex items-center gap-3'>
          <img 
            src='/atherlabs-logo.png' 
            alt='Ather Labs' 
            className='h-8 md:h-10 w-auto object-contain' 
          />
        </a>

        {/* Right: Nav Links & CTA */}
        <div className="flex items-center">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-ather-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block ml-8 border border-ather-cyan/50 rounded-full px-5 py-2 text-xs font-mono uppercase text-ather-cyan hover:bg-ather-cyan hover:text-black transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]"
          >
            Start a Project
          </motion.a>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="text-white/80 hover:text-ather-cyan focus:outline-none p-2"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Glass Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 sm:p-8 h-screen w-screen overflow-y-auto"
          >
            {/* Top Bar inside overlay: Logo & Close (X) button */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <a href='/' onClick={() => setMobileMenuOpen(false)} className='flex items-center gap-3'>
                <img 
                  src='/atherlabs-logo.png' 
                  alt='Ather Labs' 
                  className='h-8 w-auto object-contain' 
                />
              </a>

              <button
                onClick={() => setMobileMenuOpen(false)}
                type="button"
                className="text-white/80 hover:text-ather-cyan focus:outline-none p-2 rounded-full border border-white/10 bg-white/5"
                aria-label="Close Navigation Menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Vertically stacked links with py-4 text-base */}
            <div className="flex flex-col divide-y divide-white/5 my-auto py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-base uppercase tracking-widest text-white/90 hover:text-ather-cyan transition-colors py-4 block text-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Full-width CTA at the bottom */}
            <div className="pt-4 border-t border-white/10 w-full">
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full block text-center bg-ather-cyan text-black rounded-full py-4 text-base font-mono uppercase font-semibold tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]"
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

