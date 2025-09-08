// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: 'server',
 vite: {
   plugins: [tailwindcss()],
   server: {
     allowedHosts: ['lyonsiv.mov'] // Add this line to allow the specific host
   }
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
 adapter: vercel()
});