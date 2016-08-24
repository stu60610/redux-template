import path from 'path';
import webpack from 'webpack';

import config from './webpack.config.base.js';

const devConfig = {
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    path.join(__dirname, './app.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: "'http://api.starbucks.rytass.com'",
      ENV: "'__DEV__'",
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};

export default Object.assign({}, config, devConfig);
