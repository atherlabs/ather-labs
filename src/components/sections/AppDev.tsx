'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Reveal from '@/components/shared/Reveal';

const features = [
  'User login / signup',
  'Database',
  'User profiles',
  'Push notifications',
  'Admin panel',
  'Payments',
  'APIs',
  'Maps / location',
  'Chat',
  'Booking systems',
  'Dashboard',
  'Cloud backend',
];

export default function AppDev() {
  return (
    <section id="app-dev" className="relative py-20 md:py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-ather-cyan mb-4">
              ● APP DEVELOPMENT
            </p>
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-4">
              Apps Users Love. Built to Scale.
            </h2>
            <p className="font-body text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
              Native iOS, Android, and cross-platform apps with clean UI, solid backends, and features that actually matter.
            </p>
          </div>
        </Reveal>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left Column — Features included */}
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-6">
              Possible features in your app:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 font-body text-sm text-white/70">
                  <span className="text-ather-cyan font-bold">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Play Store highlight card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-panel p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-ather-cyan/40 hover:-translate-y-1"
          >
            {/* Corner Markers */}
            <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-ather-cyan/40" />
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-ather-cyan/40" />

            <div>
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-heading font-bold text-2xl text-ather-cyan mb-3">
                Play Store Deployment Included
              </h3>
              <p className="font-body text-sm text-white/60">
                We handle the entire Play Store setup and deployment process for you — from build signing to store listing.
              </p>
            </div>
            <p className="font-body text-sm text-white/40 mt-4">
              Third-party recurring fees (Google Play, Apple Developer) will be disclosed before development.
            </p>
          </motion.div>
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-12">
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-block text-center bg-ather-cyan text-black font-mono text-xs uppercase tracking-widest rounded-full px-8 py-4 hover:bg-white transition-colors duration-300"
          >
            Build Your App →
          </Link>
        </div>
      </div>
    </section>
  );
}

