import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: 'src/auto-imports.d.ts',
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'tailwind-vue',
            fileName: (format) => `tailwind-vue.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: { globals: { vue: 'vue' } },
        },
    },
})
