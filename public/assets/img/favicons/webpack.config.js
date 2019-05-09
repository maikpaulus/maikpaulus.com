const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: __dirname + "/client",
    entry: './App.js',
    output: {
        path: __dirname + '/public/assets/js/',
        filename: 'app.min.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s(a|c)ss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader',
                exclude: /public/
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
    ],

    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            extractComments: true,
            cache: true,
            parallel: true
          })
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'vendors.min.js',
                    chunks: 'all'
                }
            }
        }
    }
};