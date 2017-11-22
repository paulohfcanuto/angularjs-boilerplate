const webpack = require('webpack');

const WebpackChunkHash = require('webpack-chunk-hash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    output: {
        filename: '[name].[chunkhash].min.js'      
    },

    module: {
        rules: [
            { test: /\.css$/, use: [
                'style-loader',
                'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}}
            ], exclude: [ /node_modules/, /src\\global.css/ ]},
            { test: /\.scss$/, use: [
                'style-loader',
                'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                'sass-loader',
                { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}}
            ], exclude: [ /node_modules/, /src\\global.css/ ]},
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true'
                ]}), 
                include: [ /node_modules/ ]
            },
            {
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}}
                ]}), 
                include: [ /src\\global.css/ ]                
            }
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: [ 'main' ],
            minChunks: (module) => {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }            
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new UglifyJsPlugin()

    ]

};
