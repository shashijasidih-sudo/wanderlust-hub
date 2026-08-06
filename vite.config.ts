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
        // Split long-lived vendor code and the very large static data modules
        // into their own chunks so the entry bundle stays small and cacheable.
        manualChunks(id) {
          if (id.includes("/src/data/tourData")) return "data-tours";
          if (id.includes("/src/data/transferData")) return "data-transfers";
          if (id.includes("/src/data/cityActivitiesData")) return "data-city-activities";
          if (!id.includes("node_modules")) return undefined;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/.test(id))
            return "vendor-react";
          if (id.includes("@supabase")) return "vendor-supabase";
          if (id.includes("recharts") || id.includes("d3-")) return "vendor-charts";
          if (id.includes("@radix-ui")) return "vendor-radix";
          if (id.includes("@tanstack")) return "vendor-query";
          if (id.includes("date-fns")) return "vendor-datefns";
          return undefined;
        },
      },
    },
  },
}));

