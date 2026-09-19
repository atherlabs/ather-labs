'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Reveal from '@/components/shared/Reveal';

const pricingCards = [
  {
    icon: '🌐',
    title: 'Website Development',
    hook: 'Your competitors charge lakhs. We build stunning websites starting at just',
    price: '₹3,000',
    smallText: 'Starting price',
    bottomText: 'Landing pages, business sites, and full-stack web platforms.',
  },
  {
    icon: '📱',
    title: 'App Development',
    hook: 'iOS + Android apps without the agency price tag — starting from',
    price: '₹10,000',
    smallText: 'Starting price',
    bottomText: 'Android, iOS, and cross-platform mobile applications.',
  },
  {
    icon: '🤖',
    title: 'AI Development',
    hook: 'Automate your business with AI — starting from',
    price: '₹10,000',
    smallText: 'Starting price',
    bottomText: 'AI chatbots, automation, and custom AI-powered systems.',
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing-preview" className="relative py-20 md:py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-ather-cyan mb-4">
              ● PRICING
            </p>
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-4">
              Premium Quality. Honest Pricing.
            </h2>
            <p className="font-body text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
              World-class websites, apps, and AI systems — starting at prices that make sense.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {pricingCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative glass-panel rounded-2xl p-8 transition-all duration-300 hover:border-ather-cyan/40 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Corner Markers */}
              <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-ather-cyan/40" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-ather-cyan/40" />

              <div>
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3 text-white">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-white/50 italic mb-3">
                  {card.hook}
                </p>
                <div className="font-heading font-extrabold text-4xl text-ather-cyan mb-1">
                  {card.price}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                  {card.smallText}
                </div>
              </div>
              <p className="font-body text-sm text-white/50 mt-4">
                {card.bottomText}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="font-mono text-xs text-ather-cyan/70 mb-6">
            ● All prices are negotiable · Custom quotes available
          </p>
          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-block text-center bg-transparent text-white border border-white/40 font-mono text-xs uppercase tracking-widest rounded-full px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300"
          >
            See Full Pricing →
          </Link>
        </div>
      </div>
    </section>
  );
}

