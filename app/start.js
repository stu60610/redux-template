import config from './webpack.config.dev.js';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const debug = require('debug')('redux-template:start');
const app = new express();
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

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function(error) {
  if (error) {
    debug(error);
    console.error(error);
  } else {
    console.info('redux-template dev site listening on port %s', PORT)
  }
});
