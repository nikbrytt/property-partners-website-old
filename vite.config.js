
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
import {defineConfig} from "vite";

export default defineConfig({
  plugins: [react(),
    VitePWA({
      manifest: './manifest.json',
      workbox: {
        runtimeCaching: [

        ],
      },
    }),
  ],
})