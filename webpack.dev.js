// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Inline CSS for faster reload
      },
    ],
  },

  devServer: {
    watchFiles: ["./src/template.html"],
    hot: true,
    open: true, 
  },
});
