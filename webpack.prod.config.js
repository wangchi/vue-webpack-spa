/**
 * Webpack Production Config
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
  publicPath: 'http://127.0.0.1:3000/'
};

module.exports = {
  entry: {
    vendor: ['vue', 'vue-router', 'vuex'],
    client: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: config.publicPath,
    filename: 'static/[name].[chunkhash:8].bundle.js',
    chunkFilename: 'static/[name].[chunkhash:8].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue?$/,
        loader: 'vue-loader'
      },
      {
        test: /\.styl?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  mode: 'production',
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCssAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'static/[name].[contenthash:8].bundle.css',
      chunkFilename: 'static/[name].[contenthash:8].bundle.css'
    })
  ]
};
