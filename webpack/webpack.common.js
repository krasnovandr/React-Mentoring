const path = require("path");
const webpack = require("webpack");

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {

    mode: process.env.NODE_ENV,

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [{
                    loader: "file-loader",
                    options: {}
                }]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx", '.tsx', '.ts',] },

    output: {
        path: path.resolve('./public'),
        filename: "bundle.js"
    },
    plugins: [
        isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
    ],
};