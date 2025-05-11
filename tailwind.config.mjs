/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'page-black': '#1F1E23',
          'page-white': '#FFFAF0',
          'page-blue': '#004AAD',
          'page-green': '#2A9763',
          'page-yellow': '#F3BB1C',
          'page-purple': '#853EB6',
          'page-red': '#C02424',
          'page-orange': '#E27817',
          'active-blue': '#004AAD',
        },
        fontFamily: {
          bungee: ['var(--font-bungee)'],
          inter: ['var(--font-inter)'],
        },
        backgroundImage: {
          'water-pool': "url('/assets/images/bg-water-pool.png')",
        },
      },
    },
    plugins: [],
  };