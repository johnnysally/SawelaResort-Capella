import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Enable Brotli and gzip compression in production
    mode === "production" && viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      compressionOptions: { level: 11 },
      deleteOriginFile: false,
    }),
    mode === "production" && viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      compressionOptions: { level: 9 },
      deleteOriginFile: false,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
