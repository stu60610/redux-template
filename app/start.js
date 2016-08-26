import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.dev.js';

const debug = require('debug')('redux-template:start');

const app = express();
const PORT = process.env.PORT || 8080;
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));
app.use(webpackHotMiddleware(compiler));
app.use((req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.listen(PORT, (err) => {
  if (err) {
    debug(err);
    console.error(err);
  } else {
    console.info('redux-template dev site listening on port %s', PORT);
  }
});
