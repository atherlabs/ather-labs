'use client';

import React from 'react';
import Reveal from '@/components/shared/Reveal';
import ContactForm from '@/components/ui/ContactForm';
import { InstagramIcon, WhatsAppIcon, GmailIcon } from '@/src/components/ui/SocialIcons';

const contactDetails = [
  {
    id: 'email',
    text: 'Email: thefreelancereditor1@gmail.com',
    href: 'mailto:thefreelancereditor1@gmail.com',
    icon: GmailIcon,
    isExternal: false,
  },
  {
    id: 'whatsapp',
    text: 'WhatsApp: +91 9881929650',
    href: 'https://wa.me/919881929650',
    icon: WhatsAppIcon,
    isExternal: true,
  },
  {
    id: 'instagram',
    text: 'Instagram: @atherlabs.in',
    href: 'https://instagram.com/atherlabs.in',
    icon: InstagramIcon,
    isExternal: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 md:px-16 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-ather-cyan/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          {/* Top Label */}
          <p className="font-mono text-xs uppercase tracking-widest text-ather-cyan mb-4">
            ● GET IN TOUCH
          </p>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-4">
            Let&apos;s Build Something Legendary
          </h2>

          {/* Subtext */}
          <p className="font-body text-white/60 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            Tell us about your project. We&apos;ll get back within 24 hours.
          </p>

          {/* Contact Info Row / CTA Buttons - Stacking vertically on mobile */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 font-mono text-xs uppercase tracking-widest text-white/60 w-full">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 rounded-full bg-white/5 border border-white/10 hover:border-ather-cyan/40 hover:text-white hover:bg-white/10 transition-all shadow-sm w-full sm:w-auto text-center"
                >
                  <Icon className="w-4 h-4 shrink-0 text-ather-cyan" />
                  <span>{item.text}</span>
                </a>
              );
            })}
          </div>

          {/* Centerpiece Contact Form */}
          <div className="relative max-w-2xl mx-auto mt-12 md:mt-16 glass-panel rounded-2xl p-5 sm:p-8 md:p-12 w-full box-border transition-all duration-300 hover:border-ather-cyan/40">
            {/* Corner Markers */}
            <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-ather-cyan/40" />
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-ather-cyan/40" />

            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}



