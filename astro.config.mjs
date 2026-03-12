// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: 'https://lyonsiv.mov',
  
  
  output: 'static',
 vite: {
   plugins: [tailwindcss()],
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