import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'reports-mf',
      manifest: true,
      filename: 'remoteEntry.js',
      exposes: {
        './reports': './src/components/Dashboard.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    }),
  ],
})
