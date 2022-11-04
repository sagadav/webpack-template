const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./webpack/paths.js');
const common = require('./webpack/webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: paths.public,
    port: 8080,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  output: {
    filename: 'static/js/bundle.js',
    chunkFilename: "static/js/[name].chunk.js"
  },
  module: {
    rules: [
      // css modules
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]"
              },
              sourceMap: true,
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }
        ],
      },
      // global css
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }
        ],
        exclude: /\.module\.(sa|sc|c)ss$/,
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
        },
        parallel: true,
      })
    ]
  }
})