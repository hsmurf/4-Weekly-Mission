import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6d6afe',
        red: '#FF5B56',
      },
      screens: {
        mobile: { max: '767px' },
        tablat: { max: '1199px' },
      },
    },
  },
  plugins: [],
};
export default config;
