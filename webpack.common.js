/* global require module __dirname */

const sourceDir = "src";
const outputDir = "build";

const path = require("path");

const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageDetails = require("./package.json");

const clean = new CleanWebpackPlugin([outputDir]);
const copy = new CopyWebpackPlugin([
  {
    from: `${sourceDir}/manifest.json`,
    transform: (content, path) =>
      content
        .toString()
        .replace(/#version#/g, packageDetails.version)
        .replace(/#description#/g, packageDetails.description),
  },
  {
    from: `${sourceDir}/icons`,
    to: "icons",
  },
  {
    from: `${sourceDir}/styles`,
    to: "styles",
  },
  {
    from: `${sourceDir}/popup.html`,
    to: "popup.html",
  },
]);
const extractCSS = new ExtractTextPlugin("styles/styles.css");
const optimizeCSS = new OptimizeCssAssetsPlugin();
const html = new HtmlWebpackPlugin({
  template: `${sourceDir}/popup.html`,
});

module.exports = {
  mode: "development",
  entry: {
    popup: `./${sourceDir}/scripts/popup.js`,
    content: `./${sourceDir}/scripts/content.js`,
    background: `./${sourceDir}/scripts/background.js`,
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
            publicPath: "../",
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
            publicPath: "../",
          },
        },
      },
      {
        test: /\.(less|css)$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
            },
            {
              loader: "less-loader",
            },
          ],
        }),
      },
    //   {
    //       test: /\.js$/,
    //       enforce: 'pre',
    //       exclude: /node_modules/,
    //       loader: 'eslint-loader'
    //   },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [clean, copy, extractCSS, optimizeCSS, html],
  output: {
    filename: "scripts/[name].js",
    path: path.resolve(__dirname, outputDir),
    publicPath: "",
  },
};
