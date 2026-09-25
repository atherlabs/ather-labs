'use client';

import { motion } from 'framer-motion';

const gifs = [
  { id: 1, src: '/assets/gif1.gif', label: 'AI & Neural Nets' },
  { id: 2, src: '/assets/gif2.gif', label: 'Cyber Systems' },
  { id: 3, src: '/assets/gif3.gif', label: 'Quantum Tech' },
  { id: 4, src: '/assets/gif4.gif', label: '3D Realtime' },
  { id: 5, src: '/assets/gif5.gif', label: 'Web3 & Node' },
  { id: 6, src: '/assets/gif6.gif', label: 'Cloud Compute' },
];

const GifStrip = () => {
  // Duplicate array multiple times for a seamless infinite loop
  const marqueeItems = [...gifs, ...gifs, ...gifs, ...gifs];

  return (
    <section className="relative w-full py-8 bg-ather-black/80 border-y border-white/5 overflow-hidden z-20">
      {/* Dark gradient mask on left and right edges using before: and after: pseudo overlay */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-32 before:z-10 before:bg-gradient-to-r before:from-ather-black before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-32 after:z-10 after:bg-gradient-to-l after:from-ather-black after:to-transparent">
        <motion.div
          className="flex items-center gap-6 w-max"
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {marqueeItems.map((gif, index) => (
            <div
              key={`${gif.id}-${index}`}
              className="h-24 w-40 rounded-xl glass-panel flex-shrink-0 flex items-center justify-center relative overflow-hidden group border border-white/10 hover:border-ather-cyan/40 transition-all duration-300"
            >
              {/* Optional image overlay slot if images are added later */}
              <img
                src={gif.src}
                alt={gif.label}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="relative z-10 font-mono text-xs uppercase tracking-widest text-white/70 text-center px-3">
                {gif.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GifStrip;
