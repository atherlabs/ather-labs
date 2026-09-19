'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '3+', label: 'Years of Craft' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Header (centered) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-ather-cyan mb-4">
          ● ABOUT ATHER LABS
        </p>
        <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-4">
          Built by Developers. For Ambitious Brands.
        </h2>
        <p className="font-body text-white/60 max-w-2xl mx-auto">
          Ather Labs is a lean, modern development studio crafting AI-powered apps and world-class websites from Pune, India.
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
        {/* Left column — Studio story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-heading font-bold text-2xl text-white mb-4">
            Who We Are
          </h3>
          <p className="font-body text-white/70 leading-relaxed mb-4">
            Ather Labs is a boutique development studio focused on building products that ship fast, scale well, and look stunning. We blend AI, modern web tech, and obsessive design to deliver work that feels premium — without the agency price tag.
          </p>
          <p className="font-body text-white/70 leading-relaxed mb-6">
            Whether it&apos;s a landing page, a full-stack SaaS platform, a mobile app, or an AI-powered system — we treat every project like it&apos;s our own. No outsourcing. No templates. Just clean, custom-built work.
          </p>

          <h3 className="font-heading font-bold text-2xl text-white mb-3 mt-8">
            Meet the Founder
          </h3>
          <p className="font-body text-white/70 leading-relaxed">
            Hi, I&apos;m <strong>Radhe</strong> — the developer behind Ather Labs. I started this studio with one simple goal: build digital products that actually work, look beautiful, and help businesses grow. If you&apos;re reading this, let&apos;s build something together.
          </p>
          <p className="font-mono text-xs text-ather-cyan mt-4">
            — Radhe, Founder
          </p>
        </motion.div>

        {/* Right column — Stats + Trust panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl text-center relative"
              >
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-ather-cyan/40" />
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-ather-cyan mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-white/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="font-mono text-xs text-white/40 text-center mt-6">
            From Pune, India · Serving clients worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}



