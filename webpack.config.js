var path = require('path');
var webpack = require('webpack');

/*
  webpack embeds stylesheets into the JS bundle.
  ExtractTextPlugin will extract the compiled CSS
  into a separate file (bundle.css).

  See https://webpack.github.io/docs/stylesheets.html#separate-css-bundle
      http://stackoverflow.com/questions/32211231/webpack-sass-loader-no-output-css-file
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
        exclude: /node_modules/
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src')]
  },
  plugins: [
    new ExtractTextPlugin(path.join('../', 'css', 'bundle.css'))
  ]
};