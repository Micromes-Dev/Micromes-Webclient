module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/': {
        target: 'http://micromes.net:8090',
        changeOrigin: true, // so CORS doesn't bite us. 
        
      },
    }
  },

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: false
    }
  }
}
