const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader" /** Third -> Injects styles into DOM*/,
          "css-loader" /** Second -> Tunrs css into commonjs*/,
          "sass-loader" /** First -> Turns sass into css */,
        ],
      },
    ],
  },
});
