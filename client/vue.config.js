const path = require('path')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
      }
    }
  },
  css: {
      loaderOptions: {
          // pass options to sass-loader
          sass: {
              includePaths: ['./node_modules']
          }
      }
  },
  devServer: {
      disableHostCheck: true
  }
}
