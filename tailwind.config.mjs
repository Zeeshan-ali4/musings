/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {     
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        pixel: ['"VT323"', 'ui-monospace', 'monospace'],
        display: ['"Press Start 2P"', '"VT323"', 'ui-monospace', 'monospace']
      },
      colors: {
        ink: '#e6edf3', slate: '#9ba8b5', panel: '#111922', line: '#263342', signal: '#5eead4',
        node: {
          identity: '#5b8cff', network: '#4ee08a', cloud: '#b98bff',
          web: '#38d9e8', malware: '#ff6b7a', detection: '#ffc94d'
        }
      }
    }
  },
  plugins: []
};