import 'dotenv/config';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
  site: 'https://crockettford.dev',
  trailingSlash: 'never',

  integrations: [tailwind(), icon(), sitemap()],

  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
});