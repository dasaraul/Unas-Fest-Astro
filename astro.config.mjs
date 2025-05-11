import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react(), // Untuk komponen React yang tetap perlu interaktif
  ],
  site: 'https://unasfest.com',
});