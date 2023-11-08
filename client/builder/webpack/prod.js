/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./common');
const envFile = require('../env/dev.json');

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CONFIG: JSON.stringify(envFile),
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
});
