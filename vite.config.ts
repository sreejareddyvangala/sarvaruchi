import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // the port the site is developed and reviewed on; without this, plain
    // `npm run dev` falls back to Vite's default 5173
    port: 5180,
    strictPort: true,
  },
  build: {
    // photographs are served as-is from /public
    assetsInlineLimit: 2048,
  },
});
