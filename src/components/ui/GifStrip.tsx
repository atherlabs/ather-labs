'use client';

import { motion } from 'framer-motion';

const gifs = [
  { id: 1, src: '/assets/gif1.gif', alt: 'Tech GIF 1', label: 'AI & Neural Nets' },
  { id: 2, src: '/assets/gif2.gif', alt: 'Tech GIF 2', label: 'Cyber Systems' },
  { id: 3, src: '/assets/gif3.gif', alt: 'Tech GIF 3', label: 'Quantum Tech' },
  { id: 4, src: '/assets/gif4.gif', alt: 'Tech GIF 4', label: '3D Realtime' },
  { id: 5, src: '/assets/gif5.gif', alt: 'Tech GIF 5', label: 'Web3 & Node' },
  { id: 6, src: '/assets/gif6.gif', alt: 'Tech GIF 6', label: 'Cloud Compute' },
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
              className="h-24 w-40 rounded-xl overflow-hidden glass-panel flex-shrink-0 relative group flex items-center justify-center border border-white/10 hover:border-ather-cyan/40 transition-all duration-300"
            >
              <img
                src={gif.src}
                alt={gif.alt}
                className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                onError={(e) => {
                  // Fallback when placeholder image file isn't uploaded yet
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-ather-dark/60 backdrop-blur-xs group-hover:bg-ather-dark/30 transition-all">
                <span className="text-[10px] font-mono text-ather-cyan tracking-wider uppercase mb-1">
                  GIF {gif.id}
                </span>
                <span className="text-xs font-heading font-medium text-white/90 line-clamp-1">
                  {gif.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GifStrip;
