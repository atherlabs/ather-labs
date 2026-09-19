'use client';

import React from 'react';
import Reveal from '@/components/shared/Reveal';

import { InstagramIcon, WhatsAppIcon, GmailIcon } from './SocialIcons';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'Instagram',
    label: '@atherlabs.in',
    href: 'https://instagram.com/atherlabs.in',
    icon: InstagramIcon,
  },
  {
    name: 'WhatsApp',
    label: '+91 9881929650',
    href: 'https://wa.me/919881929650',
    icon: WhatsAppIcon,
  },
  {
    name: 'Gmail',
    label: 'thefreelancereditor1@gmail.com',
    href: 'mailto:thefreelancereditor1@gmail.com',
    icon: GmailIcon,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="space-y-8">
            {/* Top Row: Logo, Nav Links & Social Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
              {/* Left Side: Logo */}
              <a href='/' className='flex items-center gap-3'>
                <img 
                  src='/atherlabs-logo.png' 
                  alt='Ather Labs' 
                  className='h-8 w-auto object-contain' 
                />
              </a>

              {/* Center: Navigation Links */}
              <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-full px-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-ather-cyan transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Right Side: Social Glass Buttons */}
              <div className="flex items-center justify-center flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      title={`${social.name}: ${social.label}`}
                      aria-label={`${social.name}: ${social.label}`}
                      className="h-10 w-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-ather-cyan transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/5" />

            {/* Bottom Row: Copyright & Founder */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              {/* Left: Copyright */}
              <p className="font-mono text-xs text-white/40">
                © 2026 Ather Labs. All rights reserved.
              </p>

              {/* Right: Founder */}
              <p className="font-mono text-xs text-white/40">
                Founder: Radhe
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}


