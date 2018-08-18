const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJspugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new UglifyJspugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      title: "vue start kit production",
      template: "public/index.html"
    })
  ],
  mode: "production"
});
