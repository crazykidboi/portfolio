// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// import vercel from "@astrojs/vercel";

export default defineConfig({
  site: 'https://lyonsiv.mov',   // ✅ update to your real domain
  base: '/',                     // ✅ use root, not /portfolio
  output: 'static',              // ✅ important: generates index.html + assets

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
  }
});
