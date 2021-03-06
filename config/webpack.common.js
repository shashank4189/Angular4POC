/**
 * Created by shashank on 4/7/17.
 */

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const  ExtractTextPlugin = require("extract-text-webpack-plugin");
const helpers =  require("./../helpers");


module.exports = {
  entry: {
    "app": "./src/main.ts",
    "vendor": "./src/vendor.ts",
    "polyfills": "./src/polyfills.ts",
  },

  resolve: {
    extensions: [
      ".js", ".ts"
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [ "ts-loader?configFileName=config/tsconfig.json", "angular2-template-loader" ]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.pug$/,
        use: [ "raw-loader", "pug-html-loader" ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [ "raw-loader", "sass-loader" ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
        use: "file-loader?name=assets/[name].[hash].[ext]"
      },
      {
        test: /\.css$/,
        exclude: helpers.root("src", "app"),
        use: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader?sourceMap" })
      },
      {
        test: /\.css$/,
        include: helpers.root("src", "app"),
        use: "raw-loader"
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: [ "app","vendor","polyfills" ]
    }),

    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),

    // Workaround for Angular-SystemJS-Webpack(2) WARNINGS
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('src'), // location of your src
      {
        // your Angular Async Route paths relative to this root directory
      }
    )
  ]
};


