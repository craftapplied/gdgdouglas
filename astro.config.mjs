import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
  site: 'https://gdgdouglas.com',
  integrations: [sitemap(), tailwind(), solidJs(), mdx(), favicons()],
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});
