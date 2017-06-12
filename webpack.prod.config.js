/**
 * Webpack Production Config
 */

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  publicPath: 'http://127.0.0.1:3000/'
};

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: config.publicPath,
    filename: 'static/[name].[chunkhash:8].js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue?$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: 'vue-style-loader!css-loader',
          stylus: 'vue-style-loader!css-loader!stylus-loader'
        },
        postLoaders: {
          html: 'babel-loader'
        }
      }
    }, {
      test: /\.styl?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }, {
          loader: 'stylus-loader'
        }]
      })
    }]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true
    }),
    new webpack.DefinePlugin({
      'process_env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('static/[name].[contenthash:8].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};
