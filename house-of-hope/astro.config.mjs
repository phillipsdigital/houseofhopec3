// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://houseofhopec3.org',
  trailingSlash: 'ignore',
  // The Contact page was merged into Get Involved; keep old links working.
  redirects: {
    '/contact': '/get-involved/#contact',
  },
});
