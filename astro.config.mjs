import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://incamdi.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
