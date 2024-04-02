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
        tablet: { max: '1199px' },
        mobile: { max: '767px' },
      },
    },
  },
  plugins: [],
};
export default config;
