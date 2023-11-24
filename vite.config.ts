import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "url";
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [vue(), libInjectCss(), dts({ rollupTypes: true })],
  resolve: {
    alias: [
      { find: '@scss', replacement: fileURLToPath(new URL('./src/scss', import.meta.url ))},
    ]
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "kkore",
      fileName: "kkore"
    },
    rollupOptions: {
      input: {
        main: process.env.NODE_ENV === 'production' ? 'src/index.ts' : 'dev-index.ts'
      },
      external: ["vue", "sweetalert2", "sass"],
      output: {
        globals: {
          vue: "Vue",
        }
      }
    }
  }
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     dts({ include: ["src/"], outDir: "dist/" }),
//   ],
//   resolve: {
//     alias: [
//       { find: '@scss', replacement: fileURLToPath(new URL('./src/scss', import.meta.url ))},
//     ]
//   },
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'src/index.ts'),
//       formats: ['es']
//     },
//     rollupOptions: {
//       external: ['vue', 'sweetalert2', 'sass'],
//       input: resolve(__dirname, 'src/index.ts'),
//       output: {
//         assetFileNames: 'assets/[name][extname]',
//         entryFileNames: '[name].js'
//       }
//     },
//   }
// })
