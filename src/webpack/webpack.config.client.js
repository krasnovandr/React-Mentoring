const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  // mode: "development",
  target: 'web',
  devtool: "eval-source-map",
  entry: "./src/index.js",
  // devServer: {
  //   contentBase: path.join(__dirname, "public/"),
  //   port: 3000,
  //   publicPath: "/",
  //   hotOnly: true,
  //   historyApiFallback: true,
  // },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
