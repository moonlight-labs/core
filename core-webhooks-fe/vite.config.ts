import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import autoExternal from 'rollup-plugin-auto-external'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      rollupConfig: {
        docModel: {
          enabled: true,
          apiJsonFilePath: '../docs/meta/<unscopedPackageName>.api.json'
        }
      }
    }),
    react(),
    visualizer({ open: false }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/core-webhooks/index.ts'),
        mock: resolve(__dirname, 'src/core-webhooks/mock.ts'),
      },
      formats: ['es'], // UMD
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      plugins: [autoExternal()],
      external: [
        /@mui/,
        'react/jsx-runtime',
        '@faker-js/faker',
        'react-copy-to-clipboard',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          // "react-copy-to-clipboard": "react-copy-to-clipboard",
          //  vue: 'Vue'
        },
      },
    },
  },
})
