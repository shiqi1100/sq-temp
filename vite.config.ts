import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_HOST } = loadEnv(mode, process.cwd(), '')
  return {
    base: '/sq-temp',
    plugins: [
      vue(),
      vueJsx(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ],
        dts: true
      }),
      Components({
        extensions: ['vue'],
        dirs: ['src/components/'],
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            // <i-ep-plus />
            enabledCollections: ['ep']
          }),
          ElementPlusResolver()
        ],
        dts: true
      }),
      Icons({
        autoInstall: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      open: true,
      port: 9527,
      proxy: {
        '/bdsaas': {
          target: VITE_HOST,
          changeOrigin: true
        }
      }
    }
  }
})
// https://github.com/cuth/postcss-pxtorem
