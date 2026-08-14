import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://REPLACE_WITH_YOUR_DOMAIN.example',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  build: { sourcemap: false },
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
