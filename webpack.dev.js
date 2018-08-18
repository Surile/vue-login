const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    hot: true
  },
  mode: "development",
  plugins: [new webpack.NamedModulesPlugin()]
});
