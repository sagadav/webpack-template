const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const paths = require('./webpack/paths.js');
const common = require('./webpack/webpack.common.js');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: 'static/js/[name].[contenthash:8].bundle.js',
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js"
  },
  module: {
    rules: [
      // css modules
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[hash:base64]"
              },
            }
          },
          {
            loader: "sass-loader",
            options: {}
          }
        ],
      },
      // global css
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
            }
          },
          {
            loader: "sass-loader",
            options: {
            }
          }
        ],
        exclude: /\.module\.(sa|sc|c)ss$/,
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].chunk.css"
    }),
  ],
  optimization: {
    // usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
        },
        parallel: true,
      })
    ]
  }
})