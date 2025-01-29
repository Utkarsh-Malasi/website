import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable serving on all network interfaces
    port: 3000, // Port number to run the dev server
    allowedHosts: ['a6af-103-205-245-189.ngrok-free.app'] // Add your ngrok URL here
  }
});
