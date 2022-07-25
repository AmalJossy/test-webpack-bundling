module.exports = (api) => {
  const config = {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: "3",
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        'react-css-modules',
        {
          autoResolveMultipleImports: true,
          generateScopedName: '[name]__[local]__[hash:base64:5]',
          handleMissingStyleName: 'warn',
          webpackHotModuleReloading: true,
        },
      ],
    ],
  };
  api.cache(true);

  return config;
};
