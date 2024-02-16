import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    // Output directory for your library
    outDir: 'dist',
    // Generates .d.ts declaration files (if using TypeScript)
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'Vue3TouchKeyboard',
      fileName: (format) => `vue3-touch-keyboard.${format}.js`
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: false,
  }
});
