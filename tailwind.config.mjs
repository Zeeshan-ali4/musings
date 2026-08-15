/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['ui-sans-serif', 'system-ui', 'sans-serif'], mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'] },
      colors: { ink: '#151514', slate: '#403f3a', panel: '#f8f5ed', line: '#77746d', signal: '#2449b8' }
    }
  },
  plugins: []
};
