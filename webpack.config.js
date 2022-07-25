const path = require("path");
const webpack = require("webpack");
const postCssConfig = require('./postcss.config');

module.exports = (env) => {
  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                url: true,
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  ...postCssConfig,
                  config: false,
                },
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg|png|jpg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 100000,
            },
          },
        },
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src/utils/adapterServices.js'),
          ],
          loader: 'string-replace-loader',
          options: {
            search: '__BROKER_ADAPTERS__',
            replace: `../adapters/brokerA`,
            flags: 'g',
          },
        },
      ],
    },
    resolve: { extensions: ["*", ".js", ".jsx", ".tsx"] },
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
