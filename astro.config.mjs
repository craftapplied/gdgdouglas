import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://gdgdouglas.com',
  integrations: [sitemap(), tailwind(), solidJs(), mdx()],
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});
