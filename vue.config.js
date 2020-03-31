module.exports = {
  devServer: {
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      '/api': {
        target: 'http://micromes.net:8090',
        changeOrigin: true, // so CORS doesn't bite us. 
      },
      '/auth': {
        target: 'http://micromes.net:8091',
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
