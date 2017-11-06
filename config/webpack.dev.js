const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// common config
const common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const API_URL = common.apiUrl;
const OUTPUT_PATH = path.resolve(__dirname, './../dev');

module.exports = webpackMerge(common.config, {

  output: {
    filename: '[name].bundle.js',
    publicPath: '',
    path: OUTPUT_PATH,
    pathinfo: true, // devtool: eval
  },

  devtool: 'eval',

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV),
        API_URL: JSON.stringify(API_URL),
      },
    }),
  ],

  devServer: {
    contentBase: OUTPUT_PATH,
  },

});
