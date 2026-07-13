import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env.VITE_PAGES_BASE || "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "index.static.html",
      },
    },
  },
});
