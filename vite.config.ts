import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    open: true,
    port: 3000,
  },
  define: {
    'import.meta.env.VITE_GA_MEASUREMENT_ID': JSON.stringify('G-PBBSSNTG9M'),
    // 'import.meta.env.VITE_GA_STREAM_ID': JSON.stringify(''),
    'import.meta.env.VITE_GTM_ID': JSON.stringify('GTM-NTWJC77J'),
  },
});
