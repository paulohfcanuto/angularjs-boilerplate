module.exports = {
    
        output: {
            filename: '[name].bundle.js',
            pathinfo: true // devtool: eval
        },
    
        devtool: 'eval',
    
        module: {
            rules: [
                { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
                { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] }
            ]
        }
    
    };
    