const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js",
    },
    devServer: {
      client: {
        progress: true,
        webSocketURL: {
          hostname: "localhost",
        },
      },
      host: "0.0.0.0",
      port: 8004,
      historyApiFallback: true,
      compress: true,
    },
  };
};
