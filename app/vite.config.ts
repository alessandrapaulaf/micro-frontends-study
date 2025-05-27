import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { withZephyr } from "vite-plugin-zephyr";
import { federation } from "@module-federation/vite";

const mfConfig = {
  name: "app",
  remotes: {
    auth: {
      entry: "http://localhost:5173/remoteEntry.js",
      name: "auth",
      type: "module",
    },
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
};

export default defineConfig({
  plugins: [react(), federation({ ...mfConfig }), withZephyr()],
  server: {
    port: 5174,
  },
  build: {
    minify: false,
    target: "chrome89",
  },
});
