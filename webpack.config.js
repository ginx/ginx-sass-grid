const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: 'assets/[name].[contenthash].css',
    // disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  devServer: {
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ginx Sass Grid',
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        include: ['app.js'],
        exclude: ['vendor.js'],
        columns: false
    }),
    extractSass
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }
        ],
        fallback: "style-loader"
      })
    }]
  }
};
