import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';
import { config } from 'dotenv';

config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env': process.env
  },
  server: {
    watch: {
     usePolling: true,
    },
    host: true,
    strictPort: true,
    port: parseInt(process.env.FRONTEND_PORT || '5173'),
  },
})
