import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        showcase: fileURLToPath(new URL("./index.html", import.meta.url)),
        research: fileURLToPath(new URL("./research/index.html", import.meta.url)),
      },
    },
  },
});
