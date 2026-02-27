// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: 'https://crazykidboi.github.io',
  base: '/portfolio',
  output: 'static',
 vite: {
   plugins: [tailwindcss()],
   server: {
     allowedHosts: ['lyonsiv.mov'] // Add this line to allow the specific host
   }
 },
 devToolbar: {
  enabled: false,
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
 
});