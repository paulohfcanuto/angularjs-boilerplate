// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// constants
const APP_NAME = 'My App';

exports.config = {

  entry: {
    main: './src/main.js',
  },

  output: {
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/, loader: 'babel-loader', options: { presets: ['es2015'] }, exclude: /node_modules/,
      },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.(eot|svg)$/,
        loader: 'file-loader?name=assets/[name].[hash:20].[ext]',
      },
      {
        test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
        loader: 'url-loader?name=assets/[name].[hash:20].[ext]&limit=10000',
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }), include: /node_modules/ },
    ],
  },

  plugins: [

    new HtmlWebpackPlugin({
      title: APP_NAME,
      template: './config/index.template.ejs',
      chunksSortMode: 'dependency',
    }),

    new ExtractTextPlugin('styles.css'),

  ],

  devServer: {
    stats: 'minimal',
    port: 3000,
    watchOptions: {
      ignored: '**/*.spec.ts',
    },
  },

  stats: {
    assets: true,
    children: false,
    errors: true,
    errorDetails: true,
    modules: false,
    warnings: false,
  },

};
