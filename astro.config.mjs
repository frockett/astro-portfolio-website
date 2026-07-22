import "dotenv/config";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
  site: "https://crockettford.dev",
  trailingSlash: "never",

  integrations: [icon(), sitemap()],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Rethink Sans",
      cssVariable: "--font-rethink-sans",
    },
    {
      provider: fontProviders.fontsource(),
      name: "DM Mono",
      cssVariable: "--font-dm-mono",
    },
  ],

  output: "static",
  adapter: node({
    mode: "standalone",
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});
