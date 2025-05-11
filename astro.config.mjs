import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Gunakan configurasi Tailwind yang sudah ada
      config: { path: './tailwind.config.mjs' },
    }),
    react(), // Untuk komponen React yang dibutuhkan
  ],
  // Tambahkan output: 'server' jika ingin SSR
  // output: 'server',
});