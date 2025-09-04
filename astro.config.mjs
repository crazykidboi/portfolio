import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://lyonsiv.mov',
  base: '/',
  output: 'server',       // server output
  adapter: node({ mode: 'standalone' }), // Node server
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  }
});
