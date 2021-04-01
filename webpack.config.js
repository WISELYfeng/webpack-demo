const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename:'[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: 'My App',
            template: 'src/assets/index.html'
        }
    )],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
    }
};


