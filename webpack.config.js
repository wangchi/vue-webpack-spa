module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './app.js'
  ],
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  devServer: {
    port: 3001,
    inline: true
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.vue?$/,
      loader: 'vue'
    }],
    vue: {
      loaders: {
        js: 'babel'
      }
    }
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  }
};
