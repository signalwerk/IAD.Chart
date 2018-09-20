var path = require("path");
var srcPath = path.join(__dirname, "src");
var buildPath = path.join(__dirname, "public");

module.exports = {
  entry: ["./src/main.js"],
  output: {
    filename: "bundle.js",
    path: buildPath
  },
  devtool: "source-map",
  devServer: {
    contentBase: "public"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
