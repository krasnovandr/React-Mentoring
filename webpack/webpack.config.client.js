const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'client',
    target: 'web',
    devtool: "inline-source-map",
    entry: "./src/index.tsx",

    module: {
        rules: [{
            test: /\.css$/,
            include: /src/,
            use: [
                isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]-[hash:5]',
                    }
                },
            ],
        },],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ]
});