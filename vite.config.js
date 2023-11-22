import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true, port: 3000 },
  plugins: [react(), mkcert()],
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "../lib"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@component": path.resolve(__dirname, "./src/component"),
      // "@gh": path.resolve(__dirname, "./src/component/gh"),
      // "@img": path.resolve(__dirname, "./src/assets/img"),
      // "@pages": path.resolve(__dirname, "./src/pages"),
      // "@context": path.resolve(__dirname, "./src/component/context"),
    },
  },
});
