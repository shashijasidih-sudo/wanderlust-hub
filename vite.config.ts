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
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        // Split heavy vendor libraries into their own chunks so the initial
        // JS payload is small (key for mobile LCP/FCP).
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("react-dom")) return "react-dom";
          if (id.includes("/react/") || id.includes("react-router")) return "react";
          if (id.includes("@radix-ui")) return "radix";
          if (id.includes("@tanstack")) return "tanstack";
          if (id.includes("recharts") || id.includes("d3-")) return "charts";
          if (id.includes("embla-carousel")) return "carousel";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("date-fns")) return "date";
          if (id.includes("@supabase")) return "supabase";
          if (id.includes("react-hook-form") || id.includes("zod")) return "forms";
          return "vendor";
        },
      },
    },
  },
}));

