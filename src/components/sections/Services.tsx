'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from '@/components/shared/Reveal';

const services = [
  {
    number: '01',
    icon: '🤖',
    title: 'AI Applications',
    description:
      'Custom LLM integrations, intelligent agents, and machine learning solutions tailored to automate complex workflows and drive innovation.',
    bullets: [
      'LLM integrations',
      'AI agents & workflows',
      'Custom RAG systems',
      'Model fine-tuning',
    ],
    image: '/services/service-1.jpg',
  },
  {
    number: '02',
    icon: '🌐',
    title: 'Web Development',
    description:
      'High-performance, ultra-fast web applications built with Next.js, React, and modern full-stack architectures engineered for scale.',
    bullets: [
      'Next.js & React',
      'Full-stack apps',
      'API development',
      'Performance-optimized',
    ],
    image: '/services/service-2.jpg',
  },
  {
    number: '03',
    icon: '📱',
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile experiences designed for speed, fluid touch interaction, and reliable offline capability.',
    bullets: [
      'iOS & Android',
      'React Native',
      'Offline-first',
      'Push notifications',
    ],
    image: '/services/service-3.jpg',
  },
  {
    number: '04',
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centric interface design systems, interactive prototypes, and futuristic visual identities that captivate and convert.',
    bullets: [
      'Design systems',
      'Interactive prototypes',
      'Brand identity',
      'Motion design',
    ],
    image: '/services/service-4.jpg',
  },
  {
    number: '05',
    icon: '🚀',
    title: '3D Experiences',
    description:
      'Immersive WebGL and Three.js interactive 3D graphics, dynamic digital assets, and real-time canvas animations.',
    bullets: [
      'WebGL & Three.js',
      'Interactive 3D scenes',
      'Product visualizations',
      'Real-time canvas',
    ],
    image: '/services/service-5.jpg',
  },
  {
    number: '06',
    icon: '⚡',
    title: 'Automation & APIs',
    description:
      'Robust backend infrastructure, microservices, GraphQL/REST APIs, and automated event pipelines for seamless data flow.',
    bullets: [
      'Backend infrastructure',
      'Microservices',
      'REST & GraphQL',
      'Event pipelines',
    ],
    image: '/services/service-6.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 px-6 md:px-16">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-ather-cyan mb-4">
              ● SERVICES
            </p>
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-4">
              Services Built for the Future
            </h2>
            <p className="font-body text-white/60 max-w-2xl mx-auto text-sm sm:text-base mb-12 md:mb-16">
              From AI-powered applications to pixel-perfect websites — we ship products that scale.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer border border-white/10 transition-all duration-300 hover:border-ather-cyan/40 hover:-translate-y-1 glass-panel"
            >
              {/* Corner Markers */}
              <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-ather-cyan/40 z-20" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-ather-cyan/40 z-20" />

              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl select-none">{service.icon}</span>
                  <span className="font-mono text-xs text-ather-cyan">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Bullet List */}
                <ul className="font-body text-sm text-white/50 space-y-1 mt-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="text-ather-cyan/70">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="font-mono text-xs uppercase tracking-widest text-ather-cyan mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



