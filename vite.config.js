import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: './manifest.json',
      workbox: {
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Example: 10MB
        // Other workbox options...
      },
    }),
  ],
})
