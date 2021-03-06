const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const Copy = require("copy-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const MODE = process.env.NODE_ENV || "development";
const IS_DEV_MODE = MODE === "development";
const DEV_PORT = 8080;

const config = {
  mode: MODE,
  entry: {
    main: "./src/main.tsx"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist")
  },
  plugins: [
    new Copy([
      {
        from: 'public/index.html'
      }
    ]),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(MODE)
      }
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      'assets': path.resolve(__dirname, 'assets'),
    }
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "awesome-typescript-loader",
          options: {
            configFileName: "./tsconfig.json"
          }
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ["url-loader?limit=100000"]
      }
    ]
  }
};

const devConfig = {
  // entry: {
  //   "hot-loader": [
  //     "react-hot-loader/patch",
  //     `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
  //     "webpack/hot/only-dev-server"
  //   ]
  // },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    // host: '0.0.0.0',
    // disableHostCheck: true,
    // hot: true,
    port: DEV_PORT,
    historyApiFallback: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
    // ,new webpack.HotModuleReplacementPlugin()
  ]
};

const prdConfig = {};

module.exports = merge(config, IS_DEV_MODE ? devConfig : prdConfig);