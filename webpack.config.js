var path = require("path");
var webpack = require("webpack");
var merge = require("merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

if (process.env.NODE_ENV === "production") {
  webpackConfig = merge(webpackConfig, {
    devtool: "source-map",
    entry: ["./src/index.js"],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: "babel",
          exclude: /node_modules/,
          include: __dirname
        },
        { test: /\.(png|jpg|gif|jpeg)$/, loader: "url-loader?limit=8192" },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader?sourceMap"
          )
        },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/octet-stream"
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&minetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
          BROWSER: JSON.stringify(true)
        }
      }),
      new ExtractTextPlugin("app.css"),
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
  });
} else {
  webpackConfig = merge(webpackConfig, {
    devtool: "inline-source-map",
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: "babel",
          exclude: /node_modules/,
          include: __dirname,
          query: {
            optional: ["runtime"],
            stage: 2,
            env: {
              development: {
                plugins: ["react-transform"],
                extra: {
                  "react-transform": {
                    transforms: [
                      {
                        transform: "react-transform-hmr",
                        imports: ["react"],
                        locals: ["module"]
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        { test: /\.(png|jpg|gif|jpeg)$/, loader: "url-loader?limit=8192" },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/octet-stream"
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&minetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        }
      ]
    },
    entry: ["webpack-hot-middleware/client", "./src/client/index.js"],
    plugins: [new webpack.HotModuleReplacementPlugin()]
  });
}

module.exports = webpackConfig;
