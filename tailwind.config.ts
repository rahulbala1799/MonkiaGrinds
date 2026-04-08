import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Rich indigo-violet primary
        primary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c7c4ff',
          300: '#a5a0ff',
          400: '#8678ff',
          500: '#6C4BF5',
          600: '#5835E8',
          700: '#4A25C4',
          800: '#3D1FA0',
          900: '#331C7A',
        },
        navy: {
          700: '#1e1b4b',
          800: '#1a1a2e',
          900: '#0c0a1d',
        },
        gold: {
          300: '#FFE066',
          400: '#FFD700',
          500: '#F5B800',
        },
        accent: '#FFB800',
        // Programme-specific colours
        jc: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        lc: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        ps: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        ib: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '20px 20px',
        'dot-md': '30px 30px',
        'dot-lg': '40px 40px',
        'grid-sm': '24px 24px',
      },
    },
  },
  plugins: [],
}
export default config
