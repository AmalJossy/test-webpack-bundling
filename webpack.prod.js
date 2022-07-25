const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.config");

module.exports = (env) => {
  return merge(common(env), {
    mode: "production",
    // mode: "development",
    optimization: {
      usedExports: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js$/,
          extractComments: "all",
          terserOptions: {
            sourceMap: true,
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
    },
  });
};
