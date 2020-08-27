// vue.config.js
const webpack = require('webpack');
module.exports = {
  transpileDependencies: ['vue-class-component'],
  configureWebpack: {
  },
  chainWebpack: config => {
    config
      .entry('index')
      .add('@babel/polyfill')
      .end();
    const scssRes = config.module.rule('scss').oneOfs.store;
    scssRes.forEach(item => {
      item
      .use("sass-resource-loader")
        .loader('sass-resources-loader')
        .options({
          resources: './src/assets/css/_variable.scss'
        }).end();
    })
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `@import "@/assets/_variable.scss";`
  //     },
  //   }
  // },
  publicPath: '/' + 'motion',
  outputDir: "dist",
  assetsDir: 'static',
  devServer: {
    host: '127.0.0.1',
    port: 53250,
    https: false
  }
}