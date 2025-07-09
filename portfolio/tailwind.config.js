import { defineConfig } from 'vite';

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyFont', 'sans-serif'],
      },
      boxShadow: {
        'white-md': '0 4px 6px rgba(255,255,255,0.5)',
      },
    },
  },
  plugins: [], // required],
});
