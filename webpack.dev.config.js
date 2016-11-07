/**
 * Webpack Development Config
 */

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
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
    inline: true,
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.vue?$/,
      loader: 'vue'
    }, {
      test: /\.styl?$/,
      loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
    }],
    vue: {
      loaders: {
        js: 'babel'
      }
    }
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
};
