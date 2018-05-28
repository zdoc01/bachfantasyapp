const path = require('path');
const webpack = require('webpack');

/*
  webpack embeds stylesheets into the JS bundle.
  MiniCssExtractPlugin will extract the compiled CSS
  into a separate file (bundle.css).

  See https://github.com/webpack-contrib/mini-css-extract-plugin
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '../src/js/index.js'),
  output: {
    path: path.join(__dirname, '../server', 'public'),
    filename: 'js/bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    })
  ],
  devtool: 'source-map' // generate source-maps for debugging in devtools
};
