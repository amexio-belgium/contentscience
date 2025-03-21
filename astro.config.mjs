import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
const { PUBLIC_ASTRO_BASE_PATH, ASTRO_SITE_URL } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);
const basePath =
  PUBLIC_ASTRO_BASE_PATH && PUBLIC_ASTRO_BASE_PATH !== ""
    ? PUBLIC_ASTRO_BASE_PATH
    : "/";
export default defineConfig({
  site: ASTRO_SITE_URL,
  outDir: `./dist${PUBLIC_ASTRO_BASE_PATH}`,
  output: "static",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      nesting: true,
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    prefixDefaultLocale: false,
  },
  base: basePath,
  vite: {
    build: {
      outDir: `./dist${PUBLIC_ASTRO_BASE_PATH}`,
      emptyOutDir: true, // also necessary
    },
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
});
