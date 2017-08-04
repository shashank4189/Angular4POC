/**
 * Created by shashank on 4/7/17.
 */
const webpackMerge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonConfig = require("./webpack.common.js");
const helpers = require("./../helpers");
const path = require("path");

module.exports = webpackMerge(commonConfig, {
  devtool: "cheap-module-eval-source-map",

 /* output: {
    path: helpers.root("dist"),

    publicPath: "http://localhost:1220/",
    filename: "[name].js",
    chunkFilename: "[id].chunk.js"
  },*/
    output: {
        path: path.join(  __dirname,'/dist'),
        filename: "[name].js",
    },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],

  devServer: {
    historyApiFallback: true,
    stats: "minimal"/*,
     TODO setup when REST service ready
     proxy: {
     "/api/**": {
     target: "http://localhost:8080/nurdbot-rest-service",
     secure: false,
     changeOrigin: true
     }
     }*/
  }
});
