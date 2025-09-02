// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel";

import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://crazykidboi.github.io',
  base: '/portfolio',
  
  webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,

   output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },

  adapter: vercelServerless(),
});