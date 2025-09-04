import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://lyonsiv.mov",
  integrations: [tailwind(), react()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  // VERCEL
  // The error is caused by the line below.
  // 'server' mode is for on-demand rendering and requires an adapter.
  // To build a static site, you need to change this.
  // CHANGE THIS LINE:
  // output: "server",
  // TO THIS LINE:
  output: "static",
});