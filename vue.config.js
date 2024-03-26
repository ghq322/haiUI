module.exports = {
    outputDir: 'dist',
    publicPath: '/',
    // 配置scss文件全局变量
    css: {
      loaderOptions: {
        // 没有分号会报错
        less: {
          // data: '@import "@/assets/css/vars.scss";' //旧版sass-loader写法(8.0以下)
          prependData: `@import "@/assets/styles/global.less";` //新版scss-loader(8.0及以上)
        }
      }
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      }
  }