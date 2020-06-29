const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body",
})
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: "src/404.html" },
  { from: "src/sitemap.html" },
  { from: "src/sitemap.xml" },
  { from: "src/robots.txt" },
])

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig],
}
