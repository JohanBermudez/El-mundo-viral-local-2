// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Changed from 'hybrid' to 'server' for full SSR
  adapter: netlify({
    imageService: true,
    edgeMiddleware: true,
    functionPerRoute: true // Changed to true to handle each route with its own function
  })
});
