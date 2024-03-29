import webpack from "webpack";
import path from "path";

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("development"),
  __DEV__: true
};

export default {
  debug: true,
  devtool: "cheap-module-eval-source-map", // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: ["webpack-hot-middleware/client?reload=true", "./src/index"],
  target: "web", // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader?cacheDirectory",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader?cacheDirectory",
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.css?$/, loaders: ["style", "css"] },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=image/svg+xml"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/octet-stream"
      },
      { test: /\.ico$/, loader: "file-loader?name=[name].[ext]" },
      { test: /\.(jpe?g|png|gif)$/i, loaders: ["file"] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".css"]
  }
};
