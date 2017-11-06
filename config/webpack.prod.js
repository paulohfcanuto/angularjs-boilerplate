const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// plugins
const WebpackChunkHash = require('webpack-chunk-hash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// common config
const common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_URL = process.env.API_URL = '';
const PUBLIC_PATH = '';
const OUTPUT_PATH = path.resolve(__dirname, './../dist');

module.exports = webpackMerge(common.config, {

  output: {
    filename: '[name].[chunkhash].js',
    publicPath: PUBLIC_PATH,
    path: OUTPUT_PATH,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap=false&importLoaders=1&minimize=true',
          { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' } } },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap=false&importLoaders=1&minimize=true',
          'sass-loader',
          { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' } } },
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV),
        API_URL: JSON.stringify(API_URL),
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new UglifyJsPlugin(),

  ],

  devServer: {
    contentBase: OUTPUT_PATH,
  },

});
