import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// REMOVED the import for the missing "remark-reading-time.mjs" file.

// https://astro.build/config
export default defineConfig({
  site: "https://lyonsiv.mov",
  integrations: [tailwind(), react()],
  // REMOVED the markdown section that was trying to use the missing plugin.
  output: "static",
});