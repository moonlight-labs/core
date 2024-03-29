import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import autoExternal from 'rollup-plugin-auto-external'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      rollupConfig: {
        docModel: {
          enabled: true,
          apiJsonFilePath: '../docs/meta/<unscopedPackageName>.api.json',
        },
      },
    }),
    react(),
    visualizer({ open: false }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/core-comments/index.ts'),
        mock: resolve(__dirname, 'src/core-comments/mock/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      plugins: [autoExternal()],
      external: ['react/jsx-runtime', /@mui/, '@faker-js/faker'],
    },
  },
})
