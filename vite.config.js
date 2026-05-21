import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/MyPortfolio/',
  server: {
    open: true,
    port: 5010,
  },
  build: {
    outDir: 'dist'
  },
});
