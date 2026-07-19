import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// GITHUB_PAGES=true → base path for https://eslamemam1.github.io/eslam-emam-showcase/
export default defineConfig(({ mode }) => ({
  base: process.env.GITHUB_PAGES === "true" ? "/eslam-emam-showcase/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
