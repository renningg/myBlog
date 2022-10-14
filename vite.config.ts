import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// 引入


// import pxtoViewPort from 'postcss-px-to-viewport'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // css: {
  //   postcss: {
  //     plugins: [
  //       pxtoViewPort({
  //         unitToConvert: 'px', //要转换的单位
  //         viewportWidth: 750,  // UI设计稿的宽度
  //         unitPrecision: 6, // 转换后的精度，即小数点位数
  //         propList: ['*'], //指定转换的css属性单位， *代表全部css属性的单位都进行转换
  //         viewportUnit: 'vw', //指定需要转换成的视窗单位，默认vw
  //         fontViewportUnit: 'vw', //指定字体需要转换成的视窗单位， 默认vw
  //         selectorBlackList: ['ignore-'], //指定不转换为视窗单位的类名
  //         minPixelValue: 1, //默认值1， 小于或等于1px则不进行转换
  //         mediaQuery: true, //是否在媒体潮汛的css代码中也进行转换，默认false
  //         replace: true, //是否转换后直接更换属性值
  //         landscape: false, //是否处理横批情况
  //       })
  //     ]
  //   }
  // }, //移动端配置


  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})

