/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      slab: 'Roboto Slab Variable, monospace, serif',
      sans: 'Inter Variable, sans-serif',
    },
    extend: {
      colors: {
        cream: '#FFDFBD',
        wood: '#460B0B',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('tailwindcss-intersect'),
    require('tailwindcss-motion'),
  ],
  daisyui: {
    themes: [
      {
        lightCustom: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#4EA699',
          'primary-content': '#3A7869',
          secondary: '#CEA2AC',
          accent: '#2DD881',
          neutral: '#333333',
          'neutral-content': '#8E8E8E',
          'base-100': '#ffffff',
        },
        darkCustom: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#B15966',
          'primary-content': '#D09AA2',
          secondary: '#315D53',
          accent: '#D22E7E',
          neutral: '#CCCCCC',
          'neutral-content': '#8A8A8A',
          'base-100': '#000000',
          'base-content': '#C8CBD0',
        },
      },
    ],
  },
};
