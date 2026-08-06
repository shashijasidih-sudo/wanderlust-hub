import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    manifest: true,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        // Keep the very large static data modules out of the entry bundle so
        // they load only on the routes that need them. Vendor code is left to
        // Rollup's default chunking (manual vendor splits caused cross-chunk
        // initialisation order errors).
        manualChunks(id) {
          if (id.includes("/src/data/tourData")) return "data-tours";
          if (id.includes("/src/data/transferData")) return "data-transfers";
          if (id.includes("/src/data/cityActivitiesData")) return "data-city-activities";
          return undefined;
        },

      },
    },
  },
}));

