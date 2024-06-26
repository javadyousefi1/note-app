import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa';
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
    //  outDir: './build'
    },
    plugins: [
      react(),
      // basicSsl(),
      VitePWA({ 
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        manifest: {
          name: 'Vite PWA Project',
          short_name: 'Vite PWA Project',
          theme_color: '#ffffff',
          icons: [
              {
                  src: 'pwa-64x64.png',
                  sizes: '64x64',
                  type: 'image/png'
              },
              {
                  src: 'pwa-192x192.png',
                  sizes: '192x192',
                  type: 'image/png'
              },
              {
                  src: 'pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any'
              },
              {
                  src: 'maskable-icon-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'maskable'
              }
          ],
        }, 
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
        "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
      }
    },
    test: {
      environment: 'jsdom',
      include: ['**/*.test.tsx'],
      globals: true,
    },
  };
});
