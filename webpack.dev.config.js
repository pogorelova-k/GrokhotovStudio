const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'development',
    devServer: {
        open: false,
        port: 8080,
        hot: false,
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    },
                },
                exclude: /node_modules/,
            }
        ]
    }
};
