var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common')

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js',
        chunckFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader', options: {
                            transpileOnly: true
                        }
                    },
                    {
                        loader: 'angular2-template-loader', options: {
                            transpileOnly: true
                        }
                    },
                ]
            }
        ]
    }
})