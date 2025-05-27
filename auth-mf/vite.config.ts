import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { withZephyr } from "vite-plugin-zephyr";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthForm": "./src/components/Form.tsx",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
    withZephyr(),
  ],
  server: {
    port: 5173,
  },
  build: {
    minify: false,
    target: "chrome89",
    modulePreload: {
        resolveDependencies: (_, deps: string[]) => {
          // Only preload React packages and non-federated modules
          return deps.filter((dep) => {
            const isReactPackage = dep.includes('react') || dep.includes('react-dom');
            const isNotRemoteEntry = !dep.includes('remoteEntry.js');

            return isReactPackage && isNotRemoteEntry;
          });
        },
      },
  },
});
