/* eslint "fp/no-mutation": ["error", {"commonjs": true}] */

const path = require('path');

const joinToDirname = pth => path.join(__dirname, pth);

module.exports = {
  cache: true,

  entry: {
    index: joinToDirname('/src/index.js'),
    'lib/luch': joinToDirname('/src/lib/luch.js'),
    'lib/luch-for': joinToDirname('/src/lib/luch-for.js'),
    'lib/utils': joinToDirname('/src/lib/utils.js'),
  },
  output: {
    path: joinToDirname('/dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
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
