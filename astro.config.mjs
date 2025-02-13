import 'dotenv/config';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import node from '@astrojs/node';

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

  integrations: [tailwind(), icon()],

  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
});
