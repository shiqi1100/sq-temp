import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
// import postCssPxToRem from 'postcss-pxtorem'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/sq-temp',
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      dts: true
    }),
    Components({
      extensions: ['vue'],
      dirs: ['src/components/'],
      dts: true
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
        })
        // postCssPxToRem({
        //   // 自适应，px>rem转换
        //   rootValue: 37.5, // 75表示750设计稿，37.5表示375设计稿
        //   propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        //   selectorBlackList: ['.van'], // 过滤掉不进行rem转换
        //   exclude: '/node_modules' // 忽略包文件转换rem
        // })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
// https://github.com/cuth/postcss-pxtorem
