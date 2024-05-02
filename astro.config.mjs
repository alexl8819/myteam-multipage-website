import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [react()],
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCaseOnly'
      }
    }
  },
  base: isProd ? 'myteam-multipage-website' : '/'
});
