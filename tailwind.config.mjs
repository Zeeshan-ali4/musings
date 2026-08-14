/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['ui-sans-serif', 'system-ui', 'sans-serif'], mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'] },
      colors: { ink: '#e6edf3', slate: '#9ba8b5', panel: '#111922', line: '#263342', signal: '#5eead4' }
    }
  },
  plugins: []
};
