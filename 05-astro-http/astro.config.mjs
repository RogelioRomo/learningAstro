// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import db from '@astrojs/db';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), db()],
  output: 'hybrid',

  adapter: node({
    mode: 'standalone',
  }),
});
