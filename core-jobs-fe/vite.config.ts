import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import autoExternal from 'rollup-plugin-auto-external'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
// TLA Review
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
    // visualizer({ open: false }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/core-jobs/index.ts'),
        mock: resolve(__dirname, 'src/core-jobs/mock.ts'),
      },
      formats: ['es'],
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
        'lodash'
      ],
      // // plugins: [autoExternal()],

      // external: ["dayjs", "react-copy-to-clipboard", "@mui/icons-material", "@mui/material", "react", "react/jsx-runtime", "react-admin", "react-dom", "react-hook-form", "@faker-js/faker", "react-google-charts"],
      // external: [/node_modules/],

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

// {
//   // path to your declaration files root
//   input: './dist/dts/index.d.ts',
//   output: [{ file: 'dist/index.d.ts', format: 'es' }],
//   plugins: [dts()],
// },
