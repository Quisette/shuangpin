/// <reference types="vitest" />

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { VitePWA } from 'vite-plugin-pwa'
import * as path from "path";

export default defineConfig({
  plugins: [
    Vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html',
        suppressWarnings: true
      },
      manifest: {
        name: '紙硯雙拼',
        theme_color: '#070809',
        background_color: '#070809',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: '/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /someInterface/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'interface-cache'
            }
          },
          {
            urlPattern: /(.*?)\.(js|css|ts)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'js-css-cache'
            }
          },
          {
            urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache'
            }
          }
        ]
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
});
