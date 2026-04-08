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
        primary: {
          50: '#eff2ff',
          100: '#dde3ff',
          200: '#c2ccff',
          300: '#97a4ff',
          400: '#6b73ff',
          500: '#5B6CFF',
          600: '#3b3df5',
          700: '#2f2dd8',
          800: '#2727ae',
          900: '#262789',
        },
        navy: {
          800: '#1a1a2e',
          900: '#0f0f1a',
        },
        gold: '#FFD700',
        accent: '#FFB800',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
