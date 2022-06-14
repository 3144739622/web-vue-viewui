const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const { NODE_ENV, VUE_APP_TITLE = '' } = process.env

const config = {
  lintOnSave: true,
  transpileDependencies: false,
  productionSourceMap: NODE_ENV === 'production',
  chainWebpack: (setting) => {
    setting.plugin('html').tap((args) => {
      args[0].APP_TITLE = VUE_APP_TITLE
      return args
    })
  },
  configureWebpack: config => {
    // 调试JS
    config.devtool = "source-map";
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/styles/variable.less')
      ]
    }
  },
  devServer: {
    open: true,
    port: 8080,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'https://localhost:8080',
        changeOrigin: true
      }
    }
  }
}

module.exports = defineConfig(config)
