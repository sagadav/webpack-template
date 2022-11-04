const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const paths = require('./paths');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: paths.entryPath,
  resolve: {
    modules: ["node_modules", "lib", "src"],
    extensions: ["*", ".js", ".jsx", ".css", ".scss"],
    alias: {
      "lib": paths.lib,
      "@": paths.src,
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: "esbuild-loader",
      //   options: {
      //     loader: "jsx",
      //     target: "es2015"
      //   }
      // },
    ]
  },
  output: {
    path: paths.output,
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // auto-import React
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: paths.template })
  ],
};