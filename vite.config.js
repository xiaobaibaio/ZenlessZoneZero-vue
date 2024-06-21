import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
         * '@import "@/assets/scss/globalVariable1.scss";
         * @import"@/assets/scss/globalVariable2.scss";'
         **/
        additionalData: '@import "@/style/color.scss";'
      }
    }
  },
  publicPath: './',
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080', //后台服务所在的源  *注：localhost:81中的81为端口，localhost为域名
        changeOrigin: true, //修改源 是否跨域
        rewrite: (path) => path.replace(/^\/api/, '') // /api替换为''
      }
    },
    port: 3434
  }
})
