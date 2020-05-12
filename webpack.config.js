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
  entry: "./src/index.js",
  devServer: {
    contentBase: "dist",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
        include: /flexboxgrid/,
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig],
}
