'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const websiteServices = [
    { title: 'Landing Page', price: '₹3,000 – ₹7,000' },
    { title: 'Professional Landing Page', price: '₹5,000 – ₹10,000' },
    { title: 'Basic Business Website', price: '₹5,000 – ₹10,000' },
    { title: 'Medium Professional Website', price: '₹10,000 – ₹25,000' },
    { title: 'Premium 3D / Parallax Website', price: '₹20,000 – ₹40,000' },
    { title: 'High-End Custom Website', price: 'Custom Quote' },
    { title: 'E-commerce / Custom Web Platform', price: 'Custom Quote' },
  ];

  const appServices = [
    { title: 'Basic Utility App', price: '₹10,000 – ₹20,000' },
    { title: 'Basic Business App', price: '₹15,000 – ₹30,000' },
    { title: 'Medium Functional App', price: '₹30,000 – ₹60,000' },
    { title: 'Advanced App', price: '₹60,000 – ₹1,00,000+' },
    { title: 'Complex / Custom App', price: '₹1,00,000+' },
  ];

  const aiServices = [
    { title: 'Basic AI Integration', price: '₹10,000 – ₹20,000' },
    { title: 'AI Content / Task Automation', price: '₹15,000 – ₹30,000' },
    { title: 'AI Chatbot', price: '₹20,000 – ₹50,000+' },
    { title: 'AI Business Assistant', price: '₹30,000 – ₹75,000+' },
    { title: 'Custom AI Automation', price: '₹40,000 – ₹1,00,000+' },
    { title: 'Advanced AI Agent / Custom System', price: '₹1,00,000+' },
  ];

  return (
    <main className="relative min-h-screen bg-ather-black text-white">
      <Navbar />

      <section className="relative py-20 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-ather-cyan mb-4">
            ● PRICING
          </div>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight mb-4">
            Transparent Pricing. No Surprises.
          </h1>
          <p className="font-body text-white/60 max-w-2xl mx-auto">
            Every project is unique — these are starting ranges, final quotes are tailored to scope.
          </p>
          <div className="font-mono text-xs text-ather-cyan border border-ather-cyan/30 rounded-full px-4 py-1 mt-6 inline-block">
            ● Prices are negotiable · Custom quotes available
          </div>
        </div>

        <div className="mt-16">
          {/* Card 1: Website Development */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 mb-8"
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-1">
              🌐 Website Development
            </h2>
            <p className="font-body text-sm text-white/50 mb-6">
              From landing pages to full-stack platforms
            </p>
            <div>
              {websiteServices.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10 last:border-0 gap-1 sm:gap-0"
                >
                  <span className="font-body text-white/80">{row.title}</span>
                  <span className="font-mono text-ather-cyan font-medium">{row.price}</span>
                </div>
              ))}
            </div>
            <div className="font-mono text-xs text-white/40 mt-4 leading-relaxed">
              Responsive design · Custom UI/UX · SEO-ready · WhatsApp integration · Analytics · 1 year FREE domain + hosting on eligible packages.
            </div>
          </motion.div>

          {/* Card 2: App Development */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 mb-8"
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-1">
              📱 App Development
            </h2>
            <p className="font-body text-sm text-white/50 mb-6">
              Android, iOS, and cross-platform apps
            </p>
            <div>
              {appServices.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10 last:border-0 gap-1 sm:gap-0"
                >
                  <span className="font-body text-white/80">{row.title}</span>
                  <span className="font-mono text-ather-cyan font-medium">{row.price}</span>
                </div>
              ))}
            </div>
            <div className="font-mono text-xs text-white/40 mt-4 leading-relaxed">
              User login · Database · Push notifications · Admin panel · Payments · APIs · Play Store deployment assistance.
            </div>
          </motion.div>

          {/* Card 3: AI Development */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 mb-8"
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-1">
              🤖 AI Development
            </h2>
            <p className="font-body text-sm text-white/50 mb-6">
              AI integrations, chatbots, and custom AI systems
            </p>
            <div>
              {aiServices.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10 last:border-0 gap-1 sm:gap-0"
                >
                  <span className="font-body text-white/80">{row.title}</span>
                  <span className="font-mono text-ather-cyan font-medium">{row.price}</span>
                </div>
              ))}
            </div>
            <div className="font-mono text-xs text-white/40 mt-4 leading-relaxed">
              AI chatbot · Automation · Content generation · Customer support · Lead qualification · API integrations.
            </div>
          </motion.div>

          {/* Three note boxes */}
          <div className="glass-panel p-4 rounded-xl mb-3 font-mono text-xs text-white/50">
            Play Store deployment and required setup assistance included. Third-party recurring fees, if applicable, will be disclosed before development.
          </div>
          <div className="glass-panel p-4 rounded-xl mb-3 font-mono text-xs text-white/50">
            AI API / model usage charges are billed as per actual provider usage unless included in the project quotation.
          </div>
          <div className="glass-panel p-4 rounded-xl mb-3 font-mono text-xs text-white/50">
            Custom UI/UX · Premium plugins · Paid APIs · Specialized infrastructure may be quoted separately if required.
          </div>

          {/* Final CTA section */}
          <div className="text-center mt-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Have a project in mind?
            </h2>
            <p className="font-body text-white/60 mb-8">
              Let&apos;s discuss your idea and get a custom quote.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-ather-cyan text-black font-mono text-xs uppercase tracking-widest rounded-full px-8 py-4 hover:bg-white transition-colors duration-300"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
