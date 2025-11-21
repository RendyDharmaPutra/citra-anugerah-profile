// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://citra-anugerah.vercel.app",
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), react()],
});
