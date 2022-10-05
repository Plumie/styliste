const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'styliste.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      files: ["./**/*.html", "./**/*.js", "./**/*.scss"],
      port: 3333,
      server: { baseDir: ['dist'] }
    }),
    new MiniCssExtractPlugin()
  ],
};
