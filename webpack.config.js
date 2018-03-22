/* eslint "fp/no-mutation": ["error", {"commonjs": true}] */

const path = require('path');

const joinToDirname = pth => path.join(__dirname, pth);

module.exports = {
  cache: true,

  entry: {
    luch: joinToDirname('/src/luch.js'),
  },
  output: {
    path: joinToDirname('/dist'),
    filename: '[name].js',
    library: 'library',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: JSON.stringify({
          presets: ['env'],
        }),
      },
    ],
  },

  externals: [
    {
      'isomorphic-fetch': {
        root: 'isomorphic-fetch',
        commonjs2: 'isomorphic-fetch',
        commonjs: 'isomorphic-fetch',
        amd: 'isomorphic-fetch',
      },
    },
    {
      'form-data': {
        root: 'form-data',
        commonjs2: 'form-data',
        commonjs: 'form-data',
        amd: 'form-data',
      },
    },
  ],

  stats: {
    children: false,
  },
};
