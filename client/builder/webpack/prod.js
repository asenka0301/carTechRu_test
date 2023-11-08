/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CONFIG: JSON.stringify(
          {
            API_BASEPATH: process.env.API_BASEPATH,
            IMAGES_BASEPATH: process.env.IMAGES_BASEPATH,
            POLLING_INTERVAL: process.env.POLLING_INTERVAL,
          },
        ),
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
});
