import type { Config } from 'tailwindcss'
// @ts-ignore
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ather-black': '#050507',
        'ather-dark': '#0B0B10',
        'ather-gray': '#1A1A22',
        'ather-cyan': '#00E5FF',
        'ather-purple': '#7C3AED',
        'ather-white': '#F5F5F7',
      },
      fontFamily: {
        heading: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.35)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.75)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [daisyui],
  // @ts-ignore
  daisyui: {
    themes: [
      {
        atherlabs: {
          primary: '#00E5FF',
          secondary: '#7C3AED',
          neutral: '#050507',
          'base-100': '#050507',
        },
      },
    ],
  },
}

export default config
