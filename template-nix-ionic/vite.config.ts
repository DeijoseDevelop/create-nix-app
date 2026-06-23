import { defineConfig } from "vite";
import nix from "@deijose/vite-plugin-nix-js";

export default defineConfig({
  plugins: [nix()],
  build: {
    rollupOptions: {
      output: { manualChunks: undefined },
    },
  },
});