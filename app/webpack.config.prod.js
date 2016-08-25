const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');

const prodConfig = {
  entry: [
    'eventsource-polyfill',
    path.join(__dirname, './app.js'),
  ],
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: "'http://api.host.com'",
      ENV: "'__PROD__'",
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};

module.exports = Object.assign({}, config, prodConfig);
