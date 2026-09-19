'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Nova SaaS Dashboard', category: 'Web App', year: '2026', image: '/projects/project-1.jpg', tech: 'Next.js · TypeScript · Tailwind' },
  { id: 2, title: 'Fintech Mobile App', category: 'Mobile', year: '2026', image: '/projects/project-2.jpg', tech: 'React Native · Node.js' },
  { id: 3, title: 'AI Business Assistant', category: 'AI', year: '2026', image: '/projects/project-3.jpg', tech: 'GPT-4 · LangChain · RAG' },
  { id: 4, title: 'Commerce Platform', category: 'E-commerce', year: '2025', image: '/projects/project-4.jpg', tech: 'Next.js · Stripe · PostgreSQL' },
  { id: 5, title: '3D Product Showcase', category: '3D Web', year: '2025', image: '/projects/project-5.jpg', tech: 'React Three Fiber · GSAP' },
  { id: 6, title: 'Portfolio Platform', category: 'Web', year: '2025', image: '/projects/project-6.jpg', tech: 'Next.js · Framer Motion' },
];

export default function Work() {
  return (
    <section id="work" className="relative py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-ather-cyan mb-4">
          ● SELECTED WORK
        </p>
        <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight mb-4 text-white">
          Projects We&apos;re Proud Of
        </h2>
        <p className="font-body text-white/60 max-w-2xl mx-auto">
          From AI apps to full-stack platforms — here are some of our recent builds.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group relative glass-panel rounded-2xl overflow-hidden cursor-pointer hover:border-ather-cyan/40 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image container */}
            <div className="relative h-[340px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Top-right corner tag */}
              <div className="absolute top-4 right-4 font-mono text-xs uppercase tracking-widest text-ather-cyan border border-ather-cyan/40 rounded-full px-3 py-1 bg-black/40 backdrop-blur-sm">
                {project.category}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-xs text-white/40 mb-2">
                  · {project.year}
                </p>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-white/50">
                  {project.tech}
                </p>
                <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-mono text-xs uppercase tracking-widest text-ather-cyan mt-3">
                  View Project →
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <Link
          href="/#contact"
          className="w-full sm:w-auto inline-block text-center bg-ather-cyan text-black font-mono text-xs uppercase tracking-widest rounded-full px-8 py-4 hover:bg-white transition-colors"
        >
          Start Your Project →
        </Link>
      </div>
    </section>
  );
}



