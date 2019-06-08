module.exports = (api) => {
  console.log('babel.config.js loaded');

  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    "plugins": [
      '@babel/plugin-proposal-class-properties'
    ],
    env: {
      build: {
        ignore: [
        ],
      },
    },
    ignore: ['node_modules'],
    babelrcRoots: [
      '.',
      'packages/*',
      'services/*',
    ],
  };
};
