import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lyonsiv.mov',
  base: '/',
  output: 'static',     // MUST be static
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
