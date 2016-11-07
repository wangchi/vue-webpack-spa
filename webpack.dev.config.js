/**
 * Webpack Development Config
 */

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  publicPath: 'http://127.0.0.1:3001/'
};

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: './dist',
    publicPath: config.publicPath,
    filename: 'build.js'
  },
  devServer: {
    port: 3001,
    inline: true,
    hot: true,
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
    new ExtractTextPlugin('build.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};