import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, } from "path";
const path = require('path')
const fs = require('fs')
export default defineConfig(({ command, mode }) => {
  // https://vitejs.dev/config/#environment-variables
  //https://vitejs.dev/config/#base
  //加载环境变量，打包路由路径
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // 打包路径
    base: env.VITE_BASEURL,
    plugins: [react()],
    // 配置路径
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
    },
    //代理路径
    server: {
      hostname: '0.0.0.0',
      port: 3003,
      cors: true,
      proxy: {
        '/admin': 'http://localhost:8080'
      },
    }
  }
})


