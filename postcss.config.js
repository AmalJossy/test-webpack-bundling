module.exports = (broker) => {
    return ({
      plugins: [
        require('postcss-import'),
        // require('postcss-custom-media')({
        //   importFrom: './node_modules/@smallcase/shringar/resolutions.css',
        // }),
        require('postcss-mixins'),
        require('postcss-nested'),
        // require('postcss-simple-vars')({
        //   variables: colors,
        // }),
        require('postcss-flexbugs-fixes'),
        // require('postcss-custom-properties')({
        //   importFrom: [
        //     './node_modules/@smallcase/shringar/variables.css',
        //     `./src/adapters/${broker}/variables/variables.css`,
        //   ],
        //   preserve: false,
        // }),
        require('cssnano')({
          preset: 'default',
        }),
        require('autoprefixer')({
          flexbox: 'no-2009',
        }),
      ],
    });
  };