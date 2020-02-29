module.exports = {
  devServer: {
    port: 3001,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8091'
      }
    }
  },
  configureWebpack: {
    entry: {
      app: './src/main.js',
      style: [
        'bootstrap/dist/css/bootstrap.min.css'
      ]
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}
