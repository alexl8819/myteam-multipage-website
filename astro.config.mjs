import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

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
  trailingSlashes: 'always'
});
