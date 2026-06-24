// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` once the domain is registered (e.g. https://mantraacademy.com)
export default defineConfig({
  site: 'https://mantraacademy.example',
  integrations: [sitemap()],
});
